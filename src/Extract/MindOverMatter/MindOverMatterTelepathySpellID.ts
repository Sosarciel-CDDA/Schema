/**从文件提取的预定义的MindOverMatterTelepathySpellID 列表*/
export const ExtractDefineMindOverMatterTelepathySpellIDList = [
    "telepathic_concentration"    , // [Ψ]专注催眠(C) 将自己的思维调整到一种近似于催眠的状态中，提高学习速度。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。<color_red>进入战斗失效</color>。
    "telepathic_shield"           , // [Ψ]心灵护盾(C) 你可以保护自己的思维免受后灾变世界的危险。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "telepathic_mind_sense"       , // [Ψ]思维感知(C) 你可以利用你的灵能来察觉到一个有生命、有智慧的思维的微弱嗡鸣声，无论它多么奇怪或陌生。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "telepathic_mesmerize"        , // [Ψ]Mesmerize Hypnotize a target, causing them to stand in a trance or wander around in a small area.  Any damage taken will snap the target out of their trance.  Some targets are more resistant to mesmerism than others.
    "telepathic_morale"           , // [Ψ]稳定情绪(C) 能修改他人的思想自然也能修改自己的思想，这使你得以在一定程度上消除负面情绪。同时，你也学会了在别人身上更巧妙地做到这一点，平息他们的愤怒或缓解他们的恐惧。将此项灵能施加到自身时，<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "telepathic_blast"            , // [Ψ]突触过载 短路并超载目标的大脑，造成极大的伤害甚至死亡。
    "telepathic_animal_mind_control", // [Ψ]野兽操控 控制动物的思维，强迫它服从你。这种灵能对昆虫、蜘蛛等生物无效。
    "telepathic_confusion"        , // [Ψ]意识剥夺 切断目标的大脑与其感官的连接，使其失明和困惑。
    "telepathic_fear"             , // [Ψ]原始恐惧 使用目标自身内心的恐惧来对付他们，用压倒性的恐怖使他们瘫痪。这种效果不会持续很久，但在持续期间完全能够使其无法动弹，并且会在目标身上留下持久的恐怖感。
    "telepathic_invisibility"     , // [Ψ]心理隐身 以难以察觉的方式影响他人的思维，从心理上隐藏自己的存在。当灵能生效时，目标将不能看见你。此项灵能<color_red>进入战斗失效</color>。
    "telepathic_blast_radius"     , // [Ψ]心灵尖啸 发出一种不受控制的心灵尖叫，攻击附近任何人的思想。这种灵能不区分朋友和敌人。
    "telepathic_beast_taming"     , // [Ψ]野兽驯服 对动物进行意识改造，使其长时间将你视为朋友。动物必须已经成为同伴。可以是正常驯服，也可以通过其他灵能控制得来。
    "telepathic_mind_control"     , // [Ψ]心灵控制 控制目标的思想，迫使他们听从你的命令。
    "telepathic_network"          , // [Ψ]网络效应 在你和附近的盟友之间形成一个无意识的心灵感应网络，让你们都能发送和接收附近危险的信息，并在战斗中做出更快的反应。 该网络需要附近至少有一名盟友才能生效。
] as const;
/**从文件提取的预定义的MindOverMatterTelepathySpellID */
export type ExtractDefineMindOverMatterTelepathySpellID = typeof ExtractDefineMindOverMatterTelepathySpellIDList[number];