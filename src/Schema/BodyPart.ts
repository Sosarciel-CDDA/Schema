import { ExtractDefineBodyPartID, ExtractDefineSubBodyPartID } from "Extract";
import { DamageTypeID } from "./DamageType";
import { EffectID } from "./Effect";
import { IDExpr } from "./Eoc";
import { FlagID } from "./Flag";
import { CddaID, DescText, Float, Int, PRecord } from "./GenericDefine";
import { LimbScoreID } from "./LimbScore";
import { TechniqueID } from "./Technique";



/**身体部位定义ID */
export type BodyPartID = CddaID<'BP'>|DefineBodyPartID;
/**子身体部位定义ID */
export type SubBodyPartID = CddaID<'SBP'>|DefineSubBodyPartID;
/**预定义的子肢体类型 */
export type DefineSubBodyPartID = ExtractDefineSubBodyPartID;

/**身体部位定义 */
export type BodyPart = {
    type: "body_part";
    /**身体部位定义唯一ID */
    id: (BodyPartID);
    /**游戏中显示的名称 */
    name: (DescText);
    /**肢体类型, 由bodypart.h定义  
     * 某些功能将仅检查给定的身体部位类型  
     * 当前实现的类型包括:   
     * head, torso, sensor, mouth, arm, hand, leg, foot, wing, tail, other  
     */
    limb_type: (LimbType);
    /**可以替代limb_type使用  
     * 此身体部位可以模拟的肢体类型的加权列表  
     * 权重是决定此身体部位在作为给定肢体类型时的表现如何的修饰符  
     * @example [ [ "foot", 1.0 ], [ "hand", 0.15 ] ]  
     */
    limb_types?: [LimbType, Float][];
    /**身体部位的次要肢体类型列表, 用于包含在相关计算中 */
    secondary_types?: BodyPartID[];
    /**此身体部位的宾格形式 */
    accusative: (DescText);
    /**在标题中的显示方式 */
    heading: (DescText);
    /**heading的复数形式  
     * 当相对的身体部位具有相同的负重数据, 健康和温度时使用  
     */
    heading_multiple: (DescText);
    /**当肢体达到40负重时打印的消息 */
    encumbrance_text: (DescText);
    /**肢体分数开始基于负重缩放的负重值  
     * @default 0 // 表示从第一个负重点开始缩放  
     */
    encumbrance_threshold?: Int;
    /**当负重达到或超过此值时, 肢体停止贡献其分数  
     * @default 100  
     */
    encumbrance_limit?: Int;
    /**应用于抓住此肢体的怪物的GRAB_FILTER效果的effect id  
     * 用于适当的抓取移除(参见MONSTER_SPECIAL_ATTACKS.md了解抓取逻辑)  
     */
    grabbing_effect?: (EffectID);
    /**在面板中HP栏旁边显示的方式 */
    hp_bar_ui_text: string;
    /**此部位所连接的主要部位  
     * (如果这是主要部位, 则连接到自身)  
     */
    main_part: (BodyPartID);
    /**(如果main_part是自身则为必需)   
     * 此部位连接到"根"身体部位的下一部位  
     * (根身体部位应该连接到自身)  
     * 每个解剖结构应该有一个唯一的根身体部位, 通常是头部  
     */
    connected_to?: (BodyPartID);
    /**任何修改前的此部位的HP量 */
    base_hp: Int;
    /**在成对情况下的相对部位 */
    opposite_part: (BodyPartID);
    /**(近战)攻击目标的身体部位大小  
     * 怪物特殊攻击能够针对设定的身体部位命中大小(参见MONSTERS.md中的hitsize_min/max)  
     * 角色的总命中大小和/基础命中大小作为闪避掷骰的分母,   
     * 意味着额外的肢体被动地使闪避更加困难  
     */
    hit_size: Int;
    /**假设"所有者"被击中时, 击中给定身体部位的难度  
     * 数字越高意味着好的命中会偏向此部位,   
     * 越低意味着此部位不太可能被不准确的攻击击中  
     * 公式是 chance *= pow(hit_roll, hit_difficulty)  
     */
    hit_difficulty: Float;
    /**此部位在被100%浸湿前能有多湿  
     * 0使肢体防水,   
     * 绝对湿度的士气检查, 而其他效果为湿度百分比 -  
     * 使高drench_capacity更长时间防止惩罚  
     */
    drench_capacity: Int;
    /**每次肢体被浸湿时应用的"湿度"单位  
     * @default 2 // 潜水时忽略  
     */
    drench_increment?: Int;
    /**从身体部位干燥一定量湿度所需时间的除数,   
     * 由服装修改  
     * 最终干燥速率取决于透气性, 天气和身体部位的drying_capacity  
     */
    drying_rate?: Float;
    /**肢体变湿时的情绪奖励/惩罚,   
     * 表示肢体100%饱和时的士气效果  
     * 由穿着的服装和环境温度修改  
     */
    wet_morale?: Int;
    /**此部位过热的情绪效果  
     * @default 0  
     */
    hot_morale_mod?: Float;
    /**此部位过冷的情绪效果  
     * @default 0  
     */
    cold_morale_mod?: Float;
    /**在此部位穿着肮脏服装的情绪效果  
     * @default 0  
     */
    squeamish_penalty?: Int;
    /**用此部位在火旁取暖的效果  
     * @default 0  
     */
    fire_warmth_bonus?: Int;
    /**身体部位的固有温度修饰符  
     * 第一个值(与突变的bodytemp_modifier相同的"温度单位")总是应用,   
     * 第二个值在身体部位不过热时额外应用  
     */
    temp_mod?: [Float, Float];
    /**此部位的固有环境保护  
     * @default 0  
     */
    env_protection?: Int;
    /**根据以下公式修改此部位的hp_max的值:   
     * hp_max += int_mod*int_max + dex_mod*dex_max + str_mod*str_max + per_mod*per_max + health_mod*get_healthy()  
     * 其中X_max是X属性的未修改值,   
     * get_healthy()是角色的隐藏健康属性  
     */
    stat_hp_mods?: {
        int_mod?: Float;
        dex_mod?: Float;
        str_mod?: Float;
        per_mod?: Float;
        health_mod?: Float;
    };
    /**肢体每次成功治疗时固有治疗的HP量  
     * 参见ALWAYS_HEAL和HEAL_OVERRIDE标志  
     */
    heal_bonus?: Int;
    /**肢体断裂时的固有修复率  
     * @default 1.0 // 在其他因素计算后用作治疗因子的乘数  
     */
    mend_rate?: Float;
    /**肢体提供其近战技术和conditional_flags所需的HP量  
     * @default 1 // 表示断裂的肢体不贡献  
     */
    health_limit?: Int;
    /**可以被装甲覆盖的部位丑陋度, 负数赋予美丽奖励 */
    ugliness?: Int;
    /**无法被装甲覆盖的固有丑陋度 */
    ugliness_mandatory?: Int;
    /**此部位有多少仿生插槽 */
    bionic_slots?: Int;
    /**此身体部位是否为肢体且能够断裂  
     * @default false  
     */
    is_limb?: boolean;
    /**使用此部位砸东西时显示的消息 */
    smash_message?: (DescText);
    /**使用此部位徒手砸地形或家具时应用于砸击力量的修饰符  
     * @default 0.5  
     */
    smash_efficiency?: Float;
    /**身体部位标志列表  
     * 这些被视为角色标志, 类似于仿生/特质/效果标志  
     */
    flags?: FlagID[];
    /**只要肢体高于其health_limit HP, 此肢体提供的角色标志列表 */
    conditional_flags?: FlagID[];
    /**只要肢体高于其health_limit HP, 此肢体授予的近战技术列表  
     * 技术被包含在每次攻击的技术列表中的几率取决于肢体负重  
     * ( !x_in_y(当前负重 / technique_encumbrance_limit) )  
     */
    techniques?: TechniqueID[];
    /**完全禁用给定技术的肢体负重水平,   
     * 较低的负重仍然减少技术被选择的几率(见上文)  
     */
    technique_encumbrance_limit?: Int;
    /**定义肢体分数的数组列表  
     * 每个数组包含2个必需值和1个可选值  
     * 值1是对limb_score id的引用  
     * 值2是定义肢体分数值的float  
     * (可选) 值3是定义肢体分数最大值的float  
     * (主要用于操纵器分数)  
     * @example [ [ "manip", 0.1, 0.2 ], [ "lift", 0.5 ], [ "block", 1.0 ], [ "swim", 0.1 ] ]  
     */
    limb_scores?: [LimbScoreID, Float, Float?][];
    /**每当肢体受损时可以应用的效果数组 */
    effects_on_hit?: OnHitEffect[];
    /**对象数组, 每个详细说明身体部位对徒手攻击的伤害贡献及其护甲穿透  
     * 每个肢体的徒手伤害相加并添加到基础徒手伤害中  
     * 应该用于角色预期总是用来攻击的肢体,   
     * 对于特殊攻击使用专门的技术  
     */
    unarmed_damage?: {
        amount: Int;
        armor_pierce: Int;
    }[];
    /**(子)身体部位id数组  
     * 装甲覆盖自动扩展到这些身体部位 -  
     * 例如: 任何覆盖arm_l身体部位的装甲将以相同的覆盖范围覆盖arm_bear_l  
     * 子位置也需要类似的定义以确保正确功能  
     * 目前身体部位只能指向身体部位, 子身体部位指向子身体部位  
     * 
     * 只发生一步替换(即覆盖arm_l的装甲将覆盖arm_bear_l,   
     * 但不覆盖arm_bear_l中定义的任何类似bps)  
     * 
     * 对类似sbp的任何覆盖意味着对替代子部分的父部分的覆盖:   
     * 覆盖肘部的装甲将覆盖其他肢体上的类似肘部,   
     * 但不覆盖任何其他位置  
     */
    similar_bodyparts?: BodyPartID[];
    /**包含伤害抵抗值的对象  
     * @example { "bash": 2, "cut": 1 }  
     */
    armor?: PRecord<DamageTypeID,Int>;
    /**子部位列表 */
    sub_parts?: BodyPartID[];
    /**左侧或右侧 */
    side?: "left" | "right" | "both";
    /**旧版ID */
    legacy_id?: string;
};

/**子身体部位定义 */
export type SubBodyPart = {
    type: "sub_body_part";
    /**子身体部位定义唯一ID */
    id: (SubBodyPartID);
    /**游戏中显示的名称 */
    name: (DescText);
    /**游戏中显示的复数形式名称 */
    name_multiple?: (DescText);
    /**父肢体部位ID */
    parent: (BodyPartID);
    /**镜像位置的肢体id */
    opposite?: (BodyPartID);
    /**位置 */
    side: 0|1|2;
    max_coverage?: Int;
}


/**有效的躯干类型 列表 */
export const LimbTypeList = [
    "head"  ,
    "torso" ,
    "sensor",
    "mouth" ,
    "arm"   ,
    "hand"  ,
    "leg"   ,
    "foot"  ,
    "wing"  ,
    "tail"  ,
    "other" ,
] as const;

/**有效的躯干类型 */
export type LimbType = typeof LimbTypeList[number];



/**预定义的必要的肢体 列表 */
export const DefineVitalBodyPartIDList = [
    "torso" ,
    "head"  ,
] as const;
/**预定义的必要的肢体 */
export type DefineVitalBodyPartID = typeof DefineVitalBodyPartIDList[number];

/**预定义的四肢/主要肢体 列表 */
export const DefineLimbBodyPartIDList = [
    "leg_l" , "leg_r" ,
    "arm_l" , "arm_r" ,
    ...DefineVitalBodyPartIDList    ,
] as const;
/**预定义的四肢/主要肢体 */
export type DefineLimbBodyPartID = typeof DefineLimbBodyPartIDList[number];

/**预定义的子躯干 列表 */
export const DefineSubLimbBodyPartIDList = [
    "foot_l", "foot_r",
    "hand_l", "hand_r",
] as const;
/**预定义的子躯干 */
export type DefineSubLimbBodyPartID = typeof DefineSubLimbBodyPartIDList[number];

/**预定义的肢体 列表 */
export const DefineBodyPartIDList = [...DefineLimbBodyPartIDList,...DefineSubLimbBodyPartIDList] as const;
/**预定义的肢体 */
export type DefineBodyPartID = typeof DefineBodyPartIDList[number]|ExtractDefineBodyPartID;

/**目标肢体参数  
 * whole body为全身  
 * RANDOM为随机  
 */
export type BodyPartParam = IDExpr<BodyPartID>|"RANDOM"|"whole body";



/**身体部位受击时应用的效果 */
type OnHitEffect = {
    /**要应用的效果ID */
    id: (EffectID);
    /**如果为true, 效果不会应用于身体部位而是整个角色  
     * @default false  
     */
    global?: boolean;
    /**有资格应用效果的伤害类型ID  
     * @default 所有伤害类型  
     */
    dmg_type?: (DamageTypeID);
    /**触发效果所需的伤害量  
     * 对于主要部位用作肢体最大生命值的百分比,   
     * 对于次要部位用作绝对伤害量  
     * @default 1  
     */
    dmg_threshold?: Int;
    /**基于超过damage_threshold的伤害的缩放步长  
     * @default 1  
     */
    dmg_scale_increment?: Float;
    /**触发效果的百分比几率  
     * @default 100  
     */
    chance?: Int;
    /**每超过dmg_threshold一个dmg_scale_increment, 几率增加的值  
     * @default 0  
     */
    chance_dmg_scaling?: Float;
    /**要应用的效果强度  
     * @default 1  
     */
    intensity?: Int;
    /**每超过dmg_threshold一个dmg_scale_increment, 强度增加的值  
     * @default 0  
     */
    intensity_dmg_scaling?: Float;
    /**作为受击效果一部分肢体可以获得的最大强度 -  
     * 其他效果来源(如法术或明确的特殊攻击效果)仍然可以应用更高的强度  
     * @default INT_MAX  
     */
    max_intensity?: Int;
    /**要应用的效果持续时间(秒)  
     * @default 1  
     */
    duration?: Int;
    /**每超过dmg_threshold一个dmg_scale_increment, 持续时间增加的值  
     * @default 0  
     */
    duration_dmg_scaling?: Float;
    /**作为受击效果一部分肢体可以获得的最大持续时间(秒) - 参见max_intensity  
     * @default INT_MAX  
     */
    max_duration?: Int;
};