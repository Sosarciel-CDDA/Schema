/**从文件提取的预定义的NpcClassID 列表*/
export const ExtractDefineNpcClassIDList = [
    "NC_NONE"                     , // 无职业 我在闲逛。
    "NC_NONE_HARDENED"            , // 无职业 我只是个NPC，好让某些人在浩劫后期能拿到更好的物品。
    "NC_TEST_CLASS"               , // 调试用NPC 我正在帮助你测试这个游戏。
    "NC_SHOPKEEP"                 , // 店主 我是此处的商人。
    "NC_DOCTOR"                   , // 医生 我正在寻找需要救助的伤员。
    "NC_VETERINARIAN"             , // 兽医 我正在寻找需要救助的伤员。
    "NC_COWBOY"                   , // 牛仔 俺希望用俺在乡下学到的技能来维持俺的正当生活。
    "NC_MARLOSS_VOICE"            , // 马洛斯之声 吾辈传播圣歌，使吾辈之世界回归生而为一。
    "NC_FARMER"                   , // 农夫 我以前是种庄稼的，我打赌等这一切都稳定下来之后我还能继续种庄稼。
    "NC_BOUNTY_HUNTER"            , // 赏金猎人 我是个寻求雇主的杀手，莫得感情。
    "NC_THUG"                     , // 恶棍 我来这就是为了收保护费的。
    "NC_SCAVENGER"                , // 拾荒者 我只是在努力生存下去。
    "NC_SCAVENGER_PREPPER"        , // 拾荒者 我只是在努力生存下去。
    "NC_SCAVENGER_MOONSHINER"     , // 拾荒者 我只是在努力生存下去。
    "NC_SCAVENGER_EX_PILOT"       , // 前飞行员 我只想飞走，飞去一个更好的地方。
    "NC_HUNTER"                   , // 狩猎者 我正在追踪猎物。
    "NC_SCAVENGER_NOMOVE"         , // 拾荒者 我只是在努力生存下去。
    "NC_SCAVENGER_STATIC"         , // 拾荒者 我只是在努力生存下去。
    "NC_SOLDIER"                  , // 士兵 我来这就是为了收保护费的。
    "NC_BARTENDER"                , // 酒保 我在四处寻找新饮料配方。
    "NC_JUNK_SHOPKEEP"            , // 店主 我是此处的商人。
    "NC_APIS"                     , // 蜜蜂人 我出现了bug，我不该跟你说话的。
    "NC_HALLU"                    , // 真人 我只是在徘徊，就像一个完全真实和正常的NP……人！
    "NC_SURVIVOR_CHEF"            , // 大厨 我是个厨子。
    "NC_TRUE_FOODPERSON"          , // 美食侠™ 我是美食侠™，我带来了食物！
    "NC_CYBORG"                   , // 改造人 滋滋滋……我…我是一个…改…造造造…人。
    "NC_CYBORG_RESCUE"            , // 改造人 我早已超越了凡人之躯。
    "NC_CITY_COP"                 , // 前警官 我曾经是一名警官，但现在我只是一个幸存者。
    "NC_HOMELESS_BROKER"          , // 拾荒者 我只是在努力生存下去。
] as const;
/**从文件提取的预定义的NpcClassID */
export type ExtractDefineNpcClassID = typeof ExtractDefineNpcClassIDList[number];