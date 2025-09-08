import { CddaID } from "./GenericDefine";



/**士气类型ID */
export type MoraleTypeID = CddaID<'MORT'>;
/**士气类型 */
export type MoraleType = {
    type: "morale_type";
    /**士气的唯一ID */
    id: (MoraleTypeID);
    /**士气类型的文本描述 */
    text: string;
};