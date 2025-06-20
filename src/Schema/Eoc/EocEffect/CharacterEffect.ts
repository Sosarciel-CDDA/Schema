import { FakeSpell } from "Schema/Enchantment";
import { TalkerVar } from "../Eoc";
import { ParamsEoc, VarComment } from "./EocEffectIndex";
import { BoolObj, CondObj, IDObj, LocObj, NumObj, StrObj } from "../VariableObject";
import { BodyPartParam, DescText, MessageRatType, Time } from "Schema/GenericDefine";
import { AssignMissionTarget } from "Schema/MissionDefinition";
import { EffectID } from "Schema/Effect";
import { MutationID } from "Schema/Mutation";
import { AnyItemID } from "Schema/Item";
import { ActivityTypeID } from "Schema/ActivityType";
import { FlagID } from "Schema/Flag";




/**施法 */
export type CastSpell = TalkerVar<{
    /**施法 */
    cast_spell: FakeSpell;
    /**默认为 false; 如果为 true, 则允许您瞄准施放的法术,   
     * 否则将其施放于随机位置, 就像RANDOM_TARGET使用了法术标志一样  
     * RANDOM_TARGET法术需要此项目为true才能正常索敌  
     */
    targeted?: boolean;
    /**成功施法后运行的eoc */
    true_eocs?: (ParamsEoc);
    /**施法失败后运行的eoc */
    false_eocs?: (ParamsEoc);
    /**施法目标位置 */
    loc?: (LocObj);
},"cast_spell">;

/**传送 */
export type Teleport = TalkerVar<{
    teleport: (LocObj);
    /**成功传送产生的消息 */
    success_message?: (StrObj);
    /**传送失败产生的消息 */
    fail_message?: (StrObj);
    /**强制传送 尽可能传送到目标位置 传送不会失败 */
    force?: boolean;
},"teleport">;

/**搜索并获取坐标 存入location_variable*/
export type LocalVar = TalkerVar<{
    location_variable: (LocObj);
    /**在发起者周围 的最小半径 默认 0 */
    min_radius?: (NumObj);
    /**在发起者周围 的最大半径 默认 0 */
    max_radius?: (NumObj);
    /**如果为 true, 则仅选择室外值 默认为 false */
    outdoor_only?: boolean;
    /**如果使用, 搜索将不是从u_或npc_位置执行,   
     * 而是从 执行mission_target.   
     * 它使用allocate_mission_target语法  
     */
    target_params?: (AssignMissionTarget);
    /**将结果的x值增加 */
    x_adjust?: (NumObj);
    /**将结果的y值增加 */
    y_adjust?: (NumObj);
    /**将结果的z值增加 */
    z_adjust?: (NumObj);
    /**如果为 true, 则不将其累加到z级别,   
     * 而是用绝对值覆盖它:"z_adjust": 3将"z_override": true的值z转为3  
     * 默认为 false  
     */
    z_override?: boolean;
    /**搜索的目标地形 空字符串为任意 */
    terrain?: (StrObj);
    /**搜索的目标家具 空字符串为任意 */
    furniture?: (StrObj);
    /**搜索的目标陷阱 空字符串为任意 */
    trap?: (StrObj);
    /**搜索的目标怪物 空字符串为任意 */
    monster?: (StrObj);
    /**搜索的目标区域 空字符串为任意 */
    zone?: (StrObj);
    /**搜索的目标NPC 空字符串为任意 */
    npc?: (StrObj);
    /**在搜索目标周围的最小半径 */
    target_min_radius?: (NumObj);
    /**在搜索目标周围的最大半径 */
    target_max_radius?: (NumObj);
},"location_variable">;

/**发送消息 */
export type Message = TalkerVar<{
    message: (DescText);
    /**默认中立; 消息如何在日志中显示 (通常是指颜色) ;   
     * 可以是良好 (绿色) , 中性 (白色) , 不良 (红色) ,   
     * 混合 (紫色) , 警告 (黄色) , 信息 (蓝色) , 调试 (仅在调试模式打开时出现) ,   
     * 爆头 (紫色) , 临界 (黄色) , 放牧 (蓝色)   
     */
    type?: (MessageRatType);
    /**如果为true 那么只会在用户没有聋时显示 */
    sound?: boolean;
    /**如果为true 且 sound为真 玩家在 地下/地下室 时难以听到 */
    outdoor_only?: boolean;
    /**如果为 true, 则效果会显示来自的随机片段u_message */
    snippet?: boolean;
    /**如果为 true, 并且snippet为 true, 它将连接讲话者和片段,   
     * 并且如果该讲话者使用的话, 将始终提供相同的片段; 要求片段设置 id  
     */
    same_snippet?: boolean;
    /**如果为真, 该消息将生成一个弹出窗口u_message */
    popup?: boolean;
    /**如果为 true, 并且popup为 true, 则弹出窗口将中断任何发送消息的活动 */
    popup_w_interrupt_query?: boolean;
    /**默认为“中性”; distraction_type, 用于中断, 用于分心管理器  
     * 完整列表存在 inactivity_type.cpp  
     */
    interrupt_type?: boolean;
},"message">;

/**添加效果 */
export type AddEffect = TalkerVar<{
    add_effect: IDObj<EffectID>;
    /**添加的时间
     * 数字为秒
     */
    duration: (Time)|NumObj;
    /**默认为 whole body 全身 */
    target_part?: BodyPartParam;
    /**效果强度 默认 0
     * 负数强度不产生效果
     */
    intensity?: (NumObj);
    /**是否强制添加忽略豁免 默认 false */
    force?: boolean;
},"add_effect">;


/**失去效果 */
export type LoseEffect = TalkerVar<{
    lose_effect: IDObj<EffectID>;
},"lose_effect">;


/**添加文本变量 */
export type AddStrVar = TalkerVar<{
    add_var: string;
    /**变量值 */
    value: string;
},"add_var">&VarComment;

/**添加时间变量 */
export type AddTimeVar = TalkerVar<{
    add_var: string;
    /**时间变量 将当前时间存于变量中 */
    time: true;
},"add_var">&VarComment;

/**添加随机文本变量 */
export type AddRandStrVar = TalkerVar<{
    add_var: string;
    /**可能的变量值 */
    possible_values: string[];
},"add_var">&VarComment;

/**赋值文本变量 */
export type SetString = {
    /**文本值 */
    set_string_var:StrObj|StrObj[];
    /**赋值目标 */
    target_var:StrObj;
    /**格式化文本标签 */
    parse_tags?:boolean;
}


/**失去变异 */
export type LoseTrait = TalkerVar<{
    lose_trait: IDObj<MutationID>
},"lose_trait">;

/**获得变异 */
export type AddTrait = TalkerVar<{
    add_trait: IDObj<MutationID>
},"add_trait">;

/**使用物品 */
export type ConsumeItem = TalkerVar<{
    consume_item: IDObj<AnyItemID>;
    /**数量 */
    count?: (NumObj);
    /**充能数量 */
    charges?: (NumObj);
    /**为true时将显示消息给予npc物品 */
    popup?: boolean;
},"consume_item">;

/**将条件Obj保存为变量 */
export type SetCond = {
    /**将条件Obj保存为变量 */
    set_condition: (CondObj);
    /**将要保存的条件 */
    condition: (BoolObj);
}

/**开始活动 */
export type AssignActivity = TalkerVar<{
    assign_activity: ActivityTypeID;
    /**活动的持续时间 */
    duration: (Time);
},"assign_activity">;


/**移除flag */
export type UnsetFlag = TalkerVar<{
    unset_flag:IDObj<FlagID>;
},"unset_flag">;

/**制造文本声音 */
export type MakeSound = TalkerVar<{
    make_sound: (StrObj);
    /**音量 */
    volume: (NumObj);
},'make_sound'>



