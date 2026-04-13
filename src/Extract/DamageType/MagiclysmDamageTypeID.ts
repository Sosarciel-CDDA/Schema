/**从文件提取的预定义的MagiclysmDamageTypeID 列表*/
export const ExtractDefineMagiclysmDamageTypeIDList = [
    "poison"                      , // 中毒
    "light"                       , // 光
    "necrotic"                    , // 死灵
    "sonic"                       , // 声波
    "psionic"                     , // 灵能
    "gravity"                     , // 重力
    "nether"                      , // 异界
] as const;
/**从文件提取的预定义的MagiclysmDamageTypeID */
export type ExtractDefineMagiclysmDamageTypeID = typeof ExtractDefineMagiclysmDamageTypeIDList[number];