import { DamageTypeID } from "./DamageType";
import { CddaID, DescText, Energy, Float, Volume } from "./GenericDefine";
import { VitaminID } from "./Vitamin";







/**材料ID */
export type MaterialID = CddaID<"MATE">;

/**材料 */
export type Material = {
    type: "material";
    /**材料唯一ID */
    id: (MaterialID);
    name: (DescText);
    /**密度 影响车辆碰撞损坏, 较致密的零件比较不致密的零件更具优势.  */
    density: number;
    /**材料未冷冻时的比热 (J/(g K))  
     * 默认 4.186 - 水  
     * @default 4.186
    */
    specific_heat_liquid: Float;
    /**材料冷冻时的比热 (J/(g K))  
     * 默认 2.108 - 水
     * @default 2.108
     */
    specific_heat_solid: Float;
    /**材料的熔化潜热 (J/g)
     * @default 334
     */
    latent_heat: number;
    /**材料的凝固点  
     * 该材料的凝固点 (C). 默认 0 C (32 F).  
     * @default 0
     */
    freezing_point: number;
    /**可食用
     * @default false
     */
    edible?:boolean;
    /**会腐烂
     * @default false
     */
    rotting?: boolean;
    /**作为护甲时每1厚度的伤害抗性 */
    resist: Record<DamageTypeID,number>;
    /**此材质物品被直接攻击时 物品的防御力 */
    chip_resist: number;
    /**描述材料损坏程度的形容词  
     * ["bruised", "mutilated", "badly mutilated", "thoroughly mutilated"]  
     */
    dmg_adj: (DescText)[];
    /**描述材料被砸坏的形容词  
     * "bruised"  
     */
    bash_dmg_verb: (DescText);
    /**描述材料被切割的形容词  
     * "sliced"  
     */
    cut_dmg_verb: (DescText);
    /**此材质含有的维生素  
     * [["calcium", 0.1], ["vitB", 1], ["iron", 1.3]];  
     */
    vitamins: [VitaminID,number][];
    /**是否导电 */
    conductive:boolean;
    /**是否强化？ */
    reinforces:boolean;
    /**是柔软材料 */
    soft:boolean;
    /**燃烧数据 */
    burn_data?: MateBurnData;
    /**燃料数据 */
    fuel_data?: FuelData
};

/**燃烧数据 */
export type MateBurnData ={
    /**是否免疫燃烧  */
    immune?: boolean;
    /**决定该材料增加火力的时间和强度.   
     * 负值会减少火中的燃料, 使火熄灭.   
     * 如果具有液体相 ID 的物品是易燃的, 则应由值 >= 200 的材料制成.   
     */
    fuel: number;
    /**决定该材质燃烧时产生多少烟雾 */
    smoke: number;
    /**如果非零且低于物品体积, 则按 volume_per_turn / 回合 燃烧体积
     */
    volume_per_turn?: (Volume);
    /**决定火灾将由该材料制成的物品转化为燃料的速度.   
     * 不影响给定提供的总燃料  
     */
    burn: number;
}[];

/**燃料数据 */
export type FuelData = {
    /**每单位燃料的能量 */
    energy: Energy;
    /**是类似 风力/太阳光 的无限能源 */
    perpetual?: boolean;
    /**可从什么地形上泵出 */
    pump_terrain?: string;
    /**燃料爆炸数据 */
    explosion_data?: {
        /**1/x 的概率因为 heat 类型伤害武器击中而爆炸 */
        chance_hot?: number;
        /**1/x 的概率因为 非heat 类型伤害武器击中而爆炸 */
        chance_cold?: number;
        /**爆炸威力 */
        factor: number;
        /**是否为燃烧性爆炸 */
        fiery?: boolean;
        /**爆炸威力 尺寸系数？*/
        size_factor?: number;
    }
};