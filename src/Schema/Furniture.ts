import { CddaID, DescText, Float, Int, LookLikeID, Volume } from "./GenericDefine";
import { AnyItemID } from "./Item";
import { FlagID } from "./Flag";
import { CommonToFurnitureAndTerrain } from "./CommonToFurnitureAndTerrain";


/**家具ID */
export type FurnitureID = CddaID<'FURN'>;

/**家具定义 */
export type Furniture = CommonToFurnitureAndTerrain<{
    type: "furniture";
    /**家具唯一ID */
    id: (FurnitureID);
    /**酒桶容量  
     * 定义某些具有液体存储功能的家具的容量, 这类家具通常有硬编码的交互逻辑
     * @example "60 L"
     */
    keg_capacity?: (Volume);
    /**部署物品ID
     * 允许玩家与家具互动以"将其拆下" (将其转化为物品形式)
     */
    deployed_item?: (AnyItemID);
    /**移动所需力量(负值表示不可移动) */
    required_str?: Int;
    /**家具标志 
     * @example ["TRANSPARENT", "BASHABLE", "FLAMMABLE_HARD"]
     */
    flags?: FlagID[];
    /**制造伪物品ID
     * 该家具视作某工具使用, 可在附近进行相关合成
     */
    crafting_pseudo_item?: (AnyItemID);
    /**工作台数据
     * 表示该家具为可用工作台
     * 需要指定速度倍数, 质量和体积上限
     * 超过上限将减缓速度
     * 必须配合 "workbench" examine_action 使用
     */
    workbench?: (WorkbenchData);
    /**手术技能乘数
     * 站在该家具旁进行手术时, 应用的手术技能倍率
     */
    surgery_skill_multiplier?: Float;
}>;


/**工作台数据 */
type WorkbenchData = {
    /**制作速度乘数 */
    multiplier: Float;
    /**允许的最大质量 */
    mass: Int;
    /**允许的最大体积 
     * @example "50L"
     */
    volume: (Volume);
};