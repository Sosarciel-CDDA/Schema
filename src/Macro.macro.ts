import {UtilMacro} from '@zwa73/dev-utils';
import { regionMacro } from '@zwa73/dev-utils';
import fs from 'fs';
import path from 'pathe';

UtilMacro.exportComment('src/**/*.ts');


// EocEffect目录路径
const SRC_DIR = path.join(__dirname);
const SCHEMA_DIR = path.join(SRC_DIR,'Schema');
const EOC_DIR = path.join(SCHEMA_DIR,'Eoc');
const Item_DIR = path.join(SCHEMA_DIR,'Item');

/**生成TypeList并导出 */
function exportTypeList(arg:{
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

// 使用宏生成EocEffectList
void (async () => {
    void exportTypeList({
        listName:'EocEffectList',
        targetFile:path.join(EOC_DIR,"EocEffect","EocEffectIndex.ts"),
        typeFileList:[
            path.join(EOC_DIR,"EocEffect","EocEffect.ts"),
            path.join(EOC_DIR,"EocEffect","GenericEffect.ts"),
            path.join(EOC_DIR,"EocEffect","CharacterEffect.ts"),
            path.join(EOC_DIR,"EocEffect","ItemEffect.ts"),
        ],
        region:'Eoc效果表导出'
    });
    void exportTypeList({
        listName:'BoolOperateList',
        targetFile:path.join(EOC_DIR,"VariableObject","BoolObjectIndex.ts"),
        typeFileList:[path.join(EOC_DIR,"VariableObject","BoolObject.ts")],
        region:'BoolOperate导出'
    });
    void exportTypeList({
        listName:'StrOperateList',
        targetFile:path.join(EOC_DIR,"VariableObject","StringObjectIndex.ts"),
        typeFileList:[path.join(EOC_DIR,"VariableObject","StringObject.ts")],
        region:'StrOperate导出'
    });
    void exportTypeList({
        listName:'UseActionList',
        targetFile:path.join(Item_DIR,"UseAction","UseActionIndex.ts"),
        typeFileList:[path.join(Item_DIR,"UseAction","UseAction.ts")],
        region:'UseAction导出'
    });

})();