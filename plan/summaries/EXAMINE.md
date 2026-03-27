# EXAMINE.md 总结

## 文档概述

地形/家具检查动作定义了玩家检查地形或家具时执行的动作。

---

## 硬编码检查动作

| 动作 | 说明 |
|------|------|
| `aggie_plant` | 收获植物 |
| `autodoc` | 自动医生控制台 |
| `autoclave_empty` | 启动高压灭菌器 |
| `bars` | 穿过栏杆(需AMORPHOUS) |
| `bulletin_board` | 基地任务公告板 |
| `chainfence` | 跳过链式围栏 |
| `dirtmound` | 种植种子 |
| `elevator` | 使用电梯 |
| `finite_water_source` | 有限水源 |
| `gaspump` | 加油泵 |
| `harvest_plant_ex` | 收获作物 |
| `locked_object` | 锁定对象(可撬开) |
| `pit` / `pit_covered` | 坑洞覆盖/揭开 |
| `rubble` | 清理废墟 |
| `safe` | 破解保险箱 |
| `water_source` | 水源 |
| `mortar` | 迫击炮 |

---

## JSON定义的检查动作

### appliance_convert

| 字段 | 说明 |
|------|------|
| `furn_set` | 放置后设置的家具ID |
| `ter_set` | 放置后设置的地形ID |
| `item` | 家电基础物品ID |

### effect_on_condition

| 字段 | 说明 |
|------|------|
| `effect_on_conditions` | EOC ID数组或内联定义 |

### mortar

| 字段 | 说明 |
|------|------|
| `ammo` | 可用弹药类型数组 |
| `range` | 射程(米) |
| `condition` | 使用条件 |
| `aim_deviation` | 瞄准偏差 |
| `aim_duration` | 瞄准时间 |
| `flight_time` | 飞行时间 |
| `effect_on_conditions` | 射击后触发的EOC |

---

## Schema 类型引用

- `(FurnitureID)` - 家具ID引用
- `(TerrainID)` - 地形ID引用
- `(ItemID)` - 物品ID引用
- `(EOCID)` - EOC ID引用
