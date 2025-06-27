import { GenericExpr } from "./ExpressionIndex";
import { LocExpr } from "./LocExprIndex";



/**Eoc字符串表达式 */
export type StringExpr = StringExprList[number]|GenericExpr|string|LocExpr;


//#region StringExpr导出
import {MutatorsMonFaction, MutatorsGameOption, MutatorsMaTechName, MutatorsMaTechDesc, MutatorsVaildTech, MutatorsTopicItem} from './StringExpr'
/**StringExpr导出 */
export type StringExprList = [
    MutatorsMonFaction      ,//怪物阵营mutator
    MutatorsGameOption      ,//游戏设置mutator
    MutatorsMaTechName      ,//武术名称mutator
    MutatorsMaTechDesc      ,//武术简介mutator
    MutatorsVaildTech       ,//随机武术mutator
    MutatorsTopicItem       ,//选项物品mutator
];
//#endregion