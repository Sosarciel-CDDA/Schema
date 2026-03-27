import { CddaID, Int, Time } from "../GenericDefine";
import { ItemTrait, ItemID } from "./ItemIndex";

/**Compostable ID格式 */
export type CompostableID = CddaID<"COMP">;

/**可堆肥物品
 * 可以进行堆肥处理的物品
 */
export type CompostableTrait = ItemTrait<"COMPOSTABLE",{
    /**标记具有 COMPOSTABLE 的特征, 用于补全 */
    "//COMPOSTABLE": true;
    /**堆肥时间
     * 完全堆肥此物品所需的时间
     */
    compost_time: (Time);
    /**堆肥结果
     * 堆肥产生的物品ID和数量
     */
    compost_results: Record<(ItemID), Int>;
}>;
