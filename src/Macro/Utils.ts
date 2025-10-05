import { GAME_PATH } from '@/src/Util';
import { fileMacro, regionMacro } from '@zwa73/dev-utils';
import { MPromise, UtilFT } from '@zwa73/utils';
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
export async function extractDefineIdList(arg:{
    /**输出的类型名 */
    typeName:string;
    /**输出的目录名 */
    dirName?:string;
    /**读取的来源文件
     * 路径将以gamepath为起点
     */
    sourceFileGlob:string|string[];
    /**转换函数
     * 需自行控制行尾逗号
     */
    func:(filepath:string)=>MPromise<MPromise<string>[]>;
}){
    const {typeName,sourceFileGlob,func,dirName} = arg;

    const extractName = `ExtractDefine${typeName}`;

    const sourceFileList = await UtilFT.fileSearchGlob(GAME_PATH,sourceFileGlob);

    //const contextList = await Promise.all(sourceFileList.map(fp=>fs.promises.readFile(path.join(info.gamepath,fp),'utf-8')));
    const exportStringList = await Promise.all((await Promise.all(sourceFileList.map(fp => func(fp)))).flat());
    const exportList = exportStringList.join('\n    ');
    return fileMacro(() => `
/**从文件提取的预定义的${typeName} 列表*/
export const ${extractName}List = [
    ${exportList}
] as const;
/**从文件提取的预定义的${typeName} */
export type ${extractName} = typeof ${extractName}List[number];
`.trim(),{filePath:path.join(dirName ? path.join(EXTRACT_DIR,dirName) : EXTRACT_DIR,`${typeName}.ts`)})
}

/**生成index */
export async function createExtractIndex(arg:{
    /**输出的目录名 */
    dirName?:string;
}){
    const {dirName} = arg;
    const fixedDir = dirName ? path.join(EXTRACT_DIR,dirName) : EXTRACT_DIR;
    const fileList = await fs.promises.readdir(fixedDir);
    const str = fileList.map(file=>{
        const {name} = path.parse(file);
        return `export * from './${name}';`;
    }).join('');
    await fs.promises.writeFile(path.join(fixedDir,'index.ts'),str);
}


export async function expandTalkVar(arg:{
    /**读取的来源文件
     * 路径将以gamepath为起点
     */
    sourceFileGlob:string|string[];
}){
    const {sourceFileGlob} = arg;

    const regex = /export type (.+) = TalkerVar<[\s\S]+, '.+'>/
    return fileMacro(async ({text})=>{
        return ''
    },{filePath:sourceFileGlob,glob:true});

}
