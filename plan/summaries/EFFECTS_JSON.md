# EFFECTS_JSON.md 总结

## 文档概述

效果(Effect)系统定义了可应用于角色的各种状态效果，如醉酒、中毒、疼痛等。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `effect_type` | 效果类型，定义效果的名称、描述、强度、持续时间、各种属性修正等 |

---

## 关键字段

| 字段 | 说明 |
|------|------|
| `max_intensity` | 最大强度等级（默认1） |
| `max_effective_intensity` | 最大有效强度 |
| `name` | 效果名称（按强度数组） |
| `desc` | 效果描述 |
| `rating` | 效果评级(good/neutral/bad/mixed) |
| `apply_message` | 应用时消息 |
| `remove_message` | 移除时消息 |
| `resist_traits` | 抗性变异 |
| `resist_effects` | 抗性效果 |
| `immune_flags` | 免疫标志 |
| `removes_effects` | 移除的其他效果 |
| `blocks_effects` | 阻止的其他效果 |
| `max_duration` | 最大持续时间 |
| `dur_add_perc` | 叠加百分比 |
| `int_add_val` | 强度增加值 |
| `int_decay_step` | 强度衰减步长 |
| `int_decay_tick` | 强度衰减间隔 |
| `int_dur_factor` | 强度=持续时间/此值 |
| `base_mods` | 基础修正值 |
| `scaling_mods` | 随强度缩放的修正值 |
| `enchantments` | 附魔效果列表 |

---

## base_mods / scaling_mods 可用参数

| 参数 | 说明 |
|------|------|
| `str_mod` / `dex_mod` / `per_mod` / `int_mod` | 属性修正 |
| `speed_mod` | 速度修正 |
| `pain_amount` / `pain_min` / `pain_max` | 疼痛 |
| `hurt_amount` / `hurt_min` / `hurt_max` | 伤害 |
| `pkill_amount` / `pkill_min` / `pkill_max` | 止痛 |
| `stim_amount` / `stim_min` / `stim_max` | 兴奋剂 |
| `rad_amount` / `rad_min` / `rad_max` | 辐射 |
| `hunger_amount` / `thirst_amount` | 饥饿/口渴 |
| `stamina_amount` | 体力 |
| `sleep_amount` / `sleep_chance` | 睡眠 |
| `vomit_chance` / `cough_chance` | 呕吐/咳嗽 |
| `healing_rate` | 愈合率 |
| `dodge_mod` / `hit_mod` / `bash_mod` | 战斗修正 |

---

## 效果应用方式

1. **消耗品** - `use_action.type: "consume_drug"` 的 `effects` 字段
2. **怪物攻击** - 怪物的 `attack_effs` 字段

---

## Schema 类型引用

- `(EffectTypeID)` - 效果类型ID引用
- `(TraitID)` - 变异ID引用
- `(FlagID)` - 标志ID引用
- `(Time)` - 时间值
- `(EnchantmentID)` - 附魔ID引用
