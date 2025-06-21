import { AmmoTrait } from "./Ammo";
import { ArmorTrait } from "./Armor";
import { ComestibleTrait } from "./Comestible";
import { GunTrait } from "./Gun";
import { GunModTrait } from "./GunMod";
import { MagazineTrait } from "./Magazine";
import { ToolTrait } from "./Tool";
import { GenericBase, GenericFlagID } from "./Generic";
import { Copyfrom, CopyfromVar } from "Schema/GenericDefine";
import { MaterialID } from "Schema/Material";




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

/**通用物品基础 */
type ItemBase = ({
    id:AnyItemID;
    "//"?:"uncopy";
} & GenericBase);


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
export type AnyItem = ItemBase&Partial<AnyItemTrait>&{subtype:ItemSubtype[]};
/**复制的物品 */
export type CopyFromItem = {
    /**复制目标 */
    "copy-from": (AnyItemID);
    id:AnyItemID;
    type: "ITEM";
    subtype?:ItemSubtype[];
    /**删除原物品的某些元素
     * 字段: 原物品字段值
     * @example
     * {flag: ["some_flag"]} //删除some_flag
     */
    delete?: {};
    /**扩展原物品的某些元素
     * 字段: 原物品字段值
     * @example
     * {flag: ["some_flag"]} //添加some_flag
     */
    extend?: {};
    /**在原物品的某些元素上做数值调整
     * @example
     * {
     *    "range": 2, //调整射程
     *    "damage": { "damage_type": "bullet", "amount": 4, "armor_penetration": 7 } //调整远程伤害
     * }
     */
    relative?: {};
    /**在原物品的某些元素上做数值倍率调整
     * @example
     * {
     *    "price": 0.7,//调整价格
     *    "damage": { "damage_type": "bullet", "amount": 0.9, "armor_penetration": 0.7 } //调整远程伤害
     * }
    */
    proportional?: {};
    /**将原物品的某些材质替换 原材质:替换材质
     * @example
     * { "lc_steel_chain": "hc_steel_chain" } //低碳钢换高碳钢
     */
    replace_materials?: {};
}&Partial<AnyItemTrait>&Partial<GenericBase>;

/**任何物品的Flag */
export type AnyItemFlag = Exclude<AnyItemTrait['flags'],undefined>[number];