import { ExtractDefineToolQualityID } from "Extract";
import { CddaID, DescText } from "./GenericDefine";

/**工具品质ID */
export type ToolQualityID = CddaID<"TQ">|DefineToolQualityID;

/**工具品质 */
export type ToolQuality = {
    /**工具品质类型 */
    type: "tool_quality";
    /**在游戏中查看具有该 id 的条目时, 选项卡中使用的描述 */
    name: (DescText);
    /**工具品质唯一ID */
    id: (ToolQualityID);
    /**不是必需的. 可能使用该物品执行的特殊操作.   
     * [ 物品的最小品质等级, [...可进行的动作]]  
     */
    usages?: [ number, ToolQualityID[] ][];
}


/**预定义的工具品质ID 列表 */
export const DefineToolQualityIDList = [
    "CUT"            , // 切割
    "GRASS_CUT"      , // 割草
    "CUT_FINE"       , // 精细切割
    "GLARE"          , // 防眩光
    "SHEAR"          , // 剪切
    "CHURN"          , // 搅拌
    "LEATHER_AWL"    , // 锥子
    "SEW_CURVED"     , // 曲针
    "ANESTHESIA"     , // 麻醉
    "FISHING_ROD"    , // 钓鱼
    "FISH_TRAP"      , // 捕鱼
    "TREE_TAP"       , // 树木开孔
    "SMOOTH"         , // 平滑
    "WELD"           , // 焊接
    "HAMMER"         , // 锤击
    "HAMMER_FINE"    , // 精细锤击
    "HAMMER_SOFT"    , // 软锤击
    "SAW_W"          , // 锯木
    "SAW_M"          , // 锯金属
    "SAW_M_FINE"     , // 精细锯金属
    "COOK"           , // 烹饪食物
    "BOIL"           , // 煮沸
    "CONTAIN"        , // 容纳
    "CHEM"           , // 制作化学品
    "SIEVE"          , // 筛选
    "STRAIN"         , // 过滤
    "SMOKE_PIPE"     , // 吸烟
    "DISTILL"        , // 蒸馏
    "AXE"            , // 砍树
    "DIG"            , // 挖掘
    "WRENCH"         , // 转螺栓
    "WRENCH_FINE"    , // 精细转螺栓
    "SCREW"          , // 螺丝刀
    "SCREW_FINE"     , // 精细螺丝刀
    "BUTCHER"        , // 屠宰
    "DRILL"          , // 钻孔
    "DRILL_ROCK"     , // 钻石
    "PRY"            , // 撬动
    "PRYING_NAIL"    , // 撬钉子
    "PUNCH"          , // 冲压
    "WRITE"          , // 铅笔
    "LIFT"           , // 举起
    "JACK"           , // 千斤顶
    "SELF_JACK"      , // 自千斤顶
    "HOSE"           , // 虹吸
    "CHISEL"         , // 凿子
    "CHISEL_WOOD"    , // 木凿
    "SEW"            , // 缝纫
    "KNIT"           , // 编织
    "PULL"           , // 拔子弹
    "ANVIL"          , // 铁砧
    "ANALYSIS"       , // 分析
    "CONCENTRATE"    , // 浓缩
    "SEPARATE"       , // 分离
    "FINE_DISTILL"   , // 精细蒸馏
    "CHROMATOGRAPHY" , // 色谱法
    "GRIND"          , // 研磨
    "FINE_GRIND"     , // 精细研磨
    "REAM"           , // 铰孔
    "FILE"           , // 锉刀
    "VISE"           , // 夹具
    "PRESSURIZATION" , // 增压
    "LOCKPICK"       , // 开锁
    "EXTRACT"        , // 提取
    "FILTER"         , // 过滤
    "SUSPENDING"     , // 悬浮
    "ROPE"           , // 绳索
    "SURFACE"        , // 清洁表面
    "WHEEL_FAST"     , // 快速装轮
    "JUMPSTART"      , // 跳线启动
    "FABRIC_CUT"     , // 布料切割
    "OVEN"           , // 烤箱烹饪
    "GUN"            , // 枪
    "RIFLE"          , // 步枪
    "SHOTGUN"        , // 霰弹枪
    "SMG"            , // 冲锋枪
    "PISTOL"         , // 手枪
    "CUT_GLASS"      , // 切割玻璃
    "MOP"            , // 拖把
    "BLOW_AIR"       , // 吹气
    "BLOW_HOT_AIR"   , // 吹热气
    "THREAD_CUT"     , // 切割线程
    "THREAD_TAP"     , // 攻螺纹
    "MANA_FOCUS"     , // 魔力聚焦
    "MANA_INFUSE"    , // 魔力注入
    "MANA_WEAVE"     , // 魔力编织
] as const;
/**预定义的工具品质ID */
export type DefineToolQualityID = typeof DefineToolQualityIDList[number]|ExtractDefineToolQualityID;