import { AnyItemFlag, ItemID } from "Schema/Item";
import { MaterialID } from "Schema/Material";
import { EocID, InlineEoc } from "../Eoc";
import { IDExpr } from "../Expression";
import { ItemCategoryID } from "Schema/ItemCategory";

/**Eoc效果 */
export type EocEffect = EocEffectList[number];


/**作为参数的Eoc  
 * 单个eocid或内联eoc 或是他们组成的数组  
 */
export type ParamsEoc = (IDExpr<EocID>|InlineEoc)|(IDExpr<EocID>|InlineEoc)[];

/**作为参数的Eoc数组  
 * eocid或内联eoc 组成的数组  
 */
export type ParamsEocList = (IDExpr<EocID>|InlineEoc)[];

/**背包筛选数据 */
export type ItemSearchData = {
    /**特定物品的id */
    id?: IDExpr<ItemID>;
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
import {MissionSuccess, MissionFailure, ClearMission, MissionReward, LesserGiveAid, LesserGiveAidAll, GiveAid, GiveAidAll, BuyHaircut, BuyShave, MoraleChat, PlayerWeaponAway, PlayerWeaponDrop, StartTrade, GiveEquipment, PickStyle, NpcGetsItem, NpcGetsItemToUse, SpawnItem, BuyItem, SellItem, BulkTradeAccept, BulkDonate, SpendCash, AddDebt, ConsumeItem, RemoveItemWith, BuyMonster, AssignGuard, StopGuard, StartCamp, DistributeFoodAuto, WakeUp, RevealStats, EndConversation, InsultCombat, Hostile, Flee, Follow, Leave, FollowOnly, StopFollowing, NpcThankful, DropWeapon, StrangerNeutral, StartMugging, LeadToSafety, StartTraining, StartTrainingNpc, StartTrainingSeminar, CompanionMission, BasecampMission, BionicInstall, BionicRemove, ClassChange, FactionChange, FactionRep, ToggleNpcRule, SetNpcRule, ClearNpcRule, SetNpcEngagementRule, SetNpcAimRule, SetGoal, SetGuardPos} from './NpcEffect'
import {MathAssignExp, SoundEffect, OpenDialogue, TakeControl, TakeControlMenu, GiveAchievement, AssignMission, RemoveActiveMission, FinishMission, OfferMission, RunEocs, RunNpcEocs, RunMonsterEocs, RunInvEocs, MapRunEocs, MapRunItemEocs, RevealMap, RevealRoute, ClosestCity, WeightedListEocs, RunEocSelector, RollRemainder, IfCondition, SwitchStatement, ForEach, SetTalker} from './GenericEffect'
import {DealDamage, GetMutate, GetMutateCategory, MutateTowards, SetTraitPurifiability, AddEffect, AddBionic, LoseBionic, AddTrait, LoseEffect, LoseTrait, ActivateTrait, DeactivateTrait, LearnMartialArt, ForgetMartialArt, AddVar, LoseVar, CopyVar, SetStringVar, SetCondition, LearnRecipe, ForgetRecipe, AssignActivity, CancelActivity, LocationVariable, LocationVariableAdjust, BarberHair, BarberBeard, NpcFirstTopic, Teleport, AddWet, MakeSound, ModHealthy, AddMorale, LoseMorale, ConsumeItemSum, SetFacRelation, AddFactionTrust, Die, PreventDeath, Attack, CreateExplosion, Knockback, CastSpell, LevelSpellClass, QueryOmt, QueryTile, ChooseAdjacentHighlight, MirrorCoordinates, Message} from './CharacterEffect'
import {SetFlag, UnsetFlag, Activate, SetFault, SetRandomFaultOfType, MapSpawnItem, MapgenUpdate, RevertLocation, AlterTimedEvents, Lightning, NextWeather, CustomLightLevel, TransformRadius, TransformLine, PlaceOverride, SpawnMonster, SpawnNpc, SetField, SetEmit, TurnCost, TransformItem} from './ItemEffect'
/**Eoc效果表导出 */
export type EocEffectList = [
    MissionSuccess          ,//将当前任务判定为成功完成
    MissionFailure          ,//将当前任务判定为失败
    ClearMission            ,//清除角色已分配的任务
    MissionReward           ,//发放任务奖励给玩家
    LesserGiveAid           ,//移除角色身体上的流血状态，并为每个身体部位恢复 5–15 点生命值
    LesserGiveAidAll        ,//对范围内的每个 NPC 盟友执行 lesser_give_aid 效果
    GiveAid                 ,//移除角色身体上的咬伤、感染和流血状态，并为每个身体部位恢复 10–25 点生命值
    GiveAidAll              ,//对范围内的每个 NPC 盟友执行 give_aid 效果
    BuyHaircut              ,//为角色提供一次理发，获得持续 12 小时的士气提升
    BuyShave                ,//为角色提供一次剃须，获得持续 6 小时的士气提升
    MoraleChat              ,//与角色进行愉快交谈，获得持续 6 小时的士气提升
    PlayerWeaponAway        ,//让角色收起（解除持握）当前武器
    PlayerWeaponDrop        ,//让角色丢弃当前武器
    StartTrade              ,//打开交易界面，允许与 NPC 进行交易
    GiveEquipment           ,//允许你的角色从 NPC 的物品栏中选择物品并转移到你的物品栏中
    PickStyle               ,//允许玩家手动为 NPC 选择风格。仅用于模组，不适用于原版 DDA
    NpcGetsItem             ,//将角色物品转移给 NPC（若 NPC 有空间和承重能力）
    NpcGetsItemToUse        ,//将角色物品转移给 NPC 并尝试装备（若 NPC 接受）
    SpawnItem               ,//你的角色获得指定物品或数量的副本
    BuyItem                 ,//NPC 将出售指定物品或数量的副本给你的角色，物品可放入容器中，并从 op_of_u.owed 中扣除 cost。
    SellItem                ,//你的角色将物品或数量副本交给 NPC，并将 cost 加入 NPC 的 op_of_u.owed（如果指定）。
    BulkTradeAccept         ,//仅在 repeat_response 之后有效。
    BulkDonate              ,//仅在 repeat_response 之后有效。
    SpendCash               ,//从你的角色现金中扣除指定金额。
    AddDebt                 ,//根据 mod_list 增加 NPC 对玩家的债务。例如以下配置将根据 NPC 的利他值和对玩家的评价值增加债务：
    ConsumeItem             ,//你或 NPC 将从物品栏中删除指定物品、数量副本或充能次数。
    RemoveItemWith          ,//你或 NPC 将无条件删除物品栏中的所有指定物品实例。
    BuyMonster              ,//NPC 将给予你的角色指定数量的怪物作为宠物，并从 op_of_u.owed 中扣除 cost（如果指定）。
    AssignGuard             ,//将 NPC 设置为守卫。如果是盟友并处于营地中，则会被分配到该营地。
    StopGuard               ,//解除 NPC 的守卫职责（另见 assign_guard）。友好 NPC 将恢复跟随状态。
    StartCamp               ,//NPC 将与玩家一起建立一个阵营营地。
    DistributeFoodAuto      ,//NPC 会立即将其所在格子及相邻格子上的所有食物分配到本地营地的食物储藏室中
    WakeUp                  ,//唤醒正在睡觉但未被镇静的 NPC
    RevealStats             ,//根据玩家的评估技能，显示 NPC 的属性。
    EndConversation         ,//结束对话，并使 NPC 从此忽略你。
    InsultCombat            ,//结束对话并使 NPC 敌对，同时添加一条角色挑衅 NPC 的消息。
    Hostile                 ,//使 NPC 敌对并结束对话。
    Flee                    ,//使 NPC 从你的角色身边逃离。
    Follow                  ,//使 NPC 跟随你的角色，加入 “你的追随者” 阵营。
    Leave                   ,//使 NPC 离开 “你的追随者” 阵营并停止跟随你的角色。
    FollowOnly              ,//使 NPC 跟随你的角色，但不改变阵营。
    StopFollowing           ,//使 NPC 停止跟随你的角色，但不改变阵营。
    NpcThankful             ,//使 NPC 对你的角色产生积极好感。
    DropWeapon              ,//使 NPC 丢弃其武器 仅限npc
    StrangerNeutral         ,//将 NPC 的态度改为中立。
    StartMugging            ,//NPC 会接近你的角色并进行抢劫，如果你的角色反抗则会发动攻击。
    LeadToSafety            ,//NPC 会获得 LEAD 态度，并给予你的角色一个“前往安全地带”的任务。
    StartTraining           ,//NPC 会教授你的角色某项技能或武术。
    StartTrainingNpc        ,//NPC 会接受玩家教授的技能或武术训练。
    StartTrainingSeminar    ,//打开一个对话框，选择哪些角色将参与由该 NPC 主持的训练研讨会。
    CompanionMission        ,//NPC 会根据其角色向你提供一组盟友 NPC 的任务列表。
    BasecampMission         ,//NPC 会根据本地营地向你提供一组盟友 NPC 的任务列表。
    BionicInstall           ,//NPC 会从你的角色物品栏中安装一个生化植入物到你的角色身上，使用极高的技能，并根据手术难度收取费用。
    BionicRemove            ,//NPC 会从你的角色身上移除一个生化植入物，使用极高的技能，并根据手术难度收取费用。
    ClassChange             ,//将 NPC 的职业更改为新值。
    FactionChange           ,//将 NPC 的阵营归属更改为新值。
    FactionRep              ,//提升你在 NPC 当前阵营中的声望，若为负值则降低声望。
    ToggleNpcRule           ,//切换一个布尔型 NPC 追随者 AI 规则的值，例如 "use_silent" 或 "allow_bash"。
    SetNpcRule              ,//设置一个布尔型 NPC 追随者 AI 规则的值，例如 "use_silent" 或 "allow_bash"。
    ClearNpcRule            ,//清除一个布尔型 NPC 追随者 AI 规则的值，例如 "use_silent" 或 "allow_bash"。
    SetNpcEngagementRule    ,//将 NPC 追随者的交战距离规则设置为指定值。
    SetNpcAimRule           ,//将 NPC 追随者的瞄准速度规则设置为指定值。
    SetGoal                 ,//NPC 会前往 assign_mission_target_object 所指定的位置。
    SetGuardPos             ,//将 NPC 的守卫位置设置为 _set_guard_pos 的内容。
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
    SetTalker               ,//设置talker
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
    TransformItem           ,//转换物品
];
//#endregion
