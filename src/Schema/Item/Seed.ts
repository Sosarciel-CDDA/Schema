import { CddaID, Time } from "../GenericDefine";
import { ItemTrait, ItemID } from "./ItemIndex";

/**Seed ID格式 */
export type SeedID = CddaID<"SEED">;

/**种子
 * 可以种植的植物种子
 */
export type SeedTrait = ItemTrait<"SEED",{
    /**标记具有 SEED 的特征, 用于补全 */
    "//SEED": true;
    /**植物名称
     * 从此种子生长的植物名称, 仅作为显示给用户的信息
     */
    plant_name: string;
    /**果实ID
     * 此种子将产生的果实的物品ID
     */
    fruit: (ItemID);
    /**是否产生种子
     * 如果为true, 收获植物时会生成种子 (与用于种植的物品类型相同)
     * 如果为false, 只生成果实, 不生成种子
     * @default true
     */
    seeds?: boolean;
    /**副产品列表
     * 收获时应生成的其他物品
     */
    byproducts?: (ItemID)[];
    /**生长时间
     * 植物完全成熟所需的时间
     * 基于91天的季节长度 (大约为现实世界季节) 以提供更准确的较长季节长度
     * 注意: 生长时间稍后会根据season_length选项进行转换
     * 值91表示3个完整季节, 值30表示1个季节
     */
    grow: (Time);
    /**果实除数
     * 最终产生的果实电荷数量除以此数字
     * 仅在果实物品按电荷计数时有效
     * @default 1
     */
    fruit_div?: number;
    /**所需地形标志
     * 种子种植所需的地形和家具标志
     * @default "PLANTABLE"
     */
    required_terrain_flag?: string;
}>;
