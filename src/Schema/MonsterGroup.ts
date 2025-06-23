import { MonsterID } from "./Monster";
import { CddaID, Festival, Int, Period, Season, Time } from "./GenericDefine";
import { AmmoID } from "./Item";

/**怪物组ID */
export type MonsterGroupID = CddaID<'MONG'>;

/**怪物组条目定义 */
type MonsterGroupEntry = {
    /**怪物唯一ID */
    monster?: (MonsterID);
    /**子组唯一ID */
    group?: (MonsterGroupID);
    /**出现几率 (权重/组中总权重)  
     * @default 1  
     */
    weight?: Int;
    /**不再使用, 功能与weight完全相同 */
    freq?: Int;
    /**每个怪物应计数的数量, 当生成有限数量的怪物时  
     * @default 1  
     */
    cost_multiplier?: Int;
    /**此组中应一起生成的怪物最小和最大数量  
     * @default [1,1]  
     */
    pack_size?: [Int, Int];
    /**限制怪物生成的条件  
     * 多个时间条件 (白天, 夜晚, 黄昏, 黎明) 将组合在一起, 使任意一个条件都可使怪物生成有效  
     * 多个季节条件 (夏季, 冬季, 秋季, 春季) 将组合在一起, 使任意一个条件都可使怪物生成有效  
     * @example ["DUSK","DAWN","SUMMER"]  
     */
    conditions?: (Season | Period)[];
    /**此条目在经过此时间乘以进化缩放因子后变为活动状态 */
    starts?: (Time);
    /**此条目在经过此时间乘以进化缩放因子后变为非活动状态 */
    ends?: (Time);
    /**怪物在此组中生成时才有的属性 */
    spawn_data?: {
        /**怪物生成时携带的弹药类型和数量 */
        ammo?: Record<AmmoID, Int>;
    };
    /**如果存在, 此条目只能在指定事件期间生成  
     * @example "halloween"  
     */
    event?: (Festival);
};

/**怪物组定义 */
export type MonsterGroup = {
    type: "monstergroup";
    /**怪物组唯一ID */
    name: (MonsterGroupID);
    /**默认怪物, 用于表示怪物组  
     * @default 组中权重最高的怪物  
     */
    default?: (MonsterID);
    /**怪物条目数组 */
    monsters: MonsterGroupEntry[];
    /**检查是否不触发安全模式警告, 目前无关紧要 */
    is_safe?: boolean;
    /**检查该组是否只有普通动物, 目前无关紧要 */
    is_animal?: boolean;
    /**检查该组是否应随着游戏时间推移完全被另一个怪物组替换  
     * 不影响已生成的怪物, 因此大多被怪物进化取代  
     */
    replace_monster_group?: boolean;
    /**应替换此组的怪物组ID */
    new_monster_group_id?: (MonsterGroupID);
    /**组应被新组替换前的时间量, 以天为单位  
     * 最终替换日期计算为replacement_time * 进化因子  
     */
    replacement_time?: Int;
};