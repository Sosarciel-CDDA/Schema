import { AddictionTypeID } from "./Addiction";
import { BionicID } from "./Bionic";
import { ParamsEoc } from "./Eoc";
import { FlagID } from "./Flag";
import { CddaID, DescText, Int } from "./GenericDefine";
import { InlineItemGroup } from "./ItemGroup";
import { MissionDefinitionID } from "./MissionDefinition";
import { MonsterID } from "./Monster";
import { MutationID } from "./Mutation";
import { ProficiencyID } from "./Proficiency";
import { RecipeID } from "./Recipe";
import { SkillID } from "./Skill";
import { SpellID } from "./Spell";
import { VehicleID } from "./Vehicle";

/**职业ID */
export type ProfessionID = CddaID<'PROFESSION'>;
/**职业 */
export type Profession = {
    type: "profession";
    /**职业的唯一ID */
    id: (ProfessionID);
    /**职业名称
     * 可以是单一性别中立名称（如"Survivor"）或包含"male"和"female"字段的对象
     * @example { "male": "Groom", "female": "Bride" }
     */
    name: DescText | { male: DescText; female: DescText };
    /**游戏内描述 */
    description: (DescText);
    /**职业的点数成本
     * 正值消耗点数，负值奖励点数
     * 在0.G版本中无实际效果
     */
    points: Int;
    /**起始银行余额（可选） */
    starting_cash?: Int;
    /**NPC背景故事组ID（可选）
     * 参见BG_trait_groups.json
     */
    npc_background?: string;//(BGTraitGroupID);
    /**是否允许生成NPC时选择此职业（可选）
     * @default true
     */
    chargen_allow_npc?: boolean;
    /**起始成瘾列表（可选）
     * 需要"type"字段（成瘾ID）和"intensity"字段
     * 参见JSON_FLAGS.md
     */
    addictions?: { type: (AddictionTypeID); intensity: Int }[];
    /**起始技能列表（可选）
     * 需要"name"字段（技能ID）和"level"字段
     * 参见skills.json
     */
    skills?: { name: (SkillID); level: Int };
    /**起始任务ID列表（可选） */
    missions?: MissionDefinitionID[];
    /**起始熟练度列表（可选） */
    proficiencies?: ProficiencyID[];
    /**起始物品（可选）
     * 包含"both"、"male"和"female"字段
     */
    items?: {
        both?: (InlineItemGroup);
        male?: (InlineItemGroup);
        female?: (InlineItemGroup);
    };
    /**最低生成年龄（可选）
     * 仅影响随机生成（如"Play Now!"）
     * @default 21
     */
    age_lower?: Int;
    /**最高生成年龄（可选）
     * 仅影响随机生成（如"Play Now!"）
     */
    age_upper?: Int;
    /**起始宠物列表（可选）
     * 包含怪物ID和数量
     */
    pets?: { name: (MonsterID); amount: Int }[];
    /**起始车辆ID（可选）
     * 车辆会在最近的道路生成，角色会记住其位置
     */
    vehicle?: (VehicleID);
    /**标志列表（可选）
     * 用于角色创建
     */
    flags?: FlagID[];
    /**起始植入的CBM列表（可选） */
    CBMs?: BionicID[];
    /**起始特质/突变列表（可选）
     * 参见mutations.json和MUTATIONS.md
     */
    traits?: MutationID[];
    /**解锁此职业所需的成就ID（可选）
     * 可以是单个ID或ID数组
     */
    requirement?: string | string[];
    /**是否为硬性要求（可选）
     * 如果为true，则忽略元进度设置，始终要求
     * 主要用于模组
     * @default false
     */
    hard_requirement?: boolean;
    /**起始条件效果（可选）
     * EOC ID或内联EOC
     */
    effect_on_conditions?: (ParamsEoc);
    /**起始法术列表（可选）
     * 包含法术ID和等级
     * 参见MAGIC.md
     */
    spells?: { id: (SpellID); level: Int }[];
    /**起始配方列表（可选） */
    recipes?: RecipeID[];
    /**爱好列表（可选）
     * 仅允许选择这些爱好
     */
    hobbies?: HobbyID[];
    /**是否为白名单爱好（可选）
     * 如果为false，则"hobbies"列表为禁止选择的爱好
     * @default true
     */
    whitelist_hobbies?: boolean;
};

/**爱好ID */
export type HobbyID = CddaID<'HOBBY'>;
/**爱好 */
export type Hobby = {
    type: "profession";
    subtype:"hobby";
    /**爱好的唯一ID */
    id: (HobbyID);
} & Omit<Profession,'id'>;