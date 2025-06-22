import { ParamsEoc } from "./Eoc";
import { FlagID } from "./Flag";
import { CddaID, Int, Float, Time } from "./GenericDefine";
import { ItemID, ItemVariantID } from "./Item";
import { ProficiencyID } from "./Proficiency";
import { SkillID } from "./Skill";
import { ToolQualityID } from "./ToolQuality";

/**配方ID */
export type RecipeID = CddaID<"RECIPE">;

/**活动强度等级, 表示制作该配方时的运动强度 */
export type ActivityLevel =
    | "NO_EXERCISE"
    | "LIGHT_EXERCISE"
    | "MODERATE_EXERCISE"
    | "BRISK_EXERCISE"
    | "ACTIVE_EXERCISE"
    | "EXTRA_EXERCISE";

/**副产品定义, 表示制作时额外生成的物品 */
export type Byproduct = {
    /** 物品ID */
    item: (ItemID);
    /** 生成数量范围 [最小, 最大] */
    count?: [Int, Int];
    /** 生成充能范围 [最小, 最大] */
    charges?: [Int, Int];
}

/**从书中学习配方的设置 */
export type BookLearn = {
    /** 需要达到的技能等级 */
    skill_level: Int;
    /** 配方在书中显示的名称 */
    recipe_name?: (RecipeID);
    /** 是否在书中隐藏该配方 */
    hidden?: boolean;
}

/**配方相关技能熟练度设置 */
export type RecipeProficiency = {
    /** 熟练度ID */
    proficiency: (ProficiencyID);
    /** 是否必须拥有该熟练度才能制作 */
    required?: boolean;
    /** 没有该熟练度时的时间乘数 */
    time_multiplier?: Float;
    /** 没有该熟练度时的技能惩罚 */
    skill_penalty?: Float;
    /** 学习速度乘数 */
    learning_time_multiplier?: Float;
    /** 最大经验值(时间) */
    max_experience?: (Time);
}

/**工具质量要求 */
type ToolQualityRequirement = {
    /** 质量类型ID */
    id: (ToolQualityID);
    /** 需要的最低质量等级 */
    level: Int;
    /** 需要该质量工具的数量 */
    amount: Int;
}

/**物品使用定义 */
type ToolUsage = {
    /** 工具ID */
    id: (ItemID);
    /** 消耗的充能数(-1表示不消耗) */
    charges: Int;
}

/**配方定义 */
export type Recipe = {
    id:RecipeID;
    type: "recipe",
    /**结果物品ID */
    result: (ItemID);
    /**活动强度等级 */
    activity_level: ActivityLevel;
    /**副产品, 制作时额外生成的物品ID数组
     * @example [["scrap", "string"]] // 可能生成废料或绳子
     */
    byproducts?: ItemID[][];
    /**副产品组, 使用物品组定义的额外生成物品
     * @example
     * [{
     *   "item": "scrap",
     *   "count": [1, 4]
     * }]
     */
    byproduct_group?: Byproduct[];
    /**配方类别
     * @example "CC_WEAPON" // 武器类
     */
    category: string;
    /**配方子类别
     * @example "CSC_WEAPON_PIERCING" // 穿刺武器
     */
    subcategory?: string;
    /**ID后缀, 用于使配方ID唯一
     * @example "_striped" // 完整配方ID将是"<result>_striped"
     */
    id_suffix?: string;
    /**结果变体, 指定总是生成该变体
     * @example "javelin_striped" // 总是生成条纹标枪
     */
    variant?: string;
    /**是否覆盖同名配方 */
    override?: boolean;
    /**需要从结果物品中删除的标志
     * @example ["CANNIBALISM"] // 删除食人标志
     */
    delete_flags?: FlagID[];
    /**使用的主要技能 */
    skill_used: (SkillID);
    /**解锁配方需要的技能
     * @example [["survival", 1], ["throw", 2]] // 需要生存1级和投掷2级
     */
    skills_required?: [SkillID, Int][];
    /**可以从哪些书中学习该配方
     * @example
     * {
     *   "textbook_anarch": {
     *     "skill_level": 7,
     *     "hidden": true
     *   }
     * }
     */
    book_learn?: {[k:string]:BookLearn};
    /**制作难度  */
    difficulty: Int;
    /**制作时间 */
    time: (Time);
    /**是否可逆(可拆解), 可指定拆解时间
     * @example true // 可拆解, 时间与制作相同
     * @example { "time": "30 s" } // 可拆解, 需要30秒
     */
    reversible?: boolean | { time: Time };
    /**自动学习设置
     * @example true // 达到所需技能后自动学习
     * @example [["survival", 2], ["fabrication", 3]] // 生存2级和制造3级时自动学习
     */
    autolearn?: boolean | [SkillID, Int][];
    /**通过拆解学习设置
     * @example 4 // 使用该配方的主要技能达到4级时可通过拆解学习
     * @example [["survival", 1], ["fabrication", 2]] // 生存1级和制造2级时可通过拆解学习
     */
    decomp_learn?: Int | [SkillID, Int][];
    /**相关专长设置
     * @example
     * [{
     *   "proficiency": "prof_knapping",
     *   "time_multiplier": 2.0
     * }]
     */
    proficiencies?: RecipeProficiency[];
    /**结果物品是否包含在指定容器中
     * @example true // 结果物品放在其默认容器中
     */
    contained?: boolean;
    /**指定容器ID, 结果物品将放在该容器中 */
    container?: (ItemID);
    /**容器变体ID, 覆盖默认的随机选择
     * @example "jar_glass_sealed_strawberry_picture" // 使用草莓图案的密封玻璃罐
     */
    container_variant?: (ItemVariantID);
    /**批量制作时间因子[最大时间减少百分比, 达到该减少的最小批量]
     * @example [25, 15] // 批量15时最多减少25%时间
     */
    batch_time_factors?: [Int, Int];
    /**结果物品数量/充能数 */
    charges?: Int;
    /**结果物品倍数 */
    result_mult?: Int;
    /**配方标志 */
    flags?: FlagID[];
    /**制作完成时触发的效果条件 */
    result_eocs?: (ParamsEoc);
    /**建筑蓝图ID, 用于派系营地升级建筑
     * @example "camp" // 营地升级蓝图
     */
    construction_blueprint?: string;
    /**是否在游戏中显示, 用于派系营地计算建筑时间但不显示给玩家 */
    on_display?: boolean;
    /**所需工具质量
     * @example
     * [{
     *   "id": "CUT",
     *   "level": 1,
     *   "amount": 1
     * }] // 需要1个具有1级切割质量的工具
     */
    qualities?: ToolQualityRequirement[];
    /**所需工具
     * @example
     * [[ { "id": "fire", "charges": -1 } ]] // 需要火源但不消耗充能
     */
    tools?: ToolUsage[][];
    /**使用需求ID和倍数
     * @example
     * [
     *   ["req_a", 3], // 需要3倍req_a中的所有材料
     *   ["req_b", 5]  // 需要5倍req_b中的所有材料
     * ]
     */
    using?: [string, Int][];
    /**组件材料, 每组内是替代选择
     * @example
     * [
     *   [ ["item_a", 5] ], // 需要5个item_a
     *   [ ["item_b", 2], ["item_c", 4] ] // 需要2个item_b或4个item_c
     * ]
     */
    components?: [ItemID, Int][][];
    /**组件黑名单, 这些物品不会添加到结果物品组件中
     * @example ["item_a", "item_b"] // 排除item_a和item_b
     */
    component_blacklist?: ItemID[];
};