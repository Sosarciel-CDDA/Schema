import { Time } from "Schema/GenericDefine";
import { BoolExpr } from "./BoolExprIndex";
import { StringExpr } from "./StringExprIndex";

/**数字对象 */
export type NumberExpr = GenericExprList[number]|number|NmuberMathExpr;

/**npc属性技能专用的数字表达式 */
export type NpcNumberExpr = NpcNumberExprList[number];
/**npc属性技能专用的数字表达式 */
export type NpcNumberExprList = [
    NpcOpRng                         ,// >=[0] ~ <=[1] 之间的随机数
    NpcOpOneIn                       ,//表示在 [0] 次尝试中出现 1 次的随机确定机会为 1, 否则为 0. 
    NpcOpDice                        ,//表示通过将 [0] 个随机确定的数字与 1 到 [1] 之间的值相加而生成的随机确定的数字
    NpcOpSum                         ,//所有数字加
    NpcOpMul                         ,//所有数字乘
    {constant: number}               ,//常量
];

export type NpcOpRng     = {rng: [ NpcNumberExpr, NpcNumberExpr ] };
export type NpcOpOneIn   = {one_in: NpcNumberExpr };
export type NpcOpDice    = {dice: [ NpcNumberExpr, NpcNumberExpr ] };
export type NpcOpSum     = {sum: NpcNumberExpr[] };
export type NpcOpMul     = {mul: NpcNumberExpr[] };


/**Math数字表达式 */
export type NmuberMathExpr = {math:[string]};
/**算术表达式 */
//export type Arithmetic = {arithmetic:(CalcOpera|NumObj)[]}

/**计算运算符 */
export type CalcOpera = "+"|"-"|"*"|"/";

/**比较运算符 */
export type CompareOpera = "=="|"!="|">="|"<="|">"|"<";


/**任何Obj */
export type AnyExpr = AnyExprList[number];
/**任何Obj操作符 */
export type AnyExprList = [
    BoolExpr   , //
    StringExpr , //
    NumberExpr , //
]

/**通用Obj表达式 列表 */
export type GenericExprList = [
    { global_val : string } , //全局变量
    { u_val      : string } , //alpha talker的变量
    { npc_val    : string } , //beta talker的变量
    { context_val: string } , //上下文变量 存于对话中的变量
    { var_val    : string } , //获得某个上下文变量的值 然后以值作为 全局/角色变量名 获得全局/角色值
];
/**通用Obj表达式 */
export type GenericExpr = GenericExprList[number];



/**条件表达式  
 * 不同于BoolExpr, CondExpr仅用于明确需要set_condition的部分  
 */
export type CondExpr = GenericExpr|string;

/**位置表达式 */
export type LocExpr = GenericExpr;

/**时间表达式 */
export type TimeExpr = NumberExpr|IDExpr<Time>;

/**talker表达式 */
export type TalekrExpr = GenericExpr;


/**专用于某种ID的字符串表达式  */
export type IDExpr<T extends string|number> = Exclude<StringExpr,string>|T;



