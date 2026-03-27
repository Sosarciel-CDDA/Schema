# ITEM.md 总结

## 文档概述

物品(Item)系统是游戏中最核心的系统之一，定义了所有可拾取的实体。物品通过 `subtypes` 字段支持多种子类型组合。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `ITEM` | 通用物品基础类型 |
| `ammunition_type` | 弹药类型分类 |
| `ammo_effect` | 弹药效果 |

---

## 物品子类型(subtypes)

| 子类型 | 说明 |
|--------|------|
| `TOOL` | 工具，可使用能量 |
| `ARMOR` | 护甲，定义防护 |
| `GUN` | 枪械，发射弹丸 |
| `GUNMOD` | 枪械改装件 |
| `AMMO` | 弹药 |
| `MAGAZINE` | 弹匣 |
| `COMESTIBLE` | 消耗品 |
| `BOOK` | 书籍 |
| `PET_ARMOR` | 宠物护甲 |
| `BIONIC_ITEM` | CBM物品 |
| `TOOLMOD` | 工具改装件 |
| `ENGINE` | 车辆引擎 |
| `WHEEL` | 车轮 |
| `SEED` | 种子 |
| `BREWABLE` | 可酿造 |
| `COMPOSTABLE` | 可堆肥 |
| `MILLING` | 可研磨 |

---

## 通用物品字段

| 字段 | 说明 |
|------|------|
| `id` | 唯一ID |
| `name` | 名称对象(str/str_pl/str_sp) |
| `description` | 描述 |
| `weight` | 重量 |
| `volume` | 体积 |
| `price` / `price_postapoc` | 价格 |
| `material` | 材料数组 |
| `flags` | 标志数组 |
| `melee_damage` | 近战伤害 |
| `to_hit` | 命中加成 |
| `variants` | 变体数组 |
| `container` | 容器ID |
| `stackable` | 可堆叠 |

---

## AMMO 子类型字段

| 字段 | 说明 |
|------|------|
| `ammo_type` | 弹药类型 |
| `damage` | 伤害对象 |
| `range` | 射程 |
| `dispersion` | 散布 |
| `recoil` | 后坐力 |
| `count` | 生成数量 |
| `casing` | 弹壳ID |
| `effects` | 弹药效果数组 |

---

## ARMOR 子类型字段

| 字段 | 说明 |
|------|------|
| `covers` | 覆盖的身体部位 |
| `coverage` | 覆盖率 |
| `warmth` | 保暖值 |
| `environmental_protection` | 环境防护 |
| `encumbrance` | 累赘度 |
| `material_thickness` | 材料厚度 |
| `armor` | 护甲部分数据数组 |

---

## GUN 子类型字段

| 字段 | 说明 |
|------|------|
| `skill` | 使用技能 |
| `ammo` | 弹药类型 |
| `range` | 射程 |
| `dispersion` | 散布 |
| `recoil` | 后坐力 |
| `clip_size` | 弹仓容量 |
| `magazines` | 可用弹匣 |
| `reload` | 装填时间 |

---

## MAGAZINE 子类型字段

| 字段 | 说明 |
|------|------|
| `ammo_type` | 弹药类型数组 |
| `capacity` | 容量 |
| `reload_time` | 装填时间 |
| `linkage` | 弹链物品ID |

---

## Schema 类型引用

- `(ItemID)` - 物品ID引用
- `(MaterialID)` - 材料ID引用
- `(AmmoTypeID)` - 弹药类型ID引用
- `(AmmoEffectID)` - 弹药效果ID引用
- `(BodyPartID)` - 身体部位ID引用
- `(SkillID)` - 技能ID引用
