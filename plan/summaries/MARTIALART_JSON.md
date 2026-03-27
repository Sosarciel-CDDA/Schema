# MARTIALART_JSON.md 总结

## 文档概述

武术系统定义了格斗风格和技术，包含各种战斗增益、触发条件和特殊攻击。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `martial_art` | 武术风格，定义可用技术、增益、触发条件等 |
| `technique` | 技术，定义特殊攻击效果、击退、眩晕等 |

---

## martial_art 字段

| 字段 | 说明 |
|------|------|
| `id` | 唯一ID |
| `name` | 武术名称 |
| `initiate` | 激活时消息 |
| `autolearn` | 自动学习条件 |
| `techniques` | 可用技术ID数组 |
| `weapons` | 可用武器ID数组 |
| `weapon_category` | 可用武器分类数组 |
| `primary_skill` | 主技能 |
| `learn_difficulty` | 学习难度 |
| `arm_block` / `leg_block` | 手臂/腿部格挡解锁等级 |
| `static_buffs` | 静态增益 |
| `onmove_buffs` / `onpause_buffs` | 移动/暂停时增益 |
| `onhit_buffs` / `onmiss_buffs` | 命中/未命中时增益 |
| `ondodge_buffs` / `onblock_buffs` | 闪避/格挡时增益 |
| `static_eocs` / `onhit_eocs` | 静态/命中时EOC |

---

## technique 字段

| 字段 | 说明 |
|------|------|
| `id` | 唯一ID |
| `name` | 技术名称 |
| `attack_vectors` | 攻击向量 |
| `knockback_dist` / `knockback_spread` | 击退距离/扩散 |
| `stun_dur` / `down_dur` | 眩晕/倒地持续时间 |
| `disarms` | 是否缴械 |
| `aoe` | 范围效果(spin等) |
| `block_counter` / `dodge_counter` | 格挡/闪避反击 |
| `weighting` | 权重 |
| `crit_tec` / `crit_ok` | 仅暴击/含暴击 |
| `repeat_min` / `repeat_max` | 重复次数范围 |
| `flat_bonuses` / `mult_bonuses` | 固定/乘法加成 |
| `tech_effects` | 技术效果数组 |

---

## Schema 类型引用

- `(TechniqueID)` - 技术ID引用
- `(MartialArtID)` - 武术ID引用
- `(WeaponCategoryID)` - 武器分类ID引用
- `(SkillID)` - 技能ID引用
