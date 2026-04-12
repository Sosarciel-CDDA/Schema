/**从文件提取的预定义的XedraEvolvedRaceHomullusSpellID 列表*/
export const ExtractDefineXedraEvolvedRaceHomullusSpellIDList = [
    "homullus_charm_feral_spell"  , // 吾辈中人 潜入一个野人的心智，使其误以为你是盟友。
    "homullus_summon_feral_spell" , // 呼唤迷失沉沦之人 无名的迷失者们前来援助你。
    "homullus_self_deception_spell", // 都会好的 有时人最好往积极的那面想。 施放该法术能提升仿灵人心情。
    "homullus_invisible_to_humans_spell", // 泯然众人 尽管熙攘的人潮早已散去，仿灵人仍能通过魔法唤起那种隐于人群的精萃，从而让受此法术影响的人类无法看到自己。
    "homullus_sense_vampires"     , // 感知夜猎者 编织这道幻术，你就能感知到附近吸血鬼的存在。
    "homullus_invisible_to_humans_spell_self", // A Face in the Crowd Self Puts an effect on you so anyone affected by A Face in the Crowd knows to ignore you.  It's a bug if you have this directly.
    "homullus_reduced_visibility_ally_spell", // 凡夫俗子 将一件魔法披风缠绕在目标上，使自己更难被发现。这不是隐形，敌对的目标能在被接近时看穿魔法。
    "homullus_restore_power_spell", // 能量激发 借助为你地脉充能的力量，触摸一个目标，为车辆或电网恢复部分电力。
    "homullus_add_learning_focus_spell", // 学者之见 与动植物不同，人类会研究与生存无关的课题。此法术能集中仿灵人的心神，使其学习起来更加轻松。
    "homullus_cultivate_goblin_fruit", // 发掘妖精果实 在精灵魔法的帮助下，你可能在废墟中找到无主的妖精果实。 果实的效果多种多样，虽然无法预测，但至少能带来一些益处。 此咒语只能在文明的遗迹中施放。
    "homullus_road_translocate_spell", // 条条大路通罗马 人类曾在地球上建起纵横交错的道路网：起初是羊肠小道，然后是土石路，最终是每天有数十亿人穿行的宏伟沥青巨网。仿灵人可以站在这些路网的残迹之上，返回任意一个已与之共鸣的文明中心。
    "homullus_road_translocate_attune", // 通途之契 与一处地点同调，以便日后旅行。你必须在尚存的文明堡垒或人类聚集地之一进行同调。
    "homullus_civilization_translocate_attune_real", // All Roads Lead to Rome Attunement Real The actual All Roads Lead to Rome attunement spell.  It's a bug if you have it.
] as const;
/**从文件提取的预定义的XedraEvolvedRaceHomullusSpellID */
export type ExtractDefineXedraEvolvedRaceHomullusSpellID = typeof ExtractDefineXedraEvolvedRaceHomullusSpellIDList[number];