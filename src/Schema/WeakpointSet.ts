import { DamageTypeID } from "./DamageType";
import { EffectID } from "./Effect";
import { CddaID, DescText, Float, Int, PRecord, Time } from "./GenericDefine";
import { ProficiencyID } from "./Proficiency";

/**弱点集合ID */
export type WeakpointSetID = CddaID<"WPS">;

/**弱点集合定义 */
export type WeakpointSet = {
    type: "weakpoint_set";
    /**弱点集合唯一ID */
    id: WeakpointSetID;
    /**弱点列表  
     * 包含的所有弱点定义  
     */
    weakpoints: Weakpoint[];
}

/**弱点集合ID */
export type WeakpointID = CddaID<"WP">;

/**怪物保护中的弱点 */
export type Weakpoint = {
    /**弱点的 id  
     * 如果未指定, 默认为名称  
     */
    id: (WeakpointID);
    /**弱点的名称  
     * 用于命中消息  
     */
    name: (DescText);
    /**命中弱点的基础百分比概率  
     *  (例如, 覆盖率为 5 意味着命中弱点的基础概率为 5%)   
     */
    coverage: Int;
    /**将武器类型映射到常数覆盖率乘数的对象 */
    coverage_mult: WeakpointHitMap<Float>;
    /**将武器类型映射到难度值的对象.   
     *  难度在攻击者的技能上起到软 "门" 的作用.   
     *  如果攻击者的技能等于难度, 覆盖率将减少到 50%  
     */
    difficulty: WeakpointHitMap<Int>;
    /**将伤害类型映射到在击中弱点时对怪物基础保护的乘数的对象 */
    armor_mult: (WeakpointDmg);
    /**将伤害类型映射到在乘数之后应用于怪物保护的平坦惩罚的对象 */
    armor_penalty: (WeakpointDmg);
    /**将伤害类型映射到在击中弱点时对护甲后伤害的乘数的对象 */
    damage_mult: (WeakpointDmg);
    /**将伤害类型映射到在对弱点进行关键打击时对护甲后伤害的乘数的对象. 如果未指定, 默认为 damage_mult */
    crit_mult: (WeakpointDmg);
    /**应用于怪物以命中弱点所需的效果名称列表  
     * 只有怪物有以下状态时, 才可命中此弱点  
      */
    required_effects: EffectID[];
    /**可能通过击中弱点应用于怪物的效果对象列表 */
    effects: WeakpointEffect[];
}

/**怪物弱点针对不同类型武器的难度设置 */
export type WeakpointHitMap<T> = {
    /**任意 如果没有提供更具体的内容, 则为默认值.  */
    all?: T;
    /**用于近战砸击武器的值.  */
    bash?: T;
    /**用于近战切割武器的值.  */
    cut?: T;
    /**用于近战刺击武器的值.  */
    stab?: T;
    /**用于远程武器, 包括投射物和投掷武器.  */
    ranged?: T;
    /**近战武器 (bash, cut 和 stab) 的默认值. 优先于 point 和 broad.  */
    melee?: T;
    /**针对尖锐武器 (stab 和 ranged) 的默认值.  */
    point?: T;
    /**针对宽阔武器 (bash 和 cut) 的默认值 */
    broad?: T;
}
/**怪物弱点针对不同伤害的设置 */
export type WeakpointDmg = {
    /**任意 如果没有提供更具体的内容, 则为所有字段的默认值.  */
    all?: Float;
    /**物理伤害类型 (bash, cut, stab 和 bullet) 的默认值 */
    physical?: Float;
    /**非物理伤害类型 (biological, acid, heat, cold 和 electric) 的默认值 */
    non_physical?: Float;
} & PRecord<DamageTypeID,Float>
/**命中怪物弱点时产生的效果 */
export type WeakpointEffect = {
    /**效果类型 */
    effect: (EffectID);
    /**导致效果的概率 */
    chance: Int;
    /**效果持续时间. 可以是一个 (min, max) 对或一个单一值 */
    duration: (Time) | [Time, Time];
    /**效果是否是永久性的 */
    permanent: boolean;
    /**效果的强度. 可以是一个 (min, max) 对或一个单一值 */
    intensity: Int | [Int, Int];
    /**触发效果所需的伤害范围, 作为最大健康百分比 */
    damage_required: [Int,Int];
    /**如果玩家触发效果, 要打印的消息. 应该带有一个模板参数, 引用怪物的名称 */
    message: (DescText);
}

/**怪物的弱点族  
 * 字符串时为 proficiency  
 */
export type WeakpointFamilie = {
    /**族id  
     * @default "proficiency"  
     */
    id?: string;
    /**族对应的专长ID */
    proficiency?: (ProficiencyID);
    /**如果攻击者掌握专长, 则对弱点技能的奖励 */
    bonus?: number;
    /**如果攻击者缺乏专长, 则会对弱点技能进行惩罚 */
    penalty?: number;
}|ProficiencyID;
