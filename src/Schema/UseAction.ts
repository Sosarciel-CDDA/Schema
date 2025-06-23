import { AmmunitionTypeID } from "./AmmiunitionType";
import { DescText, Int } from "./GenericDefine";
import { ItemID, ItemVariantID } from "./Item";
import { ItemGroupID } from "./ItemGroup";
import { ToolQualityID } from "./ToolQuality";

type UseActionTransform = {
    /**转换方法类型，此处为将物品转换为另一种物品 */
    type: "transform";
    /**要转换的目标物品ID */
    target: (ItemID);
    /**如果使用此字段，target表示从itemgroup中随机选择的物品 */
    target_group?: (ItemGroupID);
    /**设置转换后物品的特定变体类型
     * 特殊字符串"<any>"将从所有可用变体中随机选择一个变体，基于变体的定义权重
     * @default "<any>"
     */
    variant_type?: (ItemVariantID);
    /**转换后物品是否处于激活状态 */
    active: boolean;
    /**当物品弹药降至0时自动转换为目标物品，或允许枪支在0弹药时转换 */
    ammo_scale: Int;
    /**激活物品时显示给玩家的消息 */
    msg: (DescText);
    /**是否需要火源才能激活此物品 */
    need_fire: Int;
    /**当玩家尝试激活但没有火源时显示的消息 */
    need_fire_msg: (DescText);
    /**转换物品所需的充能数量 */
    need_charges: Int;
    /**当物品没有足够充能时显示给玩家的消息 */
    need_charges_msg: (DescText);
    /**物品是否必须为空才能进行转换
     * @default false
     */
    need_empty?: boolean;
    /**物品是否必须被穿着才能进行转换、施法或使用EOC
     * @default false
     */
    need_worn?: boolean;
    /**物品是否必须被手持才能进行转换、施法或使用EOC
     * @default false
     */
    need_wielding?: boolean;
    /**转换所需的工具品质及其等级，例如"fine bolt turning 1" */
    qualities_needed: Record<ToolQualityID, Int>;
    /**转换后物品的初始充能数量 */
    target_charges: Int;
    /**随机化转换后物品的充能数量
     * 例如[10,15,25]表示有50%几率获得10-15充能，50%几率获得15-25充能(包含端点)
     */
    rand_target_charges?: [Int, Int, Int];
    /**如果为零或正数，将转换后物品的剩余弹药设置为此固定值 */
    ammo_qty: Int;
    /**如果设置此值，将转换后物品的剩余弹药随机设置为数组中的某个值 */
    random_ammo_qty?: [Int, Int];
    /**如果同时指定了此字段和ammo_qty，则将转换后的物品设置为此特定弹药类型 */
    ammo_type?: (AmmunitionTypeID);
    /**存放目标物品的容器物品ID */
    container?: (ItemID);
    /**转换后的容器是否处于密封状态
     * @default true
     */
    sealed?: boolean;
    /**在物品激活菜单中显示的文本
     * @default "Turn on"
     */
    menu_text?: (DescText);
    /**转换物品所需的额外移动点数，超出正常动作所需的部分 */
    moves: Int;
};