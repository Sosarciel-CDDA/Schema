import { CddaID } from "../GenericDefine";
import { ItemTrait, ItemID } from "./ItemIndex";
import { RecipeID } from "../Recipe";
import { GenericFlagID } from "./Generic";

/**Milling ID格式 */
export type MillingID = CddaID<"MILL">;

/**可研磨物品
 * 可以在水磨或风磨中研磨的物品
 */
export type MillingTrait = ItemTrait<"MILLING",{
    /**标记具有 MILLING 的特征, 用于补全 */
    "//MILLING": true;
    /**研磨产物
     * 研磨结果的物品ID
     */
    into: (ItemID);
    /**研磨配方
     * 执行研磨任务的配方引用
     * 语法为 <产品名称>_mill_<源数量>_<产品数量>
     * 然后配方定义为源的普通配方, 产品为结果, id_suffix为"mill_X_Y"
     */
    recipe: (RecipeID);
    /**物品标志 */
    flags?: GenericFlagID[];
}>;
