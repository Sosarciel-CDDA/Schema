import { ExtractDefineAttackVectorID, ExtractDefineAttackVectorIDList } from "Extract";
import { BodyPartID } from "./BodyPart";
import { FlagID } from "./Flag";
import { CddaID, Int } from "./GenericDefine";

/**攻击方式ID */
export type AttackVectorID = CddaID<"ATKV">|ExtractDefineAttackVectorID;

/**肢体要求类型 */
export type LimbRequirement = [BodyPartID, Int];

/**攻击方式定义 */
export type AttackVector = {
    type: "attack_vector";
    /**攻击方式唯一ID */
    id: (AttackVectorID);
    /**使用的肢体列表 */
    limbs: BodyPartID[];
    /**接触区域列表 */
    contact_area: BodyPartID[];
    /**是否严格限定肢体定义  
     * @default false  
     */
    strict_limb_definition?: boolean;
    /**是否计算护甲加成  
     * @default true  
     */
    armor_bonus?: boolean;
    /**需要的肢体标志 */
    required_limb_flags?: FlagID[];
    /**禁止的肢体标志 */
    forbidden_limb_flags?: FlagID[];
    /**负重限制  
     * @default 100  
     */
    encumbrance_limit?: Int;
    /**肢体生命值百分比限制  
     * @default 10  
     */
    bp_hp_limit?: Int;
    /**肢体要求 */
    limb_req?: LimbRequirement[];
};

/**预定义的攻击方式ID 列表 */
export const DefineAttackVectorIDList = ExtractDefineAttackVectorIDList;
/**预定义的攻击方式ID */
export type DefineAttackVectorID = ExtractDefineAttackVectorID;
