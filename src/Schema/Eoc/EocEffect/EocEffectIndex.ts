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
import {MathAssignExp, RunEoc, RunEocUntil, QueueEoc, RunEocWith, EocSelector, SpawnNpc, SoundEffect, CastSpell, Teleport, LocalVar, Message, AddEffect, LoseEffect, AddStrVar, SetString, AddTimeVar, AddRandStrVar, SetHP, LoseTrait, AddTrait, SpawnItem, ConsumeItem, RemoveItem, AssingMission, RemoveActionMission, FinishMission, SetCond, IfElse, AssignActivity, RunInvEocs, MapRunItemEocs, WeightedListEocs, SetFlag, UnsetFlag, SwitchCase, MakeSound, Foreach, TurnCost, SetTalker} from './EocEffect'
/**Eoc效果表导出 */
export type EocEffectList = [
    MathAssignExp           ,//math赋值表达式
    RunEoc                  ,//运行Eoc
    RunEocUntil             ,//循环运行Eoc
    QueueEoc                ,//延迟队列eoc
    RunEocWith              ,//运行Eoc 并提供参数
    EocSelector             ,//Eoc选项
    SpawnNpc                ,//生成Npc
    SoundEffect             ,//播放声音
    CastSpell               ,//施法
    Teleport                ,//传送
    LocalVar                ,//搜索并获取坐标 存入location_variable
    Message                 ,//发送消息
    AddEffect               ,//添加效果
    LoseEffect              ,//失去效果
    AddStrVar               ,//添加文本变量
    SetString               ,//赋值文本变量
    AddTimeVar              ,//添加时间变量
    AddRandStrVar           ,//添加随机文本变量
    SetHP                   ,//设置生命
    LoseTrait               ,//失去变异
    AddTrait                ,//获得变异
    SpawnItem               ,//生成物品
    ConsumeItem             ,//使用物品
    RemoveItem              ,//删除物品
    AssingMission           ,//给玩家添加任务
    RemoveActionMission     ,//将从玩家的活动任务列表中删除任务而不失败. 
    FinishMission           ,//使玩家完成任务
    SetCond                 ,//将条件Obj保存为变量
    IfElse                  ,//条件控制
    AssignActivity          ,//开始活动
    RunInvEocs              ,//在背包物品上运行EOC
    MapRunItemEocs          ,//在地图上遍历某loc内所有物品
    WeightedListEocs        ,//根据权重运行EOC
    SetFlag                 ,//添加flag
    UnsetFlag               ,//移除flag
    SwitchCase              ,//switch控制
    MakeSound               ,//制造文本声音
    Foreach                 ,//遍历类型
    TurnCost                ,//使 alpha 消耗一定时间
    SetTalker               ,//将 talker 的 character_id 传入对象变量
];
//#endregion
