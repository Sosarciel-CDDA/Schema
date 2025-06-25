/**从文件提取的预定义的WeaponCategoryID 列表*/
export const ExtractDefineWeaponCategoryIDList = [
    "AUTOMATIC_RIFLES"            , // 自动步枪
    "AUTOMATIC_PISTOLS"           , // 自动手枪
    "KNIVES"                      , // 刀类
    "BATONS"                      , // 短棍
    "FLAILS"                      , // 连枷
    "MACES"                       , // 钉头锤
    "MEDIUM_SWORDS"               , // 中型剑 One-handed swords above 60cm in length with a cutting edge.
    "LONG_SWORDS"                 , // 长剑 Hand-and-a-half swords, i.e. any sword that can be used one or two-handed fairly easily with a cutting edge.
    "SHORT_SWORDS"                , // 短剑 One-handed swords at or below 60cm in length with a cutting edge, such as machetes.
    "QUARTERSTAVES"               , // 长棍
    "CLAWS"                       , // 爪类
    "SHIVS"                       , // 短刃
    "HOOKING_WEAPONRY"            , // 带钩武器
    "SPEARS"                      , // 长矛
    "UNARMED"                     , // 徒手 Fake category for unarmed - don't apply to any weapons
    "POLEARMS"                    , // 长柄武器
    "FENCING_WEAPONRY"            , // 击剑武器 One-handed straight swords built for thrusting or lightly curved agile sabers.  Cutting edge optional for the former.
    "LONG_THRUSTING_SWORDS"       , // 长刺剑 Hand-and-a-half or two-handed straight swords built for thrusting.  Cutting edge optional.
    "BIONIC_WEAPONRY"             , // 生化武器
    "BIONIC_SWORDS"               , // 生化剑
    "GREAT_SWORDS"                , // 巨剑 Swords with cutting edges that require two hands to use effectively.
    "GREAT_HAMMERS"               , // 巨锤
    "GREAT_AXES"                  , // 巨斧
    "HAND_AXES"                   , // 手斧
    "WHIPS"                       , // 鞭
] as const;
/**从文件提取的预定义的WeaponCategoryID */
export type ExtractDefineWeaponCategoryID = typeof ExtractDefineWeaponCategoryIDList[number];