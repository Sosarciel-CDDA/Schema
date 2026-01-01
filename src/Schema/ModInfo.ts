import { CddaID, DescText } from "./GenericDefine";





/**模组ID */
export type ModId = CddaID<"MOD">;


/**模组信息 */
export type ModInfo = {
    type: "MOD_INFO";
    id: ModId;
    name: string;
    authors: string[];
    maintainers: string[];
    description: (DescText);
    category: string;
    dependencies: ModId[];
};
