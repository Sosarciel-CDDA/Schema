import { EocID, InlineEoc } from "./Eoc";
import { CddaID, DescText } from "./GenericDefine";
import { MoraleTypeID } from "./MoraleType";

/**成瘾品类型ID */
export type AddictionTypeID = CddaID<'ADDICTION_TYPE'>;
/**成瘾品类型 */
export type AddictionType = {
    type: "addiction_type";
    /**成瘾类型的唯一ID */
    id: (AddictionTypeID);
    /**成瘾效果名称
     * 显示在玩家状态中
     */
    name: (DescText);
    /**成瘾来源名称 */
    type_name: (DescText);
    /**成瘾效果描述
     * 显示在玩家状态中
     */
    description: (DescText);
    /**士气惩罚的ID */
    craving_morale: (MoraleTypeID);
    /**效果条件ID
     * 可以是内联EOC
     * 在每次更新身体状态时激活
     */
    effect_on_condition: (InlineEoc|EocID);
    /**内置函数（用于旧版成瘾代码）
     * 新成瘾应使用"effect_on_condition"
     */
    builtin?: "nicotine_effect" | "alcohol_effect" | "diazepam_effect" | "opiate_effect" | "amphetamine_effect" | "cocaine_effect" | "crack_effect";
};