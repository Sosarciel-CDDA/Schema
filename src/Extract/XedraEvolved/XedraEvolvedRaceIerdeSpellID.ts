/**从文件提取的预定义的XedraEvolvedRaceIerdeSpellID 列表*/
export const ExtractDefineXedraEvolvedRaceIerdeSpellIDList = [
    "ierde_stomp_ground_smash_spell", // 震地践踏 践踏地面，造成小型的局部地震，破坏建筑并击退附近的每一个人。
    "ierde_iron_armor_spell"      , // 金刚铁肤 只要身处有生命的大地或岩石之上，土妖精便能将妖精之铁注入体内，此举虽会减缓其行动与攻击速度，却能大大降低所受伤害。
    "ierde_knockback_punch_spell" , // 崩山之拳 崩山之力寄宿其后，拳击一个目标并将其击退。
    "ierde_knockback_punch_knockback", // Mountain-Toppling Punch Knockback The knockback part of Mountain-Toppling Punch.  It's a bug if you have it.
    "ierde_reveal_earth_map_spell", // 洞悉阡陌 与大地通感，低语相询，探其奥秘。此法术将揭示土妖精周边大范围内的自然地貌，施法时必须立于有生命的大地之上。
    "ierde_reshape_the_earth_spell", // 重塑大地 你能如抟土般塑造大地，使其化为岩石或归于尘土，亦能升起地面，或使其下陷为坑洞、斜坡与墙壁。
    "ierde_slow_enemies_spell"    , // 化石为僵 向你的敌人注入岩石之僵，使其行动迟缓。
    "ierde_buff_armor_allies_spell", // 山之肤 为你的盟友注入大地的坚韧。其肌肤将能抵御部分物理伤害，且更不易流失血液，但受魔法影响，行动会稍显迟缓。
    "ierde_earthen_shield_spell"  , // 不破土盾 立于有生命的大地或岩石之上，为你的皮肤注入基岩的硬度。法术生效期间，你将不会受到任何伤害，但反复的打击会不断磨损这层护佑，直至其破碎。
    "ierde_entrap_target_in_stone", // 岩石囚笼 在单个目标周围召唤出一圈地刺，将其禁锢于岩石囚笼之中。目标必须身处大地或岩石之上，法术方能生效。
    "ierde_trap_target_local_terrain_bash", // Lithic Gaol Local Bash Damages ground before the stone fangs come out, to represent the fangs destroying furniture.  It's a bug if you have it.
    "ierde_summon_earth_spirit"   , // 召唤石之子 一个低级的土元素被召唤来支持你。
    "ierde_create_pits_spell"     , // 大地攫抓 在你敌人脚下敞开大地，将他们尽数坠入陷坑。
    "ierde_tunnel_translocation_spell", // 地脉穿行 大地之中裂隙纵横，岩层与矿脉交错，更深处还有熔岩奔流。土妖精能沿此路径而行，在地底深处穿行至任何曾到过的地方。
    "ierde_tunnel_translocation_attune", // Traveling the Veins of the Earth Attunement Attune to a location for later traveling.  You must attune deep within the earth on the living rock.
    "ierde_tunnel_translocation_attune_real", // Traveling the Veins of the Earth Attunement Real The actual Traveling the Veins of the Earth attunement spell.  It's a bug if you have it.
    "ierde_cultivate_goblin_fruit", // 培育妖精果实 你可以向大地中注入一点精灵魔法，结出妖精果实。 果实的效果多种多样，虽然无法预测，但至少能带来一些益处。 此咒语只能在大地或岩石上施放。
] as const;
/**从文件提取的预定义的XedraEvolvedRaceIerdeSpellID */
export type ExtractDefineXedraEvolvedRaceIerdeSpellID = typeof ExtractDefineXedraEvolvedRaceIerdeSpellIDList[number];