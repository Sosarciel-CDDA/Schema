import { FakeSpell } from "Schema/Enchantment";
import { TalkerStr, TalkerVar } from "../Eoc";
import { ParamsEoc } from "./EocEffectIndex";
import { BoolObj, CondObj, GenericObj, IDObj, LocObj, NumObj, StrObj, TimeObj } from "../VariableObject";
import { Explosion, MessageRatType } from "Schema/GenericDefine";
import { AssignMissionTarget } from "Schema/MissionDefinition";
import { EffectID } from "Schema/Effect";
import { MutationID } from "Schema/Mutation";
import { ItemID } from "Schema/Item";
import { ActivityTypeID } from "Schema/ActivityType";
import { DamageTypeID } from "Schema/DamageType";
import { TerrainID } from "Schema/Terrain";
import { FurnitureID } from "Schema/Furniture";
import { FieldTypeID } from "Schema/FieldType";
import { MonsterID } from "Schema/Monster";
import { TalkTopicID } from "Schema/TalkTopic";
import { MartialArtID } from "Schema/MartialArt";
import { MutationCategoryID } from "Schema/MutationCategory";
import { FactionRelationFlags } from "Schema/NPCFaction";
import { TrapID } from "Schema/Trap";
import { BodyPartParam } from "Schema/BodyPart";
import { BionicID } from "Schema/Bionic";
import { RecipeID } from "Schema/Recipe";
import { NpcInstanceID } from "Schema/NpcInstance";
import { TechniqueID } from "Schema/Technique";




//#region 不在eoc doc定义内的

/**使用物品 */
export type ConsumeItem = TalkerVar<{
    consume_item: IDObj<ItemID>;
    /**数量 */
    count?: (NumObj);
    /**充能数量 */
    charges?: (NumObj);
    /**为true时将显示消息给予npc物品 */
    popup?: boolean;
},"consume_item">;

/**让npc跟随玩家 */
export type FollowOnly = "follow_only"

/**让npc停止跟随玩家并离开追随者阵营 */
export type Leave = "leave"

/**丢下手持物品 仅限npc */
export type DropWeapon = "drop_weapon"

//#endregion


/**造成伤害  
 * 以近战攻击的方式造成伤害; 不能被闪避, 但可以被护甲减免  
 * 适用于: Avatar Character NPC Monster  
 * @example  
 * // 对你的躯干造成20点生物伤害  
 * { "u_deal_damage": "biological", "amount": 20, "bodypart": "torso" }  
 */
export type DealDamage = TalkerVar<{
    /**造成伤害的类型 */
    deal_damage: (IDObj<DamageTypeID>);
    /**伤害数值  
     * @default 0  
     */
    amount?: (NumObj);
    /**受伤的身体部位  
     * 注意只有角色才能有肢体.   
     * @default "RANDOM"  
     */
    bodypart?: (BodyPartParam);
    /**护甲穿透  
     * @default 0  
     */
    arpen?: (NumObj);
    /**护甲穿透倍率  
     * @default 1  
     */
    arpen_mult?: (NumObj);
    /**伤害倍率  
     * @default 1  
     */
    dmg_mult?: (NumObj);
    /**最小命中尺寸  
     * 如果bodypart是RANDOM, 只选择hit_size大于此值的身体部位  
     * @default -1  
     */
    min_hit?: (NumObj);
    /**最大命中尺寸  
     * 如果bodypart是RANDOM, 只选择hit_size小于此值的身体部位  
     * @default 你最大的身体部位尺寸  
     */
    max_hit?: (NumObj);
    /**是否可以攻击高处  
     * 如果为true, 可以攻击带有LIMB_UPPER标志的肢体, 如果为false, 这些肢体会被排除  
     * @default true  
     */
    can_attack_high?: boolean;
    /**命中检定 */
    hit_roll?: (NumObj);
}, 'deal_damage'>;



/**突变  
 * 你的角色或NPC将尝试突变; 用于突变系统, 对于其他目的最好使用add_trait  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 尝试随机突变  
 * { "u_mutate": 0 }  
 * // 不使用维生素进行突变  
 * { "npc_mutate": { "math": [ "1+1" ] }, "use_vitamins": false }  
 */
export type GetMutate = TalkerVar<{
    /**突变概率  
     * 1/int的概率导致随机突变, 如果为0则只使用最高类别  
     */
    mutate: (NumObj);
    /**是否使用维生素  
     * @default true  
     */
    use_vitamins?: boolean;
}, 'mutate'>;


/**分类突变  
 * 类似于mutate但需要指定类别参数并保证突变  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 进行PLANT类别的突变  
 * { "u_mutate_category": "PLANT" }  
 * // 使用变量指定突变类别  
 * { "u_mutate_category": { "global_val": "next_mutation" } }  
 */
export type GetMutateCategory = TalkerVar<{
    /**突变类别 */
    mutate_category: (IDObj<MutationCategoryID>);
    /**是否使用维生素  
     * @default true  
     */
    use_vitamins?: boolean;
}, 'mutate_category'>;


/**定向突变  
 * 类似于上面的突变, 但指定了突变的最终目标, 并使用正常的mutate_towards步骤来达到目标,   
 * 遵循基础特征和changes_to/cancels/types限制.   
 * 适用于: Avatar Character NPC  
 * @example  
 * // 向TAIL_STUB突变 (移除任何不兼容项) , 使用变量中设置的类别, 消耗维生素并使用该类别的基础特征移除概率/倍率  
 * {  
 *   "u_mutate_towards": "TAIL_STUB",  
 *   "category": { "u_val": "upcoming_mutation_category" },  
 *   "use_vitamins": true  
 * }  
 */
export type MutateTowards = TalkerVar<{
    /**目标特征ID */
    mutate_towards: (IDObj<MutationID>);
    /**突变类别  
     * @default "ANY"  
     * 定义用于突变步骤的类别 - 对于维生素使用是必需的  
     */
    category?: (IDObj<MutationCategoryID>);
    /**是否使用维生素  
     * 与mutate中相同, 需要定义类别  
     */
    use_vitamins?: boolean;
}, 'mutate_towards'>;


/**设置特征可净化性  
 * 如果你有给定的特征, 它将被添加到/从你的不可净化特征列表中移除,   
 * 覆盖给定特征定义中的purifiable: true.   
 * 适用于: Avatar Character NPC  
 * @example  
 * // 将BEAK特征设置为不可净化  
 * {  
 *   "u_set_trait_purifiability": "BEAK",  
 *   "purifiable": false  
 * }  
 */
export type SetTraitPurifiability = TalkerVar<{
    /**要更改的特征ID */
    set_trait_purifiability: (IDObj<MutationID>);
    /**是否可净化  
     * true将特征添加到不可净化特征列表, false将其移除  
     */
    purifiable: boolean;
}, 'set_trait_purifiability'>;


/**添加效果  
 * 对你或NPC应用某种效果  
 * 适用于: Avatar Character NPC Monster  
 * @example  
 * // 应用醉酒效果, 持续4.5小时  
 * { "u_add_effect": "drunk", "duration": "270 minutes" }  
 * // 在随机身体部位上永久应用强度为1的真菌效果  
 * { "u_add_effect": "fungus", "intensity": 1, "duration": "PERMANENT", "target_part": "RANDOM" }  
 */
export type AddEffect = TalkerVar<{
    /**要添加的效果ID */
    add_effect: (IDObj<EffectID>);
    /**效果持续时间  
     * 效果的长度; 整数("duration": 60)和持续时间字符串("duration": "1 m")都有效;   
     * 可以使用PERMANENT来给予永久(365d)效果  
     */
    duration: (TimeObj|IDObj<"PERMANENT">);
    /**目标身体部位  
     * @default "whole body"  
     * 如果使用, 只会影响指定的身体部位. 可以使用RANDOM来随机选择一个身体部位  
     */
    target_part?: (BodyPartParam);
    /**效果强度  
     * @default 0  
     */
    intensity?: (NumObj);
    /**强制应用  
     * @default false  
     * 如果为true, 将忽略所有免疫  
     */
    force_bool?: boolean;
}, 'add_effect'>;


/**添加仿生装置  
 * 你或NPC将安装某种仿生装置  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 在你的角色上安装1个bio_power_storage  
 * { "u_add_bionic": "bio_power_storage" }  
 * // 安装由bionic_id上下文值提供的仿生装置  
 * { "u_add_bionic": { "context_val": "bionic_id" } }  
 */
export type AddBionic = TalkerVar<{
    /**要安装的仿生装置  
     * 你的角色或NPC将获得该仿生装置; 每个效果只能安装一个仿生装置  
     */
    add_bionic: (IDObj<BionicID>);
}, 'add_bionic'>;


/**移除仿生装置  
 * 你或NPC将从身体上卸载某种仿生装置  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 从你的角色上卸载1个bio_power_storage  
 * { "u_lose_bionic": "bio_power_storage" }  
 * // 卸载由bionic_id上下文值提供的仿生装置  
 * { "u_lose_bionic": { "context_val": "bionic_id" } }  
 */
export type LoseBionic = TalkerVar<{
    /**要卸载的仿生装置  
     * 你的角色或NPC将失去该仿生装置  
     */
    lose_bionic: (IDObj<BionicID>);
}, 'lose_bionic'>;



/**添加特性  
 * 给角色或NPC添加某种突变/特性  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 给角色添加TELEPATH特性  
 * { "u_add_trait": "TELEPATH" }  
 * // 给角色添加存储在trait_id上下文值中的特性  
 * { "u_add_trait": { "context_val": "trait_id" } }  
 * // 给角色添加带有紫色变体的hair_mohawk特性  
 * { "u_add_trait": "hair_mohawk", "variant": "purple" }  
 */
export type AddTrait = TalkerVar<{
    /**要添加的特性ID  
     */
    add_trait: (IDObj<MutationID>);
    /**特性变体  
     * 特性变体的ID  
     */
    variant?: (StrObj);
}, 'add_trait'>;



/**移除效果  
 * 如果角色或NPC有某种效果, 将其移除  
 * 适用于: Avatar Character NPC Monster  
 * @example  
 * // 移除玩家的感染效果  
 * { "u_lose_effect": "infection" }  
 * // 移除玩家头部的流血效果  
 * { "u_lose_effect": "bleed", "target_part": "head" }  
 * // 移除所有身体部位的流血效果  
 * { "u_lose_effect": "bleed", "target_part": "ALL" }  
 */
export type LoseEffect = TalkerVar<{
    /**要移除的效果ID  
     * 要移除的效果或效果的ID; 如果角色或NPC没有此效果, 则不会发生任何事情  
     */
    lose_effect: IDObj<EffectID>|IDObj<EffectID>[];
    /**目标身体部位  
     * @default "whole body"  
     * 如果使用, 只会影响指定的身体部位. 可以使用ALL来移除talker所有身体部位上的效果  
     */
    target_part?: (BodyPartParam);
}, 'lose_effect'>;


/**移除特性  
 * 如果角色或NPC有某种特性或突变, 将其移除  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 从角色中移除CHITIN突变  
 * { "u_lose_trait": "CHITIN" }  
 * // 移除存储在mutation_id上下文值中的突变  
 * { "u_lose_trait": { "context_val": "mutation_id" } }  
 */
export type LoseTrait = TalkerVar<{
    /**要移除的突变ID  
     * 要移除的突变的ID; 如果角色或NPC没有此突变, 则不会发生任何事情  
     */
    lose_trait: IDObj<MutationID>;
}, 'lose_trait'>;


/**激活特性  
 * 你的角色或NPC将激活特性  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 激活process_mutation突变, 这将触发它可能导致的所有效果, 包括突变内部的activated_eocs  
 * { "u_activate_trait": "process_mutation" }  
 * // 激活包含在this上下文值中的特性  
 * { "u_activate_trait": { "context_val": "this" } }  
 */
export type ActivateTrait = TalkerVar<{
    /**要激活的特性/突变ID */
    activate_trait: IDObj<MutationID>;
}, 'activate_trait'>;


/**停用特性  
 * 你的角色或NPC将停用特性  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 停用BIOLUM1_active特性  
 * { "u_deactivate_trait": "BIOLUM1_active" }  
 * // 停用包含在that上下文值中的特性  
 * { "u_deactivate_trait": { "context_val": "that" } }  
 */
export type DeactivateTrait = TalkerVar<{
    /**要停用的特性/突变ID */
    deactivate_trait: IDObj<MutationID>;
}, 'deactivate_trait'>;



/**学习武术  
 * 你的角色或NPC将学习武术风格  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 角色学习Eskrima  
 * { "u_learn_martial_art": "style_eskrima" }  
 * // 角色学习存储在ma_id上下文值中的武术  
 * { "u_learn_martial_art": { "context_val": "ma_id" } }  
 */
export type LearnMartialArt = TalkerVar<{
    /**要学习的武术 */
    learn_martial_art: (IDObj<MartialArtID>);
}, 'learn_martial_art'>;


/**忘记武术  
 * 你的角色或NPC将忘记武术风格  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 角色忘记Eskrima  
 * { "u_forget_martial_art": "style_eskrima" }  
 * // 角色忘记存储在ma_id上下文值中的武术  
 * { "u_forget_martial_art": { "context_val": "ma_id" } }  
 */
export type ForgetMartialArt = TalkerVar<{
    /**要忘记的武术ID */
    forget_martial_art: (IDObj<MartialArtID>);
}, 'forget_martial_art'>;


/**添加变量  
 * 保存字符串作为个人变量, 稍后可以使用compare_string检查 (参见Player或NPC条件)   
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 * @example  
 * // 保存个人变量u_met_godco_jeremiah, 类型为general, 上下文为meeting, 值为yes  
 * { "u_add_var": "general_meeting_u_met_godco_jeremiah", "value": "yes" }  
 * // NPC (在这种情况下实际上是物品, 参见Beta Talkers) 保存个人变量function, 值为四个值之一: morale, focus, pain或sleepiness  
 * {  
 *   "npc_add_var": "mbt_f_function",  
 *   "possible_values": [ "morale", "focus", "pain", "sleepiness" ]  
 * }  
 */
export type AddVar = TalkerVar<{
    /**变量名称  
     * 存储值的变量名称  
     */
    add_var: string;
    /**变量值  
     * 存储在变量中的值; 与"possible_values"和"time"不兼容  
     */
    value?: string;
    /**可能的值  
     * 可以选择存储在变量中的值数组; 与"value"和"time"不兼容  
     */
    possible_values?: string[];
    /**时间  
     * 已弃用. 请使用time()数学语法.   
     * @default false  
     * 如果为true, 当前时间将保存在变量中; 与"value"和"possible_values"不兼容  
     */
    time?: boolean;
    /**类型  
     * 已弃用. 只需使用_add_var来给出变量名称.   
     * 描述变量的附加文本, 可以在u_lose_var或数学语法中使用, 如type_context_variable_name  
     */
    type?: string;
    /**上下文  
     * 已弃用. 只需使用_add_var来给出变量名称.   
     * 描述变量的附加文本, 可以在u_lose_var或数学语法中使用, 如type_context_variable_name  
     */
    context?: string;
}, 'add_var'>;


/**移除变量  
 * 你的角色或NPC将清除任何具有相同名称, 类型和上下文的存储变量  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 * @example  
 * // 角色移除变量time_of_last_succession  
 * { "u_lose_var": "time_of_last_succession" }  
 * // 角色移除变量bio_blade_electric_on  
 * { "u_lose_var": "bio_blade_electric_on" }  
 */
export type LoseVar = TalkerVar<{
    /**要移除的变量 */
    lose_var: string;
    /**类型  
     * 描述变量的附加文本; 不是强制性的, 但需要移除正确的变量  
     */
    type?: string;
    /**上下文  
     * 描述变量的附加文本; 不是强制性的, 但需要移除正确的变量  
     */
    context?: string;
}, 'lose_var'>;


/**复制变量  
 * 读取变量的当前值并将其复制到另一个变量, 无论其类型如何  
 * 适用于: 不需要talker  
 * @example  
 * // 将bodypart上下文值复制到IMPREGNATED_BODYPART全局变量  
 * { "copy_var": { "context_val": "bodypart" }, "target_var": { "global_val": "IMPREGNATED_BODYPART" } }  
 */
export type CopyVar = {
    /**源变量  
     * 源变量  
     */
    copy_var: (GenericObj);
    /**目标变量  
     * 目标变量  
     */
    target_var: (GenericObj);
}



/**设置字符串变量  
 * 将set_string_var中的字符串存储在target_var变量对象中  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 * @example  
 * // 将变量foo的值替换为bar  
 * { "set_string_var": "bar", "target_var": "foo" }  
 * // 将trait_id上下文值设置为perk_holdout_pocket; 稍后使用{ "u_add_trait": { "context_val": "trait_id" } }来给予此特性  
 * { "set_string_var": "perk_holdout_pocket", "target_var": { "context_val": "trait_id" } }  
 */
export type SetStringVar = {
    /**字符串值  
     * 将放入target_var的值  
     */
    set_string_var: (StrObj) | (StrObj)[];
    /**目标变量  
     * 接受值的变量; 通常是context_val  
     */
    target_var: (StrObj);
    /**解析标签  
     * 在存储前是否解析字符串中的自定义条目  
     */
    parse_tags?: boolean;
    /**本地化  
     * 字符串值是否应该被本地化  
     */
    i18n?: boolean;
    /**字符串输入  
     * 接受用户输入. 使用string_input时, 用户将输入一个字符串并将其分配给target_var.   
     * 如果输入被取消, set_string_var中的值将作为默认值分配.   
     */
    string_input?: {
        /**标题  
         * 输入弹出窗口的标题, 可以本地化  
         */
        title?: (StrObj);
        /**描述  
         * 输入弹出窗口的描述, 可以本地化  
         */
        description?: (StrObj);
        /**默认文本  
         * 输入弹出窗口中的默认文本, 可以本地化  
         */
        default_text?: (StrObj);
        /**宽度  
         * 输入框的字符长度  
         * @default 20  
         */
        width?: number;
        /**标识符  
         * 具有相同标识符的输入框共享输入历史  
         * @default ""  
         */
        identifier?: string;
        /**仅数字  
         * 输入是否纯数字  
         * @default false  
         */
        only_digits?: boolean;
    };
}



/**设置条件  
 * 使用条件创建上下文值, 可以使用get_condition传递给下一个主题或EoC.   
 * 用于需要有数十个EoC但不想每次都复制粘贴其条件的情况 (也更容易维护或编辑一个条件, 而不是两打)   
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 * @example  
 * // 将条件"季节不是冬季, 且是白天"保存到random_enc_condition变量中, 然后调用EoC second_test.   
 * // 第二个EoC使用random_enc_condition进行检查并打印消息  
 * {  
 *   "set_condition": "random_enc_condition",   
 *   "condition": { "and": [ { "not": { "is_season": "winter" } }, "is_day" ] }  
 * },  
 * { "run_eocs": "second_test" }  
 */
export type SetCondition = {
    /**条件ID  
     */
    set_condition: (CondObj);
    /**条件  
     * 条件本身  
     */
    condition: (BoolObj);
}



/**学习配方  
 * 你的角色或NPC将学习并记忆配方  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 你学习cattail_jelly的配方  
 * { "u_learn_recipe": "cattail_jelly" }  
 * // 你学习由recipe_id上下文值传递的配方  
 * { "u_learn_recipe": { "context_val": "recipe_id" } }  
 */
export type LearnRecipe = TalkerVar<{
    /**要学习的配方 */
    learn_recipe: (IDObj<RecipeID>);
}, 'learn_recipe'>;


/**忘记配方  
 * 你的角色或NPC将忘记配方  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 你忘记inventor_research_base_1配方  
 * { "u_forget_recipe": "inventor_research_base_1" }  
 * // 你忘记CC_XEDRA类别中的所有配方  
 * { "u_forget_recipe": "CC_XEDRA", "category": true }  
 * // 你忘记CC_XEDRA类别中的CC_XEDRA_MISC子类别中的所有配方  
 * { "u_forget_recipe": "CC_XEDRA", "subcategory": "CC_XEDRA_MISC" }  
 */
export type ForgetRecipe = TalkerVar<{
    /**要忘记的配方/配方类别 */
    forget_recipe: (IDObj<RecipeID>);
    /**是否为类别  
     * @default false, 除非指定了subcategory  
     * 上述字段是否应该被解释为类别而不是单个配方  
     */
    category?: boolean;
    /**子类别  
     * 指定类别的配方子类别将被忘记  
     */
    subcategory?: (StrObj);
}, 'forget_recipe'>;



/**分配活动  
 * NPC或角色将开始一项活动  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 你分配ACT_GAME活动, 持续45分钟  
 * { "u_assign_activity": "ACT_GAME", "duration": "45 minutes" }  
 */
export type AssignActivity = TalkerVar<{
    /**要开始的活动ID */
    assign_activity: (IDObj<ActivityTypeID>);
    /**持续时间  
     * 活动持续多长时间  
     */
    duration: (TimeObj);
}, 'assign_activity'>;

/**取消活动  
 * NPC或角色将停止当前活动  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 你取消当前活动  
 * { "u_cancel_activity" }  
 */
export type CancelActivity = TalkerStr<"cancel_activity">;


/**位置变量  
 * 搜索u_, npc_或target_params周围地图的特定坐标并将其保存在变量中  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 * @example  
 * // 将当前位置保存到i_am_here变量中  
 * { "u_location_variable": { "u_val": "i_am_here" } }  
 * // 在z级别0上搜索afs_crashed_escape_pod地图地形, 在此地图中搜索t_metal_floor地形, 并将其坐标保存到new_map变量中  
 * {  
 *   "u_location_variable": { "global_val": "new_map" },  
 *   "target_params": { "om_terrain": "afs_crashed_escape_pod", "z": 0 },  
 *   "terrain": "t_metal_floor",  
 *   "target_max_radius": 30,  
 *   "min_radius": 0,  
 *   "max_radius": 0  
 * }  
 */
export type LocationVariable = TalkerVar<{
    /**位置变量  
     * 保存位置的变量  
     */
    location_variable: (LocObj);
    /**最小半径  
     * @default 0  
     * 玩家或NPC周围搜索位置的半径  
     */
    min_radius?: (NumObj);
    /**最大半径  
     * @default 0  
     * 玩家或NPC周围搜索位置的半径  
     */
    max_radius?: (NumObj);
    /**仅户外  
     * @default false  
     * 如果为true, 只选择户外值  
     */
    outdoor_only?: boolean;
    /**仅可通行  
     * @default false  
     * 如果为true, 只选择可通行的值  
     */
    passable_only?: boolean;
    /**目标参数  
     * 如果使用, 搜索将不从u_或npc_位置执行, 而是从mission_target执行. 它使用assign_mission_target语法  
     */
    target_params?: (AssignMissionTarget);
    /**X调整  
     * 最后添加到x坐标的数量; "x_adjust": 2将保存坐标, 从目标右侧偏移2个图块  
     */
    x_adjust?: (NumObj);
    /**Y调整  
     * 最后添加到y坐标的数量  
     */
    y_adjust?: (NumObj);
    /**Z调整  
     * 最后添加到z坐标的数量  
     */
    z_adjust?: (NumObj);
    /**Z覆盖  
     * @default false  
     * 如果为true, 不是添加到z级别, 而是用绝对值覆盖它;   
     * "z_adjust": 3与"z_override": true将z的值变为3  
     */
    z_override?: boolean;
    /**地形  
     * 如果使用, 在target_min_radius和target_max_radius之间搜索具有相应ID的实体;   
     * 如果使用空字符串 (例如"monster": "") , 则从相同半径返回任何实体  
     */
    terrain?: (IDObj<TerrainID>);
    /**家具  
     * 如果使用, 在target_min_radius和target_max_radius之间搜索具有相应ID的实体;   
     * 如果使用空字符串 (例如"monster": "") , 则从相同半径返回任何实体  
     */
    furniture?: (IDObj<FurnitureID>);
    /**场地  
     * 如果使用, 在target_min_radius和target_max_radius之间搜索具有相应ID的实体;   
     * 如果使用空字符串 (例如"monster": "") , 则从相同半径返回任何实体  
     */
    field?: (IDObj<FieldTypeID>);
    /**陷阱  
     * 如果使用, 在target_min_radius和target_max_radius之间搜索具有相应ID的实体;   
     * 如果使用空字符串 (例如"monster": "") , 则从相同半径返回任何实体  
     */
    trap?: (IDObj<TrapID>);
    /**怪物  
     * 如果使用, 在target_min_radius和target_max_radius之间搜索具有相应ID的实体;   
     * 如果使用空字符串 (例如"monster": "") , 则从相同半径返回任何实体  
     */
    monster?: (IDObj<MonsterID>);
    /**区域  
     * 如果使用, 在target_min_radius和target_max_radius之间搜索具有相应ID的实体;   
     * 如果使用空字符串 (例如"monster": "") , 则从相同半径返回任何实体  
     */
    zone?: (StrObj);
    /**NPC  
     * 如果使用, 在target_min_radius和target_max_radius之间搜索具有相应ID的实体;   
     * 如果使用空字符串 (例如"monster": "") , 则从相同半径返回任何实体  
     */
    npc?: (IDObj<NpcInstanceID>);
    /**目标最小半径  
     * @default 0  
     * 如果使用了前一个字段, 则搜索的最小半径  
     */
    target_min_radius?: (NumObj);
    /**目标最大半径  
     * @default 0  
     * 如果使用了前一个字段, 则搜索的最大半径  
     */
    target_max_radius?: (NumObj);
    /**成功时运行的EOCs  
     * 如果找到位置, 将运行true_eocs中的所有EOC  
     */
    true_eocs?: (ParamsEoc);
    /**失败时运行的EOCs  
     * 如果未找到位置, 将运行false_eocs中的所有EOC  
     */
    false_eocs?: (ParamsEoc);
}, 'location_variable'>;



/**调整位置变量  
 * 允许调整由u_location_variable获得的位置值, 并共享相同的语法和规则  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 * @example  
 * // 将location_var值中的坐标向右移动一个图块  
 * { "location_variable_adjust": "location_var", "x_adjust": 1 }  
 * // 将portal_storm_center坐标随机移动到任何方向的1个地图图块, 除了Z  
 * {  
 *   "location_variable_adjust": { "global_val": "portal_storm_center" },  
 *   "overmap_tile": true,  
 *   "x_adjust": [ -1, 1 ],  
 *   "y_adjust": [ -1, 1 ]  
 * }  
 */
export type LocationVariableAdjust = {
    /**位置变量  
     * 保存位置的变量  
     */
    location_variable_adjust: (LocObj);
    /**X调整  
     * 最后添加到x坐标的数量; "x_adjust": 2将保存坐标, 从目标右侧偏移2个图块  
     */
    x_adjust?: (NumObj);
    /**Y调整  
     * 最后添加到y坐标的数量  
     */
    y_adjust?: (NumObj);
    /**Z调整  
     * 最后添加到z坐标的数量  
     */
    z_adjust?: (NumObj);
    /**Z覆盖  
     * @default false  
     * 如果为true, 不是添加到z级别, 而是用绝对值覆盖它;   
     * "z_adjust": 3与"z_override": true将z的值变为3  
     */
    z_override?: boolean;
    /**地图图块  
     * @default false  
     * 如果为true, 调整将以地图图块而不是地图图块进行  
     */
    overmap_tile?: boolean;
}


/**理发-发型  
 * 打开一个菜单, 允许玩家选择新的发型  
 * 适用于: Avatar  
 * @example  
 * // 打开发型菜单  
 * "barber_hair"  
 */
export type BarberHair = TalkerStr<"barber_hair">;


/**理发-胡须  
 * 打开一个菜单, 允许玩家选择新的胡须样式  
 * 适用于: Avatar  
 * @example  
 * // 打开胡须菜单  
 * "barber_beard"  
 */
export type BarberBeard = TalkerStr<"barber_beard">;


/**NPC首个话题  
 * 更改NPC在所有未来对话中的初始talk_topic  
 * 适用于: NPC  
 * @example  
 * // 用TALK_lighthouse_girl_safe覆盖初始灯塔女孩话题TALK_lighthouse_girl_start  
 * { "npc_first_topic": "TALK_lighthouse_girl_safe" }  
 */
export type NpcFirstTopic = {
    /**首个话题  
     * 将使用的话题  
     */
    npc_first_topic: (IDObj<TalkTopicID>);
};



/**传送  
 * 你或NPC被传送到target_var坐标  
 * 适用于: Avatar Character NPC Item Vehicle  
 * @example  
 * // 你传送到winch_teleport坐标  
 * { "u_teleport": { "u_val": "winch_teleport" } }  
 * // 你传送到grass_place并显示消息Yay!; 由于force布尔值为true, 你不能失败  
 * {  
 *   "u_teleport": { "global_val": "grass_place" },  
 *   "success_message": "Yay!",  
 *   "fail_message": "Something is very wrong!",  
 *   "force": true  
 * }  
 */
export type Teleport = TalkerVar<{
    /**传送位置  
     * 传送的位置; 应使用之前创建的target_var  
     */
    teleport: (LocObj);
    /**成功消息  
     * 如果传送成功, 将打印的消息  
     */
    success_message?: (StrObj);
    /**失败消息  
     * 如果传送失败, 将打印的消息, 例如如果坐标包含生物或不可通行的障碍物 (如墙)   
     */
    fail_message?: (StrObj);
    /**强制  
     * @default false  
     * 如果为true, 传送不能失败 - 任何站在目标坐标上的生物都会被残忍地传送杀死,   
     * 如果出现不可通行的障碍物, 则会选择最近的点  
     */
    force?: boolean;
    /**强制安全  
     * @default false  
     * 如果为true, 传送"不能"失败. 如果目标坐标有生物或障碍物,   
     * 将选择5个水平图块内最近的可通行点. 如果没有点, 生物保持原位  
     */
    force_safe?: boolean;
}, 'teleport'>;



/**添加湿度  
 * 你的角色或NPC将变湿, 就像他们在雨中一样  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 使你湿度增加10% (无论这意味着什么)   
 * { "u_add_wet": 10 }  
 */
export type AddWet = TalkerVar<{
    /**添加的湿度  
     * 将添加多少湿度 (以百分比计)   
     */
    add_wet: (NumObj);
}, 'add_wet'>;



/**发出文本声音  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 * @example  
 * // 在NPC周围15个图块范围内生成声音"Hi there!"  
 * { "npc_make_sound": "Hi there!", "volume": 15, "type": "speech" }  
 * // 在grass_transform周围60个图块范围内生成"a high-pitched squeal."声音  
 * {  
 *   "u_make_sound": "a high-pitched squeal.",  
 *   "target_var": { "global_val": "grass_transform" },  
 *   "volume": 60,  
 *   "type": "alert"  
 * }  
 */
export type MakeSound = TalkerVar<{
    /**声音描述 */
    make_sound: (StrObj);
    /**音量  
     * 声音有多大 (1单位 = 角色周围1个图块)   
     */
    volume: (NumObj);
    /**类型  
     * 声音的类型; 可以是background, weather, music, movement, speech, electronic_speech,   
     * activity, destructive_activity, alarm, combat, alert或order之一  
     */
    type: (StrObj);
    /**目标变量  
     * 如果设置, 声音的中心将位于此变量的坐标, 而不是你或NPC  
     */
    target_var?: (LocObj);
    /**片段  
     * @default false  
     * 如果为true, _make_sound将使用提供的ID的片段而不是消息  
     */
    snippet?: boolean;
    /**相同片段  
     * @default false  
     * 如果为true, 它将连接talker和片段, 并且如果由此talker使用, 将始终提供相同的片段;   
     * 需要片段设置ID  
     */
    same_snippet?: boolean;
}, 'make_sound'>;



/**修改健康  
 * 增加或减少你的健康度 (响应疾病免疫和再生)   
 * 适用于: Avatar Character NPC  
 * @example  
 * // 你的健康减少1, 但不小于-200  
 * { "u_mod_healthy": -1, "cap": -200 }  
 */
export type ModHealthy = TalkerVar<{
    /**健康修改量  
     * 要添加的健康量  
     */
    mod_healthy: (NumObj);
    /**上限  
     * 健康度不能超过的上限  
     */
    cap?: (NumObj);
}, 'mod_healthy'>;


/**添加士气  
 * 你的角色或NPC将获得士气加成  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 给予morale_afs_drugs思维+1心情加成  
 * { "u_add_morale": "morale_afs_drugs" }  
 * // 给予+20心情morale_feeling_good加成, 可以堆叠到+50, 持续4小时, 2小时后开始衰减  
 * {  
 *   "u_add_morale": "morale_feeling_good",  
 *   "bonus": 20,  
 *   "max_bonus": 50,  
 *   "duration": "240 minutes",  
 *   "decay_start": "120 minutes"  
 * }  
 */
export type AddMorale = TalkerVar<{
    /**要添加的士气类型  
     * 效果给予的morale_type  
     */
    add_morale: (StrObj);
    /**加成  
     * @default 1  
     * 效果给予的心情加成或惩罚; 可以堆叠到max_bonus上限, 但每个加成都比前一个低  
     *  (例如, 100的加成给予心情加成为100, 141, 172, 198, 221等)   
     */
    bonus?: (NumObj) | (NumObj)[];
    /**最大加成  
     * @default false  
     * 心情不会增加或减少超过的上限  
     */
    max_bonus?: (NumObj) | (NumObj)[];
    /**持续时间  
     * @default "1 hour"  
     * 士气效果持续多长时间  
     */
    duration?: (TimeObj);
    /**衰减开始  
     * @default "30 min"  
     * 士气效果何时开始衰减  
     */
    decay_start?: (TimeObj);
    /**是否封顶  
     * @default false  
     * 如果为true, 堆叠时加成不会减少 (例如, 100的加成给予心情加成为100, 200, 300等)   
     */
    capped?: boolean;
}, 'add_morale'>;



/**移除士气  
 * 你的角色或NPC将失去选定的morale_type  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 移除你的bad_mood士气  
 * { "u_lose_morale": "bad_mood" }  
 * // 移除由morale_id传递的士气类型  
 * { "u_lose_morale": { "context_val": "morale_id" } }  
 */
export type LoseMorale = TalkerVar<{
    /**要移除的士气类型 */
    lose_morale: (StrObj);
}, 'lose_morale'>;



/**消耗物品总和  
 * 消耗你物品栏中的所有物品, 将数量视为权重  
 * 效果不验证玩家是否实际拥有足够的物品来消耗, 使用_has_items_sum  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 消耗10个毯子. 效果允许消耗任何物品, 所以在这种情况下玩家可能有3个blanket, 2个blanket_fur和5个electric_blanket, 效果会消耗所有这些  
 * {  
 *   "u_consume_item_sum": [  
 *     { "item": "blanket", "amount": 10 },
 *     { "item": "blanket_fur", "amount": 10 },
 *     { "item": "electric_blanket", "amount": 10 }
 *   ]  
 * }  
 */
export type ConsumeItemSum = TalkerVar<{
    /**要消耗的物品列表 */
    consume_item_sum: {
        /**物品ID  
         * 应该移除的物品的ID  
         */
        item: IDObj<ItemID>;
        /**数量  
         * 应该移除的物品或充能的数量  
         */
        amount: (NumObj);
    }[];
}, 'consume_item_sum'>;



/**设置派系关系  
 * 只能在talk_topic中使用, 因为代码依赖于你与之交谈的NPC来获取其派系信息  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 添加"share public goods"规则  
 * { "u_set_fac_relation": "share public goods" }  
 * // 移除"kill on sight"规则  
 * { "u_set_fac_relation": "kill on sight", "set_value_to": false }  
 */
export type SetFacRelation = TalkerVar<{
    /**要设置的规则  
     * 要设置的规则. 参见派系文档以获取规则列表及其涵盖的内容  
     */
    set_fac_relation: (IDObj<keyof FactionRelationFlags>);
    /**设置值  
     * @default true  
     * 是设置还是取消设置此规则  
     */
    set_value_to?: boolean;
}, 'set_fac_relation'>;



/**添加派系信任  
 * 你的角色获得与说话NPC的派系的信任, 这会影响该派系的商人可以交易的物品  
 * 只能在talk_topic中使用, 因为代码依赖于你与之交谈的NPC来获取其派系信息  
 * 适用于: NPC  
 * @example  
 * // 添加5点派系信任  
 * { "u_add_faction_trust": 5 }  
 * // 添加[你的力量属性]数量的派系信任  
 * { "u_add_faction_trust": { "math": [ "u_val('strength')" ] } }  
 */
export type AddFactionTrust = TalkerVar<{
    /**要添加或移除的信任量 */
    add_faction_trust: (NumObj);
}, 'add_faction_trust'>;



/**死亡  
 * 让talker死亡或是删除物品  
 * Alpha或beta talker将立即死亡. 如果目标是物品, 它将被删除  
 * 适用于: Avatar Character NPC Monster Item  
 * @example  
 * // Alpha和beta都死亡  
 * { "effect": [ "u_die", "npc_die" ] }  
 * // beta talker死亡, 没有消息也没有尸体  
 * { "npc_die": { "remove_corpse": true, "supress_message": true } }  
 */
export type Die = TalkerStr<'die'>|TalkerVar<{
    die:{
        /**移除尸体  
         * @default false  
         * 如果为true, 尸体和其中的所有物品在死亡时不会生成  
         */
        remove_corpse?: boolean;
        /**抑制消息  
         * @default false  
         * 如果为true, 死亡会省略死亡消息  
         */
        supress_message?: boolean;
        /**从生物追踪器中移除  
         * @default false  
         * 如果为true, 且talker是怪物, 怪物不仅会在没有消息和尸体的情况下消失,   
         * 而且会绕过他们在死亡前可能触发的任何死亡效果  
         */
        remove_from_creature_tracker?: boolean;
    }
}, 'die'>;


/**防止死亡  
 * 在死亡事件中阻止将要发生的死亡  
 * 你或NPC将被防止死亡. 旨在用于具有NPC_DEATH或EVENT(character_dies)类型的EoC  
 *  (注意在这些事件中u将是垂死的npc)  
 * 适用于: Avatar Character NPC  
 * @example  
 * // NPC被防止死亡  
 * { "u_prevent_death" }  
 */
export type PreventDeath = TalkerStr<"prevent_death">;


/**攻击  
 * Alpha或beta talker被迫使用技术或特殊攻击  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 你使用自动攻击  
 * { "u_attack": "tec_none" }  
 * // 使用随机技术攻击  
 * {  
 *   "set_string_var": { "mutator": "valid_technique" },   
 *   "target_var": { "global_val": "random_attack" }  
 * },  
 * { "u_attack": { "global_val": "random_attack" } }  
 */
export type Attack = TalkerVar<{
    /**要使用的技术  
     * 将使用的技术; 可以使用"tec_none", 在这种情况下将使用默认的自动攻击  
     */
    attack: (IDObj<TechniqueID>) | boolean;
    /**允许特殊  
     * @default true  
     * 如果为true, 应该选择特殊攻击 (怪物可以使用的special_attack, 如monster_attack或spell)   
     */
    allow_special?: boolean;
    /**允许徒手  
     * @default true  
     * 如果为true, 可以考虑徒手技术  
     */
    allow_unarmed?: boolean;
    /**强制移动消耗  
     * @default -1  
     * 如果使用, 攻击将消耗这个数量的移动点 (100移动点 = 1秒) ;   
     * 负值使其使用攻击的默认移动消耗  
     */
    forced_movecost?: (NumObj);
}, 'attack'>;


/**爆炸  
 * 在talker位置或传递的坐标处创建爆炸  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 * @example  
 * // 使用u_query_omt选择一个图块, 然后在该位置引起爆炸  
 * {  
 *   "u_query_omt": { "context_val": "pos" },   
 *   "message": "Select point to detonate."  
 * },  
 * {  
 *   "if": { "math": [ "has_var(_pos)" ] },  
 *   "then": {   
 *     "u_explosion": { "power": 50000, "max_noise": 35, "distance_factor": 0.5 }, 
 *     "target_var": { "context_val": "pos" } 
 *   },  
 *   "else": { "u_message": "Canceled" }  
 * }  
 */
export type CreateExplosion = TalkerVar<{
    /**爆炸数据  
     * 复制"type": "ammo_effect"中的爆炸字段, 但允许使用变量; 定义发生的爆炸类型  
     */
    explosion: (Explosion);
    /**目标变量  
     * 如果使用, 爆炸将发生在变量指向的位置  
     */
    target_var?: (LocObj);
    /**EMP爆炸  
     * 如果使用, EMP爆炸将出现在爆炸中心 (仅在中心, 无论爆炸大小如何)   
     */
    emp_blast?: boolean;
    /**干扰爆炸  
     * 如果使用, 干扰爆炸将出现在爆炸中心 (仅在中心, 无论爆炸大小如何)   
     */
    scrambler_blast?: boolean;
}, 'explosion'>;



/**击退  
 * 将图块上的生物推向特定方向  
 * 适用于: Avatar Character NPC Monster  
 * @example  
 * // Beta talker被击退7个图块并眩晕20秒  
 * { "npc_knockback": 7, "stun": 20 }  
 */
export type Knockback = TalkerVar<{
    /**击退强度  
     * 推力有多强, 以图块为单位  
     */
    knockback: (NumObj);
    /**眩晕  
     * 眩晕效果应用于talker的时间  
     */
    stun?: (NumObj);
    /**伤害倍率  
     * 如果目标在击退过程中撞到障碍物, 它会受到伤害并额外眩晕, 等于剩余击退乘以此dam_mult;   
     * 如果击退是10 (10个图块) , 生物在4个图块处撞到障碍物, 剩余的6个图块将转换为6点伤害, 乘以dam_mult (并增加6秒眩晕)   
     */
    dam_mult?: (NumObj);
    /**目标变量  
     * 如果使用, 不是alpha或beta talker位置, 而是此位置的生物将被击飞  
     */
    target_var?: (LocObj);
    /**方向变量  
     * 如果使用, 推力将被计算为来自此方向 (如果生物在中心, 方向_var是从西方, 生物将被击退到东方) .   
     * 如果不使用, 游戏将随机选择一个方向  
     */
    direction_var?: (LocObj);
}, 'knockback'>;


/**施法  
 * 你或NPC施放法术. 法术使用假法术数据 (忽略energy_cost, energy_source, cast_time, components, difficulty和spell_class字段) , 并使用额外字段  
 * 适用于: Avatar Character NPC Monster  
 * @example  
 * // 你施放spell_1法术  
 * { "u_cast_spell": { "id": "spell_1" } }  
 * // 你施放spell_boom法术, 可以瞄准, 并在日志中创建消息BOOM!  
 * {  
 *   "u_cast_spell": { "id": "spell_boom", "message": "BOOM!" },  
 *   "targeted": true  
 * }  
 */
export type CastSpell = TalkerVar<{
    /**法术信息  
     * 关于应该施放什么法术以及如何施放的信息  
     */
    cast_spell: FakeSpell;
    /**是否瞄准  
     * @default false  
     * 如果为true, 允许你瞄准施放的法术, 否则在"loc"设置的位置施放  
     * 否则将其施放于随机位置, 就像RANDOM_TARGET使用了法术标志一样  
     * RANDOM_TARGET法术需要此项目为true才能正常索敌  
     */
    targeted?: boolean;
    /**位置  
     * 设置法术的目标位置. 如果不使用, 则目标为施法者的位置  
     */
    loc?: (LocObj);
    /**成功时运行的EOCs  
     * 如果法术成功施放, 将运行true_eocs中的所有EOC  
     */
    true_eocs?: (ParamsEoc);
    /**失败时运行的EOCs  
     * 如果法术施放失败, 将运行false_eocs中的所有EOC  
     */
    false_eocs?: (ParamsEoc);
}, 'cast_spell'>;



/**提升法术类别等级  
 * 修改给定类别的所有已知法术的等级  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 角色将MAGUS类别的所有法术等级提高5级, 并将任何类别的单个法术等级提高30级  
 * {  
 *   "u_level_spell_class": "MAGUS",   
 *   "levels": 5   
 * },  
 * {   
 *   "u_level_spell_class": "all",   
 *   "levels": 30,   
 *   "random": true   
 * }  
 */
export type LevelSpellClass = TalkerVar<{
    /**法术类别  
     * 将受影响的spell_class, 可以指定"all"而不是类别来影响角色知道的所有法术  
     */
    level_spell_class: (IDObj<MutationID|"all">);
    /**等级  
     * @default 1  
     * 将添加或移除的等级  
     */
    levels?: number;
    /**随机  
     * @default false  
     * 如果为true, 只有指定类别的单个法术将受到影响  
     */
    random?: boolean;
}, 'level_spell_class'>;




/**查询地图图块  
 * 打开一个地图, 允许你选择一个地图图块来存储在变量中  
 * 适用于: Avatar  
 * @example  
 * // 使用num_input选择distance_limit, 然后打开地图, 如果选择了允许的OM, 打印带有pos的消息  
 * {  
 *   "u_query_omt": { "context_val": "pos" },  
 *   "message": "Select point.",  
 *   "distance_limit": { "math": [ "num_input('distance', 10)" ] }  
 * },  
 * {  
 *   "if": { "math": [ "has_var(_pos)" ] },  
 *   "then": { "u_message": "<context_val:pos>" },  
 *   "else": { "u_message": "Canceled" }  
 * }  
 */
export type QueryOmt = TalkerVar<{
    /**位置变量  
     * 存储坐标的变量; 如果查询被取消或玩家选择的图块超过distance_limit, 则不存储变量,   
     * 因此应使用{ "math": [ "has_var(_pos)" ] }这样的条件来确保正确选择了变量  
     */
    query_omt: (LocObj);
    /**消息  
     * 在地图UI左上角打印的消息  
     */
    message: (StrObj);
    /**目标变量  
     * 如果设置, 中心不是avatar所在的位置, 而是此坐标  
     */
    target_var?: (LocObj);
    /**距离限制  
     * @default 无限  
     * 玩家能够选择的半径, 否则不存储变量. 边界会为用户高亮显示  
     */
    distance_limit?: (NumObj);
    /**扩散  
     * @default 1  
     * 由于地图只允许OMT级别的精度, 玩家的选择然后转换为绝对坐标, 并调整为指向地图的中心;   
     * 扩散响应额外的精度损失, "图块将从OMT中心选择多远";   
     * 默认值将导致你大致选择OM的中心  
     */
    spread?: (NumObj);
}, 'query_omt'>;



/**选择地块的模式 列表 */
const QueryTileTypeList = [
    "anywhere"      , //与"look around" UI相同
    "line_of_sight" , //此刻可见的唯一瓷砖 (范围是强制性的) 
    "around"        , //与点燃火源相同, 你只能选择紧邻的9个瓷砖
] as const;
/**选择地块的模式 列表 */
type QueryTileType = typeof QueryTileTypeList[number];

/**查询图块  
 * 要求玩家选择一个图块. 如果选择了图块, 带有坐标的变量将写入target_var  
 * 适用于: Avatar  
 * @example  
 * // 显示选定图块的坐标  
 * {   
 *   "u_query_tile": "line_of_sight",   
 *   "target_var": { "context_val": "pos" },   
 *   "message": "Select point",   
 *   "range": 10   
 * },  
 * {  
 *   "if": { "math": [ "has_var(_pos)" ] },  
 *   "then": { "u_message": "<context_val:pos>" },  
 *   "else": { "u_message": "Canceled" }  
 * }  
 */
export type QueryTile = TalkerVar<{
    /**查询类型  
     * 图块查询的类型; 可能的值是:   
     * - anywhere 与"look around" UI相同  
     * - line_of_sight 只有此刻可见的图块 (range是强制的)   
     */
    query_tile: QueryTileType;
    /**目标变量  
     * 存储坐标的变量; 如果查询被取消, 则不存储变量,   
     * 因此应使用{ "math": [ "has_var(_pos)" ] }这样的条件来确保正确选择了变量  
     */
    target_var: (LocObj);
    /**范围  
     * 定义line_of_sight的可选范围 (line_of_sight必需, 否则不需要)   
     */
    range?: (NumObj);
    /**Z级别  
     * 如果选择了anywhere, 定义你是否可以选择其他z级别的图块  
     */
    z_level?: boolean;
    /**消息  
     * 选择时显示的文本  
     */
    message?: (StrObj);
    /**中心变量  
     * 如果使用, 查询将围绕这些坐标居中, 而不是从talker当前位置. 仅适用于anywhere类型  
     */
    center_var?: (LocObj);
}, 'query_tile'>;


/**选择相邻高亮图块  
 * 允许选择玩家附近的9个图块  
 * 适用于: Avatar  
 * @example  
 * // 允许选择u周围的一个图块  
 * {  
 *   "u_choose_adjacent_highlight": { "context_val": "tile" },  
 *   "message": "Select a tile"  
 * }  
 * // 允许选择u周围带有DIGGABLE标志的一个图块  
 * {  
 *   "u_choose_adjacent_highlight": { "context_val": "druid_temporary_spring_location" },  
 *   "condition": { "map_terrain_with_flag": "DIGGABLE", "loc": { "context_val": "loc" } },  
 *   "message": "Select natural earth",  
 *   "failure_message": "No natural earth nearby"  
 * }  
 */
export type ChooseAdjacentHighlight = TalkerVar<{
    /**位置变量  
     * 存储坐标的变量; 如果查询被取消, 玩家选择不允许的图块或取消输入, 则不存储变量,   
     * 因此应使用{ "math": [ "has_var(_pos)" ] }这样的条件来确保正确选择了变量  
     */
    choose_adjacent_highlight: (LocObj);
    /**目标变量  
     * 如果使用, 3x3区域将不围绕talker居中, 而是围绕此点. 键绑定和选择将照常工作, 你可以使用数字键盘选择  
     */
    target_var?: (LocObj);
    /**条件  
     * 可用于从列表中过滤特定图块. 如果不使用, 则允许所有图块.   
     * 图块的坐标存储在loc上下文变量中, 并在向玩家显示之前逐一检查  
     */
    condition?: (BoolObj);
    /**允许垂直  
     * 如果为true, 允许选择上方或下方1个z级别的图块  
     * @default false  
     */
    allow_vertical?: boolean;
    /**允许自动选择  
     * 如果为true, 且只有一个匹配结果, 且玩家启用了AUTOSELECT_SINGLE_VALID_TARGET,   
     * 游戏将自动选择有效对象, 而不是询问玩家应该选择哪一个  
     * @default false  
     */
    allow_autoselect?: boolean;
    /**消息  
     * 选择时显示的文本  
     */
    message?: (StrObj);
    /**失败消息  
     * 如果allow_autoselect为true, 且条件没有返回允许的图块, 将打印此消息  
     */
    failure_message?: (StrObj);
    /**失败时运行的EOCs  
     * 如果无法选择图块, 将运行此字段中的所有EOC, 与失败消息相同  
     */
    false_eocs?: (ParamsEoc);
}, 'choose_adjacent_highlight'>;




/**镜像坐标  
 * 选择两个坐标, 并在相反方向创建第三个  
 * 适用于: Avatar Character NPC Monster Furniture Item  
 * @example  
 * // 你选择第一个和中心位置并存储它, 然后镜像它们以创建第二个坐标  
 * {  
 *   "u_query_tile": "anywhere",  
 *   "target_var": { "context_val": "first" }  
 * },  
 * {  
 *   "u_query_tile": "anywhere",  
 *   "target_var": { "context_val": "center" }  
 * },  
 * {  
 *   "mirror_coordinates": { "context_val": "second" },  
 *   "center_var": { "context_val": "center" },  
 *   "relative_var": { "context_val": "first" }  
 * }  
 */
export type MirrorCoordinates = TalkerVar<{
    /**镜像坐标  
     * 存储镜像坐标的变量  
     */
    mirror_coordinates: (LocObj);
    /**中心变量  
     * 将作为relative_var和mirror_coordinates之间中心的坐标变量  
     */
    center_var: (LocObj);
    /**相对变量  
     * 用于生成mirror_coordinates的变量  
     */
    relative_var: (LocObj);
}, 'mirror_coordinates'>;


/**消息  
 * 在日志中显示文本消息. u_message和npc_message仅在你或NPC是avatar时显示消息. message总是显示消息.   
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 * @example  
 * // 在日志中发送红色的"Bad json! Bad!"消息  
 * { "u_message": "Bad json! Bad!", "type": "bad" }  
 * // 从local_files_simple打印一个片段, 并弹出它. 片段总是相同的  
 * { "u_message": "local_files_simple", "snippet": true, "same_snippet": true, "popup": true, "store_in_lore": true }  
 * // 在屏幕顶部打印一个居中对齐的非侵入性文本弹出窗口  
 * { "u_message": "uninvasive text", "popup": true, "popup_flag": "PF_ON_TOP" }  
 * // 打印带有上下文变量的文本  
 * { "u_message": "Test event with trait_id FIRE! <context_val:trait_id>", "type": "good" }  
 */
export type Message = TalkerVar<{
    /**消息内容  
     * 将打印的消息; 如果snippet为true, 则为将打印的片段的ID  
     */
    message: (StrObj);
    /**消息类型  
     * @default "neutral"  
     * 消息在日志中的显示方式 (通常表示颜色) ;   
     * 可以是good (绿色) , neutral (白色) , bad (红色) , mixed (紫色) ,   
     * warning (黄色) , info (蓝色) , debug (仅在调试模式下显示) ,   
     * headshot (紫色) , critical (黄色) , grazing (蓝色) 中的任何一种  
     */
    type?: (IDObj<MessageRatType>);
    /**是否有声音  
     * @default false  
     * 如果为true, 仅在玩家不聋时显示消息  
     */
    sound?: boolean;
    /**仅户外  
     * @default false  
     * 如果为true, 且sound为true, 如果你在地下, 消息会更难听到  
     */
    outdoor_only?: boolean;
    /**片段  
     * @default false  
     * 如果为true, 效果会显示来自u_message的随机片段  
     */
    snippet?: boolean;
    /**存储在知识中  
     * @default false  
     * 如果为true, 且message是片段, 片段将存储在知识标签中  
     */
    store_in_lore?: boolean;
    /**相同片段  
     * @default false  
     * 如果为true, 且snippet为true, 它将连接talker和片段, 并且如果由此talker使用, 将始终提供相同的片段;   
     * 需要片段设置ID  
     */
    same_snippet?: boolean;
    /**弹出  
     * @default false  
     * 如果为true, 消息将生成带有u_message的弹出窗口  
     */
    popup?: boolean;
    /**弹出标志  
     * @default "PF_NONE"  
     * 如果指定, 弹出窗口将由指定的标志修改, 允许的值见下文  
     */
    popup_flag?: (StrObj);
    /**弹出中断查询  
     * @default false  
     * 如果为true, 且popup为true, 弹出窗口将中断任何活动以发送消息  
     */
    popup_w_interrupt_query?: boolean;
    /**中断类型  
     * @default "neutral"  
     * 用于中断的distraction_type, 用于分心管理器; 完整列表存在于activity_type.cpp中  
     */
    interrupt_type?: (StrObj);
}, 'message'>;


