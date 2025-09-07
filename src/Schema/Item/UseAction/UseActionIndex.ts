import { ItemActionID } from 'Schema/ItemAction';



/**可用的UseAction */
export type UseAction = UseActionList[number]|HardcodeUseAction|ItemActionID;
//#region UseAction导出
import {UseActionTransform, UseActionExplosion, UseActionChangeScent, UseActionConsumeDrug, UseActionPlaceMonster, UseActionPlaceNpc, UseActionLinkUp, UseActionDeployFurn, UseActionDeployAppliance, UseActionDelayedTransform, UseActionFirestarter, UseActionUnpack, UseActionSalvage, UseActionInscribe, UseActionFireweaponOff, UseActionFireweaponOn, UseActionMusicalInstrument, UseActionHolster, UseActionBandolier, UseActionRevealMap, UseActionHeal, UseActionPlaceTrap, UseActionSewAdvanced, UseActionEffectOnConditions, UseActionMessage, UseActionSound, UseActionManualnoise, UseActionLearnSpell, UseActionCastSpell} from './UseAction'
/**UseAction导出 */
export type UseActionList = [
    UseActionTransform      ,//转换方法类型, 此处为将物品转换为另一种物品
    UseActionExplosion      ,//物品在耗尽充能时爆炸
    UseActionChangeScent    ,//改变使用者的气味类型
    UseActionConsumeDrug    ,//玩家可以食用的药物
    UseActionPlaceMonster   ,//在地图上放置炮塔/人形机等怪物
    UseActionPlaceNpc       ,//在地图上放置特定类别的NPC
    UseActionLinkUp         ,//将物品连接到车辆或电器, 例如将可充电设备插入电源
    UseActionDeployFurn     ,//将物品部署为家具
    UseActionDeployAppliance,//将物品部署为电器
    UseActionDelayedTransform,//类似transform, 但只有当物品达到特定年龄时才会转变
    UseActionFirestarter    ,//生火, 如用打火机
    UseActionUnpack         ,//解包此物品
    UseActionSalvage        ,//尝试从物品中回收基础材料, 例如剪碎布料获取破布或皮革
    UseActionInscribe       ,//在物品或地面上刻写信息
    UseActionFireweaponOff  ,//激活基于火焰的武器
    UseActionFireweaponOn   ,//用于激活 (燃烧) 基于火焰的武器的功能
    UseActionMusicalInstrument,//角色在走动时演奏乐器 (此物品)
    UseActionHolster        ,//收起或拔出武器
    UseActionBandolier      ,//存储弹药并稍后用于重新装填
    UseActionRevealMap      ,//在大地图上显示特定地形
    UseActionHeal           ,//治疗伤害, 可能包括一些状态
    UseActionPlaceTrap      ,//放置陷阱
    UseActionSewAdvanced    ,//修改服装
    UseActionEffectOnConditions,//激活effect_on_conditions
    UseActionMessage        ,//显示消息文本
    UseActionSound          ,//发出声音
    UseActionManualnoise    ,//发出声音, 包括弹药检查并可能从玩家处消耗移动点数
    UseActionLearnSpell     ,//学习法术
    UseActionCastSpell      ,//施放以下法术, 参见MAGIC.md获取更多详情
];
//#endregion



/**硬编码的无参UseAction效果 列表 */
export const HardcodeUseActionList = [
    "ALCOHOL_STRONG"        , // 大幅度增加醉酒程度. 添加疾病 drunk. 
    "ALCOHOL_WEAK"          , // 稍微增加醉酒程度. 添加疾病 drunk. 
    "ALCOHOL"               , // 增加醉酒程度. 添加疾病 drunk. 
    "ANTIBIOTIC"            , // 帮助抵抗感染. 移除疾病 infected 并添加疾病 recover. 
    "BANDAGE"               , // 停止出血. 
    "BIRDFOOD"              , // 使小鸟变得友好. 
    "BLECH"                 , // 导致呕吐, 添加疾病 poison, 增加疼痛并伤害躯干. 
    "BLECH_BECAUSE_UNCLEAN" , // 导致警告. 
    "CATFOOD"               , // 使猫变得友好. 
    "CATTLEFODDER"          , // 使大型草食动物变得友好. 
    "CHEW"                  , // 显示消息 "You chew your %s.", 但其他什么也不做. 
    "CIG"                   , // 缓解尼古丁渴望. 添加疾病 cig. 
    "COKE"                  , // 减少饥饿. 添加疾病 high. 
    "CRACK"                 , // 减少饥饿. 添加疾病 high. 
    "DISINFECTANT"          , // 防止感染. 
    "DOGFOOD"               , // 使狗变得友好. 
    "FIRSTAID"              , // 治疗. 
    "FLUMED"                , // 添加疾病 took_flumed. 
    "FLUSLEEP"              , // 添加疾病 took_flumed 并增加疲劳. 
    "FUNGICIDE"             , // 杀死真菌和孢子. 移除疾病 fungus 和 spores. 
    "HALLU"                 , // 添加疾病 hallu. 
    "HONEYCOMB"             , // 产生蜡. 
    "INHALER"               , // 移除疾病 asthma. 
    "IODINE"                , // 添加疾病 iodine. 
    "MARLOSS"               , // "当你吃下这颗浆果时, 你有一种近乎宗教的体验, 感觉与你的周围环境融为一体..."
    "METH"                  , // 添加疾病 meth. 
    "NONE"                  , // "你不能对你的 [x] 做任何有趣的事情. "
    "PKILL"                 , // 减少疼痛. 添加疾病 pkill[n], 其中 [n] 是在此食物上使用的标志 PKILL_[n] 的级别. 
    "PLANTBLECH"            , // 如果玩家没有植物突变, 则激活 BLECH iuse 动作. 
    "POISON"                , // 添加疾病 poison 和 foodpoison. 
    "PROZAC"                , // 如果当前没有出现, 添加疾病 took_prozac, 否则起到轻微的兴奋剂作用. 很少有 took_prozac_bad 的不良反应. 
    "PURIFIER"              , // 移除随机数量的负面突变. 
    "SEWAGE"                , // 导致呕吐. 
    "SLEEP"                 , // 大幅度增加疲劳. 
    "THORAZINE"             , // 移除疾病 hallu, visuals, high. 另外, 如果疾病 dermatik 也不存在, 则移除疾病 formication. 有增加疲劳的负面反应的机会. 
    "VITAMINS"              , // 增加健康度 (不要与 HP 混淆) . 
    "WEED"                  , // 让你与 Cheech & Chong 一起滚动. 添加疾病 weed_high. 
    "XANAX"                 , // 缓解焦虑. 添加疾病 took_xanax. 
] as const;
/**硬编码的无参UseAction效果 */
export type HardcodeUseAction = typeof HardcodeUseActionList[number];