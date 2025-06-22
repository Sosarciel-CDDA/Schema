import { FaultID } from "./Fault";
import { FlagID } from "./Flag";
import { CddaID, CopyfromVar, DescText, Float, Int } from "./GenericDefine";
import { ItemID } from "./Item";
import { ItemGroupID } from "./ItemGroup";

/**收获定义ID */
export type HarvestID = CddaID<"HV">;

/**收获条目 */
export type HarvestEntry = {
    /**掉落物
     * 物品ID或物品组ID
     */
    drop: ItemID | ItemGroupID;
    /**类型
     * 收获物类型, 如"flesh", "offal"等
     */
    type: (HarvestEntryType);
    /**质量比例
     * 占怪物总重的比例(0-1)
     */
    mass_ratio?: Float;
    /**基础数量
     * [最小值, 最大值]
     */
    base_num?: [Int, Int];
    /**技能加成
     * [最小加成, 最大加成]
     */
    scale_num?: [Float, Float];
    /**最大数量
     * 掉落数量的上限
     */
    max?: Int;
    /**标志
     * 物品附加的标志
     */
    flags?: (FlagID)[];
    /**缺陷
     * 物品附加的缺陷ID
     */
    faults?: (FaultID)[];
}

/**收获定义 */
export type Harvest = CopyfromVar<{
    type: "harvest";
    /**收获定义唯一ID */
    id: HarvestID;
    /**消息
     * 屠宰时显示的提示信息
     */
    message?: (DescText);
    /**残留物
     * 屠宰后剩余的物品ID
     */
    leftovers?: ItemID;
    /**条目
     * 可能的收获物列表
     */
    entries: HarvestEntry[];
}>;

/**可用的收获条目类型 */
type HarvestEntryType = "blood" | "bone" | "flesh" | "offal" | "skin";