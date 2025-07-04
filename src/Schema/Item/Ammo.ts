import { AmmunitionTypeID } from "../AmmiunitionType";
import { AmmoEffectID } from "../AmmoEffect";
import { CddaID, Int, RangeDamage } from "../GenericDefine";
import { GenericFlagID } from "./Generic";
import { ItemID, ItemTrait } from "./ItemIndex";



/**AmmoID */
export type AmmoID = CddaID<"AMMO">;

/**Ammo 弹药物品 */
export type AmmoTrait = ItemTrait<"AMMO",({
    /**标记具有 AMMO 的特征, 用于补全 */
    "//T": "AMMO";
}|{
    /**标记具有 AMMO 的特征, 用于补全 */
    "//AMMO": true;
})&{
    /**弹药类型 使用材质id */
    ammo_type: (AmmunitionTypeID);
    /**远程伤害 */
    damage?: RangeDamage|RangeDamage[];
    /**将武器的伤害乘以数量 (覆盖 damage ) */
    prop_damage?: number;
    /**开火范围 */
    range?: Int;
    /**倍增基础枪械射程字段 */
    range_multiplier?: number;
    /**弹药的不准确度, 以角度分钟 (MOA) 的百分之一为单位测量 */
    dispersion?: number;
    /**指定该弹药每轮发射多个射弹, 例如 shot  
     * 如果存在 shot_damage, 则还必须指定.   
     */
    projectile_count?:Int;
    /**将枪支产生的射击量增加此数量.   
     * `"shot_counter": 5` 表示每次射击将计为 6 次射击(1 你实际执行的 + 5)  
     * 设计用于抑制器损坏以及可更换枪管等物品, 但目前尚未在任何地方使用  
     */
    shot_counter?: Int;
    /**指定本轮发射的单个射弹造成的伤害.   
     * 如果存在, 还必须指定 projectile_count.   
     * 在目标距离至少大于1时 将显示 目标被流弹击中 并应用此伤害, 而非range_damage  
     */
    shot_damage?: RangeDamage|RangeDamage[];
    /**指定单个射弹的额外分散度.   
     * 仅当 projectile_count 存在时才有意义.   
     */
    shot_spread?: number;
    /**暴击伤害倍率 */
    critical_multiplier?: number;
    /**射击时产生后坐力 */
    recoil?: number;
    /**一次生成的数量 */
    count?: Int;
    /**上面定义的体积中有多少组.  如果省略, 则与 count 相同 */
    stack_size?: Int;
    /**战斗弹药的力量统计显示.   
     * 对于缺乏伤害和道具伤害的射弹  
     */
    show_stats?: boolean;
    /**可以增加或减少基础枪射击时噪音的修改器.   
     * 如果未指定响度值, 则游戏会根据弹药的射程, 伤害和护甲穿透自动计算.   
     */
    loudness?: number;
    /**弹药的特殊效果 */
    effects?: AmmoEffectID[];
    /**弹药的flag */
    flags?: GenericFlagID[];
    /**发射弹药后在弹药落点掉落的物品 */
    drop?:ItemID;
}>;



