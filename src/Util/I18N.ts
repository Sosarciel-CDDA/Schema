import path from 'pathe';
import fs from 'fs';
import { memoize, PRecord, UtilFunc } from '@zwa73/utils';
import { BUILD_SETTING } from './Define';
//import gettextParser  from 'gettext-parser';



const gettextParser = UtilFunc.dynamicImport('gettext-parser');

/**描述性文本 */
type DescText = string|{
    /**单数名 */
    str?: string;
    /**复数名 */
    str_pl?: string;
    /**单复数共用名 */
    str_sp?: string;
    /**翻译上下文 */
    ctxt?: string;
};

export type LangFlag =
    | "ar"
    | "cs"
    | "da"
    | "de"
    | "el"
    | "es_AR"
    | "es_ES"
    | "fil_PH"
    | "fr"
    | "ga_IE"
    | "hu"
    | "id"
    | "is"
    | "it_IT"
    | "ja"
    | "ko"
    | "nb"
    | "nl"
    | "pl"
    | "pt_BR"
    | "ro"
    | "ru"
    | "sr"
    | "tr"
    | "uk_UA"
    | "zh_CN"
    | "zh_TW";

export const loadI18NData = memoize(async (langFlag:LangFlag)=>{
    const buildinfo = BUILD_SETTING;
    const gamePath = buildinfo.game_path;

    console.time('static loadI18NData');
    const langPatj = path.join(gamePath,'lang','mo',langFlag,'LC_MESSAGES','cataclysm-dda.mo');
    const dat = await fs.promises.readFile(langPatj);
    const table = (await gettextParser).mo.parse(dat);
    const out:PRecord<string,string>={};

    for (const k in table.translations) {
        const innerValues = table.translations[k];
        for (const ik in innerValues) {
            const v = innerValues[ik];
            out[v.msgid] = v.msgstr[0];
        }
    }
    console.timeEnd('static loadI18NData');
    return out;
});

/**自动等待传入值的模板字符串 */
export async function awt(
    strings: TemplateStringsArray,
    ...values: Array<string | number | boolean | Promise<any>>
): Promise<string> {
    const resolved = await Promise.all(values);
    return strings.reduce((acc, str, i) => acc + str + (i < resolved.length ? resolved[i] : ""), "");
}

/**进行i18n翻译
 * @param langFlag - 语言标识
 * @param text     - 翻译文本
 * @param line     - 是否去除换行
 * @returns 翻译结果
 */
export const i18n = memoize(async (langFlag:LangFlag,text?:DescText,line:boolean=false)=>{
    if(text==undefined) return "";
    const strtext = typeof text == 'string' ? text : text.ctxt??text.str??text.str_sp??text.str_pl??"undefined";
    const data = await loadI18NData(langFlag);
    const result = data[strtext] ?? strtext;
    const fxres = result.startsWith("Project-Id-Version") ? strtext : result;
    return line ? fxres.replace(/(\n|\r\n)/g,'') : fxres;
});


/**进行zh i18n翻译
 * @param text     - 翻译文本
 * @param line     - 是否去除换行
 * @returns 翻译结果
 */
export const zh = (text?:DescText,line?:boolean)=> i18n("zh_CN",text,line);
/**进行zh i18n翻译 同时去除换行
 * @param text     - 翻译文本
 * @returns 翻译结果
 */
export const zhl = (text?:DescText)=> zh(text,true);