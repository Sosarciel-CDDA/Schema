import { ParamsEoc } from "./Eoc";
import { CddaID, DescText, Int } from "./GenericDefine";



/**文本片段ID */
export type SnippetCategoryID = CddaID<'SNIP'>;

/**文本片段的某一段文本的ID */
export type SnippetTextID = CddaID<'SNIPT'>;

/** 片段定义 - 游戏存储多个文本实例并按需使用的方式 */
export type Snippet = {
    type: "snippet";
    /**片段的类别ID */
    category: (SnippetCategoryID);
    /** 片段文本内容, 可以是两种格式: 
     * 1. 带ID和元数据的复杂格式
     * 2. 纯文本数组的简单格式
     */
    text: SnippetText[] | string[];
};

/** 带元数据的片段文本 */
type SnippetText = {
    /** 此特定文本的ID */
    id: (SnippetTextID);
    /** 片段的名称, 实际上仅用于描述片段 */
    name?: (DescText);
    /** 如果调用此片段类别将使用的文本 */
    text: (DescText);
    /**检查此片段时将调用的effect_on_condition效果 */
    effect_on_examine?: (ParamsEoc);
    /**此特定片段的权重
     * 在此组中获得此片段的概率为 weight/total_weight
     * @example 10 // 在此组中概率为 10/13 ≈ 76%
     */
    weight?: Int;
};

/** 片段使用示例 */
type SnippetExamples = {
    /** 带ID和元数据的复杂格式示例 */
    example1: {
        type: "snippet",
        category: "test_breads",
        text: [
            {
                id: "bread1",
                name: "flatbread because i love flatbread",
                text: "flatbread",
                effect_on_examine: ["effect_on_condition"],
                weight: 10
            },
            { id: "bread2", text: "yeast bread" },
            { id: "bread3", text: "cornbread" },
            { id: "bread4", text: "fruit bread" }
        ]
    },
    
    /** 纯文本数组的简单格式示例 */
    example2: {
        type: "snippet",
        category: "test_breads", 
        text: [
            "flatbread",
            "yeast bread",
            "cornbread",
            "fruit bread"
        ]
    }
};