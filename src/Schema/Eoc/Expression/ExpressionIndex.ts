import { Time } from "Schema/GenericDefine";
import { StringExpr } from "./StringExprIndex";


/**通用表达式 列表 */
export type GenericExprList = [
    { global_val : string } , //全局变量
    { u_val      : string } , //alpha talker的变量
    { npc_val    : string } , //beta talker的变量
    { context_val: string } , //上下文变量 存于对话中的变量
    { var_val    : string } , //获得某个上下文变量的值 然后以值作为 全局/角色变量名 获得全局/角色值
];
/**通用表达式 */
export type GenericExpr = GenericExprList[number];

/**数字对象 */
export type NumberExpr = GenericExpr|number|NmuberMathExpr;
/**Math数字表达式 */
export type NmuberMathExpr = {math:[string]};
/**算术表达式 */
//export type Arithmetic = {arithmetic:(CalcOpera|NumObj)[]}

/**计算运算符 */
export type CalcOpera = "+"|"-"|"*"|"/";

/**比较运算符 */
export type CompareOpera = "=="|"!="|">="|"<="|">"|"<";


/**条件表达式  
 * 不同于BoolExpr, CondExpr仅用于 get/set condition  
 * 等价于一个指向BoolExpr的指针  
 */
export type CondExpr = GenericExpr|string;

/**时间表达式  
 * 作为秒数时间戳存储  
*/
export type TimeExpr = NumberExpr|IDExpr<Time>;

/**talker表达式 */
export type TalekrExpr = GenericExpr|"u"|"npc"|"avatar"|"";


/**专用于某种ID的字符串表达式  */
export type IDExpr<T extends string|number> = Exclude<StringExpr,string>|T;



