# MAPGEN.md 总结

## 文档概述

地图生成系统定义了游戏世界中建筑和地形的生成规则，包括地图生成方法、对象定义和调色板系统。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `mapgen` | 地图生成定义 |
| `palette` | 调色板，可复用的地图生成模板 |
| `update_mapgen` | 更新地图生成 |

---

## 地图生成方法

| 方法 | 说明 |
|------|------|
| JSON | 使用JSON数组和对象定义 |
| Nested Mapgen | 小型地图块覆盖部分链接地图 |
| Builtin | 硬编码函数(不推荐) |

---

## mapgen 关键字段

| 字段 | 说明 |
|------|------|
| `om_terrain` | 大地图地形ID(必需) |
| `weight` | 生成权重 |
| `method` | 生成方法 |
| `object` | 地图对象定义 |
| `rotation` | 旋转角度 |
| `predecessor_mapgen` | 前置地图生成 |

---

## object 内容

| 字段 | 说明 |
|------|------|
| `fill_ter` | 填充地形 |
| `rows` | ASCII地图数组 |
| `terrain` | 地形符号映射 |
| `furniture` | 家具符号映射 |
| `set` | 设置数组(点/线/方形) |
| `place_monster` | 放置怪物 |
| `place_monsters` | 放置怪物组 |
| `place_npcs` | 放置NPC |
| `place_item` | 放置物品 |
| `place_liquids` | 放置液体 |
| `items` | 物品组生成 |
| `monsters` | 怪物组生成 |
| `vehicles` | 载具生成 |
| `traps` | 陷阱生成 |
| `fields` | 场地效果(烟雾/气体/血液) |
| `vendingmachines` | 自动售货机 |
| `gaspumps` | 加油泵 |
| `toilets` | 厕所 |
| `signs` | 标志牌 |
| `graffiti` | 涂鸦 |
| `zones` | 区域定义 |
| `ter_furn_transforms` | 地形/家具转换 |

---

## 调色板(palette)

调色板是可复用的地图生成模板，可在多个mapgen中引用。

```jsonc
{
  "type": "palette",
  "id": "roof_palette",
  "terrain": { ... },
  "furniture": { ... }
}
```

---

## 嵌套地图生成

使用 `nested_mapgen_id` 引用其他地图生成：

```jsonc
{
  "nested_mapgen_id": "nested_house_room",
  "x": 5,
  "y": 10
}
```

---

## Schema 类型引用

- `(OvermapTerrainID)` - 大地图地形ID引用
- `(TerrainID)` - 地形ID引用
- `(FurnitureID)` - 家具ID引用
- `(MonsterID)` / `(MonsterGroupID)` - 怪物/怪物组ID引用
- `(ItemID)` / `(ItemGroupID)` - 物品/物品组ID引用
- `(VehicleID)` / `(VehicleGroupID)` - 载具/载具组ID引用
- `(TrapID)` - 陷阱ID引用
- `(PaletteID)` - 调色板ID引用
