/**从文件提取的预定义的XedraEvolvedRaceParaclesianSpellID 列表*/
export const ExtractDefineXedraEvolvedRaceParaclesianSpellIDList = [
    "cloud_of_steam_sylph"        , // 蒸汽之云 你带来一团沸腾的水汽。
    "cloud_of_steam_undine"       , // 蒸汽之云 你带来一团沸腾的水汽。
    "create_light_sylph"          , // 轻度 创造一盏神奇的魔法阅读灯。
    "create_light_salamander"     , // 轻度 创造一盏神奇的魔法阅读灯。
    "paraclesian_spell_dodge_bonus_arvore", // 风在吹拂，柳条弯弯 如掠风，似柔柳，此法术能让你更轻易地避开攻击。在人造地形上，其效果会有所<color_yellow>减弱</color>。
    "paraclesian_spell_dodge_bonus_sylph", // 风在吹拂，柳条弯弯 如掠风，似柔柳，此法术能让你更轻易地避开攻击。在室内，其效果会有所<color_yellow>减弱</color>。
] as const;
/**从文件提取的预定义的XedraEvolvedRaceParaclesianSpellID */
export type ExtractDefineXedraEvolvedRaceParaclesianSpellID = typeof ExtractDefineXedraEvolvedRaceParaclesianSpellIDList[number];