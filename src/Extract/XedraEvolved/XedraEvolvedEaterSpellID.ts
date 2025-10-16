/**从文件提取的预定义的XedraEvolvedEaterSpellID 列表*/
export const ExtractDefineXedraEvolvedEaterSpellIDList = [
    "eat_dreamdross"              , // 食用浮梦残渣 你吃下浮梦残渣来获取魔力。
    "eat_more_dreamdross"         , // 食用更多浮梦残渣 你一次性吃下更多浮梦残渣。
    "eat_dreamdross_ingot"        , // 食用浮梦锭 你一次吸收不了太多的浮梦残渣，在恢复魔力值之外它还直接改变着你的身体，使你更强壮更健康。这可能是你生命中吃过的最好吃的东西了。
    "blood_boil"                  , // 沸血术 随着一声古代咒语，目标的血液温度开始危险地升高。
    "self_healing"                , // 梦愈治疗 消耗一些浮梦残渣并修复自身伤害。
    "supercoffee"                 , // 浮梦恢复疲劳。 吸收一些浮梦残渣并治愈自己的疲劳。
    "spring_heeled_leap"          , // 弹簧跳 魔力把你的脚推离地面，把你跃起离地面几米。
    "spell_rage"                  , // 盲目盛怒 完美的憎恨。
    "spell_stamina_wonder"        , // 循环 不要停下来。
    "spell_night_vision"          , // 黑暗视觉 增强你的视力，使你在夜间看得像白天一样清楚。
    "spell_dodge"                 , // 闪避 避开他们的攻击。
    "spell_endurance"             , // 忍耐 承受住打击。别让这个世界杀了你。
    "spell_invisibility"          , // 隐藏 别让它们发现你。
    "spell_clairvoyance"          , // 思维展开 闭上眼睛来看清一切。
    "spell_melee_damage"          , // 物理工具 你的身体是一台毁灭机器，请明智地使用它。
    "spell_spear"                 , // 刺击 从你的手中投出一根长长的空灵之矛。
    "spell_speed_wonder"          , // 狂奔 跑。 尽可能快地跑。别停下。
    "spell_weak"                  , // 虚弱 使你周围的敌人更脆弱。
    "spell_unbreakable"           , // 不可战胜 任何东西都无法把你推开或拉走。
    "xedra_eater_stabilize_reality", // 稳固现实 防止你的个人现实与时间线遭到恶意调整。
    "xedra_eater_erosion"         , // 侵蚀 在身体附近生成一个不稳定的时间场，它会随着时间推移，不断侵蚀你近战攻击的生物。
    "point_blank"                 , // 强力肘击 用手臂发出的一记直击。若注入额外能量，这强力一击或许能击穿墙壁。
] as const;
/**从文件提取的预定义的XedraEvolvedEaterSpellID */
export type ExtractDefineXedraEvolvedEaterSpellID = typeof ExtractDefineXedraEvolvedEaterSpellIDList[number];