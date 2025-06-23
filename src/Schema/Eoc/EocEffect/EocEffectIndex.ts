import { AnyItemFlag, Item, ItemID } from "Schema/Item";
import { MaterialID } from "Schema/Material";
import { EocID, InlineEoc } from "../Eoc";
import { IDObj } from "../VariableObject";
import { ItemCategoryID } from "Schema/ItemCategory";

/**Eoc效果 */
export type EocEffect = EocEffectList[number];


/**作为参数的Eoc  
 * 单个eocid或内联eoc 或是他们组成的数组  
 */
export type ParamsEoc = (IDObj<EocID>|InlineEoc)|(IDObj<EocID>|InlineEoc)[];

/**背包筛选数据 */
export type ItemSearchData = {
    /**特定物品的id */
    id?: IDObj<ItemID>;
    /**物品的类别 (区分大小写, 应始终使用小写) */
    category?: (ItemCategoryID);
    /**物品具有的标志 */
    flags?: AnyItemFlag[];
    /**物品的材料 */
    material?: (MaterialID);
    /**如果为true, 只返回穿着的物品 */
    worn_only?: boolean;
    /** 如果为true, 只返回手持的物品 */
    wielded_only?: boolean;
};


//#region Eoc效果表导出
import {SpawnItem, RemoveItem} from './EocEffect'
import {MathAssignExp, SoundEffect, OpenDialogue, TakeControl, TakeControlMenu, GiveAchievement, AssignMission, RemoveActiveMission, FinishMission, OfferMission, RunEocs, RunNpcEocs, RunMonsterEocs, RunInvEocs, MapRunEocs, MapRunItemEocs, RevealMap, RevealRoute, ClosestCity, WeightedListEocs, RunEocSelector, RollRemainder, IfCondition, SwitchStatement, ForEach} from './GenericEffect'
import {ConsumeItem, FollowOnly, Leave, DropWeapon, DealDamage, GetMutate, GetMutateCategory, MutateTowards, SetTraitPurifiability, AddEffect, AddBionic, LoseBionic, AddTrait, LoseEffect, LoseTrait, ActivateTrait, DeactivateTrait, LearnMartialArt, ForgetMartialArt, AddVar, LoseVar, CopyVar, SetStringVar, SetCondition, LearnRecipe, ForgetRecipe, AssignActivity, CancelActivity, LocationVariable, LocationVariableAdjust, BarberHair, BarberBeard, NpcFirstTopic, Teleport, AddWet, MakeSound, ModHealthy, AddMorale, LoseMorale, ConsumeItemSum, SetFacRelation, AddFactionTrust, Die, PreventDeath, Attack, CreateExplosion, Knockback, CastSpell, LevelSpellClass, QueryOmt, QueryTile, ChooseAdjacentHighlight, MirrorCoordinates, Message} from './CharacterEffect'
import {SetFlag, UnsetFlag, Activate, SetFault, SetRandomFaultOfType, MapSpawnItem, MapgenUpdate, RevertLocation, AlterTimedEvents, Lightning, NextWeather, CustomLightLevel, TransformRadius, TransformLine, PlaceOverride, SpawnMonster, SpawnNpc, SetField, SetEmit, TurnCost} from './ItemEffect'
/**Eoc效果表导出 */
export type EocEffectList = [
    SpawnItem               ,//生成物品
    RemoveItem              ,//删除物品
    MathAssignExp           ,//math赋值表达式
    SoundEffect             ,//播放声音效果
    OpenDialogue            ,//打开对话
    TakeControl             ,//接管NPC控制权
    TakeControlMenu         ,//打开跟随者控制菜单
    GiveAchievement         ,//授予成就
    AssignMission           ,//分配任务
    RemoveActiveMission     ,//移除活动任务
    FinishMission           ,//完成任务
    OfferMission            ,//提供任务
    RunEocs                 ,//运行EOCs
    RunNpcEocs              ,//NPC运行EOCs
    RunMonsterEocs          ,//怪物运行EOCs
    RunInvEocs              ,//在物品上运行EOCs
    MapRunEocs              ,//在地图上运行EOCs
    MapRunItemEocs          ,//在地图物品上运行EOCs
    RevealMap               ,//揭示地图
    RevealRoute             ,//揭示路线
    ClosestCity             ,//最近城市
    WeightedListEocs        ,//加权列表EOCs
    RunEocSelector          ,//运行EOC选择器
    RollRemainder           ,//随机获取剩余项
    IfCondition             ,//条件判断
    SwitchStatement         ,//开关语句
    ForEach                 ,//遍历类型
    ConsumeItem             ,//使用物品
    FollowOnly              ,//让npc跟随玩家
    Leave                   ,//让npc停止跟随玩家并离开追随者阵营
    DropWeapon              ,//丢下手持物品 仅限npc
    DealDamage              ,//造成伤害
    GetMutate               ,//突变
    GetMutateCategory       ,//分类突变
    MutateTowards           ,//定向突变
    SetTraitPurifiability   ,//设置特征可净化性
    AddEffect               ,//添加效果
    AddBionic               ,//添加仿生装置
    LoseBionic              ,//移除仿生装置
    AddTrait                ,//添加特性
    LoseEffect              ,//移除效果
    LoseTrait               ,//移除特性
    ActivateTrait           ,//激活特性
    DeactivateTrait         ,//停用特性
    LearnMartialArt         ,//学习武术
    ForgetMartialArt        ,//忘记武术
    AddVar                  ,//添加变量
    LoseVar                 ,//移除变量
    CopyVar                 ,//复制变量
    SetStringVar            ,//设置字符串变量
    SetCondition            ,//设置条件
    LearnRecipe             ,//学习配方
    ForgetRecipe            ,//忘记配方
    AssignActivity          ,//分配活动
    CancelActivity          ,//取消活动
    LocationVariable        ,//位置变量
    LocationVariableAdjust  ,//调整位置变量
    BarberHair              ,//理发-发型
    BarberBeard             ,//理发-胡须
    NpcFirstTopic           ,//NPC首个话题
    Teleport                ,//传送
    AddWet                  ,//添加湿度
    MakeSound               ,//发出文本声音
    ModHealthy              ,//修改健康
    AddMorale               ,//添加士气
    LoseMorale              ,//移除士气
    ConsumeItemSum          ,//消耗物品总和
    SetFacRelation          ,//设置派系关系
    AddFactionTrust         ,//添加派系信任
    Die                     ,//死亡
    PreventDeath            ,//防止死亡
    Attack                  ,//攻击
    CreateExplosion         ,//爆炸
    Knockback               ,//击退
    CastSpell               ,//施法
    LevelSpellClass         ,//提升法术类别等级
    QueryOmt                ,//查询地图图块
    QueryTile               ,//选择地块的模式 列表 */
    ChooseAdjacentHighlight ,//选择相邻高亮图块
    MirrorCoordinates       ,//镜像坐标
    Message                 ,//消息
    SetFlag                 ,//设置标志
    UnsetFlag               ,//移除标志
    Activate                ,//激活
    SetFault                ,//设置故障
    SetRandomFaultOfType    ,//设置随机故障
    MapSpawnItem            ,//生成物品
    MapgenUpdate            ,//地图更新
    RevertLocation          ,//恢复位置
    AlterTimedEvents        ,//改变定时事件
    Lightning               ,//闪电
    NextWeather             ,//下一个天气
    CustomLightLevel        ,//自定义光照级别
    TransformRadius         ,//转换半径
    TransformLine           ,//转换线
    PlaceOverride           ,//位置覆盖
    SpawnMonster            ,//生成怪物
    SpawnNpc                ,//生成NPC
    SetField                ,//生成场地
    SetEmit                 ,//发出场地
    TurnCost                ,//回合消耗
];
//#endregion
