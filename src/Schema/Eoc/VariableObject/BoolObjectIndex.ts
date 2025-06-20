/**Eoc Bool 对象 */
export type BoolObj = BoolOperateList[number]|NoParamCond;

/**无参条件 */
export type NoParamCond = [
    "is_by_radio"    ,// 检查此对话是否通过无线电进行 (而非面对面交谈) 
][number];



//#region BoolOperate导出
import {MathCompareExp, GetCond, OneInChance, ModIsLoad, HasMission, SurvivalNeed, BoolAnd, BoolOr, BoolNot, HasAlpha, HasBeta, Male, Female, IsAvatar, IsNpc, IsCharacter, IsMonster, IsItem, IsFurniture, IsVehicle, AtOmLocation, HasTrait, HasAnyTrait, HasVisibleTrait, IsTraitPurifiable, HasMartialArt, UsingMartialArt, HasFlag, HasPartFlag, HasSpecies, HasBodytype, ExpectsVars, CompareString, CompareStringMatchAll, HasProfession, HasStrength, HasDexterity, HasIntelligence, HasPerception, HasPartTemp, HasItem, HasItems, HasItemCategory, HasItemsSum, HasBionics, HasEffect, HasAnyEffect, HasProficiency, CanStowWeapon, CanDropWeapon, HasWeapon, ControllingVehicle, Driving, KnowRecipe, HasWornWithFlag, HasWieldedWithFlag, HasWieldedWithWeaponCategory, HasWieldedWithSkill, HasWieldedWithAmmotype, CanSee, IsDeaf, IsAlive, IsWarm, Exists, IsOnTerrain, IsOnTerrainWithFlag, IsInField, Query, MapTerrainWithFlag, MapFurnitureWithFlag, MapTerrainId, MapFurnitureId, MapFieldId, MapInCity, PlayerSeeU, PlayerSeeNpc, CanSeeLocation, USeeNpc, NpcSeeYou, USeeNpcLoc, NpcSeeYouLoc, LineOfSight, IsDriven, IsRemoteControlled, CanFly, IsFlying, CanFloat, IsFloating, IsFalling, IsSkidding, IsSinking, IsOnRails, IsAvatarPassenger, HasAmmo} from './BoolObject'
/**BoolOperate导出 */
export type BoolOperateList = [
    MathCompareExp          ,//math比较表达式
    GetCond                 ,//获取条件
    OneInChance             ,//1/n的概率返回true
    ModIsLoad               ,//某个mod是否加载
    HasMission              ,//有某个任务
    SurvivalNeed            ,//生存需求
    BoolAnd                 ,//And条件
    BoolOr                  ,//Or条件
    BoolNot                 ,//Not条件
    HasAlpha                ,//有Alpha
    HasBeta                 ,//有Beta
    Male                    ,//男性
    Female                  ,//女性
    IsAvatar                ,//是Avatar
    IsNpc                   ,//是NPC
    IsCharacter             ,//是Character
    IsMonster               ,//是Monster
    IsItem                  ,//是Item
    IsFurniture             ,//是Furniture
    IsVehicle               ,//是Vehicle
    AtOmLocation            ,//在Overmap位置
    HasTrait                ,//有特性
    HasAnyTrait             ,//有任意特性
    HasVisibleTrait         ,//有可见特性
    IsTraitPurifiable       ,//特性可净化
    HasMartialArt           ,//有武术
    UsingMartialArt         ,//使用武术
    HasFlag                 ,//有标志
    HasPartFlag             ,//有部件标志
    HasSpecies              ,//有物种
    HasBodytype             ,//检查talker的身体类型
    ExpectsVars             ,//期望变量
    CompareString           ,//比较字符串
    CompareStringMatchAll   ,//比较字符串全匹配
    HasProfession           ,//职业
    HasStrength             ,//有力量
    HasDexterity            ,//有敏捷
    HasIntelligence         ,//有智力
    HasPerception           ,//有感知
    HasPartTemp             ,//有部位温度
    HasItem                 ,//有物品
    HasItems                ,//有多个物品
    HasItemCategory         ,//有物品类别
    HasItemsSum             ,//有物品总和
    HasBionics              ,//有仿生学
    HasEffect               ,//有效果
    HasAnyEffect            ,//有任意效果
    HasProficiency          ,//有熟练度
    CanStowWeapon           ,//可收起武器
    CanDropWeapon           ,//可丢弃武器
    HasWeapon               ,//有武器
    ControllingVehicle      ,//控制车辆
    Driving                 ,//驾驶
    KnowRecipe              ,//知道配方
    HasWornWithFlag         ,//穿戴有标志的物品
    HasWieldedWithFlag      ,//持有有标志的物品
    HasWieldedWithWeaponCategory,//持有特定武器类别的物品
    HasWieldedWithSkill     ,//持有特定技能的物品
    HasWieldedWithAmmotype  ,//持有特定弹药类型的物品
    CanSee                  ,//能看见
    IsDeaf                  ,//是聋的
    IsAlive                 ,//是活着的
    IsWarm                  ,//是温血的
    Exists                  ,//存在
    IsOnTerrain             ,//在地形上
    IsOnTerrainWithFlag     ,//在带有标志的地形上
    IsInField               ,//在场地中
    Query                   ,//查询
    MapTerrainWithFlag      ,//地图地形有标志
    MapFurnitureWithFlag    ,//地图家具有标志
    MapTerrainId            ,//地图地形ID
    MapFurnitureId          ,//地图家具ID
    MapFieldId              ,//地图场地ID
    MapInCity               ,//地图在城市中
    PlayerSeeU              ,//玩家看见U
    PlayerSeeNpc            ,//玩家看见NPC
    CanSeeLocation          ,//能看见位置
    USeeNpc                 ,//U看见NPC
    NpcSeeYou               ,//NPC看见你
    USeeNpcLoc              ,//U看见NPC位置
    NpcSeeYouLoc            ,//NPC看见你位置
    LineOfSight             ,//视线
    IsDriven                ,//是被驾驶的
    IsRemoteControlled      ,//是远程控制的
    CanFly                  ,//能飞行
    IsFlying                ,//正在飞行
    CanFloat                ,//能漂浮
    IsFloating              ,//正在漂浮
    IsFalling               ,//正在坠落
    IsSkidding              ,//正在打滑
    IsSinking               ,//正在下沉
    IsOnRails               ,//在轨道上
    IsAvatarPassenger       ,//Avatar是乘客
    HasAmmo                 ,//有弹药
];
//#endregion