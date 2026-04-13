/**从文件提取的预定义的XedraEvolvedDamageTypeID 列表*/
export const ExtractDefineXedraEvolvedDamageTypeIDList = [
    "xe_cold_iron_cut_damage"     , // 寒铁斩击
    "xe_cold_iron_bash_damage"    , // 寒铁钝击
    "xe_cold_iron_stab_damage"    , // 寒铁刺击
    "xe_shadow_damage"            , // 鋒利暗影
] as const;
/**从文件提取的预定义的XedraEvolvedDamageTypeID */
export type ExtractDefineXedraEvolvedDamageTypeID = typeof ExtractDefineXedraEvolvedDamageTypeIDList[number];