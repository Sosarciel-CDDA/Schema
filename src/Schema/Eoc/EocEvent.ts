/**Event列表 */
export const EocEventList = [
    // character / NONE
    // 在玩家激活神器时触发
    // { "character", character_id }, { "item_name", string },
    "activates_artifact",

    // character / NONE
    // 当任何角色激活迷你核弹时触发
    // { "character", character_id }
    "activates_mininuke",

    // character / NONE
    // 当角色使用诱变剂时触发
    // { "character", character_id }, { "technique", mutagen_technique },
    "administers_mutagen",

    // avatar / NONE
    // 当作为矿井终局的一部分生成amigara恐怖时触发
    // NONE
    "angers_amigara_horrors",

    // avatar / NONE
    // 当玩家穿越大地图边界时触发，包括玩家生成时
    // { "pos", tripoint }, { "oter_id", oter_id },
    "avatar_enters_omt",

    // avatar / NONE
    // 当玩家移动时触发
    // { "mount", mtype_id }, { "terrain", ter_id }, { "movement_mode", move_mode_id }, { "underwater", bool }, { "z", int },
    "avatar_moves",

    // avatar / NONE
    // 当玩家死亡时触发
    // NONE
    "avatar_dies",

    // avatar / NONE
    // 当使用pedestal_wyrm检查动作时触发
    // NONE
    "awakes_dark_wyrms",

    // character / NONE
    // 当角色被机器人拍照后作为定时事件的一部分生成警察机器人/防暴机器人时触发
    // { "character", character_id }
    "becomes_wanted",

    // character / NONE
    // 当任何身体部位达到0 hp时触发
    // { "character", character_id }, { "part", body_part },
    "broken_bone",

    // character / NONE
    // 当修复效果因到期而被移除时触发(Character::mend)
    // { "character", character_id }, { "part", body_part },
    "broken_bone_mends",

    // character / NONE
    // 当带有CORPSE标志的物品位于与完成的带有post-special done_grave的建筑相同的瓦片上时触发
    // { "character", character_id }, { "corpse_type", mtype_id }, { "corpse_name", string },
    "buries_corpse",

    // avatar / NONE
    // 当任何派系的营地被接管时触发
    // { "old_owner", faction_id }, { "new_Owner", faction_id }, { "camp_name", string }, { "was_violent", bool },
    "camp_taken_over",

    // avatar / NONE
    // 当通过"旧实验室"终局的计算机激活共振级联选项时触发
    // NONE
    "causes_resonance_cascade",

    // character / NONE
    // 在成功的屠宰行动后触发。butcher_type的可能值是ACT_BLEED, ACT_BUTCHER, ACT_BUTCHER_FULL, ACT_FIELD_DRESS, ACT_SKIN, ACT_QUARTER, ACT_DISMEMBER, ACT_DISSECT
    // { "character", character_id }, { "monster_id", mtype_id }, { "butcher_type", string },
    "character_butchered_corpse",

    // character / NONE
    // 当角色施放法术时触发。当施放具有多种效果的法术时，将触发效果的数量
    // { "character", character_id }, { "spell", spell_id }, { "school", trait_id }, { "difficulty", int }, { "cost", int }, { "cast_time", int }, { "damage", int },
    "character_casts_spell",

    // character / NONE
    // 当角色消耗物品时触发
    // { "character", character_id }, { "itype", itype_id },
    "character_consumes_item",

    // character / NONE
    // 当角色死亡时触发
    // { "character", character_id },
    "character_dies",

    // character / NONE
    // 当角色吃东西时触发
    // { "character", character_id }, { "itype", itype_id },
    "character_eats_item",

    // character / NONE
    // 当角色完成或取消活动时触发
    // { "character", character_id }, { "activity", activity_id }, { "canceled", bool }
    "character_finished_activity",

    // character / NONE
    // 当角色忘记法术时触发
    // { "character", character_id }, { "spell", spell_id }
    "character_forgets_spell",

    // character / NONE
    // 当角色获得效果时触发
    // { "character", character_id }, { "effect", efftype_id }, { "bodypart", bodypart_id }, { "intensity", int }
    "character_gains_effect",

    // character / NONE
    // 当角色被爆头时触发
    // { "character", character_id }
    "character_gets_headshot",

    // character / NONE
    // 当角色治疗伤害时触发
    // { "character", character_id }, { "damage", int },
    "character_heals_damage",

    // character / NONE
    // 当角色杀死另一个角色时触发
    // { "killer", character_id }, { "victim", character_id }, { "victim_name", string },
    "character_kills_character",

    // character / monster
    // 当角色杀死怪物时触发
    // { "killer", character_id }, { "victim_type", mtype_id }, { "exp", int },
    "character_kills_monster",

    // character / NONE
    // 当角色学习法术时触发
    // { "character", character_id }, { "spell", spell_id }
    "character_learns_spell",

    // character / NONE
    // 当角色失去效果时触发
    // { "character", character_id }, { "effect", efftype_id }, { "bodypart", bodypart_id }
    "character_loses_effect",

    // character (attacker) / character (victim)
    // 当角色近战攻击另一个角色时触发
    // { "attacker", character_id }, { "weapon", itype_id }, { "hits", bool }, { "victim", character_id }, { "victim_name", string },
    "character_melee_attacks_character",

    // character / monster
    // 当角色近战攻击怪物时触发
    // { "attacker", character_id }, { "weapon", itype_id }, { "hits", bool }, { "victim_type", mtype_id },
    "character_melee_attacks_monster",

    // character / NONE
    // 当角色因辐射而变异时触发
    // { "character", character_id },
    "character_radioactively_mutates",

    // character (attacker) / character (victim)
    // 当角色远程攻击另一个角色时触发
    // { "attacker", character_id }, { "weapon", itype_id }, { "ammo", itype_id }, { "is_throw", bool }, { "victim", character_id }, { "victim_name", string },
    "character_ranged_attacks_character",

    // character / monster
    // 当角色远程攻击怪物时触发
    // { "attacker", character_id }, { "weapon", itype_id }, { "ammo", itype_id }, { "is_throw", bool }, { "victim_type", mtype_id },
    "character_ranged_attacks_monster",

    // character / NONE
    // 当角色破坏瓦片时触发
    // { "character", character_id }, { "terrain", ter_str_id }, { "furniture", furn_str_id },
    "character_smashes_tile",

    // character / NONE
    // 当角色开始或恢复活动时触发
    // { "character", character_id }, { "activity", activity_id }, { "resume", bool }
    "character_starts_activity",

    // character / NONE
    // 当角色脱下穿戴的物品时触发。如果使用run_inv_eocs，请记住事件在物品实际移除之前触发
    // { "character", character_id }, { "itype", itype_id }
    "character_takeoff_item",

    // character / attacker if exists, otherwise NONE(character or monster)
    // 当角色从任何生物受到任何伤害时触发
    // { "character", character_id }, { "damage", int }, { "bodypart", bodypart_id }, { "pain", int },
    "character_takes_damage",

    // monster / attacker if exists, otherwise NONE(character or monster)
    // 当怪物从任何生物受到任何伤害时触发。包括来自出血等效果的伤害
    // { "damage", int }, { "dies", bool },
    "monster_takes_damage",

    // character / NONE
    // 当角色触发陷阱时触发
    // { "character", character_id }, { "trap", trap_str_id },
    "character_triggers_trap",

    // character / NONE
    // 在玩家失去睡眠效果并醒来的那一刻触发
    // { "character", character_id },
    "character_wakes_up",

    // character / NONE
    // 在角色尝试入睡的那一刻触发，在确认并设置闹钟之后，但在"你躺下"之前
    // { "character", character_id },
    "character_attempt_to_fall_asleep",

    // character / NONE
    // 在角色实际入睡的那一刻触发；触发包括角色因困倦或药物而短时间睡眠的情况；睡眠持续时间可能会因伤害/噪音/光线/疼痛阈值和其他因素而在睡眠中途改变
    // { "character", character_id }, { "duration", int_ (in seconds) }
    "character_falls_asleep",

    // character / item to wield
    // 当角色持握物品时触发
    // { "character", character_id }, { "itype", itype_id },
    "character_wields_item",

    // character / item to wear
    // 当角色穿戴物品时触发
    // { "character", character_id }, { "itype", itype_id },
    "character_wears_item",

    // character / item to wear
    // 当穿戴的护甲因伤害而被设置为销毁时触发。护甲仍然存在，但会在EOC完成运行后立即被销毁
    // { "character", character_id }, { "itype", itype_id },
    "character_armor_destroyed",

    // character / NONE
    // 当角色消耗marloss物品时触发
    // { "character", character_id }, { "itype", itype_id },
    "consumes_marloss_item",

    // character / NONE
    // 当角色跨越marloss阈值时触发
    // { "character", character_id }
    "crosses_marloss_threshold",

    // character / NONE
    // 当角色跨越变异阈值时触发
    // { "character", character_id }, { "category", mutation_category_id },
    "crosses_mutation_threshold",

    // character / NONE
    // 当角色跨越mycus阈值时触发
    // { "character", character_id }
    "crosses_mycus_threshold",

    // character / NONE
    // 当角色砍倒树时触发
    // { "character", character_id }
    "cuts_tree",

    // character / NONE
    // 当dermatik卵孵化时触发
    // { "character", character_id }
    "dermatik_eggs_hatch",

    // character / NONE
    // 当dermatik卵被注入时触发
    // { "character", character_id }
    "dermatik_eggs_injected",

    // avatar / NONE
    // 仅通过带有effect_str ROOTS_DIE的法术触发（目前通过triffid心脏的死亡法术）
    // NONE
    "destroys_triffid_grove",

    // character / NONE
    // 当角色死于哮喘发作时触发
    // { "character", character_id }
    "dies_from_asthma_attack",

    // character / NONE
    // 当角色死于药物过量时触发
    // { "character", character_id }, { "effect", efftype_id },
    "dies_from_drug_overdose",

    // character / NONE
    // 当角色死于出血时触发
    // { "character", character_id }
    "dies_from_bleeding",

    // character / NONE
    // 当角色死于低血容量时触发
    // { "character", character_id }
    "dies_from_hypovolemia",

    // character / NONE
    // 当角色死于红细胞损失时触发
    // { "character", character_id }
    "dies_from_redcells_loss",

    // character / NONE
    // 当角色死于感染时触发
    // { "character", character_id }
    "dies_of_infection",

    // character / NONE
    // 当角色死于饥饿时触发
    // { "character", character_id }
    "dies_of_starvation",

    // character / NONE
    // 当角色死于口渴时触发
    // { "character", character_id }
    "dies_of_thirst",

    // avatar / NONE
    // 当角色挖到岩浆时触发
    // NONE
    "digs_into_lava",

    // avatar / NONE
    // 通过导弹发射井特殊区域的解除导弹计算机动作触发
    // NONE
    "disarms_nuke",

    // avatar / NONE
    // 通过使用动作SEWAGE触发
    // NONE
    "eats_sewage",

    // character / NONE
    // 当变异进化时触发
    // { "character", character_id }, { "from_trait", trait_id }, { "to_trait", trait_id }
    "evolves_mutation",

    // character / NONE
    // 当带有post-special done_dig_grave或done_dig_grave_nospawn的建筑完成时触发
    // { "character", character_id }
    "exhumes_grave",

    // character / NONE
    // 当安装CBM失败时触发
    // { "character", character_id }, { "bionic", bionic_id }
    "fails_to_install_cbm",

    // character / NONE
    // 当移除CBM失败时触发
    // { "character", character_id }, { "bionic", bionic_id }
    "fails_to_remove_cbm",

    // character / NONE
    // 当角色因疲劳而入睡时触发
    // { "character", character_id }
    "falls_asleep_from_exhaustion",

    // avatar / NONE
    // 当载具部件（防水容器/带有弹匣口袋的弹匣/反应堆）受到足够伤害时触发
    // { "vehicle_name", string }
    "fuel_tank_explodes",

    // character / NONE
    // 当获得成瘾时触发
    // { "character", character_id }, { "add_type", addiction_id }
    "gains_addiction",

    // character / NONE
    // 当获得变异时触发
    // { "character", character_id }, { "trait", trait_id }
    "gains_mutation",

    // character / NONE
    // 当获得熟练度时触发
    // { "character", character_id }, { "proficiency", proficiency_id }
    "gains_proficiency",

    // character / NONE
    // 当获得技能等级时触发
    // { "character", character_id }, { "skill", skill_id }, { "new_level", int }
    "gains_skill_level",

    // avatar / NONE
    // 当显示ASCII墓碑画面时触发（显然是在角色死亡时）
    // { "avatar_id", character_id }, { "avatar_name", string }, { "avatar_is_male", bool }, { "is_suicide", bool }, { "last_words", string }
    "game_avatar_death",

    // avatar / NONE
    // 当新角色被控制和新游戏角色初始化期间触发
    // { "is_new_game", bool }, { "is_debug", bool }, { "avatar_id", character_id }, { "avatar_name", string }, { "avatar_is_male", bool }, { "avatar_profession", profession_id }, { "avatar_custom_profession", string }
    "game_avatar_new",

    // avatar / NONE
    // 仅在加载已保存的游戏时触发（不是新游戏！）
    // { "cdda_version", string }
    "game_load",

    // avatar / NONE
    // 在游戏加载和新游戏开始期间触发
    // { "cdda_version", string }
    "game_begin",

    // avatar / NONE
    // 在完全接受死亡，结局等播放后触发（可能不能用于eoc目的？）
    // { "total_time_played", chrono_seconds }
    "game_over",

    // avatar / NONE
    // 当游戏保存时触发
    // { "time_since_load", chrono_seconds }, { "total_time_played", chrono_seconds }
    "game_save",

    // avatar / NONE
    // 仅在新游戏角色初始化期间触发
    // { "game_version", string }
    "game_start",

    // character / NONE
    // 当安装CBM时触发
    // { "character", character_id }, { "bionic", bionic_id }
    "installs_cbm",

    // character / NONE
    // 当安装故障CBM时触发
    // { "character", character_id }, { "bionic", bionic_id }
    "installs_faulty_cbm",

    // character / NONE
    // 当学习武术时触发
    // { "character", character_id }, { "martial_art", matype_id }
    "learns_martial_art",

    // character / NONE
    // 当失去成瘾时触发
    // { "character", character_id }, { "add_type", addiction_id }
    "loses_addiction",

    // character / NONE
    // 当失去变异时触发
    // { "character", character_id }, { "trait", trait_id }
    "loses_mutation",

    // NPC / NONE
    // 当NPC的态度通过对话效果hostile设置为NPCATT_KILL时触发
    // { "npc", character_id }, { "npc_name", string }
    "npc_becomes_hostile",

    // avatar / NONE
    // 当通过（"旧实验室"终局的？）计算机激活TOGGLE PORTAL选项时触发
    // NONE
    "opens_portal",

    // character / NONE
    // 当玩家打开法术菜单或当NPC评估法术作为最佳武器时触发（准备使用它）
    // { "character", character_id }
    "opens_spellbook",

    // avatar / NONE
    // 当使用pedestal_temple检查动作消耗石化眼睛时触发
    // NONE
    "opens_temple",

    // avatar / NONE
    // 当玩家违反行为准则时触发
    // { "conduct", achievement_id }, { "achievements_enabled", bool }
    "player_fails_conduct",

    // avatar / NONE
    // 当玩家获得成就时触发
    // { "achievement", achievement_id }, { "achievements_enabled", bool }
    "player_gets_achievement",

    // character / NONE
    // 当玩家改变法术等级时触发，可能通过施法、阅读法术书或使用EoC。使用chargen选项中的法术生成新角色也会运行此事件
    // { "character", character_id }, { "spell", spell_id }, { "new_level", int }, { "spell_class", trait_id }
    "player_levels_spell",

    // character / NONE
    // 当读书时触发
    // { "character", character_id }
    "reads_book",

    // avatar / NONE
    // 当通过（"旧实验室"终局的？）计算机激活Release Specimens选项时触发
    // NONE
    "releases_subspace_specimens",

    // character / NONE
    // 当移除CBM时触发
    // { "character", character_id }, { "bionic", bionic_id }
    "removes_cbm",

    // avatar / NONE
    // 通过srcf_seal_order计算机动作触发
    // NONE
    "seals_hazardous_material_sarcophagus",

    // character / NONE
    // 仅当角色完成施法时触发一次
    // { "character", character_id }, { "success", bool }, { "spell", spell_id }, { "school", trait_id }, { "difficulty", int }, { "cost", int }, { "cast_time", int }, { "damage", int }
    "spellcasting_finish",

    // character / NONE
    // （未实现）
    // { "character", character_id }, { "victim_name", string }
    "telefrags_creature",

    // character / NONE
    // 当角色（实际上只有avatar有资格）因teleglow效果而被传送时触发
    // { "character", character_id }
    "teleglow_teleports",

    // character / NONE
    // 当角色（实际上只有avatar有资格）被传送到墙中时触发
    // { "character", character_id }, { "obstacle_name", string }
    "teleports_into_wall",

    // avatar / NONE
    // 当通过（"旧实验室"终局的？）计算机激活Terminate Specimens选项时触发
    // NONE
    "terminates_subspace_specimens",

    // character / NONE
    // 当呕吐时触发
    // { "character", character_id }
    "throws_up",

    // character / NONE
    // 当因黑客攻击、撬动、使用计算机的失败状态或（如果玩家足够近）损坏带有ALARMED标志的地形而触发警报时触发
    // { "character", character_id }
    "triggers_alarm",

    // avatar / NONE
    // 当使用调试菜单时触发
    // { "debug_menu_option", debug_menu_index }
    "uses_debug_menu",

    // avatar / NONE
    // 当u变量改变时触发
    // { "var", string }, { "value", string }
    "u_var_changed",

    // vehicle / avatar
    // 当载具移动时触发
    // { "avatar_on_board", bool }, { "avatar_is_driving", bool }, { "avatar_remote_control", bool },
    // { "is_flying_aircraft", bool }, { "is_floating_watercraft", bool }, { "is_on_rails", bool },
    // { "is_falling", bool }, { "is_sinking", bool }, { "is_skidding", bool },
    // { "velocity", int }, { "z", int }
    "vehicle_moves"
] as const;

export type EocEvent = typeof EocEventList[number];