/**从文件提取的预定义的ItemCategoryID 列表*/
export const ExtractDefineItemCategoryIDList = [
    "e_files"                     , // 文件
    "software"                    , // 软件
    "guns"                        , // 枪械
    "magazines"                   , // 弹匣
    "ammo"                        , // 弹药
    "weapons"                     , // 武器
    "tools"                       , // 工具
    "clothing"                    , // 服装
    "food"                        , // 食物
    "drugs"                       , // 药物
    "manuals"                     , // 指南
    "books"                       , // 书籍
    "maps"                        , // 地图
    "mods"                        , // 改装模组
    "mutagen"                     , // 诱变剂
    "bionics"                     , // 生化插件
    "currency"                    , // 货币
    "veh_parts"                   , // 载具部件
    "other"                       , // 杂项部件
    "fuel"                        , // 燃料
    "seeds"                       , // 种子
    "ma_manuals"                  , // 武术手册
    "traps"                       , // 陷阱
    "chems"                       , // 化学制品
    "spare_parts"                 , // 零件
    "container"                   , // 容器
    "artifacts"                   , // 神器
    "keys"                        , // 钥匙
    "corpses"                     , // 尸体
    "tool_magazine"               , // 工具料匣
    "armor"                       , // 护甲
    "exosuit"                     , // 动力装甲
    "ITEMS_WORN"                  , // 穿戴物品
    "INTEGRATED"                  , // 身体内置
    "BIONIC_FUEL_SOURCE"          , // 生化插件供能
    "WEAPON_HELD"                 , // 手持武器
] as const;
/**从文件提取的预定义的ItemCategoryID */
export type ExtractDefineItemCategoryID = typeof ExtractDefineItemCategoryIDList[number];