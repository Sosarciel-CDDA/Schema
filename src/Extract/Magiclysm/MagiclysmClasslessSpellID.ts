/**从文件提取的预定义的MagiclysmClasslessSpellID 列表*/
export const ExtractDefineMagiclysmClasslessSpellIDList = [
    "crystallize_mana"            , // 魔力结晶 将魔力凝聚成固体结晶型态。
    "crystallize_mana_1"          , // Crystallize Mana (1) Mana Crystal Spawner.  If you can see this you probably debugged it in.
    "crystallize_mana_crystal_5"  , // Crystallize Mana (5) Mana Crystal Spawner.  If you can see this you probably debugged it in.
    "mana_fatigue"                , // 魔力疲乏 Secondary effect of Crystallize Mana.
    "dark_sight"                  , // 黑暗视觉 给你在黑暗中视物的能力。
    "megablast"                   , // 炽能冲击 你经常想发射光波，就像小时候看过的动画片里那样，现在你可以了！
    "create_atomic_light"         , // 魔法阅读灯 创造一盏神奇的魔法阅读灯。
    "blinding_flash"              , // 致盲闪光 爆发耀眼的光芒以致盲敌人，等级越高伤害越高。
    "ethereal_grasp"              , // 空灵攫抓 无数鬼手破土而出，抓住并减速范围内的所有目标。更高等级可以扩大影响范围并延长持续时间。体型较大的目标受此法术的<color_yellow>影响较小</color>。
    "obfuscated_body"             , // 朦胧术 一个魔法光环扭曲了你身体周围的光线，增加了你在一个回合中所能闪避攻击的次数。
    "obfuscated_body_plus"        , // 高级朦胧术 一个魔法光环扭曲了你身体周围的光线，增加了你在一个回合中所能闪避攻击的次数。
    "protection_aura"             , // 保护光环 把你的整个身体包裹在一个神奇的光环里，保护你免受环境伤害。
    "protection_aura_plus"        , // 强化保护光环 用一层魔法灵光包裹你的全身，保护你免受环境影响。现在你对此法术已了如指掌，并开始着手设计属于你自己的版本。
    "translocate_self"            , // 自我传送 将使用者传送到一个已经开启的易位门。
    "acid_resistance"             , // 防酸术 让施法者不受酸液侵蚀。
    "acid_resistance_greater"     , // 高等防酸术 保护使用者免受酸液伤害。现在你对此法术已了如指掌，并开始着手设计属于你自己的版本，不再需要你持续集中精神。
    "thought_shield"              , // 心灵防护 你的太阳穴上会出现两个闪闪发光的小点，保护你的心灵不受外界影响。
    "thought_shield_plus"         , // 心灵套装 为什么只保护你的心智不受外界影响？在身体各处设置更多防护也能防止被强行传送。
    "sound_bomb"                  , // 声波炸弹 酷炫的名字背后隐藏着一个常见的玩笑咒语，可以吓唬你的朋友并让狗呆住。它在某些特殊情况下很有用。
    "classless_watch_spell"       , // 知晓时间 这个法术可能是科技淘汰魔法的最伟大范例，它能让你准确知道现在的时间。
    "classless_clean_clothing_and_self", // 梳洗术 这无疑是大灾变前世界上最普及的法术。梳洗术能清洁你的牙齿，清新你的口气，去除衣物上的污渍与汗水，还能为你的皮肤去角质，让你的秀发重现蓬松。
    "classless_easy_sleep_spell"  , // 安睡术 此法术深受劳累过度的法师和浅尝辄止的魔法爱好者们喜爱，无论你有多疲惫，它都能让你更容易入睡。
    "classless_dispel_magic"      , // 驱散魔法 移除目标身上的魔法效果。 当面对强大的魔法或调谐提供的独特加成时，它就会失效。
    "classless_disjunction"       , // 解离 作为终极反魔法咒语，"解离 "甚至能从目标身上剥离与调谐相关的魔力或强大的魔法。
    "classless_restore_crystal_mana", // 魔力提取 将魔力结晶还原为原始的魔力并将其吸收，恢复你的部分魔力。这个过程非常缓慢，并且效率不高，但相比起魔力药剂更为便携。
    "eoc_evocation_setup"         , // Set Up Proficiency: Evocation Sets up proficiency gain.  This is a bug if you have it.
    "eoc_channeling_setup"        , // Set Up Proficiency: Channeling Sets up proficiency gain.  This is a bug if you have it.
    "eoc_summon_setup"            , // Set Up Proficiency: Conjuration Sets up proficiency gain.  This is a bug if you have it.
    "eoc_enhancement_setup"       , // Set Up Proficiency: Enhancement Sets up proficiency gain.  This is a bug if you have it.
    "eoc_enervation_setup"        , // Set Up Proficiency: Enervation Sets up proficiency gain.  This is a bug if you have it.
    "eoc_conveyance_setup"        , // Set Up Proficiency: Conveyance Sets up proficiency gain.  This is a bug if you have it.
    "eoc_restoration_setup"       , // Set Up Proficiency: Restoration Sets up proficiency gain.  This is a bug if you have it.
    "eoc_transformation_setup"    , // Set Up Proficiency: Transformation Sets up proficiency gain.  This is a bug if you have it.
] as const;
/**从文件提取的预定义的MagiclysmClasslessSpellID */
export type ExtractDefineMagiclysmClasslessSpellID = typeof ExtractDefineMagiclysmClasslessSpellIDList[number];