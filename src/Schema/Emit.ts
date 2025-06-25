import { FieldTypeID } from "./FieldType";
import { CddaID, Int } from "./GenericDefine";



/**地块附着物生成器ID  */
export type EmitID = CddaID<"EMIT">;

/**地块附着物生成器ID  */
export type Emit = {
    type: "emit";
    /**地块附着物生成器唯一ID */
    id: (EmitID);
    /**要发射的字段类型 */
    field: (FieldTypeID);
    /**发射的字段强度
     * @default 1
     */
    intensity?: Int;
    /**发射的字段数量（形成圆形或方形区域）
     * 1表示1个字段；9表示3x3，16表示4x4方形等
     * @default 1
     */
    qty?: Int;
    /**发射一个字段单位的概率（1到100）
     * @default 100
     */
    chance?: Int;
};