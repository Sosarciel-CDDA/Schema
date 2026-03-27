# Guide_for_beginning_mapgen.md 总结

## 文档概述

地图生成入门指南，介绍基础地图生成概念、文件结构和创建流程。**无新大类定义**，为教程文档。

---

## 核心概念

### 特殊建筑 vs 城市建筑

| 类型 | 说明 |
|------|------|
| 特殊建筑(Special) | 城市外生成，需额外配置(距离城市、有效地形等) |
| 城市建筑(City Building) | 城市内生成，可单OMT或多OMT |

---

## 必需文件

| 文件 | 说明 |
|------|------|
| `data/json/mapgen/` | 地图生成蓝图 |
| `data/json/overmap/overmap_terrain/` | 大地图地形定义 |
| `specials.json` / `multitile_city_buildings.json` | 链接各Z层和OMT |
| `regional_settings.json` | 城市建筑生成配置 |

---

## 可选文件

| 文件 | 说明 |
|------|------|
| `mapgen_palettes/` | 可复用的地图生成模板 |

---

## mapgen 元数据

| 字段 | 说明 |
|------|------|
| `type` | 必须为 `mapgen` |
| `om_terrain` | 内部地图名称 |
| `weight` | 生成权重 |

---

## object 数据

| 字段 | 说明 |
|------|------|
| `fill_ter` | 填充地形 |
| `rows` | ASCII地图数组 |
| `terrain` | 地形符号映射 |
| `furniture` | 家具符号映射 |

---

## Schema 类型引用

无新类型定义。
