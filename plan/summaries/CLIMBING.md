# CLIMBING.md 总结

## 文档概述

攀爬辅助(Climbing Aid)定义了角色攀爬时的辅助机制，包括滑落几率修正、下降规则等。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `climbing_aid` | 攀爬辅助，定义攀爬下滑几率修正、下降规则、条件等 |

---

## 关键字段

| 字段 | 说明 |
|------|------|
| `slip_chance_mod` | 滑落几率修正（整数，默认0） |
| `condition` | 触发条件对象 |
| `down` | 下降规则对象 |

---

## condition.type 枚举

| 值 | 说明 |
|------|------|
| `ter_furn` | 地形/家具有指定flag |
| `veh` | 载具部件有指定flag |
| `character` | 角色有指定flag |
| `trait` | 角色有指定变异 |
| `item` | 角色背包有指定物品 |
| `special` | C++硬编码特殊条件 |

---

## down 对象字段

| 字段 | 说明 |
|------|------|
| `max_height` | 最大下降层数（默认1） |
| `allow_remaining_height` | 是否允许部分下降（默认true） |
| `easy_climb_back_up` | 轻松爬回的层数 |
| `deploy_furn` | 部署的家具ID |
| `menu_text` | 菜单文本 |
| `menu_cant` | 不可用时的菜单文本 |
| `menu_hotkey` | 菜单热键 |
| `confirm_text` | 确认文本 |
| `msg_before` / `msg_after` | 攀爬前后消息 |
| `cost` | 攀爬代价（kcal/thirst/pain/damage） |

---

## Schema 类型引用

- `(FurnitureID)` - 家具ID引用
- `(FlagID)` - 标志ID引用
- `(TraitID)` - 变异ID引用
- `(ItemID)` - 物品ID引用
