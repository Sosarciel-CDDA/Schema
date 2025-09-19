import { CddaID, DescText, Float, Int, PRecord } from "./GenericDefine";
import { MonsterFactionID } from "./MonsterFaction";
import { VitaminID } from "./Vitamin";
import { BoolExpr } from "./Eoc";
import { ItemID } from "./Item";
import { ItemGroupID } from "./ItemGroup";
import { ItemCategoryID } from "./ItemCategory";

/**NPC阵营ID */
export type NPCFactionID = CddaID<'NPCF'>|DefineNpcFaction;


/**食物供应类型 */
type FoodSupply = {
    /**卡路里数量(不是千卡!) */
    calories: Int;
    /**维生素供应 */
    vitamins?: PRecord<VitaminID,Int>;
};

/**价格规则 */
export type NpcShopPriceRule = {
    /**物品ID */
    item?: (ItemID);
    /**物品类别 */
    category?: (ItemCategoryID);
    /**物品组 */
    group?: (ItemGroupID);
    /**价格乘数, 适用于买卖双方 */
    premium?: Float;
    /**仅当NPC出售给玩家时使用的乘数  
     * @default 1  
     */
    markup?: Float;
    /**替换物品的末日价格 */
    price?: Float;
    /**固定调整值, 替代基于社交技能和智力属性的调整 */
    fixed_adj?: Float;
    /**应用规则的条件 */
    condition?: (BoolExpr);
};

/**阵营关系标志 */
export type FactionRelationFlags = {
    /**成员见到就杀 */
    "kill on sight"     ?: boolean;
    /**成员会将对该阵营的攻击视为对自己的攻击 */
    "watch your back"   ?: boolean;
    /**成员不会反对该阵营成员拿走自己的物品 */
    "share my stuff"    ?: boolean;
    /**营地允许该阵营成员从食物储备中进食(包括饮水) */
    "share public goods"?: boolean;
    /**成员会反对他人拿走该阵营的物品 */
    "guard your stuff"  ?: boolean;
    /**成员不会反对该阵营成员进入自己控制的领地 */
    "lets you in"       ?: boolean;
    /**成员会对进入该阵营领地的人变得敌对 */
    "defends your space"?: boolean;
    /**成员不会评论该阵营成员的言论 */
    "knows your voice"  ?: boolean;
};

/**结局定义 */
type FactionEpilogue = {
    /**结局出现的最小阵营力量 */
    power_min: Int;
    /**结局出现的最大阵营力量 */
    power_max: Int;
    /**包含结局文本的片段ID */
    id: string;
};

/**NPC阵营定义 */
export type NPCFaction = {
    type: "faction";
    /**NPC阵营唯一ID */
    id: (NPCFactionID);
    /**阵营常用名称 */
    name: (DescText);
    /**阵营对玩家的初始好感度  
     * 如果低于-10, 阵营成员会变得敌对  
     */
    likes_u: Int;
    /**阵营对玩家的初始尊重度  
     * 目前没有实际效果, 未来可能移除  
     */
    respects_u: Int;
    /**阵营对玩家的初始信任度  
     * 决定NPC交易时可用的物品组  
     */
    trusts_u: Int;
    /**玩家是否已接触过该阵营成员  
     * 未知阵营不会显示在阵营菜单中  
     */
    known_by_u: boolean;
    /**阵营成员的大致数量  
     * 目前没有实际效果  
     */
    size: Int;
    /**阵营力量的大致评估  
     * 目前没有实际效果  
     */
    power: Int;
    /**阵营的总体食物供应  
     * @example [[0, { "calories": 115200, "vitamins": { "iron": 800, "calcium": 800, "vitC": 600 } }]]  
     */
    fac_food_supply: [[Int, FoodSupply]];
    /**控制角色从食物储备中进食是否会减少食物量  
     * @default false  
     */
    consumes_food?: boolean;
    /**阵营拥有的末日货币数量(分)  
     * 作为NPC补充物品的上限  
     */
    wealth: Int;
    /**阵营偏好货币的物品ID  
     * 阵营商人会以100%价值交易该货币  
     */
    currency: (ItemID);
    /**价格规则数组  
     * 允许为物品/类别/组定义溢价, 加价, 价格和/或固定调整  
     */
    price_rules?: NpcShopPriceRule[];
    /**阵营关系字典  
     * 描述该阵营如何看待其他阵营  
     */
    relations: PRecord<NPCFactionID, FactionRelationFlags>;
    /**该阵营所属的怪物阵营名称  
     * @default "human"  
     */
    mon_faction?: (MonsterFactionID);
    /**这是一个用于动态生成NPC的原型/微型阵营模板  
     * @default false  
     */
    lone_wolf_faction?: boolean;
    /**该阵营营地是否只认领特定地图瓦片  
     * @default false  
     */
    limited_area_claim?: boolean;
    /**阵营描述  
     * 在阵营菜单中显示的玩家描述  
     */
    description?: (DescText);
    /**结局数组  
     * 定义阵营不同力量水平下的结局文本  
     */
    epilogues?: FactionEpilogue[];
};


/**npc阵营 列表 */
export const DefineNpcFactionList = [
    "your_followers"      ,
    "amf"                 ,
    "robofac"             ,
    "robofac_auxiliaries" ,
    "old_guard"           ,
    "free_merchants"      ,
    "lobby_beggars"       ,
    "tacoma_commune"      ,
    "isolated_artisans"   ,
    "marloss"             ,
    "no_faction"          ,
    "wasteland_scavengers",
    "hells_raiders"       ,
    "slaves"              ,
    "apis_hive"           ,
    "isherwood_family"    ,
    "gods_community"      ,
    "lapin"               ,
    "fisherman_family"    ,
    "prisoners"           ,
    "exodii"              ,
    "the_great_library"   ,
    "GM_militia_faction"  ,
] as const;

/**npc阵营 */
export type DefineNpcFaction = typeof DefineNpcFactionList[number];



