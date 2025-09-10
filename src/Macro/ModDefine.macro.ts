import {regionMacro} from '@zwa73/dev-utils';
import path from 'pathe';
import { SCHEMA_DIR, SRC_DIR } from 'Macro';
import { UtilFT } from '@zwa73/utils';
import fs from 'fs';

regionMacro("ModDefineID生成",async ()=>{
    const filelist = await UtilFT.fileSearchGlob(SCHEMA_DIR,'**/*.ts');
    const idlist = await Promise.all(filelist.map(async fp=>{
        const text = await fs.promises.readFile(fp,'utf-8');
        const match = text.match(/export type (\S+) = CddaID<('|")(.+)('|")>/);
        if(match==null) return;
        const idtext = match[1];
        const ids = match[3];
        return `
/**生成适用于此mod的 ${idtext} */
gen${idtext}(id:string):${idtext}{
    return \`\${this.MOD_PREFIX}_${ids}_\${id}\`;
}`.trim();
    }));
    return idlist.filter(v=>v!=undefined).join('\n');
},{filePath:path.join(SRC_DIR,'Util','ModDefine.ts')});