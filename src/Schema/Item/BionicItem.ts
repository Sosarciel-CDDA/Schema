import { CddaID, Int } from "Schema/GenericDefine";
import { ItemID, ItemTrait } from "./ItemIndex";
import { GenericFlagID } from "./Generic";
import { BionicID } from "Schema/Bionic";



/**仿生组件物品ID */
export type BionicItemID = CddaID<'BIOITEM'>;

/**仿生组件物品定义 */
export type BionicItemTrait = ItemTrait<"BIONIC_ITEM",({
    /**标记具有 BIONIC_ITEM 的特征, 用于补全 */
    "//T": "BIONIC_ITEM";
}|{
    /**标记具有 BIONIC_ITEM 的特征, 用于补全 */
    "//BIONIC_ITEM": true;
})&{
    /** 物品类型 */
    type: "BIONIC_ITEM";  // 定义这是一个CBM
    /**安装后的仿生ID  
     * 如果与"id"不同, 则使用此ID  
     */
    bionic_id?: (BionicID);
    /**安装难度  
     * 安装CBM的难度值  
     */
    difficulty: Int;
    /**是否为升级组件  
     * 表示这个CBM是否是另一个仿生的升级  
     * @default false  
     */
    is_upgrade?: boolean;
    /**安装数据ID  
     * 允许几乎保证安装对应仿生的物品ID  
     */
    installation_data?: (ItemID);
    flags:GenericFlagID[];
}>;