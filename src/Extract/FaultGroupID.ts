/**从文件提取的预定义的FaultGroupID 列表*/
export const ExtractDefineFaultGroupIDList = [
    "handle_short"                , // Mechanical damage of a short handle (60 cm or less)
    "handle_long"                 , // Mechanical damage of a long shaft (60+ cm)
    "blade_general"               , // Mechanical damage of any blade, from a sword to a knife
    "blade_general_no_tip"        , // Mechanical damage of a blade that do not have a tip, like cleaver
    "spearhead"                   , // Mechanical damage of a bespoke spearhead or something that replaces it, but generally deal damage by thrust, like pitchfork
    "staff_short"                 , // Mechanical damage of a short wooden staff (120 cm or smaller)
    "staff_long"                  , // Mechanical damage of a long staff (120+ cm)
    "electronic_general"          , // faults that can happen when item is dropped into the water or fried by EMP. If GAME_EMP option is used, EMP can only apply fault_emp_reboot
] as const;
/**从文件提取的预定义的FaultGroupID */
export type ExtractDefineFaultGroupID = typeof ExtractDefineFaultGroupIDList[number];