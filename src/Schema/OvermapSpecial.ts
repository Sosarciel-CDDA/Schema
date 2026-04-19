import { FlagID } from "./Flag";
import { CddaID } from "./GenericDefine";
import { } from "./Mapgen";
import { OvermapTerrainID } from "./OvermapTerrain";

/**大地图特殊地点ID */
export type OverMapSpecialID = CddaID<"OMSPEC">;

type Direction = 'north' | 'south' | 'east' | 'west';
type OmTerrainIDWithDirection = `${OvermapTerrainID}_${Direction}`;

type GenPos = {point: [number, number, number];}
type OverMapGen = GenPos&{
    overmap?: OmTerrainIDWithDirection;
    locations?: string[];
}

export type OverMapSpecial = {
    type: "overmap_special";
    /**大地图特殊地点唯一ID */
    id: (OverMapSpecialID);
    overmaps: OverMapGen[];
    locations: ["field"];
    /**与道路的连接点 */
    connections: GenPos[];
    city_distance: [number, number];
    city_sizes: [number, number];
    /**刷新概率
     * 无unique类flag下行为等同于 个数 = randInt(occurrences[1],occurrences[0])
     * 有unique类flag时行为等同于 个数 = randFloat(0,1) < (occurrences[0] / occurrences[1])
     */
    occurrences: [number, number];
    flags: DefineOverMapSpecialFlagID[];
};

const DefineOverMapSpecialFlagIDList = [
    "MILITARY"       ,
    "GLOBAL_UNIQUE"  , // 全局唯一
    "OVERMAP_UNIQUE" , // 单个大地图唯一
    "MAN_MADE"       , // 标记在传统模式下会被移除的flag
] as const;
type DefineOverMapSpecialFlagID = typeof DefineOverMapSpecialFlagIDList[number] | FlagID;