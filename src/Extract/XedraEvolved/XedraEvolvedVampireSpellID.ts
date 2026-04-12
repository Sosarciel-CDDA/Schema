/**从文件提取的预定义的XedraEvolvedVampireSpellID 列表*/
export const ExtractDefineXedraEvolvedVampireSpellIDList = [
    "vampire_smell_nearby_blood_spell", // 鲜血气味 You can smell even the faintest traces of living human, or nearly-human, blood.<color_light_red>Blood Cost:</color> 0 ml.
    "vampire_drink_blood_with_fangs_spell", // 饮血 你的尖牙使你能够从失去行动能力或沉睡的目标身上饮血。
    "vampire_stamina_for_blood_spell", // 邪秽耐力 You focus on sending the blood in your veins to where it can do the most good for your immediate stamina.<color_light_red>Blood Cost:</color> 100 ml (<u_val:blood_amount_for_graph> ml current).
    "vampire_commune_with_night_spell", // 向夜之子学习 Speak to nearby night-creatures; rats, bats, wolves, and so on.  They will tell you the layout of your surrounding area.<color_light_red>Blood Cost:</color> 100 ml (<u_val:blood_amount_for_graph> ml current).
    "vampire_magic_for_blood_spell", // 燃血补魔 You consume some of the blood in your veins, turning it into magical power.<color_light_red>Blood Cost:</color> 200 ml (<u_val:blood_amount_for_graph> ml current).
    "spell_blood_heal"            , // 血色复苏 Heal your wounds with the power of stolen blood.<color_light_red>Blood Cost:</color> 750 ml (<u_val:blood_amount_for_graph> ml current).
    "vampire_fear_gaze_spell"     , // 掠食者之貌 With a bit of stolen blood and a savage expression, you can send your enemies fleeing.  This power only works on enemies capable of feeling fear.<color_light_red>Blood Cost:</color> 150 ml (<u_val:blood_amount_for_graph> ml current).
    "spell_hypnotic_gaze"         , // 惑心凝视 Stare into the eyes of your victim and wills them to pause.  This power does not work on unliving targets.<color_light_red>Blood Cost:</color> 150 ml (<u_val:blood_amount_for_graph> ml current).
    "vampire_command_beast_spell" , // 威震野兽 Exert command over a predatory wild animal like a wolf or a rat, making it your ally for a time.<color_light_red>Blood Cost:</color> 500 ml (<u_val:blood_amount_for_graph> ml current).
    "vampire_command_beast_spell_real", // Cowing the Beast Real The actual power that lets you command a beast.  If you see this, it's a bug.
    "vampire_earth_slumber_spell" , // 入土安眠 You can sleep within the earth itself, avoiding the hateful light of the sun.  This power must be used on diggable soil.<color_light_red>Blood Cost:</color> 0 ml.
    "vampire_torpor"              , // 死眠 进入死眠以恢复你的伤势与疲劳。最好在睡觉时无人能够攻击你的安全地点使用此能力。
    "vampire_dominate"            , // 统御凝视 Take control of a mind.  Only works on targets that have weak minds.<color_light_red>Blood Cost:</color> 700 ml (<u_val:blood_amount_for_graph> ml current).
    "vampire_dominate_real"       , // Dominating Gaze real The actual power that lets you take over a mind.  If you see this, it's a bug.
    "vampire_mist_form_pass_through_doors_and_windows", // （雾状）通过屏障 渗过门窗。
    "vampire_summon_blood_container", // Create blood-storing sphere. Create a magical sphere that will contain any blood you will put in it until the spell ends.
    "vampire_invisible_in_dark"   , // Shrouded by the Shadowed Path. Surround yourself in shadows, becoming invisible for a while.  This power will fail if you stand outside under the sun.<color_light_red>Blood Cost:</color> 300 ml (<u_val:blood_amount_for_graph> ml current).
    "mentor_vanish"               , // Vanish in mist. Vanish in mist and stay away until things are better.  This will likely be forever.
] as const;
/**从文件提取的预定义的XedraEvolvedVampireSpellID */
export type ExtractDefineXedraEvolvedVampireSpellID = typeof ExtractDefineXedraEvolvedVampireSpellIDList[number];