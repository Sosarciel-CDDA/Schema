import { AnyString } from "@zwa73/js-utils";
import { AddictionTypeID } from "Schema/AddictionType";
import { BodyPartID } from "Schema/BodyPart";
import { DamageTypeID } from "Schema/DamageType";
import { EffectID } from "Schema/Effect";
import { FieldTypeID } from "Schema/FieldType";
import { FlagID } from "Schema/Flag";
import { ExtractDefineID, SchemaString } from "Schema/GenericDefine";
import { ItemID } from "Schema/Item";
import { MonsterID } from "Schema/Monster";
import { MonsterGroupID } from "Schema/MonsterGroup";
import { MutationID } from "Schema/Mutation";
import { MutationCategoryID } from "Schema/MutationCategory";
import { NPCFactionID } from "Schema/NPCFaction";
import { ProficiencyID } from "Schema/Proficiency";
import { SkillID } from "Schema/Skill";
import { SpeciesID } from "Schema/Species";
import { SpellID } from "Schema/Spell";
import { VitaminID } from "Schema/Vitamin";
import { EocID } from "../Eoc";
import { ToolQualityID } from "Schema/ToolQuality";

type UN  = 'u'|'n';
type UNG = 'u'|'n'|'global';
type G   = 'global';
type Talker = UN|UNG|G;
const pt = (talker:Talker)=>talker=='global' ? '' : `${talker}_`;
const fk = (opts?:Record<string,string|number|boolean>,prefix:boolean=true)=>opts==undefined ? '' :
    (prefix ? ', ' : '') + Object.entries(opts)
    .map(([k,v])=>`'${k}': ${v}`).join(', ')

type FNP<T extends string> = `'${ExtractDefineID<T>}'`|SchemaString;

/**预定义的jmath函数 */
export namespace JM {
/**获取对应部位的护甲值  
 * 只读  
 * 返回角色特定身体部位的护甲值, 对应特定伤害类型  
 * @example
 * "condition": { "math": [ "u_armour('bash', 'torso') >= 5"] }
 */
export const armor = (talker:UN,damageType:FNP<DamageTypeID>,bodypart:FNP<BodyPartID>)=>
    `${pt(talker)}armor(${damageType}, ${bodypart})`;


/**获取角色当前武器的攻击速度  
 * 只读  
 * 返回角色当前武器的调整后攻击速度  
 * @example
 * "condition": { "math": [ "u_attack_speed() >= 10"] }
 */
export const attackSpeed = (talker: UN) =>
    `${pt(talker)}attack_speed()`;

/**获取角色或怪物的移动速度  
 * 只读  
 * 返回单位移动速度（默认角色为 100）  
 * @example
 * "condition": { "math": [ "u_speed() >= 10"] }
 */
export const speed = (talker: UN) =>
    `${pt(talker)}speed()`;


/**获取角色对某种成瘾类型的强度  
 * 只读  
 * 返回角色当前对指定成瘾类型的强度值  
 * @example
 * "condition": { "math": [ "u_addiction_intensity('caffeine') >= 1"] }
 */
export const addictionIntensity = (talker: UN, addictionType: FNP<AddictionTypeID>) =>
    `${pt(talker)}addiction_intensity(${addictionType})`;


/**获取角色对某种成瘾类型剩余持续时间（单位：回合）  
 * 可读可写  
 * @example
 * "condition": { "math": [ "u_addiction_turns('caffeine') >= 3600"] }
 */
export const addictionTurns = (talker: UN, addictionType: FNP<AddictionTypeID>) =>
    `${pt(talker)}addiction_turns(${addictionType})`;


/**获取附近角色数量（包括玩家和非幻觉 NPC）  
 * 只读  
 * 可选参数：radius、location、attitude、allow_hallucinations  
 * @example
 * "condition": { "math": [ "u_characters_nearby('radius': u_search_radius * 3, 'attitude': 'not_allies' ) > 0" ] }
 * "condition": { "math": [ "characters_nearby('radius': u_search_radius * 3, 'location': u_search_loc) > 5" ] }
 */
export const charactersNearby = (
    talker: UNG,
    kwargs?: {
        radius?: string,
        location?: string,
        attitude?: 'hostile' | 'allies' | 'not_allies' | 'any',
        allow_hallucinations?: number
    }
) => `${pt(talker)}characters_nearby(${fk(kwargs,false)})`;


/**获取角色背包中某物品的充能次数  
 * 只读  
 * @example
 * "condition": { "math": [ "u_charge_count('light_battery_cell') >= 100"] }
 */
export const chargeCount = (talker: UN, itemID: FNP<ItemID>) =>
    `${pt(talker)}charge_count(${itemID})`;


/**获取角色某部位的覆盖率  
 * 只读  
 * @example
 * "condition": { "math": [ "u_coverage('torso') > 0"] }
 */
export const coverage = (talker: UN, bodypart: FNP<BodyPartID>) =>
    `${pt(talker)}coverage(${bodypart})`;


/**获取两个位置之间的距离  
 * 只读  
 * 参数可以是位置变量或特殊字符串（如 'u', 'npc'）  
 * @example
 * "condition": { "math": [ "distance('u', loc) <= 50"] }
 */
export const distance = (from: 'u'|'npc'|AnyString, to: 'u'|'npc'|AnyString) =>
    `distance(${from}, ${to})`;


/**获取角色某状态效果的强度  
 * 只读  
 * 可选参数：bodypart  
 * @example
 * "condition": { "math": [ "u_effect_intensity('bite', 'bodypart': 'torso') > 1"] }
 */
export const effectIntensity = (
    talker: UN,
    effectID: FNP<EffectID>,
    kwargs?: { bodypart?: FNP<BodyPartID> }
) => `${pt(talker)}effect_intensity(${effectID}${fk(kwargs)})`;


/**获取角色某状态效果的持续时间  
 * 可读可写  
 * 可选参数：bodypart, unit（默认单位为秒）  
 * @example
 * "condition": { "math": [ "u_effect_duration('bite', 'bodypart': 'torso') > 1"] }
 * { "math": [ "_thing = u_effect_duration('yrax_overcharged', 'bodypart': 'torso', 'unit': 'hours')" ] }
 */
export const effectDuration = (
    talker: UN,
    effectID: FNP<EffectID>,
    kwargs?: { bodypart?: FNP<BodyPartID>, unit?: 'seconds' | 'minutes' | 'hours' }
) => `${pt(talker)}effect_duration(${effectID}${fk(kwargs)})`;


/**获取角色某部位的累积负重值  
 * 只读  
 * 返回角色特定身体部位的负重值  
 * @example
 * "condition": { "math": [ "u_encumbrance('torso') > 0"] }
 */
export const encumbrance = (talker: UN, bodypart: FNP<BodyPartID>) =>
    `${pt(talker)}encumbrance(${bodypart})`;

/**获取角色当前生命值  
 * 可读可写  
 * @example
 * { "math": [ "u_health() -= 1" ] }
 */
export const health = (talker: UN) =>
    `${pt(talker)}health()`;

/**获取能量字符串对应的数值（单位：毫焦耳）  
 * 只读  
 * @example
 * { "math": [ "u_val('power') -= energy('25 kJ')" ] }
 */
export const energy = (value: string) =>
    `energy(${value})`;

/**获取指定派系对角色的好感度  
 * 只读  
 * @example
 * "condition": { "math": [ "faction_like('hells_raiders') < -60" ] }
 */
export const factionLike = (factionID: FNP<NPCFactionID>) =>
    `faction_like(${factionID})`;

/**获取指定派系对角色的尊重值  
 * 只读  
 */
export const factionRespect = (factionID: FNP<NPCFactionID>) =>
    `faction_respect(${factionID})`;

/**获取指定派系对角色的信任值  
 * 只读  
 */
export const factionTrust = (factionID: FNP<NPCFactionID>) =>
    `faction_trust(${factionID})`;

/**获取指定派系的食物储备  
 * 可读可写  
 * 可选参数：vitamin  
 * @example
 * { "math": [ "calcium_amount = faction_food_supply('your_followers', 'vitamin':'calcium')" ] }
 */
export const factionFoodSupply = (
    factionID: FNP<NPCFactionID>,
    kwargs?: { vitamin?: FNP<VitaminID> }
) => `faction_food_supply(${factionID}${fk(kwargs)})`;

/**获取指定派系的财富值  
 * 只读  
 */
export const factionWealth = (factionID: FNP<NPCFactionID>) =>
    `faction_wealth(${factionID})`;

/**获取指定派系的力量值  
 * 只读  
 */
export const factionPower = (factionID: FNP<NPCFactionID>) =>
    `faction_power(${factionID})`;

/**获取指定派系的规模  
 * 可读可写  
 */
export const factionSize = (factionID: FNP<NPCFactionID>) =>
    `faction_size(${factionID})`;

/**获取指定位置上的场强  
 * 只读  
 * 可选参数：location（global 时必须提供）  
 * @example
 * "condition": { "math": [ "u_field_strength('fd_blood') > 5" ] }
 * "condition": { "math": [ "field_strength('fd_blood_insect', 'location': u_search_loc) > 5" ] }
 */
export const fieldStrength = (
    talker: UNG,
    fieldID: FNP<FieldTypeID>,
    kwargs?: { location?: string }
) => `${pt(talker)}field_strength(${fieldID}${fk(kwargs)})`;

/**判断角色是否拥有指定 flag  
 * 只读  
 * 用于三元表达式条件判断  
 * @example
 * "condition": { "math": [ "u_blorg = u_has_flag('MUTATION_TRESHOLD') ? 100 : 15" ] }
 */
export const hasFlag = (talker: UN, flagID: FNP<FlagID>) =>
    `${pt(talker)}has_flag(${flagID})`;

/**判断角色是否拥有指定 trait  
 * 只读  
 * 用于三元表达式条件判断  
 * @example
 * "condition": { "math": [ "u_blorg = u_has_trait('FEEBLE') ? 100 : 15" ] }
 */
export const hasTrait = (talker: UN, traitID: FNP<MutationID>) =>
    `${pt(talker)}has_trait(${traitID})`;

/**获取某 mutation 分类下的 trait 总和（不限定角色）  
 * 只读  
 * 可选参数：type（POSITIVE、NEGATIVE、ALL）  
 * @example
 * "condition": { "math": [ "u_sum_traits_of_category('RAT') < u_sum_traits_of_category('RAT', 'type': 'POSITIVE')" ] }
 */
export const sumTraitsOfCategory = (
    talker: UN,
    categoryID: FNP<MutationCategoryID>,
    kwargs?: { type?: 'POSITIVE' | 'NEGATIVE' | 'ALL' }
) => `${pt(talker)}sum_traits_of_category(${categoryID}${fk(kwargs)})`;

/**获取角色当前拥有的某 mutation 分类下的 trait 总和  
 * 只读  
 * 可选参数：type（POSITIVE、NEGATIVE、ALL）  
 * @example
 * "condition": { "math": [ "u_sum_traits_of_category_char_has('RAT') < u_sum_traits_of_category_char_has('RAT', 'type': 'POSITIVE')" ] }
 */
export const sumTraitsOfCategoryCharHas = (
    talker: UN,
    categoryID: FNP<MutationCategoryID>,
    kwargs?: { type?: 'POSITIVE' | 'NEGATIVE' | 'ALL' }
) => `${pt(talker)}sum_traits_of_category_char_has(${categoryID}${fk(kwargs)})`;

/**判断角色是否拥有某项熟练度  
 * 只读  
 * 用于三元表达式条件判断  
 * @example
 * "condition": { "math": [ "u_blorg = u_has_proficiency('prof_intro_biology') ? 100 : 15" ] }
 */
export const hasProficiency = (talker: UN, proficiencyID: FNP<ProficiencyID>) =>
    `${pt(talker)}has_proficiency(${proficiencyID})`;

/**判断变量是否已定义  
 * 只读  
 * 用于三元表达式条件判断  
 * @example
 * "condition": { "math": [ "u_blorg = has_var(fancy_var) ? fancy_var : 15" ] }
 */
export const hasVar = (varName: string) =>
    `has_var(${varName})`;

/**获取或设置角色某部位的生命值  
 * 可读可写  
 * 支持特殊值：ALL、ALL_MAJOR、ALL_MINOR  
 * @example
 * "condition": { "math": [ "hp('torso') > 100"] }
 */
export const hp = (bodypart: FNP<BodyPartID>) =>
    `hp(${bodypart})`;

/**获取角色某部位的最大生命值  
 * 只读  
 * @example
 * "condition": { "math": [ "u_hp_max('torso') >= 100"] }
 */
export const hpMax = (talker: UN, bodypart: FNP<BodyPartID>) =>
    `${pt(talker)}hp_max(${bodypart})`;


/**获取游戏选项的数值  
 * 只读  
 * 返回指定游戏选项的数值  
 * @example
 * "condition": { "math": [ "game_option('NPC_SPAWNTIME') >= 5"] }
 */
export const gameOption = (optionID: FNP<string>) =>
    `game_option(${optionID})`;

/**获取物品的枪械伤害  
 * 只读  
 * 参数为伤害类型，可使用 'ALL' 获取总伤害  
 * @example
 * { "math": [ "mygun = n_gun_damage('ALL')" ] }
 */
export const gunDamage = (talker: UN, damageType: FNP<DamageTypeID>) =>
    `${pt(talker)}gun_damage(${damageType})`;

/**获取角色背包中某物品的数量  
 * 只读  
 * @example
 * "condition": { "math": [ "u_item_count('backpack') >= 1"] }
 */
export const itemCount = (talker: UN, itemID: FNP<ItemID>) =>
    `${pt(talker)}item_count(${itemID})`;

/**获取带有指定 flag 的穿戴物品的辐射值  
 * 只读  
 * 可选参数：aggregate（min/max/sum/average/first/last）  
 * @example
 * "condition": { "math": [ "u_item_rad('RAD_DETECT') >= 1"] }
 */
export const itemRad = (
    talker: UN,
    flagID: FNP<FlagID>,
    kwargs?: { aggregate?: 'min' | 'max' | 'sum' | 'average' | 'first' | 'last' }
) => `${pt(talker)}item_rad(${flagID}${fk(kwargs)})`;

/**获取物品的近战伤害  
 * 只读  
 * 参数为伤害类型，可使用 'ALL' 获取总伤害  
 * @example
 * { "math": [ "mymelee = n_melee_damage('ALL')" ] }
 */
export const meleeDamage = (talker: UN, damageType: FNP<DamageTypeID>) =>
    `${pt(talker)}melee_damage(${damageType})`;

/**获取附近怪物数量  
 * 只读  
 * 可变参数：怪物 ID 列表  
 * 可选参数：radius, location, attitude  
 * @example
 * "condition": { "math": [ "u_monsters_nearby('radius': u_search_radius * 3) > 5" ] }
 * "condition": { "math": [ "monsters_nearby('mon_void_maw', 'mon_void_limb', 'mon_fotm_var', 'radius': u_search_radius * 3, 'location': u_search_loc)", ">", "5" ] }
 */
export const monstersNearby = (
    talker: UNG,
    ids: FNP<MonsterID>[],
    kwargs?: {
        radius?: string,
        location?: string,
        attitude?: 'hostile' | 'friendly' | 'both'
    }
) => `${pt(talker)}monsters_nearby(${ids.join(', ')}${fk(kwargs)})`;

/**获取指定 mod 的加载顺序  
 * 只读  
 * 返回 mod 的加载顺序，未加载则返回 -1  
 */
export const modLoadOrder = (modID: FNP<string>) =>
    `mod_load_order(${modID})`;

/**获取附近指定物种的怪物数量  
 * 只读  
 * 同 monstersNearby，但参数为物种 ID  
 */
export const monSpeciesNearby = (
    talker: UNG,
    speciesIDs: (FNP<SpeciesID> | string)[],
    kwargs?: {
        radius?: string,
        location?: string,
        attitude?: 'hostile' | 'friendly' | 'both'
    }
) => `${pt(talker)}mon_species_nearby(${speciesIDs.join(', ')}${fk(kwargs)})`;

/**获取附近指定怪物群组的数量  
 * 只读  
 * 同 monstersNearby，但参数为群组 ID  
 */
export const monGroupsNearby = (
    talker: UNG,
    groupIDs: (FNP<MonsterGroupID> | string)[],
    kwargs?: {
        radius?: string,
        location?: string,
        attitude?: 'hostile' | 'friendly' | 'both'
    }
) => `${pt(talker)}mon_groups_nearby(${groupIDs.join(', ')}${fk(kwargs)})`;

/**获取当前月相  
 * 只读  
 * 返回当前的月亮阶段（0~7）  
 */
export const moonPhase = () =>
    `moon_phase()`;

/**弹出数值输入框  
 * 只读  
 * 参数为提示文本和默认值  
 * @example
 * "math": [ "u_value_to_set = num_input('Playstyle Perks Cost?', 4)" ]
 */
export const numInput = (prompt: string, defaultValue: number | string) =>
    `num_input(${prompt}, ${defaultValue})`;

/**获取或设置角色的疼痛值  
 * 可读可写  
 * 可选参数：type（perceived/raw）  
 * @example
 * { "math": [ "n_pain() = u_pain() + 9000" ] }
 * { "math": [ "u_pain('type': 'perceived' ) >= 40" ] }
 */
export const pain = (
    talker: UN,
    kwargs?: { type?: 'perceived' | 'raw' }
) => `${pt(talker)}pain(${fk(kwargs, false)})`;

/**获取或设置角色的熟练度  
 * 可读可写  
 * 可选参数：format, direct  
 * @example
 * { "math": [ "u_proficiency('prof_intro_chemistry', 'format': 'percent') = 50" ] }
 */
export const proficiency = (
    talker: UN,
    proficiencyID: FNP<ProficiencyID>,
    kwargs?: {
        format?: 'percent' | 'permille' | 'time_spent' | 'time_left' | 'total_time_required',
        direct?: boolean | string
    }
) => `${pt(talker)}proficiency(${proficiencyID}${fk(kwargs)})`;

/**获取角色已掌握的某法术学派的最高等级  
 * 只读  
 * @example
 * "condition": { "math": [ "u_school_level('MAGUS') >= 3"] }
 */
export const schoolLevel = (talker: UN, schoolID: FNP<string>) =>
    `${pt(talker)}school_level(${schoolID})`;

/**获取或设置法术学派的临时等级调整  
 * 可读可写  
 * @example
 * { "math": [ "u_school_level_adjustment('MAGUS')++"] }
 */
export const schoolLevelAdjustment = (talker: UN, schoolID: FNP<string>) =>
    `${pt(talker)}school_level_adjustment(${schoolID})`;

/**获取或设置技能等级  
 * 可读可写  
 * @example
 * "condition": { "math": [ "u_skill('driving') >= 5"] }
 */
export const skill = (talker: UN, skillID: FNP<SkillID>) =>
    `${pt(talker)}skill(${skillID})`;

/**获取法术难度  
 * 可读可写  
 * 可选参数：baseline（是否忽略临时修正）  
 * @example
 * "math": [ "_difficulty = u_spell_difficulty('test_spell_id', 'baseline': 'true')" ]
 */
export const spellDifficulty = (
    talker: UN,
    spellID: FNP<SpellID>,
    kwargs?: { baseline?: 'true' | 'false' }
) => `${pt(talker)}spell_difficulty(${spellID}${fk(kwargs)})`;

/**获取或设置技能经验  
 * 可读可写  
 * 可选参数：format（percentage/raw）  
 * @example
 * { "math": [ "u_skill_exp('driving', 'format': crt_format)--"] }
 */
export const skillExp = (
    talker: UN,
    skillID: FNP<SkillID>,
    kwargs?: { format?: 'percentage' | 'raw' | string }
) => `${pt(talker)}skill_exp(${skillID}${fk(kwargs)})`;

/**获取或设置法术经验  
 * 可读可写  
 * @example
 * "condition": { "math": [ "u_spell_exp('SPELL_ID') >= 5"] }
 */
export const spellExp = (talker: UN, spellID: FNP<SpellID>) =>
    `${pt(talker)}spell_exp(${spellID})`;

/**获取某法术等级所需的经验值  
 * 只读  
 * 参数为 spellID 和目标等级  
 * @example
 * "math": [ "spell_exp_for_level('SPELL_ID', u_spell_level('SPELL_ID') ) * 5" ]
 */
export const spellExpForLevel = (spellID: FNP<SpellID>, level: string | number) =>
    `spell_exp_for_level(${spellID}, ${level})`;

/**获取角色已掌握的法术数量  
 * 只读  
 * 可选参数：school  
 * @example
 * "condition": { "math": [ "u_spell_count('school': 'MAGUS') >= 10"] }
 */
export const spellCount = (
    talker: UN,
    kwargs?: { school?: FNP<string> }
) => `${pt(talker)}spell_count(${fk(kwargs)})`;

/**获取角色所有法术等级的总和  
 * 只读  
 * 可选参数：school, level  
 * @example
 * { "math": [ "test_var1 = u_spell_level_sum()" ] }
 * { "math": [ "test_var2 = u_spell_level_sum('school': 'MAGUS')" ] }
 * { "math": [ "test_var3 = u_spell_level_sum('school': 'MAGUS', 'level': '10')" ] }
 */
export const spellLevelSum = (
    talker: UN,
    kwargs?: { school?: FNP<string>, level?: string | number }
) => `${pt(talker)}spell_level_sum(${fk(kwargs)})`;

/**获取或设置角色某法术的等级  
 * 可读可写  
 * 参数为 spellID 或 "null"  
 * @example
 * "condition": { "math": [ "u_spell_level('SPELL_ID') == -1"] }
 */
export const spellLevel = (talker: UN, spellID: FNP<SpellID> | 'null') =>
    `${pt(talker)}spell_level(${spellID})`;

/**获取或设置角色某法术的临时等级调整  
 * 可读可写  
 * 参数为 spellID 或 "null"  
 * @example
 * { "math": [ "u_spell_level_adjustment('SPELL_ID') += 3"] }
 */
export const spellLevelAdjustment = (talker: UN, spellID: FNP<SpellID> | 'null') =>
    `${pt(talker)}spell_level_adjustment(${spellID})`;

/**设置角色施法属性的临时调整（不可读取）  
 * 可写  
 * 可选参数：flag_blacklist, flag_whitelist, mod, school, spell  
 * @example
 * { "math": [ "u_spellcasting_adjustment('casting_time', 'mod': 'magiclysm', 'flag_blacklist': 'CONSUMES_RUNES' ) = -0.95" ] }
 */
export const spellcastingAdjustment = (
    talker: UN,
    aspect: string,
    kwargs?: {
        flag_blacklist?: FNP<FlagID>,
        flag_whitelist?: FNP<FlagID>,
        mod?: FNP<string>,
        school?: FNP<string>,
        spell?: FNP<SpellID>
    }
) => `${pt(talker)}spellcasting_adjustment(${aspect}${fk(kwargs)})`;

/**获取变量值，如果未定义则返回默认值  
 * 只读  
 * @example
 * "condition": { "math": [ "u_blorg = value_or( fancy_var, 15 )" ] }
 */
export const valueOr = (variable: string, fallback: string | number) =>
    `value_or(${variable}, ${fallback})`;

/**获取时间段对应的数值（单位：回合）  
 * 可读可写  
 * 可选参数：unit  
 * @example
 * { "math": [ "time('now') - u_timer_caravan_RandEnc > time('1 h')" ] }
 */
export const time = (timeStr: string, kwargs?: { unit?: string }) =>
    `time(${timeStr}${fk(kwargs)})`;

/**获取某时间点以来的时间（单位：回合）  
 * 只读  
 * 可选参数：unit  
 * @example
 * { "math": [ "time_since(u_timer_caravan_RandEnc) > time('1 h')" ] }
 */
export const timeSince = (timePoint: string, kwargs?: { unit?: string }) =>
    `time_since(${timePoint}${fk(kwargs)})`;

/**获取距离某时间点的剩余时间（单位：回合）  
 * 只读  
 * 可选参数：unit  
 * @example
 * { "math": [ "TIME_TILL_SUNRISE = time_until('sunrise', 'unit':'minutes')" ] }
 */
export const timeUntil = (timePoint: string, kwargs?: { unit?: string }) =>
    `time_until(${timePoint}${fk(kwargs)})`;

/**获取距离某 EOC 下次运行的时间  
 * 只读  
 * 可选参数：unit  
 */
export const timeUntilEOC = (eocID: FNP<EocID>, kwargs?: { unit?: string }) =>
    `time_until_eoc(${eocID}${fk(kwargs)})`;

/**获取或设置角色属性值  
 * 可读可写  
 * 参数为属性名  
 * @example
 * { "math": [ "u_val('strength') = 2" ] }
 */
export const val = (talker: UN, aspect: string) =>
    `${pt(talker)}val(${aspect})`;

/**获取 NPC 对话者的愤怒值  
 * 可读可写  
 * @example
 * { "math": [ "n_npc_anger() > 2" ] }
 */
export const npcAnger = (talker: UN) =>
    `${pt(talker)}npc_anger()`;

/**获取 NPC 对话者的恐惧值  
 * 可读可写  
 * @example
 * { "math": [ "n_npc_fear() < 2" ] }
 */
export const npcFear = (talker: UN) =>
    `${pt(talker)}npc_fear()`;

/**获取 NPC 对话者的信任值  
 * 可读可写  
 * @example
 * { "math": [ "n_npc_trust() = 2" ] }
 */
export const npcTrust = (talker: UN) =>
    `${pt(talker)}npc_trust()`;

/**获取 NPC 对话者的价值评估  
 * 可读可写  
 * @example
 * { "math": [ "n_npc_value() += 2" ] }
 */
export const npcValue = (talker: UN) =>
    `${pt(talker)}npc_value()`;

/**获取角色的丑陋值  
 * 只读  
 * @example
 * { "math": [ "n_ugliness() > 0" ] }
 */
export const ugliness = (talker: UN) =>
    `${pt(talker)}ugliness()`;

/**获取角色或物品的重量（单位：毫克）  
 * 只读  
 * @example
 * { "math": [ "u_weight() < 1000000" ] }
 */
export const weight = (talker: UN) =>
    `${pt(talker)}weight()`;

/**获取角色或物品的体积（单位：毫升）  
 * 只读  
 * @example
 * { "math": [ "u_volume() < 1000" ] }
 */
export const volume = (talker: UN) =>
    `${pt(talker)}volume()`;

/**获取或设置角色某种维生素的数值  
 * 可读可写  
 * @example
 * { "math": [ "u_vitamin('mutagen') = 0" ] }
 */
export const vitamin = (talker: UN, vitaminID: FNP<VitaminID>) =>
    `${pt(talker)}vitamin(${vitaminID})`;

/**获取角色某部位的温暖度  
 * 只读  
 * @example
 * { "math": [ "u_warmth_in_game = (u_warmth('torso') / 100) * 2 - 100"] }
 */
export const warmth = (talker: UN, bodypart: FNP<BodyPartID>) =>
    `${pt(talker)}warmth(${bodypart})`;

/**获取角色或怪物的视觉范围  
 * 只读  
 * @example
 * { "math": [ "n_vision_range() < 30"] }
 */
export const visionRange = (talker: UN) =>
    `${pt(talker)}vision_range()`;

/**获取或设置天气属性  
 * 可读可写  
 * 参数为天气属性名  
 * @example
 * { "math": [ "weather('temperature') < from_fahrenheit( 33 )" ] }
 */
export const weather = (aspect: string) =>
    `weather(${aspect})`;

/**获取物品的损伤等级  
 * 只读  
 * @example
 * "condition": { "math": [ "n_damage_level() < 1" ] }
 */
export const damageLevel = (talker: UN) =>
    `${pt(talker)}damage_level()`;

/**获取角色的热控能力（暖）  
 * 只读  
 * @example
 * "condition": { "math": [ "u_climate_control_str_heat() < 0" ] }
 */
export const climateControlStrHeat = (talker: UN) =>
    `${pt(talker)}climate_control_str_heat()`;


/**获取角色的冷控能力（寒冷环境下的舒适度）  
 * 只读  
 * 返回角色当前的 chill 气候控制值（单位：温暖点）  
 * @example
 * "condition": { "math": [ "n_climate_control_str_chill() < 0" ] }
 */
export const climateControlStrChill = (talker: UN) =>
    `${pt(talker)}climate_control_str_chill()`;

/**获取或设置角色的卡路里值  
 * 可读可写  
 * 可选参数：format（percent/raw），dont_affect_weariness（是否影响疲劳）  
 * @example
 * "condition": { "math": [ "u_calories() < 0" ] }
 * "condition": { "math": [ "u_calories('format': 'percent') > 0" ] }
 * "condition": { "math": [ "u_calories() = 110000" ] }
 */
export const calories = (
    talker: UN,
    kwargs?: {
        format?: 'percent' | 'raw',
        dont_affect_weariness?: boolean
    }
) => `${pt(talker)}calories(${fk(kwargs)})`;

/**获取角色或物品的神器共鸣值  
 * 只读  
 * 返回角色的总共鸣值，或物品的单独共鸣值  
 * @example
 * "condition": { "math": [ "u_artifact_resonance() > 0" ] }
 */
export const artifactResonance = (talker: UN) =>
    `${pt(talker)}artifact_resonance()`;

/**获取角色每日卡路里摄入/消耗记录（最多追溯 30 天）  
 * 只读  
 * 可选参数：day（0~30），type（spent/gained/ingested/total）  
 * @example
 * "condition": { "math": [ "get_calories_daily() > 1000" ] }
 * { "math": [ "foo = get_calories_daily('type':'gained', 'day':'1')" ] }
 */
export const getCaloriesDaily = (
    kwargs?: {
        day?: number | string,
        type?: 'spent' | 'gained' | 'ingested' | 'total'
    }
) => `get_calories_daily(${fk(kwargs)})`;

/**获取物品的工具质量等级  
 * 只读  
 * 参数为质量 ID  
 * 可选参数：strict（是否要求物品为空）  
 * @example
 * "condition": { "math": [ "u_quality('HACK') > 0" ] }
 * { "math": [ "_cut_quality = u_quality('CUT')" ] }
 * "condition": { "math": [ "u_quality('BOIL', 'strict': true ) > 0" ] }
 */
export const quality = (
    talker: UN,
    qualityID: FNP<ToolQualityID>,
    kwargs?: { strict?: boolean }
) => `${pt(talker)}quality(${qualityID}${fk(kwargs)})`;


};