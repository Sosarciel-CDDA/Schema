import { AmmoTrait } from "./Ammo";
import { ArmorTrait } from "./Armor";
import { ComestibleTrait } from "./Comestible";
import { GunTrait } from "./Gun";
import { GunModTrait } from "./GunMod";
import { MagazineTrait } from "./Magazine";
import { ToolTrait } from "./Tool";
import { ItemBase } from "./Generic";




const ItemSubtypeList = [
  "TOOL",          // 工具类物品，可能具备工具特性并消耗能量
  "ARMOR",         // 护甲类物品，用于抵御伤害
  "GUN",           // 武器类物品，可发射各种投射物
  "GUNMOD",        // 枪械改装件，可安装在具有对应槽位的枪械上
  "AMMO",          // 弹药类物品，被工具或枪械消耗
  "MAGAZINE",      // 弹匣类物品，用于存放弹药；应装入 MAGAZINE_WELL 类型的口袋中
  "COMESTIBLE",    // 可食用物品，可能会腐烂
  "BOOK",          // 书籍类物品，可供阅读
  "PET_ARMOR",     // 宠物专用护甲
  "BIONIC_ITEM",   // 义体组件（CBM）；安装后将激活与名称对应的义体效果
  "TOOLMOD",       // 工具改装件，主要用于修改工具（如更改电池接口）
  "ENGINE",        // 引擎模块，安装于交通工具以定义其动力属性
  "WHEEL",         // 轮胎模块，安装于交通工具作为轮组
  "SEED",          // 种子类物品，可用于种植作物
  "BREWABLE",      // 可酿造类物品
  "COMPOSTABLE",   // 可堆肥类物品
  "MILLING",       // 可碾磨类物品
] as const;
export type ItemSubtype = typeof ItemSubtypeList[number];

/**物品特征表 */
type ItemTraitMap = {
    "AMMO"        : AmmoTrait        ,
    "ARMOR"       : ArmorTrait       ,
    "COMPOSTABLE" : ComestibleTrait  ,
    "GUN"         : GunTrait         ,
    "GUNMOD"      : GunModTrait      ,
    "MAGAZINE"    : MagazineTrait    ,
    "TOOL"        : ToolTrait        ,
};


/**具有某些特征的物品
 * @TJS-type object
 */
export type ItemTrait<T extends keyof ItemTraitMap> = ItemBase &
Omit<ItemTraitMap[T],'trait_type'|'id'> &
{subtype:ItemTraitMap[T]['trait_type'][]};

/**任何物品 */
export type AnyItemTrait = AmmoTrait|GunTrait|ToolTrait|MagazineTrait|ComestibleTrait|ArmorTrait|GunModTrait;
/**任何物品ID */
export type AnyItemID = AnyItemTrait['id'];

/**任何物品 */
export type AnyItem = ItemBase&Partial<AnyItemTrait>;

/**任何物品的Flag */
export type AnyItemFlag = Exclude<AnyItemTrait['flags'],undefined>[number];