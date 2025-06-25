import { fileMacro, regionMacro } from '@zwa73/dev-utils';
import { memoize, MPromise, UtilFT } from '@zwa73/utils';
import fs from 'fs';
import path from 'pathe';

// EocEffect目录路径
export const SRC_DIR = path.join(__dirname,'..');
export const DATA_PATH = path.join(SRC_DIR,'..','data');
export const INFO_PATH = path.join(DATA_PATH,'buildinfo.json');

export const SCHEMA_DIR = path.join(SRC_DIR,'Schema');
export const EOC_DIR = path.join(SCHEMA_DIR,'Eoc');
export const ITEM_DIR = path.join(SCHEMA_DIR,'Item');

export const EXTRACT_DIR = path.join(SRC_DIR,'Extract');


export const loadBuildInfo = memoize(async ()=>{
    return await UtilFT.loadJSONFile(INFO_PATH) as {gamepath:string};
});

/**生成TypeList并导出 */
export async function exportTypeList(arg:{
    region:string;
    listName:string;
    /**生成的list所在文件 */
    targetFile:string;
    /**type文件列表 需与 targetFile 在同一目录下 */
    typeFileList:string[];
}) {
    const {listName,targetFile,typeFileList,region} = arg;

    // 收集所有EocEffect类型
    const typeList = (await Promise.all(typeFileList.map(async filePath=>{
        const content = (await fs.promises.readFile(filePath, 'utf-8')).replace(/\r\n/g,'\n');

        // 匹配类型定义和注释
        const typeMatches = content.matchAll(
            /\/\*\*([\s\S]*?)\*\/\s*export\s*?type\s+([A-Za-z0-9_]+)\s*=[\s\S]+?\n\n/g);

        return await Promise.all([...typeMatches].map(async match =>{
            const comment = match[1].trim();
            const typeName = match[2].trim();

            return {
                from:filePath,
                name:typeName,
                cmt:comment.split('\n')[0].trim(),
            };
        }));
    }))).flat();

    const importList = typeList
        .reduce((acc,cur)=>acc.includes(cur.from) ? acc : [...acc,cur.from],[] as string[])
        .map(from=>`import {${typeList.filter(t=>t.from==from).map(t=>t.name).join(', ')}} from './${path.parse(from).name}'`)
        .join('\n');

    const exportList = typeList.map(type => `${type.name.padEnd(24, ' ')},//${type.cmt}`).join('\n    ');

    // 生成EocEffectList定义
    return regionMacro(region,() => `
${importList}
/**${region} */
export type ${listName} = [
    ${exportList}
];
`.trim(),{filePath:targetFile})
}

/**生成预定义的数组数据 */
export async function extractDefineList(arg:{
    comment:string;
    /**输出的类型名 */
    typeName:string;
    /**生成的list所在文件 */
    targetFile:string;
    /**读取的来源文件
     * 路劲将以gamepath为起点
     */
    sourceFileGlob:string|string[];
    /**转换函数
     * 需自行控制行尾逗号
     */
    func:(filepath:string)=>MPromise<MPromise<string>[]>;
}){
    const info = await loadBuildInfo();
    const {typeName,targetFile,sourceFileGlob,comment,func} = arg;

    const sourceFileList = await UtilFT.fileSearchGlob(info.gamepath,sourceFileGlob);

    //const contextList = await Promise.all(sourceFileList.map(fp=>fs.promises.readFile(path.join(info.gamepath,fp),'utf-8')));
    const exportStringList = await Promise.all((await Promise.all(sourceFileList.map(fp => func(fp)))).flat());
    const exportList = exportStringList.join('\n    ');
    return fileMacro(() => `
/**${comment} 列表*/
export const ${typeName}List = [
    ${exportList}
] as const;
/**${comment} */
export type ${typeName} = typeof ${typeName}List[number];
`.trim(),{filePath:path.join(EXTRACT_DIR,targetFile)})
}
