import { UtilFT } from "@zwa73/utils";
import { GAME_PATH } from "./Define";
import { AnyCddaJson } from "Schema/GenericDefine";


type VaildJson = Extract<AnyCddaJson,{id:string,type:string}>;

let DataMap:Record<string,Record<string,VaildJson>>|undefined = undefined;

const loadData = async ()=>{
    if(DataMap) return DataMap;
    const filelist    = await UtilFT.fileSearchGlob(GAME_PATH,'data/json/**/*.json');
    const modfilelist = await UtilFT.fileSearchGlob(GAME_PATH,'data/mods/**/*.json');
    DataMap = {};
    const procFn = (data:VaildJson)=>{
        const type = data.type;
        const id = (data as any).id;
        if(!type || !id || typeof type != "string" || typeof id != "string") return;
        DataMap![type]??={};
        DataMap![type][id] = data;
    }
    await Promise.all(filelist.map(async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as VaildJson[];
        jsonlist.forEach(procFn);
    }))
    await Promise.all(modfilelist.map(async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as VaildJson[];
        if(!Array.isArray(jsonlist)) return undefined;
        await Promise.all(jsonlist.map(procFn));
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
    await loadData();
    const type = data.type;
    const id = data.id;
    if(!type || !id || typeof type != "string" || typeof id != "string")
        throw "必须要字符串类型id与type才能展开copyfrom";
    const expandFn = (curr:VaildJson)=>{
        const copyfromId = (data as any)['copy-from'];
        if(!copyfromId) return;
        const copyfromData = DataMap![type]?.[copyfromId];
        if(!copyfromData) throw `找不到 ${type}:${(data as any).id} copyfrom的目标 ${copyfromId}`;
        delete (curr as any)['copy-from'];
        return expandFn(Object.assign({},copyfromData,curr));
    }
    return expandFn(data) as any;
}