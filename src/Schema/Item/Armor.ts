import { BodyPartID, SubBodyPartID } from "Schema/BodyPart";
import { CddaID, DescText, Float, Int } from "../GenericDefine"
import { MaterialID } from "../Material";
import { GenericFlagID } from "./Generic"
import { ItemID, ItemTrait } from "./ItemIndex";


/**ArmorID */
export type ArmorID = CddaID<"ARMOR">;

/**一件护甲 */
export type ArmorTrait = ItemTrait<"ARMOR",({
    /**标记具有 ARMOR 的特征, 用于补全 */
    "//ARMOR": true;
})&{
    /**保暖值  
     * @default 0  
     */
    warmth?: Int;
    /**环境防护值   
     * @default 0  
     */
    environmental_protection?: Int;
    /**如果为true, 这是一件分边护甲  
     * 分边护甲是即使它描述了覆盖双腿, 双臂, 双手等  
     * 实际上一次只覆盖一个"边", 但玩家可以随意在两边之间移动  
     * @default false  
     */
    sided?: boolean;
    /**材料厚度(mm)  
     * 材料的厚度, 以毫米为单位(大约)  
     * 普通衣服范围从0.1到0.5  
     * 特别坚固的布料可能高达1-2mm  
     * 护甲或防护设备可以高达10或更高  
     */
    material_thickness?: Float;
    /**是否为动力装甲物品(这些是特殊的)  
     * @default false  
     */
    power_armor?: boolean;
    /**可以穿戴这些物品的最大数量  
     * @default 2  
     */
    max_worn?: Int;
    /**确定ENERGY_SHIELD_HP和ENERGY_SHIELD_MAX_HP物品变量的初始值  
     * 用于能量护盾  
     * 对于没有ENERGY_SHIELD标志的护甲部件, 此字段无效  
     */
    energy_shield_max_hp?: Int;
    /**当被摧毁时, 这个物品会变成的itype_id  
     * 目前仅适用于可消耗护甲  
     */
    non_functional?: (ItemID);
    /**如果物品使用non-functional, 这将是它变成非功能性变体时的描述 */
    damage_verb?: (DescText);
    /**有效服装改装列表  
     * 注意: 如果服装改装没有列出"restricted", 则不需要这个  
     */
    valid_mods?: string[];
    /**护甲数据 必须设置覆盖层 */
    armor?: ArmorPortion[];
    flags?: ArmorFlagID[];
}&Pick<ArmorPortion,
"covers"|"coverage"|
"cover_melee"|"cover_ranged"|"cover_vitals"|
"encumbrance"|"max_encumbrance"
>>;

/**护甲数据 */
export type ArmorPortion = {
    /**基础累赘度(未适配值)  
     * [每件累赘度, 多件累赘度惩罚]  重复穿着3件时 [0]*3+[1]
     * 如果是数组, 第一个值是基础累赘度(未适配值), 第二个值是最大累赘度  
     * 当这件护甲的口袋完全装满物品时, 非刚性物品的累赘度将设置为这个值  
     * 否则它将介于第一个值和第二个值之间, 遵循公式:   
     * 第一个值 + (第二个值 - 第一个值) * 非刚性体积 / 非刚性容量  
     * 默认情况下, 最大累赘度是累赘度 + (非刚性体积 / 250ml)  
     */
    encumbrance?: Int | [Int, Int];
    /**最大累赘度  
     * 当角色完全装满体积时, 非刚性存储容器的累赘度将设置为这个值  
     * 否则它将介于encumbrance和max_encumbrance之间, 遵循方程:   
     * encumbrance + (max_encumbrance - encumbrance) * 非刚性体积 / 非刚性容量  
     * 默认情况下, max_encumbrance是encumbrance + (非刚性体积 / 250ml)  
     */
    max_encumbrance?: Int;
    /**覆盖护甲的透气性, 由护甲材料驱动  
     * @example "IMPERMEABLE" // 0%  
     * @example "POOR" // 30%  
     * @example "AVERAGE" // 50%  
     * @example "GOOD" // 80%  
     * @example "MOISTURE_WICKING" // 110%  
     * @example "SECOND_SKIN" // 140%  
     */
    breathability?: "IMPERMEABLE" | "POOR" | "AVERAGE" | "GOOD" | "MOISTURE_WICKING" | "SECOND_SKIN";
    /**这件护甲所在的层次  
     * @example ["SKINTIGHT"]  
     * 可以是: PERSONAL, SKINTIGHT, NORMAL, WAIST, OUTER, BELTED, AURA  
     * 详见 ARMOR_BALANCE_AND_DESIGN.md#layers  
     */
    layers?: ArmorLayer[];
    /**如果为true, 这部分护甲是刚性的, 会与同一层次上的其他刚性服装冲突  
     * @default false  
     */
    rigid_layer_only?: boolean;
    /**基础覆盖率(%)  
     * 当攻击命中covers中的身体部位时, 这件护甲会被命中(并因此用作护甲)的时间百分比  
     */
    coverage: Int;
    /**近战攻击覆盖率(%)  
     * 这件护甲被近战攻击命中的时间百分比  
     * 通常这与coverage相同  
     */
    cover_melee?: Int;
    /**远程攻击覆盖率(%)  
     * 这件护甲被远程攻击命中的时间百分比  
     * 通常这与coverage相同  
     */
    cover_ranged?: Int;
    /**要害保护率(%)  
     * 暴击伤害被吸收的百分比  
     * 只有超出正常伤害的额外伤害会被减轻  
     * 所以100的要害覆盖率意味着暴击伤害将与普通伤害相同  
     */
    cover_vitals?: Int;
    /**体积累赘修正系数  
     * 更现代的方法是直接在护甲上设置一个比例因子  
     * 这样更容易阅读和快速解析(不需要心算)  
     * 并且直接缩放250ml常数  
     * 所以如果我设置"volume_encumber_modifier"为0.25, 意味着每1000ml(250ml/0.25)增加一点累赘度  
     */
    volume_encumber_modifier?: Float;
    /**活动噪音 */
    activity_noise?: {
        /**音量 */
        volume: Int;
        /**几率 */
        chance: Int;
    };
    /**覆盖的身体部位 主肢体id  
     * 使用body_parts.json中定义的bodypart_id作为有效值  
     */
    covers: BodyPartID[];
    /**具体覆盖的子部位 子肢体id  
     * 使用body_parts.json中定义的sub_bodypart_id作为有效值  
     * 这些用于在同一层次上穿戴多件护甲而不会获得累赘惩罚  
     * 如果不指定, 则假定该部分完全覆盖它覆盖的所有身体部位  
     * 绑带层物品和外层护甲应始终指定这些, 否则会与其他部件冲突  
     */
    specifically_covers?: SubBodyPartID[];
    /**护甲材料定义 */
    material?: ArmorMaterial[];
};

/**护甲材料定义 */
type ArmorMaterial = {
    /**材质ID */
    type: (MaterialID);
    /**该材料覆盖的百分比  
     * @default 100  
     */
    covered_by_mat?: Int;
    /**材料厚度(mm)  
     * @default 0.0  
     */
    thickness?: Float;
    /**是否忽略板材厚度限制  
     * @default false  
     */
    ignore_sheet_thickness?: boolean;
};

/**装甲图层显示优先级/装甲层级  
 * 从低到高 AURA显示在最外层  
 */
export const ArmorLayerList = ["PERSONAL","SKINTIGHT","NORMAL","WAIST","OUTER","BELTED","AURA"] as const;
/**装甲图层 */
export type ArmorLayer = typeof ArmorLayerList[number];

/**定义的FlagID 列表 */
export const DefineArmorFlagIDList = [
    "INTEGRATED"             , // 该物品代表了由突变或仿生学授予的你的一部分. 它总是适合, 不能被卸下 (除了失去来源), 并且不会在死亡时掉落, 但在功能, 负担, 层冲突等方面表现得像普通盔甲. 
    "ALLOWS_NATURAL_ATTACKS" , // 允许变异肢体的攻击
    "BLOCK_WHILE_WORN"       , // 允许使用磨损的盔甲或盾牌来阻挡攻击. 
    "PARTIAL_DEAF"           , // 降低音量到安全
    "PADDED"                 , // 有内衬 即使没有任何特定材料是柔软的, 这种盔甲也算舒适. 
] as const;
/**定义的FlagID */
export type DefineArmorFlagID = typeof DefineArmorFlagIDList[number]|ArmorLayer;


type ArmorFlagID = DefineArmorFlagID|GenericFlagID;





/**
ABLATIVE_CHAINMAIL_ARMS             物品可以与链甲盔甲一起佩戴, 而不会受到负担惩罚; 特别可以放入带有此标志限制的盔甲口袋中
ABLATIVE_CHAINMAIL_ELBOWS           物品可以与链甲盔甲一起佩戴, 而不会受到负担惩罚; 特别可以放入带有此标志限制的盔甲口袋中
ABLATIVE_CHAINMAIL_KNEES            物品可以与链甲盔甲一起佩戴, 而不会受到负担惩罚; 特别可以放入带有此标志限制的盔甲口袋中
ABLATIVE_CHAINMAIL_LEGS             物品可以与链甲盔甲一起佩戴, 而不会受到负担惩罚; 特别可以放入带有此标志限制的盔甲口袋中
ABLATIVE_CHAINMAIL_TORSO            物品可以与链甲盔甲一起佩戴, 而不会受到负担惩罚; 特别可以放入带有此标志限制的盔甲口袋中
ABLATIVE_HELMET                     该物品可以与 Hub 01 头饰一起佩戴, 不会造成负担损失; 特别可以放入带有此标志限制的盔甲口袋中
ABLATIVE_LARGE                      该物品适合放入大型烧蚀口袋中. 
ABLATIVE_MANTLE                     该物品可以与 Hub 01 盔甲一起佩戴, 而不会受到负担惩罚; 特别可以放入带有此标志限制的盔甲口袋中
ABLATIVE_MEDIUM                     该商品适合放入中等烧蚀口袋中. 
ABLATIVE_SKIRT                      该物品可以与 Hub 01 盔甲一起佩戴, 而不会受到负担惩罚; 特别可以放入带有此标志限制的盔甲口袋中
ACTIVE_CLOAKING                     处于活动状态时, 会耗尽 UPS 以提供隐形效果. 
ALARMCLOCK                          具有闹钟功能. 
ALLOWS_NATURAL_ATTACKS              不能防止任何自然攻击或突变, 指尖剃须刀等带来的类似好处, 就像大多数覆盖相关身体部位的物品一样. 
ALLOWS_TAIL                         即使有尾巴也可以穿这款遮腿单品
ALLOWS_TALONS                       爪子突变的人仍然可以穿着这种覆盖手臂的盔甲
AURA                                该物品位于外光环层, 旨在产生形而上学效果. 
BAROMETER                           该齿轮配备有精确的气压计 (用于测量大气压力). 
BELTED                              可以叠放背包和穿在外套外面的物品. 
BLIND                               佩戴时使佩戴者失明, 并提供对抗闪光弹的名义保护. 
BLOCK_WHILE_WORN                    允许使用磨损的盔甲或盾牌来阻挡攻击. 
BULLET_IMMUNE                       佩戴带有此旗帜的物品可以使你免受子弹伤害
CANT_WEAR                           该物品不能直接佩戴. 
COLLAR                              这件衣服有一个宽领, 可以在大部分不受阻碍的情况下让你的嘴保持温暖. 
COMBAT_TOGGLEABLE                   该项目旨在在战斗中切换. 由 NPC 用于确定他们是否会在战斗中打开它. 这只支持简单的“转换”操作. 
DEAF                                使玩家耳聋. 
DECAY_EXPOSED_ATMOSPHERE            消耗品一旦暴露在大气中就会变质 (例如 MRE). 
ELECTRIC_IMMUNE                     该装备可以完全保护您免受放电. 
EXTRA_PLATING                       物品可以穿在某些盔甲上, 作为额外的保护层 (如镶边上的盔甲); 特别可以放入带有此标志限制的盔甲口袋中
FANCY                               如果玩家具有该特质, 穿着这件衣服可以提高士气Stylish. 
FIN                                 该产品是游泳脚蹼, 又名潜水脚蹼, 又名脚蹼, 可在您游泳时提供速度提升
FIX_FARSIGHT                        该装置可矫正远视. 
FIX_NEARSIGHT                       该装置可矫正近视. 
FLASH_PROTECTION                    该物品可防止不同的与光相关的危险, 包括闪光弹和耀眼的光
FLOTATION                           防止玩家在深水中溺水. 还可以防止潜入水下. 
FRAGILE                             该齿轮的抗损坏能力低于普通齿轮. 
GAS_PROOF                           该产品将完全保护您免受任何危险气体的侵害
GNV_EFFECT                          佩戴后, 该物品将提供夜视能力. 使用附魔, 应用效果, 修改角色的夜视分数, 可能是更好的选择, 并且更灵活
HELMET_AVENTAIL                     该物品可以与鼻盔一起佩戴; 特别可以放入带有此标志限制的盔甲口袋中
HELMET_BACK_POUCH                   该物品可以与不同的安全帽一起佩戴, 作为附件; 特别可以放入带有此标志限制的盔甲口袋中
HELMET_EAR_ATTACHMENT               该物品可以与不同的安全帽一起佩戴, 作为附件; 特别可以放入带有此标志限制的盔甲口袋中
HELMET_FACE_SHIELD                  该物品可以与不同的安全帽一起佩戴, 作为附件; 特别可以放入带有此标志限制的盔甲口袋中
HELMET_MANDIBLE_GUARD_STRAPPED      该物品可以作为附件与不同的硬质头盔一起佩戴; 特别可以放入带有此标志限制的盔甲口袋中
HELMET_MANDIBLE_GUARD               该物品可以作为附件与不同的硬质头盔一起佩戴; 特别可以放入带有此标志限制的盔甲口袋中
HELMET_NAPE_PROTECTOR               该物品可以作为附件与不同的硬质头盔一起佩戴; 特别可以放入带有此标志限制的盔甲口袋中
HOOD                                如果玩家的头部没有受到阻碍, 则允许该服装有条件地覆盖头部, 以提供额外的保暖或防水保护
HYGROMETER                          该装置配备了精确的湿度计 (用于测量湿度). 
INTEGRATED                          该物品代表了由突变或仿生学授予的你的一部分. 它总是适合, 不能被卸下 (除了失去来源), 并且不会在死亡时掉落, 但在功能, 负担, 层冲突等方面表现得像普通盔甲. 
IR_EFFECT                           佩戴后, 该物品会产生红外视觉
MUTE                                使玩家静音. 
NORMAL                              像普通衣服一样穿着的物品. 这被假定为默认值. 
NO_TAKEOFF                          带有该标志的物品无法脱下. 
NO_WEAR_EFFECT                      该装备在佩戴时不会提供任何效果 (大多数珠宝). 
ONLY_ONE                            您只能穿一件. 
OUTER                               外衣层. 
OVERSIZE                            无论有什么负担/突变/仿生学/等, 都可以始终穿着, 但可以防止任何其他衣服穿在上面. 
PADDED                              即使没有任何特定材料是柔软的, 这种盔甲也算舒适. 
PADDED                              即使没有任何特定材料是柔软的, 这种盔甲也算舒适. 
PARTIAL_DEAF                        将音量降低到安全水平. 
PERSONAL                            该物品位于个人光环层中, 旨在产生形而上的效果. 
POCKETS如                           果玩家的手很冷并且玩家没有挥舞任何东西, 则可以增加手部的温暖. 
POWERARMOR_COMPATIBLE               使物品与动力装甲兼容, 尽管其他参数会导致失败. 
PSYSHIELD_PARTIALfear_paralyze      佩戴时有 25% 几率防御怪物攻击. 
RAD_PROOF                           这件衣服可以完全保护您免受辐射. 
RAD_RESIST                          这件衣服部分 (75%)保护您免受辐射. 
RAINPROOF                           防止被覆盖的身体部位被雨淋湿. 
REQUIRES_BALANCE                    需要一定平衡才能保持稳定的装备. 如果玩家在穿着时被击中, 他们有机会被击倒. 
RESTRICT_HANDS                      阻止玩家双手使用武器, 如果武器允许, 则强制玩家使用单手. 
ROLLER_INLINE                       速度更快, 但整体稳定性较差, 对非平坦地形的惩罚甚至更严厉. 
ROLLER_ONE                          不太稳定且较慢的版本ROLLER_QUAD, 仍然允许玩家移动得比步行速度更快. 
ROLLER_QUADROLLER_INLINE            和之间的中等选择ROLLER_ONE, 虽然它更稳定, 移动速度更快, 但它也比 具有更严厉的非平坦地形惩罚ROLLER_ONE. 
SEMITANGIBLE                        防止物品在佩戴时参与阻碍系统. 
SKINTIGHT                           内衣层. 
SLOWS_MOVEMENT                      这件衣服将移动成本乘以 1.1. 
SLOWS_THIRST                        这件衣服使玩家口渴的速度乘以 0.70. 
STAR_PLATE                          物品可以与流星战斗套件盔甲一起佩戴; 特别可以放入带有此标志限制的盔甲口袋中
STAR_SHOULDER                       物品可以与流星战斗套件盔甲一起佩戴; 特别可以放入带有此标志限制的盔甲口袋中
STAR_SKIRT                          物品可以与流星战斗套件盔甲一起佩戴; 特别可以放入带有此标志限制的盔甲口袋中
STURDY                              这件衣服比普通衣服更能抵抗损坏. 
SUN_GLASSES                         在阳光下防止眩光. 
SUPER_FANCYFANCY                    如果玩家具有该特质, 则会获得额外的道德奖励Stylish. 
SWIM_GOGGLES                        让您在水下看得更远. 
THERMOMETER                         该齿轮配备有精确的温度计 (用于测量温度). 
TOUGH_FEET                          这种盔甲提供的效果类似于穿着合适的靴子 (比如腿上的鳞片), 所以你不会因为不穿鞋而受到减益
UNDERSIZE                           这件衣服可以被小小或谦逊的变种人舒适地穿着. 对于其他人来说太小了
VARSIZE                             可以通过剪裁使其合身. 
WAIST                               为腰带和其他挂在腰上的东西叠层. 
WATCH                               充当手表并允许玩家查看实际时间. 
WATERPROOF                          防止被覆盖的身体部位在任何情况下都不会被弄湿. 
WATER_FRIENDLY                      防止该物品使身体部位被视为对水不友好, 从而降低士气. 
*/