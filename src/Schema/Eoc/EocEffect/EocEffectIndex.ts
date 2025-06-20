import { AnyItem, AnyItemID, ItemCategotyID } from "Schema/Item";
import { MaterialID } from "Schema/Material";
import { EocID, InlineEoc } from "../Eoc";
import { IDObj } from "../VariableObject";


/**Eoc效果 */
export type EocEffect = EocEffectList[number];


/**参数Eoc */
export type ParamsEoc = (IDObj<EocID>|InlineEoc)|(IDObj<EocID>|InlineEoc)[];


/**无参效果 */
export type NoParamEffect = [
    "follow_only"       ,//让npc跟随玩家
    "leave"             ,//让npc停止跟随玩家并离开追随者阵营
    "drop_weapon"       ,//丢下手持物品 仅限npc
    NoParamTalkerEffect ,
][number];

/**双Talker无参效果表 */
export const NoParamTalkerEffectList = [
    "prevent_death" ,//在死亡事件中阻止将要发生的死亡
    "die"           ,//让talker死亡或是删除物品
] as const;
/**双Talker无参效果 */
export type NoParamTalkerEffect = `${`u_`|`npc_`}${typeof NoParamTalkerEffectList[number]}`


/**变量操作的注释用字段  
 * { "u_add_var": "gunsmith_ammo_ammount", "type": "number", "context": "artisans", "value": "800" }  
 * 等价于  
 * {math: [ "u_number_artisans_gunsmith_ammo_amount", "=", "800" ]}  
 * type_context_variable_name  
 */
export type VarComment = {
    /**注释用字段 type */
    type?: string;
    /**注释用字段 context */
    context?: string;
}

/**背包筛选数据 */
export type ItemSearchData = {
    /**特定物品的id */
    id?: IDObj<AnyItemID>;
    /**物品的类别 (区分大小写, 应始终使用小写) */
    category?: (ItemCategotyID);
    /**物品具有的标志 */
    flags?: Exclude<AnyItem["flags"],undefined>[number][];
    /**物品的材料 */
    material?: (MaterialID);
    /**如果为true, 只返回穿着的物品 */
    worn_only?: boolean;
    /** 如果为true, 只返回手持的物品 */
    wielded_only?: boolean;
};




//#region Eoc效果表导出
import {SpawnNpc, SpawnItem, RemoveItem, SetFlag, TurnCost} from './EocEffect'
import {MathAssignExp, SoundEffect, OpenDialogue, TakeControl, TakeControlMenu, GiveAchievement, AssignMission, RemoveActiveMission, FinishMission, OfferMission, RunEocs, RunNpcEocs, RunMonsterEocs, RunInvEocs, MapRunEocs, MapRunItemEocs, RevealMap, RevealRoute, ClosestCity, WeightedListEocs, RunEocSelector, RollRemainder, IfCondition, SwitchStatement, ForEach} from './GenericEffect'
import {CastSpell, Teleport, LocalVar, Message, AddEffect, LoseEffect, AddStrVar, AddTimeVar, AddRandStrVar, SetString, LoseTrait, AddTrait, ConsumeItem, SetCond, AssignActivity, UnsetFlag, MakeSound} from './CharacterEffect'
/**Eoc效果表导出 */
export type EocEffectList = [
    SpawnNpc                ,//生成Npc
    SpawnItem               ,//生成物品
    RemoveItem              ,//删除物品
    SetFlag                 ,//添加flag
    TurnCost                ,//使 alpha 消耗一定时间
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
    CastSpell               ,//施法
    Teleport                ,//传送
    LocalVar                ,//搜索并获取坐标 存入location_variable
    Message                 ,//发送消息
    AddEffect               ,//添加效果
    LoseEffect              ,//失去效果
    AddStrVar               ,//添加文本变量
    AddTimeVar              ,//添加时间变量
    AddRandStrVar           ,//添加随机文本变量
    SetString               ,//赋值文本变量
    LoseTrait               ,//失去变异
    AddTrait                ,//获得变异
    ConsumeItem             ,//使用物品
    SetCond                 ,//将条件Obj保存为变量
    AssignActivity          ,//开始活动
    UnsetFlag               ,//移除flag
    MakeSound               ,//制造文本声音
];
//#endregion
