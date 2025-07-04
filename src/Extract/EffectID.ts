/**从文件提取的预定义的EffectID 列表*/
export const ExtractDefineEffectIDList = [
    "null"                        ,
    "hit_by_player"               , // Hit By Player AI tag for when monsters are hit by player.  This is a bug if you have it.
    "ridden"                      , // Ridden AI tag for when critter is being ridden.  This is a bug if you have it.
    "npc_suspend"                 , // Suspended NPC AI tag for when an NPC needs to be rebooted after an infinite loop.
    "harnessed"                   , // 被套上缰绳 AI tag for when critter is being harnessed by a vehicle.  This is a bug if you have it.
    "docile"                      , // Docile Monster AI tag for when monsters are tamed.  This is a bug if you have it.
    "controlled"                  , // Controlled Monster AI tag for when monsters are being controlled by another.  This is a bug if you have it.
    "run"                         , // Hit-and-run Running AI tag for when hit-and-run monsters run away.  This is a bug if you have it.
    "spooked"                     , // Cornered Fighter Spooked AI tag to let CORNERED_FIGHTER monsters try to flee.  This is a bug if you have it.
    "spooked_recent"              , // Cornered Fighter Recently Spooked AI tag to allow CORNERED_FIGHTER monsters to turn and fight.  This is a bug if you have it.
    "critter_well_fed"            , // 食物充足 AI tag for when critter has had enough to eat.  This is a bug if you have it.
    "critter_underfed"            , // 营养不良 AI tag for when critter has not had enough to eat.  This is a bug if you have it.
    "dragging"                    , // 拖曳 AI tag for when a monster is dragging you behind it.  This is a bug if you have it.
    "operating"                   , // Operating AI tag for when a monster is operating on you.  This is a bug if you have it.
    "countdown"                   , // Counting Down AI tag for monster's counting down.  This is a bug if you have it.
    "no_ammo"                     , // No Ammo AI tag used to stop a monster reviving with ammo.  This is a bug if you have it.
    "asked_to_lead"               , // Asked to Lead AI tag for asking to lead NPCs.  This is a bug if you have it.
    "asked_to_follow"             , // Asked to Follow AI tag for asking to NPCs to follow you.  This is a bug if you have it.
    "asked_to_train"              , // 最近培训过 你最近刚刚完成培训课程，需要在再次教学前休息一下。
    "asked_to_socialize"          , // Asked to Socialize AI tag: for having recently asked an NPC to socialize.  This is a bug if you have it.
    "asked_to_hint"               , // Asked to Hint AI tag: for having recently asked an NPC to give a hint.  This is a bug if you have it.
    "asked_personal_info"         , // Asked Info AI tag for asking to NPCs for personal information.  This is a bug if you have it.
    "asked_for_item"              , // Asked for Item AI tag for asking NPCs for items.  This is a bug if you have it.
    "currently_busy"              , // Currently Busy AI cooldown tag for items or services.  This is a bug if you have it.
    "gave_quest_item"             , // Already Gave Quest Item AI tag to prevent you from getting multiple quest items.  This is a bug if you have it.
    "catch_up"                    , // Catch Up AI tag for telling NPCs to catch up.  This is a bug if you have it.
    "allow_sleep"                 , // Allow to Sleep AI tag for telling NPCs to sleep.  This is a bug if you have it.
    "npc_said"                    , // Said Something Recently AI tag to control NPC verbosity.  This is a bug if you have it.
    "socialized_recently"         , // Socialized Recently AI tag for asking to NPCs to socialize.  This is a bug if you have it.
    "npc_run_away"                , // 逃跑中 AI tag to enable NPCs to flee.  This is a bug if you have it.
    "npc_flee_player"             , // 逃跑中 AI tag to enable NPCs to flee the player.  This is a bug if you have it.
    "npc_fire_bad"                , // Avoiding a Fire AI tag to enable NPCs to escape uncontrolled fires.  This is a bug if you have it.
    "npc_player_still_looking"    , // Waiting till You Find Something AI tag to prevent NPCs from following the player while the player is finding an additional copy of an item.  This is a bug if you have it.
    "infection"                   , // Infection AI tag used for the infected NPC quest.  This is a bug if you have it.
    "pet"                         , // 宠物 AI tag used for pet critters.  This is a bug if you have it.
    "paid"                        , // Paid AI tag used for paid critters.  This is a bug if you have it.
    "pacified"                    , // Pacified AI tag used for pacified critters.  This is a bug if you have it.
    "has_bag"                     , // Has Bag AI tag used for critters holding your bags.  This is a bug if you have it.
    "monster_armor"               , // Has Armor AI tag used for critters wearing armor.  This is a bug if you have it.
    "monster_saddled"             , // Has Saddle AI tag used for critters wearing a saddle.  This is a bug if you have it.
    "leashed"                     , // Has Leash AI tag used for critters wearing a leash.  This is a bug if you have it.
    "led_by_leash"                , // 被牵引 AI tag used for critters forced to follow using a leash.  This is a bug if you have it.
    "tied"                        , // 被捆绑 AI tag used for tied up critters.  This is a bug if you have it.
    "shrieking"                   , // 尖叫中 AI tag used for screecher sounds.  This is a bug if you have it.
    "targeted"                    , // Turret Is Targeted AI tag used for turret targeting sounds.  This is a bug if you have it.
    "npc_value_interaction_timer_short",
    "frenzy"                      , // 狂暴 Monster effect used to buff allies.  This is a bug if you have it.
    "pushed"                      , // Pushed AI tag used for monsters pushing each other.  This is a bug if you have it.
    "worked_on"                   , // Worked On AI tag used for robots being disabled.  This is a bug if you have it.
    "venom_player1"               , // Weak Player Venom Don't worry, you shouldn't get this.
    "venom_player2"               , // Strong Player Venom Don't worry, you really shouldn't get this.
    "dripping_mechanical_fluid"   , // 机油泄露 AI tag used for robot monsters losing mechanical fluid.  This is a bug if you have it.
    "shattered"                   , // 破烂铠甲 你的护甲被一次猛烈攻击击碎了。
    "staggered"                   , // 踉跄 你被一次攻击弄得失去了平衡。
    "sneezing"                    , // 打喷嚏 打喷嚏的时候很难集中注意力！
    "acid_charged"                , // Charged Acid Glands Your acid glands are full and ready to burst.  Ew.
    "maimed_acid_gland"           , // 酸液腺受损 Your acid glands got all leaky.
    "maimed_huntsman_arm"         , // 破损的附件 Your long grotesque throwing appendage has been compromised.
    "elec_charged"                , // Charged Capacitor Your capacitors sizzle with bioelectricity.
    "maimed_capacitor"            , // 生物电容受损 You can't deal with this charge.
    "maimed_tail"                 , // 尾巴受损 Your tail is broken.  You're not sure what to do with this information.
    "maimed_claws"                , // 爪子受损 Your claws broke.  Like a broken nail, but somehow worse.
    "maimed_armor"                , // 碎裂甲壳 You feel exposed -and pretty buggy- without your shell.
    "disarmed"                    , // Disarmed You have been forced to drop any wielded weapon.  You can wield them again if you manage to survive.
    "maimed_arm"                  , // 手臂骨折 Your arms are broken.  Your imaginary monster arms, so this is probably a bug.
    "maimed_mandible"             , // 残废虫颚 Your mandibles are unusable.  What, you don't have mandibles?  Then it must be a bug if you have it.
    "maimed_tongue"               , // 舌头受损 Cat got your tongue?  No?  Then it must have been a bug.
    "maimed_leg"                  , // 残废腿部 Your bugged legs are maimed beyond recognition.  How will you leap now?
    "maimed_stinger"              , // 残废毒刺 Your beautiful stinger is broken!  That must be a bug, right?
    "maimed_wings"                , // 残废翅膀 Your wings are useless, robbing you of unlimited flight.
    "stumbled_into_invisible"     , // Stumbled Into Invisible Player This creature has stumbled into an invisible player and is now aware of their presence.
    "milked"                      , // 已挤奶 The creature has been partially or fully milked.
    "sheared"                     , // 剪毛 The creature has been fully sheared.
    "fragile_frog"                , // Fragile Frog Applied by leap special attack of burned frog zombies, conditional for related spell.
    "eyebot_assisted"             ,
    "eyebot_depleted"             ,
    "photophobia"                 , // 畏光 It burns!  Thankfully, this can't ever happen to you.  This is a bug if you have it.
    "nemesis_buff"                , // SWOLE If you see this description it is a bug.
    "grown_of_fuse"               , // Grown of Fusion AI effect to increase stats after fusing with another critter.  1 stack means one absorbed max_hp.
    "Shadow_Reveal"               , // 显形 The shadows no longer hide you!
    "yrax_overcharged"            , // ▙▜▛▜ ▙▚▛▜▝▞▟
    "downed"                      , // 被击倒 你倒在了地板上，你必须爬起来才能继续移动。
    "assisted"                    , // 外科手术协助 你接受了外科手术的帮助。
    "masked_scent"                , // 掩盖体味 你的体味被其他气味所掩盖。
    "got_checked"                 , // 全身体检 你接受了一次完整的全身检查，现在已经了解自身健康的状况。
    "heating_bionic"              , // 发热 你的某个生化插件正在产生热量，使你的身体升温。
    "winded"                      , // 气喘吁吁 你气喘吁吁。跑步及打斗都将更困难，直到你回复。
    "winded_leg_l"                , // 左腿受伤 你气喘吁吁，在你恢复前左腿功能受损。
    "winded_leg_r"                , // 右腿受伤 你气喘吁吁，在你恢复前右腿功能受损。
    "winded_arm_l"                , // 左臂受伤 你气喘吁吁，在你恢复前左臂功能受损。
    "winded_arm_r"                , // 右臂受伤 你气喘吁吁，在你恢复前右臂功能受损。
    "darkness"                    ,
    "immobilization"              , // 不能动 你无法移动！
    "stunned"                     , // 被眩晕 你开始不自主的随意运动。
    "sensor_stun"                 , // 传感器干扰 你的生化传感器被干扰，并输出错误读数。
    "dazed"                       , // 被震晕 你明显被震晕了，很难集中精神注意到发生在你身边的事情。
    "riding"                      , // 骑 你骑着动物。
    "mech_recon_vision"           , // 。
    "onfire"                      , // 着火 损失生命 - 全身你的衣服和其他装备可能被火焰破坏。
    "bouldering"                  , // 步履不稳 你所站的地方不太稳固。站在这里战斗会更困难。
    "blind"                       , // 失明 视野降至0，你看不到任何东西。
    "blind_no_msg"                , // 失明 Range of Sight: 0.  You cannot see anything.  You shouldn't be able to see this description either!
    "earphones"                   , // 戴上耳机 你戴着耳机，很难听到外界的声音。
    "deaf"                        , // 听力受损 你的听力受到了影响。
    "glowy_led"                   ,
    "staggered_character"         , // 踉跄 你被一次攻击弄得失去了平衡。
    "poison"                      , // 中毒 你中毒了！
    "badpoison"                   , // 严重中毒 你严重中毒！
    "tpollen"                     , // 呼吸困难 花粉让人呼吸困难！
    "venom_dmg"                   , // 中毒伤口 伤口明显肿大，像地狱一样灼热。
    "venom_weaken"                , // 虚弱毒素 你觉得很虚弱。
    "venom_blind"                 , // 心神不宁 你发现你很难集中注意力观察你周围的环境。
    "venom_pain"                  , // 令人不安的伤口 被咬到的伤口剧烈疼痛。
    "foodpoison"                  , // 食物中毒 你的胃中不停地翻滚，你感到非常的恶心。
    "paralyzepoison"              , // 迟缓 你被瘫痪性毒素减速了！
    "nausea"                      , // 轻微恶心 你感到很恶心，可能导致呕吐。
    "sleep_deprived"              , // 睡眠不足 你这一阵子一直缺乏足够的睡眠。你该歇会了。
    "melatonin"                   , // 褪黑素补充剂 你服用了一些褪黑素补充剂。这将帮助你改善睡眠不足的症状。
    "mutagen"                     , // 变异中 你服用了诱变剂。这也许是个好主意。
    "mutagenic_slurry"            , // 诱变剂粘浆 你的胃感觉在燃烧。但愿喝下那种东西是个好主意……
    "mutagen_chelator"            , // 诱变螯合剂 你服用了一些诱变螯合剂。现在你身体里所有引起诱变的物质都在被清除。
    "mutagen_alpha"               , // 新人类变异 你摄入了新人类引物。
    "mutagen_batrachian"          , // 蛙人变异 你摄入了青蛙引物。
    "mutagen_beast"               , // 兽人变异 你摄入了野兽引物。
    "mutagen_bird"                , // 鸟人变异 你摄入了鸟类引物。
    "mutagen_cattle"              , // 牛人变异 你摄入了牛类引物。
    "mutagen_cephalopod"          , // 章鱼人变异 你摄入了章鱼引物。
    "mutagen_chimera"             , // 奇美拉变异 你摄入了奇美拉引物。为什么？
    "mutagen_elfa"                , // 精灵变异 你摄入了精灵引物。
    "mutagen_feline"              , // 猫人变异 你摄入了猫科引物。
    "mutagen_fish"                , // 鱼人变异 你摄入了鱼类引物。
    "mutagen_gastropod"           , // 蜗牛变异 你摄入了蜗牛引物。
    "mutagen_human"               , // 人体净化 你喝下了净化剂。
    "mutagen_insect"              , // 虫人变异 你摄入了昆虫引物。
    "mutagen_lizard"              , // 蜥蜴变异 你摄入了蜥蜴引物。
    "mutagen_lupine"              , // 狼人变异 你摄入了狼类引物。
    "mutagen_medical"             , // 医疗变异 你摄入了医疗引物。
    "mutagen_mouse"               , // 小鼠变异 你摄入了小鼠引物。
    "mutagen_plant"               , // 树人变异 你摄入了植物引物。
    "mutagen_raptor"              , // 迅猛龙变异 你摄入了迅猛龙引物。
    "mutagen_rabbit"              , // 兔人变异 你摄入了兔子引物。
    "mutagen_rat"                 , // 大鼠变异 你摄入了大鼠引物。
    "mutagen_chiropteran"         , // 蝙蝠变异 你摄入了蝙蝠引物。
    "mutagen_slime"               , // 变形怪变异 你摄入了变形怪引物。
    "mutagen_spider"              , // 蜘蛛变异 你摄入了蜘蛛引物。
    "mutagen_troglobite"          , // 穴居人变异 你摄入了穴居引物。
    "mutagen_ursine"              , // 熊人变异 你摄入了熊科引物。
    "mutagen_crustacean"          , // 甲壳变异 你服用了甲壳诱变剂。
    "beartrap"                    , // 陷入捕熊陷阱 在你从陷阱里挣脱出来之前，你无法移动。
    "lightsnare"                  , // 圈套 对于这么个小不点来说，你可真是个大块头。
    "glare"                       , // 眩目 阳光有些刺眼。
    "snow_glare"                  , // 雪地眩光 太阳光正被雪地反射。
    "laserlocked"                 , // 被激光瞄准 一束激光正在瞄准你！
    "was_laserlocked"             ,
    "smoke_eyes"                  , // 少量眼部刺激 你感到眼睛很难受。
    "smoke_lungs"                 , // 些许烟雾吸入 你呛入一口薄烟。
    "teargas"                     , // 催泪瓦斯 你暴露在了催泪瓦斯中！
    "boomered"                    , // 被喷胆汁 你被胆汁喷了一身，视线模糊！
    "glowing"                     , // 发光 你全身沾满了发光的黏液！
    "bile_stink"                  , // 胆汁恶臭 你身上溅满了油腻腻的腐败液体。
    "bile_irritant"               , // 胆汁刺激 酸性的爆汁丧尸胆汁正在刺激你的皮肤。
    "skunk_spray"                 , // 臭鼬喷射 你被臭鼬喷了一身！
    "skunk_spray_neutralizer"     , // 臭鼬清新剂 一种能够中和臭鼬恶臭味的液体。
    "conjunctivitis"              , // 结膜炎 你的眼睛发炎了。
    "invisibility"                , // 隐身 你完全隐身了。
    "took_flumed"                 ,
    "took_xanax"                  ,
    "took_xanax_visible"          , // 服用速效镇静剂 不久前你服用了速效镇静剂，你可能仍然受它的影响。
    "took_prozac"                 ,
    "took_prozac_bad"             ,
    "took_prozac_visible"         , // 服用抗抑郁药 不久前你服用了抗抑郁药，你可能仍然受它的影响。
    "in_pit"                      , // 陷入深坑 你被困在了坑里，看不见上面的东西，你必须爬出来。
    "took_thorazine"              ,
    "took_thorazine_bad"          ,
    "took_thorazine_visible"      , // 服用抗精神病药 不久前你服用了抗精神病药，你可能仍然受它的影响。
    "no_sight"                    , // 视力不良 你从这个视角没法看到远处的东西。
    "anticoagulant"               ,
    "nsaid_eff"                   ,
    "pkill1_generic"              ,
    "pkill1_nsaid"                ,
    "pkill1_acetaminophen"        ,
    "pkill2"                      ,
    "pkill3"                      ,
    "pkill_l"                     ,
    "pkill_wintergreen"           ,
    "pkill_wintergreen_oil"       ,
    "webbed"                      , // 被网住 你被蛛网缠住了！
    "sludged"                     , // 沾满污泥 你踩到了淤泥！
    "bite"                        , // 咬伤 你有个很严重的咬伤伤口。
    "infected"                    , // 伤口感染 你有个已经感染的伤口。
    "recover"                     , // 感染（恢复中） 你正在从感染中恢复过来。
    "bandaged"                    , // 已包扎 你 %s 上的伤口已经包扎了。
    "disinfected"                 , // 已消毒 你 %s 上的伤口已经消毒了。
    "spores"                      , // 孢子沾染 你可以感觉到小小的孢子沉入你的肉体中。
    "fungus"                      ,
    "hallucinogenic_acid_light"   , // 酸雾幻觉 你受到了真菌酸雾的效果影响！
    "hallucinogenic_acid_heavy"   , // 严重酸雾幻觉 你已受到浓厚的真菌酸雾影响！
    "taint"                       , // 精神干扰 当奇怪的幻觉闪过你的脑海时，你有点迷失了方向。
    "tindrift"                    ,
    "visuals"                     , // 幻觉 你不能相信你所看到的一切。
    "rat"                         , // 类鼠疫 你感觉有点恶心，觉得自己变得像老鼠一样。
    "pblue"                       ,
    "iodine"                      ,
    "shakes"                      , // 颤抖 你的手不受控制的颤抖。
    "motor_seizure"               , // 癫痫发作 你的肌肉不停抽搐，而你无法控制它们！
    "bleed"                       , // 轻度出血 这不过是点小划伤而已。
    "slimed"                      , // 沾满黏液 厚厚的黏液覆盖住了你！
    "hallu"                       ,
    "cold"                        , // 微凉 你的%s暴露在寒风之中。
    "wet"                         , // 潮湿 %s 上都是湿气。
    "chafing"                     , // 皮肤不适 你的 %s 很不舒服。在坚硬的护甲下方穿些柔软的衣物会有所改善。
    "hot"                         , // 温热 %s 有点热。
    "hot_speed"                   , // 减速 炎热减慢了你的行动。
    "frostbite"                   , // 冻伤 你的%s被冻伤变得麻木。
    "frostbite_recovery"          , // 解冻 你的%s开始受到寒冷造成的伤害。
    "blisters"                    , // 水泡 你的%s因高温开始起水泡。
    "dermatik"                    ,
    "dermatik_visible"            , // 蠕动的皮肤 你能感到皮肤下有东西在蠕动……
    "formication"                 , // 瘙痒 你时不时停下来抓挠自己，更高智力能让你抵挡这种冲动。
    "sap"                         , // 沾满汁液 你身上沾满了植物汁液！
    "pre_common_cold"             , // 生病 你得病了，不好说会不会变得很严重，所以你最好找个安全的地方好好休息。
    "pre_flu"                     , // 生病 你得病了，不好说会不会变得很严重，所以你最好找个安全的地方好好休息。
    "common_cold"                 , // 感冒 你得了感冒。可以吃些药（抗感冒药物）来缓解症状。
    "flu"                         , // 流感 你得了流感，可以吃些药（抗感冒药物）来缓解症状。
    "common_cold_immunity"        , // 普通感冒抗体 普通的感冒抗体，分布在你的血液里，让你免于染上普通感冒。
    "fake_common_cold"            ,
    "fake_flu"                    ,
    "flushot"                     , // 已免疫 你最近打了流感疫苗。
    "prophylactic_antivenom"      , // 抗毒剂 你暂时对毒液有抵抗力。
    "took_antiasthmatic"          , // 服用抗哮喘药物 你最近服用了抗哮喘药物。
    "took_antihistamine"          , // 服用抗组胺药物 你最近服用了抗组胺药物。
    "steroid_eye"                 , // 使用过类固醇眼药水 你最近使用过了类固醇眼药水。
    "cureall"                     ,
    "evil"                        ,
    "raising"                     ,
    "attention"                   ,
    "jetinjector"                 , // RX12 疗效消退 你觉得精疲力竭。
    "stimpack"                    , // RX11 兴奋剂消退 你感到迟钝，动作也变慢了。
    "adrenaline"                  , // 肾上腺素消退 你觉得精疲力竭。
    "adrenaline_mycus"            , // 马卡斯喘息 吾等之纤维已经接近断裂极限。本地生物能量转移至修复使用。
    "meth"                        , // 冰毒药效减退
    "cig"                         , // 尼古丁快感 你摄入了适量的尼古丁，正享受着愉悦的兴奋感
    "teleglow"                    ,
    "high"                        , // 高强 你感觉自己爽到飞起。
    "weed_high"                   ,
    "contacts"                    , // 隐形眼镜 你正带着隐形眼镜。
    "transition_contacts"         , // 变色隐形眼镜 你正在佩戴的是变色隐形眼镜，保护你免受刺眼阳光的影响。
    "transition_contacts_plano"   , // 变色隐形眼镜（平光） 你正在佩戴的是平光变色隐形眼镜，保护你免受刺眼阳光的影响，但不能解决视力问题。
    "drunk"                       , // 小醉 你喝了些酒，感觉身体有点暖和。
    "amigara"                     ,
    "fearparalyze"                , // 恐惧 你因为恐惧而无法动弹。
    "asthma"                      , // 哮喘 你饱受呼吸功能障碍的困扰而感到呼吸困难。你随时都有可能突发哮喘，所以你得把哮喘吸入器备在身边。
    "bio_hydraulics_eff"          ,
    "crushed"                     ,
    "valium"                      ,
    "took_anticonvulsant_visible" , // 服用抗惊厥药物 不久前你服用了抗惊厥药物，你可能仍然受它的影响。处方说明它的效果持续时间可能会有所差异，因此你的估计可能不准确。
    "music"                       ,
    "relax_gas"                   , // 麻醉气体 你觉得浑身上下完全放松，毫无力气，再也不想动弹一下。战斗？太费劲了。
    "tapeworm"                    , // 不明疾病 你不确定自己出了什么问题，但感觉不舒服。
    "bloodworms"                  , // 不明疾病 你不确定自己出了什么问题，但感觉不舒服。
    "brainworms"                  , // 不明疾病 你不确定自己出了什么问题，但感觉不舒服。
    "paincysts"                   , // 不明疾病 你不确定自己出了什么问题，但感觉不舒服。
    "tetanus"                     , // 肌肉痉挛 你的肌肉都绷紧了，你或许该找找镇静剂了。
    "rat_bite_fever"              , // 化脓抓痕
    "datura"                      , // 体验曼陀罗 买票，上车，曼陀罗带你走。
    "grabbed"                     , // 被抓住 你被攻击抓住并固定在原地。在打破抓斗之前，你无法移动，并且取决于对手的力量，使用这种肢体很难甚至不可能。原地等待或尝试移动而不攻击以尝试消除此效果。
    "grabbing"                    , // 抓握 牢牢抓住了另一生物，使其无法动弹。
    "grabbing_2"                  , // 抓握 抓住另一个生物，并用第二个附肢将它们固定在原地。
    "grabbing_3"                  , // 抓握 抓住另一个生物，并用第二个附肢将它们固定在原地。
    "lack_sleep"                  , // 睡眠不足 你有段时间没睡觉了，后果正慢慢显现。
    "lying_down"                  ,
    "sleep"                       ,
    "narcosis"                    ,
    "under_operation"             , // 手术中 你正在接受手术，不要乱动！
    "alarm_clock"                 ,
    "slept_through_alarm"         ,
    "robofac_surveillance"        ,
    "playing_instrument"          , // 弹奏乐器 你正在弹奏乐器。专心弹奏乐器让你速度变慢。
    "on_roof"                     ,
    "corroding"                   , // 被腐蚀 你被腐蚀的酸液覆盖了！
    "zapped"                      , // 被电击 你被电击了，只能够勉强移动！
    "electrocuted"                , // 触电 你被电击并造成了严重伤害！
    "mutation_internal_damage"    , // 混乱变异 你的变异中的身体无法适应你的生化插件。
    "anemia"                      , // 早期缺铁症 你的饮食中铁的缺乏阻碍了红细胞的输氧效率和再生速度。
    "redcells_anemia"             , // 早期贫血症 你失去了大量红细胞，会导致日益严重的贫血。
    "scurvy"                      , // 早期坏血病 你的饮食中缺乏维生素C，会使得你出现坏血病，并会持续恶化。
    "betablock"                   , // β受体阻滞药 你受到了β受体阻滞药的影响，它可以控制你的心率，减少疼痛等压力事件对心率的影响。然而，它也会降低血压并且让人犯困。
    "hypervitaminosis"            , // 维生素过多症 过量的维生素严重影响了你的新陈代谢。
    "toxin_buildup"               ,
    "opiate_eff"                  , // 轻度阿片类药物兴奋 因服用阿片类药物产生的轻微欣快感。
    "bad_food_ennui"              , // 恶心食物 你吃的食物令人恶心。
    "hypovolemia"                 , // 轻度失血性休克 你流了不少血，脸色有点苍白。
    "cough_suppress"              ,
    "haslight"                    , // 被照亮 你正携带着光源，因此无法很好地隐蔽。
    "mending"                     , // 开始恢复 损坏的肢体正缓慢恢复其功能。
    "disabled"                    , // physically 该肢体过度损伤以至于失去功能，需要用夹板才能恢复。
    "pkill"                       , // 镇痛剂 镇痛剂正在缓解你的疼痛，但也同时也会麻痹你。
    "happy"                       , // 快乐 生活多美好。
    "sad"                         , // 不快 你对你的生活感到不满。
    "irradiated"                  , // 虚弱
    "stim"                        , // 兴奋剂 你感到自己精力旺盛并且紧张不安，大概是受到兴奋剂的影响。
    "depressants"                 , // 镇静剂 在镇静剂的作用下，你感到有点迷糊。
    "stim_overdose"               , // 兴奋剂过量 你坐不稳，心脏狂跳不已。你很可能服用了过量的兴奋剂。
    "weak_antibiotic_visible"     , // 服用弱效抗生素 你不久前服用了一些弱效抗生素来抵抗感染。如果你没有康复，你可能需要再服用一次，但要小心服用过量。
    "antibiotic_visible"          , // 服用抗生素 你不久前服用了一些抗生素来抵抗感染。如果你没有康复，你可能需要再服用一次，但要小心服用过量。
    "strong_antibiotic_visible"   , // 服用强效抗生素 你不久前服用了一些强效抗生素来抵抗感染。如果你没有康复，你可能需要再服用一次，但要小心服用过量。
    "weak_antibiotic"             ,
    "antibiotic"                  ,
    "strong_antibiotic"           ,
    "panacea"                     , // 万能药 你感到难以置信！你感觉自己随时准备好直面这个世界了。
    "tummy_tablet"                , // 服用胃药 你的胃部不适症状得到了缓解。
    "antifungal"                  , // 抗真菌药 你服用了有抗真菌效果的药物或化学品。
    "emp"                         , // 漏电 你最近被EMP电磁脉冲击中过。
    "supercharged"                , // 超级充能 你最近被闪电击中过，感觉很……奇特。
    "pd_str_bad"                  , // 肌肉消失 你觉得自己的肌肉仿佛不在了一般。
    "pd_dex_bad"                  , // 较弱抓握 你似乎无法触碰到物体。
    "pd_per_bad"                  , // 扭曲视野 你无法区分形状和颜色。
    "pd_int_bad"                  , // 漫游思维 你的思维似乎自己在四周徘徊。
    "pd_rejection"                , // 世界排异 你的一举一动都带着微弱的火花，你的身体每过一秒都会更加疼痛。
    "pd_strengthened_reality"     , // 维度接纳 你周围的世界似乎因为你的存在和行为变得更加平静。
    "migo_atmosphere"             , // 恶臭空气 这里的空气闻起来酸臭发霉。
    "fetid_goop"                  , // 沾满恶臭黏液 恶臭黏液在皮肤上缓慢滑落的感觉让你全身发抖，而它散发出的恶臭气味让你快要呕吐出来。
    "has_og_comm_freq"            ,
    "has_prospectus"              ,
    "disrupted_sleep"             ,
    "nightmares"                  ,
    "incorporeal"                 , // 虚体 你缺乏实质形体，仿佛你并没有完全处于此处一般。
    "ignore_fall_damage"          ,
    "weary_0"                     ,
    "weary_1"                     , // 轻度疲惫 你已经运动了一段时间，进行最高运动强度的活动将受到影响。进行以下运动强度的活动时将被施加相应行动惩罚：极限：1.25倍
    "weary_2"                     , // 中度疲惫 你已经运动了相当一段时间，进行更高运动强度的活动将受到影响。进行以下运动强度的活动时将被施加相应行动惩罚：极限：1.67倍，剧烈：1.33倍
    "weary_3"                     , // 疲惫 你已经运动了非常长的一段时间，需要放缓一会了。进行以下运动强度的活动时将被施加相应行动惩罚：极限：2.5倍，剧烈：2倍，重度：1.5倍
    "weary_4"                     , // 重度疲惫 你已经运动了极长一段时间，需要好好休息一下了。进行以下运动强度的活动时将被施加相应行动惩罚：极限：5倍，剧烈：4倍，重度：3倍，中度：2倍
    "weary_5"                     , // 极度疲惫 你已经运动了极长一段时间，不能继续动下去了。进行以下运动强度的活动时将被施加相应行动惩罚：极限：10倍，剧烈：8倍，重度：6倍，中度：4倍，轻度：2倍
    "weary_6"                     , // 极度疲惫 你已经运动了极长一段时间，真的要停一会了。进行以下运动强度的活动时将被施加相应行动惩罚：极限：10倍，剧烈：8倍，重度：6倍，中度：4倍，轻度：2倍
    "weary_7"                     , // 极度疲惫 你已经运动了极长一段时间，必须要停下来了。进行以下运动强度的活动时将被施加相应行动惩罚：极限：10倍，剧烈：8倍，重度：6倍，中度：4倍，轻度：2倍
    "weary_8"                     , // 极度疲惫 你已经运动了极长一段时间，不能再逼自己了。进行以下运动强度的活动时将被施加相应行动惩罚：极限：10倍，剧烈：8倍，重度：6倍，中度：4倍，轻度：2倍
    "hunger_full"                 , // 饱食 你感觉自己吃得太饱了，有些懒洋洋的。
    "hunger_engorged"             , // 饱食超量 你的胃快被撑得胀破了。这是个错误。
    "hunger_satisfied"            ,
    "hunger_hungry"               ,
    "hunger_very_hungry"          ,
    "hunger_near_starving"        ,
    "hunger_starving"             ,
    "hunger_famished"             ,
    "hunger_blank"                ,
    "weakened_inertia"            , // 弱惯性 你的身体移动起来异常容易，仿佛重量减轻了一般。
    "hallucination_attacks"       ,
    "strengthened_inertia"        , // 弱惯性 你的身体出奇的难以移动，好像它的重量更大了。
    "warped_viewpoint"            , // 扭曲视点 空间在你的周围扭曲，以至于你可以看到更宽的弧度，好像一切都离你更近了。
    "narrow_viewpoint"            , // 狭窄视点 你周围的空间被扭曲了，以至于你能看到的更少，而且好像一切都变远了。
    "weakened_gravity"            , // 弱重力 本地的时空出现了问题，你附近的一切都变轻了。
    "strengthened_gravity"        , // 强重力 本地的时空出现了问题，你周围的一切像是灌了铅水一样沉重。
    "slowed_time"                 , // 时间减缓 本地的时空出现了问题，你周围的一切似乎都变得更快了。
    "nvg_green"                   , // 夜视仪（绿色） 你的夜视仪给世界涂上了一层绿色的色调。
    "glowing_gas"                 , // inhaled 你吸入了一肺发光的异界寄生孢子。 值得庆幸的是，它们似乎并不适应人类的生理学。
    "glowing_gas_cover"           , // 发光 你全身沾满了发光的异界孢子！
    "molting"                     , // 蜕壳 你有一种想躲在安全之处的强烈冲动。
    "molting_imminent"            , // 蜕壳在即 立刻寻找安全的地方，否则当它开始时，你将变得十分无助。
    "VITRIFYING"                  , // 玻璃之中 这里非常宁静
    "hay_fever"                   , // 花粉症 你的眼睛发痒，不断流着鼻涕。
    "star_vampire_blood_drank"    , // 喝足血液 星之精已经喝下了血，现在你看得见祂了。
    "star_vampire_blood_drink_feral", // 放血 怪物正在吸食你的血液，可恶的家伙！
    "ink_gland_ink"               , // 耗尽墨汁 你的墨囊彻底空了。它正在消耗水分，随着时间的推移生产墨汁。
    "cramped_space"               , // 狭小空间 周围的环境限制了你的行动。
    "gliding"                     , // 滑翔 你在空中滑翔。
    "slow_descent"                , // 缓降 你正以安全的速度缓慢降落。
    "mute"                        , // 哑巴 你无法说话。
    "social_satisfied"            , // 良伴同行 和同伴共度了一段美好时光。
    "social_dissatisfied"         , // 寥寥无几 你感到了一丝寂寞。
    "asocial_satisfied"           , // 独自一人 独自一人的感觉真不赖。
    "asocial_dissatisfied"        , // 烦躁不安 和别人在一起让你精疲力尽。
    "quadruped_full"              ,
    "quadruped_half"              ,
    "natural_stance"              , // 自然姿态 你的姿势可让你充分利用你的变异肢体，并且在近战中蹲着不会受到惩罚。手持武器会使你失去此效果。
    "subaquatic_sonar"            , // 水下声纳 每隔几秒钟，你所在的位置就会发出一道超声波脉冲。如果你在水下，而且你的听力足够好，你就可以通过回声信号来导航。
    "anticoagulant_draculin"      ,
    "a_winner_is_u"               , // 胜利！
    "HACK_camp_vision_for_npc"    ,
    "eff_mind_seeing_bonus_5"     ,
    "eff_mind_seeing_bonus_10"    ,
    "eff_mind_seeing_bonus_20"    ,
    "eff_mind_seeing_bonus_30"    ,
    "aimed_60mm"                  ,
    "triffid_fiber_indigestion"   , // 胃部不适 你的胃总是感觉很饱，即使你已经有一段时间没吃东西了。
] as const;
/**从文件提取的预定义的EffectID */
export type ExtractDefineEffectID = typeof ExtractDefineEffectIDList[number];