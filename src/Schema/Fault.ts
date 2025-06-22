import { CddaID, DescText, Float, Int } from "./GenericDefine";
import { FlagID } from "./Flag";
import { DamageTypeID } from "./DamageType";

export type FaultID = CddaID<'FAULT'>;

export type FaultTypeID = CddaID<'FAULTT'>;

type DamageMod = {
    /**伤害类型ID */
    damage_id: (DamageTypeID);
    /**附加伤害值
     * @default 0
     */
    add: Int;
    /**伤害倍率
     * @default 1
     */
    multiply: Float;
};

export type Fault = {
    /**故障的唯一ID */
    id: FaultID;
    /**显示用的故障名称 */
    name: (DescText);
    /**故障描述 */
    description: (DescText);
    /**物品前缀
     * 有此故障的物品将添加此前缀
     */
    item_prefix?: string;
    /**物品后缀
     * 有此故障的物品将添加此后缀(会放在括号内)
     * @example "no handle" // 会显示为"sword (no handle)"
     */
    item_suffix?: string;
    /**应用故障时显示的消息 */
    message: (DescText);
    /**故障类型
     * 代码可能会调用一组中的随机故障而非特定故障
     */
    fault_type: (FaultTypeID);
    /**是否受退化影响
     * 如果为 true, 则物品降级值将被添加到卷上的故障权重中
     * @default false
     */
    affected_by_degradation?: boolean;
    /**退化修正值
     * 有此故障会增加物品的临时退化值
     * @default 0
     */
    degradation_mod?: Int;
    /**价格修正系数
     * @default 1
     */
    price_modifier?: Float;
    /**近战伤害修正 */
    melee_damage_mod?: DamageMod[];
    /**护甲修正  */
    armor_mod?: DamageMod[];
    /**阻止的故障列表
     * 如果已有此故障则无法应用这些故障
     */
    block_faults?: FaultID[];
    /**标志列表
     * 触发硬编码的C++效果
     * @see JSON_FLAGS.md
     */
    flags?: FlagID[];
};