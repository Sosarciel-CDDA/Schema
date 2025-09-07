import { CddaID, DescText, Int } from "./GenericDefine";



/**选项滑块ID */
export type OptionSliderID = CddaID<"OPTS">;

/**选项滑块 */
export type OptionSlider = {
    type: "option_slider";
    /**选项滑块唯一ID */
    id: (OptionSliderID);
    /**所对应的因编码 */
    context: "WORLDGEN";
    /**名称 */
    name: (DescText);
    /**默认值 */
    default?: number;
    /**滑块等级 */
    levels:OptionSliderLevel[];
}

type OptionSliderLevel = {
    /**此等级对饮的滑块值 */
    level: Int;
    /**此等级的名称 */
    name: (DescText);
    /**此等级的描述 */
    description: "100%";
    /**此等级的选项 */
    options: OptionSliderOption[];
};

/**选项滑块选项 列表 */
export const OptionSliderOptionTypeList = [
    { option: "CITY_SIZE"                   , type: "int"   }, // 城市规模
    { option: "CITY_SPACING"                , type: "int"   }, // 城市间距
    { option: "MONSTER_SPEED"               , type: "int"   }, // 怪物速度 100 为 100%
    { option: "MONSTER_RESILIENCE"          , type: "int"   }, // 怪物耐性 100 为 100%
    { option: "SPAWN_DENSITY"               , type: "float" }, // 怪物密度 1 为 100%
    { option: "EVOLUTION_INVERSE_MULTIPLIER", type: "float" }, // 怪物进化速度 1 为 100%
    { option: "ITEM_SPAWNRATE"              , type: "float" }, // 物品生成倍率 1 为 100%
    { option: "NPC_SPAWNTIME"               , type: "float" }, // NPC生成间隔 默认4 越大越慢
] as const satisfies ReadonlyArray<{readonly option:string,readonly type:"int"|"float"}>;
/**选项滑块选项 */
export type OptionSliderOptionType = typeof OptionSliderOptionTypeList[number];

type OptionSliderOption = OptionSliderOptionType&{ val: number };