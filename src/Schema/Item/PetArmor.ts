import { CddaID, Int, Volume } from "Schema/GenericDefine";
import { ItemTrait } from "./ItemIndex";

/**Pet Armor ID格式 */
export type PetArmorID = CddaID<"PETARM">;

/**宠物护甲 */
export type PetArmorTrait = ItemTrait<"PET_ARMOR",{
    /**标记具有 PET_ARMOR 的特征, 用于补全 */
    "//PET_ARMOR": true;
    /**提供的环境保护程度
     * @default 0
     */
    environmental_protection?: Int;
    /**材料厚度, 以毫米为单位 (约). 通常范围在1-5之间, 更不寻常的护甲类型可达10或更高 */
    material_thickness?: Int;
    /**适合此护甲的宠物身体类型. 参见MONSTERS.md */
    pet_bodytype: string;
    /**适合此护甲的宠物最大体积. 可使用ml或L - "50 ml"或"2 L" */
    max_pet_vol: (Volume);
    /**适合此护甲的宠物最小体积. 可使用ml或L - "50 ml"或"2 L" */
    min_pet_vol: (Volume);
    /**是否为动力装甲物品 (那些是特殊的)  */
    power_armor?: boolean;
}>;
