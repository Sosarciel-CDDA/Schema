# ITEM_CRAFT_AND_DISASSEMBLY.md 总结

## 文档概述

制作和拆解系统定义了物品的制作配方和拆解方法。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `recipe` | 制作配方 |
| `requirement` | 需求定义 |
| `uncraft` | 拆解配方 |
| `nested_category` | 嵌套配方分类 |

---

## recipe 字段

| 字段 | 说明 |
|------|------|
| `result` | 产物物品ID |
| `result_mult` | 产物数量 |
| `charges` | 产物电荷数 |
| `activity_level` | 活动强度 |
| `category` | 配方分类 |
| `subcategory` | 配方子分类 |
| `id_suffix` | ID后缀 |
| `variant` | 变体ID |
| `skill_used` | 使用的技能 |
| `skills_required` | 需求技能数组 |
| `difficulty` | 难度 |
| `time` | 制作时间 |
| `autolearn` | 自动学习 |
| `book_learn` | 书籍学习 |
| `batch_time_factors` | 批量时间因子 |
| `using` | 使用的需求/工具 |
| `qualities` | 巙具品质需求 |
| `tools` | 工具需求 |
| `components` | 材料需求 |
| `byproducts` | 副产品 |
| `delete_flags` | 删除的标志 |

| `proficiencies` | 熟练度需求 |

---

## requirement 字段

| 字段 | 说明 |
|------|------|
| `id` | 需求ID |
| `type` | 必须是 "requirement" |
| `components` | 材料需求数组 |

---

## uncraft 字段
| 字段 | 说明 |
|------|------|
| `result` | 拆解产物(通常为null) |
| `time` | 拆解时间 |
| `flags` | 拆解标志 |

---

## using 语法

```jsonc
"using": [ [ "req_a", 3 ], [ "req_b", 5 ] ]
```

表示需要3个req_a和物品和5个req_b的物品。

---

## components 语法

```jsonc
"components": [
    [ [ "item_a", 5 ] ],
    [ [ "item_b", 2 ], [ "item_c", 4 ] ]
]
```
表示需要5个item_a， 或 (2个item_b + 4个item_c)。

---

## Schema 类型引用

- `(ItemID)` - 物品ID引用
- `(SkillID)` - 技能ID引用
- `(RequirementID)` - 需求ID引用
- `(ProficiencyID)` - 熟练度ID引用
