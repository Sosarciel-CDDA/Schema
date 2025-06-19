import { MissionDefinitionID } from "@src/Schema/MissionDefinition";
import { TalkerVar } from "../Eoc";
import { BoolObj } from "./BoolObjectIndex";
import { AnyObj, CompareOpera, CondObj, IDObj, LocObj, NumObj } from "./VariableObjectIndex";
import { BodyPartID, DescText, Time } from "@src/Schema/GenericDefine";
import { FieldID } from "@src/Schema/Field";
import { WeaponCategoryID } from "@src/Schema/WeaponCategory";
import { FlagID } from "@src/Schema/Flag";
import { MutationID } from "@src/Schema/Mutation";
import { AnyItemID } from "@src/Schema/Item";
import { VarComment } from "../EocEffect";
import { StrObj } from "./StringObjectIndex";
import { EffectID } from "@src/Schema/Effect";




/**非操作 */
export type BoolOperaNot = {
    /**非操作 */
    not: (BoolObj);
};
/**或操作 */
export type BoolOperaOr = {
    /**或操作 */
    or: (BoolObj)[]
};
/**与操作 */
export type BoolOperaAnd = {
    /**与操作 */
    and: (BoolObj)[]
};
/**比较字符串是否相等 */
export type BoolOperaCompStr = {
    /**比较字符串是否相等 可以用'yes'进行空值判断 */
    compare_string: [AnyObj,AnyObj]
};



/**math比较表达式 */
export type MathCompareExp = {
    math:[string,CompareOpera,string]
};

/**获取条件 */
export type GetCond = {
    /**获取条件 */
    get_condition: (CondObj);
}

/**有某个效果 */
export type HasEffect = TalkerVar<{
    /**有某个效果  
     * 武术static_buffs可以通过形式来检查mabuff:buff_id  
     */
    has_effect:IDObj<EffectID>;
    /**要求的效果强度 */
    intensity?: (NumObj);
    /**检查哪个肢体 */
    bodypart?: BodyPartID;
},"has_effect">;

/**有某个Flag */
export type HasFlag = TalkerVar<{
    /**有某个Flag */
    has_flag:IDObj<FlagID>;
},"has_flag">;

/**有某个文本变量 */
export type HasStrVar = TalkerVar<{
    /**有某个文本变量 */
    has_var:string;
    /**要求的内容 */
    value: (StrObj);
},"has_var">&VarComment;
/**有某个时间变量 */
export type HasTimeVar = TalkerVar<{
    /**有某个时间变量 */
    has_var:string;
    /**表示是时间变量 */
    time:true;
},"has_var">&VarComment;

/**携带/穿戴/持握/背包里有某个物品 */
export type HasItem  = TalkerVar<{
    /**携带/穿戴/持握/背包里有某个物品 */
    has_item:IDObj<AnyItemID>;
},"has_item">;

/**包里有N个某物品 */
export type HasItems = TalkerVar<{
    /**包里有N个某物品 */
    has_items:{
        /**目标物品 */
        item: IDObj<AnyItemID>;
        /**要求数量 */
        count: (NumObj);
    };
},"has_items">;

/**有某个变异 */
export type HasTrait = TalkerVar<{
    /**有某个变异 */
    has_trait:IDObj<MutationID>;
},"has_trait">;

/**手中的物品有某个flag */
export type HasWieldFlag = TalkerVar<{
    /**手中的物品有某个flag */
    has_wielded_with_flag:IDObj<FlagID>;
},"has_wielded_with_flag">;

/**手中的物品有某个武器分类 */
export type HasWieldWeaponCategoty = TalkerVar<{
    /**手中的物品有某个武器分类 */
    has_wielded_with_weapon_category:IDObj<WeaponCategoryID>;
},"has_wielded_with_weapon_category">;

/**站在某个地块附着物上 */
export type IsInField = TalkerVar<{
    /**手中的物品有某个武器分类 */
    is_in_field:IDObj<FieldID>;
},"is_in_field">;

/**1/n的概率返回true */
export type OneInChance = {
    /**1/n的概率返回true */
    one_in_chance: (NumObj);
};

/**某个mod是否加载 */
export type ModIsLoad = {
    /**目标mod的ID */
    mod_is_loaded: string;
}

/**有某个任务 */
export type HasMission = TalkerVar<{
    /**有某个任务 */
    has_mission: IDObj<MissionDefinitionID>;
},"has_mission">;

/**获取 时间变量自创建以来经过的时间 并比较 */
export type CompareTime = TalkerVar<{
    compare_time_since_var: string;
    /**变量的 type 注释 */
    type?: string;
    /**变量的 context 注释 */
    context?: string;
    /**操作符 */
    op: CompareOpera;
    /**比较的时间 */
    time: (Time);
},"compare_time_since_var">;


/**选择地块的模式 列表 */
const QueryTileTypeList = [
    "anywhere"      , //与"look around" UI相同
    "line_of_sight" , //此刻可见的唯一瓷砖（范围是强制性的）
    "around"        , //与点燃火源相同, 你只能选择紧邻的9个瓷砖
] as const;
/**选择地块的模式 列表 */
type QueryTileType = typeof QueryTileTypeList[number];
/**选择地块 */
export type QueryTile = TalkerVar<{
    /**选择地块 */
    query_tile: QueryTileType;
    /**包含所选瓷砖坐标的变量对象（强制性） */
    target_var: (LocObj);
    /**定义line_of_sight的可选范围（对于line_of_sight是强制性的, 否则不需要） */
    range?: (NumObj);
    /**定义是否允许为anywhere选择其他z-level */
    z_level?: (NumObj);
    /**选择时显示的消息 */
    message?: (DescText);
},"query_tile">;




/**生存需求 */
export type SurvivalNeed = TalkerVar<{
    need: "thirst"|"hunger"|"fatigue";
    amount?: number;
    level?: "TIRED";
},"need">