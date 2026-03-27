# MUTATIONS.md 总结

## 文档概述

变异/特性系统定义了角色的基因突变和先天特性，包括变异机制、阈值系统和各种变异效果。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `mutation` / `trait` | 变异/特性，定义变异效果、视觉、护甲、激活能力等 |
| `mutation_category` | 变异分类 |
| `mutation_branch` | 变异分支 |

---

## 变异机制

### 变异原和引物
- **Mutagen(变异原)** - 核心营养素，启动和维持变异
- **Primer(引物)** - 影响变异方向，每种变异分类有对应引物
- **Purifier(净化剂)** - 人类引物，用于移除其他变异

### 阈值(Threshold)
- 每个变异分类有对应的阈值变异
- 跨越阈值后可获取最强大的变异
- 阈值跨越是永久的，无法跨越其他阈值

### 不稳定性(Instability)
- 隐藏值，决定变异好坏概率
- 非负面变异计1点，非本树变异计2点
- Robust Genetics特性可消除非本树惩罚

---

## 关键字段

| 字段 | 说明 |
|------|------|
| `category` | 变异分类 |
| `prereqs` / `prereqs2` | 前置变异 |
| `threshreq` | 阈值需求 |
| `cancels` | 取消的变异 |
| `changes_to` | 可变化为的变异 |
| `leads_to` | 可引导的变异 |
| `types` | 变异类型数组 |
| `points` | 角色创建点数 |
| `visibility` | 可见性(0-10) |
| `ugliness` | 丑陋度 |
| `active` | 是否可激活 |
| `cost` | 激活代价 |
| `time` | 激活持续时间 |
| `armor` | 护甲加成 |
| `encumbrance_always` | 永久累赘 |
| `restricts_gear` | 限制装备的身体部位 |
| `integrated_armor` | 整合护甲物品ID |

---

## 变异类型(types)

| 类型 | 说明 |
|------|------|
| `EYES` | 眼睛 |
| `VISION` | 视觉 |
| `HEARING` | 听觉 |
| `SKIN` | 皮肤 |
| `FUR` | 毛皮 |
| `ARMS` | 手臂 |
| `LEGS` | 腿部 |
| `TAIL` | 尾巴 |
| `HEAD` | 头部 |
| `TORSO` | 躯干 |

---

## Schema 类型引用

- `(MutationID)` - 变异ID引用
- `(MutationCategoryID)` - 变异分类ID引用
- `(BodyPartID)` - 身体部位ID引用
- `(ItemID)` - 物品ID引用
