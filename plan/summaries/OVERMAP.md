# OVERMAP.md 总结

## 文档概述

大地图(Overmap)系统定义了游戏世界的宏观结构，包括地形、道路、建筑位置等。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `overmap_terrain` | 大地图地形 |
| `overmap_special` | 大地图特殊地点 |
| `city_building` | 城市建筑 |
| `overmap_connection` | 大地图连接(道路等) |
| `overmap_location` | 大地图位置定义 |
| `overmap_special_migration` | 大地图特殊地点迁移 |

---

## 大地图生成顺序

1. `populate_connections_out_from_neighbors` - 从邻居填充连接
2. `place_rivers` - 放置河流
3. `place_lakes` - 放置湖泊
4. `place_forests` - 放置森林
5. `place_swamps` - 放置沼泽
6. `place_ravines` - 放置沟壑
7. `place_cities` - 放置城市
8. `place_forest_trails` - 放置森林小径
9. `place_roads` - 放置道路
10. `place_specials` - 放置特殊地点
11. `place_forest_trailheads` - 放置森林小径入口
12. `polish_river` - 润色河流
13. `place_mongroups` - 放置怪物组
14. `place_radios` - 放置无线电

---

## overmap_terrain 字段

| 字段 | 说明 |
|------|------|
| `id` | 唯一ID |
| `name` | 显示名称 |
| `sym` | 符号 |
| `color` | 颜色 |
| `see_cost` | 视野代价 |
| `extras` | 额外类型(map_extra等) |
| `mondensity` | 怪物密度 |
| `has_bash_info` | 破坏信息 |
| `has_deconstruct_info` | 拆解信息 |
| `open_air` | 是否开放空间 |
| `connect_group` | 连接组 |

---

## overmap_special 字段

| 字段 | 说明 |
|------|------|
| `id` | 唯一ID |
| `overmaps` | 包含的大地图地形数组 |
| `locations` | 可放置的位置 |
| `city_distance` | 与城市的距离 |
| `city_sizes` | 城市大小要求 |
| `occurrences` | 出现次数 |
| `flags` | 标志 |

---

## overmap_connection 字段

| 字段 | 说明 |
|------|------|
| `id` | 唯一ID |
| `terrain` | 连接地形 |
| `locations` | 可放置位置 |
| `cost` | 放置代价 |

---

## Schema 类型引用

- `(OvermapTerrainID)` - 大地图地形ID引用
- `(OvermapSpecialID)` - 大地图特殊地点ID引用
- `(OvermapConnectionID)` - 大地图连接ID引用
- `(OvermapLocationID)` - 大地图位置ID引用
