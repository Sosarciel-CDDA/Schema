import { ExtractDefineItemCategoryID, ExtractDefineItemCategoryIDList } from "Extract";
import { FlagID } from "./Flag";
import { CddaID, DescText, Float } from "./GenericDefine";


/**物品类型ID */
export type ItemCategoryID = CddaID<'ITEMC'>|DefineItemCategoryID;

/**物品类别定义 - 用于库存分类显示 */
export type ItemCategory = {
    type: "ITEM_CATEGORY";
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
    type: "ITEM_CATEGORY",
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



/**预定义的物品类别 列表 */
export const DefineItemCategoryIDList = ExtractDefineItemCategoryIDList;
/**预定义的物品类别 */
export type DefineItemCategoryID = ExtractDefineItemCategoryID;

