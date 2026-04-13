/**从文件提取的预定义的MindOverMatterDamageTypeID 列表*/
export const ExtractDefineMindOverMatterDamageTypeIDList = [
    "psi_photokinetic_damage"     , // 聚焦光束
    "psi_telekinetic_damage"      , // 念力
    "psi_telepathic_damage"       , // 心灵
    "psi_teleporter_teleporting_damage", // 空间重组
    "psi_enervation_damage"       , // 弱化系
] as const;
/**从文件提取的预定义的MindOverMatterDamageTypeID */
export type ExtractDefineMindOverMatterDamageTypeID = typeof ExtractDefineMindOverMatterDamageTypeIDList[number];