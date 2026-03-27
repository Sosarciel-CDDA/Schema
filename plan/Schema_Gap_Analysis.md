# Schema 大类缺失分析报告 (已验证)

本文档记录对 CDDA JSON 文档总结的分析结果，并通过搜索验证检查现有 Schema 项目中缺失的大类定义。

---

## 搜索验证结果

### 已存在类型 (搜索确认)

以下类型在报告中标记为缺失，但实际已存在：

| 类型 | 文件位置 | 状态 |
|------|----------|------|
| `talk_topic` | `TalkTopic.ts` | ✅ 已存在 |
| `damage_type` | `DamageType.ts` | ✅ 已存在 |
| `profession` | `Profession.ts` | ✅ 已存在 |
| `proficiency` | `Proficiency.ts` | ✅ 已存在 |
| `addiction_type` | `AddictionType.ts` | ✅ 已存在 |
| `snippet` | `Snippet.ts` | ✅ 已存在 |
| `json_flag` | `Flag.ts` | ✅ 已存在 |

---

## 确认缺失的大类定义

### 高优先级

| 类型 | 说明 | 验证状态 |
|------|------|----------|
| `relic_procgen_data` | 神器程序化生成数据 | ❌ 缺失 |
| `recipe_group` | 配方组，定义基地可用配方和升级路径 | ❌ 缺失 |
| `city_building` | 城市建筑 | ❌ 缺失 |
| `overmap_connection` | 大地图连接(道路等) | ❌ 缺失 |
| `construction` | 建造系统 | ❌ 缺失 |

### 中优先级

| 类型 | 说明 | 验证状态 |
|------|------|----------|
| `climbing_aid` | 攀爬辅助 | ❌ 缺失 |
| `ter_furn_transform` | 地形/家具转换 | ❌ 缺失 |
| `movement_mode` | 移动模式 | ❌ 缺失 |
| `overmap_location` | 大地图位置定义 | ❌ 缺失 |
| `clothing_mod` | 服装修正 | ❌ 缺失 |
| `disease` | 疾病 | ❌ 缺失 |
| `mutation_branch` | 变异分支 | ❌ 缺失 |
| `profession_group` | 职业组 | ❌ 缺失 |
| `hobby` | 爱好 | ❌ 缺失 |

### 低优先级

| 类型 | 说明 | 验证状态 |
|------|------|----------|
| `help` | 帮助菜单分类 | ❌ 缺失 |
| `ascii_art` | ASCII艺术 | ❌ 缺失 |
| `dream` | 梦境 | ❌ 缺失 |
| `score` | 分数 | ❌ 缺失 |
| `achievement` | 成就 | ❌ 缺失 |
| `conduct` | 行为准则 | ❌ 缺失 |
| `names` | 名字生成规则 | ❌ 缺失 |
| `shopkeeper_consumption_rates` | 商店消耗率 | ❌ 缺失 |
| `shopkeeper_blacklist` | 商店黑名单 | ❌ 缺失 |
| `overmap_special_migration` | 大地图特殊地点迁移 | ❌ 缺失 |

---

## 统计 (修正后)

| 分类 | 数量 |
|------|------|
| 已存在类型 | 98 (原91 + 7个误报) |
| 确认缺失类型 | 24 |
| 需扩展类型 | 1 (Recipe) |

---

## 建议优先级 (修正后)

### 高优先级 (核心功能)
1. `relic_procgen_data` - 神器系统
2. `recipe_group` - 基地建设
3. `city_building` - 城市建筑
4. `overmap_connection` - 大地图连接
5. `construction` - 建造系统

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
