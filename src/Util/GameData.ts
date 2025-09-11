import { memoize, UtilFT } from "@zwa73/utils";
import { GAME_PATH } from "./Define";
import { AnyCddaJson, Time, Volume, Weight } from "Schema/GenericDefine";
import path from "pathe";
import fs from 'fs';


/**通用的cddajson数据 */
type CommonJson = Extract<AnyCddaJson,{id:string,type:string}>&{
    mod_source?:string;
    abstract?:string;
    /**便于索引抽象物品的id */
    fixed_id:string;
    'copy-from'?:string;
};
type DataTable = Record<string,Record<string,CommonJson>>;

/**获取mod元数据 */
export const loadModMetadata = memoize(async ()=>{
    const dirlist = await fs.promises.readdir(path.join(GAME_PATH,'data','mods'),{withFileTypes:true});
    const metadataMap:Record<string,string> = {};
    //加载mod
    await Promise.all(dirlist.map(async ftoken=>{
        if(!ftoken.isDirectory()) return;
        const fp = path.join(GAME_PATH,'data','mods',ftoken.name);
        const modinfo = await UtilFT.loadJSONFile(path.join(fp,'modinfo.json')) as AnyCddaJson[];
        const modid = modinfo.find(v=>v.type=="MOD_INFO")?.id;
        if(modid) metadataMap[modid] = fp;
    }));
    //设置核心
    metadataMap['dda'] = path.join(GAME_PATH,'data','json');
    return metadataMap;
});

/**获取mod数据 */
export const loadModDataTable = memoize(async (modid:string)=>{
    const metadata = await loadModMetadata();
    const modpath = metadata[modid];
    if(!modpath) throw `找不到mod ${modid} 的数据`;
    const filelist = await UtilFT.fileSearchGlob(modpath,'**/*.json');

    const procFn = (data:CommonJson,modid?:string)=>{
        const type = data.type;
        data.fixed_id = data.abstract ? data.abstract : data.id;
        if(data['copy-from'] == data.fixed_id)
            delete data['copy-from'];
        const id = data.fixed_id;
        if(!type || !id || typeof type != "string" || typeof id != "string") return;
        if(modid) data.mod_source = modid;
        return data;
    }

    const dataMap:DataTable = {};
    await Promise.all(filelist.map(async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as CommonJson[];
        if(!Array.isArray(jsonlist)) return;
        jsonlist.forEach(v=>{
            const data = procFn(v,modid=="dda" ? undefined : modid);
            if(!data) return;
            dataMap[data.type]??={};
            dataMap[data.type][data.fixed_id] = data;
        });
    }));
    return dataMap;
});


export class GameDataTable{
    private _dataTable:DataTable;
    constructor(dataTable:DataTable){
        this._dataTable = dataTable;
    }

    /**获取某个id的数据 */
    async getGameData
    <T extends CommonJson["type"]>(type:CommonJson["type"],id:string):
    Promise<Extract<CommonJson,{type:T}>|undefined>{
        return this._dataTable[type]?.[id] as any;
    }

    /**获取某个类型的全部数据 */
    async getGameDataList
    <T extends CommonJson["type"]>(type:T):
    Promise<Extract<CommonJson,{type:T}>[]>{
        return Object.values(this._dataTable[type] ?? {}) as any;
    }

    /**展开copyfrom字段 */
    expandCopyFrom<T extends CommonJson>(data:T):T{
        if((data as any)['copy-from']==undefined) return data;
        const type = data.type;
        const id = data.fixed_id;
        if(!type || !id || typeof type != "string" || typeof id != "string")
            throw "必须要字符串类型id与type才能展开copyfrom";
        const expandFn = (curr:CommonJson,stack=0)=>{
            if(stack>10) return curr;
            const copyfromId = (curr as any)['copy-from'];
            if(!copyfromId) return curr;
            let copyfromData = this._dataTable[type]?.[copyfromId];
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
}

/**获取某个加载顺序的数据 */
export const loadGameDataTable = async (...mods:string[])=>{
    if(mods[0]=="*") mods = ['dda',...Object.keys(await loadModMetadata()).filter(v=>v!="dda")];
    const datamapList = await Promise.all(mods.map(loadModDataTable));
    const mgr:DataTable = {};
    for(const datamap of datamapList){
        Object.entries(datamap).forEach(([type,submap])=>{
            mgr[type]??={};
            Object.assign(mgr[type],submap);
        });
    }
    return new GameDataTable(mgr);
};



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
