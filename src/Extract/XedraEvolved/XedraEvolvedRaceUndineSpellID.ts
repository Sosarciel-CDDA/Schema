/**从文件提取的预定义的XedraEvolvedRaceUndineSpellID 列表*/
export const ExtractDefineXedraEvolvedRaceUndineSpellIDList = [
    "create_fog"                  , // 制造雾气 召唤一片雾气。
    "fog_bank"                    , // 雾障 召唤一片浓雾。
    "grant_buoyancy"              , // 赋予浮力 你变得更有浮力。
    "acidic_mist"                 , // 酸雾 召唤酸雾。
    "deadly_mist"                 , // 死亡迷雾 召唤致命的迷雾。
    "water_pocket"                , // 水袋 这个咒语会召唤一个由搅动的水组成的口袋，里面有一个气泡，可以防止任何物品被水损坏。
    "undine_acid_resist_ally_spell", // 腐蚀之幔 为目标编织一件妖精魔法斗篷，用一层薄薄的酸雾将其环绕。这能为其提供一定的酸蚀伤害防护，并偶尔会对攻击者造成伤害。
    "undine_cultivate_goblin_fruit", // 培育妖精果实 你可以将些许妖精魔法织入水中，催生出一枚妖精果实。妖精果实效果多样，无法预测，但至少总有些益处。此法术只有在站在水中或大型水体附近时才能施展。
    "undine_bash_and_slow_spell"  , // 粉碎水压 你可以将深海的力量施加给你的敌人，将其粉碎并短暂地降低其速度。
    "undine_drag_inward_spell"    , // 漩涡噬群 创造一片旋转的魔力水域，将其中万物卷向中心，并以强劲的水流减缓其行动。
    "wave_rider"                  , // 召唤波浪骑手 您可以召唤一辆水上交通工具，带您穿越波涛汹涌的大海。
    "summon_fish"                 , // 召唤鱼儿 一条鱼从某处驶来。 它在陆地上可能没那么有用。
    "charm_fish"                  , // 魅惑鱼儿 一条友好的鱼不知从哪里来了。 它在陆地上可能没那么有用。
    "summon_kraken"               , // 召唤海怪 一只友好的海怪不知从哪里来了。 它在陆地上可能用处不大。
    "summon_water_sprite"         , // 呼唤浪潮之子 召唤一个较低级的水元素来支援你。
    "undine_tidal_wave_spell"     , // 滔天巨浪 创造一道魔力水墙，令其倾覆在敌人身上，冲击并将其席卷而去。
    "undine_tidal_wave_spell_push", // Tidal Wave Directed Push The Directed Push effect of the Tidal Wave spell.  It's a bug if you have it directly.
] as const;
/**从文件提取的预定义的XedraEvolvedRaceUndineSpellID */
export type ExtractDefineXedraEvolvedRaceUndineSpellID = typeof ExtractDefineXedraEvolvedRaceUndineSpellIDList[number];