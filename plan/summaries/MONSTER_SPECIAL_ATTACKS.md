# MONSTER_SPECIAL_ATTACKS.md 总结

## 文档概述

怪物特殊攻击定义了怪物可使用的各种特殊攻击方式。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `monster_attack` | 怪物攻击，定义近战特殊攻击 |

---

## 攻击定义方式

### 旧式数组
```jsonc
"special_attacks": [ [ "ACID", 10 ] ]
```

### 新式对象
```jsonc
"special_attacks": [ { "type": "leap", "cooldown": 10, "max_range": 4 } ]
```

---

## 硬编码特殊攻击

| 攻击 | 说明 |
|------|------|
| `ACID` | 喷吐酸液 |
| `BITE` | 咬击 |
| `GRAB` | 抓取 |
| `LEAP` | 跳跃攻击 |
| `SHRIEK` | 尖叫 |
| `SMASH` | 重击 |
| `SUICIDE` | 自杀攻击 |
| `TAZER` | 电击 |

---

## JSON特殊攻击字段

| 字段 | 说明 |
|------|------|
| `cooldown` | 冷却回合数 |
| `damage_max_instance` | 伤害实例数组 |
| `min_mul` / `max_mul` | 伤害乘数范围 |
| `move_cost` | 行动消耗 |
| `accuracy` | 命中率 |
| `range` | 攻击范围 |
| `grab` | 是否抓取 |
| `dodgeable` | 是否可闪避 |
| `blockable` | 是否可格挡 |
| `effects` | 附加效果数组 |

---

## 非近战特殊攻击

| 类型 | 说明 |
|------|------|
| `gun` | 枪械攻击 |
| `spell` | 法术攻击 |
| `leap` | 跳跃攻击 |

---

## Schema 类型引用

- `(MonsterAttackID)` - 怪物攻击ID引用
- `(SpellID)` - 法术ID引用
