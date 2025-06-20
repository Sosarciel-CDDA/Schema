import { MissionDefinitionID } from "Schema/MissionDefinition";
import { EocID, TalkerVar } from "../Eoc";
import { BoolObj } from "./BoolObjectIndex";
import { AnyObj, CompareOpera, CondObj, IDObj, LocObj, NumObj } from "./VariableObjectIndex";
import { BodyPartID, DescText, Time } from "Schema/GenericDefine";
import { FieldID } from "Schema/Field";
import { WeaponCategoryID } from "Schema/WeaponCategory";
import { FlagID } from "Schema/Flag";
import { MutationID } from "Schema/Mutation";
import { AnyItemID } from "Schema/Item";
import { VarComment } from "../EocEffect";
import { StrObj } from "./StringObjectIndex";
import { EffectID } from "Schema/Effect";
import { TerrainID } from "Schema/Terrain";
import { AmmunitionTypeID } from "Schema/AmmiunitionType";
import { SkillID } from "Schema/Skill";




/**非操作 */
export type BoolOperaNot = {
    /**非操作 */
    not: (BoolObj);
};

/**或操作 */
export type BoolOperaOr = {
    /**或操作 */
    or: (BoolObj)[]
};

/**与操作 */
export type BoolOperaAnd = {
    /**与操作 */
    and: (BoolObj)[]
};

/**比较字符串是否相等 */
export type BoolOperaCompStr = {
    /**比较字符串是否相等 可以用'yes'进行空值判断 */
    compare_string: [AnyObj,AnyObj]
};



/**math比较表达式 */
export type MathCompareExp = {
    math:[string,CompareOpera,string]
};

/**获取条件 */
export type GetCond = {
    /**获取条件 */
    get_condition: (CondObj);
}

/**有某个效果 */
export type HasEffect = TalkerVar<{
    /**有某个效果  
     * 武术static_buffs可以通过形式来检查mabuff:buff_id  
     */
    has_effect:IDObj<EffectID>;
    /**要求的效果强度 */
    intensity?: (NumObj);
    /**检查哪个肢体 */
    bodypart?: BodyPartID;
},"has_effect">;

/**有某个文本变量 */
export type HasStrVar = TalkerVar<{
    /**有某个文本变量 */
    has_var:string;
    /**要求的内容 */
    value: (StrObj);
},"has_var">&VarComment;

/**有某个时间变量 */
export type HasTimeVar = TalkerVar<{
    /**有某个时间变量 */
    has_var:string;
    /**表示是时间变量 */
    time:true;
},"has_var">&VarComment;

/**手中的物品有某个flag */
export type HasWieldFlag = TalkerVar<{
    /**手中的物品有某个flag */
    has_wielded_with_flag:IDObj<FlagID>;
},"has_wielded_with_flag">;

/**手中的物品有某个武器分类 */
export type HasWieldWeaponCategoty = TalkerVar<{
    /**手中的物品有某个武器分类 */
    has_wielded_with_weapon_category:IDObj<WeaponCategoryID>;
},"has_wielded_with_weapon_category">;

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

/**获取 时间变量自创建以来经过的时间 并比较 */
export type CompareTime = TalkerVar<{
    compare_time_since_var: string;
    /**变量的 type 注释 */
    type?: string;
    /**变量的 context 注释 */
    context?: string;
    /**操作符 */
    op: CompareOpera;
    /**比较的时间 */
    time: (Time);
},"compare_time_since_var">;


/**选择地块的模式 列表 */
const QueryTileTypeList = [
    "anywhere"      , //与"look around" UI相同
    "line_of_sight" , //此刻可见的唯一瓷砖 (范围是强制性的) 
    "around"        , //与点燃火源相同, 你只能选择紧邻的9个瓷砖
] as const;
/**选择地块的模式 列表 */
type QueryTileType = typeof QueryTileTypeList[number];

/**选择地块 */
export type QueryTile = TalkerVar<{
    /**选择地块 */
    query_tile: QueryTileType;
    /**包含所选瓷砖坐标的变量对象 (强制性)  */
    target_var: (LocObj);
    /**定义line_of_sight的可选范围 (对于line_of_sight是强制性的, 否则不需要)  */
    range?: (NumObj);
    /**定义是否允许为anywhere选择其他z-level */
    z_level?: (NumObj);
    /**选择时显示的消息 */
    message?: (DescText);
},"query_tile">;




/**生存需求 */
export type SurvivalNeed = TalkerVar<{
    need: "thirst"|"hunger"|"fatigue";
    amount?: number;
    level?: "TIRED";
},"need">




/**拥有物品汇总
 * 当 alpha 或 beta 对话者所拥有的物品中, 总量满足任意一组需求时, 返回 true. 
 * 其中, item 表示要检查的物品;  amount 表示应当找到的该物品数量. 
 * 此条件可与 _consume_item_sum 配对使用. 
 * 适用于: Avatar Character NPC
 */
export type HasItemsSum = TalkerVar<{
    /**物品列表, 每项为一个物品及对应数量 */
    has_items_sum: {
        /**物品ID或变量引用 */
        item: (StrObj);
        /**所需数量或可计算表达式 */
        amount: (NumObj);
    }[];
}, "has_items_sum">;


/**检查talker是否持有使用特定技能的武器 */
export type HasWieldedWithSkill = TalkerVar<{
    /**检查talker是否持有使用特定技能的武器
     * 对于枪械, 技能来自武器的skill字段
     * 对于近战武器, 技能来自武器具有的最高伤害类型
     */
    has_wielded_with_skill: IDObj<SkillID>;
}, "has_wielded_with_skill">;

/**检查talker是否持有使用特定弹药类型的武器
 * 适用于: Avatar Character NPC
 */
export type HasWieldedWithAmmotype = TalkerVar<{
    /**检查talker是否持有使用特定弹药类型的武器
     * 对于可以使用多种弹药类型的物品也有效
     */
    has_wielded_with_ammotype: IDObj<AmmunitionTypeID>;
}, "has_wielded_with_ammotype">;


/**检查talker是否站在具有特定标志的地形上
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 */
export type IsOnTerrainWithFlag = TalkerVar<{
    /**检查talker是否站在具有特定标志的地形上 */
    //is_on_terrain_with_flag: IDObj<FlagID>;
    is_on_terrain_with_flag: (StrObj);
}, "is_on_terrain_with_flag">;


/**为玩家创建一个弹出窗口, 可以回答"是"或"否"
 * 适用于: Avatar Character NPC
 */
export type QueryBool = TalkerVar<{
    /**为玩家创建一个弹出窗口
     * 对于玩家 (Avatar) , 创建一个可以回答"是"或"否"的弹出窗口
     * 如果选择"是"则返回true, 否则返回false
     */
    query: StrObj;
    /**指定NPC (非玩家控制的角色) 的默认输出 */
    default: boolean;
}, "query">;

/**检查talker是否站在特定的大地图瓦片上
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 */
export type AtOmLocation = TalkerVar<{
    /**检查talker是否站在特定的大地图瓦片上
     * FACTION_CAMP_ANY可以用来检查talker是否站在派系营地瓦片上
     * FACTION_CAMP_START可以用来检查talker是否站在可以转变为派系营地的瓦片上
     */
    at_om_location: (StrObj);
}, "at_om_location">;

/**检查talker是否有特定的特质/变异
 * 适用于: Avatar Character NPC
 */
export type HasTrait = TalkerVar<{
    /**检查talker是否有特定的特质/变异 */
    has_trait: (IDObj<MutationID>);
}, "has_trait">;

/**检查talker是否有任意一个特定的特质/变异
 * 适用于: Avatar Character NPC
 */
export type HasAnyTrait = TalkerVar<{
    /**检查talker是否有任意一个特定的特质/变异 */
    has_any_trait: (IDObj<MutationID>)[];
}, "has_any_trait">;

/**检查talker是否有可见的特质/变异
 * 适用于: Avatar Character NPC
 */
export type HasVisibleTrait = TalkerVar<{
    /**检查talker是否有可见的特质/变异 (在mutation visibility字段中定义了可见性)  */
    has_visible_trait: (IDObj<MutationID>);
}, "has_visible_trait">;

/**检查talker的特质是否可净化
 * 适用于: Avatar Character NPC
 */
export type IsTraitPurifiable = TalkerVar<{
    /**检查talker的特质是否可净化
     * 不可净化性可以在特质定义中全局设置, 或通过u/npc_set_trait_purifiability为每个角色单独设置
     */
    is_trait_purifiable: (IDObj<MutationID>);
}, "is_trait_purifiable">;

/**检查talker是否拥有特定武术
 * 适用于: Avatar Character NPC
 */
export type HasMartialArt = TalkerVar<{
    /**检查talker是否拥有特定武术 */
    //has_martial_art: (IDObj<MartialArtID>);
    has_martial_art: (StrObj);
}, "has_martial_art">;

/**检查talker是否正在使用特定武术
 * 适用于: Avatar Character NPC
 */
export type UsingMartialArt = TalkerVar<{
    /**检查talker是否正在使用特定武术 */
    //using_martial_art: (IDObj<MartialArtID>);
    using_martial_art: (StrObj);
}, "using_martial_art">;

/**检查talker是否有特定标志
 * 适用于: Avatar Character NPC Monster Item
 */
export type HasFlag = TalkerVar<{
    /**检查talker是否有特定标志
     * 特殊标志MUTATION_THRESHOLD可用于检查talker是否有任何变异阈值
     * 对于怪物, 可以检查json标志 (通过效果应用) 和怪物标志
     */
    has_flag: (StrObj);
}, "has_flag">;

/**检查talker (作为载具) 是否有带有特定标志的部件
 * 适用于: Vehicle
 */
export type HasPartFlag = TalkerVar<{
    /**检查talker (作为载具) 是否有带有特定标志的部件 */
    has_part_flag: (StrObj);
    /**如果存在且为true, 则部件需要被启用 */
    enabled?: boolean;
}, "has_part_flag">;

/**检查talker是否属于特定物种
 * 适用于: Monster
 */
export type HasSpecies = TalkerVar<{
    /**检查talker是否属于特定物种 */
    has_species: (StrObj);
}, "has_species">;

/**检查talker的身体类型
 * 适用于: Avatar Character NPC
 * 对于玩家/NPC, 如果身体类型是human则返回true
 */
export type Bodytype = TalkerVar<{
    /**检查talker的身体类型 */
    bodytype: (StrObj);
}, "bodytype">;

/**检查每个提供的变量是否存在
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 */
export type ExpectsVars = {
    /**检查每个提供的变量是否存在
     * 如果检查失败, 返回false并创建调试错误消息
     */
    expects_vars: (StrObj)[];
};

/**比较所有字符串, 如果至少有两个匹配则返回true
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 */
export type CompareString = {
    /**比较所有字符串, 如果至少有两个匹配则返回true */
    compare_string: (StrObj)[];
};

/**比较所有字符串, 如果全部匹配则返回true
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 */
export type CompareStringMatchAll = {
    /**比较所有字符串, 如果全部匹配则返回true
     * 对于两个字符串, 检查与compare_string相同
     */
    compare_string_match_all: (StrObj)[];
};

/**检查玩家角色是否有给定的职业ID或其"爱好"子类型
 * 适用于: Avatar Character
 */
export type Profession = {
    /**检查玩家角色是否有给定的职业ID或其"爱好"子类型 */
    //u_profession: (IDObj<ProfessionID>);
    u_profession: (StrObj);
};

/**检查talker的力量是否至少达到指定值
 * 适用于: Avatar Character NPC
 */
export type HasStrength = TalkerVar<{
    /**检查talker的力量是否至少达到指定值 */
    has_strength: (NumObj);
}, "has_strength">;

/**检查talker的敏捷是否至少达到指定值
 * 适用于: Avatar Character NPC
 */
export type HasDexterity = TalkerVar<{
    /**检查talker的敏捷是否至少达到指定值 */
    has_dexterity: (NumObj);
}, "has_dexterity">;

/**检查talker的智力是否至少达到指定值
 * 适用于: Avatar Character NPC
 */
export type HasIntelligence = TalkerVar<{
    /**检查talker的智力是否至少达到指定值 */
    has_intelligence: (NumObj);
}, "has_intelligence">;

/**检查talker的感知是否至少达到指定值
 * 适用于: Avatar Character NPC
 */
export type HasPerception = TalkerVar<{
    /**检查talker的感知是否至少达到指定值 */
    has_perception: (NumObj);
}, "has_perception">;

/**检查talker的身体部位温度是否高于指定值
 * 适用于: Avatar Character NPC
 */
export type HasPartTemp = TalkerVar<{
    /**检查talker的身体部位温度是否高于指定值
     * 温度以任意单位表示, 在weather.h中描述: 体温以0u到10000u的比例测量, 其中10u = 0.02C, 5000u是37C
     */
    has_part_temp: (NumObj);
    /**指定要检查的身体部位 */
    bodypart: (IDObj<BodyPartID>);
}, "has_part_temp">;

/**检查talker是否有特定物品
 * 携带/穿戴/持握/背包里有某个物品
 * 适用于: Avatar Character NPC
 */
export type HasItem = TalkerVar<{
    /**检查talker是否有特定物品 */
    has_item: (IDObj<AnyItemID>);
}, "has_item">;

/**检查talker是否有特定数量的物品
 * 适用于: Avatar Character NPC
 */
export type HasItems = TalkerVar<{
    /**检查talker是否有特定数量的物品 */
    has_items: {
        /**要检查的物品 */
        item: (IDObj<AnyItemID>);
        /**物品的数量 */
        count?: (NumObj);
        /**物品的充能量 */
        charges?: (NumObj);
    };
}, "has_items">;

/**检查talker是否有特定类别的物品
 * 适用于: Avatar Character NPC
 */
export type HasItemCategory = TalkerVar<{
    /**检查talker是否有特定类别的物品 */
    //has_item_category: (IDObj<ItemCategotyID>);
    has_item_category: (StrObj);
    /**物品的数量, 用于检查数量大于1的物品 */
    count?: (NumObj);
}, "has_item_category">;


/**检查talker是否有特定仿生装置
 * 适用于: Avatar Character NPC
 */
export type HasBionics = TalkerVar<{
    /**检查talker是否有特定仿生装置
     * ANY可用于检查是否存在任何仿生装置
     */
    //has_bionics: (IDObj<BionicID>);
    has_bionics: (StrObj);
}, "has_bionics">;

/**检查talker是否有任意一个特定效果
 * 适用于: Avatar Character NPC
 */
export type HasAnyEffect = TalkerVar<{
    /**检查talker是否有任意一个特定效果 */
    has_any_effect: (IDObj<EffectID>)[];
    /**用于检查应用于特定身体部位的效果 */
    bodypart?: (IDObj<BodyPartID>);
}, "has_any_effect">;

/**检查talker是否掌握了特定熟练度
 * 适用于: Avatar Character NPC
 */
export type HasProficiency = TalkerVar<{
    /**检查talker是否掌握了特定熟练度 (达到100%)  */
    //has_proficiency: (IDObj<ProficiencyID>);
    has_proficiency: (StrObj);
}, "has_proficiency">;

/**检查角色是否知道特定配方
 * 适用于: Avatar Character
 */
export type KnowRecipe = {
    /**检查角色是否知道特定配方
     * 只计算记忆中的配方, 不包括书中的配方
     */
    //u_know_recipe: (IDObj<RecipeID>);
    u_know_recipe: (StrObj);
};

/**检查talker是否穿戴着带有特定标志的物品
 * 适用于: Avatar Character NPC
 */
export type HasWornWithFlag = TalkerVar<{
    /**检查talker是否穿戴着带有特定标志的物品 */
    has_worn_with_flag: (StrObj);
}, "has_worn_with_flag">;

/**检查talker是否持有带有特定标志的武器
 * 适用于: Avatar Character NPC
 */
export type HasWieldedWithFlag = TalkerVar<{
    /**检查talker是否持有带有特定标志的武器 */
    has_wielded_with_flag: (IDObj<FlagID>);
}, "has_wielded_with_flag">;

/**检查talker是否持有带有特定武器类别的物品
 * 适用于: Avatar Character NPC
 */
export type HasWieldedWithWeaponCategory = TalkerVar<{
    /**检查talker是否持有带有特定武器类别的物品 */
    has_wielded_with_weapon_category: (IDObj<WeaponCategoryID>);
}, "has_wielded_with_weapon_category">;

/**创建一个可以回答"是"或"否"的弹出窗口
 * 适用于: Avatar Character NPC
 */
export type Query = TalkerVar<{
    /**创建一个可以回答"是"或"否"的弹出窗口
     * 对于玩家, 如果选择"是", 则返回true, 否则返回false
     * 只有当其余条件为真时才会创建弹出窗口
     */
    query: (StrObj);
    /**指定NPC (玩家不控制) 的默认输出 */
    default?: boolean;
}, "query">;

/**检查talker是否站在特定地形上
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 */
export type IsOnTerrain = TalkerVar<{
    /**检查talker是否站在特定地形上 */
    is_on_terrain: (IDObj<TerrainID>);
}, "is_on_terrain">;

/**检查talker是否站在特定场地上
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 */
export type IsInField = TalkerVar<{
    /**检查talker是否站在特定场地上 */
    is_in_field: (IDObj<FieldID>);
}, "is_in_field">;

/**检查talker是否可以看到位置
 * 适用于: Avatar Character NPC Monster
 */
export type CanSeeLocation = TalkerVar<{
    /**检查talker是否可以看到位置 */
    can_see_location: (StrObj);
}, "can_see_location">;

// 无talker变体的条件类型

/**检查地形是否具有特定标志
 * 适用于: 不需要talker
 */
export type MapTerrainWithFlag = {
    /**检查地形是否具有特定标志 */
    map_terrain_with_flag: (StrObj);
    /**指定地形的位置 (必需)  */
    loc: (StrObj);
};

/**检查家具是否具有特定标志
 * 适用于: 不需要talker
 */
export type MapFurnitureWithFlag = {
    /**检查家具是否具有特定标志 */
    map_furniture_with_flag: (StrObj);
    /**指定家具的位置 (必需)  */
    loc: (StrObj);
};

/**检查地形是否具有特定ID
 * 适用于: 不需要talker
 */
export type MapTerrainId = {
    /**检查地形是否具有特定ID */
    map_terrain_id: (IDObj<TerrainID>);
    /**指定地形的位置 (必需)  */
    loc: (StrObj);
};

/**检查家具是否具有特定ID
 * 适用于: 不需要talker
 */
export type MapFurnitureId = {
    /**检查家具是否具有特定ID */
    //map_furniture_id: (IDObj<FurnitureID>);
    map_furniture_id: (StrObj);
    /**指定家具的位置 (必需)  */
    loc: (StrObj);
};

/**检查场地是否具有特定ID
 * 适用于: 不需要talker
 */
export type MapFieldId = {
    /**检查场地是否具有特定ID */
    map_field_id: (IDObj<FieldID>);
    /**指定场地的位置 (必需)  */
    loc: (StrObj);
};

/**检查位置是否在城市边界内 (在z-1或更高) 
 * 适用于: 不需要talker
 */
export type MapInCity = {
    /**检查位置是否在城市边界内 */
    map_in_city: (StrObj);
};

/**检查两点是否相互可见
 * 适用于: 不需要talker
 */
export type LineOfSight = {
    /**要检查的距离 */
    line_of_sight: NumObj;
    /**线的两个点之一 */
    loc_1: (StrObj);
    /**线的另一个点 */
    loc_2: (StrObj);
    /**如果为false, 则忽略不透明的场地. 默认为true */
    with_fields?: boolean;
};

/**检查提供的EOC的条件是否返回true
 * 适用于: Avatar Character NPC Monster Furniture Item Vehicle
 */
export type TestEoc = {
    /**检查提供的EOC的条件是否返回true */
    test_eoc: (IDObj<EocID>);
};