/**从文件提取的预定义的MagiclysmMagusSpellID 列表*/
export const ExtractDefineMagiclysmMagusSpellIDList = [
    "shadow_field"                , // 暗影结界 令一片区域被深邃的阴影所笼罩。
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
    "cats_grace"                  , // 猫之优雅 你将感官调谐得更接近于猫，身姿愈发优雅，行动愈发敏捷，举止愈发协调。
    "eagles_sight"                , // 鹰的视力 你获得鹰的感知。
    "ogres_strength"              , // 巨魔之力 你获得了巨魔的力量。
    "foxs_cunning"                , // 狐之狡黠 你变得像狐狸一样狡猾。
    "magus_force_jar"             , // 力瓶术 召唤出一个能够用来储存液体的魔力瓶。
    "magus_summon_impact_sling"   , // 冲击投索 这个法术将巨大的力量注入投石索，在能量撕碎自己之前，投掷出威力巨大的石子。
    "magus_summon_impact_sling_plus", // 强化冲击投索 此术为投石索注入万钧之力，使其能甩出毁灭性的石弹，直至能量将其撕裂。如今你对此术已烂熟于心，并着手构想属于你的版本。
    "focused_bolt"                , // 聚能光束 你将你的魔力聚集到一束极薄的纯能量脉冲光束中，具有极高的射程和精度；以及无与伦比的穿透力，只要技能等级足够。这个法术曾经是一名臭名昭著的刺客的发明，曾经杀死了无数国王和贵族。它只通过世代相传的直系后裔传承，虽然偶尔也会被他们分享给其他人。
    "magus_slowfall"              , // 羽落术 将下落速度大幅降低，如果掌握得很好，则可降至零。
    "magus_spiderclimb"           , // 蛛行术 吸附于物体表面，让你能轻松攀上最陡峭的绝壁。
    "magus_teleport_mark"         , // 魔术标记 在一块特定的土地上做上标记，这样你以后就可以回到那里。
    "magus_word_of_recall"        , // 世界召回 立即回到你标有魔术师标记的地方，无论它有多远。
    "magus_stop_attack_shield"    , // 法师护盾 法师护盾，一则简单而强大的法术，能使施法者免疫任何单次攻击。它对攻击一视同仁：无论是反坦克导弹的轰击，还是施法者不慎踢到脚趾的小磕碰，它都会吸收该次攻击的全部能量，然后消散。
    "magus_far_hand_pull"         , // 法师之手 拉取一个目标或一组物品给你。
    "magus_ranged_increase"       , // 驭风弹道 此术自古便是备受青睐的军用法术，起初用于增加弓弩的射程，后来人们更发现，它对枪械也同样适用。
    "magus_diamond_imbuement"     , // 钻石附魔 以魔法为近战武器注入钻石般的硬度、韧性及其工业切割能力，使其锋锐无匹，坚固耐用。然其性亦如钻石，一旦受损，便再无修复之可能。
    "magus_silence"               , // 沉默术 影响目标周遭的空气及其声带，令其无法发出任何声响。这能让他们潜行时更为隐秘，却也无法施放任何需要言语的法术。
    "magus_light_target"          , // 妖精之火 使目标周身的空气微微发光，从而暴露其位置，并令其更难闪避攻击。
    "magus_permanent_light"       , // 不灭之光 为一处地点的空气附魔使其发光，从而产生一团柔和的光球。此光虽不甚明亮，然时运不济，尚能维系数载；天佑福至，则可明耀千年。
    "magus_cannot_move_attack_or_damage_target", // 金刚之牢 在目标周围创造一个坚不可摧的力场囚笼，令其在法术持续期间无法移动或做出任何行动。此囚笼内外隔绝，身处其中的目标亦会免疫一切伤害。金刚之牢<color_yellow>无法被驱散</color>。
    "magus_push_nearby_enemies_back", // 斥力波 释放一道力场波，将附近所有目标从你身边震开。越重的目标越难被影响。
] as const;
/**从文件提取的预定义的MagiclysmMagusSpellID */
export type ExtractDefineMagiclysmMagusSpellID = typeof ExtractDefineMagiclysmMagusSpellIDList[number];