import { CddaID } from "./GenericDefine";


/**技能 */
export type SkillID = CddaID<"SKILL"> | DefineSkillID;


/**预定义的技能ID 列表 */
export const DefineSkillIDList = [
    "speech"        ,//社交
    "computer"      ,//计算机学
    "firstaid"      ,//医疗
    "mechanics"     ,//机械学
    "traps"         ,//操控装置
    "driving"       ,//驾驶
    "swimming"      ,//运动
    "fabrication"   ,//制造
    "cooking"       ,//食品加工
    "tailor"        ,//裁缝
    "survival"      ,//生存
    "electronics"   ,//电子学
    "archery"       ,//弓术
    "gun"           ,//枪法
    "launcher"      ,//重武器
    "pistol"        ,//手枪
    "rifle"         ,//步枪
    "shotgun"       ,//
    "smg"           ,//
    "throw"         ,//
    "melee"         ,//
    "bashing"       ,//
    "cutting"       ,//
    "dodge"         ,//
    "stabbing"      ,//
    "unarmed"       ,//徒手
    "chemistry"     ,//应用科学
    "spellcraft"    ,//魔法
] as const;

export type DefineSkillID = typeof DefineSkillIDList[number];