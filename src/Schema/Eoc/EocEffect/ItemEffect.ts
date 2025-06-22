import { FlagID } from "Schema/Flag";
import { IDObj, LocObj, NumObj, StrObj, TimeObj } from "../VariableObject";
import { TalkerVar } from "../Eoc";
import { ItemID } from "Schema/Item";
import { ItemGroupID } from "Schema/ItemGroup";
import { OvermapTerrainID } from "Schema/OvermapTerrain";
import { MonsterGroupID } from "Schema/MonsterGroup";
import { MonsterID } from "Schema/Monster";
import { ParamsEoc } from "./EocEffectIndex";
import { NpcClassID } from "Schema/NpcClass";
import { NpcInstanceID } from "Schema/NpcInstance";
import { MutationID } from "Schema/Mutation";
import { EmitID } from "Schema/Emit";
import { FieldID } from "Schema/Field";
import { FaultID } from "Schema/Fault";
import { UpdateMapgenID } from "Schema/Mapgen";




/**设置标志
 * 给物品添加标志
 * 适用于: Item
 * @example
 * // 使物品变脏
 * { "npc_set_flag": "FILTHY" }
 */
export type SetFlag = TalkerVar<{
    /**要添加的标志ID */
    set_flag: (IDObj<FlagID>);
}, 'set_flag'>;

/**移除标志
 * 从物品移除标志
 * 适用于: Item
 * @example
 * // 使物品变干净
 * { "npc_unset_flag": "FILTHY" }
 */
export type UnsetFlag = TalkerVar<{
    /**要移除的标志ID */
    unset_flag: (IDObj<FlagID>);
}, 'unset_flag'>;



/**激活
 * 你激活beta talker / NPC激活alpha talker. 一个必须是Character, 另一个必须是物品. 
 * 适用于: Avatar Character NPC
 * @example
 * // 强制你消耗药物物品
 * { "u_activate": "consume_drug" }
 */
export type Activate = TalkerVar<{
    /**要激活的物品的use action ID */
    //activate: (IDObj<ActivateID>);
    activate: (StrObj);
    /**目标变量
     * 如果设置, 目标位置被强制为此变量的坐标
     */
    target_var?: (LocObj);
}, 'activate'>;



/**设置故障
 * 在物品上应用故障
 * 适用于: Item
 * @example
 * // Beta talker添加fault_electronic_blown_capacitor作为它的故障
 * { "npc_set_fault": "fault_electronic_blown_capacitor" }
 */
export type SetFault = TalkerVar<{
    /**要应用的故障ID */
    set_fault: (IDObj<FaultID>);
    /**强制
     * @default false
     * 如果为true, 即使物品没有定义它作为可能的故障, 也会应用故障
     */
    force?: boolean;
    /**消息
     * @default true
     * 如果为true, 故障会打印故障消息字段中定义的消息
     */
    message?: boolean;
}, 'set_fault'>;



/**设置随机故障
 * 从一个类型中选择一个随机故障, 并将其应用到物品上
 * 适用于: Item
 * @example
 * // Beta talker从shorted类型中添加一个随机故障作为它的故障
 * { "npc_set_random_fault_of_type": "shorted" }
 */
export type SetRandomFaultOfType = TalkerVar<{
    /**要应用的故障类型 */
    set_random_fault_of_type: (IDObj<FaultID>);
    /**强制
     * @default false
     * 如果为true, 即使物品没有定义它作为可能的故障, 也会应用故障
     */
    force?: boolean;
    /**消息
     * @default true
     * 如果为true, 故障会打印故障消息字段中定义的消息
     */
    message?: boolean;
}, 'set_random_fault_of_type'>;



/**生成物品
 * 生成并放置物品
 * 适用于: 不需要talker
 * @example
 * // 在地面上生成一个塑料瓶
 * {
 *   "type": "effect_on_condition",
 *   "id": "EOC_map_spawn_item",
 *   "effect": [
 *     { "set_string_var": { "mutator": "u_loc_relative", "target": "(0,1,0)" }, "target_var": { "context_val": "loc" } },
 *     { "map_spawn_item": "bottle_plastic", "loc": { "mutator": "u_loc_relative", "target": "(0,1,0)" } }
 *   ]
 * }
 */
export type MapSpawnItem = {
    /**要生成的物品ID或物品组 */
    map_spawn_item: (IDObj<ItemID>|IDObj<ItemGroupID>);
    /**位置
     * 物品生成的位置. 如果不使用, 则从玩家位置生成
     */
    loc?: (LocObj);
    /**数量
     * @default 1
     * 物品副本的数量
     */
    count?: (NumObj);
    /**容器
     * 容器的ID. 如果指定, 物品将包含在容器中
     */
    container?: (IDObj<ItemID>);
    /**使用物品组
     * @default false
     * 如果为true, 它将从给定的物品组创建物品.  ("count"和"container"将被忽略, 因为它们在物品组中定义) 
     */
    use_item_group?: boolean;
    /**标志
     * 物品将具有数组中的所有标志
     */
    flags?: (IDObj<FlagID>)[];
}

/**地图更新
 * 使用mapgen_update中描述的更改更新地图
 * 适用于: 不需要talker
 * @example
 * // 使用map_spawn_seller地图更新地图
 * { "mapgen_update": "map_spawn_seller" }
 * // 使用map_spawn_terrain, 然后map_spawn_furniture, 然后map_spawn_trap, 然后map_spawn_field更新地图
 * { "mapgen_update": [ "map_spawn_terrain", "map_spawn_furniture", "map_spawn_trap", "map_spawn_field" ] }
 * // 当as_soon_as_this_event_trigger事件发生时, 使用map_bridge更新small_pond
 * { "mapgen_update": "map_bridge", "om_terrain": "small_pond", "key": "as_soon_as_this_event_trigger" }
 * // 在ancilla_bar_loc坐标中, 使用nest_ancilla_bar_place_BEMs地图更新robofachq_subcc_a2
 * {
 *   "mapgen_update": "nest_ancilla_bar_place_BEMs",
 *   "om_terrain": "robofachq_subcc_a2",
 *   "target_var": { "global_val": "ancilla_bar_loc" }
 * }
 */
export type MapgenUpdate = {
    /**地图更新ID
     * 没有其他参数时, 使用update_mapgen_id ID中的更改更新玩家当前位置的地图图块. 
     * 如果使用数组, 则会为每个ID更新地图
     */
    mapgen_update: (IDObj<UpdateMapgenID>) | (IDObj<UpdateMapgenID>)[];
    /**未来时间
     * 如果使用, 地图更改将延迟这段时间. 可以使用"infinity", 使位置不更新, 直到关键事件发生
     */
    time_in_future?: (TimeObj);
    /**键
     * 可以在EoC外部调用以触发地图更新的事件的ID. 键应该是alter_timed_events
     */
    key?: (StrObj);
    /**目标变量
     * 如果使用, 将使用变量中的目标而不是玩家的当前位置. 它使用assign_mission_target语法
     */
    target_var?: (LocObj);
    /**地图地形
     * 要更新的地图地形
     */
    om_terrain?: (IDObj<OvermapTerrainID>);
}



/**恢复位置
 * 保存选定位置, 然后将其恢复到此状态
 * 通常用作带有"time_in_future": "infinity"的revert_location, 以保存位置的模型和某个键. 
 * 然后使用mapgen_update来改变位置. 最后, 调用带有键的alter_timed_events来实际恢复位置. 
 * 适用于: 不需要talker
 * @example
 * // 存储vitrified_farm_ground. 当调用vitrified_farm_escape_key时, 位置被恢复
 * {
 *   "revert_location": { "global_val": "vitrified_farm_ground" },
 *   "time_in_future": "infinite",
 *   "key": "vitrified_farm_escape_key"
 * }
 */
export type RevertLocation = {
    /**恢复位置
     * 存储位置的变量的ID
     */
    revert_location: (LocObj);
    /**未来时间
     * 位置应该何时恢复; 可以使用"infinity", 使位置不更新, 直到关键事件发生
     */
    time_in_future: (TimeObj);
    /**键
     * 可以在EoC外部调用以触发位置恢复的事件的ID. 键应该是alter_timed_events
     */
    key?: (StrObj);
}

/**改变定时事件
 * 所有具有此事件作为键的效果, 如果尚未触发, 将被触发
 * 通常与带有"time_in_future": "infinite"的mapgen_update或revert_location一起使用
 * 适用于: 不需要talker
 * @example
 * // 触发每个具有portal_dungeon作为键的效果
 * { "alter_timed_events": "portal_dungeon" }
 * // 例如, 如果存在此效果, 并且发生alter_timed_events, 位置将被恢复
 * {
 *   "revert_location": { "global_val": "portal_dungeon" },
 *   "time_in_future": "infinite",
 *   "key": "portal_dungeon_entrance"
 * }
 */
export type AlterTimedEvents = {
    /**改变定时事件
     * 可以在EoC外部调用以触发地图更新的事件的ID. 键应该是alter_timed_events
     */
    alter_timed_events: (StrObj);
    /**未来时间
     * 如果使用, 所有相关效果将不会立即触发, 而是在触发后的这段时间后触发
     */
    time_in_future?: (TimeObj);
}


/**闪电
 * 允许在电场中超级充电怪物, 闪电天气的遗留命令
 * 适用于: 不需要talker
 */
export type Lightning = "lightning";

/**下一个天气
 * 强制检查应该是什么天气. 不强制天气变化本身, 所以如果条件不满足, 或者自定义天气优先级较低, 天气不会改变
 * 适用于: 不需要talker
 */
export type NextWeather = "next_weather";


/**自定义光照级别
 * 设置世界的环境光一段时间, 忽略时间或太阳/月亮光
 * 适用于: 不需要talker
 * @example
 * // 将世界高亮1-10秒
 * { "custom_light_level": 100, "length": [ "1 seconds", "10 seconds" ] }
 * // 将世界变暗1天或直到触发who_turn_off_the_light
 * { "custom_light_level": 0, "length": "1 day", "key": "who_turn_off_the_light" }
 */
export type CustomLightLevel = {
    /**自定义光照级别
     * 光照级别从0到125, 其中0是完全黑暗, 125是日光
     */
    custom_light_level: (NumObj);
    /**长度
     * 效果持续多长时间
     */
    length: (TimeObj);
    /**键
     * 可以在EoC外部调用以触发地图更新的事件的ID. 键应该是alter_timed_events
     */
    key?: (StrObj);
}

/**转换半径
 * 使用ter_furn_transform转换你, NPC或目标周围的区域
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 * @example
 * // 根据merc_spike_transform转换玩家周围5个图块的所有内容
 * { "u_transform_radius": 5, "ter_furn_transform": "merc_spike_transform" }
 * // 根据detonate_the_door转换玩家周围door_transform 2个图块, 在2-10秒内, 或者如果detonator事件发生
 * {
 *   "u_transform_radius": 2,
 *   "ter_furn_transform": "detonate_the_door",
 *   "target_var": { "global_val": "door_transform" },
 *   "time_in_future": [ "2 seconds", "10 seconds" ],
 *   "key": "detonator"
 * }
 */
export type TransformRadius = TalkerVar<{
    /**转换半径
     * 发生转换的范围
     */
    transform_radius: (NumObj);
    /**地形家具转换
     * 用于转换区域的ter_furn_transform
     */
    ter_furn_transform: (StrObj);
    /**目标变量
     * 如果使用, 将使用变量中的目标而不是玩家的当前位置. 它使用assign_mission_target语法
     */
    target_var?: (LocObj);
    /**未来时间
     * 位置应该何时转换的延迟; 可以使用"infinity", 使位置不更新, 直到关键事件发生
     */
    time_in_future?: (TimeObj);
    /**键
     * 可以在EoC外部调用以触发地图更新的事件的ID. 键应该是alter_timed_events
     */
    key?: (StrObj);
}, 'transform_radius'>;

/**转换线
 * 在两个坐标之间的线上转换地形, 家具, 场地或陷阱
 * 适用于: 不需要talker
 * @example
 * // 根据blood_trail ter_furn_transform改变point_0和point_1之间的地形
 * {
 *   "transform_line": "blood_trail",
 *   "first": { "global_val": "point_0" },
 *   "second": { "global_val": "point_1" }
 * }
 */
export type TransformLine = {
    /**转换线
     * 用于转换地形的ter_furn_transform
     */
    transform_line: (StrObj);
    /**第一个坐标
     * 由u_location_variable创建的坐标, 线将在这两个坐标之间绘制
     */
    first: (LocObj);
    /**第二个坐标
     * 由u_location_variable创建的坐标, 线将在这两个坐标之间绘制
     */
    second: (LocObj);
}


/**位置覆盖
 * 覆盖当前玩家位置一段时间或直到事件被调用
 * 适用于: 不需要talker
 * @example
 * // 将当前位置的名称更改为"devilish place", 持续11分钟6秒 (666秒) 
 * {
 *   "place_override": "devilish place",
 *   "length": 666
 * }
 * {
 *   "place_override": "devilish place",
 *   "length": "666 s"
 * }
 * // 将place_name设置为五个中的一个, 然后将其设置为cell_time时间
 * {
 *   "set_string_var": [ "Somewhere", "Nowhere", "Everywhere", "Yesterday", "Tomorrow" ],
 *   "target_var": { "global_val": "place_name" }
 * },
 * {
 *   "place_override": { "global_val": "place_name" },
 *   "length": { "u_val": "cell_time" }
 * }
 */
export type PlaceOverride = {
    /**位置覆盖
     * 位置的新名称
     */
    place_override: (StrObj);
    /**长度
     * 更改的名称持续多长时间; 可以使用"infinity", 使位置不恢复, 直到关键事件发生
     */
    length: (TimeObj);
    /**键
     * 可以在EoC外部调用以触发地图更新的事件的ID. 键应该是alter_timed_events
     */
    key?: (StrObj);
}

/**生成怪物
 * 在你, NPC或target_var周围生成一些怪物
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 * @example
 * // 在玩家周围3-24范围内生成2-5个僵尸, 寿命40-120秒, 如果玩家看到生成则显示消息
 * {
 *   "u_spawn_monster": "mon_zombie",
 *   "real_count": [ 2, 5 ],
 *   "min_radius": [ 3, 5 ],
 *   "max_radius": [ 11, 24 ],
 *   "lifespan": [ "40 seconds", "2 minutes" ],
 *   "spawn_message": "Zombie!",
 *   "spawn_message_plural": "Zombies!"
 * }
 * // 选择玩家周围50个图块内的随机怪物, 并在玩家附近生成其幻觉副本
 * {
 *   "u_spawn_monster": "",
 *   "hallucination_count": 1,
 *   "target_range": 50
 * }
 * // 生成mon_photokin_army_image. 将alpha talker指定为其召唤者, 并定义变量can_do_backflips, 值为"true" (仅用于学习目的) 
 * {
 *   "u_spawn_monster": "mon_photokin_army_image",
 *   "real_count": [ { "math": [ "_real_count_low" ] }, { "math": [ "_real_count_high" ] } ],
 *   "summoner_is_alpha": true,
 *   "mon_variables": { "can_do_backflips": "true" }, 
 *   "lifespan": "15 minutes",
 *   "min_radius": 1,
 *   "max_radius": 8
 * }
 */
export type SpawnMonster = TalkerVar<{
    /**生成怪物
     * 将生成的怪物或怪物组, 使用""从附近的怪物中随机选择
     */
    spawn_monster: (IDObj<MonsterGroupID>|IDObj<MonsterID>);
    /**实际数量
     * @default 0
     * 将生成的怪物数量
     */
    real_count?: (NumObj);
    /**幻觉数量
     * @default 0
     * 将生成的怪物幻觉版本的数量
     */
    hallucination_count?: (NumObj);
    /**组
     * @default false
     * 如果为true, _spawn_monster将从怪物组生成怪物
     */
    group?: boolean;
    /**单一目标
     * @default false
     * 如果为true, _spawn_monster游戏只会从提供的怪物组或附近的怪物中选择一个怪物
     */
    single_target?: boolean;
    /**最小半径
     * @default 1
     * 目标周围怪物将生成的范围
     */
    min_radius?: (NumObj);
    /**最大半径
     * @default 10
     * 目标周围怪物将生成的范围
     */
    max_radius?: (NumObj);
    /**仅户外
     * @default false
     * 如果使用, 怪物只能在户外生成
     */
    outdoor_only?: boolean;
    /**仅室内
     * @default false
     * 如果使用, 怪物只能在建筑物内部生成
     */
    indoor_only?: boolean;
    /**允许露天
     * @default false
     * 如果为true, 怪物可以在露天处生成
     */
    open_air_allowed?: boolean;
    /**目标范围
     * 如果_spawn_monster为空, 从目标的这个图块数量内选择一个随机敌对生物
     */
    target_range?: (NumObj);
    /**寿命
     * 如果使用, 生物将存活这段时间, 然后消失
     */
    lifespan?: (TimeObj);
    /**目标变量
     * 如果使用, 怪物将从此位置生成, 而不是你或NPC
     */
    target_var?: (LocObj);
    /**临时掉落物品
     * @default false
     * 如果为true, 带有寿命的召唤怪物仍会掉落物品并留下尸体
     */
    temporary_drop_items?: boolean;
    /**怪物变量
     * 如果使用, 怪物在生成时将具有这些变量
     */
    mon_variables?: {[k:string]:string|number|boolean};
    /**召唤者是alpha
     * 如果使用, 怪物将定义alpha talker为其召唤者
     */
    summoner_is_alpha?: boolean;
    /**召唤者是beta
     * 如果使用, 怪物将定义beta talker为其召唤者
     */
    summoner_is_beta?: boolean;
    /**生成消息
     * 如果你看到生成的怪物, 将打印相关消息
     */
    spawn_message?: (StrObj);
    /**生成消息 (复数) 
     * 如果你看到生成的怪物 (多个) , 将打印相关消息
     */
    spawn_message_plural?: (StrObj);
    /**成功时运行的EOCs
     * 如果至少生成了1个怪物, 将运行true_eocs中的所有EOC
     */
    true_eocs?: (ParamsEoc);
    /**失败时运行的EOCs
     * 如果没有生成怪物, 将运行false_eocs中的所有EOC
     */
    false_eocs?: (ParamsEoc);
}, 'spawn_monster'>;




/**生成NPC
 * 在你或另一个NPC附近生成一些NPC
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 * @example
 * // 在玩家周围户外3-5个图块范围内生成2个幻觉portal_persons, 持续1-3分钟, 并显示消息
 * {
 *   "u_spawn_npc": "portal_person",
 *   "hallucination_count": 2,
 *   "outdoor_only": true,
 *   "min_radius": 3,
 *   "max_radius": 5,
 *   "lifespan": [ "1 minutes", "3 minutes" ],
 *   "spawn_message": "A person steps nearby from somewhere else.",
 *   "spawn_message_plural": "Several identical people walk nearby from nowhere."
 * }
 */
export type SpawnNpc = TalkerVar<{
    /**生成NPC
     * 将生成的NPC的类别
     */
    spawn_npc: (IDObj<NpcClassID>|IDObj<NpcInstanceID>);
    /**唯一ID */
    unique_id?: (StrObj);
    /**特性
     * NPC在生成时将拥有的额外特性/突变
     */
    traits?: (IDObj<MutationID>) | (IDObj<MutationID>)[];
    /**实际数量
     * @default 0
     * 将生成的NPC数量
     */
    real_count?: (NumObj);
    /**幻觉数量
     * @default 0
     * 将生成的NPC幻觉版本的数量
     */
    hallucination_count?: (NumObj)
    /**最小半径
     * @default 1
     * 目标周围NPC将生成的范围
     */
    min_radius?: (NumObj);
    /**最大半径
     * @default 10
     * 目标周围NPC将生成的范围
     */
    max_radius?: (NumObj);
    /**仅户外
     * @default false
     * 如果使用, NPC只能在户外生成
     */
    outdoor_only?: boolean;
    /**仅室内
     * @default false
     * 如果使用, NPC只能在建筑物内部生成
     */
    indoor_only?: boolean;
    /**允许露天
     * @default false
     * 如果为true, NPC可以在露天处生成
     */
    open_air_allowed?: boolean;
    /**寿命
     * 如果使用, NPC将存活这段时间, 然后消失
     */
    lifespan?: (TimeObj);
    /**目标变量
     * 如果使用, NPC将从此位置生成, 而不是你或NPC
     */
    target_var?: (LocObj);
    /**生成消息
     * 如果你看到生成的NPC, 将打印相关消息
     */
    spawn_message?: (StrObj);
    /**生成消息 (复数) 
     * 如果你看到生成的NPC (多个) , 将打印相关消息
     */
    spawn_message_plural?: (StrObj);
    /**成功时运行的EOCs
     * 如果至少生成了1个怪物, 将运行true_eocs中的所有EOC
     */
    true_eocs?: (ParamsEoc);
    /**失败时运行的EOCs
     * 如果没有生成怪物, 将运行false_eocs中的所有EOC
     */
    false_eocs?: (ParamsEoc);
}, 'spawn_npc'>;


/**生成场地
 * 在玩家周围的方形区域生成场地. 建议尽可能使用u_transform_radius或u_emit代替
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 * @example
 * // 在玩家周围10个图块的户外区域生成强度为3的血液场地
 * { "u_set_field": "fd_blood", "radius": 10, "outdoor_only": true, "intensity": 3 }
 */
export type SetField = TalkerVar<{
    /**生成场地
     * 要在玩家周围生成的场地的ID
     */
    set_field: (IDObj<FieldID>);
    /**强度
     * @default 1
     * 要生成的场地的强度
     */
    intensity?: (NumObj);
    /**半径
     * @default 10000000
     * 要生成的场地的半径
     */
    radius?: (NumObj);
    /**持续时间
     * 场地将持续多长时间
     */
    age?: (TimeObj);
    /**仅户外
     * @default false
     * 如果使用, 场地只能在户外生成
     */
    outdoor_only?: boolean;
    /**仅室内
     * @default false
     * 如果使用, 场地只能在建筑物内部生成
     */
    indoor_only?: boolean;
    /**影响玩家
     * @default true
     * 如果场地生成在玩家所在位置, 处理就像玩家踩在这个场地上
     */
    hit_player?: boolean;
    /**目标变量
     * 如果使用, 场地将从此位置生成, 而不是你或NPC
     */
    target_var?: (LocObj);
}, 'set_field'>;


/**发出场地
 * 使用type: emit发出场地
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 * @example
 * // 在玩家周围生成emit_tear_gas_toad (生成3个fd_tear_gas) , 概率加倍 (15 * 2 = 30%概率) 
 * { "u_emit": "emit_tear_gas_toad", "chance_mult": 2 }
 * // 相同效果, 但从存储在上下文变量loc中的坐标生成
 * { "u_emit": "emit_tear_gas_toad", "chance_mult": 2, "target_var": { "context_val": "loc" } }
 */
export type SetEmit = TalkerVar<{
    /**发出场地
     * 将生成的emit的ID
     */
    emit: (IDObj<EmitID>);
    /**概率倍数
     * @default 1
     * 将emit概率字段乘以此数字
     */
    chance_mult?: (NumObj);
    /**目标变量
     * 如果使用, 发射将从此位置生成, 而不是你或NPC
     */
    target_var?: (LocObj);
}, 'emit'>;



/**回合消耗
 * 从alpha talker的移动中减去这么多回合
 * 适用于: Avatar Character
 * @example
 * // 消耗1秒的回合
 * { "turn_cost": "1 sec" }
 * // 消耗0.6个回合
 * { "turn_cost": 0.6 }
 */
export type TurnCost = TalkerVar<{
    /**回合消耗
     * 动作需要多长时间 (可以指定为回合数 (小数) , 或作为持续时间) 
     */
    turn_cost: (TimeObj);
}, 'turn_cost'>;



/**转换物品
 * 将beta talker (必须是物品) 转换为不同的物品, 可选择激活它. 
 * 类似于"transform" use_action的工作方式. 
 * 适用于: Avatar Character
 * @example
 * // 如果有弹药, 将物品转换为chainsaw_on并激活它, 否则显示消息
 * {
 *   "condition": "has_ammo",
 *   "effect": [
 *     { "transform_item": "chainsaw_on", "active": true }
 *   ],
 *   "false_effect": {
 *     "u_message": "You yank the cord, but nothing happens."
 *   }
 * }
 */
export type TransformItem = TalkerVar<{
    /**转换物品
     * 要转换成的物品ID
     */
    transform_item: (IDObj<ItemID>);
    /**激活
     * 如果为true, 激活物品
     */
    active?: boolean;
}, 'transform_item'>;