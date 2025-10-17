import { FlagID } from "./Flag";
import { CddaID, DescText } from "./GenericDefine";



/**法术能量池 列表 */
export const SpellEnergySourceList = [
    "MANA", "BIONIC", "HP", "STAMINA", "NONE"
] as const;
/**法术能量池 */
export type SpellEnergySource = typeof SpellEnergySourceList[number];

export type MagicTypeID = CddaID<"MAGIC_TYPE">;
/**法术 类型 */
export type MagicType = {
    id: MagicTypeID;
    type: "magic_type";
    /**此类型法术energy_source缺省时的能量源 */
    energy_source: (SpellEnergySource);
    /**禁止此类法术施法的flag */
    cannot_cast_flags?: FlagID[]|FlagID;
    /**禁止此类法术施法的提示 */
    cannot_cast_message?: (DescText);
};
