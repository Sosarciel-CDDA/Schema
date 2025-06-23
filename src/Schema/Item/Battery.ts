import { CddaID, Energy } from "Schema/GenericDefine";
import { ItemTrait } from "./ItemIndex";
import { GenericFlagID } from "./Generic";




/**电池ID */
export type BatteryID = CddaID<"BATTERY">;

/**电池定义 */
export type BatteryTrait = ItemTrait<"AMMO",({
    /**标记具有 BATTERY 的特征, 用于补全 */
    "//T": "BATTERY";
}|{
    /**标记具有 BATTERY 的特征, 用于补全 */
    "//BATTERY": true;
})&{
    /**最大能量容量
     * 电池可以容纳的最大能量值
     * @example "30 kJ"
     */
    max_energy: (Energy);
    flags?:GenericFlagID[];
}>;