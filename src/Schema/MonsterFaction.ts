import { CddaID } from "./GenericDefine";



/**怪物阵营ID */
export type MonsterFactionID = CddaID<'MONF'>|DefineMonFaction;

/**怪物阵营定义 */
export type MonsterFaction = {
    type: "MONSTER_FACTION";
    /**怪物阵营唯一ID */
    name: (MonsterFactionID);
    /**可选基础阵营. 与其他阵营的关系继承自它, 
     * 其他阵营对此阵营的关系也会检查此基础阵营
     */
    base_faction?: (MonsterFactionID);
    /**当愤怒时敌对, 否则中立. 对所有其他阵营的默认态度
     * @example ["slime"] // 对粘液怪根据情绪决定敌对与否
     */
    by_mood?: (MonsterFactionID)[];
    /**始终对此阵营保持中立
     * @example ["nether"] // 对地狱生物保持中立
     */
    neutral?: (MonsterFactionID)[];
    /**始终对此阵营保持友好. 默认情况下, 阵营对自己是友好的
     * @example ["slime"] // 对粘液怪保持友好
     */
    friendly?: (MonsterFactionID)[];
    /**始终对此阵营保持敌对. 如果有此阵营的怪物可用, 将优先攻击它们
     * @example ["fungus"] // 对真菌生物保持敌对
     */
    hate?: (MonsterFactionID)[];
};


/**怪物阵营 列表 */
export const DefineMonFactionList = [
    ""                             ,
    "factionless"                  ,
    "attack_player_only"           ,
    "human"                        ,
    "player"                       ,
    "zombie"                       ,
    "zombie_aquatic"               ,
    "kraken"                       ,
    "zombie_dusted"                ,
    "science"                      ,
    "feral_police"                 ,
    "cult"                         ,
    "animal"                       ,
    "small_animal"                 ,
    "mammal_small"                 ,
    "mammal_small_predator"        ,
    "opossum"                      ,
    "skunk"                        ,
    "raccoon"                      ,
    "ferret"                       ,
    "dog_small"                    ,
    "cat"                          ,
    "otter"                        ,
    "bird_small_flying"            ,
    "bird_small_flightless"        ,
    "bird_small_waterfowl"         ,
    "bird_small_waterfowl_predator",
    "reptile_small"                ,
    "snake_small"                  ,
    "reptile_small_aquatic"        ,
    "turtle_small"                 ,
    "turtle_small_predator"        ,
    "tiny_animal"                  ,
    "mammal_tiny"                  ,
    "weasel"                       ,
    "bird_tiny_flying"             ,
    "bird_tiny_flightless"         ,
    "bird_tiny_waterfowl"          ,
    "amphibian_tiny"               ,
    "reptile_tiny"                 ,
    "lizard_tiny"                  ,
    "reptile_tiny_aquatic"         ,
    "snake_tiny_aquatic"           ,
    "herbivore"                    ,
    "herbivore_domestic"           ,
    "beaver"                       ,
    "bear"                         ,
    "fox"                          ,
    "big_cat"                      ,
    "dog"                          ,
    "coyote"                       ,
    "pig"                          ,
    "wolf"                         ,
    "rat"                          ,
    "fish"                         ,
    "fish_tiny"                    ,
    "fish_small"                   ,
    "fish_medium"                  ,
    "fish_large"                   ,
    "fish_mutant_passive"          ,
    "nether"                       ,
    "nether_hate_humans"           ,
    "spearfisher"                  ,
    "nether_fish_symbiote"         ,
    "nether_player_hate"           ,
    "vortex"                       ,
    "slime"                        ,
    "leech_plant"                  ,
    "mutant"                       ,
    "razorclaw"                    ,
    "frog"                         ,
    "slug"                         ,
    "mutant_piscivores"            ,
    "amigara"                      ,
    "mutant_with_vortex"           ,
    "corvid"                       ,
    "ratkin"                       ,
    "lab_mutant"                   ,
    "bot"                          ,
    "utility_bot"                  ,
    "military"                     ,
    "defense_bot"                  ,
    "cop_bot"                      ,
    "mech_bot"                     ,
    "nurse_bot"                    ,
    "passive_machine"              ,
    "berserk_bot"                  ,
    "insect"                       ,
    "worm"                         ,
    "locust"                       ,
    "wasp"                         ,
    "bee"                          ,
    "roach"                        ,
    "mosquito"                     ,
    "dragonfly"                    ,
    "centipede"                    ,
    "centipede_house"              ,
    "dermatik"                     ,
    "spider"                       ,
    "spider_wolf"                  ,
    "spider_web"                   ,
    "spider_jumping"               ,
    "spider_trapdoor"              ,
    "spider_widow"                 ,
    "spider_cellar"                ,
    "ant"                          ,
    "acid_ant"                     ,
    "aphid"                        ,
    "crayfish"                     ,
    "stag_beetle"                  ,
    "stag_beetle_larva"            ,
    "antlion_grub"                 ,
    "antlion_adult"                ,
    "ladybug"                      ,
    "mantis"                       ,
    "strider"                      ,
    "beetle_diving"                ,
    "water_scorpion"               ,
    "fungus"                       ,
    "jabberwock"                   ,
    "robofac"                      ,
    "robofac_spy"                  ,
    "exodii"                       ,
    "isolated_artisans"            ,
    "mi-go"                        ,
    "yrax"                         ,
    "plant"                        ,
    "triffid"                      ,
    "aquatic_predator"             ,
    "seweranha"                    ,
    "sewer_snake"                  ,
    "dark_wyrm",
] as const;
/**怪物阵营 */
export type DefineMonFaction = typeof DefineMonFactionList[number];
