# MOVE_MODE.md 总结

## 文档概述

移动模式系统定义了角色的各种移动方式，如行走、奔跑、蹲伏、飞行等。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `movement_mode` | 移动模式，定义移动方式的属性、效果和消息等 |

---

## 关键字段

| 字段 | 说明 |
|------|------|
| `id` | 唯一ID |
| `character` | 菜单显示字符 |
| `panel_char` | 面板显示字符 |
| `name` | 显示名称 |
| `panel_color` | 面板颜色 |
| `symbol_color` | 符号颜色 |
| `exertion_level` | 运动强度级别 |
| `change_good_none` | 切换成功消息(无坐骑) |
| `change_good_animal` | 切换成功消息(骑乘动物) |
| `change_good_mech` | 切换成功消息(驾驶机甲) |
| `change_bad_none` | 切换失败消息(无坐骑) |
| `change_bad_animal` | 切换失败消息(骑乘动物) |
| `change_bad_mech` | 切换失败消息(驾驶机甲) |
| `move_type` | 移动类型 |
| `stamina_multiplier` | 体力消耗乘数(默认1.0) |
| `sound_multiplier` | 声音乘数(默认1.0) |
| `move_speed_multiplier` | 移动速度乘数(默认1.0) |
| `mech_power_use` | 机甲能量消耗(默认22) |
| `swim_speed_mod` | 游泳速度修正(默认0) |
| `stop_hauling` | 是否停止搬运(默认false) |

---

## exertion_level 枚举

| 值 | 说明 |
|------|------|
| `NO_EXERCISE` | 无运动 |
| `LIGHT_EXERCISE` | 轻度运动 |
| `MODERATE_EXERCISE` | 中度运动 |
| `ACTIVE_EXERCISE` | 活跃运动 |
| `EXTRA_EXERCISE` | 额外运动 |

---

## move_type 枚举
| 值 | 说明 |
|------|------|
| `crouching` | 蹲伏 |
| `walking` | 行走 |
| `running` | 奔跑 |

---

## Schema 类型引用

无新类型定义。
