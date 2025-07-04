import { ExtractDefineFlagID } from "Extract";
import { CddaID, DescText } from "./GenericDefine";
import { AnyItemFlag } from "./Item";
import { DefineMutationFlagID } from "./Mutation";
import { DefineVehiclePartFlagID } from "./VehiclePart";


/**自定的FlagID */
export type CustomFlagID = CddaID<"FLAG">;

/**FlagID */
export type FlagID = CustomFlagID|AnyItemFlag|DefineVehiclePartFlagID|DefineMutationFlagID|DefineFlagID;

/**一个自定义的Flag */
export type Flag={
    type: "json_flag";
    /**Flag唯一ID */
    id: (FlagID);
    /** 标志的名称, 用于口袋限制, 显示为`兼容弹夹: 形状因素` */
    name?: DescText;
    /** 对于口袋限制, 这些信息将显示在口袋信息的`限制`字段中 */
    restriction?: DescText;
    /** 如果带有此标志的东西遇到冲突标志的东西, 只有一个会被应用 */
    conflicts?: FlagID[];
    /** 对于消耗品, 它将在烹饪无法去除的情况下添加-5的味道 */
    taste_mod?: number;
    /** 如果此标志附加/装备到另一件物品, 是否继承此标志, 比如如果你将ESAPI板放入板载器, 他们的`CANT_WEAR`标志不会应用到板载器, 你可以像往常一样穿着它  
     * @default false  
     */
    inherit?: boolean;
    /** 如果为true, 如果你用带有此标志的东西制作东西, 此标志也会应用到结果  
     * @default false  
     */
    craft_inherit?: boolean,
    /** 如果可能, 这些信息将被显示, 比如在物品描述中 */
    info?: DescText;
    /**物品的前缀 */
    item_prefix?: DescText;
    /**物品的后缀 */
    item_suffix?: DescText;
}

/**预定义的FlagID 列表 */
export const DefineFlagIDList = [
    "DIAMOND",//钻刃
] as const;
/**预定义的FlagID */
export type DefineFlagID = typeof DefineFlagIDList[number]|ExtractDefineFlagID;