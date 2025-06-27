


/**npc属性技能专用的数字表达式 */
export type NpcNumberExpr = NpcNumberExprList[number];
/**npc属性技能专用的数字表达式 列表 */
export type NpcNumberExprList = [
    NpcOpRng           ,// >=[0] ~ <=[1] 之间的随机数
    NpcOpOneIn         ,//表示在 [0] 次尝试中出现 1 次的随机确定机会为 1, 否则为 0. 
    NpcOpDice          ,//表示通过将 [0] 个随机确定的数字与 1 到 [1] 之间的值相加而生成的随机确定的数字
    NpcOpSum           ,//所有数字加
    NpcOpMul           ,//所有数字乘
    {constant: number} ,//常量
    number             ,//字面量
];

export type NpcOpRng     = {rng: [ NpcNumberExpr, NpcNumberExpr ] };
export type NpcOpOneIn   = {one_in: NpcNumberExpr };
export type NpcOpDice    = {dice: [ NpcNumberExpr, NpcNumberExpr ] };
export type NpcOpSum     = {sum: NpcNumberExpr[] };
export type NpcOpMul     = {mul: NpcNumberExpr[] };