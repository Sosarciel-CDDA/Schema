/**从文件提取的预定义的NpcInstanceID 列表*/
export const ExtractDefineNpcInstanceIDList = [
    "deserter"                    , // Generic hostile military deserter.
    "marloss_voice"               , // Generic Marloss Priest who leads pilgrim bands.
    "apis"                        , // Bee mutant or mutant bee (supposed to be ambiguous). Should be 'it', but we'll go with 'she' because it's a bee.
    "derelict_dweller"            , // Crazy Person.
    "survivor_chef"               , // A chef hiding at their job since the Cataclysm. They spawn in a slightly fortified back room of a restaurant with a stockpile of food.
    "farmer"                      , // A farmer survivor, friendly but suspicious.
    "true_foodperson"             , // Foodperson mascot, except if you ask them Foodperson is a real hero and it's them!
    "cyborg_rescued"              , // A prototype cyborg you saved.
    "survivor_cop"                , // A police officer who has taken over the station since the Cataclysm.  They sell items out of the evidence locker.
    "survivor_camper"             ,
    "apartment_survivor"          ,
    "prepper_survivor"            ,
    "survivor_moonshiner"         ,
    "NPC_gun_store_survivor"      ,
    "NPC_animal_shelter_survivor" ,
    "NPC_park_survivor"           ,
    "NPC_evac_shelter_survivor"   ,
    "NPC_homeless_survivor"       ,
    "NPC_homeless_broker"         ,
    "NPC_homeless_group_survivor" ,
    "tracker_gunslinger"          , // the gunslinger that spawns for MISSION_RECRUIT_TRACKER
    "NPC_debug"                   , // Someone helps you test the game.
] as const;
/**从文件提取的预定义的NpcInstanceID */
export type ExtractDefineNpcInstanceID = typeof ExtractDefineNpcInstanceIDList[number];