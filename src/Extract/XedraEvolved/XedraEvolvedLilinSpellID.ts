/**从文件提取的预定义的XedraEvolvedLilinSpellID 列表*/
export const ExtractDefineXedraEvolvedLilinSpellIDList = [
    "lilin_drain_ruach_melee_spell", // 精萃汲取 触摸受害者，汲取他们一部分的灵息为你所用。此能力只对活物有效，且与人类相比，动物提供的灵息微乎其微。
    "lilin_drain_ruach_short_ranged_spell", // 饮灵者 远距离汲取目标的灵息。此能力只对活物有效，且与人类相比，动物提供的灵息微乎其微。
    "lilin_drain_ruach_long_ranged_spell", // 饮灵者 远距离汲取目标的灵息。此能力只对活物有效，且与人类相比，动物提供的灵息微乎其微。
    "lilin_evil_eye_spell"        , // 憎恶邪眼 对附近单个目标降下厄运诅咒。
    "lilin_aoe_daze_spell"        , // 夜枭之啼 发出刺耳的啼叫，使附近所有的敌我单位晕头转向。此举必然会造成巨大的声响。
    "lilin_aoe_daze_spell_real"   , // Cry of the Night-bird Real The actual Cry of the Night-bird that applies the effect.  It's a bug if you have it.
    "lilin_blinding_target_spell" , // 深栖夜色之中 使单个目标与光明隔绝。此能力只在夜晚生效，且只能在室内或远离城市的室外使用。
    "lilin_mesmerize_target_spell", // 无知无觉 蛊惑单个人类、精类或禽类目标，使其陷入昏沉或漫无目的地游荡。受到任何伤害都会解除此效果。
    "lilin_aoe_line_disease_spell", // 掀起黑夜之风 召唤充满瘟疫的瘴气来感染你的敌人。这种超自然疾病甚至能侵袭丧尸或更奇异的生物。
    "lilin_disease_enhancement_damage_spell", // 其为瘟疫所噬 强化“释放夜风”所产生的瘴气，对目标造成严重伤害并使其残废。
    "lilin_avoid_sleep_spell"     , // 不眠不休 消耗灵息以缓解你的困意。
    "lilin_change_weather_fog_spell", // 密云遮天 操控天气，从空气中汲取水分，形成笼罩郊野的浓雾。再次启动可解除你对天气的控制。
    "lilin_speed_dodge_boost_spell", // 收获昔日之风 消耗一些灵息，在短时间内大幅提升你的速度。
    "lilin_instant_heal_spell"    , // 月主夜权 在夜晚的月光下，你可以大幅加快你的治疗速度，在片刻间弥合严重创伤。此能力需要月光直射；云层、雨水或身处室内都会阻止其生效。
] as const;
/**从文件提取的预定义的XedraEvolvedLilinSpellID */
export type ExtractDefineXedraEvolvedLilinSpellID = typeof ExtractDefineXedraEvolvedLilinSpellIDList[number];