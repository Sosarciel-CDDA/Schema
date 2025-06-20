/**Eoc Bool 对象 */
export type BoolObj = BoolOperateList[number]|NoParamCond;

/**无参条件 */
export type NoParamCond = [
    NoParamTalkerCond,
    "is_by_radio"    ,// 检查此对话是否通过无线电进行（而非面对面交谈）
    "player_see_u"   ,// 检查玩家是否可以看见alpha talker（适用于任何talker类型）
    "player_see_npc" ,// 检查玩家是否可以看见beta talker（适用于任何talker类型）
    "has_ammo"       ,// 检查beta talker（物品）是否有足够的弹药至少射击一次
][number];

/**双Talker无参条件列表 */
export const NoParamTalkerCondList = [
    "female"                ,//是女性
    "male"                  ,//是男性
    "can_drop_weapon"       ,//可以丢弃手中的物品
    "has_weapon"            ,//挥舞着任意物品
    "is_avatar"             ,//是主角
    "is_npc"                ,//是npc
    "is_character"          ,//是角色
    "is_monster"            ,//是怪物
    "is_item"               ,//是物品
    "is_furnitur"           ,//是家具
    "is_vehicle"            ,//是车辆
    "driving"               ,//正在驾驶
    "can_see"               ,//检查talker是否能看见（不是盲的）
    "is_deaf"               ,//检查talker是否聋（不能听见）
    "is_alive"              ,//检查talker是否活着（不是死的）
    "is_warm"               ,//检查talker是否是温血的（具有WARM标志）
    "exists"                ,//检查talker是否存在（不是null）
    "has_alpha"             ,//检查alpha talker是否存在
    "has_beta"              ,//检查beta talker是否存在
    "can_stow_weapon"       ,//检查talker是否可以收起武器
    "controlling_vehicle"   ,//检查talker是否控制着载具
    "driving"               ,//检查talker是否操作着移动中的载具
    "see_npc"               ,// 检查alpha talker是否可以看见beta talker
    "see_you"               ,// 检查beta talker是否可以看见alpha talker
    "see_npc_loc"           ,// 检查从alpha talker位置是否可以看见beta talker位置（不考虑视觉条件）
    "see_you_loc"           ,// 检查从beta talker位置是否可以看见alpha talker位置（不考虑视觉条件）
    "is_driven"             ,// 检查talker（载具）是否正在被驾驶
    "is_remote_controlled"  ,// 检查talker（载具）是否正在被玩家远程控制
    "can_fly"               ,// 检查talker（载具）是否能够飞行
    "is_flying"             ,// 检查talker（载具）是否正在飞行
    "can_float"             ,// 检查talker（载具）是否能够漂浮
    "is_floating"           ,// 检查talker（载具）是否正在漂浮
    "is_falling"            ,// 检查talker（载具）是否正在坠落
    "is_skidding"           ,// 检查talker（载具）是否正在打滑
    "is_sinking"            ,// 检查talker（载具）是否正在下沉
    "is_on_rails"           ,// 检查talker（载具）是否使用轨道
    "is_avatar_passenger"   ,// 检查talker（载具）是否有玩家作为乘客
] as const;


/**双Talker无参条件 */
export type NoParamTalkerCond = `${`u_`|`npc_`}${typeof NoParamTalkerCondList[number]}`


//#region BoolOperate导出
import {BoolOperaNot, BoolOperaOr, BoolOperaAnd, BoolOperaCompStr, MathCompareExp, GetCond, HasEffect, HasStrVar, HasTimeVar, HasWieldFlag, HasWieldWeaponCategoty, OneInChance, ModIsLoad, HasMission, CompareTime, QueryTile, SurvivalNeed, HasItemsSum, HasWieldedWithSkill, HasWieldedWithAmmotype, IsOnTerrainWithFlag, QueryBool, AtOmLocation, HasTrait, HasAnyTrait, HasVisibleTrait, IsTraitPurifiable, HasMartialArt, UsingMartialArt, HasFlag, HasPartFlag, HasSpecies, Bodytype, ExpectsVars, CompareString, CompareStringMatchAll, Profession, HasStrength, HasDexterity, HasIntelligence, HasPerception, HasPartTemp, HasItem, HasItems, HasItemCategory, HasBionics, HasAnyEffect, HasProficiency, KnowRecipe, HasWornWithFlag, HasWieldedWithFlag, HasWieldedWithWeaponCategory, Query, IsOnTerrain, IsInField, CanSeeLocation, MapTerrainWithFlag, MapFurnitureWithFlag, MapTerrainId, MapFurnitureId, MapFieldId, MapInCity, LineOfSight} from './BoolObject'
/**BoolOperate导出 */
export type BoolOperateList = [
    BoolOperaNot            ,//非操作
    BoolOperaOr             ,//或操作
    BoolOperaAnd            ,//与操作
    BoolOperaCompStr        ,//比较字符串是否相等
    MathCompareExp          ,//math比较表达式
    GetCond                 ,//获取条件
    HasEffect               ,//有某个效果
    HasStrVar               ,//有某个文本变量
    HasTimeVar              ,//有某个时间变量
    HasWieldFlag            ,//手中的物品有某个flag
    HasWieldWeaponCategoty  ,//手中的物品有某个武器分类
    OneInChance             ,//1/n的概率返回true
    ModIsLoad               ,//某个mod是否加载
    HasMission              ,//有某个任务
    CompareTime             ,//获取 时间变量自创建以来经过的时间 并比较
    QueryTile               ,//选择地块的模式 列表 */
    SurvivalNeed            ,//生存需求
    HasItemsSum             ,//拥有物品汇总
    HasWieldedWithSkill     ,//检查talker是否持有使用特定技能的武器
    HasWieldedWithAmmotype  ,//检查talker是否持有使用特定弹药类型的武器
    IsOnTerrainWithFlag     ,//检查talker是否站在具有特定标志的地形上
    QueryBool               ,//为玩家创建一个弹出窗口，可以回答"是"或"否"
    AtOmLocation            ,//检查talker是否站在特定的大地图瓦片上
    HasTrait                ,//检查talker是否有特定的特质/变异
    HasAnyTrait             ,//检查talker是否有任意一个特定的特质/变异
    HasVisibleTrait         ,//检查talker是否有可见的特质/变异
    IsTraitPurifiable       ,//检查talker的特质是否可净化
    HasMartialArt           ,//检查talker是否拥有特定武术
    UsingMartialArt         ,//检查talker是否正在使用特定武术
    HasFlag                 ,//检查talker是否有特定标志
    HasPartFlag             ,//检查talker（作为载具）是否有带有特定标志的部件
    HasSpecies              ,//检查talker是否属于特定物种
    Bodytype                ,//检查talker的身体类型
    ExpectsVars             ,//检查每个提供的变量是否存在
    CompareString           ,//比较所有字符串，如果至少有两个匹配则返回true
    CompareStringMatchAll   ,//比较所有字符串，如果全部匹配则返回true
    Profession              ,//检查玩家角色是否有给定的职业ID或其"爱好"子类型
    HasStrength             ,//检查talker的力量是否至少达到指定值
    HasDexterity            ,//检查talker的敏捷是否至少达到指定值
    HasIntelligence         ,//检查talker的智力是否至少达到指定值
    HasPerception           ,//检查talker的感知是否至少达到指定值
    HasPartTemp             ,//检查talker的身体部位温度是否高于指定值
    HasItem                 ,//检查talker是否有特定物品
    HasItems                ,//检查talker是否有特定数量的物品
    HasItemCategory         ,//检查talker是否有特定类别的物品
    HasBionics              ,//检查talker是否有特定仿生装置
    HasAnyEffect            ,//检查talker是否有任意一个特定效果
    HasProficiency          ,//检查talker是否掌握了特定熟练度
    KnowRecipe              ,//检查角色是否知道特定配方
    HasWornWithFlag         ,//检查talker是否穿戴着带有特定标志的物品
    HasWieldedWithFlag      ,//检查talker是否持有带有特定标志的武器
    HasWieldedWithWeaponCategory,//检查talker是否持有带有特定武器类别的物品
    Query                   ,//创建一个可以回答"是"或"否"的弹出窗口
    IsOnTerrain             ,//检查talker是否站在特定地形上
    IsInField               ,//检查talker是否站在特定场地上
    CanSeeLocation          ,//检查talker是否可以看到位置
    MapTerrainWithFlag      ,//检查地形是否具有特定标志
    MapFurnitureWithFlag    ,//检查家具是否具有特定标志
    MapTerrainId            ,//检查地形是否具有特定ID
    MapFurnitureId          ,//检查家具是否具有特定ID
    MapFieldId              ,//检查场地是否具有特定ID
    MapInCity               ,//检查位置是否在城市边界内（在z-1或更高）
    LineOfSight             ,//检查两点是否相互可见
];
//#endregion