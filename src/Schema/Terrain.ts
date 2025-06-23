import { CddaID, CopyfromVar, Float, Int, SeasonLc } from "./GenericDefine";
import { FlagID } from "./Flag";
import { ItemID } from "./Item";
import { HarvestID } from "./Harvest";
import { TrapID } from "./Trap";
import { CommonToFurnitureAndTerrain } from "./CommonToFurnitureAndTerrain";


/**地形ID */
export type TerrainID = CddaID<'TER'>;

/**地形定义 */
export type Terrain = CopyfromVar<CommonToFurnitureAndTerrain<{
    type: "terrain";
    /**地形唯一ID */
    id: (TerrainID);
    /**移动消耗 */
    move_cost?: Int;
    /**该地形发出的热量值.   
     * 数值为 0 表示无火 (即不具备此属性) .   
     * 数值为 1 表示相当于强度为 1 的火焰.   
     */
    heat_radiation?: Int;
    /**内置陷阱ID  
     * 例如: 地形 t_pit 内建陷阱为 tr_pit  
     * 游戏中所有使用 t_pit 的格子也就自动包含该陷阱  
     * 两者不可分离 (玩家无法拆除该陷阱, 修改地形将移除其绑定陷阱)   
     * 内建陷阱无法与其它陷阱共存 (无论是由玩家布设还是地图生成)   
     */
    trap?: (TrapID);
    /**地形标志  
     * @example ["TRANSPARENT", "DIGGABLE"]  
     */
    flags?: FlagID[];
    /**别名 */
    alias?: (TerrainID);
    /**可收获物品 */
    harvestable?: (ItemID);
    /**用于地形状态转换  
     * 若设置, 必须为合法地形 ID  
     * 常见用法包括:   
     * 采集水果后转换为已收获状态  
     * 配合 HARVESTED 标志和 harvest_by_season, 在季节更替时切换为结果期状态  
     */
    transforms_into?: (TerrainID);
    /**允许某纳米制造机创建的模板 ID 列表 */
    allowed_template_ids?: string[];
    /**当使用窗帘相关的 examine_action 且选择撕下窗帘时, 转换为此指定的地形 ID */
    curtain_transform?: (TerrainID);
    /**描述该地形对远程射击的反应 */
    shoot?: (ShootData);
    /**每季采集配置数组.   
     * 指定在哪些季节进行收获, 以及使用的 harvest 条目 ID  
     * @example  
     * {  
     *  "harvest_by_season": [  
     *      {
     *          "seasons": ["spring", "summer", "autumn", "winter"],
     *          "harvest":"id": "blackjack_harv"
     *      }
     *  ]  
     * }  
     */
    harvest_by_season?: HarvestSeason[];
    /**表示该地形或家具可供取液的设置对象 */
    liquid_source?: (LiquidSource);
    /**当前地形上方对应的屋顶地形 ID */
    roof?: (TerrainID);
}>>;


/**射击交互数据 */
type ShootData = {
    /**命中几率(百分比)   
     * @default 100  
     */
    chance_to_hit?: Int;
    /**击中时的最小伤害减免 */
    reduce_dmg_min?: Int;
    /**击中时的最大伤害减免 */
    reduce_dmg_max?: Int;
    /**激光最小伤害减免 */
    reduce_dmg_min_laser?: Int;
    /**激光最大伤害减免 */
    reduce_dmg_max_laser?: Int;
    /**破坏所需最小伤害 */
    destroy_dmg_min?: Int;
    /**破坏所需最大伤害 */
    destroy_dmg_max?: Int;
    /**激光是否无法破坏物体   
     * @default false  
     */
    no_laser_destroy?: boolean;
};

/**季节性收获 */
type HarvestSeason = {
    /**可收获的季节 */
    seasons: SeasonLc[];
    /**收获条目ID */
    id: (HarvestID);
};

/**液体源 */
type LiquidSource = {
    /**液体ID */
    id: (ItemID);
    /**最低可能温度(摄氏度)   
     * 仅适用于 "water_source" 动作  
     */
    min_temp: Float;
    /**液体数量(精确值或范围, 省略表示无限)  
     * 若为有限液源, 则此处表示总量 (可为单值或区间) ;   
     * 用于 "finite_water_source"  
     */
    count?: Int | [Int, Int];
};