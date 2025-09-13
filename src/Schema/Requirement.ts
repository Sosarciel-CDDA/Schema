import { CddaID, Int } from "./GenericDefine";
import { ItemID, ToolID } from "./Item";



/**需求组ID */
export type RequirementID = CddaID<"REQ">;

/**需求组 */
export type Requirement = {
    type: "requirement";
    /**需求组唯一ID */
    id: (RequirementID);
    /**定义物品质量, 如 CUT 或 HAMMER, 以及制作所需的质量等级  
     *  @example  
     * [{  
     *   "id": "CUT",  
     *   "level": 1,  
     *   "amount": 1  
     * }] // 需要1个具有1级切割质量的工具  
     */
    qualities?: {
        /**工具ID */
        id:(ToolID);
        /**要求等级 */
        level:Int;
        /**需要该质量工具的数量 */
        amount?: Int;
    }[],
    /**列出制作配方所需的工具 (或几种可选工具) 的物品 id  
     * [ [ 工具, 消耗的充能 ] ]  
     * @example  
     * [  
     *  [ [ "fire", -1 ] ],  
     *  [ [ "toola", 1 ], [ "toolb", 1] ],  
     * ]  
     * // 需要火源但不消耗充能  
     * // 同时还需要 1充能的toola 或 1充能的toolb  
     */
    tools?: [ItemID,number][][];
    /**列出物品或需求 id, 主要用于材料成分  
     * 如果是拆解, 则是配方结果  
     * [ [ 可选的物品1, 可选的物品2 ], [ 必须的物品1 ] ]  
     * @example  
     * [  
     *   [ ["item_a", 5] ],  
     *   [ ["item_b", 2], ["item_c", 4] ]  
     * ]  
     * // 需要5个item_a  
     * // 同时还需要2个item_b或4个item_c  
     */
    components?: ReqComponents;
    /**给出需求 id; 需求可能有嵌套的工具, 质量或组件   
     * @example  
     * [  
     *   ["req_a", 3], // 需要3倍req_a中的所有材料  
     *   ["req_b", 5]  // 需要5倍req_b中的所有材料
     * ]  
     */
    using?: ReqUsing;
    /**扩展已有需求 */
    extend?: ReqUsing;
}

/**需求格式  
 * [ID , 消耗的数量]  
 * NO_RECOVER为不可恢复  
 * LIST为标记其是一个需求组  
 */
type ReqFormat =
[RequirementID, number, "LIST"] |
[ItemID, number, "NO_RECOVER"? ];

/**using格式的需求 */
export type ReqUsing = [RequirementID, number][];
/**Components格式的需求 */
export type ReqComponents = ReqFormat[][];