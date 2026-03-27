# Schema 大类缺失分析计划

本文档用于追踪 `f:\Sosarciel\CDDA\Workspace\Schema\plan\summaries` 目录下总结文档的分析进度，检查现有 Schema 项目中缺失的大类定义。

## 进度说明
- [ ] 未开始
- [x] 已完成
- [~] 进行中

每完成一篇文档的分析，会在 `f:\Sosarciel\CDDA\Workspace\Schema\plan\Schema_Gap_Analysis.md` 中追加分析结果。

---

## 总结文件列表

### 核心系统
- [x] ARTIFACTS.md
- [x] BASECAMP.md
- [x] CLIMBING.md
- [x] EFFECTS_JSON.md
- [x] EFFECT_ON_CONDITION.md
- [x] EXAMINE.md
- [x] FACTIONS.md

### 物品系统
- [x] GUIDE_COMESTIBLES.md
- [x] ITEM.md
- [x] ITEM_CRAFT_AND_DISASSEMBLY.md
- [x] ITEM_SPAWN.md

### JSON规范
- [x] JSON_FLAGS.md
- [x] JSON_INFO.md
- [x] JSON_INHERITANCE.md
- [x] JSON_LOADING_ORDER.md
- [x] JSON_STYLE.md
- [x] JSON_TOOLS.md

### 魔法与战斗
- [x] MAGIC.md
- [x] MARTIALART_JSON.md
- [x] MONSTER_SPECIAL_ATTACKS.md

### 生物系统
- [x] MONSTERS.md
- [x] MUTATIONS.md

### NPC系统
- [x] NPCs.md
- [x] MISSIONS_JSON.md

### 地图系统
- [x] MAPGEN.md
- [x] OVERMAP.md
- [x] TER_FURN_TRANSFORM.md

### 其他系统
- [x] HELP_MENU.md
- [x] MOVE_MODE.md
- [x] OPTIONS.md
- [x] PRACTICE_RECIPES.md
- [x] PROFICIENCY.md
- [x] VITAMIN.md
- [x] WEATHER_TYPE.md

### JSON_Mapping_Guides
- [x] Guide_for_beginning_mapgen.md
- [x] Guide_for_intermediate_mapgen.md
- [x] JSON_ROOF_MAPGEN.md

---

## 统计

- 总文档数：37
- 已完成：37
- 进行中：0
- 未开始：0

---

## 分析结果

详见 [Schema_Gap_Analysis.md](./Schema_Gap_Analysis.md)

### 缺失类型汇总

| 优先级 | 数量 | 主要类型 |
|--------|------|----------|
| 高 | 8 | `relic_procgen_data`, `recipe_group`, `talk_topic`, `city_building`, `overmap_connection`, `damage_type`, `profession`, `construction` |
| 中 | 5 | `climbing_aid`, `ter_furn_transform`, `movement_mode`, `overmap_location`, `clothing_mod` |
| 低 | 12 | `help`, `ascii_art`, `dream`, `score`, `achievement`, `conduct` 等 |
