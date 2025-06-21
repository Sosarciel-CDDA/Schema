import { FlagID } from "./Flag";
import { BodyPartID, CddaID, Int } from "./GenericDefine";

/**攻击向量ID */
export type AttackVectorID = CddaID<"ATKV">;

/**肢体要求类型 */
export type LimbRequirement = [BodyPartID, Int];

/**攻击向量定义 */
export type AttackVector = {
    /**固定为"attack_vector" */
    type: "attack_vector";
    /**攻击向量唯一ID */
    id: (AttackVectorID);
    /**使用的肢体列表 */
    limbs: BodyPartID[];
    /**接触区域列表 */
    contact_area: BodyPartID[];
    /**是否严格限定肢体定义(默认false) */
    strict_limb_definition?: boolean;
    /**是否计算护甲加成(默认true) */
    armor_bonus?: boolean;
    /**需要的肢体标志 */
    required_limb_flags?: FlagID[];
    /**禁止的肢体标志 */
    forbidden_limb_flags?: FlagID[];
    /**负重限制(默认100) */
    encumbrance_limit?: Int;
    /**肢体生命值百分比限制(默认10) */
    bp_hp_limit?: Int;
    /**肢体要求 */
    limb_req?: LimbRequirement[];
};