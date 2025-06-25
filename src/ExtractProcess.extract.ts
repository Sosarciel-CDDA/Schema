import path from 'pathe';
import { awt, extractDefineList, SCHEMA_DIR, zh, zhl } from 'Macro';
import { UtilFT } from '@zwa73/utils';
import { Effect } from 'Schema/Effect';

//#region 预定义IDList生成
//ItemCategoryID提取
void extractDefineList({
    region: "ItemCategoryID提取",
    targetFile: path.join(SCHEMA_DIR, "ItemCategory.ts"),
    sourceFileGlob: "data/json/item_category.json",
    typeName: "ExtractDefineItemCategoryID",
    func:async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
        return jsonlist.map(v=>
            awt`${`"${v.id}"`.padEnd(20)}, // ${zhl(v.name_header)}`);
    }
});
//SkillID提取
void extractDefineList({
    region: "SkillID提取",
    targetFile: path.join(SCHEMA_DIR, "Skill.ts"),
    sourceFileGlob: "data/json/skills.json",
    typeName: "ExtractDefineSkillID",
    func:async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
        return jsonlist.map(async v=>
            awt`${`"${v.id}"`.padEnd(20)}, // ${zhl(v.name)} ${zhl(v.description)}`);
    }
});
//VitaminID提取
void extractDefineList({
    region: "VitaminID提取",
    targetFile: path.join(SCHEMA_DIR, "Vitamin.ts"),
    sourceFileGlob: "data/json/vitamin.json",
    typeName: "ExtractDefineVitaminID",
    func:async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
        return jsonlist.map(async v=>
            awt`${`"${v.id}"`.padEnd(20)}, // ${zhl(v.name)}`);
    }
});
//FlagID提取
void extractDefineList({
    region: "FlagID提取",
    targetFile: path.join(SCHEMA_DIR, "Flag.ts"),
    sourceFileGlob: "data/json/flags.json",
    typeName: "ExtractDefineFlagID",
    func:async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
        return jsonlist.map(async v=>
            awt`${`"${v.id}"`.padEnd(20)}, // ${zhl(v.info)}`);
    }
});
//EffectID提取
void extractDefineList({
    region: "EffectID提取",
    targetFile: path.join(SCHEMA_DIR, "Effect.ts"),
    sourceFileGlob: "data/json/effects.json",
    typeName: "ExtractDefineEffectID",
    func:async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as Effect[];
        return jsonlist.map(async v=>
            awt`${`"${v.id}"`.padEnd(20)}, // ${zhl(v.name?.[0])} ${zhl(v.desc?.[0])}`);
    }
});
//#endregion