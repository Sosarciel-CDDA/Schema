# BASECAMP.md 总结

## 文档概述

基地(Basecamp)系统定义了玩家可建造和升级的据点，包含升级路径、配方组和地图生成。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `recipe` | 配方（扩展字段用于基地建设） |
| `mapgen` | 地图生成（包含 `update_mapgen_id`, `nested_mapgen_id`） |
| `recipe_group` | 配方组，定义基地可用配方和升级路径 |

---

## 配方扩展字段

| 字段 | 说明 |
|------|------|
| `construction_blueprint` | 地图更新ID |
| `construction_name` | 升级任务名称 |
| `blueprint_provides` | 升级后提供的功能 |
| `blueprint_requires` | 升级所需前置条件 |
| `blueprint_excludes` | 阻止升级的条件 |
| `blueprint_resources` | 升级后添加的资源物品 |
| `blueprint_parameter_names` | 参数化地图生成的人可读名称 |
| `blueprint_needs` | 蓝图需求（可自动计算） |

---

## 特殊配方组

- `all_faction_base_types` - 所有基地类型
- `all_faction_base_expansions` - 所有基地扩展

---

## blueprint_provides 特殊ID

| ID | 效果 |
|------|------|
| `bed` | 每2点允许一个扩展（最多8个） |
| `tool_storage` | 解锁存储工具任务 |
| `radio` | 延长无线电范围 |
| `pantry` | 提高食物分配效率 |
| `gathering` | 解锁收集材料任务 |
| `farming` | 解锁农田相关任务 |
| `kitchen` | 显示COOK配方组 |
| `blacksmith` | 显示SMITH配方组 |
| `water_well` | 永久水源 |

---

## Schema 类型引用

- `(RecipeID)` - 配方ID引用
- `(MapgenID)` - 地图生成ID引用
- `(OvermapTerrainID)` - 大地图地形ID引用
- `(ItemID)` - 物品ID引用
