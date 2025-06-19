import {UtilMacro} from '@zwa73/dev-utils';
import { regionMacro } from '@zwa73/dev-utils';
import fs from 'fs';
import path from 'pathe';

UtilMacro.exportComment('src/**/*.ts');


// EocEffect目录路径
const SRC_DIR = path.join(__dirname);
const SCHEMA_DIR = path.join(SRC_DIR,'Schema');
const EOC_DIR = path.join(SCHEMA_DIR,'Eoc');

///**生成EocEffectList的宏函数
// * 自动扫描并收集所有EocEffect类型
// */
//export function generateEocEffectList() {
//    return async () => {
//        // 获取目录下所有TypeScript文件
//        const files = await fs.promises.readdir(EOC_DIR);
//        const tsFiles = files.filter(file => file.endsWith('.ts'));
//
//        // 收集所有EocEffect类型
//        const effectTypes: string[] = [];
//        const effectComments: Record<string, string> = {};
//
//        for (const file of tsFiles) {
//            const filePath = path.join(EOC_DIR, file);
//            const content = await fs.promises.readFile(filePath, 'utf-8');
//
//            // 匹配类型定义和注释
//            const typeMatches = content.matchAll(/\/\*\*([\s\S]*?)\*\/\s*(?:export\s+)?type\s+([A-Za-z0-9_]+)\s*=/g);
//
//            for (const match of typeMatches) {
//                const comment = match[1].trim();
//                const typeName = match[2].trim();
//
//                // 检查是否是EocEffect类型（可以根据命名约定或其他特征来判断）
//                if (typeName.endsWith('Effect') || 
//                    content.includes(`${typeName},`) && content.includes('EocEffectList')) {
//                    effectTypes.push(typeName);
//
//                    // 提取注释中的描述部分
//                    const descMatch = comment.match(/([^@*\r\n]+)/);
//                    if (descMatch) {
//                        const desc = descMatch[1].trim();
//                        effectComments[typeName] = desc;
//                    }
//                }
//            }
//        }
//
//        // 生成EocEffectList定义
//        return `/**Eoc效果表 */
//export type EocEffectList = [
//    ${effectTypes.map(type => {
//        const comment = effectComments[type] ? `//${effectComments[type]}` : '';
//        return `${type.padEnd(20, ' ')}${comment}`;
//    }).join(',\n    ')}
//];`;
//    };
//}
//
//// 使用宏生成EocEffectList
//void (async () => {
//    void regionMacro("EocEffectList自动生成", generateEocEffectList(), {
//        filePath: "src/Schema/Eoc/EffectList.ts"
//    });
//})();