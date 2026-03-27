# MISSIONS_JSON.md 总结

## 文档概述

任务系统定义了NPC可分配给玩家的各种任务目标，包括寻找物品、击杀怪物、护送等。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `mission_definition` | 任务定义，定义任务目标、奖励、对话等 |

---

## 任务目标类型(goal)

| 目标 | 说明 |
|------|------|
| `MGOAL_GO_TO` | 到达指定大地图位置 |
| `MGOAL_GO_TO_TYPE` | 到达指定类型的大地图位置 |
| `MGOAL_COMPUTER_TOGGLE` | 激活终端 |
| `MGOAL_FIND_ITEM` | 找到指定物品 |
| `MGOAL_FIND_ANY_ITEM` | 找到任务标记的物品 |
| `MGOAL_FIND_MONSTER` | 找到友好怪物 |
| `MGOAL_FIND_NPC` | 找到指定NPC |
| `MGOAL_TALK_TO_NPC` | 与指定NPC交谈 |
| `MGOAL_RECRUIT_NPC` | 招募指定NPC |
| `MGOAL_RECRUIT_NPC_CLASS` | 招募指定职业NPC |
| `MGOAL_ASSASSINATE` | 刺杀指定NPC |
| `MGOAL_KILL_MONSTER` | 击杀指定怪物 |
| `MGOAL_KILL_MONSTERS` | 击杀多个指定怪物 |
| `MGOAL_KILL_MONSTER_TYPE` | 击杀指定类型怪物 |
| `MGOAL_KILL_MONSTER_SPEC` | 击杀指定物种怪物 |
| `MGOAL_CONDITION` | 满足动态条件 |

---

## 关键字段

| 字段 | 说明 |
|------|------|
| `id` | 任务ID |
| `name` | 任务名称 |
| `description` | 任务描述 |
| `goal` | 任务目标类型 |
| `deadline` | 截止时间 |
| `difficulty` | 难度 |
| `value` | 价值 |
| `urgent` | 是否紧急 |
| `origins` | 任务来源 |
| `followup` | 后续任务ID |
| `start` | 开始效果 |
| `end` | 结束效果 |
| `fail` | 失败效果 |
| `dialogue` | 对话文本对象 |

---

## dialogue 对象

| 字段 | 说明 |
|------|------|
| `describe` | 任务描述 |
| `offer` | 任务提议 |
| `accepted` | 接受任务 |
| `rejected` | 拒绝任务 |
| `advice` | 任务建议 |
| `inquire` | 询问进度 |
| `success` | 任务成功 |
| `success_lie` | 发现撒谎 |
| `failure` | 任务失败 |

---

## origins 枚举

| 值 | 说明 |
|------|------|
| `ORIGIN_GAME_START` | 游戏开始时 |
| `ORIGIN_OPENER_NPC` | 开场NPC |
| `ORIGIN_ANY_NPC` | 任意NPC |
| `ORIGIN_SECONDARY` | 其他任务后续 |
| `ORIGIN_COMPUTER` | 电脑终端 |

---

## Schema 类型引用

- `(MissionID)` - 任务ID引用
- `(ItemID)` - 物品ID引用
- `(MonsterID)` - 怪物ID引用
- `(NPCID)` - NPC ID引用
- `(OvermapTerrainID)` - 大地图地形ID引用
