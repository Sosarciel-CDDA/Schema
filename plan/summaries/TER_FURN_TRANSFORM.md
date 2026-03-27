# TER_FURN_TRANSFORM.md 总结

## 文档概述

地形/家具转换定义了地形、家具、场地效果、陷阱的转换规则。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `ter_furn_transform` | 地形/家具转换，定义地形、家具、场地效果、陷阱的转换规则 |

---

## 关键字段

| 字段 | 说明 |
|------|------|
| `terrain` | 地形转换规则数组 |
| `furniture` | 家具转换规则数组 |
| `field` | 场地效果转换规则数组 |
| `traps` | 陷阱转换规则数组 |

---

## 转换规则格式

### 基本格式
```jsonc
{
  "result": "t_dirt",
  "valid_terrain": [ "t_sand" ],
  "message": "sandy!",
  "message_good": true
}
```

### 带权重的多结果
```jsonc
{
  "result": [ [ "t_dirt", 4 ], "t_grass" ],
  "valid_terrain": [ "t_sand" ],
  "message": "sandy!"
}
```

### 使用标志匹配
```jsonc
{
  "result": "t_dirt",
  "valid_flags": [ "DIGGABLE" ],
  "message": "digdug"
}
```

---

## 规则字段

| 字段 | 说明 |
|------|------|
| `result` | 转换结果ID或带权重的数组 |
| `valid_terrain` / `valid_furniture` / `valid_field` / `valid_traps` | 有效的源类型ID数组 |
| `valid_flags` | 有效的标志数组 |
| `message` | 转换时显示的消息 |
| `message_good` | 消息是否为好消息(默认true) |

---

## 使用方式

- **EOC**: `u_transform_radius` / `npc_transform_radius`
- **Mapgen**: `ter_furn_transforms` 字段
- **Spells**: 法术效果

---

## Schema 类型引用

- `(TerrainID)` - 地形ID引用
- `(FurnitureID)` - 家具ID引用
- `(FieldID)` - 场地效果ID引用
- `(TrapID)` - 陷阱ID引用
- `(FlagID)` - 标志ID引用
