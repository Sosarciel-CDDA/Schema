/**从文件提取的预定义的MindOverMatterClasslessSpellID 列表*/
export const ExtractDefineMindOverMatterClasslessSpellIDList = [
    "classless_toggleable_concentration_end", // [Ψ]结束专注 结束对所有维持的灵能的专注。引导这种灵能<color_green>总是成功</color>。
    "classless_specific_concentration_end", // [Ψ]结束专注(自选) 结束对某个正在维持的灵能的专注。引导这种灵能<color_green>总是成功</color>。
] as const;
/**从文件提取的预定义的MindOverMatterClasslessSpellID */
export type ExtractDefineMindOverMatterClasslessSpellID = typeof ExtractDefineMindOverMatterClasslessSpellIDList[number];