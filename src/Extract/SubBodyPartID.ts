/**从文件提取的预定义的SubBodyPartID 列表*/
export const ExtractDefineSubBodyPartIDList = [
    "sub_limb_debug"              , // debug limb should never be seen
    "sub_limb_debug_tail"         , // debug limb for debug tail
    "torso_upper"                 , // 上身
    "torso_neck"                  , // 脖子
    "torso_lower"                 , // 下腹
    "torso_hanging_front"         , // 前胸
    "torso_hanging_back"          , // 后背
    "leg_draped_l"                , // 左腿（外披）
    "leg_draped_r"                , // 右腿（外披）
    "torso_waist"                 , // 腰部
    "arm_shoulder_r"              , // 右肩
    "arm_upper_r"                 , // 右上臂
    "arm_elbow_r"                 , // 右肘
    "arm_lower_r"                 , // 右前臂
    "arm_shoulder_l"              , // 左肩
    "arm_upper_l"                 , // 左上臂
    "arm_elbow_l"                 , // 左肘
    "arm_lower_l"                 , // 左前臂
    "leg_hip_r"                   , // 右髋部
    "leg_upper_r"                 , // 右大腿
    "leg_knee_r"                  , // 右膝
    "leg_lower_r"                 , // 右小腿
    "leg_hip_l"                   , // 左髋部
    "leg_upper_l"                 , // 左大腿
    "leg_knee_l"                  , // 左膝
    "leg_lower_l"                 , // 左小腿
    "hand_wrist_r"                , // 右腕
    "hand_palm_r"                 , // 右掌
    "hand_back_r"                 , // 右手背
    "hand_fingers_r"              , // 右手指
    "hand_wrist_l"                , // 左腕
    "hand_palm_l"                 , // 左掌
    "hand_back_l"                 , // 左手背
    "hand_fingers_l"              , // 左手指
    "eyes_left"                   , // 左眼
    "eyes_right"                  , // 右眼
    "mouth_lips"                  , // 嘴唇
    "mouth_nose"                  , // 鼻子
    "mouth_cheeks"                , // 面颊
    "mouth_chin"                  , // 下巴
    "foot_sole_l"                 , // 左脚底
    "foot_arch_l"                 , // 左足弓
    "foot_toes_l"                 , // 左脚趾
    "foot_ankle_l"                , // 左踝
    "foot_heel_l"                 , // 左脚跟
    "foot_sole_r"                 , // 右脚底
    "foot_arch_r"                 , // 右足弓
    "foot_toes_r"                 , // 右脚趾
    "foot_ankle_r"                , // 右踝
    "foot_heel_r"                 , // 右脚跟
    "head_forehead"               , // 前额
    "head_crown"                  , // 头顶
    "head_nape"                   , // 后颈
    "head_throat"                 , // 喉部
    "head_ear_r"                  , // 右耳
    "head_ear_l"                  , // 左耳
] as const;
/**从文件提取的预定义的SubBodyPartID */
export type ExtractDefineSubBodyPartID = typeof ExtractDefineSubBodyPartIDList[number];