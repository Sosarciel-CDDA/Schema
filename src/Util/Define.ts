import { UtilFT } from '@zwa73/utils';
import path from 'pathe';





const ROOT_DIR = path.join(__dirname,'..');
const DATA_DIR = path.join(ROOT_DIR,'data');
export const BUILD_SETTING = UtilFT.loadJSONFileSync(path.join(DATA_DIR,'buildinfo.json')) as {
    target_gfxpack:string,target_soundpack:string,game_path:string
};

export const GAME_DATA_DIR = path.join(BUILD_SETTING.game_path,'data');
export const GAME_JSON_DIR = path.join(GAME_DATA_DIR,'json');
export const GAME_MOD_DIR = path.join(GAME_DATA_DIR,'mods');