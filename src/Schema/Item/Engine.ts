import { CddaID, Energy, Float, Int } from "../GenericDefine";
import { ItemTrait, ItemID } from "./ItemIndex";
import { GenericFlagID } from "./Generic";

/**Engine ID格式 */
export type EngineID = CddaID<"ENG">;

/**引擎
 * 定义载具引擎的属性
 */
export type EngineTrait = ItemTrait<"ENGINE",{
    /**标记具有 ENGINE 的特征, 用于补全 */
    "//ENGINE": true;
    /**引擎动力, 以瓦特为单位 */
    power: (Energy);
    /**最大功率下的引擎能耗, 以瓦特为单位
     * 默认为电力功率, E_COMBUSTION标志将其转换为燃料产生的热功率
     * 应始终大于power
     */
    energy_consumption?: (Energy);
    /**安全功率与最大功率的比率 */
    m2c?: Int;
    /**回火阈值
     * 当损坏HP与最大HP的比率低于此值时, 引擎会回火 (产生噪音和烟雾)
     * @default 0
     */
    backfire_threshold?: Float;
    /**回火频率
     * 当损坏HP与最大HP的比率低于backfire_threshold时, 1/X的回火几率
     * @default 0
     */
    backfire_freq?: Int;
    /**噪音因子
     * 引擎功率乘以此数值以确定噪音
     * @default 0
     */
    noise_factor?: Int;
    /**损坏功率因子
     * 如果大于0, 损坏时的功率按公式缩放:
     * power * (damaged_power_factor + (1 - damaged_power_factor) * (damaged HP / max HP))
     * @default 0
     */
    damaged_power_factor?: Float;
    /**肌肉功率因子
     * 引擎功率增加 (ST - 8) * muscle_power_factor
     * @default 0
     */
    muscle_power_factor?: Int;
    /**排除列表
     * 如果车辆上的任何引擎共享排除列表中的词语, 则无法安装新引擎
     * @default []
     */
    exclusions?: string[];
    /**燃料选项
     * 可用于为此引擎提供燃料的物品ID列表
     * 如果提供, 将覆盖fuel_type
     * @default fuel_type
     */
    fuel_options?: (ItemID)[];
    /**物品标志 */
    flags?: GenericFlagID[];
}>;
