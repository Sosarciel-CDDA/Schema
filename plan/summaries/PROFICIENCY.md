# PROFICIENCY.md 总结

## 文档概述

熟练度系统定义了角色的专业技能，如驾驶、外科、电子等，需要时间和资源学习。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `proficiency` | 熟练度，定义专业技能的名称、描述、学习时间、前置需求等 |

---

## 关键字段

| 字段 | 说明 |
|------|------|
| `id` | 唯一ID |
| `name` | 显示名称 |
| `description` | 描述 |
| `category` | 分类 |
| `can_learn` | 是否可学习(默认true) |
| `time_to_learn` | 学习时间(分钟) |
| `books_to_learn` | 可学习的书籍数组 |
| `default_time_to_learn` | 默认学习时间 |
| `required_profs` | 前置熟练度数组 |
| `bonuses` | 熟练度加成数组 |
| `fail_dummies` | 失败时的模拟消耗 |

---

## bonuses 字段

| 字段 | 说明 |
|------|------|
| `skill` | 技能ID |
| `bonus` | 加成值 |

---

## 学习方式

1. **书籍学习** - 通过阅读书籍学习
2. **NPC教学** - 通过NPC教学学习
3. **实践学习** - 通过实践学习(部分)

---

## 熟练度分类

- `combat` - 战斗
- `crafting` - 制作
- `survival` - 生存
- `social` - 社交
- `technical` - 技术
- `vehicle` - 载具

---

## Schema 类型引用

- `(ProficiencyID)` - 熟练度ID引用
- `(SkillID)` - 技能ID引用
- `(ItemID)` - 书籍物品ID引用
