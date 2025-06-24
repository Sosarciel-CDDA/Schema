import { EffectID } from "./Effect";
import { FlagID } from "./Flag";
import { CddaID, DescText, Int, Time, Weight } from "./GenericDefine";



/**维生素ID */
export type VitaminID = CddaID<"VIT">|DefineVitaminID;

/**维生素 */
export type Vitamin = {
    /**维生素唯一ID */
    id: (VitaminID);
    /**类型，必需为"vitamin" */
    type: "vitamin";
    /**维生素类型，必需字段
     * 有效值：
     * - "vitamin"：当简化营养启用时，此维生素不会被添加到任何物品中
     * - "toxin"：有毒化学物质或成分，目前无效果
     * - "counter"：某种计数器，既不是毒素、维生素也不是药物
     * - "drug"：药物，有30分钟延迟效果
     */
    vit_type: "vitamin" | "toxin" | "counter" | "drug";
    /**维生素显示名称，如在物品菜单中的维生素显示 */
    name?: (DescText);
    /**维生素过量时触发的效果ID */
    excess?: (EffectID);
    /**维生素缺乏时触发的效果ID */
    deficiency?: (EffectID);
    /**玩家可以拥有的最小维生素量 */
    min?: Int;
    /**玩家可以拥有的最大维生素量 */
    max?: Int;
    /**按重量指定食物中维生素含量的单位
     * 食物的重量将除以此数量来确定食物含有的维生素单位
     */
    weight_per_unit?: (Weight);
    /**失去一个单位维生素所需的时间 */
    rate?: (Time);
    /**标志数组，参见下面的标志部分获取有效值 */
    flags?: FlagID[];
    /**维生素缺乏的阈值
     * 列表中的每对确定该缺乏等级的开始和结束点
     * 每个缺乏等级对应于deficiency中定义的效果强度级别
     */
    disease?: [Int, Int][];
    /**维生素过量的阈值
     * 列表中的每对确定该过量等级的开始和结束点
     * 每个过量等级对应于excess中定义的效果强度级别
     */
    disease_excess?: [Int, Int][];
    /**维生素自然代谢时会调整体内其他维生素水平
     * 列表中的每对包含一个维生素ID和一个数字
     * 数字表示当此维生素代谢一个单位时，该维生素将被调整多少
     * 负值可用于清除体内现有维生素
     * 仅发生在自然衰减时（由rate确定）
     */
    decays_into?: [(VitaminID), Int][];
};

//#region VitaminID提取
/**VitaminID提取 列表*/
const ExtractDefineVitaminIDList = [
    "calcium"           , // 钙
    "iron"              , // 铁
    "vitC"              , // 维生素C
    "vit_betablocker"   , // β受体阻滞药
    "vit_bloodthinner"  , // 抗凝血药
    "vit_ibuprofen"     , // 布洛芬
    "vit_mme"           , // 吗啡毫克含量（百分位数）
    "mutant_toxin"      , // 毒素
    "mutagenic_slurry"  , // 诱变剂粘浆
    "mutagen_chelator"  , // 诱变螯合剂
    "mutagen"           , // 诱变剂
    "mutagen_alpha"     , // 新人类引物
    "mutagen_batrachian", // 青蛙引物
    "mutagen_beast"     , // 野兽引物
    "mutagen_bird"      , // 鸟类引物
    "mutagen_cattle"    , // 牛类引物
    "mutagen_cephalopod", // 章鱼引物
    "mutagen_chimera"   , // 奇美拉引物
    "mutagen_crustacean", // 甲壳引物
    "mutagen_elfa"      , // 精灵引物
    "mutagen_feline"    , // 猫科引物
    "mutagen_fish"      , // 鱼类引物
    "mutagen_gastropod" , // 蜗牛引物
    "mutagen_human"     , // 净化剂
    "mutagen_insect"    , // 昆虫引物
    "mutagen_lizard"    , // 蜥蜴引物
    "mutagen_lupine"    , // 狼类引物
    "mutagen_medical"   , // 医疗引物
    "mutagen_mouse"     , // 小鼠引物
    "mutagen_plant"     , // 植物引物
    "mutagen_rabbit"    , // 兔子引物
    "mutagen_raptor"    , // 迅猛龙引物
    "mutagen_rat"       , // 大鼠引物
    "mutagen_chiropteran", // 蝙蝠引物
    "mutagen_slime"     , // 变形怪引物
    "mutagen_spider"    , // 蜘蛛引物
    "mutagen_troglobite", // 穴居引物
    "mutagen_ursine"    , // 熊科引物
    "bad_food"          , // 恶心饮食
    "blood"             , // 血液
    "redcells"          , // 红细胞
    "human_flesh_vitamin", // 吞噬人肉
    "meat_allergen"     , // 肉
    "veggy_allergen"    , // 蔬菜
    "wheat_allergen"    , // 小麦
    "egg_allergen"      , // 蛋
    "fruit_allergen"    , // 水果
    "junk_allergen"     , // 垃圾食品
    "nut_allergen"      , // 坚果
    "bread_allergen"    , // 面包
    "milk_allergen"     , // 奶
    "dermatik_larva_size", // 寄生蜂大小
    "triffid_fiber"     , // 三尖树纤维
] as const;
/**VitaminID提取 列表*/
type ExtractDefineVitaminID = typeof ExtractDefineVitaminIDList[number];
//#endregion

/**预定义的VitaminID 列表*/
export const DefineVitaminIDList = ExtractDefineVitaminIDList;
/**预定义的VitaminID */
export type DefineVitaminID = ExtractDefineVitaminID;