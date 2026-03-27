import { CddaID, Float, Int } from "../GenericDefine";
import { ItemTrait } from "./ItemIndex";

/**Wheel ID格式 */
export type WheelID = CddaID<"WHEEL">;

/**车轮
 * 定义载具车轮的属性
 */
export type WheelTrait = ItemTrait<"WHEEL",{
    /**标记具有 WHEEL 的特征, 用于补全 */
    "//WHEEL": true;
    /**越野评级
     * 车轮在越野时的性能乘数
     */
    wheel_offroad_rating?: Float;
    /**车轮地形修饰符
     * 根据地形标志修改车轮牵引力
     * 键为地形标志, 值为长度为2的数组:
     * 第一个元素是车轮在标志地形上的修饰符覆盖值
     * 第二个元素是车轮不在标志地形上的加性惩罚值
     * @example { "FLAT": [ 0, 5 ], "ROAD": [ 0, 2 ] }
     */
    wheel_terrain_modifiers?: Record<string, [Int, Int]>;
    /**接触面积
     * 车轮在正常条件下与地面接触的表面积, 以cm²为单位
     * 接触面积越大的车轮在越野时表现更好
     */
    contact_area?: Int;
    /**滚动阻力
     * 车轮的"可压缩性", 按SAE标准
     * 车轮滚动阻力随车辆重量和速度增加而线性增加
     */
    rolling_resistance?: Float;
    /**车轮直径 (英寸) */
    diameter?: Int;
    /**车轮宽度 (英寸) */
    width?: Int;
}>;
