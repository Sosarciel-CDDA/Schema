# JSON_INFO.md 总结

## 文档概述

JSON信息文档是核心参考文档，描述了大量JSON类型的通用字段和文件结构。**包含众多大类定义**。

---

## 大类列表

### 基础类型

| 类型 | 说明 |
|------|------|
| `ascii_art` | ASCII艺术 |
| `snippet` | 文本片段 |
| `addiction_type` | 成瘾类型 |
| `body_part` | 身体部位 |
| `limb_score` | 肢体分数 |
| `character_modifier` | 角色修正器 |

### 角色类型

| 类型 | 说明 |
|------|------|
| `bionic` | 仿生体(CBM) |
| `damage_type` | 伤害类型 |
| `dream` | 梦境 |
| `disease` | 疾病 |
| `mutation` / `trait` | 变异/特性 |
| `mutation_category` | 变异分类 |

### 物品相关

| 类型 | 说明 |
|------|------|
| `emit` | 发射器 |
| `item_group` | 物品组 |
| `item_category` | 物品分类 |
| `item_fault` | 物品故障 |
| `item_fault_fix` | 物品故障修复 |
| `material` | 材料 |

### 生物类型

| 类型 | 说明 |
|------|------|
| `monstergroup` | 怪物组 |
| `monster_faction` | 怪物派系 |
| `species` | 物种分类 |

### 职业类型

| 类型 | 说明 |
|------|------|
| `profession` | 职业 |
| `profession_group` | 职业组 |
| `hobby` | 爱好 |

### 其他类型

| 类型 | 说明 |
|------|------|
| `construction` | 建造 |
| `scent_type` | 气味类型 |
| `score` | 分数 |
| `achievement` | 成就 |
| `conduct` | 行为准则 |
| `skill` | 技能 |
| `tool_quality` | 工具品质 |
| `trap` | 陷阱 |
| `names` | 名字生成规则 |

### 载具类型

| 类型 | 说明 |
|------|------|
| `vehicle_group` | 载具组 |
| `vehicle_part` | 载具部件 |
| `vehicle` | 载具原型 |

### 地图类型

| 类型 | 说明 |
|------|------|
| `furniture` | 家具 |
| `terrain` | 地形 |
| `harvest` | 收割 |
| `harvest_drop_type` | 收割掉落类型 |
| `clothing_mod` | 服装修正 |
| `weakpoint_set` | 弱点集 |
| `json_flag` | JSON标志定义 |

---

## 通用属性

### copy-from 和 abstract

- `copy-from` - 从其他对象继承属性
- `abstract` - 定义抽象模板对象

### 单位格式

- 时间：`"1 h"`, `"30 m"`, `"1 d"`
- 体积：`"3 L"`, `"500 ml"`
- 重量：`"1 kg"`, `"500 g"`

### 可翻译字符串

```jsonc
"name": { "ctxt": "context", "str": "singular", "str_pl": "plural" }
```

---

## Schema 类型引用

- `(BodyPartID)` - 身体部位ID引用
- `(BionicID)` - 仿生体ID引用
- `(MaterialID)` - 材料ID引用
- `(SkillID)` - 技能ID引用
- `(DamageTypeID)` - 伤害类型ID引用
