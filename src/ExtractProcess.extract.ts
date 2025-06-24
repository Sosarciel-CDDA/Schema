import path from 'pathe';
import { extractDefineList, SCHEMA_DIR, zh } from 'Macro';
import { UtilFT } from '@zwa73/utils';

//#region 预定义IDList生成
void extractDefineList({
    region: "ItemCategoryID提取",
    targetFile: path.join(SCHEMA_DIR, "ItemCategory.ts"),
    sourceFileGlob: "data/json/item_category.json",
    typeName: "ExtractDefineItemCategoryID",
    func:async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
        return jsonlist.map(v=>
            `${`"${v.id}"`.padEnd(20)}, // ${v.name_header}`
        );
    }
});
void extractDefineList({
    region: "SkillID提取",
    targetFile: path.join(SCHEMA_DIR, "Skill.ts"),
    sourceFileGlob: "data/json/skills.json",
    typeName: "ExtractDefineSkillID",
    func:async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
        return jsonlist.map(async v=>
            `${`"${v.id}"`.padEnd(20)}, // ${await zh(v.name)} ${await zh(v.description)}`
        );
    }
});
void extractDefineList({
    region: "VitaminID提取",
    targetFile: path.join(SCHEMA_DIR, "Vitamin.ts"),
    sourceFileGlob: "data/json/vitamin.json",
    typeName: "ExtractDefineVitaminID",
    func:async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
        return jsonlist.map(async v=>
            `${`"${v.id}"`.padEnd(20)}, // ${await zh(v.name)}`
        );
    }
});
void extractDefineList({
    region: "FlagID提取",
    targetFile: path.join(SCHEMA_DIR, "Flag.ts"),
    sourceFileGlob: "data/json/flags.json",
    typeName: "ExtractDefineFlagID",
    func:async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
        return jsonlist.map(async v=>
            `${`"${v.id}"`.padEnd(20)}, // ${await zh(v.info)}`
        );
    }
});
//#endregion