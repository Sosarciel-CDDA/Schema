import { FieldID } from "./Field";
import { FlagID } from "./Flag";
import { CddaID, DescText } from "./GenericDefine";


/**物种 ID */
export type SpeciesID = CddaID<"SPEC">|DefineSpeciesID;


/**物种 */
export type Species = {
    type: "SPECIES";
    /**唯一ID */
    id: (SpeciesID);
    /**描述 */
    description: (DescText);
    /**血液对应的fd类型 */
    bleeds?: (FieldID);
    /**脚步声的文本描述 */
    footsteps?: (DescText);
    /**物种携带的Flag */
    flags?: FlagID[];
    /**降低怪物士气的触发器 (参见 JSON_FLAGS.md)  */
    fear_triggers?: MonsterTrigger[];
    /**提高怪物侵略性的触发器 (与 fear 相同的标志)  */
    anger_triggers?: MonsterTrigger[];
    /**降低怪物侵略性的触发器 (与 fear 相同的标志)  */
    placate_triggers?: MonsterTrigger[];
}

/**怪物触发器 列表 */
export const MonsterTriggerList = [
  "FIRE",             // 当3格内有火焰时触发，效果强度为5倍火焰等级
  "FRIEND_ATTACKED",  // 看到同阵营怪物被攻击时触发，强度为15，需被攻击目标也有一个触发器实例；总是激活角色仇恨
  "FRIEND_DIED",      // 看到同阵营怪物死亡时触发，强度为15，需死亡目标也有一个触发器实例；总是激活角色仇恨
  "HOSTILE_SEEN",     // 每看到一个敌人增加0-2点愤怒/降低士气，最多+20愤怒；仅用于愤怒/恐惧触发；以 <anger/2>% 概率激活角色仇恨
  "HURT",             // 自身受伤时触发，强度为1 + (伤害 / 3)；总是激活角色仇恨
  "NULL",             // 仅供系统源码使用（不实际触发）
  "PLAYER_CLOSE",     // 有敌人靠近至5格以内时触发；仅用于愤怒/恐惧触发；以 <anger>% 概率激活角色仇恨
  "PLAYER_WEAK",      // 敌人生命值低于70%时触发，强度 = 10 - (剩余血量百分比 / 10)；以 <anger>% 概率激活角色仇恨
  "PLAYER_NEAR_BABY", // 玩家靠近3格内的子代（通过 baby_monster 定义）时触发；增加8点愤怒、4点士气；仅愤怒触发；总是激活角色仇恨
  "SOUND",            // 非真实触发器，高愤怒/低士气怪物会朝声音源移动，低士气怪物会远离；持续1回合（GOODHEARING怪物为6回合）
  "STALK",            // 愤怒 > 5 时，每回合20%概率提升1点愤怒；仅用于愤怒触发
  "MATING_SEASON",    // 繁殖季节期间，有敌人靠近5格时增加3点愤怒；仅用于愤怒触发；以 <anger>% 概率激活角色仇恨
] as const;

export type MonsterTrigger = typeof MonsterTriggerList[number];

/**定义的 Species 列表 
 * data/json/species.json
 */
export const DefineSpeciesIDList = [
    "MAMMAL",
    "AMPHIBIAN",
    "BIRD",
    "CYBORG",
    "REPTILE",
    "FISH",
    "KRAKEN",
    "MUTANT",
    "NETHER",
    "NETHER_BURROWING",
    "NETHER_EMANATION",
    "MIGO",
    "SLIME",
    "FUNGUS",
    "LEECH_PLANT",
    "INSECT",
    "CENTIPEDE",
    "INSECT_FLYING",
    "SPIDER",
    "PLANT",
    "MOLLUSK",
    "WORM",
    "ZOMBIE",
    "FERAL",
    "ROBOT",
    "ROBOT_FLYING",
    "HORROR",
    "ABERRATION",
    "HALLUCINATION",
    "HUMAN",
    "UNKNOWN",
] as const;

/**定义的SpeciesID */
type DefineSpeciesID = typeof DefineSpeciesIDList[number];