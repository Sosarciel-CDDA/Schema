# JSON_FLAGS.md 总结

## 文档概述

JSON标志系统定义了游戏中各种实体的特殊属性标记。**无新大类定义**，但包含大量标志定义。

---

## 标志分类

| 分类 | 说明 |
|------|------|
| Ammo | 弹药类型标志 |
| Armor | 护甲标志 |
| Bionics | 仿生体标志 |
| Bodyparts | 身体部位标志 |
| Books | 书籍标志 |
| Character | 角色标志 |
| Comestibles | 消耗品标志 |
| Effects | 效果标志 |
| Furniture/Terrain | 家具/地形标志 |
| Guns | 枪械标志 |
| Magazines | 弹匣标志 |
| Magic | 魔法标志 |
| Mapgen | 地图生成标志 |
| Monsters | 怪物标志 |
| Mutations | 变异标志 |
| Overmap | 大地图标志 |
| Recipes | 配方标志 |
| Vehicles | 载具标志 |

---

## 重要标志示例

### 护甲标志
- `WATCH` - 有手表功能
- `ALARMCLOCK` - 有闹钟功能
- `BELTED` - 背带层
- `BLIND` - 致盲
- `DEAF` - 致聋
- `FIX_FARSIGHT` - 矫正远视
- `FIX_NEARSIGHT` - 矫正近视
- `FLOTATION` - 防止溺水
- `GAS_PROOF` - 防毒气
- `ELECTRIC_IMMUNE` - 电击免疫
- `BULLET_IMMUNE` - 子弹免疫

### 消耗品标志
- `NUTRIENT` - 营养品
- `ALLERGEN` - 过敏原
- `RAW` - 生食
- `HOT` - 热食
- `COLD` - 冷食
- `FROZEN` - 冷冻

### 怪物标志
- `SEES` - 能看见
- `HEARS` - 能听见
- `SMELLS` - 能闻到
- `KEENNOSE` - 敏锐嗅觉
- `STUMBLES` - 跌跌撞撞
- `WARM` - 温血

---

## 标志继承

当物品被制作时，可以继承材料的标志。需要标志有 `"craft_inherit": true` 条目。使用 `delete_flags` 可删除继承的标志。

---

## Schema 类型引用

无新类型定义，标志本身为字符串ID。
