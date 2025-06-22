import { CddaID, DescText, Float } from "./GenericDefine";
import { LimbScoreID } from "./LimbScore";



/**角色修饰符ID */
export type CharacterModID = CddaID<'CM'>;

/**角色修饰符定义 */
export type CharacterMod = {
    type: "character_mod";
    /**角色修饰符唯一ID */
    id: (CharacterModID);
    /**描述此修饰符功能的可翻译文本, 将显示在UI中 */
    description: (DescText);
    /**描述此修饰符如何应用
     * 可以是 "+" (相加), "x" (相乘) 或 "" (未指定)
     */
    mod_type: "+" | "x" | "";
    /**描述此修饰符如何计算的对象 */
    value: {
        /**引用limb_score id或limb_score id数组(可以是加权列表)
         * 这些是派生此修饰符的肢体评分
         * 对于加法计算(limb_score_op: "+")分数乘以权重, 
         * 对于乘法计算(limb_score_op: "x")分数提高到权重次方
         */
        limb_score?: string | [string, Float][] | string[];
        /**定义多个肢体评分时的操作(相加+或相乘x)
         * 例如: x => score1 x score2 x score3 ...
         * @default "x"
         */
        limb_score_op?: "+" | "x";
        /**引用body_part中定义的limb_type
         * 如果存在, 仅使用具有该肢体类型的身体部位的肢体评分
         */
        limb_type?: string;
        /**如果指定, 强制肢体评分受/不受肢体负重影响
         * (覆盖limb_score中的affected_by_encumb)
         */
        override_encumb?: boolean;
        /**如果指定, 强制肢体评分受/不受肢体健康影响
         * (覆盖limb_score中的affected_by_wounds)
         */
        override_wounds?: boolean;
        /**定义此修饰符的最小值
         * 通常仅用于提供好处的"奖励"乘数
         * 不应与max一起使用
         */
        min?: Float;
        /**定义此修饰符的最大值
         * 通常用于提供减益的"成本"乘数
         * 不应与min一起使用
         * 可以定义为小数或特殊值"max_move_cost"
         */
        max?: Float | "max_move_cost";
        /**使肢体评分除以指定值, 如 nominator / ( limb_score * denominator ) */
        nominator?: Float;
        /**将肢体评分(或nominator, 如果指定)除以指定值, 如 limb_score / denominator */
        denominator?: Float;
        /**定义从结果修饰符中减去的值, 如 mod - subtract */
        subtract?: Float;
        /**替代肢体评分, value对象可以定义一个内置函数来处理修饰符的计算 */
        builtin?: (LimbScoreID);
    };
};


//character_mod值类型
type list = [
    "limb_score"        , // 指的是一个 limb_score id, 或者一个 limb_score id 的数组 (可以是一个加权列表) . 这些是从中派生出此修饰符的肢体得分. 对于加法计算 (limb_score_op: "+") , 得分乘以权重, 对于乘法计算 (limb_score_op: "x") , 它被提升到权重的幂
    "limb_score_op"     , // (可选) 当定义了多个肢体得分时要应用的操作 (加 + 或乘 x) . 例如: x => score1 x score2 x score3 .... (默认为 x)
    "limb_type"         , // (可选) 指的是在 body_part 中定义的 limb_type. 如果存在, 只使用具有该 limb_type 的身体部位的肢体得分
    "override_encumb"   , // (可选) 布尔值 (true/false) . 如果指定, 这将强制肢体得分受/不受肢体负担影响 (如果为 true/false) . (覆盖 limb_score 中的 affected_by_encumb)
    "override_wounds"   , // (可选) 布尔值 (true/false) . 如果指定, 这将强制肢体得分受/不受肢体健康影响 (如果为 true/false) .  (覆盖 limb_score 中的 affected_by_wounds) 
    "min"               , // (可选) 为此修饰符定义一个最小值. 通常只用于提供收益的"奖金"乘数. 不应与 max 一起使用
    "max"               , // (可选) 为此修饰符定义一个最大值. 通常用于提供 malus 的"成本"乘数. 不应与 min 一起使用. 此值可以定义为小数或特殊值 "max_move_cost"
    "nominator"         , // (可选) 导致肢体得分除以指定的值, 即 nominator / ( limb_score * denominator )
    "denominator"       , // (可选) 将肢体得分 (或 nominator, 如果指定) 除以指定的值, 即 limb_score / denominator
    "subtract"          , // (可选) 定义从结果修饰符中减去的值, 即 mod - subtract
    "builtin"           , // 而不是肢体得分, 值对象可以定义一个内置函数来处理修饰符的计算
]


/**修饰符计算示例 */
type CharacterModExamples = {
    /**仅指定一个"limb_score":
     * mod = limb_score;
     */
    example1: CharacterMod;
    
    /**在"limb_score"数组中指定3个score id(使用"x"操作):
     * mod = limb_score1 * limb_score2 * limb_score3;
     */
    example2: CharacterMod;
    
    /**指定"max":
     * mod = min( max, limb_score );
     */
    example3: CharacterMod;
    
    /**指定"min":
     * mod = max( min, limb_score );
     */
    example4: CharacterMod;
    
    /**同时指定"max"和"nominator":
     * mod = min( max, nominator / limb_score );
     */
    example5: CharacterMod;
    
    /**指定"max", "nominator"和"subtract":
     * mod = min( max, ( nominator / limb_score ) - subtract );
     */
    example6: CharacterMod;
    
    /**指定"max", "denominator"和"subtract":
     * mod = min( max, ( limb_score / denominator ) - subtract );
     */
    example7: CharacterMod;
};