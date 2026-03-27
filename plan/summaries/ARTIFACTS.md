# ARTIFACTS.md 总结

## 文档概述

神器(Artifact)是具有独特"魔法"效果的特殊游戏物品，使用基础物品ID并增强其能力。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `relic_procgen_data` | 神器程序化生成数据，定义神器的生成规则、充能类型、被动/主动效果等 |

---

## 关键字段

### charge_types (充能类型配置)

| 字段 | 说明 |
|------|------|
| `charges` | 初始充能数，range数组随机选取，power为能量值 |
| `charges_per_use` | 每次使用消耗的充能数 |
| `max_charges` | 最大充能数 |
| `recharge_type` | 充能类型 |
| `recharge_condition` | 充能条件(wield/worn/held) |
| `time` | 充能时间，随机选取范围内值 |

### recharge_type 枚举值

| 值 | 说明 |
|------|------|
| `none` | 不充能 |
| `periodic` | 定期充能 |
| `solar_sunny` | 晴天户外充能 |
| `solar_cloudy` | 多云户外充能 |
| `lunar` | 夜间充能 |
| `full_moon` | 满月夜充能 |
| `new_moon` | 新月夜充能 |

### passive_add_procgen_values / passive_mult_procgen_values (被动效果)

| 字段 | 说明 |
|------|------|
| `weight` | 权重，随机选择时使用 |
| `min_value` | 最小值(add为整数，mult可为浮点) |
| `max_value` | 最大值 |
| `type` | 附魔值类型(见MAGIC.md) |
| `increment` | 能量乘数的增量 |
| `power_per_increment` | 每增量的能量值 |
| `ench_has` | 附魔生效条件(wield/worn/held) |

### type_weights (类型权重)

决定生成'add'还是'mult'类型能力的相对权重。

可选值：
- `passive_enchantment_add`
- `passive_enchantment_mult`

### active_procgen_values (主动效果)

| 字段 | 说明 |
|------|------|
| `weight` | 权重 |
| `spell_id` | 法术ID |

### items (可生成物品列表)

定义神器可能生成的基础物品。

---

## 核心概念

### Power Level (能量等级)
神器的能量等级是其属性的总和。例如每点力量加成+250能量，+2力量=500能量等级。

### Resonance (共鸣)
- 分配给神器的附魔，等于神器的能量值
- 始终至少为0
- 代表神器对人体潜在的危险

### 共鸣效果层级

| 层级 | 触发阈值 | 效果 |
|------|----------|------|
| Tier 1 | 2,000 | 恶心、轻微幻觉、轻微疼痛 |
| Tier 2 | 4,500 | 轻微辐射、安全微型传送、巨大噪音 |
| Tier 3 | 7,500 | 严重疼痛、严重辐射、不安全传送 |
| Tier 4 | 12,500 | 廷达洛斯猎犬、无形实体、现实裂隙 |

---

## 示例

```jsonc
{
  "type": "relic_procgen_data",
  "id": "cult",
  "charge_types": [
    {
      "weight": 100,
      "charges": { "range": [ 0, 3 ], "power": 25 },
      "charges_per_use": { "range": [ 1, 1 ], "power": 25 },
      "max_charges": { "range": [ 1, 3 ], "power": 25 },
      "recharge_type": "periodic",
      "time": [ "3 h", "6 h" ]
    }
  ],
  "active_procgen_values": [ { "weight": 100, "spell_id": "AEA_PAIN" } ],
  "passive_add_procgen_values": [
    {
      "weight": 100,
      "min_value": -1,
      "max_value": 1,
      "type": "STRENGTH",
      "increment": 1,
      "power_per_increment": 250
    }
  ],
  "type_weights": [ { "weight": 100, "value": "passive_enchantment_add" } ],
  "items": [ { "weight": 100, "item": "spoon" } ]
}
```

---

## Schema 类型引用

- `(SpellID)` - 法术ID引用
- `(Time)` - 时间值
- `(ItemID)` - 物品ID引用
