import { CddaID } from "./GenericDefine";
import { SpeciesID } from "./Species";

/**气味类型ID */
export type ScentTypeID = CddaID<"SCENT">;

/**气味类型定义 */
export type ScentType = {
    type: "scent_type";
    /**气味类型唯一ID */
    id: (ScentTypeID);
    /**能够追踪此气味的物种，必须使用species.json中定义的有效ID */
    receptive_species?: SpeciesID[];
};



/**定义的气味类型ID 列表 */
export const DefineScentTypeIDList = [
    "sc_human"  ,
    "sc_flower" ,
    "sc_fetid"  ,
    "sc_bile"   ,
] as const;
/**定义的气味类型ID */
export type DefineScentTypeID = typeof DefineScentTypeIDList[number];
