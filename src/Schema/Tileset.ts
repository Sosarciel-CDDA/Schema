import { Float, Int } from "./GenericDefine";


/**通用tileset配置 */
export type TilesetCfgBase = {
    /**每个瓦块的宽度 */
	sprite_width: Int;
    /**每个瓦块的高度 */
	sprite_height: Int;
    /**瓦块的x轴偏移 */
	sprite_offset_x?: Int;
    /**瓦块的y轴偏移 */
	sprite_offset_y?: Int;
    /**瓦块缩放率 */
	pixelscale?: Float;
}
/**通用sprite配置 */
export type SpriteCfgBase = {
    /**用于载入游戏的id */
    id:string;
    /**是动画 以weight为随机权重, 在随机起始位置循环播放Image  
     * weight为对应图片停留帧数  
     * 游戏默认60帧  
     */
    animated?: boolean;
    /**在游戏中随朝向旋转瓦块 */
    rotates?:boolean;
}
/**默认的tileset配置 */
export type DefTilsetCfg = {
    /**默认瓦块宽度 */
	width:Int;
    /**默认瓦块高度 */
	height:Int;
    /**默认缩放 */
	pixelscale:number;
    zlevel_height?:Int;
    iso?: false;
    retract_dist_min?: Int;
    retract_dist_max?: Int;
}

/**待打包的Tileset info */
export type PkgTilesetInfo = [DefTilsetCfg,
    ...(Record<`${string}.png`,PkgTilesetCfg>[])
];
/**完成打包的Tileset info */
export type TilesetInfo = {
    /**默认的tileset配置 */
    tile_info:[DefTilsetCfg];
    /**瓦块集信息 */
    "tiles-new": TilesetCfg[];
}

/**用于描述待打包的Tileset 单个png 的格式 */
export type PkgSpriteCfg = {
    /**前景 */
    fg:PkgImageCfg;
    /**背景 */
    bg?:PkgImageCfg;
} & SpriteCfgBase;
/**已打包的Tileset 单个png 的格式 */
export type SpriteCfg = {
    /**前景 */
    fg:ImageCfg;
    /**背景  
     * 单个值表示视野外遮罩  
     * [number, number]时第一个值表示底图, 第二个值为视野外遮罩  
     */
    bg?:ImageCfg;
} & SpriteCfgBase;

/**用于描述待打包的Tileset png合集 的格式 */
export type PkgTilesetCfg = {
    /**打包瓦块时, 每一横排的瓦块数 */
	sprites_across?: Int;
} & TilesetCfgBase;
/**打包完成的Tileset png合集 的格式 */
export type TilesetCfg = {
    /**由贴图文件夹为起点的文件目录 */
    file:string;
    /**瓦块信息集 */
    tiles:SpriteCfg[];
} & TilesetCfgBase;

/**未打包的图片格式 */
export type PkgImageCfg = string | PkgImageCfgObj | string[] | PkgImageCfgObj[];
/**未打包的图片对象格式 */
export type PkgImageCfgObj = {
    /**图片权重 */
    weight:number;
    /**图片 */
    sprite:string|string[];
};

/**已打包的图片格式 */
export type ImageCfg = number | ImageCfgObj | number[] | ImageCfgObj[];
/**已打包的图片对象格式 */
export type ImageCfgObj = {
    /**图片权重 */
    weight:number;
    /**图片序号 */
    sprite:number|number[];
}
