# MONSTERS.md 总结

## 文档概述

怪物系统定义了游戏中的所有敌对生物，包括僵尸、动物、机器人等。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `MONSTER` | 怪物，定义怪物的属性、攻击、行为等 |
| `species` | 物种分类 |

---

## 必填字段

| 字段 | 说明 |
|------|------|
| `id` | 唯一ID(约定前缀 `mon_`) |
| `name` | 名称 |
| `description` | 描述 |
| `hp` | 生命值 |
| `volume` | 体积 |
| `weight` | 重量 |
| `symbol` | 符号 |
| `color` | 颜色 |
| `default_faction` | 默认派系 |
| `bodytype` | 身体类型 |
| `speed` | 速度 |

---

## 可选字段

| 字段 | 说明 |
|------|------|
| `species` | 物种数组 |
| `material` | 材料数组 |
| `phase` | 物态(SOLID/LIQUID/GAS/PLASMA) |
| `melee_skill` | 近战技能 |
| `dodge` | 闪避 |
| `melee_damage` | 近战伤害数组 |
| `armor` | 护甲对象 |
| `weakpoint_sets` | 弱点集数组 |
| `vision_day` / `vision_night` | 昼/夜视野 |
| `special_attacks` | 特殊攻击数组 |
| `death_drops` | 死亡掉落物品组 |
| `death_function` | 死亡函数 |
| `upgrades` | 升级对象 |
| `reproduction` | 繁殖对象 |
| `harvest` | 收割ID |
| `flags` | 标志数组 |

---

## Schema 类型引用

- `(MonsterID)` - 怪物ID引用
- `(SpeciesID)` - 物种ID引用
- `(FactionID)` - 派系ID引用
- `(MaterialID)` - 材料ID引用
- `(HarvestID)` - 收割ID引用
- `(WeakpointSetID)` - 弱点集ID引用
