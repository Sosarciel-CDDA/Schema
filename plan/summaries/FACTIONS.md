# FACTIONS.md 总结

## 文档概述

NPC派系定义了游戏中的各种势力组织及其关系。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `faction` | 派系，定义派系名称、对玩家态度、资源、货币、与其他派系关系等 |

---

## 关键字段

| 字段 | 说明 |
|------|------|
| `likes_u` | 对玩家好感度（低于-10敌对） |
| `respects_u` | 对玩家尊重度 |
| `trusts_u` | 对玩家信任度（影响交易物品组） |
| `known_by_u` | 玩家是否已知此派系 |
| `size` | 派系成员数量 |
| `power` | 派系势力值 |
| `wealth` | 派系财富（分） |
| `currency` | 派系货币物品ID |
| `fac_food_supply` | 派系食物供应 |
| `consumes_food` | 是否消耗食物 |
| `price_rules` | 价格规则数组 |
| `relations` | 与其他派系的关系 |
| `mon_faction` | 对应的怪物派系名 |
| `lone_wolf_faction` | 是否为单人派系模板 |
| `epilogues` | 结局文本 |

---

## relations 关系标志

| 标志 | 说明 |
|------|------|
| `kill on sight` | 见即击杀 |
| `watch your back` | 守护对方 |
| `share my stuff` | 共享物品 |
| `share public goods` | 共享公共物品 |
| `guard your stuff` | 保护对方物品 |
| `lets you in` | 允许进入领地 |
| `defends your space` | 防守对方领地 |
| `knows your voice` | 认识对方声音 |

---

## Schema 类型引用

- `(FactionID)` - 派系ID引用
- `(ItemID)` - 货币物品ID引用
- `(SnippetID)` - 文本片段ID引用
