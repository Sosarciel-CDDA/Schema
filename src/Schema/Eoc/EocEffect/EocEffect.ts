import { AnyItemID } from "Schema/Item";
import { NpcInstanceID } from "Schema/NpcInstance";
import { TalkerVar } from "../Eoc";
import { IDObj, NumObj } from "../VariableObject";
import { Time } from "Schema/GenericDefine";
import { ItemGroupID } from "Schema/ItemGroup";
import { FlagID } from "Schema/Flag";


/**生成Npc */
export type SpawnNpc = TalkerVar<{
    /**Npc实例ID */
    spawn_npc: NpcInstanceID,
    /**真实数量 */
    real_count?: number,
    /**最小半径 */
    min_radius?: number,
    /**最大半径 */
    max_radius?: number,
},"spawn_npc">;


/**生成物品 */
export type SpawnItem = TalkerVar<{
    spawn_item: IDObj<AnyItemID>|IDObj<ItemGroupID>;
    /**数量 */
    count?: (NumObj);
    /**容器 */
    container?: IDObj<AnyItemID>;
    /**使用物品组 默认false*/
    use_item_group?: boolean;
    /**不显示消息 默认false*/
    suppress_message?: boolean;
},"spawn_item">

/**删除物品 */
export type RemoveItem = TalkerVar<{
    /**删除物品 */
    remove_item_with: IDObj<AnyItemID>;
},"remove_item_with">;

/**添加flag */
export type SetFlag = TalkerVar<{
    set_flag:IDObj<FlagID>;
},"set_flag">;

/**使 alpha 消耗一定时间 */
export type TurnCost = {
    /**使 alpha 消耗一定时间 */
    turn_cost: (Time);
}

