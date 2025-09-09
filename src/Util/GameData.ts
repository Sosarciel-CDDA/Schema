import { memoize, UtilFT } from "@zwa73/utils";
import { GAME_PATH } from "./Define";
import { AnyCddaJson, Time, Volume, Weight } from "Schema/GenericDefine";


type VaildJson = Extract<AnyCddaJson,{id:string,type:string}>&{
    mod_source?:string;
    abstract?:string;
    fixed_id:string;
    'copy-from'?:string;
};

let DataMap:Record<string,Record<string,VaildJson>>|undefined = undefined;

const getModInfo = async (filepath:string)=>{
    const infopath = filepath.replace(/data\/mods\/([^/]+)\/.+$/,'data/mods/$1/modinfo.json');
    const file = await memoize(UtilFT.loadJSONFile)(infopath) as any[];
    const info = file.find(v=>v.type=="MOD_INFO");
    if(info==undefined) return undefined;
    return info.id as string|undefined;
};

const loadData = async ()=>{
    if(DataMap) return DataMap;
    const filelist    = await UtilFT.fileSearchGlob(GAME_PATH,'data/json/**/*.json');
    const modfilelist = await UtilFT.fileSearchGlob(GAME_PATH,'data/mods/**/*.json');
    DataMap = {};
    const procFn = (data:VaildJson,source?:string)=>{
        const type = data.type;
        data.fixed_id = data.abstract ? data.abstract : data.id;
        if(data['copy-from'] == data.fixed_id)
            delete data['copy-from'];
        const id = data.fixed_id;
        if(!type || !id || typeof type != "string" || typeof id != "string") return;
        if(source) data.mod_source = source;
        return data;
    }
    await Promise.all(filelist.map(async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as VaildJson[];
        if(!Array.isArray(jsonlist)) return;
        jsonlist.forEach(v=>{
            const data = procFn(v);
            if(!data) return;
            DataMap![data.type]??={};
            DataMap![data.type][data.fixed_id] = data;
        });
    }))
    await Promise.all(modfilelist.map(async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as VaildJson[];
        if(!Array.isArray(jsonlist)) return;
        const source = await getModInfo(fp);
        if(!source) return;
        jsonlist.forEach(v=>{
            const data = procFn(v,source);
            if(!data) return;
            DataMap![data.type]??={};
            DataMap![data.type][data.fixed_id] = data;
        });
    }));
    return DataMap;
}


export async function getGameData
    <T extends VaildJson["type"]>(type:VaildJson["type"],id:string):
    Promise<Extract<VaildJson,{type:T}>|undefined>{
    await loadData();
    return DataMap![type]?.[id] as any;
}

export async function getGameDataList
    <T extends VaildJson["type"]>(type:T):
    Promise<Extract<VaildJson,{type:T}>[]>{
    await loadData();
    return Object.values(DataMap![type] ?? {}) as any;
}

export async function expandCopyFrom<T extends VaildJson>(data:T):Promise<T>{
    if((data as any)['copy-from']==undefined) return data;
    await loadData();
    const type = data.type;
    const id = data.fixed_id;
    if(!type || !id || typeof type != "string" || typeof id != "string")
        throw "必须要字符串类型id与type才能展开copyfrom";
    const expandFn = (curr:VaildJson,stack=0)=>{
        if(stack>10) return curr;
        const copyfromId = (curr as any)['copy-from'];
        if(!copyfromId) return curr;
        let copyfromData = DataMap![type]?.[copyfromId];
        if(!copyfromData){
            console.log(`找不到 ${type}:${(curr as any).id} copyfrom的目标 ${copyfromId}, 已返回空数据`);
            copyfromData = {} as any;
        }
        const cloneC = {...curr} as any;
        delete (cloneC as any)['copy-from'];
        const cloneP = {...copyfromData} as any;
        delete (cloneP as any)['abstract'];
        return expandFn(Object.assign({},cloneP,cloneC),stack++);
    }
    return expandFn(data) as any;
}



/** 通用单位解析器：将复合单位字符串转换为最小单位数值 */
export function parseUnitString(
    value: string | number | undefined,
    units: Record<string, number>
): number {
    if (value == undefined) return 0;
    if (typeof value === "number") return value;
    if (!isNaN(Number(value))) return Number(value);

    let total = 0;
    const regex = /([\d.]+)\s*(\w+)/g;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(value)) !== null) {
        const [, numStr, unit] = match;
        const num = parseFloat(numStr);
        const multiplier = units[unit];

        if (multiplier == undefined)
            throw new Error(`未知单位: ${unit}`);

        total += num * multiplier;
    }
    return total;
}
const weightUnits = { mg: 1, g: 1000, kg: 1_000_000 };
const volumeUnits = { ml: 1, L: 1000 };

/** 将 Weight 转换为毫克数值 */
export function parseWeight(value?: Weight): number {
    return parseUnitString(value, weightUnits);
}

/** 将 Volume 转换为毫升数值 */
export function parseVolume(value?: Volume): number {
    return parseUnitString(value, volumeUnits);
}
/** 时间单位映射：所有单位转为秒 */
const timeUnits: Record<string, number> = {
    s: 1, second: 1, seconds: 1,
    t: 1, turn: 1, turns: 1,
    m: 60, minute: 60, minutes: 60,
    h: 3600, hour: 3600, hours: 3600,
    d: 86400, day: 86400, days: 86400,
};

/** 通用单位解析器：将复合单位字符串转换为秒数 */
export function parseTime(value?: Time): number {
    return parseUnitString(value, timeUnits);
}
