/**从文件提取的预定义的VitaminID 列表*/
export const ExtractDefineVitaminIDList = [
    "calcium"                     , // 钙
    "iron"                        , // 铁
    "vitC"                        , // 维生素C
    "vit_betablocker"             , // β受体阻滞药
    "vit_bloodthinner"            , // 抗凝血药
    "vit_ibuprofen"               , // 布洛芬
    "vit_mme"                     , // 吗啡毫克含量（百分位数）
    "mutant_toxin"                , // 毒素
    "mutagenic_slurry"            , // 诱变剂粘浆
    "mutagen_chelator"            , // 诱变螯合剂
    "mutagen"                     , // 诱变剂
    "mutagen_alpha"               , // 新人类引物
    "mutagen_batrachian"          , // 青蛙引物
    "mutagen_beast"               , // 野兽引物
    "mutagen_bird"                , // 鸟类引物
    "mutagen_cattle"              , // 牛类引物
    "mutagen_cephalopod"          , // 章鱼引物
    "mutagen_chimera"             , // 奇美拉引物
    "mutagen_crustacean"          , // 甲壳引物
    "mutagen_elfa"                , // 精灵引物
    "mutagen_feline"              , // 猫科引物
    "mutagen_fish"                , // 鱼类引物
    "mutagen_gastropod"           , // 蜗牛引物
    "mutagen_human"               , // 净化剂
    "mutagen_insect"              , // 昆虫引物
    "mutagen_lizard"              , // 蜥蜴引物
    "mutagen_lupine"              , // 狼类引物
    "mutagen_medical"             , // 医疗引物
    "mutagen_mouse"               , // 小鼠引物
    "mutagen_plant"               , // 植物引物
    "mutagen_rabbit"              , // 兔子引物
    "mutagen_raptor"              , // 迅猛龙引物
    "mutagen_rat"                 , // 大鼠引物
    "mutagen_chiropteran"         , // 蝙蝠引物
    "mutagen_slime"               , // 变形怪引物
    "mutagen_spider"              , // 蜘蛛引物
    "mutagen_troglobite"          , // 穴居引物
    "mutagen_ursine"              , // 熊科引物
    "bad_food"                    , // 恶心饮食
    "blood"                       , // 血液
    "redcells"                    , // 红细胞
    "human_flesh_vitamin"         , // 吞噬人肉
    "meat_allergen"               , // 肉
    "veggy_allergen"              , // 蔬菜
    "wheat_allergen"              , // 小麦
    "egg_allergen"                , // 蛋
    "fruit_allergen"              , // 水果
    "junk_allergen"               , // 垃圾食品
    "nut_allergen"                , // 坚果
    "bread_allergen"              , // 面包
    "milk_allergen"               , // 奶
    "dermatik_larva_size"         , // 寄生蜂大小
    "triffid_fiber"               , // 三尖树纤维
] as const;
/**从文件提取的预定义的VitaminID */
export type ExtractDefineVitaminID = typeof ExtractDefineVitaminIDList[number];