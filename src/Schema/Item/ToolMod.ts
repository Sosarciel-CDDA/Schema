import { AmmunitionTypeID } from "../AmmiunitionType";
import { CddaID } from "../GenericDefine";
import { ItemTrait } from "./ItemIndex";
import { MagazineID } from "./Magazine";
import { PocketData } from "../GenericDefine";
import { GenericFlagID } from "./Generic";

/**Tool Mod ID格式 */
export type ToolModID = CddaID<"TMOD">;

/**工具模组
 * 可以安装到工具上进行修改 (主要是电池槽变化)
 */
export type ToolModTrait = ItemTrait<"TOOLMOD",{
    /**标记具有 TOOLMOD 的特征, 用于补全 */
    "//TOOLMOD": true;
    /**限制模组到那些基础弹药类型的工具
     * 例如 ["battery"] 表示只能用于电池供电的工具
     */
    acceptable_ammo?: AmmunitionTypeID[];
    /**修改工具的口袋配置
     * 可用于添加或修改电池槽等
     * pocket_type MAGAZINE和MAGAZINE_WELL会被覆盖
     */
    pocket_mods?: PocketData[];
    /**修改工具接受的弹药类型和弹匣约束
     * 格式: [弹药ID, 弹匣ID[]][]
     */
    magazine_adaptor?: [AmmunitionTypeID, MagazineID[]][];
    /**物品标志 */
    flags?: GenericFlagID[];
}>;
