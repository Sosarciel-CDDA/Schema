import { regionMacro } from '@zwa73/dev-utils';
import fs from 'fs';
import path from 'pathe';

// EocEffect目录路径
export const SRC_DIR = path.join(__dirname,'..');
export const SCHEMA_DIR = path.join(SRC_DIR,'Schema');
export const EOC_DIR = path.join(SCHEMA_DIR,'Eoc');
export const Item_DIR = path.join(SCHEMA_DIR,'Item');

/**生成TypeList并导出 */
export function exportTypeList(arg:{
    region:string;
    listName:string;
    /**生成的list所在文件 */
    targetFile:string;
    /**type文件列表 需与 targetFile 在同一目录下 */
    typeFileList:string[];
}) {
    const {listName,targetFile,typeFileList: typeFile,region} = arg;

    return regionMacro(region,async () => {
        // 收集所有EocEffect类型
        const typeList: {
            from:string;
            name:string;
            cmt:string;
        }[] = [];

        for (const filePath of typeFile) {
            const content = (await fs.promises.readFile(filePath, 'utf-8')).replace(/\r\n/g,'\n');

            // 匹配类型定义和注释
            const typeMatches = content.matchAll(
                /\/\*\*([\s\S]*?)\*\/\s*export\s*?type\s+([A-Za-z0-9_]+)\s*=[\s\S]+?\n\n/g);

            for (const match of typeMatches) {
                const comment = match[1].trim();
                const typeName = match[2].trim();

                typeList.push({
                    from:filePath,
                    name:typeName,
                    cmt:comment.split('\n')[0].trim(),
                });
            }
        }

        // 生成EocEffectList定义
        return `${typeList
            .reduce((acc,cur)=>acc.includes(cur.from) ? acc : [...acc,cur.from],[] as string[])
            .map(from=>`import {${typeList.filter(t=>t.from==from).map(t=>t.name).join(', ')}} from './${path.parse(from).name}'`)
            .join('\n')}
/**${region} */
export type ${listName} = [
    ${typeList.map(type => `${type.name.padEnd(24, ' ')},//${type.cmt}`).join('\n    ')}
];`;
    },{filePath:targetFile})
}