/**从文件提取的预定义的MindOverMatterPyrokinesisSpellID 列表*/
export const ExtractDefineMindOverMatterPyrokinesisSpellIDList = [
    "pyrokinetic_eruption"        , // [Ψ]火焰喷泉 在目标位置引发一场大火。
    "pyrokinetic_flash"           , // [Ψ]眩目闪光 通过在某一特定点强烈激发空气，你就会产生一束光。
    "pyrokinetic_cauterize"       , // [Ψ]烧灼止血 一项功能细分的焰动者能力，将伤口烧焦以止血。这可能会很痛苦，如果你没有医学知识，几乎肯定会造成更多的伤害。如果出血过多，烧灼将无效，并且无论你是否成功，都有<color_red>感染几率</color>。
    "pyrokinetic_call_flames"     , // [Ψ]可控火焰(C) 伸出手并召唤火焰。你可以用它们来加热食物、煮水、点火，或者完成任何火焰能够做到的事情。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。<color_red>进入战斗失效</color>。
    "pyrokinetic_quell_flames"    , // [Ψ]熄灭火焰 既然你可以生火，你也可以扑灭它。
    "pyrokinetic_quell_flames_self", // [Ψ]Quell Fire On Self 既然你可以生火，你也可以扑灭它。
    "pyrokinetic_cloak"           , // [Ψ]控温斗篷(C) 控制附近空气的温度，保持温暖并使你免受火焰伤害。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "pyrokinetic_flamethrower"    , // [Ψ]喷射火焰 在你面前的一个锥形区里喷火。
    "pyrokinetic_lance"           , // [Ψ]炽耀喷流(C) 将火焰汇聚成一道灼热的光束，其温度足以切割金属或将其重新焊接在一起。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。<color_red>进入战斗失效</color>。
    "pyrokinetic_thermogenesis"   , // [Ψ]热力操控 加热附近的空气并保持它，消除寒冷或把冬天变成温暖的夏天。
    "pyrokin_summon_thermogenesis_1", // [Ψ]Thermogenesis #1 The spell to summon a thermogenesis node.  It's a bug if you have it directly.
    "pyrokin_summon_thermogenesis_2", // [Ψ]Thermogenesis #2 The spell to summon a thermogenesis node.  It's a bug if you have it directly.
    "pyrokin_summon_thermogenesis_3", // [Ψ]Thermogenesis #3 The spell to summon a thermogenesis node.  It's a bug if you have it directly.
    "pyrokin_summon_thermogenesis_4", // [Ψ]Thermogenesis #4 The spell to summon a thermogenesis node.  It's a bug if you have it directly.
    "pyrokin_banish_thermogenesis", // [Ψ]Banish Thermogenesis The spell to banish existing thermogenesis nodes.  It's a bug if you have it directly.
    "pyrokinetic_aura"            , // [Ψ]炽焰光环(C) 将你包裹在一团火焰中，反击任何试图近战攻击你的人。同时火焰还能提供照明。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "pyrokinetic_flame_immunity"  , // [Ψ]火焰护盾(C) 你对火的掌控力已经到了可以直接踏入熊熊烈焰中并毫发无伤地穿行其中，只感到愉悦的温暖。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "pyrokinetic_blast"           , // [Ψ]爆燃术 创造一个不断膨胀的火球，在其尾流中捕捉到多个目标。
    "pyrokinetic_aoe_blast"       , // [Ψ]火焰地狱 引发狂暴的烈焰，将周围彻底转为火海。你会<color_yellow>暂时</color>免疫烈焰引起的一系列副作用。
    "pyrokinetic_aoe_blast_immunity", // [Ψ]Hellfire Immunity spell This prevents the pyrokinetic from dying in heat and flames after using Hellfire.  It's a bug if you have it directly.
    "pyrokinetic_incineration"    , // [Ψ]熔金炽焰 将所有的烈焰集中同一点呈现出炽白的颜色，用这火山般的热量烧灼你的目标。
] as const;
/**从文件提取的预定义的MindOverMatterPyrokinesisSpellID */
export type ExtractDefineMindOverMatterPyrokinesisSpellID = typeof ExtractDefineMindOverMatterPyrokinesisSpellIDList[number];