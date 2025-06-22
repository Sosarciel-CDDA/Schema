import { EmitID } from "./Emit";
import { FurnitureID } from "./Furniture";
import { CharSymbol, Color, DescText, Float, Int, LookLikeID, Time, Volume } from "./GenericDefine";
import { ItemID } from "./Item";
import { InlineItemGroup, ItemGroupID } from "./ItemGroup";
import { SkillID } from "./Skill";
import { TerrainID } from "./Terrain";




type FurnitureOrTerrain = {id:string};
/**地形和家具共有的属性 */
export type CommonToFurnitureAndTerrain<T extends FurnitureOrTerrain> = T&{
    /**显示名称, 会被翻译 */
    name: (DescText);
    /**发出的光照
     * 该地形发出的光照强度. 
     * 10 会使自身格子明亮, 15 会照亮自身与相邻格子, 并微微照亮两格以外的范围. 
     * 示例: 顶灯为 120, 工具灯为 240, 控制台为 10. 
     */
    light_emitted?: Int;
    /**锁开后变成的家具
     * 当该家具被成功撬锁时, 将变成的家具 ID
     */
    lockpick_result?: (T['id']);
    /**锁开成功消息
     * 撬锁成功时显示给玩家的信息. 如果省略, 则显示通用的“锁打开了……”提示
     */
    lockpick_message?: (DescText);
    /**使该类型成为一个或多个连接组的成员
     * 不会使类型自身连接或旋转, 而是作为被动方. 
     * 对于主动连接或旋转方, 参见connects_to和rotates_to
     * 
     * 当前连接组包括:
     * NONE, SAND, WALL, PIT_DEEP, CHAINFENCE, LINOLEUM, WOODFENCE, CARPET,
     * RAILING, CONCRETE, POOLWATER, CLAY, WATER, DIRT, PAVEMENT, ROCKFLOOR,
     * MULCHFLOOR, RAIL, METALFLOOR, WOODFLOOR, INDOORFLOOR, MUD, PAVEMENT_ZEBRA,
     * CLAYMOUND, DIRTMOUND, SANDMOUND, SANDGLASS, SANDPILE, BRICKFLOOR,
     * MARBLEFLOOR, BEACH_FORMATIONS, GRAVELPILE, LIXATUBE
     * 
     * WALL组由WALL和CONNECT_WITH_WALL标志隐含. 
     * INDOORFLOOR组由INDOORS标志隐含. 
     * 可以使用波浪号~作为组名前缀来移除隐含组
     */
    connect_groups?: ConnectGroupType[];
    /**使该类型连接到给定组中的地形类型(参见connect_groups)
     * 这会影响瓦片旋转和连接, 以及带有"AUTO_WALL_SYMBOL"标志的地形绘制的ASCII符号
     * 
     * @example
     * // -, |, X和Y是共享connect_groups和connects_to组的地形. O没有. 
     * // X和Y也有AUTO_WALL_SYMBOL标志. 
     * // X将被绘制为T形交叉(连接到西, 南和东), 
     * // Y将被绘制为水平线(从西到东, 没有连接到南)
     * 
     * -X-    -Y-
     *  |      O
     * 
     * WALL组由WALL和CONNECT_WITH_WALL标志隐含. 
     * 可以使用波浪号~作为组名前缀来移除隐含组
     */
    connects_to?: T['id'][];
    /**使该类型朝向给定组中的地形类型旋转(参见connect_groups)
     * 地形只能根据地形的不同而旋转, 而家具可以根据地形和其他家具的不同而旋转
     * 
     * 这些参数可以用于例如仅在室内侧有窗帘的窗户, 
     * 或根据人行道方向定向交通信号灯
     * 
     * INDOORFLOOR组由DOOR和WINDOW标志隐含. 
     * 可以使用波浪号~作为组名前缀来移除隐含组
     */
    rotates_to?: T['id'][];
    /**游戏中的ASCII符号
     * 符号字符串必须正好是一个字符长. 
     * 也可以是一个包含4个字符串的数组, 分别定义不同季节的符号. 
     * 第一个条目定义春季的符号. 如果不是数组, 则全年使用相同的符号
     */
    symbol: CharSymbol | [CharSymbol, CharSymbol, CharSymbol, CharSymbol];
    /**移动通过的成本
     * 值为0表示不可通过(例如墙). 
     * 不应使用负值. 正值是50移动点的倍数, 
     * 例如值2表示玩家移动通过该地形时使用2*50=100移动点
     */
    move_cost_mod: Int;
    /**舒适度
     * 影响在上面入睡的能力
     * @default 0 // neutral
     * @example -999 // uncomfortable
     * @example 3 // slightly_comfortable
     * @example 5 // comfortable
     * @example 10 // very_comfortable
     */
    comfort?: Int;
    /**睡眠时提供的地面温暖加成
     * 也影响休息场所的舒适度(影响治疗)
     * 原版值不应超过1000
     */
    floor_bedding_warmth?: Int;
    /**坠落伤害减免
     * 如果是负数则为伤害增加
     * 例如落在灌木丛, 软椅, 床垫或沙发上
     */
    fall_damage_reduction?: Int;
    /**从附近火源获得的脚部温暖加成
     * @default 300
     */
    bonus_fire_warmth_feet?: Int;
    /**相似物品的ID
     * 图块加载器将尝试加载该物品的图块, 如果此物品没有图块. 
     * looks_like条目是隐式链接的, 
     * 所以如果'throne'有looks_like 'big_chair', 
     * 而'big_chair'有looks_like 'chair', 
     * 当throne和big_chair的图块不存在时, 将使用chair的图块显示throne. 
     * 如果图块集在looks_like链中找不到任何物品的图块, 
     * 它将默认使用ASCII符号
     */
    looks_like?: (LookLikeID);
    /**前景色
     * "color"定义前景色(无背景色)
     * 与"symbol"值一样, 这可以是一个包含4个条目的数组, 
     * 每个条目是不同季节的颜色
     * 
     * 注意: 必须只使用"color"或"bgcolor"中的一个
     */
    color?: Color | [Color, Color, Color, Color];
    /**背景色
     * "bgcolor"定义纯背景色
     * 与"symbol"值一样, 这可以是一个包含4个条目的数组, 
     * 每个条目是不同季节的颜色
     * 
     * 注意: 必须只使用"color"或"bgcolor"中的一个
     */
    bgcolor?: Color | [Color, Color, Color, Color];
    /**覆盖百分比
     * <30不会阻挡视线
     * (不与投射物, 枪火或其他攻击互动. 仅影响视线)
     */
    coverage?: Int;
    /**最大存储体积
     * 可以用于存储物品的最大体积
     * 可以使用ml和L单位 - "50 ml"或"2 L"
     */
    max_volume?: (Volume);
    /**检查时调用的json函数
     * 参见EXAMINE.md
     */
    examine_action?: any;
    /**关闭时变成的对象
     * 值应该是地形ID(在地形条目内)或家具ID(在家具条目内)
     * 如果定义了其中任何一个, 玩家可以打开/关闭对象
     * 打开/关闭会将受影响图块上的对象更改为给定的对象
     * 
     * @example
     * // 可以有对象"safe_c", 它"open"到"safe_o", 
     * // 而"safe_o"又"close"到"safe_c". 
     * // 这里"safe_c"和"safe_o"是两个具有不同属性的不同地形(或家具)类型
     */
    close?: (T['id']);
    /**打开时变成的对象
     * 值应该是地形ID(在地形条目内)或家具ID(在家具条目内)
     * 如果定义了其中任何一个, 玩家可以打开/关闭对象
     * 打开/关闭会将受影响图块上的对象更改为给定的对象
     */
    open?: (T['id']);
    /**破坏信息
     * 定义玩家或其他东西破坏地形或家具时发生的各种事情
     */
    bash?: (MapBashInfo);
    /**解构信息
     * 定义是否可以解构对象以及结果应该是什么
     */
    deconstruct?: (MapDeconstructInfo);
    /**植物数据 */
    plant_data?: (PlantData);
    /**排放物
     * 地形/家具每10秒将产生的字段的emit_id数组
     */
    emissions?: (EmitID)[];
    /**断线钳交互数据
     * @example
     * {
     *  "result": "furniture_id",    //  (可选) 完成后变成的家具 ID, 默认 f_null
     *  "duration": "1 seconds",     //  (可选) 切割所需时间, 默认 1 秒
     *  "message": "You finish cutting the metal.",  //  (可选) 完成切割时显示的信息
     *  "sound": "Gachunk!",         //  (可选) 完成时的声音描述
     *  "byproducts": [              //  (可选) 完成后生成的物品列表
     *      { "item": "item_id", "count": 100 },
     *      { "item": "item_id", "count": [10, 100] }
     *  ]
     * }
     */
    boltcut?: (ToolInteraction<T>);
    /**钢锯交互数据
     * 用于钢锯的交互数据 (字段含义同 boltcut ) 
     */
    hacksaw?: (ToolInteraction<T>);
    /**氧乙炔切割交互数据
     * 用于气焊枪的交互数据 (字段含义同 boltcut ) 
     */
    oxytorch?: (ToolInteraction<T>);
    /**撬动交互数据
     * 用于撬棍类工具的交互数据
     * @example
     * {
     *  "result": "furniture_id",  //  (可选) 成功撬开后变成的家具 ID, 默认 f_null
     *  "duration": "1 seconds",   //  (可选) 撬开所需时间, 默认 1 秒
     *  "message": "You finish prying the door.",  //  (可选) 撬开成功时显示的信息
     *  "byproducts": [ ... ],     //  (可选) 成功撬开后生成的物品列表
     *  "prying_data": {
     *      "prying_nails": false,   //  (可选, 默认 false) 为 true 时忽略下列所有字段
     *      "difficulty": 0,         //  (可选, 默认 0) 撬开行为的基础难度
     *      "prying_level": 0,       //  (可选, 默认 0) 工具所需的最小撬棍等级
     *      "noisy": false,          //  (可选, 默认 false) 撬开成功是否会产生声音
     *      "alarm": false,          //  (可选) 是否含报警器, 成功后会触发警报
     *      "breakable": false,      //  (可选) 撬开失败时是否有概率触发破坏效果
     *      "failure": "You try to pry the window but fail." //  (可选) 失败时显示的信息
     *  }
     * }
     */
    prying?: (ToolInteraction<T>);
};

/**破坏信息 */
type MapBashInfo = {
    /**最小力量
     * 如果str >= 在str_min和str_max之间的随机数, 则破坏成功
     */
    str_min: Int;
    /**最大力量 */
    str_max: Int;
    /**被阻挡时的最小力量
     * 例如门后的洗衣机
     */
    str_min_blocked?: Int;
    /**被阻挡时的最大力量 */
    str_max_blocked?: Int;
    /**被支撑时的最小力量
     * 如果下方有可以支撑屋顶的东西
     */
    str_min_supported?: Int;
    /**被支撑时的最大力量 */
    str_max_supported?: Int;
    /**破坏音效
     * 字符串会被翻译(并显示给玩家)
     */
    sound?: (DescText);
    /**破坏音效音量 */
    sound_vol?: Int;
    /**失败音效
     * 字符串会被翻译(并显示给玩家)
     */
    sound_fail?: (DescText);
    /**失败音效音量 */
    sound_fail_vol?: Int;
    /**破坏后设置的地形
     * 对于地形中的bash条目是必需的, 
     * 但对于家具中的条目是可选的(默认为无家具)
     */
    ter_set?: (TerrainID);
    /**破坏后设置的家具 */
    furn_set?: (FurnitureID);
    /**从上方破坏后设置的地形
     * 通常使用没有屋顶的地形版本
     */
    ter_set_bashed_from_above?: (TerrainID);
    /**爆炸强度
     * 如果大于0, 破坏对象会导致具有此强度的爆炸
     * 参见game::explosion
     */
    explosive?: Int;
    /**坍塌半径
     * 对于作为帐篷一部分的家具, 
     * 这定义了中心部分的id, 
     * 当帐篷的其他部分被破坏时, 中心部分也会被破坏
     * 中心在给定的"collapse_radius"半径内搜索, 
     * 它应该与帐篷的大小匹配
     */
    collapse_radius?: Int;
    /**帐篷中心
     * 参见 collapse_radius
     */
    tent_centers?: FurnitureID[];
    /**仅用于破坏
     * 如果为true, 仅用于破坏, 不可正常破坏
     */
    destroy_only?: boolean;
    /**同时破坏下方
     * 此地形是下方图块的屋顶, 尝试也破坏它
     * 需要进一步调查
     */
    bash_below?: boolean;
    /**破坏后生成的物品
     * 一个物品组(内联)或一个物品组的id, 
     * 参见ITEM_SPAWN.md. 默认子类型是"collection". 
     * 成功破坏后, 将生成该组中的物品
     */
    items?: InlineItemGroup|ItemGroupID;
};

/**解构信息 */
type MapDeconstructInfo = {
    /**解构后设置的家具
     * 是可选的(默认为无家具), 
     * "ter_set"仅在"deconstruct"条目在地形中使用, 
     * 并且在那里是必需的
     */
    furn_set?: (FurnitureID);
    /**解构后设置的地形 */
    ter_set?: (TerrainID);
    /**相关技能
     * 解构后将练习的技能. 
     * min是获得经验的最低等级, 
     * max是之后不再获得经验但练习仍会发生的等级上限, 
     * 延迟生锈, 
     * multiplier乘以基于min和max平均值的基准经验值. 
     * 如果指定了skill, multiplier默认为1.0, min为0, max为10
     */
    skill?: {
        /**技能ID */
        skill: (SkillID);
        /**经验倍率
         * @default 1.0
         */
        multiplier: Float;
        /**最小等级
         * @default 0
         */
        min: Int;
        /**最大等级
         * @default 10
         */
        max: Int;
    };
    /**解构后生成的物品
     * 一个物品组(内联)或一个物品组的id, 
     * 参见ITEM_SPAWN.md. 默认子类型是"collection". 
     * 解构对象时, 将生成该组中的物品
     */
    items?: InlineItemGroup|ItemGroupID;
};

/**植物数据 */
type PlantData = {
    /**生长后转变为什么
     * 当PLANT家具生长一个阶段时, 或当PLANTABLE家具被种植时
     */
    transform: (FurnitureID);
    /**基础家具
     * PLANT家具的"基础"家具 - 如果没有植物生长在那里, 它会是什么. 
     * 当怪物"吃"植物时使用, 以保留它是什么家具
     */
    base: (FurnitureID);
    /**生长速度倍率
     * 植物生长速度的平坦倍率. 
     * 对于大于1的数字, 需要更长的时间生长, 
     * 对于小于1的数字, 需要更少的时间生长
     */
    growth_multiplier: Float;
    /**收获数量倍率
     * 植物收获数量的平坦倍率. 
     * 对于大于1的数字, 植物会从收获中产生更多的产品, 
     * 对于小于1的数字, 会产生更少的产品
     */
    harvest_multiplier: Float;
};


/**工具交互基础类型 */
type ToolInteraction<T extends FurnitureOrTerrain> = {
    /**交互后变成的家具ID 
     * @default "f_null"
     */
    result?: T['id'];
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
    prying_data?: PryingData;
};

/**交互产物 */
type Byproduct = {
    /**物品ID */
    item: (ItemID);
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

/**连接组的类型 列表 */
const ConnectGroupTypeList = [
    "NONE"            ,
    "SAND"            ,
    "WALL"            ,
    "PIT_DEEP"        ,
    "CHAINFENCE"      ,
    "LINOLEUM"        ,
    "WOODFENCE"       ,
    "CARPET"          ,
    "RAILING"         ,
    "CONCRETE"        ,
    "POOLWATER"       ,
    "CLAY"            ,
    "WATER"           ,
    "DIRT"            ,
    "PAVEMENT"        ,
    "ROCKFLOOR"       ,
    "MULCHFLOOR"      ,
    "RAIL"            ,
    "METALFLOOR"      ,
    "WOODFLOOR"       ,
    "INDOORFLOOR"     ,
    "MUD"             ,
    "PAVEMENT_ZEBRA"  ,
    "CLAYMOUND"       ,
    "DIRTMOUND"       ,
    "SANDMOUND"       ,
    "SANDGLASS"       ,
    "SANDPILE"        ,
    "BRICKFLOOR"      ,
    "MARBLEFLOOR"     ,
    "BEACH_FORMATIONS",
    "GRAVELPILE"      ,
    "LIXATUBE"        ,
] as const;

/**连接组的类型 */
type ConnectGroupType = typeof ConnectGroupTypeList[number];