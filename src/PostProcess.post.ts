import {UtilDT, UtilMacro} from '@zwa73/dev-utils';



/**s
 * a
 */
UtilDT.fileMacro(({text})=>{
    return text
    .replace(/（(.+?)）/g,' ($1) ')
    .replace(/(，|、)/g,', ')
    .replace(/。/g,'. ')
    .replace(/：/g,': ')
    .replace(/；/g,'; ')
    .replace(/^(\s*?)(( \* )|(\/\*\*))((.(?!  ))+)$/gm,'$1$2$5  ');
},{
    glob:true,
    filePath:'./src/Schema/**/*.ts'
})