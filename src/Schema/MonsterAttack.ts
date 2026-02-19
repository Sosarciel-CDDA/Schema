import { BodyPartID } from "./BodyPart";
import { EffectID } from "./Effect";
import { FakeSpell } from "./Enchantment";
import { BoolExpr, EocID, NumberExpr } from "./Eoc";
import { CddaID, DescText, Float, Int } from "./GenericDefine";
import { ItemID } from "./Item";
import { MonAttackEffect, MosnterMeleeDamage } from "./Monster";
import { SkillID } from "./Skill";

/**MonsterAttackID */
export type MonsterAttackID = CddaID<"MATK">;

/**对某个已定义的怪物特殊攻击的引用/扩展 */
export type MonstarAttackRef = ({id:HardcodeMonsterAttackID|MonsterAttackID})&Partial<Omit<MonsterAttack,'type'>>;

/**对某个已定义的怪物特殊攻击的快速 [攻击id, 冷却时间]*/
export type MonstarAttackQuickRef = [HardcodeMonsterAttackID|MonsterAttackID,Int];

/**特殊攻击 */
export type MonsterAttack = {
    type: "monster_attack";
    /**特殊攻击的唯一id */
    id: (MonsterAttackID);
    /** 攻击类型 */
    attack_type: "melee"|"bite"|"eoc";
    /**感染概率 仅在 attack_type 为 bite 时生效
     * 实际概率 = infection_chance / 100。
     */
    infection_chance?: Int;
    /**若为 true，则在没有敌对目标时也允许使用此能力
     * 仅在 attack_type 为 eoc 时生效
     * @default false
     */
    allow_no_target?: boolean;
    /** 冷却时间（整数或变量对象）。
     * 表示两次使用之间的回合数。
     */
    cooldown?: (NumberExpr);
    /** 最大伤害实例数组。
     * 详见 MONSTERS.md#melee_damage。
     */
    damage_max_instance?: MosnterMeleeDamage[];
    /**伤害倍率下限
     * 每次攻击会将定义的伤害乘以一个随机倍率，
     * 范围为 min_mul 到 max_mul。
     * @default 0.5
     */
    min_mul?: Float;
    /** 伤害倍率上限
     * @default 1.0
     */
    max_mul?: Float;
    /** 完成此特殊攻击所需的移动点数
     * @default 100
     */
    move_cost?: Int;
    /** 若定义，则使用不同于怪物普通近战攻击的命中率。 */
    accuracy?: number;
    /** 指定攻击的身体部位列表（带权重）。
     * 若为空，则使用普通近战的身体部位选择。
     */
    body_parts?: [BodyPartID,Int][];
    /** 对话条件，用于决定攻击是否启用。
     * 详见 NPCs.md。
     * u 指怪物自身，npc 指攻击目标。
     * x_has_flag 对怪物仅检查 effect flags，而非 monster flags。
     */
    condition?: (BoolExpr);
    /**若为 false，则常规攻击不会命中带 UPPER_LIMB 标记的部位
     *（除非 body_parts 明确指定）。
     * @default true
     */
    attack_upper?: boolean;
    /**攻击距离
     * 近战攻击需要直线无阻挡路径。
     * @default 1
     */
    range?: number;
    /** 是否为抓取攻击
     * 若为 true，则读取 grab_data
     * @default false
     */
    grab?: boolean;
    /** 抓取数据，仅在 grab: true 时读取。
     * 详见 Grab attacks。
     */
    grab_data?: (GrabData);
    /** 可命中的最小肢体尺寸（若未指定 body_parts 时生效）。 */
    hitsize_min?: number;
    /** 可命中的最大肢体尺寸。 */
    hitsize_max?: number;
    /** 若为 true，则攻击不能命中相邻目标。 */
    no_adjacent?: boolean;
    /**是否可被闪避
     * @default true
     */
    dodgeable?: boolean;
    /** 是否可被“不可思议闪避”闪避（默认等于 dodgeable）。
     * Uncanny Dodge 义体或 UNCANNY_DODGE 标记可触发。
     * 此闪避优先于普通闪避。
     */
    uncanny_dodgeable?: boolean;
    /**是否可被格挡
     * @default true
     */
    blockable?: boolean;
    /**攻击次数
     * 若大于 1，则攻击会命中多个肢体（或同一肢体多次）。
     * 总伤害会平均分配到所有命中次数。
     * @default 1
     */
    attack_amount?: [number, number];
    /**总伤害平均分配到所有肢体。
     * @default true
     */
    spread_damage?: boolean;
    /**若为 true，则仅在攻击成功造成伤害时应用 effects。
     * @default true
     */
    effects_require_dmg?: boolean;
    /** 攻击附加效果数组。
     * 详见 MONSTERS.md。
     * 持续时间单位为回合，而非移动点。
     */
    effects?: MonAttackEffect[];
    /** 攻击执行时怪物对自身施加的效果（无论是否命中）。 */
    self_effects_always?: MonAttackEffect[];
    /** 攻击命中时怪物对自身施加的效果。 */
    self_effects_onhit?: MonAttackEffect[];
    /** 攻击造成伤害时怪物对自身施加的效果。 */
    self_effects_ondmg?: MonAttackEffect[];
    /** 若大于 0，则攻击会尝试将目标抛掷。
     * 每 10 点力量对应 1 格抛掷距离。
     */
    throw_strength?: Int;
    /** effect_on_condition 的 id 数组。
     * 执行时 u 为攻击者，npc 为受害者，
     * damage 为造成的总伤害。
     */
    eoc?: EocID[];
    /** 攻击未命中玩家时的消息。 */
    miss_msg_u?: (DescText);
    /** 攻击未命中 NPC 时的消息。 */
    miss_msg_npc?: (DescText);
    /** 攻击命中玩家并造成伤害时的消息。 */
    hit_dmg_u?: (DescText);
    /** 攻击命中 NPC 并造成伤害时的消息。 */
    hit_dmg_npc?: (DescText);
    /** 攻击命中玩家但造成 0 伤害时的消息。 */
    no_dmg_msg_u?: (DescText);
    /** 攻击命中 NPC 但造成 0 伤害时的消息。 */
    no_dmg_msg_npc?: (DescText);
    /** 将玩家抛掷时的消息。 */
    throw_msg_u?: (DescText);
    /** 将 NPC 抛掷时的消息。 */
    throw_msg_npc?: (DescText);
};



/** 抓取攻击数据 */
export type GrabData = {
    /**抓取强度
     * 成功抓取时施加的抓取效果强度。
     * 默认使用怪物自身的 grab_strength。
     */
    grab_strength?: Int;
    /** 抓取成功时施加的效果 ID
     * 若为 null，则施加空效果且不会报错，
     * 并且不会触发通常的重定向/抓取过滤规则。
     * @default "grabbed"
     */
    grab_effect?: (EffectID);
    /** 是否为“排他抓取”
     * 若为 true，则攻击会尝试逐个移除所有 GRAB 标记的效果
     *（对拉扯者使用 grab_strength / 2 的强度判定），
     * 若无法全部移除则攻击失败。
     * 用于远程拉扯与抓取。
     * @default false
     */
    exclusive_grab?: boolean;
    /** 拖拽距离
     * 若大于 0，则成功攻击后怪物会尝试拖拽目标：
     * 怪物向后移动，目标移动到怪物原位置，重复 drag_distance 次。
     * 若 respect_seatbelts 为 true，则安全带会阻止拖拽。
     * @default 0
     */
    drag_distance?: Int;
    /** 拖拽偏移
     * 0: 总是直接向目标反方向拖拽。
     * 1: 从怪物与反方向格子的公共邻居中随机选择。
     * 2: 从怪物所有未被自身或目标占据的邻格中随机选择。
     * 每一步拖拽都会重新随机方向。
     * @default 0
     */
    drag_deviation?: Int;
    /** 拖拽多少步后允许目标尝试挣脱抓取
     * @default 0
     */
    drag_grab_break_distance?: Int;
    /** 拖拽移动消耗修正
     * 每一步拖拽的移动点数修正。
     * 内部 move_cost 为 0 会阻止移动，因此不要使用 0。
     * @default 1.0
     */
    drag_movecost_mod?: Float;
    /**是否尊重安全带
     * 若为 false，则拖拽/拉扯可以把目标从安全带中扯出并造成伤害
     * @default true
     */
    respect_seatbelts?: boolean;
    /**拉扯概率（可选）。
     * 成功命中后有此百分比概率触发拉扯，
     * 将目标移动到怪物相邻位置。
     * 安全带会阻止拉扯。
     */
    pull_chance?: Int;
    /**拉扯可处理的重量比例
     * 若目标重量超过此比例，则拉扯失败
     * 拖拽（drag_distance > 0）也使用此比例
     * @default 0.75
     */
    pull_weight_ratio?: Float;
    /** 玩家被成功拉扯时显示的消息（可选） */
    pull_msg_u?: (DescText);
    /** NPC 被成功拉扯时显示的消息（可选） */
    pull_msg_npc?: (DescText);
    /** 玩家拉扯失败时显示的消息（可选） */
    pull_fail_msg_u?: (DescText);
    /** NPC 拉扯失败时显示的消息（可选） */
    pull_fail_msg_npc?: (DescText);
};


/** 硬编码的攻击ID 列表（来自 C++，大多不可通过 JSON 配置） */
export const HardcodeMonsterAttackIDList = [
    "ABSORB_ITEMS"        , // 吸收踩过的物品以恢复生命（可配置吸收成本、材料等）
    "ABSORB_MEAT"         , // 吸收相邻的肉类物品并恢复生命
    "ACID"                , // 喷吐酸液
    "ACID_BARF"           , // 呕吐腐蚀性、致盲酸液
    "BIO_OP_BIOJUTSU"     , // 使用生化武术攻击（下列任意一种）
    "BIO_OP_DISARM"       , // 缴械攻击，不造成伤害
    "BIO_OP_IMPALE"       , // 刺击攻击，重伤并可能造成流血
    "BIO_OP_TAKEDOWN"     , // 摔倒攻击，击打头或躯干并造成倒地
    "BLOW_WHISTLE"        , // 吹哨，在怪物位置制造音量40的声音
    "BRANDISH"            , // 向玩家挥舞刀具
    "BROWSE"              , // 吃可采集植物（当季）
    "BREATHE"             , // 生成 breather（仅 breather hub 使用）
    "CALLBLOBS"           , // 呼叫附近的黏 blob：2/3 来防御，1/3 追击玩家
    "COPBOT"              , // 警用机器人：警告并电击玩家
    "DANCE"               , // 怪物跳舞
    "DARKMAN"             , // 制造黑暗并生成幽灵
    "DISAPPEAR"           , // 幻觉怪物消失
    "DOGTHING"            , // 变成 tentacle dog
    "EAT_CARRION"         , // 啃食有机尸体（含僵尸、植物），填充胃内容
    "EAT_CROP"            , // 吃相邻的农作物或 CATTLE 食物
    "EAT_FOOD"            , // 吃相邻的非种子食物（不吃自身蛋/过低乐趣食物）
    "EVOLVE_KILL_STRIKE"  , // 对躯干造成伤害，杀死肉体目标后进化
    "FEAR_PARALYZE"       , // 以恐惧使玩家麻痹
    "FLESH_GOLEM"         , // 5–10 砸击，有概率造成倒地，并发出威吓咆哮
    "FLESH_TENDRIL"       , // 生成腐烂触手怪，拉近目标或甩/抓
    "FORMBLOB"            , // 攻击邻格并根据对象生成/强化/转化黏液
    "FUNGUS"              , // 释放孢子并尝试感染玩家
    "FUNGUS_BIG_BLOSSOM"  , // 扩散抑火真菌雾
    "FUNGUS_BRISTLE"      , // 带倒刺触手攻击，可致真菌感染
    "FUNGUS_CORPORATE"    , // Crazy Cataclysm 专用，生成 SpOreos
    "FUNGUS_FORTIFY"      , // 生长真菌树篱，推进玩家的 Mycus 阈值
    "FUNGUS_GROWTH"       , // 幼年真菌体成长为成年体
    "FUNGUS_HAZE"         , // 生成真菌地形
    "FUNGUS_INJECT"       , // 针刺攻击，可致真菌感染
    "FUNGUS_SPROUT"       , // 生长真菌墙
    "FUNGAL_TRAIL"        , // 留下真菌地形轨迹
    "GRAZE"               , // 吃草、灌木、花
    "GENE_STING"          , // 射出基因突变飞镖
    "GENERATOR"           , // 自我再生并发出嗡鸣
    "GRENADIER"           , // 投放催泪/安抚/闪光/C4 hack
    "GRENADIER_ELITE"     , // 投放手雷/闪光/C4/微核 hack
    "GROWPLANTS"          , // 生长灌木→幼树→树，可破坏地形
    "GROW_VINE"           , // 生长藤蔓
    "HOWL"                , // 发出“刺耳嚎叫”
    "JACKSON"             , // 将僵尸转化为 zombie dancer（直到其死亡）
    "KAMIKAZE"            , // 倒计时后引爆自身弹药
    "LEECH_SPAWNER"       , // 生成 root runner/drone，有概率自我升级
    "LUNGE"               , // 跳跃攻击，可造成倒地
    "MON_LEECH_EVOLUTION" , // 将 leech plant 进化为 blossom（若无其他 blossom）
    "NONE"                , // 无特殊攻击
    "PAID_BOT"            , // PAY_BOT 宠物效果结束后移除友好状态
    "PARA_STING"          , // 射出麻痹飞镖
    "PARROT"              , // 模仿 speech.json 中的台词
    "PARROT_AT_DANGER"    , // 仅在看到敌对怪物时模仿台词
    "PHOTOGRAPH"          , // 拍照玩家（可能触发机器人攻击）
    "PLANT"               , // 真菌孢子落地并生长为 fungaloid
    "PULL_METAL_WEAPON"   , // 拉走玩家手中铁/钢武器
    "RATKING"             , // 施加 rat disease
    "RATTLE"              , // 发出“嘶嘶的响声”
    "RESURRECT"           , // 复活尸体
    "RIOTBOT"             , // 喷催泪/放松气体、上手铐、闪光
    "SEARCHLIGHT"         , // 用探照灯追踪目标
    "SHOCKING_REVEAL"     , // 发射闪电并揭示“震惊事实”（Crazy Cataclysm）
    "SHOCKSTORM"          , // 发射闪电
    "SHRIEK"              , // “可怕的尖叫”
    "SHRIEK_ALERT"        , // “非常可怕的尖叫”，更响
    "SHRIEK_STUN"         , // “令人震惊的尖叫”，造成轻微砸击与眩晕
    "SLIMESPRING"         , // 提供士气提升并治愈咬伤/流血
    "SMASH"               , // 强力砸击并击飞（JSON 等价为 "smash"）
    "SPIT_SAP"            , // 喷射树汁（酸伤害，射程12）
    "SPLIT"               , // HP 达到两倍时复制自身（可与 ABSORB_ITEMS 组合）
    "STARE"               , // 凝视玩家并施加递增减益（taint→tindrift）
    "SUICIDE"             , // 攻击后自杀
    "TAZER"               , // 电击玩家
    "TINDALOS_TELEPORT"   , // 生成残影并向角落传送
    "TRIFFID_GROWTH"      , // 幼年三叶怪成长为成年体
    "TRIFFID_HEARTBEAT"   , // 生长/破坏根墙并生成更多怪物
    "UPGRADE"             , // 升级周围友好怪物，若无目标则生气
    "VINE"                , // 藤蔓攻击
    "ZOMBIE_FUSE"         , // 吸收相邻生物并治疗，自身10天内更难融合
] as const;

/**硬编码的攻击ID */
export type HardcodeMonsterAttackID = typeof HardcodeMonsterAttackIDList[number];

/** 跳跃特殊攻击 */
export type MonsterAttackLeap = {
    type: "leap";
    /** 最大跳跃距离（必填）。
     * 遵循“圆形距离”设定。
     */
    max_range: Int;
    /**最小跳跃距离
     * 遵循“圆形距离”设定。
     */
    min_range?: Int;
    /** 即使与目标相邻也会跳跃，并会选择最近的可接受落点。 */
    prefer_leap?: boolean;
    /** 完全忽略目标位置，导致完全随机的跳跃。 */
    random_leap?: boolean;
    /** 即使落点是怪物通常无法移动的地形也会跳跃。 */
    ignore_dest_terrain?: boolean;
    /** 即使落点是怪物通常会避免的危险地形（火、陷阱等）也会跳跃。 */
    ignore_dest_danger?: boolean;
    /**若为 true，则在没有敌对目标时也允许使用此能力
     * @default false
     */
    allow_no_target?: boolean;
    /** 完成此特殊攻击所需的移动点数。
     * 100 move_cost 在速度 100 时等于 1 秒/回合。
     */
    move_cost?: Int;
    /** 使用此攻击时考虑的最小目标距离。 */
    min_consider_range?: Int;
    /** 使用此攻击时考虑的最大目标距离。 */
    max_consider_range?: Int;
    /** 对话条件，用于决定攻击是否启用。
     * 详见 NPCs.md，其中 u 指代怪物自身。
     */
    condition?: (BoolExpr);
    /** 成功跳跃后施加给自身的效果数组。 */
    self_effects?:  MonAttackEffect[];
    /** 玩家看到怪物跳跃（或落地）时显示的消息。 */
    message?: (DescText);
};

/** 施法特殊攻击 */
export type MonsterAttackSpell = {
    type: "spell";
    /** 此攻击使用的法术数据列表。 */
    spell_data: (FakeSpell);
    /**施放法术的等级。
     * 怪物施放的法术不会像玩家法术那样升级。
     */
    min_level: Int;
    /** 冷却时间（整数或变量对象）。 */
    cooldown?: (NumberExpr);
    /** 施法时显示的消息，会替换法术定义中的消息。
     * 动态字段对应 <怪物显示名> / <法术名> / <目标名>。
     */
    monster_message?: (DescText);
    /** 对话条件，用于决定攻击是否启用。
     * 详见 NPCs.md，其中 u 指代施法怪物，npc 指代目标。
     * 若法术允许无目标，则只能定义 self 条件。
     */
    condition?: (BoolExpr);
    /**若为 true，则即使没有敌对目标也会施放（仅 target_self:true 的法术）
     * @default false
     */
    allow_no_target?: boolean;
};

/** 枪械特殊攻击 */
export type MonsterAttackGun = {
    type: "gun";
    /**（必填）用于攻击的枪械 item id。 */
    gun_type: (ItemID);
    /**（必填）用于装填的弹药 item id（不是 ammo_type）。
     * 怪物本身必须在 starting_ammo 中拥有此弹药。
     */
    ammo_type: (ItemID);
    /** 弹药上限。超过此值会打印 debug 信息。 */
    max_ammo?: Int;
    /** 执行攻击的“假 NPC”的力量
     * @default 8
     */
    fake_str?: Int;
    /** 假 NPC 的敏捷
     * @default 8
     */
    fake_dex?: Int;
    /** 假 NPC 的智力
     * @default 8
     */
    fake_int?: Int;
    /** 假 NPC 的感知
     * @default 8
     */
    fake_per?: Int;
    /** 假 NPC 的技能数组，每项为 [技能ID, 技能等级]。 */
    fake_skills?: [SkillID, Int][];
    /** 执行攻击的移动点数。 */
    move_cost?: Int;
    /** 对话条件，用于决定攻击是否启用。
     * 详见 NPCs.md，其中 u 指代怪物自身。
     */
    condition?: NumberExpr;
    /** 若为 true，则怪物需要“瞄准”玩家。
     * 会消耗 targeting_cost、进入冷却并发出警告声。
     */
    require_targeting_player?: boolean;
    /** 同上，但目标为 NPC。 */
    require_targeting_npc?: boolean;
    /** 同上，但目标为怪物。 */
    require_targeting_monster?: boolean;
    /** 若为 true，则即使看不到玩家也会瞄准移动载具。 */
    target_moving_vehicles?: boolean;
    /** 瞄准状态持续的回合数（作用于炮塔，而非目标）。 */
    targeting_timeout?: Int;
    /** 成功攻击后延长瞄准状态的回合数（可为负）。 */
    targeting_timeout_extend?: Int;
    /** 瞄准玩家的移动消耗。
     * 仅在攻击玩家且最近 5 回合未瞄准过时应用。
     */
    targeting_cost?: Int;
    /** 若为 true，攻击未被激光锁定的目标时会重新瞄准并触发警告。
     * 激光锁定作用于目标，而非攻击者。
     */
    laser_lock?: boolean;
    /** 最大攻击距离。 */
    range?: Int;
    /** 最大连射攻击距离（若适用）。 */
    range_no_burst?: Int;
    /** 玩家看到攻击时的描述。 */
    description?: (DescText);
    /** 瞄准时发出的声音描述。 */
    targeting_sound?: (DescText);
    /** 瞄准声音的音量。 */
    targeting_volume?: Int;
    /** 弹药耗尽时的声音描述。 */
    no_ammo_sound?: (DescText);
};

/**怪物的特殊攻击 */
export type MonsterSpecialAttack =
    | MonsterAttackLeap
    | MonsterAttackSpell
    | MonsterAttackGun
    | MonstarAttackQuickRef
    | MonstarAttackRef
    | MonsterAttack;
