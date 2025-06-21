import { ParamsEoc } from "./Eoc";
import { FlagID } from "./Flag";
import { CddaID, Int, Float, Time } from "./GenericDefine";
import { AnyItemID } from "./Item";
import { ProficiencyID } from "./Proficiency";
import { SkillID } from "./Skill";
import { ToolQualityID } from "./ToolQuality";

/**配方ID格式 */
export type RecipeID = CddaID<"RECIPE">;

/**活动强度等级 */
export type ActivityLevel =
    | "NO_EXERCISE"
    | "LIGHT_EXERCISE"
    | "MODERATE_EXERCISE"
    | "BRISK_EXERCISE"
    | "ACTIVE_EXERCISE"
    | "EXTRA_EXERCISE";

/**副产品定义 */
export type Byproduct = {
    item: (AnyItemID);
    count?: [Int, Int];
    charges?: [Int, Int];
}

/**从书中学习配方的设置 */
export type BookLearn = {
    skill_level: Int;
    recipe_name?: (RecipeID);
    hidden?: boolean;
}

/**配方相关技能熟练度设置 */
export type RecipeProficiency = {
    proficiency: (ProficiencyID);
    required?: boolean;
    time_multiplier?: Float;
    skill_penalty?: Float;
    learning_time_multiplier?: Float;
    max_experience?: (Time);
}

/**工具质量要求 */
type ToolQualityRequirement = {
    id: (ToolQualityID);
    level: Int;
    amount: Int;
}

/**物品使用定义 */
type ToolUsage = {
    id: (AnyItemID);
    charges: Int; // -1表示不消耗充能
}

/**配方定义 */
export type Recipe = {
    type: "recipe",
    /**结果物品ID */
    result: (AnyItemID);
    /**活动强度等级 */
    activity_level: ActivityLevel;
    /**副产品 */
    byproducts?: AnyItemID[][];
    /**副产品组 */
    byproduct_group?: Byproduct[];
    /**配方类别 */
    category: string;
    /**配方子类别 */
    subcategory?: string;
    /**ID后缀 */
    id_suffix?: string;
    /**结果变体 */
    variant?: string;
    /**是否覆盖同名配方 */
    override?: boolean;
    /**需要删除的标志 */
    delete_flags?: FlagID[];
    /**使用的主要技能 */
    skill_used: (SkillID);
    /**需要的技能 */
    skills_required?: [SkillID, Int][];
    /**从书中学习 */
    book_learn?: {[k:string]:BookLearn};
    /**难度 */
    difficulty: Int;
    /**制作时间 */
    time: (Time);
    /**是否可逆 */
    reversible?: boolean | { time: Time };
    /**自动学习 */
    autolearn?: boolean | [SkillID, Int][];
    /**通过拆解学习 */
    decomp_learn?: Int | [SkillID, Int][];
    /**相关专长 */
    proficiencies?: RecipeProficiency[];
    /**是否包含容器 */
    contained?: boolean;
    /**指定容器 */
    container?: (AnyItemID);
    /**容器变体 */
    container_variant?: string;
    /**批量制作时间因子 */
    batch_time_factors?: [Int, Int];
    /**结果数量/充能数 */
    charges?: Int;
    /**结果倍数 */
    result_mult?: Int;
    /**配方标志 */
    flags?: FlagID[];
    /**结果效果条件 */
    result_eocs?: (ParamsEoc);
    /**建筑蓝图 */
    construction_blueprint?: string;
    /**是否显示 */
    on_display?: boolean;
    /**所需工具质量 */
    qualities?: ToolQualityRequirement[];
    /**所需工具 */
    tools?: ToolUsage[][];
    /**使用需求 */
    using?: [string, Int][];
    /**组件材料 */
    components?: [string, Int][][];
    /**组件黑名单 */
    component_blacklist?: string[];
};