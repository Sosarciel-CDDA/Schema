import {UtilMacro} from '@zwa73/dev-utils';
import path from 'pathe';
import { EOC_DIR, exportTypeList, ITEM_DIR } from 'Macro';

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
    listName:'BoolExprList',
    targetFile:path.join(EOC_DIR,"Expression","BoolExprIndex.ts"),
    typeFileList:[path.join(EOC_DIR,"Expression","BoolExpr.ts")],
    region:'BoolExpr导出'
});

void exportTypeList({
    listName:'StringExprList',
    targetFile:path.join(EOC_DIR,"Expression","StringExprIndex.ts"),
    typeFileList:[path.join(EOC_DIR,"Expression","StringExpr.ts")],
    region:'StringExpr导出'
});

void exportTypeList({
    listName:'UseActionList',
    targetFile:path.join(ITEM_DIR,"UseAction","UseActionIndex.ts"),
    typeFileList:[path.join(ITEM_DIR,"UseAction","UseAction.ts")],
    region:'UseAction导出'
});
//#endregion