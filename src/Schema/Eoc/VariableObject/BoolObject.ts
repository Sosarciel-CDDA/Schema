import { MissionDefinitionID } from "Schema/MissionDefinition";
import { EocID, TalkerStr, TalkerVar } from "../Eoc";
import { BoolObj } from "./BoolObjectIndex";
import { CompareOpera, CondObj, IDObj, LocObj, NumObj } from "./VariableObjectIndex";
import { FieldTypeID } from "Schema/FieldType";
import { WeaponCategoryID } from "Schema/WeaponCategory";
import { FlagID } from "Schema/Flag";
import { MutationID } from "Schema/Mutation";
import { ItemID } from "Schema/Item";
import { StrObj } from "./StringObjectIndex";
import { EffectID } from "Schema/Effect";
import { TerrainID } from "Schema/Terrain";
import { AmmunitionTypeID } from "Schema/AmmiunitionType";
import { SkillID } from "Schema/Skill";
import { OvermapTerrainID } from "Schema/OvermapTerrain";
import { MonBP } from "Schema/Monster";
import { MartialArtID } from "Schema/MartialArt";
import { SpeciesID } from "Schema/Species";
import { RecipeID } from "Schema/Recipe";
import { ProficiencyID } from "Schema/Proficiency";
import { BodyPartID } from "Schema/BodyPart";
import { SeasonLc } from "Schema/GenericDefine";
import { ItemCategoryID } from "Schema/ItemCategory";
import { BionicID } from "Schema/Bionic";
import { FurnitureID } from "Schema/Furniture";


//#region 不在文档内的

/**math比较表达式 */
export type MathCompareExp = {
    math:[string,CompareOpera,string]|[string]
};

/**获取条件 */
export type GetCond = {
    /**获取条件 */
    get_condition: (CondObj);
}

/**1/n的概率返回true */
export type OneInChance = {
    /**1/n的概率返回true */
    one_in_chance: (NumObj);
};

/**某个mod是否加载 */
export type ModIsLoad = {
    /**目标mod的ID */
    mod_is_loaded: string;
}

/**有某个任务 */
export type HasMission = TalkerVar<{
    /**有某个任务 */
    has_mission: IDObj<MissionDefinitionID>;
},"has_mission">;


/**生存需求 */
export type HasSurvivalNeed = TalkerVar<{
    need: "thirst"|"hunger"|"fatigue";
    amount?: number;
    level?: "TIRED";
},"need">

/**季节判断 */
export type IsSeason = {
    /**季节判断 */
    is_season: (SeasonLc);
}

//#endregion

/**And条件  
 * 检查多个条件, 如果它们都为true, 则返回true, 否则返回false  
 * @example  
 * // 检查天气是否是闪电, 并且你是否有麻醉效果  
 * { "and": [ { "is_weather": "lightning" }, { "u_has_effect": "narcosis" } ] }  
 */
export type BoolAnd = {
    /**And条件  
     * 所有条件都必须为true才返回true  
     */
    and: BoolObj[];
}



/**Or条件  
 * 检查多个条件, 如果至少有一个为true, 则返回true, 否则返回false  
 * @example  
 * // 检查天气是否是传送门风暴, 远距离传送门风暴或近距离传送门风暴  
 * { "or": [ { "is_weather": "portal_storm" }, { "is_weather": "distant_portal_storm" }, { "is_weather": "close_portal_storm" } ] }  
 */
export type BoolOr = {
    /**Or条件  
     * 至少一个条件为true就返回true  
     */
    or: BoolObj[];
}


/**Not条件  
 * 检查一个条件并交换其结果  
 * @example  
 * // 检查你是否不靠近难民中心 (至少4个overmap图块远)   
 * { "not": { "u_near_om_location": "evac_center_18", "range": 4 } }  
 */
export type BoolNot = {
    /**Not条件  
     * 如果条件为true则返回false, 如果条件为false则返回true  
     */
    not: BoolObj;
}

/**有Alpha  
 * 如果alpha talker存在则返回true  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 */
export type HasAlpha = TalkerStr<"has_alpha">;

/**有Beta  
 * 如果beta talker存在则返回true  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 */
export type HasBeta = TalkerStr<"has_beta">;

/**男性  
 * 如果alpha或beta talker是男性则返回true  
 * 适用于: Avatar Character NPC  
 */
export type Male = TalkerStr<"male">;

/**女性  
 * 如果alpha或beta talker是女性则返回true  
 * 适用于: Avatar Character NPC  
 */
export type Female = TalkerStr<"female">;

/**是Avatar  
 * 如果alpha或beta talker是avatar则返回true  
 * avatar是你, 控制特定NPC的玩家 (是的, 你的角色仍然是NPC, 你只是可以控制它, 就像你可以使用派系继承控制另一个NPC一样)   
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 */
export type IsAvatar = TalkerStr<"is_avatar">;

/**是NPC  
 * 如果alpha或beta talker是NPC则返回true  
 * npc是除Avatar以外的任何NPC  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 */
export type IsNpc = TalkerStr<"is_npc">;

/**是Character  
 * 如果alpha或beta talker是character则返回true  
 * character是NPC或Avatar  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 */
export type IsCharacter = TalkerStr<"is_character">;

/**是Monster  
 * 如果alpha或beta talker是monster则返回true  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 */
export type IsMonster = TalkerStr<"is_monster">;

/**是Item  
 * 如果alpha或beta talker是item则返回true  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 */
export type IsItem = TalkerStr<"is_item">;

/**是Furniture  
 * 如果alpha或beta talker是furniture则返回true  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 */
export type IsFurniture = TalkerStr<"is_furniture">;

/**是Vehicle  
 * 如果alpha或beta talker是vehicle则返回true  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 */
export type IsVehicle = TalkerStr<"is_vehicle">;


/**在Overmap位置  
 * 如果alpha talker站在特定的overmap图块上则返回true  
 * FACTION_CAMP_ANY可以用来检查alpha或beta talker是否站在派系营地图块上  
 * FACTION_CAMP_START可以用来检查alpha或beta talker是否站在可以转变为派系营地的图块上  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 * @example  
 * // 检查alpha talker是否在野外  
 * { "u_at_om_location": "field" }  
 * // 检查alpha talker是否在派系营地  
 * { "u_at_om_location": "FACTION_CAMP_ANY" }  
 * // 检查alpha talker是否在可以转变为派系营地的位置  
 * { "npc_at_om_location": "FACTION_CAMP_START" }  
 */
export type AtOmLocation = TalkerVar<{
    /**在Overmap位置  
     * 要检查的overmap位置ID  
     */
    at_om_location: (IDObj<OvermapTerrainID>);
}, 'at_om_location'>;


/**有特性  
 * 检查alpha或beta talker是否有特定的特性/突变  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 检查alpha talker是否有EAGLEEYED特性  
 * { "u_has_trait": "EAGLEEYED" }  
 */
export type HasTrait = TalkerVar<{
    /**有特性  
     * 要检查的特性/突变ID  
     */
    has_trait: (IDObj<MutationID>);
}, 'has_trait'>;

/**有任意特性  
 * 检查alpha或beta talker是否有列表中的任何特性/突变  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 使用_has_any_trait检查单个特性也是可能的  
 * { "u_has_any_trait": [ "EAGLEEYED" ] }  
 * // 检查是否有任何动物耳朵特性  
 * { "u_has_any_trait": [ "CANINE_EARS", "LUPINE_EARS", "FELINE_EARS", "URSINE_EARS", "ELFA_EARS" ] }  
 */
export type HasAnyTrait = TalkerVar<{
    /**有任意特性  
     * 要检查的特性/突变ID列表  
     */
    has_any_trait: (IDObj<MutationID>)[];
}, 'has_any_trait'>;



/**有可见特性  
 * 如果alpha或beta talker有任何可见性的特性/突变 (在突变可见性字段中定义) 则返回true  
 * 可能是为了检查alpha或beta talker是否能够隐藏其突变而设计的, 但很难确定  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 检查alpha talker是否有FEATHERS突变  
 * { "u_has_visible_trait": "FEATHERS" }  
 */
export type HasVisibleTrait = TalkerVar<{
    /**有可见特性  
     * 要检查的可见特性/突变ID  
     */
    has_visible_trait: (IDObj<MutationID>);
}, 'has_visible_trait'>;

/**特性可净化  
 * 如果检查的特性对alpha或beta talker来说是可净化的则返回true  
 * 不可净化性可以在特性定义中全局设置, 或者通过u/npc_set_trait_purifiability为每个角色设置  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 检查FEATHERS特性对角色来说是否可净化 (根据特性定义返回true, 除非另一个效果为目标设置了特性不可净化)   
 * { "u_is_trait_purifiable": "FEATHERS" }  
 */
export type IsTraitPurifiable = TalkerVar<{
    /**特性可净化  
     * 要检查的特性ID  
     */
    is_trait_purifiable: (IDObj<MutationID>);
}, 'is_trait_purifiable'>;


/**有武术  
 * 如果alpha或beta talker有某种武术则返回true  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 检查是否有合气道武术  
 * { "u_has_martial_art": "style_aikido" }  
 */
export type HasMartialArt = TalkerVar<{
    /**有武术  
     * 要检查的武术ID  
     */
    has_martial_art: (IDObj<MartialArtID>);
}, 'has_martial_art'>;

/**使用武术  
 * 如果alpha或beta talker正在使用武术则返回true  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 检查是否正在使用合气道武术  
 * { "u_using_martial_art": "style_aikido" }  
 */
export type UsingMartialArt = TalkerVar<{
    /**使用武术  
     * 要检查的武术ID  
     */
    using_martial_art: (IDObj<MartialArtID>);
}, 'using_martial_art'>;



/**有标志  
 * 如果alpha或beta talker有特定标志则返回true  
 * 特殊标志MUTATION_THRESHOLD可用于检查alpha talker是否有任何突变阈值  
 * 对于怪物, 可以检查json标志 (通过效果应用) 和怪物标志  
 * 适用于: Avatar Character NPC Monster Item  
 * @example  
 * // Alpha talker有GRAB标志, beta talker有GRAB_FILTER标志; 怪物使用它来执行抓取  
 * // 游戏检查怪物 (alpha talker, u_) 是否有GRAB标志 (即能够抓取) , 并检查目标是否能够被抓取, 使用GRAB_FILTER标志  
 * { "npc_has_flag": "GRAB_FILTER" }, { "u_has_flag": "GRAB" }  
 */
export type HasFlag = TalkerVar<{
    /**有标志  
     * 要检查的标志ID  
     */
    has_flag: (IDObj<FlagID>);
}, 'has_flag'>;

/**有部件标志  
 * 如果alpha或beta talker是一个带有特定标志部件的车辆则返回true  
 * 如果存在enabled并且为true, 则部件需要启用  
 * 适用于: Vehicle  
 * @example  
 * // Alpha talker是一个带有流体罐的车辆  
 * { "u_has_part_flag": "FLUIDTANK" }  
 * // Beta talker是一个带有已激活立体声系统的车辆  
 * { "npc_has_part_flag": "STEREO", "enabled" : true }  
 */
export type HasPartFlag = TalkerVar<{
    /**有部件标志  
     * 要检查的部件标志ID  
     */
    has_part_flag: (IDObj<FlagID>);
    /**已启用  
     * 如果为true, 部件需要启用  
     */
    enabled?: boolean;
}, 'has_part_flag'>;

/**有物种  
 * 如果alpha或beta talker有定义的物种则返回true  
 * 适用于: Monster  
 * @example  
 * // alpha talker是SLIME  
 * { "u_has_species": "SLIME" }  
 */
export type HasSpecies = TalkerVar<{
    /**有物种  
     * 要检查的物种ID  
     */
    has_species: (IDObj<SpeciesID>);
}, 'has_species'>;


/**检查talker的身体类型  
 * 如果alpha/beta talker怪物有定义的身体类型则返回true  
 * 对于玩家/NPC, 如果身体类型是human则返回true  
 * 适用于: Avatar Character NPC  
 * @example  
 * // alpha talker有migo身体类型, beta有human身体类型  
 * { "u_bodytype": "migo" }, { "npc_bodytype": "human" }  
 */
export type HasBodytype = TalkerVar<{
    /**身体类型  
     * 要检查的身体类型ID  
     */
    bodytype: (IDObj<MonBP>);
}, 'bodytype'>;


/**期望变量  
 * 如果每个提供的变量都存在则返回true  
 * 如果检查失败则返回false并创建调试错误消息  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 * @example  
 * // 检查这些变量是否存在  
 * { "expects_vars": [ "u_met_me", "u_met_you", "u_met_yourself" ] }  
 */
export type ExpectsVars = {
    /**期望变量  
     * 要检查的变量名称数组  
     */
    expects_vars: (StrObj)[];
}


/**比较字符串  
 * 比较所有字符串, 如果至少有两个匹配则返回true  
 * 可以用 "yes" 来判断是否存在  
 * @example  
 * // 检查victim_type是否为mon_zombie_phase_shrike  
 * { "compare_string": [ "mon_zombie_phase_shrike", { "context_val": "victim_type" } ] }  
 * // 检查victim_type是否有zombie派系  
 * { "compare_string": [ "zombie", { "mutator": "mon_faction", "mtype_id": { "context_val": "victim_type" } } ] }  
 * // 检查victim_type是否在列表中的任何一个  
 * "compare_string": [  
 *   { "context_val": "victim_type" },  
 *   "mon_hound_tindalos",  
 *   "mon_darkman",  
 *   "mon_zombie_phase_shrike",  
 *   "mon_swarm_structure",  
 *   "mon_better_half",  
 *   "mon_hallucinator",  
 *   "mon_archunk_strong",  
 *   "mon_void_spider",  
 *   "mon_XEDRA_officer",  
 *   "mon_eigenspectre_3",  
 *   "mon_eigenspectre_4",  
 *   "mon_living_vector"  
 * ]  
 * // 检查map_cache是否包含值has, lack或read  
 * { "compare_string": [ { "npc_val": "map_cache" }, "has", "lack", "read" ] }  
 */
export type CompareString = {
    /**比较字符串  
     * 要比较的字符串数组, 如果至少有两个匹配则返回true  
     */
    compare_string: (StrObj)[];
}

/**比较字符串全匹配  
 * 比较所有字符串, 如果所有字符串都匹配则返回true  
 * 对于两个字符串, 检查与compare_string相同  
 * @example  
 * // 检查两个变量是否都为yes  
 * "compare_string_match_all": [ "yes", { "context_val": "some_context_should_be_yes" }, { "context_val": "some_another_context_also_should_be_yes" } ]  
 */
export type CompareStringMatchAll = {
    /**比较字符串全匹配  
     * 要比较的字符串数组, 如果所有字符串都匹配则返回true  
     */
    compare_string_match_all: (StrObj)[];
}

/**职业  
 * 如果玩家角色具有给定的职业ID或其"爱好"子类型则返回true  
 * 适用于: Avatar Character  
 * @example  
 * // 如果角色在角色创建时选择了Heist Driver职业则为true  
 * { "u_profession": "heist_driver" }  
 * // 如果角色在角色创建时选择了Fishing背景则为true  
 * { "u_profession": "fishing" }  
 */
export type HasProfession = TalkerVar<{
    /**职业  
     * 要检查的职业ID  
     */
    //profession: (IDObj<ProfessionID>);
    profession: (StrObj);
}, 'profession'>;



/**有力量  
 * 如果alpha或beta talker的力量至少为给定值或更高则返回true  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 如果alpha talker的力量为7或更高则为true  
 * { "u_has_strength": 7 }  
 */
export type HasStrength = TalkerVar<{
    /**有力量  
     * 要检查的力量值  
     */
    has_strength: (NumObj);
}, 'has_strength'>;

/**有敏捷  
 * 如果alpha或beta talker的敏捷至少为给定值或更高则返回true  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 如果alpha talker的敏捷为7或更高则为true  
 * { "u_has_dexterity": 7 }  
 */
export type HasDexterity = TalkerVar<{
    /**有敏捷  
     * 要检查的敏捷值  
     */
    has_dexterity: (NumObj);
}, 'has_dexterity'>;

/**有智力  
 * 如果alpha或beta talker的智力至少为给定值或更高则返回true  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 如果alpha talker的智力为7或更高则为true  
 * { "u_has_intelligence": 7 }  
 */
export type HasIntelligence = TalkerVar<{
    /**有智力  
     * 要检查的智力值  
     */
    has_intelligence: (NumObj);
}, 'has_intelligence'>;

/**有感知  
 * 如果alpha或beta talker的感知至少为给定值或更高则返回true  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 如果alpha talker的感知为7或更高则为true  
 * { "u_has_perception": 7 }  
 */
export type HasPerception = TalkerVar<{
    /**有感知  
     * 要检查的感知值  
     */
    has_perception: (NumObj);
}, 'has_perception'>;


/**有部位温度  
 * 如果alpha或beta talker的身体部位温度高于给定值则返回true  
 * 额外参数bodypart指定身体部位  
 * 温度以任意单位书写, 在weather.h中描述: 体温以0u到10000u的刻度测量, 其中10u = 0.02C, 5000u是37C  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 检查你的躯干是否为37摄氏度  
 * { "u_has_part_temp": 5000, "bodypart": "torso" }  
 */
export type HasPartTemp = TalkerVar<{
    /**有部位温度  
     * 要检查的温度值  
     */
    has_part_temp: (NumObj);
    /**身体部位  
     * 要检查的身体部位  
     */
    bodypart: (IDObj<BodyPartID>);
}, 'has_part_temp'>;

/**有物品  
 * 如果物品存在于你或NPC的库存中则返回true  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 检查你是否有吉他  
 * { "u_has_item": "guitar" }  
 */
export type HasItem = TalkerVar<{
    /**有物品  
     * 要检查的物品ID  
     */
    has_item: (IDObj<ItemID>);
}, 'has_item'>;

/**有多个物品  
 * 如果指定数量的物品存在于你或NPC的库存中则返回true  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 检查你是否有6根绳子  
 * { "u_has_items": { "item": "rope_6", "count": 6 } }  
 */
export type HasItems = TalkerVar<{
    /**有多个物品  
     * 要检查的物品信息  
     */
    has_items: {
        /**要检查的物品ID */
        item: (IDObj<ItemID>);
        /**需要的物品数量 */
        count?: (NumObj);
        /**物品的充能量 */
        charges?: (NumObj);
    };
}, 'has_items'>;

/**有物品类别  
 * 如果alpha或beta talker有特定类别的物品则返回true  
 * count可用于检查大于1的物品数量  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 检查你的库存中是否有手册  
 * { "u_has_item_category": "manuals" }  
 * // 检查你的库存中是否有3本手册  
 * { "u_has_item_category": "manuals", "count": 3 }  
 */
export type HasItemCategory = TalkerVar<{
    /**有物品类别  
     * 要检查的物品类别  
     */
    has_item_category: (IDObj<ItemCategoryID>);
    /**数量  
     * 需要的物品数量  
     */
    count?: (NumObj);
}, 'has_item_category'>;


/**有物品总和  
 * 如果alpha或beta talker有足够的列表中的物品则返回true  
 * 可与_consume_item_sum配对使用  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 检查你是否有列表中任何类型的10条毯子  
 * {  
 *   "u_has_items_sum": [  
 *     { "item": "blanket", "amount": 10 },
 *     { "item": "blanket_fur", "amount": 10 },
 *     { "item": "electric_blanket", "amount": 10 }
 *   ]  
 * }  
 * // 检查你是否有足够的毯子覆盖所需数量 (例如, 如果你有5条毯子和10条电热毯 (每个贡献所需数量的50%) , 则返回true)   
 * {  
 *   "u_has_items_sum": [  
 *     { "item": "blanket", "amount": 10 },
 *     { "item": "blanket_fur", "amount": 15 },
 *     { "item": "electric_blanket", "amount": 20 }
 *   ]  
 * }  
 * // 也支持变量  
 * {  
 *   "u_has_items_sum": [  
 *     { "item": { "global_val": "foo" }, "amount": { "math": "20 + 2" } },
 *     { "item": "blanket_fur", "amount": 15 },
 *     { "item": "electric_blanket", "amount": 20 }
 *   ]  
 * }  
 */
export type HasItemsSum = TalkerVar<{
    /**有物品总和  
     * 要检查的物品和数量的对数组  
     */
    has_items_sum: {
        /**要检查的物品ID */
        item: (IDObj<ItemID>);
        /**需要的物品数量 */
        amount: (NumObj);
    }[];
}, 'has_items_sum'>;



/**有仿生学  
 * 如果alpha或beta talker有特定的仿生学则返回true  
 * ANY可用于返回true, 如果存在任何仿生学  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 检查你是否有bio_synlungs  
 * { "u_has_bionics": "bio_synlungs" }  
 * // 检查你是否有任何仿生学  
 * { "u_has_bionics": "ANY" }  
 */
export type HasBionics = TalkerVar<{
    /**有仿生学  
     * 要检查的仿生学ID  
     */
    has_bionics: (IDObj<BionicID|"ANY">);
}, 'has_bionics'>;

/**有效果  
 * 如果alpha或beta talker有特定的效果则返回true  
 * intensity可用于检查特定强度的效果  
 * bodypart可用于检查应用于特定身体部位的效果  
 * 武术静态增益可以以mabuff:buff_id的形式检查  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 检查你是否被感染  
 * { "u_has_effect": "infected" }  
 * // 检查你的头部是否严重流血  
 * { "u_has_effect": "bleed", "intensity": 10, "bodypart": "head" }  
 * // 检查你是否激活了合气道姿态  
 * { "u_has_effect": "mabuff:buff_aikido_static1" }  
 */
export type HasEffect = TalkerVar<{
    /**有效果  
     * 要检查的效果ID  
     * 武术static_buffs可以通过形式来检查mabuff:buff_id  
     */
    has_effect: (IDObj<EffectID>);
    /**强度  
     * 要检查的效果强度  
     */
    intensity?: (NumObj);
    /**身体部位  
     * 要检查的身体部位  
     */
    bodypart?: (IDObj<BodyPartID>);
}, 'has_effect'>;



/**有任意效果  
 * 如果alpha或beta talker有列表中的任何效果则返回true  
 * bodypart可用于检查应用于特定身体部位的效果  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 检查你的躯干是否热或冷  
 * { "u_has_any_effect": [ "hot", "cold" ], "bodypart": "torso" }  
 */
export type HasAnyEffect = TalkerVar<{
    /**有任意效果  
     * 要检查的效果ID列表  
     */
    has_any_effect: (IDObj<EffectID>)[];
    /**身体部位  
     * 要检查的身体部位  
     */
    bodypart?: (IDObj<BodyPartID>);
}, 'has_any_effect'>;

/**有专长  
 * 如果alpha或beta talker已经掌握了专长 (达到100%) 则返回true  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 检查你是否掌握了化学原理  
 * { "u_has_proficiency": "prof_intro_chemistry" }  
 */
export type HasProficiency = TalkerVar<{
    /**有专长  
     * 要检查的专长ID  
     */
    has_proficiency: (IDObj<ProficiencyID>);
}, 'has_proficiency'>;


/**可收起武器  
 * 如果alpha或beta talker持有一件物品, 并且有足够的空间收起它, 则返回true  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 你装备了一件可以收起的物品  
 * "u_can_stow_weapon"  
 * // 你装备了一件不能收起的物品, 可能是因为它是仿生伪物品, 你没有空间存放它, 或者任何其他原因  
 * { "not": "u_can_stow_weapon" }  
 */
export type CanStowWeapon = TalkerStr<"can_stow_weapon">;



/**可丢弃武器  
 * 如果alpha或beta talker持有一件物品, 并且可以将其丢在地上 (即武器没有NO_UNWIELD标志, 如收回的仿生爪或单分子刀片仿生学) , 则返回true  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 你可以丢弃你的武器  
 * "u_can_drop_weapon"  
 * // 你不能丢弃你的武器  
 * { "not": "u_can_drop_weapon" }  
 * // 可以使用u_has_wielded_with_flag复制效果  
 * { "u_has_wielded_with_flag": "NO_UNWIELD" }  
 */
export type CanDropWeapon = TalkerStr<"can_drop_weapon">;

/**有武器  
 * 如果alpha或beta talker持有任何物品则返回true  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 你持有武器  
 * "u_has_weapon"  
 * // 你没有持有任何东西  
 * { "not": "u_has_weapon" }  
 */
export type HasWeapon = TalkerStr<"has_weapon">;


/**控制车辆  
 * 如果alpha或beta talker控制车辆则返回true  
 * 注意: NPC目前不能操作车辆  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 你正在控制车辆  
 * "u_controlling_vehicle"  
 * // 你没有驾驶  
 * { "not": "u_controlling_vehicle" }  
 */
export type ControllingVehicle = TalkerStr<"controlling_vehicle">;

/**驾驶  
 * 如果alpha或beta talker操作移动中的车辆则返回true  
 * 注意: NPC目前不能操作车辆  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 你正在驾驶  
 * "u_driving"  
 * // 你没有驾驶  
 * { "not": "u_driving" }  
 */
export type Driving = TalkerStr<"driving">;



/**知道配方  
 * 如果角色知道特定配方则返回true  
 * 只计算记忆中的配方, 不计算书中写的配方  
 * 适用于: Avatar Character  
 * @example  
 * // 检查你是否记住了meat_hunk配方  
 * { "u_know_recipe": "meat_hunk" }  
 */
export type KnowRecipe = TalkerVar<{
    /**知道配方  
     * 要检查的配方ID  
     */
    know_recipe: (IDObj<RecipeID>);
}, 'know_recipe'>;

/**穿戴有标志的物品  
 * 如果alpha或beta talker穿戴带有特定标志的物品则返回true  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 检查你是否穿戴带有RAD_DETECT标志的物品  
 * { "u_has_worn_with_flag": "RAD_DETECT" }  
 */
export type HasWornWithFlag = TalkerVar<{
    /**穿戴有标志的物品  
     * 要检查的标志ID  
     */
    has_worn_with_flag: (IDObj<FlagID>);
}, 'has_worn_with_flag'>;


/**持有有标志的物品  
 * 如果alpha或beta talker持有带有特定标志的物品则返回true  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 检查你是否持有带有WHIP标志的物品  
 * { "u_has_wielded_with_flag": "WHIP" }  
 */
export type HasWieldedWithFlag = TalkerVar<{
    /**持有有标志的物品  
     * 要检查的标志ID  
     */
    has_wielded_with_flag: (IDObj<FlagID>);
}, 'has_wielded_with_flag'>;

/**持有特定武器类别的物品  
 * 如果alpha或beta talker持有带有特定武器类别的物品则返回true  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 检查你是否持有带有LONG_SWORDS武器类别的物品  
 * { "u_has_wielded_with_weapon_category": "LONG_SWORDS" }  
 */
export type HasWieldedWithWeaponCategory = TalkerVar<{
    /**持有特定武器类别的物品  
     * 要检查的武器类别  
     */
    has_wielded_with_weapon_category: (IDObj<WeaponCategoryID>);
}, 'has_wielded_with_weapon_category'>;



/**持有特定技能的物品  
 * 如果alpha或beta talker持有使用此技能的枪或近战武器则返回true  
 * 枪的技能来自skill字段  
 * 近战武器的技能来自物品具有的最高伤害类型  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 检查你是否持有使用手枪技能的枪  
 * { "u_has_wielded_with_skill": "pistol" }  
 */
export type HasWieldedWithSkill = TalkerVar<{
    /**持有特定技能的物品  
     * 要检查的技能ID  
     */
    has_wielded_with_skill: IDObj<SkillID>;
}, 'has_wielded_with_skill'>;

/**持有特定弹药类型的物品  
 * 如果alpha或beta talker持有可以使用此弹药类型的物品则返回true  
 * 适用于允许多种弹药类型的物品  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 检查你是否持有使用22弹药类型 (.22 LR) 的枪  
 * { "u_has_wielded_with_ammotype": "22" }  
 */
export type HasWieldedWithAmmotype = TalkerVar<{
    /**持有特定弹药类型的物品  
     * 要检查的弹药类型  
     */
    has_wielded_with_ammotype: IDObj<AmmunitionTypeID>;
}, 'has_wielded_with_ammotype'>;




/**能看见  
 * 如果alpha或beta talker能看见 (不是盲的) 则返回true  
 * 适用于: Avatar Character NPC Monster  
 * @example  
 * // 你能看见  
 * "u_can_see"  
 * // 你看不见  
 * { "not": "u_can_see" }  
 */
export type CanSee = TalkerStr<"can_see">;

/**是聋的  
 * 如果alpha或beta talker不能听见则返回true  
 * 适用于: Avatar Character NPC Monster  
 * @example  
 * // 你是聋的  
 * "u_is_deaf"  
 * // 你能听见  
 * { "not": "u_is_deaf" }  
 */
export type IsDeaf = TalkerStr<"is_deaf">;

/**是活着的  
 * 如果alpha或beta talker没有死亡则返回true  
 * 适用于: Avatar Character NPC Monster  
 * @example  
 * // 你是活着的  
 * "u_is_alive"  
 * // NPC已死亡  
 * { "not": "npc_is_alive" }  
 */
export type IsAlive = TalkerStr<"is_alive">;

/**是温血的  
 * 如果alpha或beta talker是温血的 (它有WARM标志) 则返回true  
 * 适用于: Avatar Character NPC Monster  
 * @example  
 * // NPC是温血的  
 * "npc_is_warm"  
 */
export type IsWarm = TalkerStr<"is_warm">;

/**存在  
 * 如果alpha或beta talker不为null则返回true  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 */
export type Exists = TalkerStr<"exists">;




/**在地形上  
 * 如果alpha或beta talker站在特定地形上则返回true  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 * @example  
 * // 检查你是否站在草地上  
 * { "u_is_on_terrain": "t_grass" }  
 */
export type IsOnTerrain = TalkerVar<{
    /**在地形上  
     * 要检查的地形ID  
     */
    is_on_terrain: (IDObj<TerrainID>);
}, 'is_on_terrain'>;

/**在带有标志的地形上  
 * 如果alpha或beta talker站在带有特定标志的地形上则返回true  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 * @example  
 * // 检查你是否站在带有SHRUB标志的地形上  
 * { "u_is_on_terrain_with_flag": "SHRUB" }  
 */
export type IsOnTerrainWithFlag = TalkerVar<{
    /**在带有标志的地形上  
     * 要检查的地形标志  
     */
    is_on_terrain_with_flag: (IDObj<FlagID>);
}, 'is_on_terrain_with_flag'>;

/**在场地中  
 * 如果alpha或beta talker站在特定场地上则返回true  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 * @example  
 * // 检查你是否站在烟雾云中  
 * { "u_is_in_field": "fd_smoke" }  
 */
export type IsInField = TalkerVar<{
    /**在场地中  
     * 要检查的场地ID  
     */
    is_in_field: (IDObj<FieldTypeID>);
}, 'is_in_field'>;


/**查询  
 * 对于avatar (玩家) , 创建一个可以回答"yes"和"no"的消息弹出窗口. 如果选择"yes", 则返回true, 否则返回false  
 * default字段应用于指定NPC (玩家不控制) 的默认输出  
 * 只有当其余条件为true时才会创建弹出窗口  
 * 适用于: Avatar Character NPC  
 * @example  
 * // 创建一个消息为"You have died. Continue as one of your followers?"的弹出窗口  
 * { "u_query": "You have died. Continue as one of your followers?", "default": false }  
 */
export type Query = TalkerVar<{
    /**查询  
     * 要显示的消息  
     */
    query: (StrObj);
    /**默认值  
     * NPC的默认响应  
     */
    default?: boolean;
}, 'query'>;

/**地图地形有标志  
 * 如果地形有特定标志则返回true  
 * loc将指定地形的位置 (必需)   
 * @example  
 * // 检查北方地形是否有TRANSPARENT标志  
 * { "map_terrain_with_flag": "TRANSPARENT", "loc": { "context_val": "loc" } }  
 */
export type MapTerrainWithFlag = {
    /**地图地形有标志  
     * 要检查的地形标志  
     */
    map_terrain_with_flag: (IDObj<FlagID>);
    /**位置  
     * 要检查的位置  
     */
    loc: (LocObj);
}



/**地图家具有标志  
 * 如果家具有特定标志则返回true  
 * loc将指定家具的位置 (必需)   
 * @example  
 * // 检查北方家具是否有TRANSPARENT标志  
 * { "map_furniture_with_flag": "TRANSPARENT", "loc": { "context_val": "loc" } }  
 */
export type MapFurnitureWithFlag = {
    /**地图家具有标志  
     * 要检查的家具标志  
     */
    map_furniture_with_flag: (IDObj<FlagID>);
    /**位置  
     * 要检查的位置  
     */
    loc: (LocObj);
}

/**地图地形ID  
 * 如果地形有特定ID则返回true  
 * loc将指定地形的位置 (必需)   
 * @example  
 * // 检查选定的地形是否是t_grass  
 * { "map_terrain_id": "t_grass", "loc": { "context_val": "check_terrain" } }  
 */
export type MapTerrainId = {
    /**地图地形ID  
     * 要检查的地形ID  
     */
    map_terrain_id: (IDObj<TerrainID>);
    /**位置  
     * 要检查的位置  
     */
    loc: (LocObj);
}



/**地图家具ID  
 * 如果家具有特定ID则返回true  
 * loc将指定家具的位置 (必需)   
 */
export type MapFurnitureId = {
    /**地图家具ID  
     * 要检查的家具ID  
     */
    map_furniture_id: (IDObj<FurnitureID>);
    /**位置  
     * 要检查的位置  
     */
    loc: (LocObj);
}

/**地图场地ID  
 * 如果场地有特定ID则返回true  
 * loc将指定场地的位置 (必需)   
 */
export type MapFieldId = {
    /**地图场地ID  
     * 要检查的场地ID  
     */
    map_field_id: (IDObj<FieldTypeID>);
    /**位置  
     * 要检查的位置  
     */
    loc: (LocObj);
}

/**地图在城市中  
 * 如果位置在z-1或更高的城市边界内则返回true  
 * @example  
 * // 检查位置是否在城市中  
 * { "map_in_city": { "context_val": "loc" } }  
 */
export type MapInCity = {
    /**地图在城市中  
     * 要检查的位置  
     */
    map_in_city: (LocObj);
}


/**玩家看见U  
 * 如果玩家可以看见alpha talker则返回true  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 */
export type PlayerSeeU = "player_see_u";

/**玩家看见NPC  
 * 如果玩家可以看见beta talker则返回true  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 */
export type PlayerSeeNpc = "player_see_npc";



/**能看见位置  
 * 如果alpha或beta talker可以看见位置则返回true  
 * 适用于: Avatar Character NPC Monster  
 * @example  
 * // 你可以看见选定的位置  
 * { "u_can_see_location": { "context_val": "pos" } }  
 */
export type CanSeeLocation = TalkerVar<{
    /**能看见位置  
     * 要检查的位置  
     */
    can_see_location: (LocObj);
}, 'can_see_location'>;



/**U看见NPC  
 * 如果alpha talker可以看见beta talker则返回true  
 * 需要两个talker都存在  
 * 适用于: Avatar Character NPC Monster  
 */
export type USeeNpc = TalkerStr<"see_npc">;

/**NPC看见你  
 * 如果beta talker可以看见alpha talker则返回true  
 * 需要两个talker都存在  
 * 适用于: Avatar Character NPC Monster  
 */
export type NpcSeeYou = TalkerStr<"see_you">;

/**U看见NPC位置  
 * 如果beta talker的位置从alpha talker的位置可见则返回true  
 * 不检查视觉条件, 即使一方或另一方是盲的或者是夜晚也可能返回true  
 * 需要两个talker都存在  
 * 适用于: Avatar Character NPC Monster  
 */
export type USeeNpcLoc = TalkerStr<"see_npc_loc">;

/**NPC看见你位置  
 * 如果alpha talker的位置从beta talker的位置可见则返回true  
 * 不检查视觉条件, 即使一方或另一方是盲的或者是夜晚也可能返回true  
 * 需要两个talker都存在  
 * 适用于: Avatar Character NPC Monster  
 */
export type NpcSeeYouLoc = TalkerStr<"see_you_loc">;



/**视线  
 * 检查两点是否相互可见  
 * 在夜间也有效  
 * @example  
 * // 检查两点是否可以相互看见  
 * { "line_of_sight": 60, "loc_1": { "context_val": "loc_1" }, "loc_2": { "context_val": "loc_2" } }  
 */
export type LineOfSight = {
    /**视线  
     * 要检查的距离  
     */
    line_of_sight: (NumObj);
    /**位置1  
     * 视线的一个点  
     */
    loc_1: (LocObj);
    /**位置2  
     * 视线的另一个点  
     */
    loc_2: (LocObj);
    /**包含场地  
     * @default true  
     * 如果为false, 忽略不透明场地  
     */
    with_fields?: boolean;
}




/**是被驾驶的  
 * 如果alpha或beta talker是当前被驾驶的车辆则返回true  
 * 适用于: Vehicle  
 */
export type IsDriven = TalkerStr<"is_driven">;

/**是远程控制的  
 * 如果alpha或beta talker是被玩家远程控制的车辆则返回true  
 * 适用于: Vehicle  
 */
export type IsRemoteControlled = TalkerStr<"is_remote_controlled">;

/**能飞行  
 * 如果alpha或beta talker是能够飞行的车辆则返回true  
 * 适用于: Vehicle  
 */
export type CanFly = TalkerStr<"can_fly">;

/**正在飞行  
 * 如果alpha或beta talker是当前正在飞行的车辆则返回true  
 * 适用于: Vehicle  
 */
export type IsFlying = TalkerStr<"is_flying">;

/**能漂浮  
 * 如果alpha或beta talker是能够漂浮的车辆则返回true  
 * 适用于: Vehicle  
 */
export type CanFloat = TalkerStr<"can_float">;

/**正在漂浮  
 * 如果alpha或beta talker是当前正在漂浮的车辆则返回true  
 * 适用于: Vehicle  
 */
export type IsFloating = TalkerStr<"is_floating">;

/**正在坠落  
 * 如果alpha或beta talker是当前正在坠落的车辆则返回true  
 * 适用于: Vehicle  
 */
export type IsFalling = TalkerStr<"is_falling">;

/**正在打滑  
 * 如果alpha或beta talker是当前正在打滑的车辆则返回true  
 * 适用于: Vehicle  
 */
export type IsSkidding = TalkerStr<"is_skidding">;

/**正在下沉  
 * 如果alpha或beta talker是当前正在下沉的车辆则返回true  
 * 适用于: Vehicle  
 */
export type IsSinking = TalkerStr<"is_sinking">;

/**在轨道上  
 * 如果alpha或beta talker是使用轨道的车辆则返回true  
 * 适用于: Vehicle  
 */
export type IsOnRails = TalkerStr<"is_on_rails">;

/**Avatar是乘客  
 * 如果alpha或beta talker是以avatar为乘客的车辆则返回true  
 * 适用于: Vehicle  
 */
export type IsAvatarPassenger = TalkerStr<"is_avatar_passenger">;

/**有弹药  
 * 如果beta talker是物品并且有足够的弹药至少进行一次"射击"则返回true  
 */
export type HasAmmo = "has_ammo";



/**测试EOC  
 * 如果提供的eoc的条件返回true则返回true  
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle  
 * @example  
 * // 检查eoc test_condition是否会使用其true或false效果  
 * { "test_eoc": "test_condition" }  
 */
export type TestEoc = {
    /**测试EOC  
     * 要测试的EOC ID  
     */
    test_eoc: (IDObj<EocID>);
}