import { CddaID, Time } from "Schema/GenericDefine";
import { ItemTrait } from "./ItemIndex";
import { GenericFlagID } from "./Generic";
import { EnchantmentID, InlineEnchantment } from "Schema/Enchantment";




/**神器ID */
export type ArtifactID = CddaID<"ARTIFACT">;

/**神器定义 */
export type ArtifactTrait = ItemTrait<"ARTIFACT",({
    /**标记具有 ARTIFACT 的特征, 用于补全 */
    "//ARTIFACT": true;
})&{
    /**自动充能 */
    charge_info?: {
        regenerate_ammo: true;
        /**回复方式 periodic 为周期 */
        recharge_type: "lunar"|"periodic"|"solar_cloudy"|"solar_sunny"|"none";
        /**每次回复的间隔 */
        time: (Time);
    };
    /**被动附魔效果 */
    passive_effects?: ({
        /**引用附魔 */
        id: EnchantmentID
    }|InlineEnchantment)[];
    flags?:GenericFlagID[];
}>;