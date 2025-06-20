import { BoolObj, CondObj, IDObj, LocObj, NumObj, StrObj, TalekrObj, TimeObj } from "../VariableObject";
import { SoundEffectID, SoundEffectVariantID } from "Schema/SoundEffect";
import { EocID, InlineEoc, TalkerStr, TalkerVar, ToFEffect } from "../Eoc";
import { EocEffect, ItemSearchData, ParamsEoc } from "./EocEffectIndex";
import { TalkTopicID } from "Schema/TalkTopic";
import { MissionDefinitionID } from "Schema/MissionDefinition";
import { DescText, Time } from "Schema/GenericDefine";
import { ItemGroupID } from "Schema/ItemGroup";


/**math赋值表达式 */
export type MathAssignExp = {
    math:[string,"="|"+="|"-="|"*="|"/=",string]
};

/**播放声音效果
 * 从声音包中播放一个声音效果
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 * @example
 * // 播放bionics声音, 变体为pixelated, 音量为50
 * { "sound_effect": "pixelated", "id": "bionics", "volume": 50 }
 */
export type SoundEffect = {
    /**要使用的声音效果
     * 对应sound_effect类型中的variant字段
     */
    sound_effect: (IDObj<SoundEffectVariantID>);
    /**用于播放的ID
     * 对应sound_effect类型中的id字段
     */
    id?: (IDObj<SoundEffectID>);
    /**是否为户外事件
     * 如果为true且玩家在地下, 玩家听到声音的可能性较小
     * @default false
     */
    outdoor_event?: boolean;
    /**声音播放的音量
     * 受听力修饰符影响
     * @default 80
     */
    volume?: (NumObj);
}

/**打开对话
 * 在参与者之间打开一个对话; 这只应该在effect_on_conditions中使用, 而不是在实际的npc对话中
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 * @example
 * // 打开指定topic的对话
 * { "open_dialogue": { "topic": "TALK_PERK_MENU_MAIN" } }
 * // 打开与电脑的对话 (电脑在地图端定义了 "chat_topics": [ "COMP_REFUGEE_CENTER_MAIN" ]) 
 * {
 *   "id": "EOC_REFUGEE_CENTER_COMPUTER",
 *   "type": "effect_on_condition",
 *   "effect": [ "open_dialogue" ]
 * }
 */
export type OpenDialogue = {
    /**对话主题
     * 如果使用, 将使用此主题与一个空的talker进行对话, 而不是与参与者对话
     */
    topic?: (IDObj<TalkTopicID>);
    /**对话成功时运行的EOCs
     * 如果对话成功, 将运行所有true_eocs中的EOCs
     */
    true_eocs?: EocEffect[];
    /**对话失败时运行的EOCs
     * 如果对话失败, 将运行所有false_eocs中的EOCs
     */
    false_eocs?: EocEffect[];
}

/**接管NPC控制权
 * 如果beta talker是NPC, 接管其控制权
 * 适用于: NPC
 * @example
 * // 接管NPC控制权
 * "effect": [ "take_control" ]
 * // 接管NPC控制权; 如果成功运行EOC_GOOD, 失败运行EOC_BAD
 * { "take_control": { "true_eocs": [ "EOC_GOOD" ], "false_eocs": [ "EOC_BAD" ] } }
 */
export type TakeControl = "take_control"|{
    /**接管控制权
     * 使你控制NPC; 仅当avatar (你) 是alpha talker且beta talker是NPC时有效
     */
    take_control: (ToFEffect);
}

/**打开跟随者控制菜单
 * 打开一个菜单来选择要控制的跟随者. 仅对你的跟随者有效
 * 适用于: Avatar
 * @example
 * // 打开切换角色的菜单
 * "effect": [ "take_control_menu" ]
 */
export type TakeControlMenu = "take_control_menu";


/**授予成就
 * 将指定成就标记为完成
 * 适用于: Avatar
 * @example
 * // 授予escaped_the_cataclysm成就
 * { "give_achievement": "escaped_the_cataclysm" }
 */
export type GiveAchievement = {
    /**要授予的成就 */
    //give_achievement: (IDObj<>);
    give_achievement: (StrObj);
}


/**分配任务
 * 将任务分配给玩家
 * 适用于: Avatar
 * @example
 * // 分配一个MISSION_REACH_FAKE_DAVE任务, 必须在接下来的17小时内完成
 * { "assign_mission": "MISSION_REACH_FAKE_DAVE", "deadline": { "math": [ "time('now') + time(' 17 h')" ] } }
 */
export type AssignMission = {
    /**要分配给玩家的任务 */
    assign_mission: IDObj<MissionDefinitionID>;
    /**任务截止时间
     * 如果任务在此时间点前未完成, 将自动失败
     */
    deadline?: (TimeObj);
}

/**移除活动任务
 * 从玩家的活动任务列表中移除任务, 但不会导致任务失败
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 * @example
 * // 从你的列表中移除MISSION_BONUS_KILL_BOSS任务
 * { "remove_active_mission": "MISSION_BONUS_KILL_BOSS" }
 */
export type RemoveActiveMission = {
    /**要移除的任务 */
    remove_active_mission: IDObj<MissionDefinitionID>;
}


/**完成任务
 * 以某种方式完成玩家拥有的任务
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 * @example
 * // 将DID_I_WIN任务标记为失败
 * { "finish_mission": "DID_I_WIN" }
 * // 将DID_I_WIN任务标记为成功
 * { "finish_mission": "DID_I_WIN", "success": true }
 * // 完成DID_I_WIN任务的第一步
 * { "finish_mission": "DID_I_WIN", "step": 1 }
 */
export type FinishMission = {
    /**要完成的任务ID
     */
    finish_mission: IDObj<MissionDefinitionID>;
    /**是否成功完成
     * @default false
     */
    success?: boolean;
    /**完成到指定步骤
     * 如果使用, 将任务完成到此步骤
     */
    step?: number;
}

/**提供任务
 * 将此任务添加到NPC可提供的任务列表中
 * 适用于: NPC
 * @example
 * // NPC现在可以提供MISSION_GET_RELIC任务
 * { "offer_mission": "MISSION_GET_RELIC" }
 * // 与上面相同
 * { "offer_mission": [ "MISSION_GET_RELIC" ] }
 * // NPC现在可以提供MISSION_A, B和C任务
 * { "offer_mission": [ "MISSION_A", "MISSION_B", "MISSION_C" ] }
 */
export type OfferMission = {
    /**要提供的任务ID */
    offer_mission: IDObj<MissionDefinitionID> | IDObj<MissionDefinitionID>[];
}


/**运行EOCs
 * 运行另一个EOC. 可以是单独的EOC, 也可以是run_eocs效果内的内联EOC
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 * @example
 * // 运行EOC_DO_GOOD_THING EOC
 * { "run_eocs": [ "EOC_DO_GOOD_THING" ] }
 * // 运行内联的are_you_strong EOC
 * "run_eocs": {
 *   "id": "are_you_strong",
 *   "condition": { "math": [ "u_val('strength') > 8" ] },
 *   "effect": [ { "u_message": "You are strong" } ],
 *   "false_effect": [ { "u_message": "You are normal" } ]
 * }
 */
export type RunEocs = {
    /**要运行的EOC或EOCs
     * 可以是EOC ID, 内联EOC或变量对象, 或它们的数组
     */
    run_eocs: (ParamsEoc);
    /**迭代次数
     * 如果使用, run_eocs中的所有eoc将重复此次数. EOCs按顺序重复; 
     * 例如: "run_eocs": [ "A", "B" ], "repeat": 3 将执行 A, B, A, B, A, B
     * @default 1
     */
    iterations?: (NumObj);
    /**条件
     * 如果使用, 只要此条件返回true, EOC就会运行. 
     * 如果使用"condition", 可以使用"iterations"将运行次数限制为特定数量 (默认为100次, 直到终止) 
     */
    condition?: (BoolObj);
    /**延迟触发时间
     * 如果使用, EOC将在未来此时间量后激活; 默认为0, 表示立即运行. 
     * 如果EOC是全局的, avatar将是u, npc将无效. 
     * 如果EOC不是全局的, 它将排队给当前alpha (如果他们是角色（avatar或npc) ）否则不会排队. 
     * 与"condition"和"iterations"不兼容
     */
    time_in_future?: (TimeObj);
    /**随机化延迟触发时间
     * 与time_in_future一起使用; 
     * 如果为false, 整个EOC数组将在完全相同的时刻运行; 
     * 如果为true, 数组中的每个EOC将一次又一次地选择自己的时间
     */
    randomize_time_in_future?: boolean;
    /**alpha位置
     * 允许通过定义u_location_variable来交换talker, EOC应该在该位置运行. 
     * 将alpha talker设置为该位置的生物. 
     */
    alpha_loc?: (LocObj);
    /**beta位置
     * 允许通过定义u_location_variable来交换talker, EOC应该在该位置运行. 
     * 将beta talker设置为该位置的生物. 
     */
    beta_loc?: (LocObj);
    /**alpha talker
     * 设置alpha talker. 这可以是character_id (可以从EOC事件或u_set_talker的结果获取) , 
     * 或一些硬编码值: 
     * "": null talker
     * "u"/"npc": EOC的alpha/beta talker (应该是Avatar/Character/NPC/Monster) 
     * "avatar": 你的avatar
     * 注意: 如果同时使用"alpha_loc"和"alpha_talker", 将忽略"alpha_talker", beta也是如此. 
     */
    alpha_talker?: (TalekrObj);
    /**beta talker
     * 设置beta talker. 这可以是character_id (可以从EOC事件或u_set_talker的结果获取) , 
     * 或一些硬编码值: 
     * "": null talker
     * "u"/"npc": EOC的alpha/beta talker (应该是Avatar/Character/NPC/Monster) 
     * "avatar": 你的avatar
     * 注意: 如果同时使用"beta_loc"和"beta_talker", 将忽略"beta_talker", alpha也是如此. 
     */
    beta_talker?: (TalekrObj);
    /**失败时运行的EOCs
     * 在以下情况下运行false EOCs: 
     * 1. "alpha_loc"/"beta_loc"处没有生物, 或
     * 2. "alpha_talker"或"beta_talker"在游戏中不存在 (例如死亡的NPC) , 或
     * 3. alpha和beta talker都为null
     */
    false_eocs?: (ParamsEoc);
    /**上下文变量
     * 将传递给EOC的上下文变量; 数值应指定为字符串; 
     * 当变量是对象并且i18n成员设置为true时, 变量将被本地化; 
     * 可以在运行的EOC内使用expects_vars条件来确保在EOC运行之前每个变量都存在
     */
    variables?: {[k:string]:string|boolean|number};
}


/**NPC运行EOCs
 * NPC运行由此效果提供的EOCs; 可以在现实气泡之外工作
 * 适用于: NPC
 * @example
 * // 所有你能看到的30格范围内的NPC运行EOC_DEATH和EOC_TAXES
 * {
 *   "type": "effect_on_condition",
 *   "id": "EOC_KILL_ALL_NPCS_YOU_SEE_30_TILES",
 *   "effect": [
 *     {
 *       "u_run_npc_eocs": [ "EOC_DEATH", "EOC_TAXES" ],
 *       "npc_range": 30,
 *       "npc_must_see": true
 *     }
 *   ]
 * }
 */
export type RunNpcEocs = TalkerVar<{
    /**要运行的EOCs
     * NPC将运行的EOCs数组
     */
    run_npc_eocs?: (ParamsEoc);
    /**NPC的唯一ID
     * 将受影响的NPC的ID; 如果没有ID, 则效果会在你的现实气泡中的每个NPC上运行 (如果"local": true) , 
     * 或在世界上的每个NPC上运行 (如果"local": false) ; 
     * NPC的唯一ID在mapgen中使用npcs或place_npcs指定
     */
    unique_ids?: (StrObj) | (StrObj)[];
    /**是否为本地
     * @default false
     * 如果为true, 效果将在世界上的每个NPC上运行; 
     * 如果为false, 效果仅在你的现实气泡中的NPC上运行
     */
    local?: boolean;
    /**NPC范围
     * 如果使用, 只有在此范围内的NPC会受到影响
     */
    npc_range?: (NumObj);
    /**是否必须可见
     * @default false
     * 如果为true, 只有你能看到的NPC会受到影响
     */
    npc_must_see?: boolean;
},'run_npc_eocs'>

/**怪物运行EOCs
 * 怪物运行由此效果提供的EOCs; 仅在现实气泡内工作
 * 适用于: Monster
 * @example
 * // 在alpha talker周围36格范围内随机选择一半的怪物运行EOC_KILL_SHADOW
 * {
 *   "npc_run_monster_eocs": [ { 
 *     "id": "EOC_BANISH_MONSTERS_AROUND_MANSION_CENTER", 
 *     "condition": { "math": [ "rand(1) == 0" ] }, 
 *     "effect": { "run_eocs": "EOC_KILL_SHADOW" } 
 *   } ],
 *   "monster_range": 36
 * }
 */
export type RunMonsterEocs = TalkerVar<{
    /**要运行的EOCs
     * 怪物将运行的EOCs数组
     */
    run_monster_eocs?: (ParamsEoc);
    /**怪物类型ID
     * 应该受到影响的mtype_id
     */
    mtype_ids?: (StrObj)[];
    /**怪物范围
     * 如果使用, 只有在此范围内的怪物会受到影响
     */
    monster_range?: (NumObj);
    /**是否必须可见
     * @default false
     * 如果为true, 只有你能看到的怪物会受到影响
     */
    monster_must_see?: boolean;
},'run_monster_eocs'>


/**在物品上运行EOCs
 * 在你或NPC的物品栏中的物品上运行EOCs
 * 适用于: Item
 * @example
 * // 选择角色手中的物品, 并在其上运行EOC_DESTROY_ITEM EOC
 * {
 *   "u_run_inv_eocs": "random",
 *   "search_data": [ { "wielded_only": true } ],
 *   "true_eocs": [ "EOC_DESTROY_ITEM" ]
 * }
 */
export type RunInvEocs = TalkerVar<{
    /**要运行的EOCs
     * 物品将运行的EOCs
     * 值可以是: 
     * all          - 选择所有匹配条件的物品
     * random       - 从所有匹配条件的物品中随机选择一个
     * manual       - 打开一个菜单, 显示所有可以选择的物品, 你可以选择一个
     * manual_mult  - 与manual相同, 但可以选择多个物品
     */
    run_inv_eocs?: "all" | "random" | "manual" | "manual_mult";
    /**搜索数据  
     * 设置目标物品的条件; 如果没有search_data, 则可以选择任何物品  
     * 条件可以是:  
     * id           - 特定物品的id;  
     * category     - 物品的类别 (区分大小写, 应始终使用小写);  
     * flags        - 物品具有的标志  
     * material     - 物品的材料;  
     * worn_only    - 如果为true, 只返回穿着的物品;  
     * wielded_only - 如果为true, 只返回手持的物品  
     */
    search_data?: ItemSearchData[];
    /**菜单标题
     * 如果使用manual或manual_mult值时显示的菜单名称
     */
    title?: (StrObj);
    /**成功时运行的EOCs
     * 如果成功选择了物品, 将运行所有true_eocs中的EOCs
     */
    true_eocs?: (ParamsEoc);
    /**失败时运行的EOCs
     * 如果未能选择物品, 将运行所有false_eocs中的EOCs
     */
    false_eocs?: (ParamsEoc);
},'run_inv_eocs'>;


/**在地图上运行EOCs
 * 选择你, npc或target_var周围的所有地块, 将其坐标存储在store_coordinates_in中, 然后为每个地块检查EOC条件
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 * @example
 * // 选择玩家周围6格范围内的地块, 检查是否有TREE标志的地形
 * {
 *   "u_map_run_eocs": [ "SOME_ANOTHER_TEST_EOC" ],
 *   "range": 6,
 *   "store_coordinates_in": { "context_val": "loc" },
 *   "condition": { "map_terrain_with_flag": "TREE", "loc": { "context_val": "loc" } }
 * }
 */
export type MapRunEocs = TalkerVar<{
    /**要运行的EOCs
     * 将运行的EOC或EOCs
     */
    map_run_eocs?: (ParamsEoc);
    /**坐标存储变量
     * 存储测试坐标的变量
     */
    store_coordinates_in?: (LocObj);
    /**条件
     * 检查是否需要运行EOC的条件. 可以 (且应该) 使用store_coordinates_in中的变量. 
     * @default true
     */
    condition?: (BoolObj);
    /**目标变量
     * 游戏应该在其周围扫描的位置变量; 如果省略, 则使用u_或npc_位置
     */
    target_var?: (LocObj);
    /**范围
     * 搜索半径应该有多大
     * @default 1 (以角色为中心的3x3方块)
     */
    range?: (NumObj);
    /**是否在第一次匹配后停止
     * 如果为true, 在第一个条件满足后停止执行; 
     * 如果为false, 在所有满足条件的地块上运行EOC. 
     * @default false
     */
    stop_at_first?: boolean;
},'map_run_eocs'>;

/**在地图物品上运行EOCs
 * 在地图上搜索物品并在其上运行EOC
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 * @example
 * // 在你5-10格范围内的所有物品上运行EOC_GOOD
 * {
 *   "u_map_run_item_eocs": "all",
 *   "min_radius": 5,
 *   "max_radius": 10,
 *   "title": "Something good?",
 *   "true_eocs": [ "EOC_GOOD" ]
 * }
 */
export type MapRunItemEocs = TalkerVar<{
    /**要运行的EOCs
     * 物品将运行的EOCs
     * 值可以是: 
     * all - 选择所有匹配条件的物品
     * random - 从所有匹配条件的物品中随机选择一个
     * manual - 打开一个菜单, 显示所有可以选择的物品, 你可以选择一个
     * manual_mult - 与manual相同, 但可以选择多个物品
     */
    map_run_item_eocs?: "all" | "random" | "manual" | "manual_mult";
    /**位置
     * 将扫描物品的位置; 如果没有指定, 则只扫描talker所在的地块
     */
    loc?: (LocObj);
    /**最小半径
     * 将搜索的位置/talker周围的最小半径
     */
    min_radius?: (NumObj);
    /**最大半径
     * 将搜索的位置/talker周围的最大半径
     */
    max_radius?: (NumObj);
    /**菜单标题
     * 如果使用manual或manual_mult值时显示的菜单名称
     */
    title?: (StrObj);
    /**搜索数据
     * 设置目标物品的条件; 如果没有search_data, 则可以选择任何物品
     */
    search_data?: ItemSearchData[];
    /**成功时运行的EOCs
     * 如果成功选择了物品, 将运行所有true_eocs中的EOCs
     */
    true_eocs?: (ParamsEoc);
    /**失败时运行的EOCs
     * 如果未能选择物品, 将运行所有false_eocs中的EOCs
     */
    false_eocs?: (ParamsEoc);
},'map_run_item_eocs'>;


/**揭示地图
 * 揭示特定位置变量周围的地图区域
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 * @example
 * // 揭示角色周围3格的区域
 * {
 *   "set_string_var": { "mutator": "u_loc_relative", "target": "(0,0,0)" }, 
 *   "target_var": { "context_val": "loc" }
 * },
 * { "reveal_map": { "context_val": "loc" }, "radius": 3 }
 */
export type RevealMap = {
    /**要揭示的位置
     * 将揭示地图的位置变量
     */
    reveal_map: (LocObj);
    /**半径
     * 揭示区域的大小
     * @default 0
     */
    radius: (NumObj);
};


/**揭示路线
 * 使用最近的道路揭示两个位置变量之间的路线
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 * @example
 * // 揭示你和50个地图格西边之间的路径
 * {
 *   "set_string_var": { "mutator": "u_loc_relative", "target": "(0,0,0)" }, 
 *   "target_var": { "context_val": "loc_a" }
 * },
 * {
 *   "set_string_var": { "mutator": "u_loc_relative", "target": "(-1200,0,0)" }, 
 *   "target_var": { "context_val": "loc_b" }
 * },
 * {
 *   "reveal_route": { "context_val": "loc_a" }, 
 *   "target_var": { "context_val": "loc_b" }, 
 *   "radius": 3
 * }
 */
export type RevealRoute = {
    /**起点
     * 路线的起点位置变量
     */
    reveal_route: (LocObj);
    /**终点
     * 路线的终点位置变量
     */
    target_var: (LocObj);
    /**半径
     * 揭示路径的大小
     */
    radius?: (NumObj);
    /**仅道路
     * @default false
     * 如果为true, 只揭示道路地块
     */
    road_only?: boolean;
};


/**最近城市
 * 将附近最近城市的坐标存储在变量中
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 * @example
 * // 存储最近已知城市的坐标, 并打印变量
 * {
 *   "closest_city": { "context_val": "city" },
 *   "u_message": "Known city: <context_val:city>"
 * }
 */
export type ClosestCity = {
    /**城市位置
     * 存储找到的城市中心的位置变量
     * 额外发送上下文变量city_name (字符串) 和city_size (整数) 
     */
    closest_city: (LocObj);
    /**是否已知
     * @default true
     * 如果为true, 选择你知道的最近城市 (在地图上有黄色文本的城市名称) , 
     * 否则选择最近的城市, 即使你还没有访问过它
     */
    known?: boolean;
}


/**加权列表EOCs
 * 根据权重从列表中选择一个EOC激活
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 * @example
 * // 从列表中运行一个EOC
 * {
 *   "weighted_list_eocs": [
 *     [ "EOC_THING_1", 1 ],
 *     [ "EOC_THING_2", 1 ],
 *     [ "EOC_THING_3", 3 ],
 *     { "id": "EOC_THING_4", "effect": [ { "u_message": "A test message appears!", "type": "bad" } ] },
 *     [ "EOC_THING_5", { "math": [ "super_important_variable + 4" ] } ],
 *     [ "EOC_THING_6", { "math": [ "_super_important_context_variable + 4" ] } ],
 *     [ "EOC_THING_7", { "math": [ "33 + 77" ] } ]
 *   ]
 * }
 */
export type WeightedListEocs = {
    /**EOC列表
     * 将运行的EOC及其权重; EOC可以是ID或内联EOC, 权重可以是整数或变量对象
     */
    weighted_list_eocs: ((InlineEoc|EocID)|[(InlineEoc|EocID),NumObj])[];
}



/**运行EOC选择器
 * 打开一个菜单, 允许选择多个选项之一
 * 适用于: Avatar
 * @example
 * // 你可以从"Choose your destiny"列表中选择四个选项之一
 * {
 *   "run_eoc_selector": [ "EOC_OPTION_1", "EOC_OPTION_2", "EOC_OPTION_3", "EOC_OPTION_4" ],
 *   "names": [ "Option 1", "Option 2", "Option 3", "Option 4" ],
 *   "keys": [ "a", "b", "1", "2" ],
 *   "title": "Choose your destiny",
 *   "descriptions": [
 *     "Gives you something good",
 *     "Gives you something bad",
 *     "Gives you twice as good",
 *     "Gives you twice as bad, but condition is not met, so you can't pick it up"
 *   ]
 * }
 */
export type RunEocSelector = {
    /**EOC列表
     * 可以选择的EOC列表; 列出的EOC的条件将被检查, 不通过的将被灰显
     */
    run_eoc_selector: IDObj<EocID>[];
    /**选项名称
     * 将在列表上显示的选项名称; 名称数量应等于EOC数量
     */
    names?: (StrObj)[];
    /**选项描述
     * 将在列表上显示的选项描述; 描述数量应等于EOC数量
     */
    descriptions?: (StrObj)[];
    /**快捷键
     * 将用作选择每个EOC的快捷键的字符; 键数量应等于EOC数量
     */
    keys?: string[];
    /**标题
     * 将显示为列表名称的文本
     * @default "Select an option"
     */
    title?: (DescText);
    /**隐藏失败项
     * 如果为true, 检查失败的选项将从列表中完全移除, 而不是被灰显
     */
    hide_failing?: boolean;
    /**允许取消
     * 如果为true, 你可以退出菜单而不选择选项, 不会发生任何效果
     */
    allow_cancel?: boolean;
    /**高亮禁用项
     * 如果为true, 检查失败的选项仍然可以导航, 意味着你可以高亮它并阅读其描述. 
     * 如果allow_cancel为true, 选择它将被视为与退出相同
     */
    hilight_disabled?: boolean;
    /**变量
     * 将传递给EOC的变量; 数值应指定为字符串; 
     * 当变量是对象并且i18n成员设置为true时, 变量将被本地化; 
     * 可以使用expects_vars条件来确保在EOC运行之前每个变量都存在
     */
    variables?: {[k:string]:string|boolean|number};
}

/**随机获取剩余项
 * 如果你或NPC没有列出的所有仿生学, 突变, 法术或配方, 随机给予一个
 * 适用于: Avatar Character NPC
 * @example
 * // 尝试给你一个突变A, B或C, 如果你没有其中一个, 显示消息"You got %s!"; 
 * // 如果成功, 运行EOC_SUCCESS, 否则运行EOC_FAIL
 * {
 *   "u_roll_remainder": [ "mutationA", "mutationB", "mutationC" ],
 *   "type": "mutation",
 *   "message": "You got %s!",
 *   "true_eocs": [ "EOC_SUCCESS" ],
 *   "false_eocs": [ "EOC_FAIL" ]
 * }
 */
export type RollRemainder = TalkerVar<{
    /**要随机获取的项
     * 将被随机选择并给予的项
     */
    roll_remainder?: (StrObj) | (StrObj)[];
    /**项的类型
     * 将给予的项的类型; 可以是bionic, mutation, spell或recipe之一
     */
    type: (StrObj)|"bionic"|"mutation"|"spell"|"recipe";
    /**消息
     * 一旦remainder被使用, 将在日志中显示的消息; 
     * 可以在此消息中使用%s符号来写出将被给予的项的名称; 
     * 只有在roll成功时才会打印消息
     */
    message?: (StrObj);
    /**成功时运行的EOCs
     * 如果remainder为正, 将运行所有true_eocs中的EOCs
     */
    true_eocs?: (ParamsEoc);
    /**失败时运行的EOCs
     * 如果remainder为负, 将运行所有false_eocs中的EOCs
     */
    false_eocs?: (ParamsEoc);
},'roll_remainder'>;


/**条件判断
 * 设置在条件满足和不满足时执行的效果
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 * @example
 * // 第一次运行和之后运行时显示不同的消息
 * {
 *   "if": { "compare_string": [ "yes", { "u_val": "eoc_sample_if_else_test" } ] },
 *   "then": { "u_message": "You have variable." },
 *   "else": [
 *     { "u_message": "You don't have variable." },
 *     {
 *       "if": { "not": { "compare_string": [ "yes", { "u_val": "eoc_sample_if_else_test" } ] } },
 *       "then": [
 *         { "u_add_var": "eoc_sample_if_else_test", "value": "yes" },
 *         { "u_message": "Vriable added." }
 *       ]
 *     }
 *   ]
 * }
 */
export type IfCondition = {
    /**条件
     * 条件本身
     */
    if: BoolObj;
    /**条件满足时执行的效果
     * 当条件满足时执行的效果
     */
    then: EocEffect[];
    /**条件不满足时执行的效果
     * 当条件不满足时执行的效果
     */
    else?: EocEffect[];
}


/**开关语句
 * 检查值, 并根据它选择要运行的case
 * 适用于: Avatar Character NPC
 * @example
 * // 检查some_spell法术的等级, 并根据等级执行不同操作
 * {
 *   "switch": { "math": [ "u_spell_level('some_spell')" ] },
 *   "cases": [
 *     { "case": 0, "effect": { "u_cast_spell": { "id": "another_spell" } } },
 *     { "case": 3, "effect": { "u_add_effect": "drunk", "duration": "270 minutes" } },
 *     { "case": 6, "effect": { "u_lose_bionic": "bio_power_storage" } },
 *     { "case": 9, "effect": { "run_eocs": [ "EOC_DO_GOOD_THING" ] } },
 *     {
 *       "case": 12,
 *       "effect": [
 *         { "u_forget_martial_art": "style_eskrima" },
 *         { "u_forget_martial_art": "style_crane" },
 *         { "u_forget_martial_art": "style_judo" }
 *       ]
 *     }
 *   ]
 * }
 */
export type SwitchStatement = {
    /**要检查的值
     * 将被读取的值; 只能使用数值
     */
    switch: NumObj;
    /**case列表
     * 如果switch的值大于或等于此case, 将运行的效果
     */
    cases: {
        /**case值 */
        case: number;
        /**case值与switch传入NumObj相等时运行的效果 */
        effect: EocEffect|EocEffect[];
    }[];
}

/**遍历类型  
 * 影响 target 的类型  
 * == ids 时 target 可为 "bodypart"|"flag"|"trait"|"vitamin"  
 * == item_group 时 item_group 可为 ItemGroupID  
 * == monstergroup 时 item_group 可为 MonsterGroupID  
 * == array 时 item_group 可为 string[]  
*/
type ForeachType = "ids"|"item_group"|"monstergroup"|"array";

/**遍历目标  
 * 根据遍历类型变化  
 */
type ForeachTarget = "bodypart"|"flag"|"trait"|"vitamin"|
    ItemGroupID|string[];

/**遍历列表
 * 在变量中存储特定列表的值, 并重复执行效果
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 * @example
 * // 重置你的所有维生素
 * {
 *   "foreach": "ids",
 *   "var": { "context_val": "id" },
 *   "target": "vitamin",
 *   "effect": [ { "math": [ "u_vitamin(_id)", "=", "0" ] } ]
 * }
 */
export type ForEach = {
    /**列表类型
     * 列表的类型. 可用"ids", "item_group", "monstergroup", "array"
     * == ids 时 target 可为 "bodypart"|"flag"|"trait"|"vitamin"  
     * == item_group 时 target 可为 ItemGroupID  
     * == monstergroup 时 target 可为 MonsterGroupID  
     * == array 时 target 可为 string[]  
     */
    foreach: ForeachType;
    /**变量
     * 用于存储列表中值的变量
     */
    var: (StrObj);
    /**要执行的效果
     * 将执行的效果
     */
    effect: EocEffect[];
    /**目标
     * 根据"foreach"的值而变化. 
     * "ids": 列出游戏中出现的对象的ID. 可用"bodypart", "flag", "trait", "vitamin"
     * "item_group": 列出物品组中物品的ID
     * "monstergroup": 列出怪物组中怪物的ID
     * "array": 列出简单字符串
     */
    target: ForeachTarget;
}


/**设置talker
 * 将你或NPC的character_id存储到变量对象中
 * 适用于: Avatar Character NPC
 * @example
 * // 存储你的character_id并显示消息
 * {
 *   "effect": [ 
 *     { "u_set_talker": { "global_val": "u_character_id" } }, 
 *     { "u_message": "Your character id is <global_val:u_character_id>" }
 *   ]
 * }
 */
export type SetTalker = TalkerVar<{
    /**存储你的character_id的变量对象 */
    set_talker?: (TalekrObj);
},'set_talker'>;