/**从文件提取的预定义的RecipeCategoryID 列表*/
export const ExtractDefineRecipeCategoryIDList = [
    "CC_*"                        ,
    "CC_WEAPON"                   ,
    "CC_AMMO"                     ,
    "CC_FOOD"                     ,
    "CC_CHEM"                     ,
    "CC_ELECTRONIC"               ,
    "CC_ARMOR"                    ,
    "CC_APPLIANCE"                ,
    "CC_CAMP"                     ,
    "CC_OTHER"                    ,
    "CC_ANIMALS"                  ,
    "CC_MUSIC"                    ,
    "CC_BUILDING"                 ,
    "CC_PRACTICE"                 ,
] as const;
/**从文件提取的预定义的RecipeCategoryID */
export type ExtractDefineRecipeCategoryID = typeof ExtractDefineRecipeCategoryIDList[number];