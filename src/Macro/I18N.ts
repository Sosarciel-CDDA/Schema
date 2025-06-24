import path from 'pathe';
import fs from 'fs';
import { memoize, PRecord, UtilFunc } from '@zwa73/utils';
//import gettextParser  from 'gettext-parser';
import { loadBuildInfo } from './Utils';
import { DescText } from 'Schema/GenericDefine';



const gettextParser = UtilFunc.dynamicImport('gettext-parser');

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
    const buildinfo = await loadBuildInfo();
    const gamePath = buildinfo.gamepath;

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

export const i18n = memoize(async (langFlag:LangFlag,text:DescText)=>{
    const strtext = typeof text == 'string' ? text : text.ctxt??text.str??text.str_sp??text.str_pl??"undefined";
    const data = await loadI18NData(langFlag);
    const result = data[strtext] ?? strtext;
    return result;
});

export const zhcn = (text:DescText)=> i18n("zh_CN",text);