
import { ExtractDefineSkillID, ExtractDefineSkillIDList } from "Extract";
import { CddaID, DescText, Int } from "./GenericDefine";


/**技能ID */
export type SkillID = CddaID<"SKILL"> | DefineSkillID;

/**技能 */
export type Skill = {
    type: "skill";
    /**技能唯一ID */
    id: (SkillID);
    /**技能名称, 显示在角色信息屏幕中 */
    name: (DescText);
    /**技能描述, 显示在角色信息屏幕中 */
    description: (DescText);
    /**标识特殊情况的标签  
     * 当前有效标签: "combat_skill"和"contextual_skill"  
     */
    tags?: ("contextual_skill"|"combat_skill")[];
    /**用于计算射击武器的移动消耗 */
    time_to_attack?: {
        /**最小时间 */
        min_time: Int;
        /**基础时间 */
        base_time: Int;
        /**每等级减少的时间 */
        time_reduction_per_level: Int;
    };
    /**在角色信息屏幕中显示的分类 */
    display_category?: (DescText);
    /**训练此技能时是否消耗专注力  
     * @default false  
     */
    consumes_focus?: boolean;
    /**技能显示顺序 */
    sort_rank?: Int;
    /**是否可以教授此技能  
     * @default true  
     */
    teachable?: boolean;
    /**理论等级描述  
     * 会显示符合当前等级的最小描述  
     */
    level_descriptions_theory?: {
        /**等级 */
        level: Int;
        /**描述 */
        description: (DescText);
    }[];
    /**实践等级描述  
     * 同level_descriptions_theory, 但针对实践技能等级  
     */
    level_descriptions_practice?: {
        /**等级 */
        level: Int;
        /**描述 */
        description: (DescText);
    }[];
    /**NPC从同伴任务中获得经验时, 此技能在任务技能类别中的优先级 */
    companion_skill_practice?: {
        /**技能ID */
        skill: (SkillID);
        /**权重 */
        weight: Int;
    }[];
    /**影响NPC在战斗任务中的成功率排名  
     * @default 未指定  
     */
    companion_combat_rank_factor?: Int;
    /**影响NPC在生存任务中的成功率排名  
     * @default 未指定  
     */
    companion_survival_rank_factor?: Int;
    /**影响NPC在工业任务中的成功率排名  
     * @default 未指定  
     */
    companion_industry_rank_factor?: Int;
};



/**预定义的技能ID 列表 */
export const DefineSkillIDList = ExtractDefineSkillIDList;
/**预定义的技能ID */
export type DefineSkillID = ExtractDefineSkillID;