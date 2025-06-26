import { Time } from "Schema/GenericDefine";
import { BoolObj } from "./BoolObjectIndex";
import { StrObj } from "./StringObjectIndex";

/**数字对象 */
export type NumObj = NumOperateList[number];
/**Eoc数字对象操作符 */
export type NumOperateList = [
    GenericObjOperateList[number]       ,//
    number                              ,//
    NumMathExp                          ,//
    //Arithmetic                        ,//
]

/**npc属性技能专用的数字对象 */
export type NpcNumObj = NpcNumOperateList[number];
/**npc属性技能专用的数字对象操作符 */
export type NpcNumOperateList = [
    NumOperaRng                         ,// >=[0] ~ <=[1] 之间的随机数
    NumOperaOneIn                       ,//表示在 [0] 次尝试中出现 1 次的随机确定机会为 1, 否则为 0. 
    NumOperaDice                        ,//表示通过将 [0] 个随机确定的数字与 1 到 [1] 之间的值相加而生成的随机确定的数字
    NumOperaSum                         ,//所有数字加
    NumOperaMul                         ,//所有数字乘
    {constant: number}                  ,//常量
];

export type NumOperaRng     = {rng: [ NpcNumObj, NpcNumObj ] };
export type NumOperaOneIn   = {one_in: NpcNumObj };
export type NumOperaDice    = {dice: [ NpcNumObj, NpcNumObj ] };
export type NumOperaSum     = {sum: NpcNumObj[] };
export type NumOperaMul     = {mul: NpcNumObj[] };


/**Math数字表达式 */
export type NumMathExp = {math:[string]};
/**算术表达式 */
//export type Arithmetic = {arithmetic:(CalcOpera|NumObj)[]}

/**计算运算符 */
export type CalcOpera = "+"|"-"|"*"|"/";

/**比较运算符 */
export type CompareOpera = "=="|"!="|">="|"<="|">"|"<";


/**任何Obj */
export type AnyObj = AnyObjOperateList[number];
/**任何Obj操作符 */
export type AnyObjOperateList = [
    BoolObj, //
    StrObj , //
    NumObj , //
]

/**通用Obj操作符 */
export type GenericObjOperateList = [
    { global_val : string } , //全局变量
    { u_val      : string } , //alpha talker的变量
    { npc_val    : string } , //beta talker的变量
    { context_val: string } , //上下文变量 存于对话中的变量
    { var_val    : string } , //获得某个上下文变量的值 然后以值作为 全局/角色变量名 获得全局/角色值
];
/**通用Obj操作符 */
export type GenericObj = GenericObjOperateList[number];



/**条件Obj */
export type CondObj = GenericObj|string;

/**位置Obj */
export type LocObj = GenericObj;

/**时间Obj */
export type TimeObj = NumObj|IDObj<Time>;

/**talkerObj */
export type TalekrObj = GenericObj;


/**专用于某种ID的字符串对象  */
export type IDObj<T extends string|number> = Exclude<StrObj,string>|T;



