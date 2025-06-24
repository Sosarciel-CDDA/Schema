import { regionMacro } from '@zwa73/dev-utils';
import { MPromise } from '@zwa73/utils';
import fs from 'fs';
import path from 'pathe';

// EocEffect目录路径
export const SRC_DIR = path.join(__dirname,'..');
export const SCHEMA_DIR = path.join(SRC_DIR,'Schema');
export const EOC_DIR = path.join(SCHEMA_DIR,'Eoc');
export const Item_DIR = path.join(SCHEMA_DIR,'Item');

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

/**生成数组 */
export async function buildDefineList(arg:{
    region:string;
    /**输出的类型名 */
    typeName:string;
    /**生成的list所在文件 */
    targetFile:string;
    /**读取的来源文件 */
    sourceFileList:string[];
    /**转换函数 */
    func:(content:string)=>MPromise<string[]>;
}){
    const {typeName,targetFile,sourceFileList,region,func} = arg;
    const contextList = await Promise.all(sourceFileList.map(fp=>fs.promises.readFile(fp,'utf-8')));
    const exportStringList = (await Promise.all(contextList.map(context => func(context)))).flat();
    const exportList = exportStringList.map(str=>`"${str}"`).join(',\n    ');
    return regionMacro(region,() => `
/**${region} 列表*/
const ${typeName}List = [
    ${exportList}
] as const;
/**${region} 列表*/
type ${typeName} = typeof ${typeName}List[number];
`.trim(),{filePath:targetFile})
}