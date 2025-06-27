import { GenericExpr } from "./ExpressionIndex";



/**相对坐标mutator */
export type MutatorsLocRelative = {
    /**target应该是一个字符串, 如"(x,y,z)", 其中x,y,z是相对于玩家的坐标  
     * 返回提供的点相对于玩家的abs_ms坐标作为字符串 (准备存储为位置变量)  
     * 形式为"(x,y,z)". 所以"target":"(0,1,0)"将返回玩家南边的点  
     */
    mutator:"loc_relative_u";
    /**目标位置 */
    target:`(${number},${number},${number})`|LocExpr;
}

/**位置表达式  
 * 作为字符串存储, 但无法直接从字符串字面量/变量转为位置  
 */
export type LocExpr = GenericExpr|MutatorsLocRelative;