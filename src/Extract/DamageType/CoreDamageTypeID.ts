/**从文件提取的预定义的CoreDamageTypeID 列表*/
export const ExtractDefineCoreDamageTypeIDList = [
    "bash"                        , // 钝击
    "cut"                         , // damage_type
    "stab"                        , // 刺击
    "bullet"                      , // 射击
    "acid"                        , // 酸蚀
    "electric"                    , // 电击
    "heat"                        , // 火焰
    "cold"                        , // 冰冻
    "biological"                  , // 生化
    "pure"                        , // 真实
] as const;
/**从文件提取的预定义的CoreDamageTypeID */
export type ExtractDefineCoreDamageTypeID = typeof ExtractDefineCoreDamageTypeIDList[number];