import { AmmunitionTypeID } from "Schema/AmmiunitionType";
import { EffectID } from "Schema/Effect";
import { EocID, ParamsEoc } from "Schema/Eoc";
import { FieldID } from "Schema/Field";
import { FlagID } from "Schema/Flag";
import { FurnitureID } from "Schema/Furniture";
import { Color, DescText, Explosion, Float, Int, Power, Time, Volume } from "Schema/GenericDefine";
import { ItemID, ItemVariantID } from "Schema/Item";
import { ItemGroupID } from "Schema/ItemGroup";
import { MaterialID } from "Schema/Material";
import { MonsterID } from "Schema/Monster";
import { NpcClassID } from "Schema/NpcClass";
import { ScentTypeID } from "Schema/ScentType";
import { SkillID } from "Schema/Skill";
import { SoundEffectID, SoundEffectVariantID } from "Schema/SoundEffect";
import { SpellID } from "Schema/Spell";
import { TerrainID } from "Schema/Terrain";
import { ToolQualityID } from "Schema/ToolQuality";
import { TrapID } from "Schema/Trap";


/**转换方法类型，此处为将物品转换为另一种物品 */
export type UseActionTransform = {
    /**转换方法类型，此处为将物品转换为另一种物品 */
    type: "transform";
    /**要转换的目标物品ID */
    target: (ItemID);
    /**如果使用此字段，target表示从itemgroup中随机选择的物品 */
    target_group?: (ItemGroupID);
    /**设置转换后物品的特定变体类型
     * 特殊字符串"<any>"将从所有可用变体中随机选择一个变体，基于变体的定义权重
     * @default "<any>"
     */
    variant_type?: (ItemVariantID);
    /**转换后物品是否处于激活状态 */
    active: boolean;
    /**当物品弹药降至0时自动转换为目标物品，或允许枪支在0弹药时转换 */
    ammo_scale: Int;
    /**激活物品时显示给玩家的消息 */
    msg: (DescText);
    /**是否需要火源才能激活此物品 */
    need_fire: Int;
    /**当玩家尝试激活但没有火源时显示的消息 */
    need_fire_msg: (DescText);
    /**转换物品所需的充能数量 */
    need_charges: Int;
    /**当物品没有足够充能时显示给玩家的消息 */
    need_charges_msg: (DescText);
    /**物品是否必须为空才能进行转换
     * @default false
     */
    need_empty?: boolean;
    /**物品是否必须被穿着才能进行转换、施法或使用EOC
     * @default false
     */
    need_worn?: boolean;
    /**物品是否必须被手持才能进行转换、施法或使用EOC
     * @default false
     */
    need_wielding?: boolean;
    /**转换所需的工具品质及其等级，例如"fine bolt turning 1" */
    qualities_needed: Record<ToolQualityID, Int>;
    /**转换后物品的初始充能数量 */
    target_charges: Int;
    /**随机化转换后物品的充能数量
     * 例如[10,15,25]表示有50%几率获得10-15充能，50%几率获得15-25充能(包含端点)
     */
    rand_target_charges?: [Int, Int, Int];
    /**如果为零或正数，将转换后物品的剩余弹药设置为此固定值 */
    ammo_qty: Int;
    /**如果设置此值，将转换后物品的剩余弹药随机设置为数组中的某个值 */
    random_ammo_qty?: [Int, Int];
    /**如果同时指定了此字段和ammo_qty，则将转换后的物品设置为此特定弹药类型 */
    ammo_type?: (AmmunitionTypeID);
    /**存放目标物品的容器物品ID */
    container?: (ItemID);
    /**转换后的容器是否处于密封状态
     * @default true
     */
    sealed?: boolean;
    /**在物品激活菜单中显示的文本
     * @default "Turn on"
     */
    menu_text?: (DescText);
    /**转换物品所需的额外移动点数，超出正常动作所需的部分 */
    moves: Int;
};

/**物品在耗尽充能时爆炸 */
export type UseActionExplosion = {
    /**物品在耗尽充能时爆炸 */
    type: "explosion";
    /**物理爆炸数据
     * 与通用物品中的"explosion"字段规范相同
     */
    explosion?: (Explosion);
    /**绘制爆炸半径的大小 */
    draw_explosion_radius: Int;
    /**绘制爆炸时使用的颜色 */
    draw_explosion_color: (Color);
    /**是否产生闪光弹效果 */
    do_flashbang: boolean;
    /**玩家是否免疫闪光弹效果 */
    flashbang_player_immune: boolean;
    /**爆炸产生的领域扩散半径 */
    fields_radius: Int;
    /**爆炸产生的领域类型 */
    fields_type: (FieldID);
    /**爆炸生成领域的最小强度 */
    fields_min_intensity: Int;
    /**爆炸生成领域的最大强度 */
    fields_max_intensity: Int;
    /**爆炸产生的EMP冲击波半径 */
    emp_blast_radius: Int;
    /**爆炸产生的干扰波半径 */
    scrambler_blast_radius: Int;
};

/**改变使用者的气味类型 */
export type UseActionChangeScent = {
    /**改变使用者的气味类型 */
    type: "change_scent";
    /**新气味的scenttype_id */
    scent_typeid: (ScentTypeID);
    /**使用物品时消耗的充能数量
     * @default 1
     */
    charges_to_use?: Int;
    /**添加到气味强度的修正值
     * @default 0
     */
    scent_mod?: Int;
    /**效果持续时间 */
    duration: (Time);
    /**应用的效果列表，包含效果ID、持续时间、作用部位和是否永久 */
    effects: {
        id: (EffectID);
        duration: Int;
        bp: string;
        permanent: boolean;
    }[];
    /**效果是否防水
     * @default false
     */
    waterproof?: boolean;
    /**过程中所需的移动点数 */
    moves: Int;
};

/**在地图上放置炮塔/人形机等怪物 */
export type UseActionPlaceMonster = {
    /**在地图上放置炮塔/人形机等怪物 */
    type: "place_monster";
    /**怪物ID，参见monsters.json */
    monster_id: (MonsterID);
    /**编程难度（人形机为4，炮塔为6等） */
    difficulty: Int;
    /**编程失败怪物敌对时显示的消息 */
    hostile_msg?: (DescText);
    /**成功编程怪物友好时显示的消息 */
    friendly_msg?: (DescText);
    /**随机在玩家周围放置怪物或让玩家决定放置位置
     * @default false
     */
    place_randomly?: boolean;
    /**技能ID数组，技能等级越高越可能放置友好怪物 */
    skills?: SkillID[];
    /**行动消耗的移动点数 */
    moves: Int;
    /**生成的怪物是否为宠物
     * 只有作为友好怪物生成时才会成为宠物，敌对怪物永远不会成为宠物
     * @default false
     */
    is_pet?: boolean;
};

/**在地图上放置特定类别的NPC */
export type UseActionPlaceNpc = {
    /**在地图上放置特定类别的NPC */
    type: "place_npc";
    /**NPC ID，参见npcs/npc.json */
    npc_class_id: (NpcClassID);
    /**召唤NPC时显示的消息 */
    summon_msg?: (DescText);
    /**随机在玩家周围放置NPC或让玩家决定放置位置
     * @default false
     */
    place_randomly?: boolean;
    /**随机放置NPC的最大半径 */
    radius: Int;
    /**行动消耗的移动点数 */
    moves: Int;
};

/**将物品连接到车辆或电器，例如将可充电设备插入电源
 * 如果物品有CABLE_SPOOL标志，则有特殊行为，如连接车辆
 */
export type UseActionLinkUp = {
    /**将物品连接到车辆或电器，例如将可充电设备插入电源
     * 如果物品有CABLE_SPOOL标志，则有特殊行为，如连接车辆
     */
    type: "link_up";
    /**电缆的最大长度
     * @default 物品类型的最大充能值
     * 如果被其他电缆延长，将使用所有电缆长度的总和
     */
    cable_length?: Int;
    /**插入设备电池的充电速率（瓦特）
     * @default "0 W"
     * 正值将以连接的电网为代价为设备的可充电电池充电
     * 负值将以设备为代价为连接的电网电池充电
     * 值为0不会为设备电池充电，但仍允许设备从连接的电网运行
     */
    charge_rate?: (Power);
    /**成功在每个充电间隔添加1充能的概率（0.0-1.0）
     * @default 0.85
     * 小于0.001的值意味着电缆不会传输任何电力
     * 如果被其他电缆延长，将使用所有电缆效率的乘积
     */
    efficiency?: Float;
    /**激活屏幕上显示的文本
     * @default "Plug in / Manage cables"
     */
    menu_text?: (DescText);
    /**连接电缆的移动消耗
     * @default 5
     */
    move_cost?: Int;
    /**电缆的有效连接点数组
     * "no_link"           // 必须包含以允许玩家手动断开电缆
     * "vehicle_port"      // 可以连接到车辆的电缆端口/电气控制或电器
     * "vehicle_battery"   // 可以连接到车辆的电池或电器
     * "vehicle_tow"       // 可用作两车之间的拖缆
     * "bio_cable"         // 可以连接到电缆系统仿生体
     * "ups"               // 可以链接到UPS
     * "solarpack"         // 可以链接到穿戴式太阳能包
     * @default 仅允许断开连接
     */
    targets?: (
        "no_link" | "vehicle_port" | "vehicle_battery" |
        "vehicle_tow" | "bio_cable" | "ups" | "solarpack"
    )[];
    /**可以被此电缆延长的电缆物品数组
     * @default 无
     * @example
     * "extension_cable"
     * "long_extension_cable"
     * "ELECTRICAL_DEVICES" // 特殊关键字，允许此电缆延长所有具有link_up动作的电子设备
     */
    can_extend?: ItemID[];
};

/**将物品部署为家具 */
export type UseActionDeployFurn = {
    /**将物品部署为家具 */
    type: "deploy_furn";
    /**物品将转变为什么家具 */
    furn_type: (FurnitureID);
};

/**将物品部署为电器 */
export type UseActionDeployAppliance = {
    /**将物品部署为电器 */
    type: "deploy_appliance";
    /**物品将转变为什么电器的基本物品 */
    base: (ItemID);
};

/**类似transform，但只有当物品达到特定年龄时才会转变 */
export type UseActionDelayedTransform = {
    /**类似transform，但只有当物品达到特定年龄时才会转变 */
    type: "delayed_transform";
    /**物品的最小年龄，年龄较小的物品不会转变（60回合=1分钟） */
    transform_age: Int;
    /**当物品不够老时显示的消息 */
    not_ready_msg: (DescText);
};

/**生火，如用打火机 */
export type UseActionFirestarter = {
    /**生火，如用打火机 */
    type: "firestarter";
    /**生火所需的移动点数，会被生存技能减少 */
    moves: Int;
    /**点燃难以燃烧物品所需的移动点数，会被生存技能减少 */
    moves_slow: Int;
    /**角色是否需要处于阳光直射下，例如使用放大镜 */
    need_sunlight: boolean;
};

/**解包此物品 */
export type UseActionUnpack = {
    /**解包此物品 */
    type: "unpack";
    /**解包后的物品组 */
    group: (ItemGroupID);
    /**解包出的护甲物品是否合身
     * @default false
     */
    items_fit?: boolean;
    /**如果从此物品解包的物品有体积，且此物品肮脏，在持有多少体积时它们会变脏 */
    filthy_volume_threshold?: (Volume);
};

/**尝试从物品中回收基础材料，例如剪碎布料获取破布或皮革 */
export type UseActionSalvage = {
    /**尝试从物品中回收基础材料，例如剪碎布料获取破布或皮革 */
    type: "salvage";
    /**每个部分消耗的移动点数
     * @default 未指定
     */
    moves_per_part?: Int;
    /**可以从中回收的材料ID（不是物品ID！）列表
     * 如果没有给出明确列表，则使用此默认列表
     * 如果要切割的物品有任何不在此列表中的材料，则无法切割
     */
    material_whitelist?: MaterialID[];
};

/**在物品或地面上刻写信息 */
export type UseActionInscribe = {
    /**在物品或地面上刻写信息 */
    type: "inscribe";
    /**是否可以在物品上刻写 */
    on_items: boolean;
    /**是否可以在地面上刻写 */
    on_terrain: boolean;
    /**是否仅限于特定物品材料刻写，不用于在地面刻写时 */
    material_restricted: boolean;
    /**可以刻写的材料ID（不是物品ID！）列表
     * 仅用于在物品上刻写，且仅当material_restricted为true时
     * 如果没有给出明确列表，则使用此默认列表
     */
    material_whitelist?: MaterialID[];
};

/**激活基于火焰的武器 */
export type UseActionFireweaponOff = {
    /**激活基于火焰的武器 */
    type: "fireweapon_off";
    /**物品将转换为什么物品类型 */
    target_id: (ItemID);
    /**动作成功时显示的消息 */
    success_message: (DescText);
    /**动作失败时显示的消息
     * 如果未给出，则不显示任何消息
     */
    failure_message?: (DescText);
    /**物品没有充能时显示的消息 */
    lacks_fuel_message: (DescText);
    /**激活物品时产生的声音
     * @default 0 //表示完全没有声音
     */
    noise?: Int;
    /**角色尝试此动作消耗的移动点数（与结果无关） */
    moves: Int;
    /**动作成功的概率
     * @default 总是成功
     * 尝试使用0-10范围内的数字
     */
    success_chance?: Int;
};

/**用于激活（燃烧）基于火焰的武器的功能 */
export type UseActionFireweaponOn = {
    /**用于激活（燃烧）基于火焰的武器的功能 */
    type: "fireweapon_on";
    /**物品发出声音的概率（1/X），每回合检查 */
    noise_chance: Int;
    /**如果发出声音的音量，如果为0则不发出声音，但仍会打印噪声消息 */
    noise: Int;
    /**当物品发出声音时出现的消息/声音描述 */
    noise_message: (DescText);
    /**当玩家手动关闭物品时出现的消息 */
    voluntary_extinguish_message: (DescText);
    /**当物品耗尽充能时出现的消息 */
    charges_extinguish_message: (DescText);
    /**当角色走入水中且物品火焰熄灭时出现的消息 */
    water_extinguish_message: (DescText);
    /**如果>0，这是物品自行熄灭的概率（1/X）
     * @default 0
     */
    auto_extinguish_chance?: Int;
    /**如果物品自行熄灭时出现的消息
     * 仅当auto_extinguish_chance > 0时需要
     */
    auto_extinguish_message?: (DescText);
};

/**角色在走动时演奏乐器（此物品） */
export type UseActionMusicalInstrument = {
    /**角色在走动时演奏乐器（此物品） */
    type: "musical_instrument";
    /**从角色速度中减去的值 */
    speed_penalty: Int;
    /**乐器声音的音量 */
    volume: Int;
    /**与fun_bonus一起定义角色从演奏乐器中获得多少士气
     * 他们获得`fun + fun_bonus * <角色感知>`士气点
     * 两个值和结果都可能为负
     */
    fun: Int;
    /**与fun一起定义角色从演奏乐器中获得多少士气 */
    fun_bonus: Int;
    /**每N回合一次，从该数组中随机选择一个描述显示 */
    description_frequency: Int;
    /**玩家演奏乐器的描述数组 */
    player_descriptions: DescText[];
};

/**收起或拔出武器 */
export type UseActionHolster = {
    /**收起或拔出武器 */
    type: "holster";
    /**选择物品时使用的提示 */
    holster_prompt: (DescText);
    /**收起物品时显示的消息，%s将被物品名称替换 */
    holster_msg: (DescText);
    /**可以收起的每个物品的最大体积
     * 可以使用ml和L单位 - "50 ml"或"2 L"
     */
    max_volume: (Volume);
    /**可以收起的每个物品的最小体积
     * 如果未指定则为max_volume的1/3
     * 可以使用ml和L单位 - "50 ml"或"2 L"
     */
    min_volume?: (Volume);
    /**每个物品的最大重量
     * 如果未指定则没有重量限制
     */
    max_weight?: Int;
    /**收起可以容纳的物品总数 */
    multi: Int;
    /**拔出包含物品时的基本移动消耗（每单位体积） */
    draw_cost: Int;
    /**使用这些技能中任意一个的枪支可以被收起 */
    skills?: SkillID[];
    /**设置了这些标志中任意一个的物品可以被收起 */
    flags?: FlagID[];
};

/**存储弹药并稍后用于重新装填 */
export type UseActionBandolier = {
    /**存储弹药并稍后用于重新装填 */
    type: "bandolier";
    /**可以存储的总弹药数量 */
    capacity: Int;
    /**可以存储的弹药类型 */
    ammo: AmmunitionTypeID[];
};

/**在大地图上显示特定地形 */
export type UseActionRevealMap = {
    /**在大地图上显示特定地形 */
    type: "reveal_map";
    /**玩家周围要显示事物的半径，单个大地图为180x180瓦片 */
    radius: Int;
    /**应该显示的大地图地形类型ID（可以任意数量） */
    terrain: TerrainID[];
    /**显示后显示的消息 */
    message: (DescText);
};

/**治疗伤害，可能包括一些状态 */
export type UseActionHeal = {
    /**治疗伤害，可能包括一些状态 */
    type: "heal";
    /**治疗肢体时恢复多少hp，必需值 */
    limb_power: Int;
    /**治疗头部时恢复多少hp
     * 如果未设置，默认为0.8 * limb_power
     */
    head_power?: Int;
    /**治疗躯干时恢复多少hp
     * 如果未设置，默认为1.5 * limb_power
     */
    torso_power?: Int;
    /**可以减少多少出血效果强度等级，基础值 */
    bleed: Int;
    /**消毒质量，消毒剂为4，酒精棉为2；浮点数 */
    disinfectant_power: Float;
    /**移除咬伤效果的几率 */
    bite: Float;
    /**移除感染效果的几率 */
    infect: Float;
    /**使用物品消耗的移动点数 */
    move_cost: Int;
    /**每急救等级应该额外治疗多少肢体hp
     * @default "0.25 * limb_power"
     */
    limb_scaling?: Float;
    /**每急救等级应该额外治疗多少头部hp
     * @default "(limb_scaling / limb_power) * head_power"
     */
    head_scaling?: Float;
    /**每急救等级应该额外治疗多少躯干hp
     * @default "(limb_scaling / limb_power) * torso_power"
     */
    torso_scaling?: Float;
    /**治疗完成后应用于患者的效果，语法与consume_drug effects相同 */
    effects?: {
        id: (EffectID);
        duration: (Time);
    }[];
    /**成功治疗后产生的物品
     * 如果治疗物品是工具，则转换为新类型，否则产生新物品
     */
    used_up_item?: (ItemID);
};

/**放置陷阱 */
export type UseActionPlaceTrap = {
    /**放置陷阱 */
    type: "place_trap";
    /**是否允许在水下放置此陷阱
     * @default false
     */
    allow_underwater?: boolean;
    /**是否允许在玩家角色同一格放置陷阱（例如无害陷阱）
     * @default false
     */
    allow_under_player?: boolean;
    /**陷阱必须放置在两个固体瓦片之间（例如绊线）
     * @default false
     */
    needs_solid_neighbor?: boolean;
    /**如果非空：地形ID，陷阱必须放置在该地形旁边
     * @default 空
     */
    needs_neighbor_terrain?: (TerrainID);
    /**如果非空：陷阱ID，使游戏放置3x3的陷阱区域
     * 中心陷阱由"trap"定义，周围8个陷阱由此定义
     * @default 空
     */
    outer_layer_trap?: (TrapID);
    /**如果非空：当玩家角色有挖掘工具且目标位置可挖掘时询问的问题
     * 允许放置埋藏的陷阱
     * 如果玩家回答问题（例如"埋藏X陷阱？"）为是，则使用"bury"对象中的数据
     * @default 空
     */
    bury_question?: (DescText);
    /**如果bury_question回答为是，则使用此条目中的数据代替外部数据
     * 此json对象应包含"trap"、"done_message"、"practice"和"moves"，含义如下
     */
    bury?: {
        trap: (TrapID);
        done_message: (DescText);
        practice: Int;
        moves: Int;
    };
    /**要放置的陷阱 */
    trap: (TrapID);
    /**放置陷阱后出现的消息，%s被放置陷阱位置的地形名称替换 */
    done_message: (DescText);
    /**放置陷阱给"陷阱"技能多少练习 */
    practice: Int;
    /**放置陷阱使用的移动点数
     * @default 100
     */
    moves?: Int;
};

/**修改服装 */
export type UseActionSewAdvanced = {
    /**修改服装 */
    type: "sew_advanced";
    /**要处理的材料 */
    materials: MaterialID[];
    /**使用的技能 */
    skill: (SkillID);
    /**要处理的服装修改 */
    clothing_mods: string[];
};

/**激活effect_on_conditions */
export type UseActionEffectOnConditions = {
    /**激活effect_on_conditions */
    type: "effect_on_conditions";
    /**激活屏幕上显示的文本
     * @default "Activate item"
     */
    menu_text?: (DescText);
    /**使用描述 */
    description: (DescText);
    /**要激活的effect_on_conditions的ID */
    effect_on_conditions: (ParamsEoc);
};

/**显示消息文本 */
export type UseActionMessage = {
    /**显示消息文本 */
    type: "message";
    /**显示的消息 */
    message: (DescText);
    /**动作的名称
     * @default "Activate"
     */
    name?: (DescText);
};

/**发出声音 */
export type UseActionSound = {
    /**发出声音 */
    type: "sound";
    /**动作的可选名称
     * @default "Activate"
     */
    name?: (DescText);
    /**如果玩家能听到声音，则显示给玩家的消息
     * %s被物品名称替换
     */
    sound_message: (DescText);
    /**要播放的音频ID
     * @default "misc"
     * 参见SOUNDPACKS.md获取更多详情
     */
    sound_id?: (SoundEffectID);
    /**声音变体
     * @default "default"
     */
    sound_variant?: (SoundEffectVariantID);
    /**噪声的响度 */
    sound_volume: Int;
};

/**发出声音，包括弹药检查并可能从玩家处消耗移动点数 */
export type UseActionManualnoise = {
    /**发出声音，包括弹药检查并可能从玩家处消耗移动点数 */
    type: "manualnoise";
    /**显示给激活它的玩家的消息 */
    use_message: (DescText);
    /**如果玩家能听到声音则显示的消息
     * @default "hsss"
     */
    noise_message?: (DescText);
    /**要播放的音频ID
     * @default "misc"
     * 参见SOUNDPACKS.md获取更多详情
     */
    noise_id?: (SoundEffectID);
    /**噪声变体
     * @default "default"
     */
    noise_variant?: (SoundEffectVariantID);
    /**噪声的响度
     * @default 0
     */
    noise?: Int;
    /**动作消耗的时间
     * @default 0
     */
    moves?: Int;
};

/**学习法术 */
export type UseActionLearnSpell = {
    /**学习法术 */
    type: "learn_spell";
    /**学习的法术列表 */
    spells: SpellID[];
}

/**施放以下法术，参见MAGIC.md获取更多详情 */
export type UseActionCastSpell = {
    /**施放以下法术，参见MAGIC.md获取更多详情 */
    type: "cast_spell";
    /**要施放的法术ID */
    spell_id: (SpellID);
    /**施放时是否允许法术失败（例如高难度可能导致施放失败） */
    no_fail: boolean;
    /**法术等级 */
    level: Int;
    /**物品是否必须穿着才能施放法术
     * @default false
     */
    need_worn?: boolean;
    /**物品是否必须手持才能施放法术
     * @default false
     */
    need_wielding?: boolean;
    /**此法术使用魔法相关功能，但其本身不是魔法
     * 描述从"此物品施放spell_name等级spell_level"改为"此物品激活时：spell_name"
     * @default false
     */
    mundane?: boolean;
};