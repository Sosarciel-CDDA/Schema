import { CddaID } from "./GenericDefine";
import { SkillID } from "./Skill";
import { SnippetCategoryID } from "./Snippet";

/**收获物类型ID */
export type HarvestDropTypeID = CddaID<"HVDT">;

/**收获物类型定义 */
export type HarvestDropType = {
    type: "harvest_drop_type";
    /**收获物类型唯一ID */
    id: HarvestDropTypeID;
    /**仅解剖
     * 是否只能通过解剖获得
     */
    dissect_only?: boolean;
    /**物品组
     * 是否引用物品组而非单个物品
     */
    group?: boolean;
    /**收获技能
     * 影响收获的技能ID列表
     */
    harvest_skills?: SkillID[];
    /**野外处理失败消息
     * 野外处理失败时显示的文本ID
     */
    msg_fielddress_fail?: (SnippetCategoryID);
    /**野外处理成功消息
     * 野外处理成功时显示的文本ID
     */
    msg_fielddress_success?: (SnippetCategoryID);
    /**屠宰失败消息
     * 屠宰失败时显示的文本ID
     */
    msg_butcher_fail?: (SnippetCategoryID);
    /**屠宰成功消息
     * 屠宰成功时显示的文本ID
     */
    msg_butcher_success?: (SnippetCategoryID);
    /**解剖失败消息
     * 解剖失败时显示的文本ID
     */
    msg_dissect_fail?: (SnippetCategoryID);
    /**解剖成功消息
     * 解剖成功时显示的文本ID
     */
    msg_dissect_success?: (SnippetCategoryID);
}