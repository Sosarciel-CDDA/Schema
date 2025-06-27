import { MonsterID } from "Schema/Monster";
import { IDExpr } from "./ExpressionIndex";
import { StringExpr } from "./StringExprIndex";
import { MartialArtID } from "Schema/MartialArt";


/**怪物阵营mutator */
export type MutatorsMonFaction = {
    /** 返回具有mtype_id的怪物的派系 */
    mutator:"mon_faction";
    /** 怪物的id */
    mtype_id:IDExpr<MonsterID>;
}

/**游戏设置mutator */
export type MutatorsGameOption = {
     /** 返回选项的值作为字符串, 对于数值选项, 你应该使用数学函数 */
    mutator:"game_option";
    /** 选项 */
    option:string;
}

/**武术名称mutator */
export type MutatorsMaTechName = {
    /** 返回具有ID matec_id的武术技术的名称 */
    mutator:"ma_technique_name";
    /** 武术ID */
    matec_id:IDExpr<MartialArtID>;
}

/**武术简介mutator */
export type MutatorsMaTechDesc = {
    /** 返回具有ID matec_id的武术技术的描述 */
    mutator:"ma_technique_description";
    /** 武术ID */
    matec_id:IDExpr<MartialArtID>;
}

/**随机武术mutator */
export type MutatorsVaildTech = {
    /** 返回alpha talker可以根据提供的规格对beta talker使用的随机有效技术 */
    mutator:"valid_technique";
    blacklist: StringExpr[];
    crit: boolean;
    dodge_counter: boolean;
    block_counter: boolean;
}

/**相对坐标mutator */
export type MutatorsLocRelative = {
    /** target应该是一个字符串, 如"(x,y,z)", 其中x,y,z是相对于玩家的坐标. 返回提供的点相对于玩家的abs_ms坐标作为字符串 (准备存储为位置变量) , 形式为"(x,y,z)". 所以"target":"(0,1,0)"将返回玩家南边的点 */
    mutator:"loc_relative_u";
    /** 目标位置 */
    target:`(${number},${number},${number})`|Exclude<StringExpr,string>;
}

/**选项物品mutator */
export type MutatorsTopicItem = {
    /** 返回当前topic_item作为字符串 */
    mutator:"topic_item";
}

