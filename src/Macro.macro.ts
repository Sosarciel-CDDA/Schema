import {UtilMacro} from '@zwa73/dev-utils';
import { regionMacro } from '@zwa73/dev-utils';
import fs from 'fs';
import path from 'pathe';

UtilMacro.exportComment('src/**/*.ts');


// EocEffect目录路径
const SRC_DIR = path.join(__dirname);
const SCHEMA_DIR = path.join(SRC_DIR,'Schema');
const EOC_DIR = path.join(SCHEMA_DIR,'Eoc');

/**生成TypeList并导出
 * @param typeFile   - 包含type的文件
 */
export function exportTypeList(arg:{
    region:string;
    targetFile:string;
    listName:string;
    typeFile:string[];
}) {
    const {listName,targetFile,typeFile,region} = arg;

    return regionMacro(region,async () => {
        // 收集所有EocEffect类型
        const typeList: string[] = [];
        const commentList: Record<string, string> = {};

        for (const file of typeFile) {
            const filePath = path.join(EOC_DIR, file);
            const content = (await fs.promises.readFile(filePath, 'utf-8')).replace(/\r\n/g,'\n');

            // 匹配类型定义和注释
            const typeMatches = content.matchAll(/\/\*\*([\s\S]*?)\*\/\s*(?:export\s+)?type\s+([A-Za-z0-9_]+)\s*=/g);

            for (const match of typeMatches) {
                const comment = match[1].trim();
                const typeName = match[2].trim();

                typeList.push(typeName);

                // 提取注释中的描述部分
                const descMatch = comment.match(/([^@*\r\n]+)/);
                if (descMatch) {
                    const desc = descMatch[1].trim();
                    commentList[typeName] = desc;
                }
            }
        }

        // 生成EocEffectList定义
        return `/**Eoc效果表 */
export type ${listName} = [
    ${typeList.map(type => {
        const comment = commentList[type] ? `//${commentList[type]}` : '';
        return `${type.padEnd(20, ' ')}${comment}`;
    }).join(',\n    ')}
];`;
    },{filePath:targetFile})
}

// 使用宏生成EocEffectList
void (async () => {
    void exportTypeList({
        listName:'EocEffectList',
        targetFile:"Eoc/EocEffect/EocEffectIndex.ts",
        typeFile:["Eoc/EocEffect/EocEffect.ts"],
        region:'Eoc效果表导出'
    });
})();