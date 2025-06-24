import {UtilMacro} from '@zwa73/dev-utils';
import path from 'pathe';
import { EOC_DIR, exportTypeList, Item_DIR } from 'Macro';

//自动导出
UtilMacro.exportComment('src/**/*.ts');

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