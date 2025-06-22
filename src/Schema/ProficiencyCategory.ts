import { CddaID, DescText } from "./GenericDefine";



/**专长类别ID */
export type ProficiencyCategoryID = CddaID<"PROFC">;


/**专长类别 */
export type ProficiencyCategory = {
    type: "proficiency_category";
    /**专长类别唯一ID */
    id: (ProficiencyCategoryID);
    /**名称 */
    name: (DescText);
    /**描述 */
    description: (DescText);
}