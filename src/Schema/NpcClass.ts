import { ExtractDefineNpcClassID } from "../Extract/NpcClassID";
import { BoolExpr, NpcNumberExpr, NumberExpr } from "./Eoc";
import { CddaID, DescText, Int, PRecord, Price, Time } from "./GenericDefine";
import { ItemID } from "./Item";
import { ItemCategoryID } from "./ItemCategory";
import { ItemGroupID } from "./ItemGroup";
import { MutationID } from "./Mutation";
import { NpcShopPriceRule } from "./NPCFaction";
import { SkillID } from "./Skill";
import { SpellID } from "./Spell";





/**Npc职业ID */
export type NpcClassID = CddaID<"NPCCLS">|DefineNpcClassID;
/**预定义的 Npc职业ID */
export type DefineNpcClassID = ExtractDefineNpcClassID;
/**Npc职业 */
export type NpcClass = {
    type: "npc_class";
    /**NpcClass唯一ID */
    id: (NpcClassID);
    name: (DescText) ;
    job_description: (DescText);
    /**false意味着这个NPC职业不会随机生成.   
     * @default true  
     */
    common?: boolean;
    /**false意味着该NPC的磨损或持有的物品将被严格排除在其店主名单之外;  
     * 否则, 他们会很乐意出售裤子之类的东西.   
     * @default true  
     */
    sells_belongings?: boolean;
    /**初始力量 */
    bonus_str?: NpcNumberExpr;
    /**初始敏捷 */
    bonus_dex?: NpcNumberExpr;
    /**初始智力 */
    bonus_int?: NpcNumberExpr;
    /**初始感知 */
    bonus_per?: NpcNumberExpr;
    /**初始技能 */
    skills?: NPCClassBaseSkill[];
    /**npc穿戴的物品组 */
    worn_override?: (ItemGroupID);
    /**npc携带的物品组 */
    carry_override?: (ItemGroupID);
    /**npc拿起的物品组 */
    weapon_override?: (ItemGroupID);
    /**仅当计划的 NPC 是店主, 拥有每三个游戏日更换一次的循环物品库存时, 才需要.   
     * 所有物品覆盖都将确保此类的任何 NPC 都会生成特定物品.    
     */
    shopkeeper_item_group?: ShopItemGroup[];
    /**用于定义此店主的物料消耗费率. 默认设置是在补货前消耗所有商品 */
    shopkeeper_consumption_rates?: (ShopkeeperConsumptionRateID);
    /**使用与派系价格规则相同的格式定义个人价格规则 (请参阅 FACTIONS.md). 这些优先于派系规则 */
    shopkeeper_price_rules?: NpcShopPriceRule[],
    /**可选为此店主定义黑名单 */
    shopkeeper_blacklist?: string;
    /**默认值为 6 天 */
    restock_interval?: (Time);
    /**基础变异 */
    traits?: (NpcBaseTraits);
    /**基础法术 */
    spells?: (NpcBaseSpells);
    /**变异方向  
     * Mutation rounds can be specified as follows:  
     * "mutation_rounds": {  
     *   "ANY" : { "constant": 1 },  
     *   "INSECT" : { "rng": [1, 3] }  
     * }  
     */
    mutation_rounds?:MutationRounds;
}


/**出售物品组 */
type ShopItemGroup = {
    group: ItemGroupID;
    /**出售条件
     * 玩家作为 alpha NPC 作为 beta
     */
    consition?: (BoolExpr);
    /**信任度要求
     * 如果该派系对玩家的信任度低于此值，则该物品组中的物品不会出现在商店中出售  
     * @default 0
     */
    trust?: Int;
    /**默认情况下，物品组会持续迭代，直到达到 NPC 所需的数量或价值阈值
     * 若设为 rigid, 则该物品组只会尝试填充一次 (若条件允许) 且不会重复运行或包含重复物品
     * @default false
     */
    rigid?: boolean;
    /**若设为 true, 则该物品组在补货时也必须满足条件, 否则不会重新补货
     * @default false
     */
    strict?: boolean;
    /**当条件不满足时，在用户界面（如交易界面）中显示的提示信息。
     * @default "<npc_faction> faction does not trust you enough."
     */
    refusal?: (DescText);
}

/**npc基础变异 */
export type NpcBaseTraits = ({ group: string }|{ trait: MutationID }|[MutationID,number])[];
/**npc基础法术 */
export type NpcBaseSpells = {id:SpellID,level:number}[];
type MutationRounds = PRecord<"ANY",NpcNumberExpr>;
/**npc职业的基础技能 */
export type NPCClassBaseSkill = {
    /**目标技能 ALL为全部 */
    skill: "ALL"|SkillID,
    /**技能等级 */
    level: (NpcNumberExpr);
}
/**商店补货频率定义 */
export type ShopkeeperConsumptionRateID = CddaID<"SHOPKEEPER_CONSUMPTION_RATES">;
/**商店补货频率定义 */
export type ShopkeeperConsumptionRate = {
    type: "shopkeeper_consumption_rates";
    id: (ShopkeeperConsumptionRateID);
    /**补货频率/天
     * -1 为不补货
     */
    default_rate: Int;
    /**价格阈值
     * 低于此阈值的物品将会被清空
     */
    junk_threshold: (Price);
    /**补货频率 */
    rates: RateEntry[];
};

/**补货频率 */
type RateEntry = {
    /**物品ID */
    item?: (ItemID);
    /**物品类别 */
    category?: (ItemCategoryID);
    /**物品组 */
    group?: (ItemGroupID);
    /**补货频率/天
     * -1 为不补货
     */
    rate: Int;
    /**补货条件 */
    condition?: (BoolExpr);
};

/**商店黑名单ID */
export type ShopkeeperBlacklistID = CddaID<"SHOPKEEPER_BLACKLIST">;

/**商店黑名单定义 */
export type ShopkeeperBlacklist = {
    type: "shopkeeper_blacklist";
    id: (ShopkeeperBlacklistID);
    /**黑名单条目列表 */
    entries: BlacklistEntry[];
};

/**黑名单条目 */
type BlacklistEntry = {
    /**物品ID */
    item?: (ItemID);
    /**物品类别 */
    category?: (ItemCategoryID);
    /**物品组 */
    group?: (ItemGroupID);
    /**黑名单条件 */
    condition?: (BoolExpr);
    /**拒绝提示信息（可用于交易界面等） */
    message?: (DescText);
};
