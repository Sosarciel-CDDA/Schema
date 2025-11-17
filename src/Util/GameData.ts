import { deepClone, memoize, PromiseQueue, UtilFT } from "@zwa73/utils";
import { GAME_PATH } from "./Define";
import { AnyCddaJson, Price, Time, Volume, Weight } from "Schema/GenericDefine";
import path from "pathe";
import fs from 'fs';


/**通用的cddajson数据 */
type CommonJson = Extract<AnyCddaJson,{id:string,type:string}>&{
    /**copyfrom链 */
    sourceline:string[];
    /**是由哪个mod最先定义的 */
    mod_source:string;
    abstract?:string;
    /**便于索引抽象物品的id */
    fixed_id:string;
    'copy-from'?:string;
};
type DataTable = Record<string,Record<string,CommonJson>>;
type ModData = { table:DataTable; mod:string;};

/**获取mod元数据 */
export const loadModMetadata = memoize(async ()=>{
    const dirlist = await fs.promises.readdir(path.join(GAME_PATH,'data','mods'),{withFileTypes:true});
    const metadataMap:Record<string,string> = {};
    //加载mod
    await Promise.all(dirlist.map(async ftoken=>{
        if(!ftoken.isDirectory()) return;
        const fp = path.join(GAME_PATH,'data','mods',ftoken.name);
        const infopath = path.join(fp,'modinfo.json');
        if(!(await UtilFT.pathExists(infopath))) return;
        const modinfo = await UtilFT.loadJSONFile(infopath) as AnyCddaJson[];
        if(!modinfo || !Array.isArray(modinfo)) return;
        const modid = modinfo.find(v=>v.type=="MOD_INFO")?.id;
        if(modid) metadataMap[modid] = fp;
    }));
    //设置核心
    metadataMap['dda'] = path.join(GAME_PATH,'data','json');
    return metadataMap;
});

const loadqueue = new PromiseQueue({concurrency:128});

/**获取mod数据 */
export const loadModDataTable = memoize(async (modid:string)=>{
    const metadata = await loadModMetadata();
    const modpath = metadata[modid];
    if(!modpath) throw `找不到mod ${modid} 的数据`;
    const filelist = await UtilFT.fileSearchGlob(modpath,'**/*.json');

    const procFn = (data:CommonJson,modid:string)=>{
        const type = data.type;
        data.fixed_id = data.abstract ? data.abstract : data.id;
        //if(data['copy-from'] == data.fixed_id)
        //    delete data['copy-from'];
        const id = data.fixed_id;
        if( type==undefined || id ==undefined ||
            typeof type != "string" || typeof id != "string") return;
        data.mod_source = modid;
        data.sourceline = [modid+':'+id];
        return data;
    }

    const dataMap:DataTable = {};
    await Promise.all(filelist.map(async fp=>{
        const jsonlist = await loadqueue.enqueue(()=>UtilFT.loadJSONFile(fp)) as CommonJson[];
        if(!Array.isArray(jsonlist)) return;
        jsonlist.forEach(v=>{
            const data = procFn(v,modid);
            if(!data) return;
            dataMap[data.type]??={};
            dataMap[data.type][data.fixed_id] = data;
        });
    }));
    return { table:dataMap,  mod:modid };
});


/**合并父子数据 */
const mergeCopyData = <T extends CommonJson>(child:T,parent:T):T=>{
    const cloneC = {...child} as any;
    delete (cloneC as any)['copy-from'];
    delete (cloneC as any)['mod_source'];

    const cloneP = {...parent} as any;
    delete (cloneP as any)['abstract'];

    const result = Object.assign({},cloneP,cloneC) as any;
    if(cloneC.fixed_id!=cloneP.fixed_id)
        result.mod_source = child.mod_source;

    result.sourceline = [...child.sourceline,(parent.mod_source+':'+parent.fixed_id)];
    return result as any;
}


/**展开copyfrom字段 */
const copyData = <T extends CommonJson["type"]>(
    itype:T,id:string,
    modDataSeqByPriority:ModData[],stack=0
):Extract<CommonJson,{type:T}>|undefined=>{
    const fixExtends = <T extends CommonJson["type"]>(opt:{
        itype:T,id:string,
        modseq:ModData[],
        child:Extract<CommonJson,{type:T}>|undefined,
        stack:number
    }):Extract<CommonJson,{type:T}>|undefined=>{

        const {child,id,modseq,stack,itype} = opt;

        //死循环则直接返回
        if(stack>5) return child;

        if(child!=undefined){
            const copyId = child['copy-from'];
            //如果不存在copyfrom则直接返回
            if(!copyId) return child;
            //非扩展则直接返回
            if(copyId!=id) return child;
        }

        //找到优先级最高的数据
        const lastIdx = modseq.findIndex(data=>data.table[itype]?.[id] != undefined);
        const last = modseq[lastIdx]?.table?.[itype]?.[id] as Extract<CommonJson,{type:T}>|undefined;
        if(last==undefined) return child;

        if(child==undefined)
            return fixExtends({
                itype,id,
                modseq:modseq.slice(lastIdx+1),
                child:last,stack:stack+1
            });

        const expand = mergeCopyData(child as any,last  as any) as any;
        return fixExtends({
            itype,id,
            modseq:modseq.slice(lastIdx+1),
            child:expand,stack:stack+1
        });
    }

    const fixedData = fixExtends({itype,id,modseq:modDataSeqByPriority,child:undefined,stack});

    //死循环则直接返回
    if(stack>10) return fixedData;
    if(fixedData==undefined) return;
    const fixedCopyId = fixedData['copy-from'];
    //如果不存在copyfrom则直接返回
    if(!fixedCopyId) return fixedData;

    //console.log(stack);
    //合并copyfrom
    let prevData = copyData(itype,fixedCopyId,modDataSeqByPriority,stack+1);
    if(!prevData){
        console.log(`找不到 ${itype}:${fixedData.id} copyfrom的目标 ${fixedCopyId}, 已返回空数据`);
        prevData = {} as any;
    }
    return mergeCopyData(fixedData,prevData!);
}

export class GameDataTable{
    /**依照加载顺序排序的mod数据表 */
    private _modDataList:ModData[];
    constructor(dataTableList:ModData[]){
        //console.log(dataTableList.map(v=>v.mod));
        this._modDataList = dataTableList;
    }

    /**获取某个id的数据 */
    getData <T extends CommonJson["type"]>
    (type:CommonJson["type"],id:string):Extract<CommonJson,{type:T}>|undefined{
        return copyData(type,id,[...this._modDataList].reverse()) as any;
    }

    /**获取某个类型的全部数据 */
    getDataIdList<T extends CommonJson["type"]>
    (type:T):string[]{
        //console.log(this._modDataList[0].table['ITEM'])
        const typedDataTableList = this._modDataList.map(data=>data.table[type]).filter(v=>v!=undefined);
        //console.log(typedDataTableList);
        return Object.keys(Object.assign({},...typedDataTableList));
    }
}

/**获取某个加载顺序的数据 */
export const loadGameDataTable = async (opt:{
    /**不填代表全部 */
    includes?:string[];
    /**排除的mod */
    excludes?:string[];
})=>{
    const {
        includes,
        excludes = []
    } = opt;
    const mods = ( includes ??
    ['dda',...Object.keys(await loadModMetadata()).sort((a,b)=>a.localeCompare(b,'en', { sensitivity: 'base' })).filter(v=>v!="dda")]
    ).filter(v=>!excludes.includes(v));

    const datamapList = await Promise.all(mods.map(loadModDataTable));
    return new GameDataTable(datamapList);
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

/** 价值单位映射：所有单位转为美元 */
const priceUnits: Record<string, number> = {
    cent: 0.01, cents: 0.01,
    dollar: 1, dollars: 1, USD: 1,
    kUSD: 1000,
};
/** 通用单位解析器：将复合单位字符串转换为秒数 */
export function parsePrice(value?: Price): number {
    return parseUnitString(value, priceUnits);
}
