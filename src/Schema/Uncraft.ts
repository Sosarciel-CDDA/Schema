import { FlagID } from "./Flag";
import { ActivityLevel, CddaID, Int, Time } from "./GenericDefine";
import { ItemID } from "./Item";
import { Requirement } from "./Requirement";
import { SkillID } from "./Skill";



/** 解构配方定义 - 用于定义物品拆解 */
export type Uncraft = {
    /**拆解配方不需要id
     * 注意事项: 
     * 1. 简单的拆解(如砸碎头骨或用钢锯切割金属)可能不需要任何技能
     * 2. 无法通过解构配方或可逆制作配方获得带有UNRECOVERABLE标志的物品
     * 3. copy-from对解构配方的支持非常有限, 最好避免使用
     * 4. 解构配方不支持组件列表, 只有游戏读取的第一个物品有效
     * 5. 目前可以为解构配方定义熟练度, 但没有效果
     * 6. 同样, 可以为解构配方定义skills_required字段, 但也没有效果
     */
    type: "uncraft";
    /**被拆解物品的ID */
    result: (ItemID);
    /**此制作的能量消耗强度 */
    activity_level: (ActivityLevel);
    /**用于成功检查的技能, 同时也会训练此技能 */
    skill_used?: (SkillID);
    /**成功检查的难度, 与skill_used相关 */
    difficulty?: Int;
    /**执行配方所需的时间; 可以指定分钟, 小时等 */
    time: (Time);
    /**描述配方布尔特性的字符串集合; 支持BLIND_EASY和BLIND_HARD */
    flags?: FlagID[];
}&Omit<Requirement,'id'|'type'|'extend'>;

///** 解构配方示例 */
//const ExampleUncraftRecipe: UncraftRecipe = {
//    "result": "bio_blood_filter",
//    "type": "uncraft",
//    "activity_level": "LIGHT_EXERCISE",
//    "skill_used": "electronics",
//    "difficulty": 7,
//    "time": "50 m",
//    "using": [ [ "soldering_standard", 20 ] ],
//    "tools": [ [ [ "boltcutters", -1 ], [ "toolset", -1 ] ] ],
//    "qualities": [ { "id": "SCREW", "level": 1 } ],
//    "components": [ [ [ "burnt_out_bionic", 1 ] ] ],
//    "flags": [ "BLIND_HARD" ]
//};