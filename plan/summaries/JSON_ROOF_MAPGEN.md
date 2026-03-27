# JSON_ROOF_MAPGEN.md 总结

## 文档概述

JSON屋顶指南，介绍如何为建筑添加屋顶地图。

---

## 需要编辑的文件

| 文件 | 说明 |
|------|------|
| `data/json/mapgen/[建筑名].json` | 建筑和屋顶的地图 |
| `data/json/overmap_terrain.json` | 建筑的大地图特性 |
| `data/json/regional_map_settings.json` | 建筑的大地图生成设置 |
| `data/json/overmap/multitile_city_buildings.json` | 链接建筑各层 |

---

## 屋顶地图制作

### om_terrain 命名

```jsonc
"om_terrain": "abstorefront",        // 主楼层
"om_terrain": "abstorefront_roof",   // 屋顶
```

### 屋顶地形

| 地形 | 说明 |
|------|------|
| `t_open_air` | 开放空间(建筑外) |
| `t_flat_roof` | 平顶屋顶 |

### 可选屋顶结构

- 排水沟(gutters)
- 烟囱(chimneys)
- 屋顶通风口(roof turbine vents)
- 梯子/楼梯(roof access)

---

## 链接主楼层和屋顶

```jsonc
{
  "type": "city_building",
  "id": "abstorefront",
  "locations": [ "land" ],
  "overmaps": [
    { "point": [ 0, 0, 0 ], "overmap": "abstorefront_north" },
    { "point": [ 0, 0, 1 ], "overmap": "abstorefront_roof_north" }
  ]
}
```

---

## 嵌套地图块

可使用 `data/json/mapgen/nested_chunks_roof.json` 中的预定义屋顶块。

---

## Schema 类型引用

无新类型定义。
