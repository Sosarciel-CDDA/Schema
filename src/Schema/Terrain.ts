import { CddaID, CopyfromVar, Float, Int } from "./GenericDefine";
import { FlagID } from "./Flag";
import { AnyItemID } from "./Item";
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
    /**发出的热量(0表示无火) */
    heat_radiation?: Int;
    /**发出的光照 */
    light_emitted?: Int;
    /**内置陷阱ID */
    trap?: (TrapID);
    /**地形标志
     * @example ["TRANSPARENT", "DIGGABLE"]
     */
    flags?: FlagID[];
    /**锁开后变成的地形 */
    lockpick_result?: (TerrainID);
    /**锁开成功消息 */
    lockpick_message?: string;
    /**别名 */
    alias?: (TerrainID);
    /**可收获物品 */
    harvestable?: (AnyItemID);
    /**转换目标地形 */
    transforms_into?: (TerrainID);
    /**允许的模板ID */
    allowed_template_ids?: string[];
    /**窗帘转换目标 */
    curtain_transform?: (TerrainID);
    /**射击交互数据 */
    shoot?: (ShootData);
    /**季节性收获数据 */
    harvest_by_season?: HarvestSeason[];
    /**液体源数据 */
    liquid_source?: (LiquidSource);
    /**屋顶地形 */
    roof?: (TerrainID);
}>>;


/**射击交互数据 */
type ShootData = {
    /**命中几率(百分比) 
     * @default 100
     */
    chance_to_hit?: Int;
    /**最小伤害减免 */
    reduce_dmg_min?: Int;
    /**最大伤害减免 */
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
    seasons: ("spring" | "summer" | "autumn" | "winter")[];
    /**收获条目ID */
    id: (HarvestID);
};

/**液体源 */
type LiquidSource = {
    /**液体ID */
    id: (AnyItemID);
    /**最低可能温度(摄氏度) */
    min_temp: Float;
    /**液体数量(精确值或范围，省略表示无限) */
    count?: Int | [Int, Int];
};