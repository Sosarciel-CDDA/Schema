/**从文件提取的预定义的MagiclysmBiomancerSpellID 列表*/
export const ExtractDefineMagiclysmBiomancerSpellIDList = [
    "biomantic_pain_caused_light" , // Cause minor pain Causes a small amount of pain when certain spells are used.
    "light_healing"               , // Knit the Rent Flesh Cause the target's wounds to writhe, the flesh to crawl back together, and their injuries to heal.  Disturbing, and painful, but effective.
    "pain_split"                  , // 伤痛分流 平摊各个肢体受到的伤害。
    "vicious_tentacle"            , // 残暴之鞭 This spell extrudes a long and nasty whiplike tentacle of sharp bones and oozing acid from your body, which has a long reach attack and vicious damage.
    "vicious_tentacle_plus"       , // 进化版残暴之鞭 This spell extrudes a long and nasty whiplike tentacle of sharp bones and oozing acid from your body, which has a long reach attack and vicious damage.  Now you know this spell like the back of your hand, and start to design your own version.
    "bio_grotesque"               , // 扭曲强化 A spell that warps your body in foreign, unnatural ways to increase your physical abilities and strength.
    "bio_acidicspray"             , // 酸液喷射 当施法时，法师张开他的嘴，向前方扇形范围内的敌人喷射腐蚀性酸液，将它们溶解成黏液。想象一下他该怎么处理这些粘糊糊的玩意。
    "bio_fleshpouch"              , // 肉身成袋 这个法术会在你的背部皮肤长出一个大袋子，可以让你存储物品。
    "bio_bonespear"               , // 白骨之矛 这个法术可以召唤出一只邪恶的骨矛，拥有长长的手柄及尖锐的刀刃。
    "bio_bonespear_plus"          , // 进化版白骨之矛 This spell creates a long shaft of bone with a wicked point and blades along its length.  Now you know this spell like the back of your hand, and have started to design your own version.
    "create_rune_biomancer"       , // 符文（生化术士） This ritual grows a small nub of flesh on you, which quickly falls off and turns into a rune attuned to Biomancers.  You can use the rune as a catalyst for recipes.
    "biomancer_paralytic_dart"    , // 麻痹毒刺 喷射出一根由筋腱与骨头纠缠而成的扭曲细针，它造成的螫刺会迟缓受害者。
    "biomancer_visceral_projection", // 脏腑四射 在你四周喷射出辛辣刺鼻的血肉，不断生长并将你的猎物捕获进一片有毒的卷须之中。
    "biomancer_coagulant_weave"   , // 凝结组织 将你对生化魔法的掌握转化至体内，增强你的肉体。与医疗能量不同，它通过防止失血，在伤口化脓之前消除伤口，代价是加速新陈代谢，容易饥饿及口渴。
    "biomancer_caustic_aura"      , // 腐蚀光环 这个法术在你身体周围召唤出一个酸液光环，腐蚀攻击你的敌人，并增加你的近战伤害。
    "biomancer_caustic_aura_plus" , // 强化腐蚀光环 This spell suspends acid in a layer around you, corroding melee attackers when struck and enhancing your melee damage.  Now you know this spell like the back of your hand, and have started to design your own version.
    "biomancer_swim_frog"         , // 蛙肢 手脚上长出蹼，让快速游泳变得轻而易举。
    "biomancer_giant_growth"      , // 巨型生长 成长为巨大的体型。 你的衣服和装备不会随你成长。
    "biomancer_remove_instability", // 稳定基因 The scroll said that this spell is for "Reducing negative consequences from XE037 exposure", whatever that means.  According the scroll, the spell should be allowed to run its course before reapplication.
    "biomancer_carrion_feast"     , // 腐肉盛宴 改变你的消化系统，让你吃下腐烂的食物而无任何不良反应。 这要么是一个真正古老的咒语，要么一定是某所大学法医学研究部门的产物。
    "biomancer_lashing_tentacles" , // 鞭笞触手 Grow a pair of lashing tentacles from your shoulders.  While not as long as the Vicious Tentacle, they will strike anyone in melee with you.  You cannot wear rigid armor that covers the shoulders with them.
    "biomancer_cure_disease_minor", // 净化疫病 Vomit up any minor illnesses you might be suffering from, such as colds or the flu.  This is one of the few biomantic cure spells that is castable on other people.
    "biomancer_cure_disease_minor_actual_effect", // Purgation of Maladies Cure This causes the actual cure effect, since a vomit effect spell doesn't apply effect_str
    "biomancer_hyper_regeneration", // 肉体调整 Possibly the most powerful of the biomantic healing spells, this causes your flesh to literally knit itself together before your eyes.
    "biomancer_slow_bleeding"     , // 止血 随着你能控制自己的身体，你也能控制自己的血液。
    "biomancer_scalpel_fingers"   , // 尖刀手指 Change each of your fingers into a myriad of tiny bone knives, allowing you to cut with surgical precision… or slice your enemies to ribbons.
    "biomancer_caustic_blood"     , // 腐蚀血液 将你的血液转化为被魔法强化的酸液，使你免疫酸液，同时会向使你流血的生物喷溅酸液。
    "biomancer_eat_tons_of_food"  , // 暴饮暴食 扩容你的胃，使它能够装下更多食物，不会挤占其他内脏的空间。 曾经是个无甚卵用的咒语，现在它终于有用了，因为你不知道下一顿饭什么时候才能吃。
    "biomancer_get_more_blood"    , // Carmine Infusion Using water as a catalyst, restore some of your lost blood.  This spell has no effect if you're healthy and uninjured.
    "biomancer_control_mutations" , // Morphogenic Mastery The scroll said that this spell is for "Exerting deliberate control over morphogenic alterations", which sounds ominous.
] as const;
/**从文件提取的预定义的MagiclysmBiomancerSpellID */
export type ExtractDefineMagiclysmBiomancerSpellID = typeof ExtractDefineMagiclysmBiomancerSpellIDList[number];