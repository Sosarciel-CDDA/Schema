import { CddaID, DescText } from "./GenericDefine";
import { ProficiencyID } from "./Proficiency";

/**武器类型ID */
export type WeaponCategoryID = CddaID<'WPCY'>|DefineWeaponCategoryID;

/** 武器类别定义 - 用于定义武器分类 */
export type WeaponCategory = {
    type: "weapon_category";
    /**武器类型唯一ID */
    id: (WeaponCategoryID);
    /**类别名称 */
    name: (DescText);
    /**使用此类武器时可能应用加成的熟练度列表
     * 参见熟练度文档获取更多细节
     */
    proficiencies?: ProficiencyID[];
};


/**预定义的武器类型ID 列表 */
export const DefineWeaponCategoryIDList = [
    "AUTOMATIC_RIFLES"      , //自动步枪
    "AUTOMATIC_PISTOLS"     , //自动手枪
    "KNIVES"                , //刀
    "BATONS"                , //警棍
    "FLAILS"                , //连枷
    "MACES"                 , //狼牙棒
    "MEDIUM_SWORDS"         , //中剑
    "LONG_SWORDS"           , //长剑
    "SHORT_SWORDS"          , //短剑
    "QUARTERSTAVES"         , //长杖
    "CLAWS"                 , //爪
    "SHIVS"                 , //匕首
    "HOOKING_WEAPONRY"      , //钩形武器
    "SPEARS"                , //矛
    "UNARMED"               , //徒手
    "POLEARMS"              , //长柄武器
    "FENCING_WEAPONRY"      , //击剑武器
    "LONG_THRUSTING_SWORDS" , //长刺剑
    "BIONIC_WEAPONRY"       , //仿生武器
    "BIONIC_SWORDS"         , //仿生剑
    "GREAT_SWORDS"          , //大剑
    "GREAT_HAMMERS"         , //大锤
    "GREAT_AXES"            , //大斧
    "HAND_AXES"             , //手斧
    "WHIPS"                 , //鞭子
] as const;
/**预定义的武器类型 */
export type DefineWeaponCategoryID = typeof DefineWeaponCategoryIDList[number];
