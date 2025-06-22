import { FaultID } from "./Fault";
import { CddaID, DescText, Float, Int, Time } from "./GenericDefine";
import { SkillID } from "./Skill";
import { ProficiencyID } from "./Proficiency";
import { FlagID } from "./Flag";


/**故障修复定义ID */
export type FaultFixID = CddaID<'FAULT_FIX'>;

/**故障修复方法定义 */
export type FaultFix = {
    type: "fault_fix";
    /**故障修复定义的唯一ID
     * @example "mend_gun_fouling_clean"
     */
    id: (FaultFixID);
    /**显示名称 
     * @example "Clean fouling"
     */
    name: (DescText);
    /**修复成功时显示的消息
     * @example "You clean your %s."
     */
    success_msg: (DescText);
    /**修复所需时间
     * @example "50 m"
     */
    time: (Time);
    /**修复时移除的故障列表 */
    faults_removed: (FaultID)[];
    /**修复时可能添加的故障列表 */
    faults_added?: (FaultID)[];
    /**修复所需的技能 */
    skills: Record<SkillID, Int>;
    /**修复时设置的变量 */
    set_variables: {
        [key: string]: number | {
            /**三维坐标 */
            tripoint: [Int, Int, Int];
        } | {
            /**字符串值 */
            str: string;
        };
    };
    /**修复时变量的乘法调整 */
    adjust_variables_multiply?: Record<string, Float>;
    /**修复需求 
     * 可以是预定义需求ID数组或内联需求对象
     * @example ["gun_lubrication", 2]
     */
    requirements: ([string, number] | {
            // 内联需求定义 (类似配方定义)
            [key: string]: any;
        })[];
    /**修复时物品损坏修改值 (可为负值表示修复)
     * @example 1000
     */
    mod_damage?: Int;
    /**修复时物品退化修改值 (可为负值减少退化)
     * @example 50
     */
    mod_degradation?: Int;
    /**专业对修复速度的影响
     * @example {"prof_gun_cleaning": 0.5}
     */
    time_save_profs?: Record<ProficiencyID, Float>;
    /**物品标志对修复速度的影响 
     * @example {"EASY_CLEAN": 0.5}
     */
    time_save_flags?: Record<FlagID, Float>;
};