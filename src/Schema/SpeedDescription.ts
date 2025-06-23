import { CddaID, DescText, Float } from "./GenericDefine";


/**速度描述ID */
export type SpeedDescriptionID = CddaID<'SPDESC'>;


/**速度描述定义 - 用于描述玩家与怪物速度比值的文本 */
export type SpeedDescription = {
    type: "speed_description";
    /**速度描述的唯一标识符 */
    id: (SpeedDescriptionID);
    /**速度阈值及其描述数组 
     * 值比较逻辑是 player_tiles_per_turn / monster_speed_rating
     * 怪物速度评级是 effective_speed / 100
     * effective_speed等于怪物速度, 但leap能力会使其增加50
     */
    values?: SpeedValue[];
};

/**速度阈值及其描述 */
type SpeedValue = {
    /**速度阈值(必需)
     * 当前比值为 player_tiles_per_turn / monster_speed_rating
     * 避免定义重复值, 因为其中一个将不会被调用
     */
    value: Float;
    /**该速度阈值对应的描述文本
     * 可以是单个字符串或字符串数组(随机选择)
     */
    descriptions?: DescText | DescText[];
};

/**重要说明: 
 * 1. 值从高到低检查, 定义顺序不重要(会被排序), 但建议保持有序
 * 2. 包含0.00值很重要但非必需, 用于处理比值为0的特殊情况
 *    (如怪物有MF_IMMOBILE标志)
 * 3. 如果比值为0且不存在0.00值, 将返回空字符串
 */
type SpeedDescriptionNotes = {
    example: SpeedDescription & {
        values: [
            {
                value: 1.40,
                descriptions: "Absurdly faster than you"
            },
            {
                value: 1.00,
                descriptions: [
                    "Roughly around the same speed",
                    "At a similar pace as you"
                ]
            },
            {
                value: 0.01,
                descriptions: [
                    "Barely moving",
                    "Is it even alive?"
                ]
            },
            {
                value: 0.00,
                descriptions: ["It's immobile"]
            }
        ]
    }
};
