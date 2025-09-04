import { BodyPartID } from "./BodyPart";
import { DamageTypeID } from "./DamageType";
import { EmitID } from "./Emit";
import { ParamsEnchantment } from "./Enchantment";
import { ParamsEoc } from "./Eoc";
import { FlagID } from "./Flag";
import { CddaID, DescText, Energy, Float, Int, PRecord, SocialType, StatusUc, Time } from "./GenericDefine";
import { ItemID } from "./Item";
import { MartialArtID } from "./MartialArt";
import { MutationID } from "./Mutation";
import { ProficiencyID } from "./Proficiency";
import { RequirementID } from "./Requirement";
import { SpellID } from "./Spell";



/**仿生组件ID */
export type BionicID = CddaID<'BIO'>;

/**仿生组件定义 */
export type Bionic = {
    type: "bionic";
    /**仿生组件唯一ID */
    id: BionicID;
    /**游戏内显示的名称 */
    name: string | { str: string };
    /**游戏内描述 */
    description: string;
    /**激活消耗的能量  
     * 可以使用字符串 "1 kJ"/"1000 J"/"1000000 mJ"  
     * @default 0  
     */
    act_cost?: (Energy);
    /**停用消耗的能量  
     * 可以使用字符串 "1 kJ"/"1000 J"/"1000000 mJ"  
     * @default 0  
     */
    deact_cost?: (Energy);
    /**持续激活消耗的能量  
     * 需要非零的"time"字段才有效  
     * 可以使用字符串 "1 kJ"/"1000 J"/"1000000 mJ"  
     * @default 0  
     */
    react_cost?: (Energy);
    /**触发特殊效果消耗的能量  
     * 可以是对特定条件的反应或激活时采取的行动  
     * 可以使用字符串 "1 kJ"/"1000 J"/"1000000 mJ"  
     * @default 0  
     */
    trigger_cost?: (Energy);
    /**激活后, 两次消耗能量之间的时间间隔  
     * 如果为0, 则只消耗一次能量  
     * @default 0  
     */
    time?: (Time);
    /**可被此仿生升级的仿生ID */
    upgraded_bionic?: (BionicID);
    /**此仿生可用的升级列表 */
    available_upgrades?: (BionicID)[];
    /**对身体的累赘度列表 */
    encumbrance?: [BodyPartID, Int][];
    /**激活时已知的武术流派列表 */
    known_ma_styles?: MartialArtID[];
    /**安装时移除的突变/特性列表 */
    canceled_mutations?: MutationID[];
    /**阻止安装的突变列表 */
    mutation_conflicts?: MutationID[];
    /**安装此仿生时自动安装的额外仿生列表 */
    included_bionics?: (BionicID)[];
    /**是否包含在另一个仿生中  
     * 如果为true, 此仿生不需要定义CBM物品  
     * @default false  
     */
    included?: boolean;
    /**对指定身体部位提供的环境防护值 */
    env_protec?: [BodyPartID, Int][];
    /**对指定身体部位提供的保护值数组 */
    protec?: [BodyPartID, PRecord<DamageTypeID,Int>][];
    /**此仿生占据的身体部位及槽位数列表 */
    occupied_bodyparts?: [BodyPartID, Int][];
    /**增加的电力存储容量  
     * 可以使用字符串 "1 kJ"/"1000 J"/"1000000 mJ"  
     * @default 0  
     */
    capacity?: (Energy);
    /**可用于产生能量的材料列表 */
    fuel_options?: string[];
    /**是否可以通过外部电源供电  
     * @default false  
     */
    is_remote_fueled?: boolean;
    /**可存储的燃料体积 */
    fuel_capacity?: Int;
    /**燃料能量转换为能量的效率  
     * @default 0  
     */
    fuel_efficiency?: Float;
    /**燃料能量被动转换为能量的效率  
     * 适用于使用PERPETUAL燃料(如肌肉, 风, 阳光)的CBM  
     * @default 0  
     */
    passive_fuel_efficiency?: Float;
    /**产生能量时是否发热  
     * @default false  
     */
    exothermic_power_gen?: boolean;
    /**覆盖率降低燃料效率的比例  
     * 0.0到1.0之间的浮点数  
     * @default null  
     */
    coverage_power_gen_penalty?: Float;
    /**产生能量时发射的场类型ID */
    power_gen_emission?: (EmitID);
    /**被动属性加成列表 */
    stat_bonus?: [StatusUc, Int][];
    /**激活时尝试激活的effect_on_conditions列表 */
    activated_eocs?: (ParamsEoc);
    /**激活时每回合尝试激活的effect_on_conditions列表 */
    processed_eocs?: (ParamsEoc);
    /**停用时尝试激活的effect_on_conditions列表 */
    deactivated_eocs?: (ParamsEoc);
    /**应用的附魔列表 */
    enchantments?: (ParamsEnchantment);
    /**安装时获得, 卸载时失去的法术及等级映射 */
    learned_spells?: PRecord<SpellID, Int>;
    /**安装时获得, 卸载时失去的熟练度ID数组 */
    learned_proficiencies?: ProficiencyID[];
    /**安装所需的工具和组件要求ID */
    installation_requirement?: (RequirementID);
    /**是否允许安装多个副本  
     * @default false  
     */
    dupes_allowed?: boolean;
    /**不能卸载的原因消息 */
    cant_remove_reason?: (DescText);
    /**社交检查修正值 */
    social_modifiers?: PRecord<SocialType,Int>;
    /**安装时自动激活 */
    activated_on_install?: boolean;
    /**安装此仿生所需的仿生ID */
    required_bionic?: (BionicID);
    /**卸载时添加的突变/特性列表 */
    give_mut_on_removal?: MutationID[];
    /**安装时添加到玩家库存的伪物品 */
    passive_pseudo_items?: ItemID[];
    /**可安装在此仿生内的物品标志 */
    installable_weapon_flags?: FlagID[];
    /**激活时在手中生成的不可移除武器 */
    fake_weapon?: (ItemID);
    /**激活时应用的字符标志 */
    active_flags?: FlagID[];
    /**激活时自动关闭另一个仿生 */
    auto_deactivates?: (BionicID);
    /**激活时在手中生成的不可移除工具 */
    toggled_pseudo_items?: ItemID[];
    /**激活时允许施放的法术 */
    spell_on_activation?: (SpellID);
    /**激活时关闭仿生菜单 */
    activated_close_ui?: boolean;
};