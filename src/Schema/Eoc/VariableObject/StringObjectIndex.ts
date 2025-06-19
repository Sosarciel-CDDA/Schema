import { GenericObj, LocObj } from "./VariableObjectIndex";



/**Eoc字符串对象 */
export type StrObj = StrOperateList[number]|GenericObj|string|LocObj;



import { MutatorsGameOption, MutatorsLocRelative, MutatorsMaTechDesc, MutatorsMaTechName, MutatorsMonFaction, MutatorsTopicItem, MutatorsVaildTech } from "./StringObject";

/**Eoc字符串对象操作符 */
export type StrOperateList = [
    MutatorsMonFaction  ,
    MutatorsGameOption  ,
    MutatorsMaTechName  ,
    MutatorsMaTechDesc  ,
    MutatorsVaildTech   ,
    MutatorsLocRelative ,
    MutatorsTopicItem   ,
]