import { MissionDefinitionID } from "Schema/MissionDefinition";
import { BoolObj, IDObj, LocObj, NumObj, StrObj } from "../VariableObject";
import { SoundEffectID, SoundEffectVariantID } from "Schema/SoundEffect";
import { DescText, Time } from "Schema/GenericDefine";
import { EocID, InlineEoc, TalkerVar } from "../Eoc";
import { EocEffect, ItemSearchData, ParamsEoc } from "./EocEffectIndex";
import { ItemGroupID } from "Schema/ItemGroup";



/**math赋值表达式 */
export type MathAssignExp = {
    math:[string,"="|"+="|"-="|"*="|"/=",string]
};

/**运行Eoc */
export type RunEoc = {
    /**运行Eoc */
    run_eocs: (ParamsEoc)
    /**循环条件, 为真时循环 */
    condition?: (BoolObj);
    /**最大循环限制, 超过时停止并报错
     * 不设置条件时为指定循环次数 默认100*/
    iteration?: (NumObj);
    /**延迟 */
    time_in_future: (Time);
    /**将loc所在位置的单位作为beta talker */
    beta_loc? : (LocObj);
    /**将loc所在位置的单位作为alpha talker */
    alpha_loc? : (LocObj);
    alpha_talker? : (NumObj);
    beta_talker? : (NumObj);
    /**提供的上下文参数表 变量名:值 */
    variables? : Record<string,string|boolean|number>;

};

/**Eoc选项 */
export type EocSelector = {
    /**根据选择运行提供的EocID */
    run_eoc_selector: IDObj<EocID>[];
    /**提供的上下文参数表 变量名:值 */
    variables?: Record<string,string|boolean|number>;
    /**每个选项的名称 */
    names?: (StrObj)[];
    /**每个选项的介绍 */
    descriptions?: (DescText)[];
    /**每个选项的键 */
    keys?:string[];
    /**整体选项的标题 */
    title?: (DescText);
    /**为true时对应Eoc的条件如果不满足 则直接隐藏  
     * 默认false 显示无法选择
     */
    hide_failing?: boolean;
}

/**播放声音 */
export type SoundEffect = {
    /**音效ID */
    id          : IDObj<SoundEffectID>;
    /**变体ID */
    sound_effect?: IDObj<SoundEffectVariantID>;
    /**如果为true则如果玩家在 地下/地下室 时难以听到 */
    outdoor_event?: boolean;
    /**音量 */
    volume: (NumObj);
}

/**给玩家添加任务 */
export type AssingMission = {
    /**给玩家添加目标ID任务 */
    assign_mission: IDObj<MissionDefinitionID>;
}

/**将从玩家的活动任务列表中删除任务而不失败.  */
export type RemoveActionMission = {
    /**给玩家删除目标ID任务 */
    remove_active_mission: IDObj<MissionDefinitionID>;
}


/**使玩家完成任务 */
export type FinishMission = {
    /**使玩家完成目标ID任务 */
    finish_mission: IDObj<MissionDefinitionID>;
    /**不为true则视为失败 */
    success?: boolean;
    /**完成相当于step值的任务步骤 */
    step?: number;
}


/**条件控制 */
export type IfElse = {
    /**对话条件 (强制性)  */
    if: BoolObj;
    /**满足条件时执行的效果 (强制性)  */
    then: EocEffect[];
    /**不满足条件时执行的效果 (可选)  */
    else?: EocEffect[];
}

/**在背包物品上运行EOC */
export type RunInvEocs = TalkerVar<{
    /**物品的选择方式;  
     * 可选值包括:  
     * all          - 所有符合条件的物品都会被选中;  
     * random       - 从所有符合条件的物品中随机选择一个;  
     * manual       - 打开一个菜单, 列出所有可以选择的物品, 你可以从中选择一个;  
     * manual_mult  - 与manual相同, 但可以选择多个物品  
     */
    run_inv_eocs: "all"|"random"|"manual"|"manual_mult";
    /**设置目标物品的条件;  
     * 缺少search_data意味着可以选择任何物品;  
     * 条件可以是:  
     * id           - 特定物品的id;  
     * category     - 物品的类别 (区分大小写, 应始终使用小写);  
     * flags        - 物品具有的标志  
     * material     - 物品的材料;  
     * worn_only    - 如果为true, 只返回穿着的物品;  
     * wielded_only - 如果为true, 只返回手持的物品  
     */
    search_data?: ItemSearchData[];
    /**如果使用了manual或manual_mult, 将显示的菜单的名称 */
    title?: (StrObj);
    /**如果物品被成功选中, 所有true_eocs都会运行, 否则所有false_eocs都会运行;  
     * 选中的物品作为npc返回;  
     * 例如, n_hp()返回物品的hp  
     */
    true_eocs?: (ParamsEoc);
    /**如果未选择物品, 将运行的eoc */
    false_eocs?: (ParamsEoc);
},"run_inv_eocs">;

/**在地图上遍历某loc内所有物品  
 * 以物品为u运行eoc  
 */
export type MapRunItemEocs = TalkerVar<{
    /**物品的选择方式;  
     * 可选值包括:  
     * all          - 所有符合条件的物品都会被选中;  
     * random       - 从所有符合条件的物品中随机选择一个;  
     * manual       - 打开一个菜单, 列出所有可以选择的物品, 你可以从中选择一个;  
     * manual_mult  - 与manual相同, 但可以选择多个物品  
     */
    map_run_item_eocs: "all"|"random"|"manual"|"manual_mult";
    /**扫描物品的位置; 如果没有指定位置, 则只扫描talker所在的格子 */
    loc?:(LocObj);
    /**围绕位置/talker的搜索半径 */
    min_radius?:(NumObj);
    /**围绕位置/talker的搜索半径 */
    max_radius?:(NumObj);
    /**如果使用了manual或manual_mult, 将显示的菜单的名称 */
    title?: (StrObj);
    /**设置目标物品的条件;  
     * 缺少search_data意味着可以选择任何物品;  
     * 条件可以是:  
     * id           - 特定物品的id;  
     * category     - 物品的类别 (区分大小写, 应始终使用小写);  
     * flags        - 物品具有的标志  
     * material     - 物品的材料;  
     * worn_only    - 如果为true, 只返回穿着的物品;  
     * wielded_only - 如果为true, 只返回手持的物品  
     */
    search_data:ItemSearchData[];
    /**如果物品被成功选中, 所有true_eocs都会运行, 否则所有false_eocs都会运行;  
     * 选中的物品作为npc返回;  
     * 例如, n_hp()返回物品的hp  
     */
    true_eocs?: (ParamsEoc);
    /**如果未选择物品, 将运行的eoc */
    false_eocs?: (ParamsEoc);
},'map_run_item_eocs'>

/**根据权重运行EOC */
export type WeightedListEocs = {
    /**根据权重运行EOC  
     * [eoc,权重][]
     */
    weighted_list_eocs: ((InlineEoc|EocID)|[(InlineEoc|EocID),NumObj])[];
}


/**switch控制 */
export type SwitchCase = {
    /**switch控制 */
    switch:NumObj;
    /**cases合集 */
    cases:{
        /**case的值 */
        case:number;
        /**case值与switch传入NumObj相等时运行的效果 */
        effect:EocEffect|EocEffect[];
    }[];
};

/**遍历类型  
 * 影响 target 的类型  
 * == ids 时 target 可为 "bodypart"|"flag"|"trait"|"vitamin"  
 * == item_group 时 item_group 可为 ItemGroupID  
 * == monstergroup 时 item_group 可为 MonsterGroupID  
 * == array 时 item_group 可为 string[]  
*/
type ForeachType = "ids"|"item_group"|"monstergroup"|"array";

/**遍历目标  
 * 根据遍历类型变化  
 */
type ForeachTarget = "bodypart"|"flag"|"trait"|"vitamin"|
    ItemGroupID|string[];

/**遍历 */
export type Foreach = {
    /**遍历类型  */
    foreach:ForeachType;
    /**遍历的名称字符串存储变量 */
    var:(StrObj);
    /**eoceffect */
    effect:EocEffect[];
    /**遍历目标 */
    target:ForeachTarget;
}


/**将 talker 的 character_id 传入对象变量 */
export type SetTalker = TalkerVar<{
    set_talker:(NumObj);
},"set_talker">