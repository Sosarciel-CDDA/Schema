# MAGIC.md 总结

## 文档概述

魔法系统定义了法术和附魔系统，支持各种魔法效果、召唤、治疗、攻击等。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `SPELL` | 法术，定义法术效果、范围、伤害、持续时间等 |
| `enchantment` | 附魔，定义被动效果和属性修正 |
| `magic_type` | 魔法类型 |

---

## 法术必填字段

| 字段 | 说明 |
|------|------|
| `id` | 唯一ID |
| `type` | 必须为 `SPELL` |
| `name` | 法术名称 |
| `description` | 法术描述 |
| `valid_targets` | 有效目标(ally/field/ground/hostile/item/none/vehicle/self) |
| `effect` | 法术效果类型 |
| `shape` | 法术形状(blast/cone/line) |

---

## 法术效果类型

| 效果 | 说明 |
|------|------|
| `attack` | 造成伤害 |
| `spawn_item` | 生成物品 |
| `summon` | 召唤怪物 |
| `summon_vehicle` | 召唤载具 |
| `heal` | 治疗 |
| `teleport` | 传送 |
| `explosion` | 爆炸 |
| `area_push` / `area_pull` | 推/拉 |
| `banishment` | 放逐 |
| `charm_monster` | 魅惑 |
| `mutate` | 变异 |
| `ter_transform` | 地形转换 |
| `vomit` | 呕吐 |

---

## 法术形状

| 形状 | 说明 |
|------|------|
| `blast` | 圆形，aoe为半径 |
| `cone` | 锥形，aoe为角度 |
| `line` | 线形，aoe为宽度 |

---

## 附魔字段

| 字段 | 说明 |
|------|------|
| `id` | 附魔ID |
| `has` | 生效条件(wield/worn/held) |
| `values` | 附魔值数组 |

---

## Schema 类型引用

- `(SpellID)` - 法术ID引用
- `(EnchantmentID)` - 附魔ID引用
- `(MagicTypeID)` - 魔法类型ID引用
- `(MonsterID)` - 怪物ID引用
- `(ItemID)` - 物品ID引用
- `(VehicleID)` - 载具ID引用
