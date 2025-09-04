/**从文件提取的预定义的BodyPartID 列表*/
export const ExtractDefineBodyPartIDList = [
    "torso"                       , // 躯干
    "big_head"                    , // 大头
    "head"                        , // 头部
    "eyes"                        , // 眼部
    "mouth"                       , // 嘴部
    "arm_l"                       , // 左臂
    "arm_r"                       , // 右臂
    "hand_l"                      , // 左手
    "hand_r"                      , // 右手
    "leg_l"                       , // 左腿
    "leg_r"                       , // 右腿
    "foot_l"                      , // 左脚
    "foot_r"                      , // 右脚
    "debug_tail"                  , // 调试用尾巴
] as const;
/**从文件提取的预定义的BodyPartID */
export type ExtractDefineBodyPartID = typeof ExtractDefineBodyPartIDList[number];