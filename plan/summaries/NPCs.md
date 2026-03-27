# NPCs.md 总结

## 文档概述

NPC系统定义了游戏中的非玩家角色，包括对话、任务、交易等功能。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `npc_class` | NPC类，定义NPC的职业、技能、装备等 |
| `npc` | NPC实例，定义具体的NPC |
| `talk_topic` | 对话主题 |
| `shopkeeper_consumption_rates` | 商店消耗率 |
| `shopkeeper_blacklist` | 商店黑名单 |

---

## npc_class 字段

| 字段 | 说明 |
|------|------|
| `id` | 唯一ID |
| `name` | 显示名称 |
| `job_description` | 工作描述 |
| `common` | 是否可随机生成(默认true) |
| `common_spawn_weight` | 随机生成权重(默认1.0) |
| `bonus_str` / `bonus_dex` / `bonus_int` / `bonus_per` | 属性加成 |
| `shopkeeper_item_group` | 商店物品组ID |
| `shopkeeper_consumption_rates` | 商店消耗率 |
| `shopkeeper_blacklist` | 商店黑名单 |

---

## npc 字段

| 字段 | 说明 |
|------|------|
| `id` | 唯一ID |
| `name_unique` | 唯一名称 |
| `name_suffix` | 名称后缀 |
| `attitude` | 态度(0=NULL, 1=TALK, 3=FOLLOW, 10=KILL, 11=FLEE) |
| `mission` | 任务类型(0=NULL, 3=SHOPKEEP, 7=GUARD, 8=GUARD_PATROL) |
| `chat` | 初始对话主题ID |
| `faction` | 派系ID |
| `death_eocs` | 死亡时触发的EOC |
| `age` / `height` | 年龄/身高 |
| `str` / `dex` / `int` / `per` | 属性值 |
| `personality` | 性格对象 |

---

## talk_topic 字段

| 字段 | 说明 |
|------|------|
| `id` | 主题ID(可以是数组) |
| `dynamic_line` | NPC说的话(可以是字符串、对象或数组) |
| `speaker_effect` | NPC说话后的效果 |
| `responses` | 玩家可选择的响应数组 |
| `replace_built_in_responses` | 是否替换内置响应(默认false) |
| `insert_before_standard_exits` | 是否插入到标准退出前(默认false) |

---

## 特殊对话主题

| 主题ID | 说明 |
|--------|------|
| `TALK_DONE` | 结束对话 |
| `TALK_NONE` | 返回上一个主题 |

---

## Schema 类型引用

- `(NPCClassID)` - NPC类ID引用
- `(NPCID)` - NPC实例ID引用
- `(TalkTopicID)` - 对话主题ID引用
- `(FactionID)` - 派系ID引用
- `(EOCID)` - EOC ID引用
- `(ItemGroupID)` - 物品组ID引用
