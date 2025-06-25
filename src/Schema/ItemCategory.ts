import { FlagID } from "./Flag";
import { CddaID, DescText, Float } from "./GenericDefine";


/**物品类型ID */
export type ItemCategoryID = CddaID<'ITEMC'>|DefineItemCategoryID;

/**物品类别定义 - 用于库存分类显示 */
export type ItemCategory = {
    /**物品类型唯一ID */
    id: (ItemCategoryID);
    /**用于标题的类别名称. 这是在游戏中打开库存时显示的内容 */
    name: (DescText);
    /**用于描述性文本的类别名称, 包括单数和复数名称 */
    name_noun?: (DescText);
    /**对应的loot_zone(参见loot_zones.json) */
    zone: string;
    /**用于显示时排序类别. 较低的值先显示 */
    sort_rank: number;
    /**当设置时, 如果满足条件, 此类别中的物品将被排序到优先级区域  
     * 如果用户在区域管理器中没有优先级区域, 物品将被排序到'zone'属性中设置的区域  
     * 这是一个对象列表. 每个对象有3个属性:   
     * id: LOOT_ZONE的id(参见LOOT_ZONES.json)  
     * filthy: 布尔值. 设置此项意味着此类别中的肮脏物品将被排序到优先级区域  
     * flags: 标志数组  
     */
    priority_zones?: {
        id: string;
        filthy: boolean;
        flags: FlagID[];
    }[];
    /**设置可能从此物品类别生成的物品数量  
     * 检查物品类别的spawn_rate值  
     * 如果spawn_chance为0.0, 物品将不会生成  
     * 如果spawn_chance大于0.0且小于1.0, 它将进行随机滚动(0.0-1.0)以检查物品是否有机会生成  
     * 如果spawn_chance大于或等于1.0, 它将增加从同一类别生成额外物品的机会  
     * 物品将从原始物品所在的物品组中获取. 因此此参数不会影响在mapgen中单独设置生成的物品(例如通过使用item或place_item)生成额外物品的机会  
     */
    spawn_rate?: Float;
};

/**物品类别示例 */
const ExampleItemCategory: ItemCategory = {
    "id": "armor",
    "name": "ARMOR",
    "zone": "LOOT_ARMOR",
    "sort_rank": -21,
    "priority_zones": [ 
        { 
            "id": "LOOT_FARMOR", 
            "filthy": true, 
            "flags": [ "RAINPROOF" ] 
        } 
    ],
    "spawn_rate": 0.5
};


//#region ItemCategoryID提取
/**ItemCategoryID提取 列表*/
const ExtractDefineItemCategoryIDList = [
    "e_files"           , // 文件
    "software"          , // 软件
    "guns"              , // 枪械
    "magazines"         , // 弹匣
    "ammo"              , // 弹药
    "weapons"           , // 武器
    "tools"             , // 工具
    "clothing"          , // 服装
    "food"              , // 食物
    "drugs"             , // 药物
    "manuals"           , // 指南
    "books"             , // 书籍
    "maps"              , // 地图
    "mods"              , // 改装模组
    "mutagen"           , // 诱变剂
    "bionics"           , // 生化插件
    "currency"          , // 货币
    "veh_parts"         , // 载具部件
    "other"             , // 杂项部件
    "fuel"              , // 燃料
    "seeds"             , // 种子
    "ma_manuals"        , // 武术手册
    "traps"             , // 陷阱
    "chems"             , // 化学制品
    "spare_parts"       , // 零件
    "container"         , // 容器
    "artifacts"         , // 神器
    "keys"              , // 钥匙
    "corpses"           , // 尸体
    "tool_magazine"     , // 工具料匣
    "armor"             , // 护甲
    "exosuit"           , // 动力装甲
    "ITEMS_WORN"        , // 穿戴物品
    "INTEGRATED"        , // 身体内置
    "BIONIC_FUEL_SOURCE", // 生化插件供能
    "WEAPON_HELD"       , // 手持武器
] as const;
/**ItemCategoryID提取 列表*/
type ExtractDefineItemCategoryID = typeof ExtractDefineItemCategoryIDList[number];
//#endregion


/**预定义的物品类别 列表 */
export const DefineItemCategoryIDList = ExtractDefineItemCategoryIDList;
/**预定义的物品类别 */
export type DefineItemCategoryID = typeof DefineItemCategoryIDList[number];

