import { Time, CddaID, DescText, Int, Color, Char } from "./GenericDefine";
import { SpellID } from "./Spell";
import { EmitID } from "./Emit";
import { MutationID } from "./Mutation";
import { EffectID } from "./Effect";
import { BoolExpr, NumberExpr } from "./Eoc";
import { BodyPartID } from "./BodyPart";
import { PRecord } from "@zwa73/js-utils";
import { DamageTypeID } from "./DamageType";
import { SkillID } from "./Skill";

/**附魔ID */
export type EnchantmentID = CddaID<"ENCH">;
/**附魔 */
export type Enchantment = {
    type: "enchantment";
    /**附魔的说明 */
    description?: (DescText);
    /**附魔的名称 */
    name?: (DescText);
    /**附魔唯一ID */
    id: (EnchantmentID);
    /**物品在什么位置时启用 */
    has?: EnchConHas;
    /**启用条件 */
    condition: EnchCon;
    /**抚摸拥有者近战击中敌人时触发的法术  
     * 该法术以该生物的位置为中心, 除非"hit_self": true  
     * 那么它以你的位置为中心.   
     */
    hit_you_effect?: FakeSpell[];
    /**附魔拥有者击中时触发的法术  
     * 该咒语以您的位置为中心.   
     */
    hit_me_effect?: FakeSpell[];
    /**附魔的数值调整 */
    values?: ValueModVal<EnchValType>[];
    /**附魔的技能调整 */
    skills?:ValueModVal<SkillID>[];
    /**生成Emit */
    emitter?: (EmitID);
    /**添加肢体 */
    modified_bodyparts?: ({
        /**获得肢体 */
        gain: BodyPartID }|{
        /**失去肢体 */
        lose: BodyPartID
    })[];
    /**添加变异 */
    mutations?: MutationID[];
    /**添加效果 */
    ench_effects?: {
        /**效果ID */
        effect: (EffectID);
        /**效果强度 */
        intensity: Int;
    }[];
    /**定时触发的效果 */
    intermittent_activation?: {
        /**定时触发的效果 */
        effects: {
            /**触发间隔 */
            frequency: (Time);
            /**伪法术数据 */
            spell_effects: FakeSpell[];
        }[];
    };
    /**累赘度修正 */
    encumbrance_modifier?:{
        /**目标肢体 */
        part    :(BodyPartID);
        /**倍率调整 1为+100% */
        multiply?: (NumberExpr);
        /**加值调整 在计算倍率前先添加 */
        add     ?: (NumberExpr);
    }[]
    /**近战伤害加值 */
    melee_damage_bonus?:DamageModVal[];
    /**伤害减免 计算护甲前 */
    incoming_damage_mod?:DamageModVal[];
    /**伤害减免 计算护甲后 */
    incoming_damage_mod_post_absorbed?:DamageModVal[];
    /**特殊视觉 */
    special_vision?:SpecialVisionDesc[]
};

/**特殊视觉文本描述ID */
export type SpecialVisionDescID = string;
/**特殊视觉文本描述 */
export type SpecialVisionDesc = {
    /**特殊视觉文本描述ID */
    id: SpecialVisionDescID;
    /**视觉描述条件 */
    text_condition?: (BoolExpr);
    /**视觉描述 */
    text: (DescText);
    /**视觉描述符号 */
    symbol?: (Char);
    /**视觉描述颜色 */
    color?: (Color);
}

/**附魔伤害类型数值调整 */
export type DamageModVal = {
    /**伤害类型 */
    type: (DamageTypeID);
    /**倍率调整 1为+100% */
    multiply?: (NumberExpr);
    /**加值调整 在计算倍率前先添加 */
    add     ?: (NumberExpr);
}

/**附魔数值调整 value */
export type ValueModVal<T extends string> = {
    /**附魔调整类型 */
    value    : T;
    /**倍率调整 1为+100% */
    multiply?: (NumberExpr);
    /**加值调整 在计算倍率前先添加 */
    add     ?: (NumberExpr);
}

/**内联匿名附魔 */
export type InlineEnchantment = Omit<Enchantment,"type"|"id">;

/**作为参数传入的附魔 */
export type ParamsEnchantment = InlineEnchantment|EnchantmentID|(InlineEnchantment|EnchantmentID)[];

/**装备附魔启用条件 */
export type EnchConHas = (
    /**拿在手上时 */
    "WIELD" |
    /**持有/背包里有/穿戴着此物品时 */
    "HELD"  |
    /**穿戴着此物品时 */
    "WORN"
);
/**附魔启用条件 */
export type EnchCon =(
    /**总是启用 */
    "ALWAYS"    |
    /**物品激活时 */
    "ACTIVE"    |
    /**物品未激活时 */
    "INACTIVE"  |
    /**EOC对话条件 */
    BoolExpr
);

/**伪法术附加信息 */
export type FakeSpell = {
    /**法术ID */
    id: (SpellID);
    /**击中附魔拥有者而非命中目标  
     * 如果为true, 法术可能会影响施法者 (作为AoE法术的自我伤害, 或作为增益法术的效果应用)  
     * @default false  
     */
    hit_self?: boolean;
    /** 1/n 的几率触发 */
    once_in?: (NumberExpr);
    /**释放时的消息 */
    message?: (DescText);
    /**npc释放时的消息 */
    npc_message?: (DescText);
    /**最小法术等级 */
    min_level?: (NumberExpr);
    /**最大法术等级 */
    max_level?: (NumberExpr);
}

/**附魔通用加值类型 列表 */
export const EnchGenericValTypeList = [
    "ARMOR_ALL"                  ,// 提供对所有伤害类型的防护, 除了标记为 "no_resist": true 的类型. 若需更精确的调整, 请使用 incoming_damage_mod 或 item_armor_bonus. 
    "ATTACK_NOISE"               ,// 影响你进行近战攻击时产生的噪音量. 
    "ATTACK_SPEED"               ,// 影响物品的攻击速度, 即使该物品不是你当前使用的装备, 同时影响投掷动作的消耗 (最多 25 移动点) . "add": 10 表示每次攻击增加 10 移动点 (变慢) , "add": -10 表示每次攻击减少 10 移动点 (变快) ; "multiply": 1 表示攻击速度翻倍. 
    "AVOID_FRIENDRY_FIRE"        ,// 若有友军处于枪械射击路径中, 你角色有一定几率避免误伤. 范围从 0.0 (无避免几率) 到 1.0 (绝不误伤) . 
    "BANDAGE_BONUS"              ,// 影响你使用绷带时的治疗强度 (bandages_power) . 
    "BIONIC_MANA_PENALTY"        ,// 改变义体能量对法力值的惩罚比例 (默认是 1 千焦耗费 1 点法力) . 推荐使用 multiply; 使用 add 会直接加减固定法力值, 与能量量无关. 
    "BIONIC_POWER"               ,// 增加义体能量储存 (单位: 毫焦) . 例如 "add": 1000000 表示增加 1 千焦. 
    "BLEED_STOP_BONUS"           ,// 影响你使用医疗物品时止血的效果. 
    "BODYTEMP_SLEEP"             ,// 睡眠时增加的体温 (单位: 摄氏度) . 默认值为 0, 推荐使用 add. 
    "BONUS_BLOCK"                ,// 影响你能进行的格挡次数. 
    "BONUS_DODGE"                ,// 影响你能进行的闪避次数. 不要与 DODGE_CHANCE 混淆. 
    "CARDIO_MULTIPLIER"          ,// 影响你的心肺健康总值. 由于是百分比, 推荐使用 multiply. 
    "CARRY_WEIGHT"               ,// 影响你能携带的总重量. "add": 1000 表示增加 1 千克的负重能力. 
    "CASTING_TIME_MULTIPLIER"    ,// 改变你的施法速度, 与 mutation 中的 casting_time_multiplier 类似. 推荐使用 multiply. 
    "COMBAT_CATCHUP"             ,// 影响你重新学习战斗技能的速度 (乘法因子) . 
    "CONSUME_TIME_MOD"           ,// 改变你食用食物, 饮料或药品的时间. "add": 10 表示增加 10 秒; "multiply": 1 表示时间翻倍. 
    "CLIMATE_CONTROL_HEAT"       ,// 使体温向舒适值上升, 单位为温暖度, 最多提升到指定值. 
    "CLIMATE_CONTROL_CHILL"      ,// 使体温向舒适值下降, 单位为温暖度, 最多降低到指定值. 
    "CRAFTING_SPEED_MULTIPLIER"  ,// 改变你的制作速度. 正值减少制作时间, 负值增加制作时间. 
    "DEXTERITY"                  ,// 影响你的敏捷属性. 
    "DISINFECTANT_BONUS"         ,// 影响你使用消毒剂时的治疗强度 (disinfectant_power) . 
    "DODGE_CHANCE"               ,// 修改你闪避攻击的几率. 默认值为 0, 推荐使用 add. 
    "EFFECTIVE_HEALTH_MOD"       ,// 若不为零, 则使用该值替代你的实际生命值修正. 
    "EQUIPMENT_DAMAGE_CHANCE"    ,// 修改武器和护甲受到耐久损伤的几率. 推荐使用 multiply. 负值表示降低损伤几率. 
    "EXTRA_ELEC_PAIN"            ,// 电击伤害的额外疼痛乘法因子. 
    "EVASION"                    ,// 固定几率闪避攻击, 不受其他修正影响. 范围从 0.0 到 1.0. 
    "FALL_DAMAGE"                ,// 影响你受到的坠落伤害. 
    "SLEEPINESS"                 ,// 影响你疲劳增长的速度. 值越大越容易疲劳. 推荐使用 multiply. 
    "SLEEPINESS_REGEN"           ,// 影响你休息时疲劳恢复的速度. 推荐使用 multiply. 
    "FAT_TO_MAX_HP"              ,// 改变由脂肪提供的最大生命值. 推荐使用 multiply 以符合公式计算. 
    "FOOTSTEP_NOISE"             ,//  (暂无说明) 
    "FORCEFIELD"                 ,// 你有几率将伤害完全抵消为 0. 范围从 0.0 到 1.0. 
    "HEALTHY_RATE"               ,// 每日健康值变化速率. "multiply": -1 表示停止变化. 
    "HEARING_MULT"               ,// 影响你的听力. 听力越强, UI 中显示的噪音值越高. 
    "HUNGER"                     ,// 影响饥饿值变化速度. 不会影响实际热量消耗, 热量消耗由 METABOLISM 控制. 
    "INTELLIGENCE"               ,// 影响你的智力属性. 
    "KCAL"                       ,// 增加你从食物中获得的热量. 
    "KNOCKBACK_RESIST"           ,// 修改你受到击退的程度. 0 表示正常, 100 表示完全免疫. 
    "KNOCKDOWN_RESIST"           ,// 修改你被击倒的程度. 100 以上表示免疫击倒. 
    "LEARNING_FOCUS"             ,// 学习时的专注加成. 
    "LUMINATION"                 ,// 角色会发光. 
    "MAX_HP"                     ,//  (暂无说明) 
    "MAX_MANA"                   ,//  (暂无说明) 
    "MAX_STAMINA"                ,//  (暂无说明) 
    "MELEE_DAMAGE"               ,// 增加你的近战攻击伤害. 
    "MELEE_RANGE_MODIFIER"       ,// 修改你的近战攻击距离. 正值类似于延伸攻击. 
    "MELEE_TO_HIT"               ,// 修改你的近战命中率. 推荐使用 add. 
    "MELEE_STAMINA_CONSUMPTION"  ,// 修改你进行近战攻击时消耗的体力. 体力消耗为负值, "add": 100 表示减少消耗, "add": -100 表示增加消耗; "multiply": 1 表示增加消耗, "multiply": -0.5 表示减少消耗. 不能超过 -50. 
    "MENDING_MODIFIER"           ,// 修改你身体部位的愈合速度. 推荐使用 multiply. 
    "METABOLISM"                 ,// 代谢率乘法因子, 影响 BMI 和疲劳. 代谢率越低, 越容易疲劳; multiply: -1 表示完全停止代谢. 
    "MOD_HEALTH"                 ,// 每半小时修改一次生命值, 受 MOD_HEALTH_CAP 限制. 
    "MOD_HEALTH_CAP"             ,// 每半小时生命值增减的最大值. 
    "MOTION_ALARM"               ,// 当附近有移动物体时触发警报. 
    "MOVE_COST"                  ,//  (暂无说明) 
    "MUT_INSTABILITY_MOD"        ,// 修改你的突变不稳定性分数, 影响获得负面突变的几率. 
    "MUT_ADDITIONAL_OPTIONS"     ,// 每次突变时提供额外选项. 选项会围绕初始突变进行聚类, 高数值可解锁所有可能突变. 
    "MOVECOST_FLATGROUND_MOD"    ,// 在平地上移动一格所需的移动点数, UI 中显示. 
    "MOVECOST_OBSTACLE_MOD"      ,// 在高移动成本地形上移动一格所需的移动点数, UI 不显示. 
    "MOVECOST_SWIM_MOD"          ,// 在水中移动一格所需的移动点数, UI 不显示. 
    "MOVEMENT_EXERTION_MODIFIER" ,// 影响你移动一格所需的体力消耗. 虽然是浮点数, 但实际效果在整数断点处体现. 
    "NIGHT_VIS"                  ,// 黑暗中的视距. "add": 3 表示夜视距离增加 3 格. 
    "OBTAIN_COST_MULTIPLIER"     ,// 从容器中取出物品的操作惩罚或加成. "add": 100 表示取出物品时额外消耗 100 移动点 (约 1 秒) 
    "OVERKILL_DAMAGE"            ,// 影响敌人死亡后尸体受到的额外伤害. 数值越低, 尸体破坏越严重
    "OVERMAP_SIGHT"              ,// 增加你在世界地图上可见的格子数量
    "PAIN"                       ,// 你获得疼痛时的数值修正. 无论如何至少会获得 1 点疼痛
    "PAIN_PENALTY_MOD_STR"       ,// 疼痛导致你损失的力量值. 默认公式为 (pain × 0.005) × 最大力量, 最低为 1
    "PAIN_PENALTY_MOD_DEX"       ,// 疼痛导致你损失的敏捷值. 默认公式为 (pain × 0.0075) × 最大敏捷, 最低为 1
    "PAIN_PENALTY_MOD_INT"       ,// 疼痛导致你损失的智力值. 默认公式为 (pain × 0.01) × 最大智力, 最低为 1
    "PAIN_PENALTY_MOD_PER"       ,// 疼痛导致你损失的感知值. 默认公式为 (pain × 0.01) × 最大感知, 最低为 1
    "PAIN_PENALTY_MOD_SPEED"     ,// 疼痛导致你损失的速度值. 默认公式为 pain 的 0.7 次方, 最大损失不超过 50 点速度
    "PAIN_REMOVE"                ,// 每 5 分钟自然减少疼痛时的几率修正. 无论如何总有一定几率减少疼痛
    "PERCEPTION"                 ,// 影响你的感知属性
    "PHASE_DISTANCE"             ,// 你可以穿越不可通行地形的最大距离. 小于 1 无效, 最大为 48 格
    "POWER_TRICKLE"              ,// 每秒生成的义体能量 (毫焦) . 默认值为 0, 推荐使用 add
    "RANGE"                      ,// 修改你使用远程武器的射程
    "RANGED_ARMOR_PENETRATION"   ,// 增加远程攻击的护甲穿透能力
    "RANGED_DAMAGE"              ,// 增加远程攻击的伤害
    "RANGE_DODGE"                ,// 闪避远程投射物的几率. 消耗闪避次数, 若闪避次数为 0 则失败. "add": 0.5 表示有 50% 几率闪避
    "READING_EXP"                ,// 修改你每次阅读获得的最小经验值
    "READING_SPEED_MULTIPLIER"   ,// 修改你阅读书籍的速度. 数值越小阅读越快, 最低为 1 秒
    "RECOIL_MODIFIER"            ,// 修改你射击时的后坐力. 正值增加散布, 负值减少散布
    "REGEN_HP"                   ,// 修改你生命值的恢复速度 (自然恢复与药物恢复均受影响) . 默认值为 1; 负值会导致持续流失生命
    "REGEN_HP_AWAKE"             ,// 修改你在清醒状态下的生命恢复速度. 默认值为 0 表示清醒时无法恢复; 负值表示清醒时持续流失生命. 推荐使用 multiply
    "REGEN_MANA"                 ,//  (暂无说明) 
    "REGEN_STAMINA"              ,//  (暂无说明) 
    "SCENT_MASK"                 ,// 增加你在气味系统中的目标气味值 (默认为 500) . "add": 100 表示角色更容易被嗅到
    "SHOUT_NOISE"                ,// 修改你喊叫时产生的噪音量 (默认为 10) 
    "SHOUT_NOISE_STR_MULT"       ,// 修改力量对喊叫噪音的影响倍数 (默认为 2, 即每点力量增加 2 点噪音) 
    "SKILL_RUST_RESIST"          ,// 使用 add 表示抵抗技能衰退的几率 (百分比) add: 100 即过目不忘; 使用 multiply 表示衰退量的乘法因子, 数值越小衰退越慢 mul: 0 即过目不忘
    "SLEEPY"                     ,// 数值越高越容易入睡
    "SOCIAL_INTIMIDATE"          ,// 影响你的威吓能力
    "SOCIAL_LIE"                 ,// 影响你的说谎能力
    "SOCIAL_PERSUADE"            ,// 影响你的说服能力
    "SPEED"                      ,// 影响你的基础速度
    "STAMINA_REGEN_MOD"          ,// 修改你体力恢复速度的因子. 默认值为 0, 通常需要结合 add 使用. "add": 0.1 表示恢复速度增加 10%
    "STEALTH_MODIFIER"           ,// 从角色可见范围中减去的值, 最大为 60. 负值有效但受限于视野上限机制
    "STOMACH_SIZE_MULTIPLIER"    ,// 修改你一次能吃下的食物量. "add": 1000 表示胃容量增加 1 升
    "STRENGTH"                   ,// 影响你的力量属性. 公式为: (基础力量 + add) × (multiply + 1). 例如力量 8, add: 2, multiply: 1 → (8+2)×(1+1)=20
    "SWEAT_MULTIPLIER"           ,// 影响你身体的出汗量, 作用于所有身体部位. 推荐使用 multiply
    "THIRST"                     ,//  (暂无说明) 
    "THROW_STR"                  ,// 增加你投掷物品时的力量, 不受投掷技能限制. 每点力量可将 113g 物品多投掷 10 格, 或 1130g 多投掷 1 格
    "THROW_DAMAGE"               ,// 增加你投掷物品造成的伤害. "add" 增加钝击伤害, "multiply" 增加所有伤害类型
    "TOTAL_WEIGHT"               ,// 影响你角色的总重量, 包括穿戴物品, 义体等
    "UGLINESS"                   ,// 影响你的丑陋值, 进而影响 NPC 对你的初始印象
    "VITAMIN_ABSORB_MOD"         ,// 增加你从食物中获得的维生素量
    "VOMIT_MUL"                  ,// 修改你呕吐的几率
    "WEAKNESS_TO_WATER"          ,// 角色在潮湿状态下每秒受到的伤害. 伤害随湿度比例缩放, 负值表示恢复生命. 支持浮点数; 例如 "add": -0.3 表示有 30% 几率恢复 1 点生命
    "WEAKPOINT_ACCURACY"         ,// 增加你命中弱点的几率, 仅对标记为 "is_good": true 的弱点有效 (默认所有弱点都为 true) 
    "WEAPON_DISPERSION"          ,// 正值增加武器散布, 负值减少散布
    "WEIGHT"                     ,// 修改角色体重, 不影响热量或脂肪. "add" 表示以克为单位增加体重, 最低为 1 克
] as const;
export type EnchGenericValType = typeof EnchGenericValTypeList[number];
/**附魔近战武器加值类型 列表 */
export const EnchMeleeValTypeList = [
    "ITEM_ATTACK_SPEED"  , // 
] as const;
/**附魔近战武器加值类型 */
export type EnchMeleeValType = typeof EnchMeleeValTypeList[number];
/**附魔护甲加值类型 列表 */
export const EnchArmorValTypeList = [ ] as const;
/**附魔护甲加值类型 */
export type EnchArmorValType = typeof EnchArmorValTypeList[number];


/**附魔加值类型 */
export type EnchValType = EnchGenericValType|EnchMeleeValType|EnchArmorValType;