import { ExtractDefineTechniqueID, ExtractDefineTechniqueIDList } from "Extract";
import { AttackVectorID } from "./AttackVector";
import { DamageTypeID } from "./DamageType";
import { BoolObj, ParamsEoc } from "./Eoc";
import { FlagID } from "./Flag";
import { CddaID, DescText, Float, Int, StatusLc } from "./GenericDefine";
import { SkillID } from "./Skill";
import { WeaponCategoryID } from "./WeaponCategory";

/**武术技巧ID */
export type TechniqueID = CddaID<"TECH">|DefineTechniqueID;

/**武术技巧定义 */
export type Technique = {
    /**固定为"technique" */
    type: "technique";
    /**武术技巧唯一ID */
    id: (TechniqueID);
    /**武术技巧名称 */
    name: (DescText);
    /**攻击向量 */
    attack_vectors?: AttackVectorID[];
    /**是否允许空手使用 */
    unarmed_allowed?: boolean;
    /**允许的武器类别 */
    weapon_categories_allowed?: WeaponCategoryID[];
    /**是否允许任何近战武器 */
    melee_allowed?: boolean;
    /**强力击退效果 */
    powerful_knockback?: boolean;
    /**需要的技能等级 */
    skill_requirements?: {
        /**技能ID */
        name: (SkillID);
        /**需要的最低等级 */
        level: Int;
    }[];
    /**武器伤害要求 */
    weapon_damage_requirements?: {
        /**伤害类型 */
        type: (DamageTypeID);
        /**最小伤害值 */
        min: Int;
    }[];
    /**需要任意一个的buff */
    required_buffs_any?: TechniqueEffectID[];
    /**需要全部的buff */
    required_buffs_all?: TechniqueEffectID[];
    /**禁止任意一个的buff */
    forbidden_buffs_any?: TechniqueEffectID[];
    /**禁止全部的buff */
    forbidden_buffs_all?: TechniqueEffectID[];
    /**需要的武器标志 */
    req_flags?: FlagID[];
    /**需要的角色标志 */
    required_char_flags?: FlagID[];
    /**需要全部的角色标志 */
    required_char_flags_all?: FlagID[];
    /**禁止的角色标志 */
    forbidden_char_flags?: FlagID[];
    /**是否需要弹药 */
    needs_ammo?: boolean;
    /**是否仅暴击时触发 */
    crit_tec?: boolean;
    /**是否允许暴击 */
    crit_ok?: boolean;
    /**是否仅远程攻击时触发 */
    reach_tec?: boolean;
    /**是否允许远程攻击 */
    reach_ok?: boolean;
    /**触发条件 */
    condition?: (BoolObj);
    /**条件描述 */
    condition_desc?: (DescText);
    /**最小重复次数 */
    repeat_min?: Int;
    /**最大重复次数 */
    repeat_max?: Int;
    /**击退距离 */
    knockback_dist?: Int;
    /**击退扩散范围 */
    knockback_spread?: Int;
    /**是否跟随击退 */
    knockback_follow?: boolean;
    /**眩晕持续时间 */
    stun_dur?: Int;
    /**倒地持续时间 */
    down_dur?: Int;
    /**是否切换位置 */
    side_switch?: boolean;
    /**是否缴械 */
    disarms?: boolean;
    /**是否夺取武器 */
    take_weapon?: boolean;
    /**是否挣脱抓取 */
    grab_break?: boolean;
    /**范围效果类型 */
    aoe?: "spin"|"wide"|"impale";
    /**格挡反击 */
    block_counter?: boolean;
    /**闪避反击 */
    dodge_counter?: boolean;
    /**选择权重 */
    weighting?: Int;
    /**是否防御性武术技巧 */
    defensive?: boolean;
    /**失误恢复 */
    miss_recovery?: boolean;
    /**使用时的消息 */
    messages?: [DescText, DescText];
    /**触发的效果条件 */
    eocs?: (ParamsEoc);
    /**固定加成 */
    flat_bonuses?: TechniqueBonus[];
    /**倍率加成 */
    mult_bonuses?: TechniqueBonus[];
    /**武术技巧效果 */
    tech_effects?: TechniqueEffect[];
};



/**武术技巧ID */
export type TechniqueEffectID = CddaID<"TECHE">;
/**武术技巧效果定义 */
export type TechniqueEffect = {
    /**效果ID */
    id: (TechniqueEffectID);
    /**触发几率(百分比) */
    chance?: Int;
    /**是否永久效果 */
    permanent?: boolean;
    /**效果持续时间(回合数) */
    duration?: Int;
    /**是否只在造成伤害时触发 */
    on_damage?: boolean;
    /**需要的角色标志 */
    req_flag?: (FlagID);
    /**触发时显示的消息 */
    message?: (DescText);
}


/**武术技巧加成定义 */
export type TechniqueBonus = {
    /**影响的属性  
     * - hit: 命中  
     * - dodge: 闪避  
     * - block: 格挡  
     * - speed: 速度(武术技巧中无效)  
     * - movecost: 移动消耗  
     * - damage: 伤害  
     * - armor: 护甲  
     * - arpen: 护甲穿透  
     */
    stat: "hit" | "dodge" | "block" | "speed" | "movecost" | "damage" | "armor" | "arpen";
    /**伤害类型(仅当stat为damage/armor/arpen时需要) */
    type?: (DamageTypeID);
    /**加成数值  
     * @example 0.3 // 30%加成  
     */
    scale: Float;
    /**缩放属性(基础属性或技能) */
    "scaling-stat"?: StatusLc | SkillID;
};


/**预定义的武术技巧ID 列表 */
export const DefineTechniqueIDList = ExtractDefineTechniqueIDList;
/**预定义的武术技巧ID */
export type DefineTechniqueID = ExtractDefineTechniqueID;