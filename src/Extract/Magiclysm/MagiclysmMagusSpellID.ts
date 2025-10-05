/**从文件提取的预定义的MagiclysmMagusSpellID 列表*/
export const ExtractDefineMagiclysmMagusSpellIDList = [
    "shadow_field"                , // 暗影结界 Shroud an area in intense shadows.
    "magic_missile"               , // 魔法飞弹 我在黑暗中发射魔法飞弹！
    "phase_door"                  , // 相位门 把你往随机方向传送一小段距离。
    "dimension_door"              , // 维度门 将你随机传送至目标位置附近。
    "gravity_well"                , // 重力井 在指定地点的中央召唤一口重力井。对受影响地区的所有生物造成钝击伤害。
    "magus_mana_blast"            , // 魔力冲击 聚焦过的魔法轰击，可以夷平一大片区域。"不需要魔法道具辅助聚焦"
    "magus_mana_bolt"             , // 魔力闪电 一束破坏性魔法闪电，只会伤害你的敌人。
    "magus_haste"                 , // 加速术 这法术在短时间内大幅度增加你的速度。
    "magus_slow"                  , // 慢 这个法术削弱你的敌人，导致其速度暂时降低。
    "magus_baleful_polymorph"     , // 恶意变形术 把你的敌人变形成青蛙。
    "magus_mana_beam"             , // 魔力光束 一束聚焦过的破坏性魔法光束，会伤害到它路径上的所有敌人。
    "magus_escape"                , // 逃脱术 将你向随机方向传送一段中等的距离，可以在危险情况下帮你逃出敌人包围。
    "create_rune_magus"           , // 符文（魔术师） 这个仪式能将少量的魔力结晶压成复杂的图案，形成与魔法契合的符文。 你可以将符文作为催化剂用于制造其它物品。
    "cats_grace"                  , // 猫之优雅 You align your senses to be closer to those of a cat, becoming more graceful, agile, and coordinated.
    "eagles_sight"                , // 鹰的视力 你获得鹰的感知。
    "ogres_strength"              , // 巨魔之力 你获得了巨魔的力量。
    "foxs_cunning"                , // 狐之狡黠 你变得像狐狸一样狡猾。
    "magus_force_jar"             , // 力瓶术 召唤出一个能够用来储存液体的魔力瓶。
    "magus_summon_impact_sling"   , // 冲击投索 这个法术将巨大的力量注入投石索，在能量撕碎自己之前，投掷出威力巨大的石子。
    "magus_summon_impact_sling_plus", // 强化冲击投索 This spell infuses a sling with tremendous force, delivering devastating pebble shots until the energy tears it apart.  Now you know this spell like the back of your hand, and have started to design your own version.
    "focused_bolt"                , // 聚能光束 你将你的魔力聚集到一束极薄的纯能量脉冲光束中，具有极高的射程和精度；以及无与伦比的穿透力，只要技能等级足够。这个法术曾经是一名臭名昭著的刺客的发明，曾经杀死了无数国王和贵族。它只通过世代相传的直系后裔传承，虽然偶尔也会被他们分享给其他人。
    "magus_slowfall"              , // 羽落术 将下落速度大幅降低，如果掌握得很好，则可降至零。
    "magus_spiderclimb"           , // 蛛行术 Ascend even the most sheer wall with ease as you cling to surfaces.
    "magus_teleport_mark"         , // 魔术标记 在一块特定的土地上做上标记，这样你以后就可以回到那里。
    "magus_word_of_recall"        , // 世界召回 立即回到你标有魔术师标记的地方，无论它有多远。
    "magus_stop_attack_shield"    , // 魔法盾 A simple but powerful spell, Mageshield will render the caster immune to any single attack.  It is indiscriminate: whether hit by an anti-tank missile or the caster stubbing their toe, it will absorb all energy of the attack and then fade.
    "magus_far_hand_pull"         , // 法师之手 拉取一个目标或一组物品给你。
    "magus_ranged_increase"       , // 能量箭 A popular military spell since ancient times, Arrowflight increases the range of bows and, as it later turned out, firearms.
    "magus_diamond_imbuement"     , // 钻石附魔 Magically infuse a melee weapon with the hardness and resilience of a diamond as well as its industrial cutting capability, making it supremely sharp and durable.  However, like a diamond, any damage the weapon suffers afterwards cannot be repaired.
    "magus_silence"               , // 沉默术 Affect the air around the target and their vocal cords, preventing them from making any noise whatsoever.  This makes them much more stealthy, but they cannot cast any spells requiring speech.
    "magus_light_target"          , // 妖精之火 Cause the air around the target to glow slightly, revealing their location and making it slightly harder for them to dodge attacks.
    "magus_permanent_light"       , // 不灭之光 Enchant the air in a location to glow, producing a orb of soft light.  While not particularly bright, the light will last years if you're not lucky and millennia if you are.
    "magus_cannot_move_attack_or_damage_target", // Adamantine Gaol Create an impenetrable shell of force around the target, preventing them from moving or acting for the spell's duration.  The shell works in two directions and the target is also immune to all harm.Adamantine Gaol <color_yellow>cannot be dispelled</color>.
    "magus_push_nearby_enemies_back", // Repulsion Wave Unleash a wave of force, hurling all nearby targets away from you.  Heavier targets are harder to affect.
] as const;
/**从文件提取的预定义的MagiclysmMagusSpellID */
export type ExtractDefineMagiclysmMagusSpellID = typeof ExtractDefineMagiclysmMagusSpellIDList[number];