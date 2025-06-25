import { BodyPartParam, LimbType } from "./BodyPart";
import { FlagID } from "./Flag";
import { CddaID, Char, Color, DescText, Float, Int, Length, MessageRatType, Phase, Time } from "./GenericDefine";
import { ItemID } from "./Item";
import { MonsterID } from "./Monster";
import { MonsterGroupID } from "./MonsterGroup";



/**地块附着物ID */
export type FieldTypeID = CddaID<"FD">|DefineFieldTypeID;

/**地块附着物 */
export type FieldType = {
    type: "field_type";
    /**地块附着物ID */
    id: (FieldTypeID);
    /**对此地块附着物免疫的怪物类型列表 */
    immune_mtypes?: (MonsterID);
    /**不再使用
     * @default -1
     */
    legacy_enum_id?: Int;
    /**将地形转变为碎石，当碎石还是地块附着物时使用，现在不再使用 */
    legacy_make_rubble?: boolean;
    /**绘制优先级，优先级高的地块附着物绘制在上层 */
    priority?: Int;
    /**强度等级定义，下面的地块附着物都绑定到特定强度，除非在低级中定义 */
    intensity_levels?: {
        /**此强度等级的名称 */
        name: (DescText);
        /**此强度等级的符号 */
        sym: (Char);
        /**此强度等级的颜色 */
        color: (Color);
        /**是否阻挡视线
         * @default true
         */
        transparent?: boolean;
        /**此强度等级是否被视为危险（用于怪物回避和玩家警告） */
        dangerous?: boolean;
        /**移动通过此强度等级的额外移动消耗 */
        move_cost?: Int;
        /**此强度等级将添加的最小额外辐射量 */
        extra_radiation_min?: Int;
        /**此强度等级将添加的最大额外辐射量 */
        extra_radiation_max?: Int;
        /**辐射伤害的最小伤害值（需要extra_radiation_min > 0） */
        radiation_hurt_damage_min?: Int;
        /**辐射伤害的最大伤害值 */
        radiation_hurt_damage_max?: Int;
        /**受到辐射伤害时显示的消息 */
        radiation_hurt_message?: (DescText);
        /**强度升级概率 */
        intensity_upgrade_chance?: Int;
        /**强度升级间隔时间 */
        intensity_upgrade_duration?: (Time);
        /**怪物生成概率 */
        monster_spawn_chance?: Int;
        /**怪物生成数量 */
        monster_spawn_count?: Int;
        /**怪物生成半径 */
        monster_spawn_radius?: Int;
        /**怪物生成组 */
        monster_spawn_group?: (MonsterGroupID);
        /**此强度发射的光照等级 */
        light_emitted?: Float;
        /**覆盖环境光照等级 */
        light_override?: Float;
        /**阻挡光照的程度（数值越大穿透的光越少） */
        translucency?: Float;
        /**气体浓度
         * 稀薄/朦胧云强度通常为1，标准气体为2，浓密气体为4
         * 防毒面具过滤器的使用时间将除以此值
         */
        concentration?: Int;
        /**此强度等级释放的热量 */
        convection_temperature_mod?: Int;
        /**应用的效果列表 */
        effects?: {
            /**效果ID */
            effect_id: string;
            /**最小持续时间 */
            min_duration: (Time);
            /**最大持续时间 */
            max_duration: (Time);
            /**效果强度 */
            intensity: Int;
            /**应用效果的部位
             * @default "whole body"
             */
            body_part?: (BodyPartParam);
            /**是否使用环境效果判定
             * 如果为true，使用<intensity>d3 > <目标部位护甲/仿生环境抗性>d3判定是否应用效果
             */
            is_environmental?: boolean;
            /**在车辆中是否免疫（如无墙或车顶） */
            immune_in_vehicle?: boolean;
            /**在车辆内部是否免疫 */
            immune_inside_vehicle?: boolean;
            /**在车辆外部是否免疫 */
            immune_outside_vehicle?: boolean;
            /**在车辆中应用效果的几率 */
            chance_in_vehicle?: Int;
            /**在车辆内部应用效果的几率 */
            chance_inside_vehicle?: Int;
            /**在车辆外部应用效果的几率 */
            chance_outside_vehicle?: Int;
            /**对玩家应用效果时显示的消息 */
            message?: (DescText);
            /**对NPC应用效果时显示的消息 */
            message_npc?: (DescText);
            /**消息类型：good/bad/mixed/neutral */
            message_type?: (MessageRatType);
            /**免疫数据
             * 只要满足其中任意一项，即视为具有免疫
             */
            immunity_data?: (ImmunityData);
        }[];
        /**减少气味的程度 */
        scent_neutralization?: Int;
    }[];
    /**NPC抱怨设置 */
    npc_complain?: {
        /**抱怨几率 */
        chance: Int;
        /**问题类型 */
        issue: string;
        /**抱怨间隔时间 */
        duration: (Time);
        /**抱怨话语 */
        speech: (DescText);
    };
    /**免疫数据
      * 只要满足其中任意一项，即视为具有免疫
      */
    immunity_data?: (ImmunityData);
    /**雨水衰减因子 */
    decay_amount_factor?: Int;
    /**半衰期 */
    half_life?: (Time);
    /**水下老化加速时间 */
    underwater_age_speedup?: (Time);
    /**是否使用线性半衰期
     * 如果为true，半衰期衰减转换为基于定义half_life时间的非随机线性等待
     */
    linear_half_life?: boolean;
    /**户外老化加速时间 */
    outdoor_age_speedup?: (Time);
    /**是否使用简化衰减计算（用于装饰性地块附着物如血迹） */
    accelerated_decay?: boolean;
    /**扩散百分比 */
    percent_spread?: Int;
    /**地块附着物相态：gas/solid/liquid/plasma */
    phase?: (Phase);
    /**应用粘液因子 */
    apply_slime_factor?: Int;
    /**气体吸收因子 */
    gas_absorption_factor?: (Length);
    /**是否溅射（使车辆部件沾血） */
    is_splattering?: boolean;
    /**是否重新计算透明度缓存（用于不透明、扩散的地块附着物） */
    dirty_transparency_cache?: boolean;
    /**是否是火焰类地块附着物 */
    has_fire?: boolean;
    /**是否是酸类地块附着物 */
    has_acid?: boolean;
    /**是否是电类地块附着物 */
    has_elec?: boolean;
    /**是否是烟雾类地块附着物（不呼吸的怪物对此免疫） */
    has_fume?: boolean;
    /**是否遮挡物品 */
    display_items?: boolean;
    /**是否有可见精灵或符号
     * @default false
     */
    display_field?: boolean;
    /**物品描述前缀：in/covered_in/on/under/illuminated_by */
    description_affix?: (DescText);
    /**漫游地块附着物 */
    wandering_field?: (FieldTypeID);
    /**接触时减少强度 */
    decrease_intensity_on_contact?: boolean;
    /**是否可用于拖地区域 */
    mopsafe?: boolean;
    /**击打设置 */
    bash?: {
        /**最小击打力量 */
        str_min: Int;
        /**最大击打力量 */
        str_max: Int;
        /**成功击打时的音量 */
        sound_vol: Int;
        /**击打失败时的音量 */
        sound_fail_vol: Int;
        /**成功击打时的声音 */
        sound: string;
        /**击打失败时的声音 */
        sound_fail: string;
        /**成功击打时的消息 */
        msg_success: (DescText);
        /**成功击打消耗的移动点数
         * @default 100
         */
        move_cost?: Int;
        /**成功击打后掉落的物品 */
        items?: {
            /**物品ID */
            item: (ItemID);
            /**数量范围 */
            count?: [Int, Int];
            /**充能范围 */
            charges?: [Int, Int];
        }[];
    };
    /**是否不可摧毁（但仍可能随时间过期） */
    indestructible?: boolean;
};

/**地块附着物免疫数据
 * 只要满足其中任意一项，即视为具有免疫
 */
type ImmunityData = {
    /**如果角色拥有列出的任意角色标志（如 WEBWALK）
     * 则对该字段免疫（参见 Character flags
     */
    flags: FlagID[];
    /**如果列出的所有身体部位（如嘴、传感器）的环境防护值都大于或等于指定值（如 15 或 10），则免疫
     * @example  [["mouth", 15], ["sensor", 10]]
     */
    body_part_env_resistance: [LimbType,Int][];
    /**如果列出的所有部位（如 sensor）都穿戴了带有指定标志（如 FLASH_PROTECTION）的物品，则免疫
     * @example [["sensor", "FLASH_PROTECTION"]]
     */
    immunity_flags_worn: [LimbType,FlagID][];
    /**如果列出的任意身体部位穿戴了具有对应标志的物品，即可获得免疫；
      * 本例中，戴上遮眼物或带垫手套（二者其一）即可免疫
      * @example [["sensor", "BLIND"], ["hand", "PADDED"]]
      */
    immunity_flags_worn_any: [LimbType,FlagID][];
};

/**定义的地块附着物 列表 */
export const DefineFieldTypeIDList = [
    "fd_null"           ,//无附着物
    "fd_fatigue"        ,//时空裂隙
    "fd_tindalos_rift"  ,//分形裂痕
] as const;
/**定义的地块附着物 */
export type DefineFieldTypeID = typeof DefineFieldTypeIDList[number];