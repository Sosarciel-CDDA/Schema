import { ItemID } from "Schema/Item";
import { TalkerVar } from "../Eoc";
import { IDExpr, NumberExpr } from "../Expression";
import { ItemGroupID } from "Schema/ItemGroup";
import { FlagID } from "Schema/Flag";


/**生成物品 */
export type SpawnItem = TalkerVar<{
    spawn_item: IDExpr<ItemID>|IDExpr<ItemGroupID>;
    /**数量  
     * @default 1  
     */
    count?: (NumberExpr);
    /**容器  
     * @default null  
     */
    container?: IDExpr<ItemID>;
    /**使用物品组  
     * @default false  
     */
    use_item_group?: boolean;
    /**不显示消息  
     * @default false  
     */
    suppress_message?: boolean;
    /**角色将尝试装备物品  
     * @default false  
     */
    force_equip?: boolean;
    /**物品将拥有这些flag  
     * @default []  
     */
    flags?: FlagID[];
},"spawn_item">

/**删除物品 */
export type RemoveItem = TalkerVar<{
    /**删除物品 */
    remove_item_with: IDExpr<ItemID>;
},"remove_item_with">;


