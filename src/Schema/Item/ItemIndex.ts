import { ComestibleTrait } from "./Comestible";
import { GunTrait } from "./Gun";
import { GenericTrait } from "./Generic";
import { CddaID, RequirePair } from "Schema/GenericDefine";
import { ArmorTrait } from "./Armor";
import { AmmoTrait } from "./Ammo";
import { ToolTrait } from "./Tool";
import { MagazineTrait } from "./Magazine";
import { GunModTrait } from "./GunMod";




const ItemSubtypeList = [
  "TOOL",          // 工具类物品, 可能具备工具特性并消耗能量
  "ARMOR",         // 护甲类物品, 用于抵御伤害
  "GUN",           // 武器类物品, 可发射各种投射物
  "GUNMOD",        // 枪械改装件, 可安装在具有对应槽位的枪械上
  "AMMO",          // 弹药类物品, 被工具或枪械消耗
  "MAGAZINE",      // 弹匣类物品, 用于存放弹药; 应装入 MAGAZINE_WELL 类型的口袋中
  "COMESTIBLE",    // 可食用物品, 可能会腐烂
  "BOOK",          // 书籍类物品, 可供阅读
  "PET_ARMOR",     // 宠物专用护甲
  "BIONIC_ITEM",   // 义体组件 (CBM) ; 安装后将激活与名称对应的义体效果
  "TOOLMOD",       // 工具改装件, 主要用于修改工具 (如更改电池接口) 
  "ENGINE",        // 引擎模块, 安装于交通工具以定义其动力属性
  "WHEEL",         // 轮胎模块, 安装于交通工具作为轮组
  "SEED",          // 种子类物品, 可用于种植作物
  "BREWABLE",      // 可酿造类物品
  "COMPOSTABLE",   // 可堆肥类物品
  "MILLING",       // 可碾磨类物品
] as const;
export type ItemSubtype = typeof ItemSubtypeList[number];


/**任何物品特征 */
export type AnyItemTrait = (RequirePair<"GENERIC",({
    /**标记具有 GENERIC 的特征, 用于补全 */
    "//T": "GENERIC";
}|{
    /**标记具有 GENERIC 的特征, 用于补全 */
    "//GENERIC": true;
})&{
  flags:GenericTrait["flags"];
}>|GunTrait|ToolTrait|MagazineTrait|ComestibleTrait|ArmorTrait|GunModTrait|AmmoTrait);
//(AmmoTrait|GunTrait|ToolTrait|MagazineTrait|ComestibleTrait|ArmorTrait|GunModTrait);

/**物品ID */
export type ItemID = CddaID<"ITEM">;

/**物品  
 * 以 "//T"?:"xxx" as TypeA|TypeB 标记其 同时符合TypeA和TypeB的特征  
 * 以 "//TypeA": true; "//TypeB": true; 标记其符合TypeA或TypeB的特征  
 */
export type Item = GenericTrait&AnyItemTrait;

/**任何物品的Flag */
export type AnyItemFlag = Exclude<AnyItemTrait['flags'],undefined>[number];

const a:Item = {
  type: "ITEM",
  id: "a",
  name: "a",
  description: "a",
  subtype: ["TOOL"],
  weight: 1,
  volume: 1,
  symbol: "1",
  "//":"uncopy",
  //"//T": "GUN" as "GUN"|"ARMOR",
  "//GUN": true,
  "//ARMOR": true,
  ammo:["50"],
  covers: ["arm_r"],
  encumbrance: 0,
  cover_melee:0,
  cover_ranged:0,
  material_thickness:1,
  cover_vitals:0,
  coverage:0
}