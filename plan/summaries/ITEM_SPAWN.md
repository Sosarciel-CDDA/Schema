# ITEM_SPAWN.md 总结

## 文档概述

物品生成系统定义了物品在世界中生成的规则，通过物品组(item_group)配置。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `item_group` | 物品组，定义物品生成的规则和概率 |

---

## subtype 枚举

| 值 | 说明 |
|------|------|
| `collection` | 集合，每个条目独立选择(概率0-100%) |
| `distribution` | 分布，加权列表，只选择一个条目 |
| `old` | 旧格式(默认) |

---

## 关键字段

| 字段 | 说明 |
|------|------|
| `entries` | 条目数组 |
| `items` | 物品简写数组 |
| `groups` | 组引用简写数组 |
| `ammo` | 弹药生成几率(%) |
| `magazine` | 弹匣生成几率(%) |
| `container-item` | 容器物品ID |
| `on_overflow` | 溢出处理(discard/spill) |

---

## 条目类型

| 类型 | 格式 |
|------|------|
| Item | `{ "item": "<item-id>", ... }` |
| Group | `{ "group": "<group-id>", ... }` |
| Distribution | `{ "distribution": [...] }` |
| Collection | `{ "collection": [...] }` |

---

## 条目属性

| 字段 | 说明 |
|------|------|
| `prob` | 概率权重 |
| `damage` / `count` / `charges` | 数值或[min,max]数组 |
| `contents-item` / `contents-group` | 内容物 |
| `ammo-item` / `ammo-group` | 弹药 |
| `container-group` | 容器组 |
| `sealed` | 是否密封(默认true) |
| `active` | 是否激活状态(默认false) |
| `custom-flags` | 自定义标志数组 |
| `variant` | 变体ID |
| `artifact` | 神器生成配置 |
| `event` | 节日事件(new_year/easter/halloween等) |
| `snippets` | 文本片段ID |
| `faults` | 故障配置对象 |

---

## event 枚举值

`none`, `new_year`, `easter`, `independence_day`, `halloween`, `thanksgiving`, `christmas`

---

## Schema 类型引用

- `(ItemID)` - 物品ID引用
- `(ItemGroupID)` - 物品组ID引用
- `(VariantID)` - 变体ID引用
- `(FaultID)` - 故障ID引用
