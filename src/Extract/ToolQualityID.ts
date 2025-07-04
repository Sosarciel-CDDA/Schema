/**从文件提取的预定义的ToolQualityID 列表*/
export const ExtractDefineToolQualityIDList = [
    "CUT"                         , // tool_quality
    "GRASS_CUT"                   , // 割草
    "CUT_FINE"                    , // 精工切割
    "GLARE"                       , // 强光防护
    "SHEAR"                       , // 剪毛
    "CHURN"                       , // 搅拌
    "LEATHER_AWL"                 , // 锥钻
    "SEW_CURVED"                  , // 弯针
    "ANESTHESIA"                  , // 麻醉
    "FISHING_ROD"                 , // 钓鱼
    "FISH_TRAP"                   , // 捕鱼
    "TREE_TAP"                    , // 采脂
    "SMOOTH"                      , // 平整
    "WELD"                        , // 焊接
    "HACK"                        , // 入侵
    "HAMMER"                      , // 锤打
    "HAMMER_FINE"                 , // 精工锤打
    "HAMMER_SOFT"                 , // 软锤
    "SAW_W"                       , // 木材锯切
    "SAW_M"                       , // 金属锯切
    "SAW_M_FINE"                  , // 精工金属锯切
    "COOK"                        , // 食物烹调
    "HOTPLATE"                    , // 轻便电炉
    "BOIL"                        , // 煮沸
    "CONTAIN"                     , // 敞口容器
    "CHEM"                        , // 化工制造
    "SIEVE"                       , // 筛选
    "WINNOW"                      , // 扬谷
    "STRAIN"                      , // 筛滤
    "SMOKE_PIPE"                  , // 吸烟
    "DISTILL"                     , // 蒸馏
    "AXE"                         , // 伐木
    "DIG"                         , // 挖掘
    "WRENCH"                      , // 扳动螺栓
    "WRENCH_FINE"                 , // 精工扳动螺栓
    "SCREW"                       , // 拧动螺丝
    "SCREW_FINE"                  , // 精工拧动螺丝
    "BUTCHER"                     , // 屠宰
    "DRILL"                       , // 钻孔
    "DRILL_ROCK"                  , // 石钻
    "PRY"                         , // 撬棍
    "PRYING_NAIL"                 , // 撬钉
    "PUNCH"                       , // 桯钻
    "WRITE"                       , // 铅笔
    "LIFT"                        , // 起重
    "JACK"                        , // 千斤顶
    "SELF_JACK"                   , // 自身千斤顶
    "HOSE"                        , // 抽取
    "CHISEL"                      , // 雕凿
    "CHISEL_WOOD"                 , // 木凿
    "SEW"                         , // 缝纫
    "KNIT"                        , // 针织
    "PULL"                        , // 拆弹
    "ANVIL"                       , // 铁砧
    "ANALYSIS"                    , // 分析
    "CONCENTRATE"                 , // 浓缩
    "SEPARATE"                    , // 分离
    "FINE_DISTILL"                , // 精密蒸馏
    "CHROMATOGRAPHY"              , // 层析
    "LUTHIER"                     , // 制琴
    "SNOW_MAKING"                 , // 造雪
    "GRIND"                       , // 研磨
    "FINE_GRIND"                  , // 精工研磨
    "REAM"                        , // 铰孔
    "FILE"                        , // 锉工
    "VISE"                        , // 夹具
    "PRESSURIZATION"              , // 加压
    "LOCKPICK"                    , // 撬锁
    "EXTRACT"                     , // 萃取
    "FILTER"                      , // 精工过滤
    "SUSPENDING"                  , // 悬吊
    "ROPE"                        , // 绳索
    "SURFACE"                     , // 干净表面
    "WHEEL_FAST"                  , // 轮胎紧固
    "JUMPSTART"                   , // 电力跨接
    "FABRIC_CUT"                  , // 面料切割
    "OVEN"                        , // 烤箱烹饪
    "GUN"                         , // 枪械
    "RIFLE"                       , // 步枪
    "SHOTGUN"                     , // 霰弹枪
    "SMG"                         , // 冲锋枪
    "PISTOL"                      , // 手枪
    "CUT_GLASS"                   , // 玻璃切割
    "MOP"                         , // 拖地
    "BLOW_HOT_AIR"                , // 热风
    "THREAD_CUT"                  , // 套螺纹
    "THREAD_TAP"                  , // 攻螺纹
] as const;
/**从文件提取的预定义的ToolQualityID */
export type ExtractDefineToolQualityID = typeof ExtractDefineToolQualityIDList[number];