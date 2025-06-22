import { ItemID } from "Schema/Item";
import { TalkerVar } from "../Eoc";
import { IDObj, NumObj } from "../VariableObject";
import { ItemGroupID } from "Schema/ItemGroup";


/**生成物品 */
export type SpawnItem = TalkerVar<{
    spawn_item: IDObj<ItemID>|IDObj<ItemGroupID>;
    /**数量 */
    count?: (NumObj);
    /**容器 */
    container?: IDObj<ItemID>;
    /**使用物品组 默认false*/
    use_item_group?: boolean;
    /**不显示消息 默认false*/
    suppress_message?: boolean;
},"spawn_item">

/**删除物品 */
export type RemoveItem = TalkerVar<{
    /**删除物品 */
    remove_item_with: IDObj<ItemID>;
},"remove_item_with">;


