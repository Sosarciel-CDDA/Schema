import { CddaID, DescText, Int } from "./GenericDefine";
import { AnyItemID } from "./Item";
import { ParamsEoc } from "./Eoc";
import { SkillID } from "./Skill";
import { WeaponCategoryID } from "./WeaponCategory";


/**武术流派ID */
export type MartialArtID = CddaID<"MA">;




/**武术流派定义 */
export type MartialArt = {
    /**固定为"martial_art" */
    type: "martial_art";
    /**武术流派唯一ID */
    id: (MartialArtID);
    /**流派名称 */
    name: (DescText);
    /**流派描述 */
    description: (DescText);
    /**激活时的消息
     * @example 
     * ["You stand ready.", "%s stands ready."] 
     * // 第一个元素是玩家激活时的消息，第二个是NPC激活时的消息(%s会被替换为NPC名称)
     */
    initiate?: [DescText, DescText];
    /**自动学习条件
     * @example
     * [["unarmed", 2]] // 当徒手技能达到2级时自动学习
     */
    autolearn?: [SkillID, Int][];
    /**是否可教学 */
    teachable?: boolean;
    /**是否允许所有武器 */
    allow_all_weapons?: boolean;
    /**是否强制空手攻击 */
    force_unarmed?: boolean;
    /**是否阻止武器格挡 */
    prevent_weapon_blocking?: boolean;
    /**是否严格限制近战武器 */
    strictly_melee?: boolean;
    /**是否允许生物装甲手臂格挡 */
    arm_block_with_bio_armor_arms?: boolean;
    /**是否允许生物装甲腿部格挡 */
    leg_block_with_bio_armor_legs?: boolean;
    /**主要技能 */
    primary_skill?: (SkillID);
    /**学习难度 */
    learn_difficulty?: Int;
    /**手臂格挡解锁等级 */
    arm_block?: Int;
    /**腿部格挡解锁等级 */
    leg_block?: Int;
    /**非标准肢体格挡解锁等级 */
    nonstandard_block?: Int;
    /**常驻buff效果 */
    static_buffs?: MartialArtBuff[];
    /**移动时触发的buff效果 */
    onmove_buffs?: MartialArtBuff[];
    /**等待时触发的buff效果 */
    onpause_buffs?: MartialArtBuff[];
    /**攻击后触发的buff效果 */
    onattack_buffs?: MartialArtBuff[];
    /**命中后触发的buff效果 */
    onhit_buffs?: MartialArtBuff[];
    /**未命中时触发的buff效果 */
    onmiss_buffs?: MartialArtBuff[];
    /**暴击时触发的buff效果 */
    oncrit_buffs?: MartialArtBuff[];
    /**被击中时触发的buff效果 */
    ongethit_buffs?: MartialArtBuff[];
    /**闪避时触发的buff效果 */
    ondodge_buffs?: MartialArtBuff[];
    /**格挡时触发的buff效果 */
    onblock_buffs?: MartialArtBuff[];
    /**击杀时触发的buff效果 */
    onkill_buffs?: MartialArtBuff[];
    /**常驻效果条件 */
    static_eocs?: (ParamsEoc);
    /**移动时触发的效果条件 */
    onmove_eocs?: (ParamsEoc);
    /**等待时触发的效果条件 */
    onpause_eocs?: (ParamsEoc);
    /**攻击后触发的效果条件 */
    onattack_eocs?: (ParamsEoc);
    /**命中后触发的效果条件 */
    onhit_eocs?: (ParamsEoc);
    /**未命中时触发的效果条件 */
    onmiss_eocs?: (ParamsEoc);
    /**暴击时触发的效果条件 */
    oncrit_eocs?: (ParamsEoc);
    /**被击中时触发的效果条件 */
    ongethit_eocs?: (ParamsEoc);
    /**闪避时触发的效果条件 */
    ondodge_eocs?: (ParamsEoc);
    /**格挡时触发的效果条件 */
    onblock_eocs?: (ParamsEoc);
    /**击杀时触发的效果条件 */
    onkill_eocs?: (ParamsEoc);
    /**可用技巧列表 */
    techniques?: string[];
    /**可用武器列表 */
    weapons?: AnyItemID[];
    /**可用武器类别 */
    weapon_category?: WeaponCategoryID[];
};



/**武术流派BuffID */
export type MartialArtBuffID = CddaID<"MAB">;


/**武术流派buff效果 */
export type MartialArtBuff = {
    /**buff效果ID */
    id: (MartialArtBuffID);
    /**buff名称 */
    name?: (DescText);
    /**buff描述 */
    description?: (DescText);
    /**buff持续时间(回合数) */
    buff_duration?: Int;
    /**切换流派时是否保留 */
    persists?: boolean;
    /**是否允许空手时生效 */
    unarmed_allowed?: boolean;
    /**是否允许近战武器时生效 */
    melee_allowed?: boolean;
    /**是否严格限制空手(不允许任何武器) */
    strictly_unarmed?: boolean;
    /**是否需要在墙边 */
    wall_adjacent?: boolean;
    /**允许的武器类别 */
    weapon_categories_allowed?: WeaponCategoryID[];
    /**最大叠加层数 */
    max_stacks?: Int;
    /**额外格挡次数 */
    bonus_blocks?: Int;
    /**额外闪避次数 */
    bonus_dodges?: Int;
    /**固定加成 */
    flat_bonuses?: any[];
    /**倍率加成 */
    mult_bonuses?: any[];
}