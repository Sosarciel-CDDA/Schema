//#region EocEffectList自动生成
//#endregion

import { AnyItem, AnyItemID, ItemCategotyID } from "Schema/Item";
import { MaterialID } from "Schema/Material";
import { EocID, InlineEoc } from "../Eoc";
import { IDObj } from "../VariableObject";

/**Eoc效果 */
export type EocEffect = EocEffectList[number];


/**参数Eoc */
export type ParamsEoc = (IDObj<EocID>|InlineEoc)|(IDObj<EocID>|InlineEoc)[];


import { AddEffect, AddRandStrVar, AddStrVar, AddTimeVar, AddTrait, AssignActivity, AssingMission, CastSpell, ConsumeItem, EocSelector, FinishMission, Foreach, IfElse, LocalVar, LoseEffect, LoseTrait, MakeSound, MapRunItemEocs, MathAssignExp, Message, QueueEoc, RemoveActionMission, RemoveItem, RunEoc, RunEocUntil, RunEocWith, RunInvEocs, SetCond, SetFlag, SetHP, SetString, SetTalker, SoundEffect, SpawnItem, SpawnNpc, SwitchCase, Teleport, TurnCost, UnsetFlag, WeightedListEocs } from "./EocEffect";
/**Eoc效果表 */
export type EocEffectList = [
    MathAssignExp             ,//
    RunEoc                    ,//运行Eoc
    QueueEoc                  ,//延迟运行Eoc
    EocSelector               ,//Eoc选项
    RunInvEocs                ,//
    MapRunItemEocs            ,//
    RunEocWith                ,//
    RunEocUntil               ,//
    WeightedListEocs          ,//
    LoseTrait                 ,//失去变异
    AddTrait                  ,//获得变异
    ConsumeItem               ,//使用/扣除 count 个物品
    RemoveItem                ,//删除物品
    SpawnItem                 ,//生成物品
    SpawnNpc                  ,//生成npc
    SoundEffect               ,//播放声音
    CastSpell                 ,//施法
    Teleport                  ,//传送
    LocalVar                  ,//获取坐标
    Message                   ,//发送消息
    AddEffect                 ,//添加效果
    LoseEffect                ,//添加效果
    SetHP                     ,//设置生命值
    AddStrVar                 ,//添加文本变量
    SetString                 ,//赋值文本变量
    AddTimeVar                ,//添加时间变量
    AddRandStrVar             ,//添加随机文本变量
    NoParamEffect             ,//无参效果
    AssingMission             ,//添加任务
    RemoveActionMission       ,//移除任务
    FinishMission             ,//完成任务
    SetCond                   ,//保存条件
    IfElse                    ,//条件控制
    SwitchCase                ,//switch控制
    AssignActivity            ,//开始活动
    SetFlag                   ,//添加flag
    UnsetFlag                 ,//移除flag
    Foreach                   ,//遍历
    TurnCost                  ,//消耗一定时间
    SetTalker                 ,//获取talker的character_id
    MakeSound                 ,//制造声音
];

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
