# Schema 大类缺失分析报告

本文档记录对 CDDA JSON 文档总结的分析结果，检查现有 Schema 项目中缺失的大类定义。

---

## 分析汇总

### 已存在的类型 (91个)

从 `Schema/src/Schema/` 目录扫描到的现有类型定义：

| 分类 | 已存在类型 |
|------|-----------|
| 物品 | `ItemID`, `AmmoID`, `ArmorID`, `ArtifactID`, `BatteryID`, `BionicItemID`, `ComestibleID`, `GunID`, `GunModID`, `MagazineID`, `ToolID`, `PortID`, `ItemVariantID` |
| 生物 | `MonsterID`, `MonsterAttackID`, `SpeciesID`, `MonsterFactionID`, `MonsterGroupID` |
| 角色 | `MutationID`, `BionicID`, `EffectID`, `LimbScoreID`, `CharacterModID` |
| NPC | `NpcClassID`, `NpcInstanceID`, `NPCFactionID`, `MissionDefinitionID` |
| 地图 | `TerrainID`, `FurnitureID`, `MapgenID`, `NestedMapgenID`, `UpdateMapgenID`, `OvermapTerrainID`, `OverMapSpecialID`, `PaletteID`, `TrapID` |
| 制作 | `RecipeID`, `RecipeCategoryID`, `RecipeSubCategoryID`, `RequirementID`, `ToolQualityID` |
| 载具 | `VehicleID`, `VehiclePartID` |
| 魔法 | `SpellID`, `EnchantmentID`, `MagicTypeID`, `EocID` |
| 战斗 | `MartialArtID`, `MartialArtBuffID`, `TechniqueID`, `TechniqueEffectID`, `AttackVectorID` |
| 世界 | `WeatherTypeID`, `VitaminID`, `ScentTypeID`, `EmitID`, `FieldTypeID` |
| 其他 | `BodyPartID`, `SubBodyPartID`, `SkillID`, `ProficiencyID`, `HarvestID`, `MaterialID`, `FaultID`, `FaultFixID`, `ItemGroupID`, `ItemCategoryID`, `SnippetCategoryID`, `WeakpointSetID`, `WeaponCategoryID` 等 |

---

## 缺失的大类定义

### 核心系统

| 类型 | 说明 | 优先级 |
|------|------|--------|
| `relic_procgen_data` | 神器程序化生成数据 | 高 |
| `recipe_group` | 配方组，定义基地可用配方和升级路径 | 高 |
| `climbing_aid` | 攀爬辅助 | 中 |

### NPC系统

| 类型 | 说明 | 优先级 |
|------|------|--------|
| `talk_topic` | 对话主题 | 高 |
| `shopkeeper_consumption_rates` | 商店消耗率 | 低 |
| `shopkeeper_blacklist` | 商店黑名单 | 低 |

### 地图系统

| 类型 | 说明 | 优先级 |
|------|------|--------|
| `city_building` | 城市建筑 | 高 |
| `overmap_connection` | 大地图连接(道路等) | 高 |
| `overmap_location` | 大地图位置定义 | 中 |
| `overmap_special_migration` | 大地图特殊地点迁移 | 低 |
| `ter_furn_transform` | 地形/家具转换 | 中 |

### 其他系统

| 类型 | 说明 | 优先级 |
|------|------|--------|
| `help` | 帮助菜单分类 | 低 |
| `movement_mode` | 移动模式 | 中 |
| `proficiency` | 熟练度(需确认是否完整) | 高 |

### JSON_INFO.md 中的类型

| 类型 | 说明 | 优先级 |
|------|------|--------|
| `ascii_art` | ASCII艺术 | 低 |
| `snippet` | 文本片段 | 中 |
| `addiction_type` | 成瘾类型 | 中 |
| `damage_type` | 伤害类型 | 高 |
| `dream` | 梦境 | 低 |
| `disease` | 疾病 | 中 |
| `mutation_branch` | 变异分支 | 中 |
| `profession` | 职业 | 高 |
| `profession_group` | 职业组 | 中 |
| `hobby` | 爱好 | 中 |
| `construction` | 建造 | 高 |
| `score` | 分数 | 低 |
| `achievement` | 成就 | 低 |
| `conduct` | 行为准则 | 低 |
| `names` | 名字生成规则 | 低 |
| `clothing_mod` | 服装修正 | 中 |
| `json_flag` | JSON标志定义 | 中 |

---

## 需要扩展的现有类型

### Recipe 扩展字段

| 字段 | 说明 |
|------|------|
| `construction_blueprint` | 地图更新ID |
| `construction_name` | 升级任务名称 |
| `blueprint_provides` | 升级后提供的功能 |
| `blueprint_requires` | 升级所需前置条件 |
| `blueprint_excludes` | 阻止升级的条件 |
| `blueprint_resources` | 升级后添加的资源物品 |

---

## 无需新增的文档

以下文档经分析后无新大类定义：

- `GUIDE_COMESTIBLES.md` - 文件组织指南
- `JSON_FLAGS.md` - 标志定义，无新类型
- `JSON_INHERITANCE.md` - 机制说明文档
- `JSON_LOADING_ORDER.md` - 加载顺序说明
- `JSON_STYLE.md` - 编码规范
- `JSON_TOOLS.md` - 工具使用说明
- `OPTIONS.md` - 配置系统说明
- `PRACTICE_RECIPES.md` - 配方使用指南
- `Guide_for_beginning_mapgen.md` - 教程文档
- `Guide_for_intermediate_mapgen.md` - 教程文档
- `JSON_ROOF_MAPGEN.md` - 教程文档

---

## 统计

| 分类 | 数量 |
|------|------|
| 已存在类型 | 91 |
| 缺失类型 | 约 25 |
| 需扩展类型 | 1 (Recipe) |
| 无需新增 | 11 |

---

## 建议优先级

### 高优先级 (核心功能)
1. `relic_procgen_data` - 神器系统
2. `recipe_group` - 基地建设
3. `talk_topic` - NPC对话
4. `city_building` - 城市建筑
5. `overmap_connection` - 大地图连接
6. `damage_type` - 伤害类型
7. `profession` - 职业系统
8. `construction` - 建造系统

### 中优先级
1. `climbing_aid` - 攀爬辅助
2. `ter_furn_transform` - 地形转换
3. `movement_mode` - 移动模式
4. `overmap_location` - 大地图位置
5. `clothing_mod` - 服装修正

### 低优先级
1. `help` - 帮助菜单
2. `ascii_art` - ASCII艺术
3. `dream` - 梦境
4. `score`/`achievement`/`conduct` - 成就系统
