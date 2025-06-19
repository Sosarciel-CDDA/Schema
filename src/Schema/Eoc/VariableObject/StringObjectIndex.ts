import { GenericObj, LocObj } from "./VariableObjectIndex";



/**Eoc字符串对象 */
export type StrObj = StrOperateList[number]|GenericObj|string|LocObj;


//#region StrOperate导出
import {MutatorsMonFaction, MutatorsGameOption, MutatorsMaTechName, MutatorsMaTechDesc, MutatorsVaildTech, MutatorsLocRelative, MutatorsTopicItem} from './StringObject'
/**StrOperate导出 */
export type StrOperateList = [
    MutatorsMonFaction      ,//怪物阵营mutator
    MutatorsGameOption      ,//游戏设置mutator
    MutatorsMaTechName      ,//武术名称mutator
    MutatorsMaTechDesc      ,//武术简介mutator
    MutatorsVaildTech       ,//随机武术mutator
    MutatorsLocRelative     ,//相对坐标mutator
    MutatorsTopicItem       ,//选项物品mutator
];
//#endregion