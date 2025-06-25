import { ExtractDefineAmmiunitionTypeID, ExtractDefineAmmiunitionTypeIDList } from "Extract";
import { CddaID, DescText } from "./GenericDefine";
import { ItemID } from "./Item";




/**弹药类型ID */
export type AmmunitionTypeID = CddaID<"AMMUNIT">|DefineAmmiunitionTypeID;
/**弹药类型 */
export type AmmunitionType = {
    type: "ammunition_type";
    /**弹药类型唯一ID */
    id: (AmmunitionTypeID);
    /**弹药名称 */
    name: (DescText);
    /**弹药的默认物品ID */
    default: (ItemID);
};

/**预定义的弹药类型ID 列表 */
export const DefineAmmiunitionTypeIDList = ExtractDefineAmmiunitionTypeIDList;
/**预定义的弹药类型ID */
export type DefineAmmiunitionTypeID = ExtractDefineAmmiunitionTypeID;