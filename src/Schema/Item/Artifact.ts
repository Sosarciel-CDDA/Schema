import { CddaID } from "Schema/GenericDefine";
import { ItemTrait } from "./ItemIndex";
import { GenericFlagID, RelicData } from "./Generic";




/**神器ID */
export type ArtifactID = CddaID<"ARTIFACT">;

/**神器定义 */
export type ArtifactTrait = ItemTrait<"ARTIFACT",({
    /**标记具有 ARTIFACT 的特征, 用于补全 */
    "//T": "ARTIFACT";
}|{
    /**标记具有 ARTIFACT 的特征, 用于补全 */
    "//ARTIFACT": true;
})&{
    /**附魔数据 */
    relic_data?: (RelicData),
    flags?:GenericFlagID[];
}>;