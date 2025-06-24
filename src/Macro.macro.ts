import {UtilMacro} from '@zwa73/dev-utils';
import path from 'pathe';
import { EOC_DIR, exportTypeList, extractDefineList, Item_DIR, SCHEMA_DIR } from 'Macro';
import { UtilFT } from '@zwa73/utils';
import type { ItemCategory } from 'Schema/ItemCategory';
import { zhcn } from './Macro/I18N';

//自动导出
UtilMacro.exportComment('src/**/*.ts');

//#region typelist转导
// 使用宏生成EocEffectList
void exportTypeList({
    listName:'EocEffectList',
    targetFile:path.join(EOC_DIR,"EocEffect","EocEffectIndex.ts"),
    typeFileList:[
        path.join(EOC_DIR,"EocEffect","EocEffect.ts"),
        path.join(EOC_DIR,"EocEffect","GenericEffect.ts"),
        path.join(EOC_DIR,"EocEffect","CharacterEffect.ts"),
        path.join(EOC_DIR,"EocEffect","ItemEffect.ts"),
    ],
    region:'Eoc效果表导出'
});

void exportTypeList({
    listName:'BoolOperateList',
    targetFile:path.join(EOC_DIR,"VariableObject","BoolObjectIndex.ts"),
    typeFileList:[path.join(EOC_DIR,"VariableObject","BoolObject.ts")],
    region:'BoolOperate导出'
});

void exportTypeList({
    listName:'StrOperateList',
    targetFile:path.join(EOC_DIR,"VariableObject","StringObjectIndex.ts"),
    typeFileList:[path.join(EOC_DIR,"VariableObject","StringObject.ts")],
    region:'StrOperate导出'
});

void exportTypeList({
    listName:'UseActionList',
    targetFile:path.join(Item_DIR,"UseAction","UseActionIndex.ts"),
    typeFileList:[path.join(Item_DIR,"UseAction","UseAction.ts")],
    region:'UseAction导出'
});
//#endregion

//#region 预定义IDList生成
void extractDefineList({
    region: "物品类别提取",
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
            `${`"${v.id}"`.padEnd(20)}, // ${await zhcn(v.name)} ${await zhcn(v.description)}`
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
            `${`"${v.id}"`.padEnd(20)}, // ${await zhcn(v.name)}`
        );
    }
});
//#endregion