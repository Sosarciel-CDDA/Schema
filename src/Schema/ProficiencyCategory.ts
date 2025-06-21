import { CddaID } from "@src/SchemaTest";
import { DescText } from "./GenericDefine";



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

type template = {
  "type": "proficiency_category",
  "id": "prof_archery",
  "name": "Archery",
  "description": "Proficiencies for all things bow and arrows.  Includes knowledge and experience of making and modifying bows, as well as archery form and posture."
}