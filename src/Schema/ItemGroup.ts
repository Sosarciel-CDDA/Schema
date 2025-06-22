import { CddaID, CopyfromVar, Festival } from "./GenericDefine";
import { ItemID } from "./Item/ItemIndex";


/**预定义的物品组ID */
export const DefineItemGroupIDList = [
    "bionics"                               ,//任何cbm
    "afs_common_biomaterial_scrapgroup"     ,//afs材料
    "afs_advanced_biomaterial_scrapgroup"   ,
    "afs_common_circuitry_scrapgroup"       ,
    "afs_advanced_circuitry_scrapgroup"     ,
    "afs_common_energy_storage_scrapgroup"  ,
    "afs_advanced_energy_storage_scrapgroup",
    "afs_common_heat_scrapgroup"            ,
    "afs_advanced_heat_scrapgroup"          ,
    "afs_common_magnet_scrapgroup"          ,
    "afs_advanced_magnet_scrapgroup"        ,
    "afs_common_material_scrapgroup"        ,
    "afs_advanced_material_scrapgroup"      ,
    "afs_common_neural_io_scrapgroup"       ,
    "afs_advanced_neural_io_scrapgroup"     ,
    "afs_advanced_optics_scrapgroup"        ,
] as const;
/**预定义的物品组 */
export type DefineItemGroupID = typeof DefineItemGroupIDList[number];

/**物品组ID */
export type ItemGroupID = CddaID<"ITEMGP">|DefineItemGroupID;
/**物品组  */
export type ItemGroup = CopyfromVar<{
    type: "item_group";
    /**物品组唯一ID */
    id: (ItemGroupID);
    /**是可选的. 它可以是 collection 或 distribution.   
     * 如果未指定, 则默认为old, 这表示该项目组使用旧格式 本质上是分布.   
     * collection   集合 为每个entries均独立概率  
     * distribution 分布 为加权轮盘随机  
     * @default "distribution"
     */
    subtype?: "collection"|"distribution",
    /**详细写法 */
    entries?: ItemGroupEntrie[];
    /**快速物品列表  
     * 物品id 或者 [物品id,概率(100为100%)]
     */
    items?:ItemEntrieQuick[];
    /**快速物品列表  
     * 物品组id 或者 [物品组id,概率(100为100%)]
     */
    groups?:GroupEntrieQuick[];
    /**扩展元素 */
    extend?:Pick<ItemGroup,"entries"|"items"|"groups">;
}>;

/**一项Entry */
export type ItemGroupEntrie = (ItemGroupEntrieItem|ItemGroupEntrieGroup|
    ItemGroupEntrieDist|ItemGroupEntrieColl)&ItemGroupEntrieOpt;
/**物品Entry */
type ItemGroupEntrieItem = {
    /**物品ID */
    item:ItemID;
};
/**物品组Entry */
type ItemGroupEntrieGroup = {
    /**物品组ID */
    group:ItemGroupID;
};
/**子分布Entry */
type ItemGroupEntrieDist = {distribution:ItemGroupEntrie[]};
/**子集合Entry */
type ItemGroupEntrieColl = {collection:ItemGroupEntrie[]};
/**物品Entry的可选项 */
type ItemGroupEntrieOpt = Partial<{
    /**概率 */
    prob:number;
    damage: number|number[];
    "damage-min": number;
    "damage-max": number;
    /**使项目重复生成, 每次创建一个新项目.   
     * [1, 10] 为1~10个  
     */
    count: number|number[];
    "count-min": number;
    "count-max": number;
    /**仅设置最小值而不是最大值将使游戏根据容器或弹药/弹匣容量计算最大费用.   
     * 将 max 设置得太高会将其减少到最大容量. 当设置 max 时, 不设置 min 会将其设置为 0.   
     */
    charges: number|number[]
    "charges-min": number;
    "charges-max": number;
    /**添加为创建项目的内容.   
     * 不检查它们是否可以放入项目中.   
     * 这允许水, 其中包含一本书, 其中包含一个钢架, 其中包含一具尸体.   
     */
    "contents-item": ItemID|ItemID[];
    /**添加为创建项目的内容.   
     * 不检查它们是否可以放入项目中.   
     * 这允许水, 其中包含一本书, 其中包含一个钢架, 其中包含一具尸体.   
     */
    "contents-group": ItemGroupID|ItemGroupID[];
    "ammo-item": string,
    "ammo-group": string,
    "container-group": string,
    "entry-wrapper": string,
    /**如果为 true, 则物品生成时容器将被密封. 
     * @default true
     */
    sealed: boolean;
    /**该项目的有效 itype 变体 ID.  */
    variant: (ItemID);
    artifact: {};
    /**物品可生成的时间点 */
    event: (Festival);
}>;

/**物品快速定义  
 * 物品id 或者 [物品id,概率(100为100%)]  
 */
export type ItemEntrieQuick = ItemID|[ItemID,number]|ItemGroupEntrie;

/**物品组快速定义  
 * 物品组id 或者 [物品组id,概率(100为100%)]  
 */
export type GroupEntrieQuick = ItemGroupID|[ItemGroupID,number]|ItemGroupEntrie;

/**内联物品组 */
export type InlineItemGroup = Omit<ItemGroup,"id"|"type">;