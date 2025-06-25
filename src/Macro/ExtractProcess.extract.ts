import path from 'pathe';
import { awt, extractDefineIdList, SCHEMA_DIR, zh, zhl } from 'Macro';
import { UtilFT } from '@zwa73/utils';
import { Effect } from 'Schema/Effect';

//#region 预定义IDList生成
//ItemCategoryID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/item_category.json",
    typeName: "ItemCategoryID",
    func:async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
        return jsonlist.map(v=>
            awt`${`"${v.id}"`.padEnd(30)}, // ${zhl(v.name_header)}`);
    }
});
//SkillID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/skills.json",
    typeName: "SkillID",
    func:async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
        return jsonlist.map(async v=>
            awt`${`"${v.id}"`.padEnd(30)}, // ${zhl(v.name)} ${zhl(v.description)}`);
    }
});
//VitaminID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/vitamin.json",
    typeName: "VitaminID",
    func:async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
        return jsonlist.map(async v=>
            awt`${`"${v.id}"`.padEnd(30)}, // ${zhl(v.name)}`);
    }
});
//FlagID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/flags.json",
    typeName: "FlagID",
    func:async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
        return jsonlist.map(async v=>
            awt`${`"${v.id}"`.padEnd(30)}, // ${zhl(v.info)}`);
    }
});
//EffectID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/effects.json",
    typeName: "EffectID",
    func:async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as Effect[];
        return jsonlist.map(async v=>
            awt`${`"${v.id}"`.padEnd(30)}, // ${zhl(v.name?.[0])} ${zhl(v.desc?.[0])}`);
    }
});
//FaultGroupID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/faults/fault_groups_*.json",
    typeName: "FaultGroupID",
    func:async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
        return jsonlist.map(async v=>
            awt`${`"${v.id}"`.padEnd(30)}, // ${zhl(v['//'])}`);
    }
});
//FaultID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/faults/faults_*.json",
    typeName: "FaultID",
    func:async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
        return jsonlist.map(async v=>
            awt`${`"${v.id}"`.padEnd(30)}, // ${zhl(v.name)} ${zhl(v.description)}`);
    }
});
//FaultFixID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/faults/fault_fixes_*.json",
    typeName: "FaultFixeID",
    func:async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
        return jsonlist.map(async v=>
            awt`${`"${v.id}"`.padEnd(30)}, // ${zhl(v.name)}`);
    }
});
//#endregion