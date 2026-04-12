/**从文件提取的预定义的XedraEvolvedClasslessSpellID 列表*/
export const ExtractDefineXedraEvolvedClasslessSpellIDList = [
    "night_sight"                 , // 夜视术 给你在黑暗中视物的能力。
    "dread_weight"                , // 恐惧重担 你周围的一切都面临着生存恐惧，因此行动缓慢。包括那些你通常不认为会有生存恐惧的东西，比如不死生物。目标四肢周围的空气急剧冷却。等级越高，范围越大，影响越久。
    "blur"                        , // 模糊术 你身体的边缘看起来模糊扭曲，增加了你在一个回合中所能闪避攻击的次数。
    "damage_transfer"             , // 伤害转移 让你将一些伤害从自身转移到其他人身上。通常人们不喜欢这个法术，但现在谁在乎呢？
    "damage_transfer_heal"        , // Damage Transfer Heal A spell that will heal you for a bit.  You can see it only in debug mode.
    "fire_teleport"               , // 炎爆传送 将你从一个地方传送到另一个地方，并在终点处造成巨大的火焰爆炸。
    "fire_teleport_explosion"     , // Pyroportation Explosion Makes a pretty big fire explosion around you.
    "call_daffodil"               , // 召唤水仙 几名水仙战士出现在你身边。他们会为你而战，但一天后便会消散。
    "call_daffodil_real"          , // 召唤水仙 Hidden spell that spawns the daffodil
    "boann_retaliation_mark"      , // Boann's retaliation targeting Intended to be hidden.  This is how Boann teleport away monsters that hit her.
    "boann_retaliation"           , // Boann's retaliation Intended to be hidden.  Makes Boann teleport the player away, spawns some huntsmen and hounds then cure all her ailments and injuries if she survives being hit by the player.
    "boann_heal"                  , // Boann Heal Will heal injuries all over Boann's body.
    "boann_banish_monsters_check" , // Boann's retaliation against monsters check Boann's about to retaliate against monsters, deleting them as they are "teleported" away.  You shouldn't see this
    "boann_banish_monsters"       , // Boann's retaliation against monsters Boann's retaliation against monsters, deleting them as they are "teleported" away.  You shouldn't see this
    "xedra_self_banish"           , // Banish Self Banish the caster, killing them and destroying their body.  Having this spell is a bug, and casting it would be suicidal.
] as const;
/**从文件提取的预定义的XedraEvolvedClasslessSpellID */
export type ExtractDefineXedraEvolvedClasslessSpellID = typeof ExtractDefineXedraEvolvedClasslessSpellIDList[number];