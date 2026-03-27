# JSON_INHERITANCE.md 总结

## 文档概述

JSON继承文档说明了 `copy-from` 机制，允许类型继承其他对象的属性。**无新大类定义**，为机制说明文档。

---

## 继承规则

### 基本规则

1. **缺失字段** - 从父对象继承
2. **显式字段** - 覆盖父对象值
3. **数值字段** - 可使用 `relative` 相对修改
4. **数组字段** - 可使用 `extend` 扩展

---

## 继承操作符

| 操作符 | 说明 |
|--------|------|
| `copy-from` | 指定继承的父对象ID |
| `abstract` | 定义抽象模板(不生成实例) |
| `relative` | 相对数值修改 |
| `proportional` | 比例数值修改 |
| `extend` | 扩展数组字段 |
| `delete` | 删除字段 |

---

## relative 示例

```jsonc
"relative": {
    "damage": { "damage_type": "bullet", "amount": -3 },
    "dispersion": 20
}
```

---

## proportional 示例

```jsonc
"proportional": { "recoil": 1.1 }
```

---

## extend 示例

```jsonc
"extend": { "effects": [ "NEVER_MISFIRES" ] }
```

---

## 支持继承的类型(部分)

`GENERIC`, `AMMO`, `ARMOR`, `BOOK`, `COMESTIBLE`, `effect_on_condition`, `ENGINE`, `furniture`, `GUN`, `GUNMOD`, `harvest`, `item_group`, `MAGAZINE`, `material`, `MONSTER`, `MONSTER_FACTION`, `monstergroup`, `mutation`, `overmap_terrain`, `recipe`, `scenario`, `SPELL`, `terrain`, `TOOL`, `vehicle_part`

---

## 特殊行为

| 类型 | 特殊行为 |
|------|----------|
| `monstergroup` | 默认扩展，需 `override: true` 替换整个列表 |
| `SPELL` | 继承支持有限，标志可能不继承 |
| `material.vitamins` | 默认扩展 |

---

## Schema 类型引用

无新类型定义。
