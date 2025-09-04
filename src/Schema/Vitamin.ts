import { ExtractDefineVitaminID, ExtractDefineVitaminIDList } from "Extract";
import { EffectID } from "./Effect";
import { FlagID } from "./Flag";
import { CddaID, DescText, Int, Time, Weight } from "./GenericDefine";



/**维生素ID */
export type VitaminID = CddaID<"VIT">|DefineVitaminID;

/**维生素 */
export type Vitamin = {
    type: "vitamin";
    /**维生素唯一ID */
    id: (VitaminID);
    /**维生素类型, 必需字段  
     * 有效值:   
     * - "vitamin": 当简化营养启用时, 此维生素不会被添加到任何物品中  
     * - "toxin": 有毒化学物质或成分, 目前无效果  
     * - "counter": 某种计数器, 既不是毒素, 维生素也不是药物  
     * - "drug": 药物, 有30分钟延迟效果  
     */
    vit_type: "vitamin" | "toxin" | "counter" | "drug";
    /**维生素显示名称, 如在物品菜单中的维生素显示 */
    name?: (DescText);
    /**维生素过量时触发的效果ID */
    excess?: (EffectID);
    /**维生素缺乏时触发的效果ID */
    deficiency?: (EffectID);
    /**玩家可以拥有的最小维生素量 */
    min?: Int;
    /**玩家可以拥有的最大维生素量 */
    max?: Int;
    /**按重量指定食物中维生素含量的单位  
     * 食物的重量将除以此数量来确定食物含有的维生素单位  
     */
    weight_per_unit?: (Weight);
    /**失去一个单位维生素所需的时间 */
    rate?: (Time);
    /**标志数组, 参见下面的标志部分获取有效值 */
    flags?: FlagID[];
    /**维生素缺乏的阈值  
     * 列表中的每对确定该缺乏等级的开始和结束点  
     * 每个缺乏等级对应于deficiency中定义的效果强度级别  
     */
    disease?: [Int, Int][];
    /**维生素过量的阈值  
     * 列表中的每对确定该过量等级的开始和结束点  
     * 每个过量等级对应于excess中定义的效果强度级别  
     */
    disease_excess?: [Int, Int][];
    /**维生素自然代谢时会调整体内其他维生素水平  
     * 列表中的每对包含一个维生素ID和一个数字  
     * 数字表示当此维生素代谢一个单位时, 该维生素将被调整多少  
     * 负值可用于清除体内现有维生素  
     * 仅发生在自然衰减时 (由rate确定)   
     */
    decays_into?: [(VitaminID), Int][];
};

/**预定义的VitaminID 列表*/
export const DefineVitaminIDList = ExtractDefineVitaminIDList;
/**预定义的VitaminID */
export type DefineVitaminID = ExtractDefineVitaminID;