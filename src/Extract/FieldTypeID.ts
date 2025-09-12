/**从文件提取的预定义的FieldTypeID 列表*/
export const ExtractDefineFieldTypeIDList = [
    "fd_blood"                    , // 少量鲜血
    "fd_bile"                     , // 少量胆汁
    "fd_darkness"                 , // 黑暗
    "fd_gibs_flesh"               , // 零星血肉
    "fd_gibs_veggy"               , // 零星枝叶
    "fd_web"                      , // 稀疏蛛网
    "fd_web_nostick"              , // 稀疏蛛丝
    "fd_void_web"                 , // 星光蛛网
    "fd_slime"                    , // 黏液痕迹
    "fd_acid"                     , // 少量酸液
    "fd_sap"                      , // 少量树汁
    "fd_sludge"                   , // 薄污泥痕
    "fd_fire"                     , // 火苗
    "fd_fire_FAKE"                , // 微光琥珀
    "fd_extinguisher"             , // 灭火剂薄雾
    "fd_rubble"                   , // 碎石残留
    "fd_biolum"                   , // 微光
    "fd_smoke"                    , // 轻烟
    "fd_toxic_gas"                , // 稀薄毒气
    "fd_pollen_triffid"           , // 稀薄毒气
    "fd_tear_gas"                 , // 稀薄毒气
    "fd_nuke_gas"                 , // 稀薄毒气
    "fd_gas_vent"                 , // 毒气涌出
    "fd_tindalos_rift"            , // 棱角涟漪
    "fd_fire_vent"                , // 火焰涌出
    "fd_shadow"                   , // 幽灵
    "fd_flame_burst"              , // noun
    "fd_electricity"              , // 电火花
    "fd_fatigue"                  , // 奇异涟漪
    "fd_push_items"               , // 推拉物体
    "fd_shock_vent"               , // 电流涌出
    "fd_acid_vent"                , // 酸液涌出
    "fd_plasma"                   , // 微弱等离子体
    "fd_laser"                    , // 微弱光束
    "fd_spotlight"                , // 光线聚焦
    "fd_dazzling"                 , // 炫目光芒
    "fd_blood_veggy"              , // 少量树脂
    "fd_blood_insect"             , // 少量虫血
    "fd_blood_invertebrate"       , // 中量血淋巴
    "fd_gibs_insect"              , // 昆虫残碎
    "fd_gibs_invertebrate"        , // 零星烂肉
    "fd_cigsmoke"                 , // 烟草薄雾
    "fd_weedsmoke"                , // 大麻烟薄雾
    "fd_cracksmoke"               , // 可卡因薄雾
    "fd_methsmoke"                , // 安非他命薄雾
    "fd_tindalos_gas"             , // 污浊薄雾
    "fd_incendiary"               , // 烟雾
    "fd_relax_gas"                , // 稀薄毒气
    "fd_swamp_gas"                , // 沼气
    "fd_fog"                      , // 薄雾
    "fd_fungal_haze"              , // 稀薄毒气
    "fd_hallucinogenic_spores"    , // 致幻气雾
    "fd_cold_air1"                , // 冷空气1
    "fd_cold_air2"                , // 冷空气2
    "fd_cold_air3"                , // 冷空气3
    "fd_cold_air4"                , // 冷空气4
    "fd_hot_air1"                 , // 热空气1
    "fd_hot_air2"                 , // 热空气2
    "fd_hot_air3"                 , // 热空气3
    "fd_hot_air4"                 , // 热空气4
    "fd_hot_air_sauna"            , // 热蒸汽
    "fd_migo_atmosphere"          , // 臭气
    "fd_fungicidal_gas"           , // 抗真菌薄雾
    "fd_insecticidal_gas"         , // 杀虫剂薄雾
    "fd_smoke_vent"               , // 烟雾涌出
    "fd_electricity_unlit"        , // 电火花
    "fd_direction"                , // 检测到物体
    "fd_clairvoyant"              , // 透视
    "fd_bee_swarm"                , // 一些蜜蜂
    "fd_churned_earth"            , // 土地拱起
    "fd_last_known"               , // 最后已知位置
    "fd_nm_monster_gas_1"         , // 发光孢子气体
    "fd_nm_monster_gas_2"         , // 发光气体
    "fd_construction_site"        , // 建筑工地
    "fd_congealed_light"          , // 凝固的光斑
    "emit_congealed_light"        , // 
    "LIXA_illuminated"            , // 
    "LIXA_decompressed"           , // 
    "fd_LIXA_decompression"       , // 解压空间
    "LIXA_unfolded_eff"           , // 
] as const;
/**从文件提取的预定义的FieldTypeID */
export type ExtractDefineFieldTypeID = typeof ExtractDefineFieldTypeIDList[number];