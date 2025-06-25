/**从文件提取的预定义的FaultFixeID 列表*/
export const ExtractDefineFaultFixeIDList = [
    "mend_handle_duct_tape"       , // 用胶带粘好把手。
    "mend_handle_glue"            , // 粘合把手裂隙。
    "mend_handle_replace"         , // 替换把手。
    "mend_handle_long_duct_tape"  , // 用胶带粘好把手。
    "mend_handle_long_glue"       , // 粘合把手裂隙。
    "mend_handle_long_replace"    , // 替换把手。
    "mend_blade_grind"            , // 打磨边缘。
    "mend_spearhead_grind"        , // 打磨矛头。
    "mend_spearhead_straighten"   , // 把矛鞘拉直。
    "mend_staff_duct_tape"        , // 用胶带修复一切！
    "mend_staff_glue"             , // 粘合裂缝。
    "mend_staff_short_replace"    , // 替换把手。
    "mend_staff_long_duct_tape"   , // 用胶带修复一切！
    "mend_staff_long_glue"        , // 粘合裂缝。
    "mend_staff_long_replace"     , // 替换把手。
] as const;
/**从文件提取的预定义的FaultFixeID */
export type ExtractDefineFaultFixeID = typeof ExtractDefineFaultFixeIDList[number];