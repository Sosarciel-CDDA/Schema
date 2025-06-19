/**Eoc Bool 对象 */
export type BoolObj = BoolOperateList[number]|NoParamCond;


import { BoolOperaAnd, BoolOperaCompStr, BoolOperaNot, BoolOperaOr, CompareTime, GetCond, HasEffect, HasFlag, HasItem, HasItems, HasMission, HasStrVar, HasTimeVar, HasTrait, HasWieldedWithAmmotype, HasWieldedWithSkill, HasWieldFlag, HasWieldWeaponCategoty, IsInField, IsOnTerrain, IsOnTerrainWithFlag, MathCompareExp, ModIsLoad, OneInChance, QueryBool, QueryTile, SurvivalNeed, UHasItemsSum } from "./BoolObject";
/**Eoc Bool 对象操作符 */
export type BoolOperateList = [
    BoolOperaNot            ,//非
    BoolOperaOr             ,//或
    BoolOperaAnd            ,//与
    BoolOperaCompStr        ,//比较两个字符串
    MathCompareExp          ,//
    HasWieldFlag            ,//手中的物品有某个flag
    HasWieldWeaponCategoty  ,//手中的物品有某个武器分类
    HasItem                 ,//携带/穿戴/持握/背包里有某个物品
    HasItems                ,//携带/穿戴/持握/背包里有N个某物品
    HasTrait                ,//有某个变异
    HasEffect               ,//有某个效果
    HasFlag                 ,//有某个Flag
    OneInChance             ,//1/n的概率返回true
    CompareTime             ,//比较时间变量
    HasStrVar               ,//有某个变量
    HasTimeVar              ,//有某个变量
    ModIsLoad               ,//某个mod是否加载
    HasMission              ,//有某个任务
    IsInField               ,//在某个地块附着物上
    GetCond                 ,//获取条件
    QueryTile               ,//选择地块
    SurvivalNeed            ,//生存需求

    UHasItemsSum              ,//获取物品总数
    HasWieldedWithSkill       ,//检查是否持有使用特定技能的武器
    HasWieldedWithAmmotype    ,//检查是否持有使用特定弹药类型的武器
    IsOnTerrain               ,//检查是否站在特定地形上
    IsOnTerrainWithFlag       ,//检查是否站在具有特定标志的地形上
    QueryBool                 ,//创建一个弹出窗口
];

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
