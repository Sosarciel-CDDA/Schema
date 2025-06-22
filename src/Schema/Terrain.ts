import { CddaID } from "@src/SchemaTest";
import { CharSymbol, Color, DescText, Float, Int, LookLikeID, Time, Volume } from "./GenericDefine";
import { FlagID } from "./Flag";
import { AnyItemID } from "./Item";
import { HarvestID } from "./Harvest";


/**地形ID */
export type TerrainID = CddaID<'TERRAIN'>;

/**地形定义 */
export type Terrain = {
    type: "terrain";
    /**地形唯一ID */
    id: (TerrainID);
    /**地形名称 */
    name: (DescText);
    /**地图符号 */
    symbol: (CharSymbol);
    /**参考相似地形 */
    looks_like?: (LookLikeID);
    /**前景色 */
    color?: (Color);
    /**背景色 */
    bgcolor?: (Color);
    /**移动消耗 */
    move_cost?: Int;
    /**发出的热量(0表示无火) */
    heat_radiation?: Int;
    /**发出的光照 */
    light_emitted?: Int;
    /**内置陷阱ID */
    trap?: string;
    /**最大体积
     * @example "1000 L"
     */
    max_volume?: (Volume);
    /**地形标志
     * @example ["TRANSPARENT", "DIGGABLE"]
     */
    flags?: FlagID[];
    /**连接组 */
    connect_groups?: string[];
    /**可连接到的地形 */
    connects_to?: TerrainID[];
    /**可旋转到的地形 */
    rotates_to?: TerrainID[];
    /**关闭状态地形 */
    close?: (TerrainID);
    /**打开状态地形 */
    open?: (TerrainID);
    /**锁开后变成的地形 */
    lockpick_result?: (TerrainID);
    /**锁开成功消息 */
    lockpick_message?: string;
    /**破坏后变成的地形 */
    bash?: (TerrainID);
    /**解构后变成的地形 */
    deconstruct?: (TerrainID);
    /**别名 */
    alias?: (TerrainID);
    /**可收获物品 */
    harvestable?: (AnyItemID);
    /**检查动作 */
    examine_action?: string;
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
    /**断线钳交互数据 */
    boltcut?: (ToolInteraction);
    /**钢锯交互数据 */
    hacksaw?: (ToolInteraction);
    /**氧乙炔切割交互数据 */
    oxytorch?: (ToolInteraction);
    /**撬动交互数据 */
    prying?: (ToolInteraction);
};



/**交互产物 */
type Byproduct = {
    /**物品ID */
    item: (AnyItemID);
    /**数量(精确值或范围) */
    count: Int | [Int, Int];
};

/**撬动数据 */
type PryingData = {
    /**是否在撬钉子(如果为true则忽略以下所有字段) 
     * @default false
     */
    prying_nails?: boolean;
    /**基础难度 */
    difficulty?: Int;
    /**所需最小撬动等级 */
    prying_level?: Int;
    /**成功时是否发出噪音 
     * @default false
     */
    noisy?: boolean;
    /**是否有警报(成功时会触发警察) */
    alarm?: boolean;
    /**失败时是否有几率触发破坏动作 */
    breakable?: boolean;
    /**失败消息 */
    failure?: (DescText);
};

/**工具交互基础类型 */
type ToolInteraction = {
    /**交互后变成的地形ID */
    result: (TerrainID);
    /**所需时间 
     * @default "1 seconds"
     */
    duration?: (Time);
    /**完成时显示的消息 */
    message?: (DescText);
    /**完成时的声音描述 */
    sound?: (DescText);
    /**产生的物品 */
    byproducts?: Byproduct[];
    /**撬动特定数据 */
    prying_data?: (PryingData);
};

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