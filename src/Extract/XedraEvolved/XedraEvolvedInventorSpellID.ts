/**从文件提取的预定义的XedraEvolvedInventorSpellID 列表*/
export const ExtractDefineXedraEvolvedInventorSpellIDList = [
    "firmament_driver"            , // 苍穹推击 推开敌人，它并不是很有效，但有时还是可以派上用场。
    "cable_whip"                  , // 震颤鞭打 利用充能缆线传导能量，发动一次小型鞭击。
] as const;
/**从文件提取的预定义的XedraEvolvedInventorSpellID */
export type ExtractDefineXedraEvolvedInventorSpellID = typeof ExtractDefineXedraEvolvedInventorSpellIDList[number];