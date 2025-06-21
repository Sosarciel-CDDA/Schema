import { CddaID, DescText, Float, Time } from "./GenericDefine";
import { ProficiencyCategoryID } from "./ProficiencyCategory";

/**专长ID */
export type ProficiencyID = CddaID<"PROF">;

/**专长 */
export type Proficiency = {
    type: "proficiency";
    /**专长唯一ID */
    id: (ProficiencyID);
    /**关联的proficiency_category对象的内部ID */
    category: (ProficiencyCategoryID);
    /**名称，用于游戏内显示 */
    name: (DescText);
    /**描述，说明该熟练度包含的能力或特殊知识 */
    description: (DescText);
    /**是否可以通过游戏中的正常方式学习该熟练度 */
    can_learn: boolean;
    /**是否可以在角色之间教授该熟练度
     * @default true
     */
    teachable?: boolean;
    /**制作配方的时间乘数 */
    default_time_multiplier?: Float;
    /**制作配方的有效技能惩罚 */
    default_skill_penalty?: Float;
    /**对攻击者技能的固定加成 */
    default_weakpoint_bonus?: Float;
    /**如果攻击者缺乏该技能，对其技能的固定惩罚 */
    default_weakpoint_penalty?: Float;
    /**学习该熟练度所需的(最优)时间，作为时间持续字符串 */
    time_to_learn?: (Time);
    /**必须先获得才能学习该熟练度的熟练度列表 */
    required_proficiencies?: ProficiencyID[];
    /**熟练度经验获取将无视实际专注度，视为专注度始终为100 */
    ignore_focus?: boolean;
    /**根据玩家拥有特定熟练度而应用于某些活动的加成 
     * 键值应为SkillID
     */
    bonuses?: {[k:string]:{
        /**加成类型 */
        type: ProfBonusType;
        /**加成值 */
        value: Float;
    }[]};
};


const ProfBonusTypeList =[
    "strength",
    "dexterity",
    "intelligence",
    "perception",
    "stamina",
] as const;

type ProfBonusType = typeof ProfBonusTypeList[number];