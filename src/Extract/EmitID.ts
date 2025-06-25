/**从文件提取的预定义的EmitID 列表*/
export const ExtractDefineEmitIDList = [
    "emit_tobacco_trail"          , // Intermittent cigarette smoke (example: lit cigarette)
    "emit_joint_trail"            , // Intermittent joint smoke (example: lit cigarette)
    "emit_AEP_SMOKE"              , // Intermittent smoke from an artifact
    "emit_smoke_blast"            , // Large blast of smoke (example: smoker zombie explosion)
    "emit_smoke_plume"            , // Small plume of thick smoke (example: muzzle smoke)
    "emit_small_smoke_plume"      , // Small plume of thick smoke (example: muzzle smoke)
    "emit_smaller_smoke_plume"    , // Small plume of thick smoke (example: smallarms muzzle smoke)
    "emit_smoke_stream"           , // Steady stream of thick smoke (example: smoke bomb)
    "emit_tear_gas_stream"        , // Steady stream of tear gas (example: tear gas canister)
    "emit_tear_gas_blast"         , // Large blast of tear gas (example: tear gas canister)
    "emit_toxic_blast"            , // Large blast of toxic gas (example: bloated zombie explosion)
    "emit_toxic_leak"             , // Slow infrequent leak of toxic gas (example: bloated zombie movement)
    "emit_toxic_stream"           , // Steady stream of toxic gas
    "emit_relax_gas_blast"        , // Large blast of relaxation gas (similar to riot control bot)
    "emit_relax_gas_leak"         , // Periodic leaking of relaxation gas
    "emit_tear_gas_leak"          , // Periodic leaking of tear gas
    "emit_tear_gas_toad"          , // Periodic leaking of tear gas
    "emit_tindalos_gas_leak"      , // Slow infrequent leak of tindalos gas (example: hound of tindalos movement)
    "emit_toxic_cloud"            , // Small cloud of toxic gas emitted infrequently
    "emit_toxic_belch"            , // Large cloud of toxic gas emitted infrequently
    "emit_acid_drop"              , // Small amount of strong acid - will need more to melt anything
    "emit_shadow_field"           ,
    "emit_spark"                  , // small sparks
    "emit_shock_burst"            , // small cloud of lightning
    "emit_shock_burst_rat"        , // small cloud of lightning
    "emit_shock_cloud"            , // Thick cloud of lightning (example: incandescent husk)
    "emit_shock_cloud_big"        , // Large cloud of lightning (example: supercharged incandescent husk)
    "emit_cold_air2_stream"       ,
    "emit_cold_air2_blast"        ,
    "emit_hot_air2_stream"        ,
    "emit_pollen_stream"          ,
    "emit_hot_air2_blast"         ,
    "emit_heater_vehicle"         ,
    "emit_cooler_vehicle"         ,
    "emit_hot_air_migo_seep"      ,
    "emit_hot_air_migo_blast"     ,
    "emit_migo_atmosphere"        ,
    "emit_glimmer"                ,
    "emit_plasma"                 ,
    "emit_plasma_continuously"    ,
    "emit_fungicidal_stream"      ,
    "emit_insecticidal_stream"    ,
    "emit_small_fungicidal_stream",
    "emit_small_insecticidal_stream",
    "emit_fungal_haze_plume"      ,
    "emit_fungal_leak"            ,
    "emit_fungal_blast"           ,
    "emit_hallucinogenic_spores"  , // Slow infrequent leak of hallucinogenic cloud
    "emit_hallucinogenic_spores_blast",
    "emit_swamp_gas_leak"         ,
    "emit_fog_plume"              ,
    "emit_extinguisher_burst"     ,
    "emit_rad_leak"               ,
    "emit_rad_cloud"              , // Negative, negative, it's a large reactor leak, very dangerous
    "emit_web_small"              , // Occasionally leave a web, not too often because we spawn in mixed groups
    "emit_sludge_puddle"          , // Infrequent emission of sludge along the ground, made because sludge trail is too frequent
    "emit_tiny_fire"              ,
    "emit_clairvoyant"            ,
    "emit_bees"                   , // Periodic swarm of bees
    "emit_monster_gas_1"          ,
    "emit_monster_gas_2"          ,
] as const;
/**从文件提取的预定义的EmitID */
export type ExtractDefineEmitID = typeof ExtractDefineEmitIDList[number];