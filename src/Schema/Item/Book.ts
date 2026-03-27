import { CddaID, Float, Int, Time } from "Schema/GenericDefine";
import { SkillID } from "Schema/Skill";
import { ProficiencyID } from "Schema/Proficiency";
import { MartialArtID } from "Schema/MartialArt";
import { ItemTrait } from "./ItemIndex";

/**Book ID格式 */
export type BookID = CddaID<"BOOK">;

/**书籍 */
export type BookTrait = ItemTrait<"BOOK",{
    /**标记具有 BOOK 的特征, 用于补全 */
    "//BOOK": true;
    /**这本书将训练到的最大技能等级 */
    max_level?: Int;
    /**无惩罚阅读此书所需的智力 */
    intelligence?: Int;
    /**单次阅读会话所需的时间. 一个整数将被读取为分钟, 或者可以使用时间字符串 */
    time?: (Time);
    /**阅读的士气奖励/惩罚 */
    read_fun?: Int;
    /**提升的技能 */
    skill?: (SkillID);
    /**章节数 (仅限娱乐类书籍), 每次阅读"消耗"一个章节. 没有剩余章节的书乐趣较少 (因为内容已经被角色所知)  */
    chapters?: Int;
    /**这本书按物品实例计算章节而不是按类型 (这本书代表一般种类的书籍, 如"论文集")  */
    generic?: boolean;
    /**学习所需的最低技能等级 */
    required_level?: Int;
    /**从这本书学到的武术; 与`skill`不兼容 */
    martial_art?: (MartialArtID);
    /**拥有这本书可以缓解缺乏熟练度的影响, 这是制作所必需的 */
    proficiencies?: BookProficiency[];
    /**书籍的flag */
    flags?: BookFlagID[];
}>;

/**书籍熟练度 */
type BookProficiency = {
    /**熟练度ID */
    proficiency: (ProficiencyID);
    /**使用此书熟练度的减速 - 缺乏熟练度的减速乘以此值
     * 例如对于`0.75`, 如果配方因缺乏熟练度增加10小时, 有书则为[10 * (1 - 0.75) = ] 2.5小时
     * 多本书叠加, 但以对数方式, 意味着拥有更多相同熟练度的书比一本好, 但永远不会比学习熟练度更好
     */
    time_factor?: Float;
    /**与`time_factor`工作方式相同 */
    fail_factor?: Float;
};

/**书籍可用的flag 列表 */
export const BookFlagIDList = [
    "INSPIRATIONAL"     , // 阅读这本书可以激发灵感, 提升士气
    "SKIP_LEVEL_TRANS"  , // 跳过等级转换要求
] as const;
/**书籍可用的flag */
export type BookFlagID = typeof BookFlagIDList[number];
