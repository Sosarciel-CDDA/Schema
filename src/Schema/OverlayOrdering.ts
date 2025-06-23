import { Int } from "./GenericDefine";
import { MutationID } from "./Mutation";


/**显示层级 */
export type OverlayOrdering = {
    type: "overlay_order";
    /**层级控制数组 */
    overlay_ordering: {
        /**改变层级的变异ID */
        id: MutationID[];
        /**层级 越高越优先 0-9999 */
        order: Int
    }[];
};
