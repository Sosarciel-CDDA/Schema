import { CddaID, Time } from "../GenericDefine";
import { ItemTrait, ItemID } from "./ItemIndex";

/**Brewable ID格式 */
export type BrewableID = CddaID<"BREW">;

/**可酿造物品
 * 可以放入大桶中发酵成不同物品类型的物品
 * 目前大桶只能接受和产生液体物品
 */
export type BrewableTrait = ItemTrait<"BREWABLE",{
    /**标记具有 BREWABLE 的特征, 用于补全 */
    "//BREWABLE": true;
    /**酿造时间
     * 发酵所需的时间
     */
    brew_time: (Time);
    /**酿造结果
     * 可酿造物品每电荷的结果ID和乘数
     */
    brew_results: (ItemID)[];
}>;
