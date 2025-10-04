
import { AssignMissionTarget, MissionDefinitionID } from "Schema/MissionDefinition";
import { IDExpr, LocExpr, NumberExpr } from "../Expression";
import { TalkerStr, TalkerVar } from "../Eoc";
import { FlagID } from "Schema/Flag";
import { ItemID } from "Schema/Item";
import { ParamsEoc } from "./EocEffectIndex";
import { TraitMod } from "Schema/TalkTopic";
import { NpcClassID } from "Schema/NpcClass";
import { NPCFactionID } from "Schema/NPCFaction";

//定义在NPCs.md

//#region Missions


/**将当前任务判定为成功完成 */
export type MissionSuccess ={
    /**将当前任务判定为成功完成 */
    mission_success: IDExpr<MissionDefinitionID>;
};

/**将当前任务判定为失败 */
export type MissionFailure = {
    /**将当前任务判定为失败 */
    mission_failure: IDExpr<MissionDefinitionID>;
};

/**清除角色已分配的任务 */
export type ClearMission = {
    /**清除角色已分配的任务 */
    clear_mission: IDExpr<MissionDefinitionID>;
};

/**发放任务奖励给玩家 */
export type MissionReward = {
    /**发放任务奖励给玩家 */
    mission_reward: IDExpr<MissionDefinitionID>;
};

//#endregion

//#region Stats / Morale

/**移除角色身体上的流血状态，并为每个身体部位恢复 5–15 点生命值 */
export type LesserGiveAid = "lesser_give_aid";

/**对范围内的每个 NPC 盟友执行 lesser_give_aid 效果 */
export type LesserGiveAidAll = "lesser_give_aid_all";

/**移除角色身体上的咬伤、感染和流血状态，并为每个身体部位恢复 10–25 点生命值 */
export type GiveAid = "give_aid";

/**对范围内的每个 NPC 盟友执行 give_aid 效果 */
export type GiveAidAll = "give_aid_all";

/**为角色提供一次理发，获得持续 12 小时的士气提升 */
export type BuyHaircut = "buy_haircut";

/**为角色提供一次剃须，获得持续 6 小时的士气提升 */
export type BuyShave = "buy_shave";

/**与角色进行愉快交谈，获得持续 6 小时的士气提升 */
export type MoraleChat = "morale_chat";

/**让角色收起（解除持握）当前武器 */
export type PlayerWeaponAway = "player_weapon_away";

/**让角色丢弃当前武器 */
export type PlayerWeaponDrop = "player_weapon_drop";

//#endregion

//#region Trade / Items

/**打开交易界面，允许与 NPC 进行交易 */
export type StartTrade = "start_trade";

/**允许你的角色从 NPC 的物品栏中选择物品并转移到你的物品栏中 */
export type GiveEquipment = "give_equipment";

/**允许玩家手动为 NPC 选择风格。仅用于模组，不适用于原版 DDA */
export type PickStyle = "pick_style";

/**将角色物品转移给 NPC（若 NPC 有空间和承重能力） */
export type NpcGetsItem = "npc_gets_item";

/**将角色物品转移给 NPC 并尝试装备（若 NPC 接受） */
export type NpcGetsItemToUse = "npc_gets_item_to_use";

/**你的角色获得指定物品或数量的副本
 * 如果在 NPC 对话中使用，则物品视为由 NPC 赠送
 * 如果传入的是变量物品名，则使用该类型的物品
 */
export type SpawnItem = TalkerVar<{
    /**要生成的物品ID */
    spawn_item: (IDExpr<ItemID>);
    /**生成数量  
     * @default 1
    */
    count?: (NumberExpr);
    /**如果指定容器则物品将被放入容器中  
     * @default null
     */
    container?: (IDExpr<ItemID>);
    /**如果为 true，则从指定物品组生成物品, 此时忽略 "count" 和 "container"  
     * @default false
     */
    use_item_group?: boolean;
    /**如果为 true，则不显示提示信息  
     * @default false
     */
    suppress_message?: boolean;
    /**如果为 true，角色会尝试装备该物品  
     * @default false
     */
    force_equip?: boolean;
    /**物品将包含数组中的所有标志  
     * @default []
     */
    flags?: FlagID[];
},'spawn_item'>;

/**NPC 将出售指定物品或数量的副本给你的角色，物品可放入容器中，并从 op_of_u.owed 中扣除 cost。
 * 如果 op_of_u.owed 小于 cost，将打开交易窗口，玩家需通过交易补足差额，否则 NPC 不会交付物品。
 */
export type BuyItem = {
    /**要购买的物品ID */
    u_buy_item: (IDExpr<ItemID>);
    /**要购买的物品价值 */
    cost: (NumberExpr);
    /**购买数量 */
    count?: (NumberExpr);
    /**如果指定容器则物品将被放入容器中 */
    container?: (IDExpr<ItemID>);
    /**如果为 true，则从指定物品组生成物品（此时忽略 "count" 和 "container"）  
     * @default false
     */
    use_item_group?: boolean;
    /**如果为 true，则不显示提示信息  
     * @default false
     */
    suppress_message?: boolean;
    /**物品将包含数组中的所有标志 */
    flags?: FlagID[];
    true_eocs?: (ParamsEoc);
    false_eocs?: (ParamsEoc);
};

/**你的角色将物品或数量副本交给 NPC，并将 cost 加入 NPC 的 op_of_u.owed（如果指定）。
 * 如果未指定 cost，则角色无偿赠送物品。
 * 若角色没有足够数量的物品，该效果将失败，因此应提前检查。
 */
export type SellItem = {
    /**要出售的物品ID */
    u_sell_item: (IDExpr<ItemID>);
    /**出售加个 */
    cost?: number;
    /**出售个数 */
    count?: number;
    /**出售成功时的eoc */
    true_eocs?: (ParamsEoc);
    /**出售失败时的eoc */
    false_eocs?: (ParamsEoc);
};

/**仅在 repeat_response 之后有效。
 * 玩家将 repeat_response 中的所有物品与 NPC 进行批量交易。
 * u_bulk_trade_accept 表示玩家失去物品并获得等值的 NPC 阵营货币；
 * npc_bulk_trade_accept 表示玩家获得 NPC 的物品并支付等值的 NPC 阵营货币。
 * 如果有剩余价值或 NPC 没有阵营货币，剩余部分将计入 NPC 的 op_of_u.owed。
 * 如果指定了数量，则仅移动该数量的物品或充能。
 */
export type BulkTradeAccept = TalkerStr<"bulk_trade_accept">;

/**仅在 repeat_response 之后有效。
 * 玩家或 NPC 将 repeat_response 中的所有物品进行批量转移。
 * u_bulk_donate 表示玩家失去物品并由 NPC 接收；
 * npc_bulk_donate 表示玩家获得 NPC 的物品并由 NPC 失去。
 * 如果指定了数量，则仅移动该数量的物品或充能。
 */
export type BulkDonate = TalkerStr<"bulk_donate">;

/**从你的角色现金中扣除指定金额。
 * 负值表示角色获得现金。
 * 已弃用，NPC 不应再使用电子货币，仅使用个人债务与物品。
 * 如果成功花费现金，则执行 true_eocs 中的所有 effect_on_conditions，否则执行 false_eocs 中的所有条件。
 */
export type SpendCash = {
    /**增减现金 */
    u_spend_cash: (NumberExpr);
    /**成功时的eoc */
    true_eocs?: (ParamsEoc);
    /**失败时的eoc */
    false_eocs?: (ParamsEoc);
};

/**根据 mod_list 增加 NPC 对玩家的债务。例如以下配置将根据 NPC 的利他值和对玩家的评价值增加债务：
 * @example
 * { "effect": { "add_debt": [ [ "ALTRUISM", 3 ], [ "VALUE", 2 ], [ "TOTAL", 500 ] ] } }
 */
export type AddDebt = {
    /**根据 mod_list 增加 NPC 对玩家的债务 */
    add_debt: [IDExpr<TraitMod>, NumberExpr][];
};

/**你或 NPC 将从物品栏中删除指定物品、数量副本或充能次数。
 * 如果你或 NPC 没有足够数量或充能，该效果将失败，因此应使用 u_has_items 或 npc_has_items 进行检查。
 */
export type ConsumeItem = TalkerVar<{
    consume_item: IDExpr<ItemID>;
    /**数量 */
    count?: (NumberExpr);
    /**充能数量 */
    charges?: (NumberExpr);
    /**为true时将显示消息给予npc物品  
     * 如果为 true，u_consume_item 会显示角色将物品交给 NPC 的提示信息, npc_consume_item 不受此影响  
     * @default false
     */
    popup?: boolean;
},"consume_item">;

/**你或 NPC 将无条件删除物品栏中的所有指定物品实例。
 * 即使你或 NPC 没有该物品也不会失败
 */
export type RemoveItemWith = TalkerVar<{
    remove_item_with: IDExpr<ItemID>;
},'remove_item_with'>;

/**NPC 将给予你的角色指定数量的怪物作为宠物，并从 op_of_u.owed 中扣除 cost（如果指定）。
 * 如果 op_of_u.owed 小于 cost，将打开交易窗口，玩家需通过交易补足差额，否则 NPC 不会交付怪物。
 */
export type BuyMonster = {
    u_buy_monster: string;
    /**价格
     * 如果未指定 cost，则 NPC 无偿赠送怪物
     */
    cost?: number;
    /**个数  
     * @default 1
    */
    count?: number;
    /**如果指定了，则怪物将使用该名称 */
    name?: string;
    /**如果为 true，则怪物将获得“安抚”效果 */
    pacified?: boolean;
    /**成功时的eoc */
    true_eocs?: (ParamsEoc);
    /**失败时的eoc */
    false_eocs?: (ParamsEoc);
};

//#endregion


//#region Behavior / AI

/**将 NPC 设置为守卫。如果是盟友并处于营地中，则会被分配到该营地。*/
export type AssignGuard = "assign_guard";

/**解除 NPC 的守卫职责（另见 assign_guard）。友好 NPC 将恢复跟随状态。*/
export type StopGuard = "stop_guard";

/**NPC 将与玩家一起建立一个阵营营地。*/
export type StartCamp = "start_camp";

/**NPC 会立即将其所在格子及相邻格子上的所有食物分配到本地营地的食物储藏室中
 * 要求该营地存在，并且 NPC 有权限访问该营地
 */
export type DistributeFoodAuto = "distribute_food_auto";

/**唤醒正在睡觉但未被镇静的 NPC */
export type WakeUp = "wake_up";

/**根据玩家的评估技能，显示 NPC 的属性。*/
export type RevealStats = "reveal_stats";

/**结束对话，并使 NPC 从此忽略你。*/
export type EndConversation = "end_conversation";

/**结束对话并使 NPC 敌对，同时添加一条角色挑衅 NPC 的消息。*/
export type InsultCombat = "insult_combat";

/**使 NPC 敌对并结束对话。*/
export type Hostile = "hostile";

/**使 NPC 从你的角色身边逃离。*/
export type Flee = "flee";

/**使 NPC 跟随你的角色，加入 “你的追随者” 阵营。*/
export type Follow = "follow";

/**使 NPC 离开 “你的追随者” 阵营并停止跟随你的角色。*/
export type Leave = "leave";

/**使 NPC 跟随你的角色，但不改变阵营。*/
export type FollowOnly = "follow_only";

/**使 NPC 停止跟随你的角色，但不改变阵营。*/
export type StopFollowing = "stop_following";

/**使 NPC 对你的角色产生积极好感。*/
export type NpcThankful = "npc_thankful";

/**使 NPC 丢弃其武器 仅限npc */
export type DropWeapon = "drop_weapon";

/**将 NPC 的态度改为中立。*/
export type StrangerNeutral = "stranger_neutral";

/**NPC 会接近你的角色并进行抢劫，如果你的角色反抗则会发动攻击。*/
export type StartMugging = "start_mugging";

/**NPC 会获得 LEAD 态度，并给予你的角色一个“前往安全地带”的任务。*/
export type LeadToSafety = "lead_to_safety";

/**NPC 会教授你的角色某项技能或武术。
 * 注意：当前代码要求通过 "topic": "TALK_TRAIN" 来启动训练，并在其中选择要训练的内容。
 * 若在 "TALK_TRAIN" 之外启动训练将会报错。
 */
export type StartTraining = "start_training";

/**NPC 会接受玩家教授的技能或武术训练。*/
export type StartTrainingNpc = "start_training_npc";

/**打开一个对话框，选择哪些角色将参与由该 NPC 主持的训练研讨会。*/
export type StartTrainingSeminar = "start_training_seminar";


/**NPC 会根据其角色向你提供一组盟友 NPC 的任务列表。*/
export type CompanionMission = {
    /**NPC 会根据其角色向你提供一组盟友 NPC 的任务列表。*/
    companion_mission: string;
};


/**NPC 会根据本地营地向你提供一组盟友 NPC 的任务列表。*/
export type BasecampMission = "basecamp_mission";

/**NPC 会从你的角色物品栏中安装一个生化植入物到你的角色身上，使用极高的技能，并根据手术难度收取费用。*/
export type BionicInstall = "bionic_install";

/**NPC 会从你的角色身上移除一个生化植入物，使用极高的技能，并根据手术难度收取费用。*/
export type BionicRemove = "bionic_remove";

/**将 NPC 的职业更改为新值。*/
export type ClassChange = TalkerVar<{
    /**将 NPC 的职业更改为新值。*/
    class_change: IDExpr<NpcClassID>;
},'class_change'>;

/**将 NPC 的阵营归属更改为新值。*/
export type FactionChange = TalkerVar<{
    /**将 NPC 的阵营归属更改为新值。*/
    faction_change: IDExpr<NPCFactionID>;
},'faction_change'>;

/**提升你在 NPC 当前阵营中的声望，若为负值则降低声望。*/
export type FactionRep = {
    /**提升你在 NPC 当前阵营中的声望，若为负值则降低声望。*/
    u_faction_rep: (NumberExpr);
};

/**切换一个布尔型 NPC 追随者 AI 规则的值，例如 "use_silent" 或 "allow_bash"。*/
export type ToggleNpcRule = {
    /**切换一个布尔型 NPC 追随者 AI 规则的值，例如 "use_silent" 或 "allow_bash"。*/
    toggle_npc_rule: string;
};

/**设置一个布尔型 NPC 追随者 AI 规则的值，例如 "use_silent" 或 "allow_bash"。*/
export type SetNpcRule = {
    /**设置一个布尔型 NPC 追随者 AI 规则的值，例如 "use_silent" 或 "allow_bash"。*/
    set_npc_rule: string;
};

/**清除一个布尔型 NPC 追随者 AI 规则的值，例如 "use_silent" 或 "allow_bash"。*/
export type ClearNpcRule = {
    /**清除一个布尔型 NPC 追随者 AI 规则的值，例如 "use_silent" 或 "allow_bash"。*/
    clear_npc_rule: string;
};

/**将 NPC 追随者的交战距离规则设置为指定值。*/
export type SetNpcEngagementRule = {
    /**将 NPC 追随者的交战距离规则设置为指定值。*/
    set_npc_engagement_rule: string;
};

/**将 NPC 追随者的瞄准速度规则设置为指定值。*/
export type SetNpcAimRule = {
    /**将 NPC 追随者的瞄准速度规则设置为指定值。*/
    set_npc_aim_rule: string;
};

/**NPC 会前往 assign_mission_target_object 所指定的位置。
 * 详见任务文档中的 assign_mission_target 参数说明。
 * 如果目标被成功分配，则执行 true_eocs 中的所有 effect_on_conditions，否则执行 false_eocs 中的所有条件。
 */
export type SetGoal = TalkerVar<{
    /**NPC 会前往 assign_mission_target_object 所指定的位置*/
    set_goal?: (AssignMissionTarget);
    /**成功时的eoc */
    true_eocs?: (ParamsEoc);
    /**失败时的eoc */
    false_eocs?: (ParamsEoc);
},'set_goal'>;

/**将 NPC 的守卫位置设置为 _set_guard_pos 的内容。
 * 如果 NPC 拥有 RETURN_TO_START_POS 特性，则在空闲时会尝试移动到该位置。
 * 如果 unique_id为 true，则 NPC 的 unique_id 会作为变量名的前缀。
 * 例如，unique_id 为 GUARD1 的守卫会在如下 JSON 中检查变量 GUARD1_First：
 * @example
 * { "u_set_guard_pos": { "global_val": "_First" }, "unique_id": true }
 */
export type SetGuardPos = TalkerVar<{
    /**将 NPC 的守卫位置设置为 _set_guard_pos 的内容。*/
    set_guard_pos?: (LocExpr);
    /**如果为 true，则 NPC 的 unique_id 会作为变量名的前缀
     * @default false
     */
    unique_id?: boolean;
},'set_guard_pos'>;


//#endregion

