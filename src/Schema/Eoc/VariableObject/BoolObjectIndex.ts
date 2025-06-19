/**Eoc Bool 对象 */
export type BoolObj = BoolOperateList[number]|NoParamCond;

/**无参条件 */
export type NoParamCond = [
    NoParamTalkerCond,
    "is_by_radio"    ,//此对话是在无线通话
][number];
/**双Talker无参条件列表 */
export const NoParamTalkerCondList = [
    "female"              ,//是女性
    "male"                ,//是男性
    "can_drop_weapon"     ,//可以丢弃手中的物品
    "has_weapon"          ,//挥舞着任意物品
    "is_avatar"           ,//是主角
    "is_npc"              ,//是npc
    "is_character"        ,//是角色
    "is_monster"          ,//是怪物
    "is_item"             ,//是物品
    "is_furnitur"         ,//是家具
    "driving"             ,//正在驾驶

    "can_see"       ,//检查talker是否能看见（不是盲的）
    "is_deaf"       ,//检查talker是否聋（不能听见）
    "is_alive"      ,//检查talker是否活着（不是死的）
    "is_warm"       ,//检查talker是否是温血的（具有WARM标志）
    "exists"        ,//检查talker是否存在（不是null）
] as const;

/**双Talker无参条件 */
export type NoParamTalkerCond = `${`u_`|`npc_`}${typeof NoParamTalkerCondList[number]}`


//#region BoolOperate导出
import {BoolOperaNot, BoolOperaOr, BoolOperaAnd, BoolOperaCompStr, MathCompareExp, GetCond, HasEffect, HasFlag, HasStrVar, HasTimeVar, HasItem, HasItems, HasTrait, HasWieldFlag, HasWieldWeaponCategoty, IsInField, OneInChance, ModIsLoad, HasMission, CompareTime, QueryTile, SurvivalNeed, HasItemsSum, HasWieldedWithSkill, HasWieldedWithAmmotype, IsOnTerrain, IsOnTerrainWithFlag} from './BoolObject'
/**BoolOperate导出 */
export type BoolOperateList = [
    BoolOperaNot            ,//非操作
    BoolOperaOr             ,//或操作
    BoolOperaAnd            ,//与操作
    BoolOperaCompStr        ,//比较字符串是否相等
    MathCompareExp          ,//math比较表达式
    GetCond                 ,//获取条件
    HasEffect               ,//有某个效果
    HasFlag                 ,//有某个Flag
    HasStrVar               ,//有某个文本变量
    HasTimeVar              ,//有某个时间变量
    HasItem                 ,//携带/穿戴/持握/背包里有某个物品
    HasItems                ,//包里有N个某物品
    HasTrait                ,//有某个变异
    HasWieldFlag            ,//手中的物品有某个flag
    HasWieldWeaponCategoty  ,//手中的物品有某个武器分类
    IsInField               ,//站在某个地块附着物上
    OneInChance             ,//1/n的概率返回true
    ModIsLoad               ,//某个mod是否加载
    HasMission              ,//有某个任务
    CompareTime             ,//获取 时间变量自创建以来经过的时间 并比较
    QueryTile               ,//选择地块的模式 列表 */
    SurvivalNeed            ,//生存需求
    HasItemsSum             ,//拥有物品汇总
    HasWieldedWithSkill     ,//检查talker是否持有使用特定技能的武器
    HasWieldedWithAmmotype  ,//检查talker是否持有使用特定弹药类型的武器
    IsOnTerrain             ,//检查talker是否站在特定地形上
    IsOnTerrainWithFlag     ,//检查talker是否站在具有特定标志的地形上
];
//#endregion