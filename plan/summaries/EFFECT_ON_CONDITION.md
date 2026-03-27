# EFFECT_ON_CONDITION.md 总结

## 文档概述

条件效果(Effect On Condition, EOC)是一个强大的系统，允许在对话之外组合条件检查和效果触发。支持自动激活、事件触发等多种模式。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `effect_on_condition` | 条件效果，定义条件检查和效果触发的组合 |

---

## EOC_TYPE 枚举

| 值 | 说明 |
|------|------|
| `ACTIVATION` | 手动激活 |
| `RECURRING` | 定时自动激活（需设置 `recurrence`） |
| `AVATAR_DEATH` | 玩家死亡时触发 |
| `NPC_DEATH` | NPC死亡时触发 |
| `PREVENT_DEATH` | 阻止死亡 |
| `EVENT` | 特定事件触发（需设置 `required_event`） |

---

## 关键字段

| 字段 | 说明 |
|------|------|
| `recurrence` | 重复间隔（秒或时间字符串） |
| `condition` | 触发条件 |
| `deactivate_condition` | 停用条件 |
| `required_event` | 所需事件（EVENT类型） |
| `effect` | 条件为真时的效果 |
| `false_effect` | 条件为假时的效果 |
| `global` | 是否全局（默认false） |
| `run_for_npcs` | 是否对NPC运行（默认false） |

---

## 变量对象类型

| 类型 | 说明 |
|------|------|
| `u_val` | 角色变量 |
| `npc_val` | Beta talker变量 |
| `global_val` | 全局变量 |
| `context_val` | 上下文变量 |
| `var_val` | 解析变量 |
| `math` | 数学表达式 |

---

## 条件逻辑

- `and` - 所有条件为真
- `or` - 任一条件为真
- `not` - 取反

---

## Schema 类型引用

- `(EOCID)` - EOC ID引用
- `(CataEventID)` - 事件ID引用
- `(Time)` - 时间值
