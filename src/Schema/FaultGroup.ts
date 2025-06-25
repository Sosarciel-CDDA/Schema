import { ExtractDefineFaultGroupID } from "Extract";
import { FaultID } from "./Fault";
import { CddaID, Int } from "./GenericDefine";

/**故障组ID */
export type FaultGroupID = CddaID<'FAULTG'>|DefineFaultGroupID;

/**故障组定义  
 * 故障组是故障和相应权重的组合, 可以组合和重用多个类似的故障组 (手柄, 刀片, 棉质衣物等)   
 * @example  
 * {  
 *   "type": "fault_group",  
 *   "id": "handles",  
 *   "group": [  
 *     { "fault": "fault_broken_handle", "weight": 100 },
 *     { "fault": "fault_cracked_handle" }, // 默认weight为100
 *     { "fault": "fault_broken_heart", "weight": 10 }
 *   ]  
 * }  
 */
export type FaultGroup = {
    /**故障组唯一ID */
    id: (FaultGroupID);
    /**故障项列表  
     * 可能的故障列表, 权重和实际几率可以在调试模式下通过物品信息查看  
     */
    group: {
        /** 故障ID */
        fault: (FaultID);
        /** 权重  
         * @default 100  
         */
        weight?: Int;
    }[];
};



/**预定义的FaultGroupID */
export type DefineFaultGroupID = ExtractDefineFaultGroupID;