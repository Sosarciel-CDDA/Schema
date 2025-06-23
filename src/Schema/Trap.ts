import { CddaID, Char, Color, DescText, Int, Weight } from "./GenericDefine";
import { ParamsEoc } from "./Eoc";
import { ItemID } from "./Item";
import { FlagID } from "./Flag";
import { SoundEffectID, SoundEffectVariantID } from "./SoundEffect";
import { FakeSpell } from "./Enchantment";
import { UpdateMapgenID } from "./Mapgen";


/**陷阱ID */
export type TrapID = CddaID<'TRAP'>;

/**陷阱定义 */
export type Trap = {
    type: "trap";
    /**陷阱唯一ID */
    id: (TrapID);
    /**游戏内显示名称 */
    name: (DescText);
    /**颜色 */
    color: (Color);
    /**地图符号 */
    symbol: (Char);
    /**可见度(0表示非常明显, 值越高越难发现) */
    visibility: Int;
    /**躲避难度(0表示非常容易, 值越高越难) */
    avoidance: Int;
    /**解除难度(0表示总能成功, 99表示不可能解除) */
    difficulty: Int;
    /**陷阱部署所需空间半径 */
    trap_radius: Int;
    /**触发时运行的C++函数 */
    action: (TrapActionType);
    /**地图再生用的overmap ID */
    map_regen?: (UpdateMapgenID);
    /**是否为良性陷阱(如漏斗等, 无法被触发) */
    benign?: boolean;
    /**是否总是不可见(玩家永远无法发现) */
    always_invisible?: boolean;
    /**漏斗半径(毫米, 值越高收集雨水越多) */
    funnel_radius?: Int;
    /**舒适度(影响休息和治疗效果) */
    comfort?: Int;
    /**地板/床铺温暖度 */
    floor_bedding_warmth?: Int;
    /**触发时运行的EOC数组 */
    eocs?: (ParamsEoc);
    /**法术数据(仅当action为"spell"时使用) */
    spell_data?: (FakeSpell);
    /**触发重量(当物品重量达到此值时触发)   
     * @default "500 g"  
     */
    trigger_weight?: (Weight);
    /**拆卸时生成的物品 */
    drops?: (ItemID)[];
    /**陷阱标志   
     * @example ["UNDODGEABLE", "AVATAR_ONLY"]  
     */
    flags?: (FlagID)[];
    /**车辆相关数据 */
    vehicle_data?: (VehicleTrapData);
    /**玩家触发时的消息 */
    trigger_message_u?: (DescText);
    /**NPC/怪物触发时的消息 */
    trigger_message_npc?: (DescText);
    /**声音触发阈值  
     * @default [0,0]  
     */
    sound_threshold?: [Int, Int];
};


/**车辆陷阱数据 */
type VehicleTrapData = {
    /**伤害值 */
    damage: Int;
    /**声音音量 */
    sound_volume: Int;
    /**声音描述 */
    sound: (DescText);
    /**声音类型 */
    sound_type: (SoundEffectID);
    /**声音变体 */
    sound_variant: (SoundEffectVariantID);
    /**触发后是否移除陷阱 */
    remove_trap: boolean;
    /**生成的物品 */
    spawn_items: ItemID[];
};

/**陷阱硬编码动作 列表 */
const TrapActionTypeList = [
    "none"          ,
    "bubble"        ,
    "glass"         ,
    "cot"           ,
    "beartrap"      ,
    "board"         ,
    "caltrops"      ,
    "caltrops_glass",
    "eocs"          ,
    "tripwire"      ,
    "crossbow"      ,
    "shotgun"       ,
    "blade"         ,
    "snare_light"   ,
    "snare_heavy"   ,
    "snare_species" ,
    "landmine"      ,
    "goo"           ,
    "dissector"     ,
    "sinkhole"      ,
    "pit"           ,
    "pit_spikes"    ,
    "pit_glass"     ,
    "lava"          ,
    "boobytrap"     ,
    "temple_flood"  ,
    "temple_toggle" ,
    "glow"          ,
    "hum"           ,
    "shadow"        ,
    "map_regen"     ,
    "drain"         ,
    "spell"         ,
    "snake"         ,
    "dummy_trap",
] as const;

/**陷阱硬编码动作 */
type TrapActionType = typeof TrapActionTypeList[number];

