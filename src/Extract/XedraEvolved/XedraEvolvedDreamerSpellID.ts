/**从文件提取的预定义的XedraEvolvedDreamerSpellID 列表*/
export const ExtractDefineXedraEvolvedDreamerSpellIDList = [
    "return_critters"             , // 召回野兽 如果您的召唤兽走失了，把它们召唤回来。
    "dream_blade"                 , // 梦剑术 这把短暂存在的剑可以让你用脑海中的浮梦来保护自己！
    "dream_dagger"                , // 梦匕术 这把昙花一现的匕首由你的内在现实连接驱动，你的魔力池越大，它的杀伤力就越大。
    "dream_armor"                 , // 梦甲术 召唤出一套轻轻盖在你身上的盔甲，几乎没有什么累赘，并且叠加在你所穿衣物的上方。
    "create_dream_dross"          , // 生成浮梦残渣 这个仪式法术会将少量的浮梦残渣带入我们的世界，并使其永久存在。这些梦境的碎片可以用来制造永恒存在的物体。
    "banish_nether_monsters"      , // 放逐异界怪物 试图将明显不符合本地物理法则的怪物驱逐回他们的原始维度。
    "banish_dark_monsters"        , // 放逐暗夜血肉 试图放逐由暗夜噩梦制造出的怪物。
    "spell_summon_twin"           , // 分身 制作一个自己的假分身来扰乱你的敌人。
    "spell_summon_twin_flood"     , // 二重身大群 让现实充满你的拷贝。
    "spell_dreamer_clairvoyance"  , // 展开 你眼前所有的墙都被抹去了。
    "spell_dreamer_clairvoyance_eff", // 空间感知 感受他们。看见他们。连接他们。
    "summon_shifter"              , // 召唤移相怪 召唤传送门生物来帮助应对危险情况。
    "summon_sapient_light"        , // 召唤光怪 召唤一个来自另一个现实的对生物怀有仇恨的受干扰的智慧实体。它不会攻击你。至少目前是这样。
    "make_constructed_hammer"     , // 重锤 利用你的能量，你制造了一个形状奇特的锤子。你可以用它来粉碎你的敌人，或者粉碎各种障碍。
    "constructed_hammer_attack"   , // Smash A Target Deal some damage.  You can't see it except in debug mode.
    "constructed_hammer_self_destruct", // Constructed Hammer Self destruct Removes constructed hammer.  You can't see it except in debug mode.
    "EOC_REMOVE_CONSTRUCTED_HAMMER",
    "summon_duplicator"           , // 召唤复制者 召唤传送门生物来帮助应对危险情况。
    "xedra_dreamer_time_bubble"   , // 召唤时间气泡 在你所选的位置召唤一个时间完全冻结的气泡，不可穿透，并使里面的一切事物停滞。
    "teleport_coin"               , // 抛硬币 抛硬币。你选哪一边？
    "summon_ophanim"              , // 召唤天使 召唤一种生物，它的外形与《圣经》中描述的天使十分相似--一个长着翅膀、眼睛和圆环的巨大飞行物。
    "summon_winch"                , // 传送令牌 创建一个小标记。 使用时，它会把你拉回到你创建它的地方。
    "summon_winch_item"           , // Spawn a Winch Spawns a winch item.  You can see it only in debug mode.
    "dreamer_artifact"            , // 从"远方"取得物品 利用你的能力，你用纯粹的能量压缩双手之间的间隙，试图构建……某种东西。
    "xedra_dreamer_generate_accelerated_time", // Generate Accelerated Time Continuously generate short-lived bubbles of accelerated time around you, allowing you and anything else that enters to act far quicker than normal.
    "spell_ethereal_wings"        , // 空灵之翼 Two ethereal wings sprout out of your back indefinitely until toggled off.  They work as phantasmal pair of wings that can somehow lift your weight even without conscious effort.
    "spell_karma_arms"            , // 业力之手 Four transparent arms emit out of your body indefinitely until toggled off.  They work as a desirable additional pair of arms, and who knows what power they contain?
    "spell_stalker_eyes"          , // 追猎者之眼 Your own eyes are replaced with the eyeballs of an unknown creature, indefinitely, until you toggle them off.  Compounded from billions of red crosses inside void-dark sclera, they can see much more clearly than any natural creature.
    "spell_devil_tail"            , // 恶魔之尾 A stretchy tail appears from the base of your spine, instinctively aiding you in battle or moving to defend you, indefinitely, until toggled off.
    "dreamer_lucid_dreams"        , // 清明梦 模糊现实与梦境的边界。在梦中你几乎不受现实的影响，梦中身体发生的大部分变化都会在你醒来时复原。在梦中“死亡”会导致你当场醒来，但死亡抓不到你。
] as const;
/**从文件提取的预定义的XedraEvolvedDreamerSpellID */
export type ExtractDefineXedraEvolvedDreamerSpellID = typeof ExtractDefineXedraEvolvedDreamerSpellIDList[number];