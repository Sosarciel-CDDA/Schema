import { JToken } from "@zwa73/utils";
import { AmmunitionType } from "./AmmiunitionType";
import { Effect } from "./Effect";
import { Enchantment } from "./Enchantment";
import { Eoc } from "./Eoc";
import { Flag, FlagID } from "./Flag";
import { AmmoID, Item, ItemID, AnyItemTrait } from "./Item";
import { ItemGroup } from "./ItemGroup";
import { MathFunction } from "./MathFuncion";
import { Monster, MonsterID } from "./Monster";
import { NpcClass } from "./NpcClass";
import { NpcInstance } from "./NpcInstance";
import { OverlayOrdering } from "./OverlayOrdering";
import { SoundEffect } from "./SoundEffect";
import { Spell } from "./Spell";
import { MaterialID } from "./Material";
import { MissionDefinition } from "./MissionDefinition";
import { Mutation } from "./Mutation";
import { DamageInfoOrder, DamageType, DamageTypeID } from "./DamageType";
import { AmmoEffect } from "./AmmoEffect";
import { ModTileset } from "./ModTileset";
import { ActivityType } from "./ActivityType";
import { VehiclePart } from "./VehiclePart";
import { ToolQuality } from "./ToolQuality";
import { TalkTopic } from "./TalkTopic";
import { Requirement } from "./Requirement";
import { Terrain, TerrainID } from "./Terrain";
import { OverMapSpecial } from "./OvermapSpecial";
import { Mapgen } from "./Mapgen";
import { Palette } from "./Palette";
import { Furniture } from "./Furniture";
import { MonsterGroup } from "./MonsterGroup";
import { ProficiencyCategory } from "./ProficiencyCategory";
import { Species } from "./Species";
import { MutationCategory } from "./MutationCategory";
import { ScentType } from "./ScentType";
import { Proficiency } from "./Proficiency";
import { Technique } from "./Technique";
import { MartialArt } from "./MartialArt";
import { AttackVector } from "./AttackVector";
import { Fault } from "./Fault";
import { FaultFix } from "./FaultFix";
import { FaultGroup } from "./FaultGroup";
import { MonsterFaction } from "./MonsterFaction";
import { NPCFaction } from "./NPCFaction";
import { Trap } from "./Trap";
import { Harvest } from "./Harvest";
import { HarvestDropType } from "./HarvestDropType";
import { BodyPart } from "./BodyPart";
import { LimbScore } from "./LimbScore";
import { CharacterMod } from "./CharacterMod";
import { Snippet } from "./Snippet";
import { SpeedDescription } from "./SpeedDescription";
import { WeaponCategory } from "./WeaponCategory";
import { Uncraft } from "./Uncraft";
import { ItemAction } from "./ItemAction";
import { Vitamin } from "./Vitamin";
import { Skill } from "./Skill";
import { FieldType } from "./FieldType";
import { Emit } from "./Emit";

/**描述性文本 */
export type DescText = string|{
    /**单数名 */
    str?: string;
    /**复数名 */
    str_pl?: string;
    /**单复数共用名 */
    str_sp?: string;
    /**翻译上下文 */
    ctxt?: string;
};

/**@TJS-type integer */
export type Int = (Number&number);
/**@TJS-type number */
export type Float = number;

/**单字符 */
export type Char =
'`'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'0'|'-'|'='|
'~'|'!'|'@'|'#'|'$'|'%'|'^'|'&'|'*'|'('|')'|'_'|'+'|
'['|']'|'\\'|
'{'|'}'|'|'|
';'|'\''|
':'|'"'|
','|'.'|'/'|
'<'|'>'|'?'|
'a'|'b'|'c'|'d'|'e'|'f'|'g'|'h'|'i'|'j'|'k'|'l'|'m'|'n'|'o'|'p'|'q'|'r'|'s'|'t'|'u'|'v'|'w'|'x'|'y'|'z'|
'A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'|'I'|'J'|'K'|'L'|'M'|'N'|'O'|'P'|'Q'|'R'|'S'|'T'|'U'|'V'|'W'|'X'|'Y'|'Z';

/**辅助Schema解析的字符串构造浮点数字 */
type SchemaNumber = `${number}${"."|""}${number|""}`;
/**重量 */
export type Weight = Int|`${number} ${"mg"|"kg"|"g"}`;
/**体积 */
export type Volume = Int|`${number} ${"L"|"ml"}`;
/**长度 */
export type Length = Int|`${number} ${"mm"|"cm"|"meter"|"km"}`;
/**能量 */
export type Energy = Int|`${number} ${"mJ"|"J"|"kJ"}`;
/**能耗 */
export type Power = Int|`${number} ${"mW"|"W"|"kW"}`;
/**价格 */
export type Price = Int|`${number} ${"cent"|"cents"|"dollar"|"dollars"|"USD"|"kUSD"}`;
/**时间 无符号为秒 1turn=1s */
export type Time = Int|`${number} ${"turns"|"turn"|"t"|"seconds"|"second"|"s"|"minutes"|"minute"|"m"|"hours"|"hour"|"h"|"day"|"days"|"d"}`;
/**电子数据单位 无符号为KB */
export type Ememory = Int|`${number} ${"KB"|"GB"|"GB"|"TB"}`;
///**温度 */
//export type Temperature = Int|`${number} ${"K"}`;

/**可用的颜色列表 */
export const ColorList = [
    "black"         ,
    "red"           ,
    "green"         ,
    "brown"         ,
    "blue"          ,
    "magenta"       ,
    "cyan"          ,
    "light_gray"    ,
    "dark_gray"     ,
    "light_red"     ,
    "light_green"   ,
    "yellow"        ,
    "light_blue"    ,
    "pink"          ,
    "light_cyan"    ,
    "white"         ,
] as const;
/**可用的颜色 */
export type Color = typeof ColorList[number];

/**@TJS-type string */
export type SchemaString = (String&string);

/**自定义的ID */
export type CddaID<T extends string> = (`${T}_${string}`|SchemaString);
//export type CddaID<T extends string> = `${`${string}_`|''}${T}_${string}`|SchemaString;

/**Copyfrom的保留字段 */
export type CopyfromResFD = "id"|"type";
/**可以复制的物体 */
export type CopyfromAble = {id:string,type:string};
/**Copyfrom的物品 */
export type CopyfromVar<T extends CopyfromAble> = (T&{"//"?:"uncopy"})|Copyfrom<T>;
/**copyfrom变体 */
export type Copyfrom<T extends CopyfromAble> =
    Pick<T,CopyfromResFD>&{
        /**复制的目标 */
        "copy-from":T["id"], "//"?:"copy",
        /**删除原物品的某些元素 */
        delete?: Partial<Omit<T,CopyfromResFD>>,
        /**扩展原物品的某些元素 */
        extend?: Partial<Omit<T,CopyfromResFD>>,
        /**在原物品的某些元素上做数值调整 */
        relative?: Partial<Omit<T,CopyfromResFD>>,
        /**在原物品的某些元素上做数值倍率调整 */
        proportional?: Partial<Omit<T,CopyfromResFD>>,
        /**将原物品的某些材质替换 原材质:替换材质 */
        replace_materials?: PRecord<MaterialID,MaterialID>,
    }& Partial<Omit<T,CopyfromResFD>>;
    //Partial<{[P in keyof TMP]:TMP[P] extends object
    //    ? Partial<TMP[P]> & {delete?: TMP[P],extend?: TMP[P]}
    //    : Partial<TMP[P]>
    //}>;

/**容器 */
export type PocketData = {
    /**容器或弹夹 */
    pocket_type: "CONTAINER"|"MAGAZINE"|"MAGAZINE_WELL";
    /**此口袋可以容纳的最大体积, 所有包含的物品的总和 */
    max_contains_volume?: (Volume);
    /**此口袋可以容纳的最大重量, 所有容器物品的总重量 */
    max_contains_weight?: (Weight);
    /**可放入此口袋的物品的最小体积.  小于此尺寸的物品不能放入口袋中 */
    min_item_volume?: (Volume);
    /**可通过开口放入此口袋的物品的最大体积 */
    max_item_volume?: (Volume);
    /**可放入此口袋的物品的最大长度 (按其最长边).  默认值为假设体积为立方体的对角线开口长度 (cube_root(vol)*square_root(2)) */
    max_item_length?: (Length);
    /**腐坏速度乘数 将物品放入此口袋中如何影响损坏.  小于1.0, 物品保存时间更长;  0.0 将无限期保留 */
    spoil_multiplier?: number;
    /**重量乘数 个口袋里的物品神奇地内部重量比外部重量轻 原版中的任何东西都不应该有一个weight_multiplier */
    weight_multiplier?: number;
    /**体积乘数 该口袋中的物品内部体积小于外部体积.  可用于有助于组织特定内容的容器, 例如用于管道胶带的纸板卷 */
    volume_multiplier?: number;
    /**表示在最佳条件下从口袋中取出物品所需的移动次数.  */
    moves?: number;
    /**如果为 true, 则该口袋的大小是固定的, 并且在填充时不会扩展.  玻璃罐是刚性的, 而塑料袋则不是
     * @default false  
     */
    rigid?: boolean;
    /**如果属实, 则玩家无法使用该口袋  
     * @default false  
     */
    forbidden?: boolean;
    /**在口袋开始膨胀之前可以放置物品的空间量.  仅当rigid = false 时才有效.  */
    magazine_well?: (Volume);
    /**如果属实, 可能含有液体  
     * @default false  
     */
    watertight?: boolean;
    /**如果属实, 可能含有气体  
     * @default false  
     */
    airtight?: boolean;
    /**如果属实, 该物品包含一个烧蚀板.  确保在可以添加的车牌类型上包含 flag_restriction  
     * @default false  
     */
    ablative?: boolean;
    /**如果为 true, 则只能将一堆物品放入此口袋内, 如果该物品不是 count_by_charges, 则只能放置一件物品  
     * @default false  
     */
    holster?: boolean;
    /**如果为 true, 则如果将此物品放入另一个物品中, 该口袋中的物品将会溢出  
     * @default false  
     */
    open_container?: boolean;
    /**如果属实, 口袋可以保护里面的物品在扔进火里时不会爆炸  
     * @default false  
     */
    fire_protection?: boolean;
    /**将口袋限制为给定的弹药类型和数量.  这会覆盖强制性的体积, 重量, 水密和气密, 以使用给定的弹药类型.   
     * 一个口袋可以容纳任意数量的独特弹药类型, 每种弹药类型的数量不同, 并且容器只能容纳一种类型 (截至目前).  如果省略它, 它将是空的.   
     * PRecord<(AmmoID)子弹类型 : (number)容纳数量}>  
     */
    ammo_restriction?: PRecord<AmmoID,number>;
    /**只有当物品具有与这些标志之一匹配的标志时, 才能将其放入此口袋中.  */
    flag_restriction?: FlagID[];
    /**只有这些物品 ID 才能放入此口袋中.  超越弹药和旗帜限制.  */
    item_restriction?: ItemID[];
    /**有主要由该材料制成的物品才能进入.  */
    material_restriction?: MaterialID[];
    /**如果口袋有 sealed_data, 则在物品生成时它将被密封.  口袋的密封版本将覆盖相同数据类型的未密封版本  */
    sealed_data?: Partial<PocketData>;
    /**如果口袋继承了标志, 则意味着里面的物品对拥有口袋本身的物品有贡献的任何标志.  */
    inherits_flags?: boolean;
};


/**远程武器伤害 */
export type RangeDamage = {
    /**伤害类型 */
    damage_type: (DamageTypeID);
    /**伤害值 */
    amount: number;
    /**穿甲值 */
    armor_penetration?: number;
    /**枪管伤害 */
    barrels?:{
        /**如果枪管小于等于此长度则应用此伤害 */
        barrel_length: (Length),
        /**伤害 */
        amount:number
    }[]
}
/**近战武器伤害 伤害类型 : 伤害值 不能为负数* */
export type MeleeDamage = PRecord<DamageTypeID,number>;


export type PRecord<K extends string|number, V> = Partial<Record<K, V>>;

/**爆炸 */
export type Explosion = {
    /**TNT 当量炸药的克数为单位测量爆炸威力, 影响伤害和射程  
     * 强制性; 爆炸的力量, 以TNT克数表示; 管状炸弹约为300, 手榴弹 (无碎片)为240  
     */
    power: number;
    /**距离因子  
     * 爆炸衰减有多快, 接近1意味着每个瓷砖损失的"力量"较少  
     * 0.8意味着每个瓷砖损失20%的力量  
     * 值应大于0但小于1  
     * @default 0.75  
     */
    distance_factor?: Float;
    /**爆炸可能产生的最大 (听觉)噪音.  */
    max_noise?: number;
    /**爆炸是否会留下火  
     * 爆炸产生火焰, 与其功率, 距离和距离因子有关  
     */
    fire?: boolean;
    /**破片数据  
     * 为数字时则为壳体总质量, 其余碎片变量设置为合理的默认值.   
     */
    shrapnel?: ShrapnelData;
}

/**破片数据  
 * 为数字时则为壳体总质量, 其余碎片变量设置为合理的默认值.   
 */
export type ShrapnelData = {
    /**外壳的总质量, 外壳/威力比决定碎片速度 */
    casing_mass: number;
    /**每个碎片的质量, 以克为单位. 大碎片打击更重, 小碎片打击更频繁 */
    fragment_mass: number;
    /**在落地点掉落物品的百分比几率 */
    recovery?: number;
    /**在着陆点掉落的物品 */
    drop?: (ItemID);
}|number;

/**物理状态 */
export type Phase = "solid"|"gas"|"liquid"|"plasma"|"null";


/**属性 列表 */
export const StatusList = [
    'strength'      ,
    'dexterity'     ,
    'intelligence'  ,
    'perception'    ,
] as const;
/**属性 */
export type Status = typeof StatusList[number];

/**属性小写 列表 */
export const StatusLcList = [
    'str'    ,
    'dex'    ,
    'int'    ,
    'per'    ,
] as const;
/**属性小写 */
export type StatusLc = typeof StatusLcList[number];

/**属性大写 列表 */
export const StatusUcList = [
    "DEX" ,
    "INT" ,
    "STR" ,
    "PER" ,
] as const;
/**属性大写 */
export type StatusUc = typeof StatusUcList[number];


/**生存需求 列表 */
export const SurvivalNeedList = [
    "thirst"    ,
    "hunger"    ,
    "fatigue"   ,
] as const;
/**生存需求 */
export type SurvivalNeed = typeof SurvivalNeedList[number];


/**社交技能 列表 */
export const SocialTypeList = [
    "intimidate", //威胁
    "lie"       , //说谎
    "persuade"  , //说服
] as const;
/**社交技能 */
export type SocialType = typeof SocialTypeList[number];

/**效果评价 列表 */
export const EffectRatTypeList = [
    "good"      , //好
    "neutral"   , //中等
    "bad"       , //坏
    "mixed"     , //混合
] as const;
/**效果评价 */
export type EffectRatType = typeof EffectRatTypeList[number];

/**消息评价 列表 */
export const MessageRatTypeList = [
    'good'      , //良好 (绿色)
    'neutral'   , //中性 (白色)
    'bad'       , //不良 (红色)
    'mixed'     , //混合 (紫色)
    'warning'   , //警告 (黄色)
    'info'      , //信息 (蓝色)
    'debug'     , //调试 (仅在调试模式打开时出现)
    'headshot'  , //爆头 (紫色)
    'critical'  , //临界 (黄色)
    'grazing'   , //放牧 (蓝色)
] as const;
/**消息评价  
 * 可以是良好 (绿色) , 中性 (白色) , 不良 (红色)  
 * 混合 (紫色) , 警告 (黄色) , 信息 (蓝色) , 调试 (仅在调试模式打开时出现)  
 * 爆头 (紫色) , 临界 (黄色) , 放牧 (蓝色)  
 */
export type MessageRatType = typeof MessageRatTypeList[number];

/**任何其他 */
type AnyOtherObject = {
    "type":JToken;
};

/**季节 */
export type Season = "SUMMER" | "WINTER" | "AUTUMN" | "SPRING";
/**季节 小写 */
export type SeasonLc = "summer" | "winter" | "autumn" | "spring";
/**时期 */
export type Period = "DAY" | "NIGHT" | "DUSK" | "DAWN";
/**节日 */
export type Festival = "none"|"new_year"|"easter"|
"independence_day"|"halloween"|"thanksgiving"|"christmas";

/**有贴图可以被 look_like 指定的id */
export type LookLikeID = (ItemID|MonsterID|TerrainID);

type MGR<T extends string> = ((`//${T}`)&{});
/**成对出现的字段 */
export type RequirePair<T> = T&{[K in keyof T]?:undefined};
//(Partial<{[K in keyof T]?:T[K]|undefined|never}>|Partial<{[K in keyof T]:undefined}>);


/**活动强度等级 列表 */
export const ActivityLevelList =[
    "NO_EXERCISE"       ,
    "LIGHT_EXERCISE"    ,
    "MODERATE_EXERCISE" ,
    "BRISK_EXERCISE"    ,
    "ACTIVE_EXERCISE"   ,
    "EXTRA_EXERCISE"    ,
] as const;
/**活动强度等级 */
export type ActivityLevel = typeof ActivityLevelList[number];


/**任何Cdda的Json */
export type AnyCddaJson = Item|Eoc|Mutation|DamageType|DamageInfoOrder|
    AmmunitionType|Enchantment|Flag|ItemGroup|Monster|
    NpcClass|NpcInstance|OverlayOrdering|SoundEffect|Requirement|
    Effect|Spell|MathFunction|AmmoEffect|MissionDefinition|
    ModTileset|ActivityType|VehiclePart|ToolQuality|TalkTopic|Terrain|
    OverMapSpecial|Mapgen|Palette|Furniture|MonsterGroup|ProficiencyCategory|
    Species|MutationCategory|ScentType|Proficiency|Technique|MartialArt|AttackVector|
    Fault|FaultFix|FaultGroup|MonsterFaction|NPCFaction|Trap|Harvest|HarvestDropType|
    BodyPart|LimbScore|CharacterMod|Snippet|SpeedDescription|WeaponCategory|Uncraft|ItemAction|
    Vitamin|Skill|Emit|FieldType;
/**任何Cdda的Json 组成的数组*/
export type AnyCddaJsonList = (AnyCddaJson)[];
