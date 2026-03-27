# CDDA JSON 文档大类总结

本文档汇总 `doc/JSON` 目录下所有文档描述的 JSON 类型大类，用于检查 Schema 缺失情况。

---

## HELP_MENU.md

### 描述
帮助菜单定义了游戏中可滚动的分类帮助页面。

### 大类列表

| 类型 | 说明 |
|------|------|
| `help` | 帮助分类，定义帮助页面的顺序、名称和内容 |

### 关键字段
- `order` - 显示顺序
- `name` - 分类名称
- `messages` - 帮助内容数组

---

## ITEM.md

### 描述
物品(Item)系统是游戏中最核心的系统之一，定义了所有可拾取的实体。物品通过 `subtypes` 字段支持多种子类型组合。

### 大类列表

| 类型 | 说明 |
|------|------|
| `ITEM` | 通用物品基础类型 |
| `ammunition_type` | 弹药类型分类 |

### 物品子类型(subtypes)
- `TOOL` - 工具，可使用能量
- `ARMOR` - 护甲，定义防护
- `GUN` - 枪械，发射弹丸
- `GUNMOD` - 枪械改装件
- `AMMO` - 弹药
- `MAGAZINE` - 弹匣
- `COMESTIBLE` - 消耗品
- `BOOK` - 书籍
- `PET_ARMOR` - 宠物护甲
- `BIONIC_ITEM` - CBM物品
- `TOOLMOD` - 工具改装件
- `ENGINE` - 车辆引擎
- `WHEEL` - 车轮
- `SEED` - 种子
- `BREWABLE` - 可酿造
- `COMPOSTABLE` - 可堆肥
- `MILLING` - 可研磨

### 特殊类型
- `ammo_effect` - 弹药效果

---

## JSON_FLAGS.md

### 描述
JSON标志系统定义了游戏中各种实体的特殊属性标记。**无新大类定义**，但包含大量标志定义。

### 标志分类
- Ammo flags - 弹药标志
- Armor flags - 护甲标志
- Bionics flags - 仿生体标志
- Character flags - 角色标志
- Comestible flags - 消耗品标志
- Furniture/Terrain flags - 家具/地形标志
- Gun flags - 枪械标志
- Monster flags - 怪物标志
- Mutation flags - 变异标志
- Vehicle flags - 载具标志

---

## JSON_INFO.md

### 描述
JSON信息文档是核心参考文档，描述了大量JSON类型的通用字段和文件结构。**包含众多大类定义**。

### 大类列表

| 类型 | 说明 |
|------|------|
| `ascii_art` | ASCII艺术 |
| `snippet` | 文本片段 |
| `addiction_type` | 成瘾类型 |
| `body_part` | 身体部位 |
| `limb_score` | 肢体分数 |
| `character_modifier` | 角色修正器 |
| `bionic` | 仿生体(CBM) |
| `damage_type` | 伤害类型 |
| `dream` | 梦境 |
| `disease` | 疾病 |
| `emit` | 发射器 |
| `item_group` | 物品组 |
| `item_category` | 物品分类 |
| `item_fault` | 物品故障 |
| `item_fault_fix` | 物品故障修复 |
| `material` | 材料 |
| `monstergroup` | 怪物组 |
| `monster_faction` | 怪物派系 |
| `mutation_category` | 变异分类 |
| `names` | 名字生成规则 |
| `profession` | 职业 |
| `profession_group` | 职业组 |
| `construction` - 建造 |
| `scent_type` | 气味类型 |
| `score` | 分数 |
| `achievement` | 成就 |
| `conduct` | 行为准则 |
| `skill` | 技能 |
| `tool_quality` | 工具品质 |
| `mutation` / `trait` | 变异/特性 |
| `trap` | 陷阱 |
| `vehicle_group` | 载具组 |
| `vehicle_part` | 载具部件 |
| `vehicle` | 载具原型 |
| `harvest` | 收割 |
| `harvest_drop_type` | 收割掉落类型 |
| `weapon_category` | 武器分类 |
| `furniture` | 家具 |
| `terrain` | 地形 |
| `clothing_mod` | 服装修正 |
| `json_flag` | JSON标志定义 |
| `weakpoint_set` | 弱点集 |

---

## JSON_INHERITANCE.md

### 描述
JSON继承文档说明了 `copy-from` 机制，允许类型继承其他对象的属性。**无新大类定义**，为机制说明文档。

### 支持继承的类型
`GENERIC`, `AMMO`, `ARMOR`, `BOOK`, `COMESTIBLE`, `effect_on_condition`, `ENGINE`, `furniture`, `GUN`, `GUNMOD`, `harvest`, `item_group`, `MAGAZINE`, `material`, `MONSTER`, `MONSTER_FACTION`, `monstergroup`, `mutation`, `overmap_terrain`, `recipe`, `scenario`, `SPELL`, `terrain`, `TOOL`, `vehicle_part` 等

---

## MAGIC.md

### 描述
魔法系统定义了法术和附魔系统，支持各种魔法效果、召唤、治疗、攻击等。

### 大类列表

| 类型 | 说明 |
|------|------|
| `SPELL` | 法术，定义法术效果、范围、伤害、持续时间等 |
| `enchantment` | 附魔，定义被动效果和属性修正 |
| `magic_type` | 魔法类型 |

### 法术效果类型
`attack`, `spawn_item`, `summon`, `summon_vehicle`, `heal`, `teleport`, `explosion`, `area_push`, `area_pull`, `banishment`, `charm_monster`, `mutate`, `ter_transform`, `vomit` 等

### 法术形状
`blast` - 圆形, `cone` - 锥形, `line` - 线形

---

## MONSTERS.md

### 描述
怪物系统定义了游戏中的所有敌对生物，包括僵尸、动物、机器人等。

### 大类列表

| 类型 | 说明 |
|------|------|
| `MONSTER` | 怪物，定义怪物的属性、攻击、行为等 |
| `species` | 物种分类 |

### 关键字段
- `hp`, `speed`, `melee_skill`, `dodge` - 基础属性
- `armor` - 护甲
- `special_attacks` - 特殊攻击
- `death_function` - 死亡函数
- `upgrades` - 升级
- `reproduction` - 繁殖
- `harvest` - 收割掉落

---

## MUTATIONS.md

### 描述
变异/特性系统定义了角色的基因突变和先天特性。

### 大类列表

| 类型 | 说明 |
|------|------|
| `mutation` / `trait` | 变异/特性，定义变异效果、视觉、护甲、激活能力等 |

### 关键字段
- `category` - 变异分类
- `prereqs` / `prereqs2` - 前置变异
- `threshreq` - 阈值需求
- `cancels` / `changes_to` / `leads_to` - 变异关系
- `armor` - 护甲加成
- `active` - 可激活变异
- `integrated_armor` - 整合护甲

---

## NPCs.md

### 描述
NPC系统定义了游戏中的非玩家角色，包括对话、任务、交易等功能。

### 大类列表

| 类型 | 说明 |
|------|------|
| `npc_class` | NPC类，定义NPC的职业、技能、装备等 |
| `npc` | NPC实例，定义具体的NPC |
| `talk_topic` | 对话主题 |
| `shopkeeper_consumption_rates` | 商店消耗率 |
| `shopkeeper_blacklist` | 商店黑名单 |

### 关键概念
- 对话系统：条件检查、效果触发、响应选项
- 商店系统：物品组、信任等级、价格规则

---

## OVERMAP.md

### 描述
大地图(Overmap)系统定义了游戏世界的宏观结构，包括地形、道路、建筑位置等。

### 大类列表

| 类型 | 说明 |
|------|------|
| `overmap_terrain` | 大地图地形 |
| `overmap_special` | 大地图特殊地点 |
| `city_building` | 城市建筑 |
| `overmap_connection` | 大地图连接(道路等) |
| `overmap_location` | 大地图位置定义 |
| `overmap_special_migration` | 大地图特殊地点迁移 |

---

## VEHICLES_JSON.md

### 描述
载具系统定义了游戏中可驾驶的车辆原型。

### 大类列表

| 类型 | 说明 |
|------|------|
| `vehicle` | 载具原型，定义载具的部件、物品、区域等 |

### 关键字段
- `blueprint` - 蓝图预览
- `parts` - 部件列表
- `items` - 物品生成列表
- `zones` - 区域定义

---

## WEATHER_TYPE.md

### 描述
天气类型系统定义了游戏中的各种天气状态。

### 大类列表

| 类型 | 说明 |
|------|------|
| `weather_type` | 天气类型，定义天气效果、视觉惩罚、降水等 |

### 关键字段
- `ranged_penalty` - 远程惩罚
- `sight_penalty` - 视野惩罚
- `light_modifier` - 光照修正
- `precip` - 降水量
- `condition` - 触发条件
- `priority` - 优先级

---

## 其他文档简述

以下文档主要描述特定功能或机制，不定义新的顶级类型：

| 文档 | 描述 |
|------|------|
| `ITEM_CRAFT_AND_DISASSEMBLY.md` | 物品制作和拆解系统，涉及 `recipe`, `requirement`, `uncraft` |
| `ITEM_SPAWN.md` | 物品生成系统，涉及 `item_group` |
| `JSON_LOADING_ORDER.md` | JSON加载顺序说明 |
| `JSON_STYLE.md` | JSON编码风格指南 |
| `JSON_TOOLS.md` | JSON工具说明 |
| `MAPGEN.md` | 地图生成系统，涉及 `mapgen`, `palette` |
| `MISSIONS_JSON.md` | 任务系统，涉及 `mission_definition` |
| `MONSTER_SPECIAL_ATTACKS.md` | 怪物特殊攻击说明 |
| `MOVE_MODE.md` | 移动模式，涉及 `move_mode` |
| `OPTIONS.md` | 游戏选项配置 |
| `PRACTICE_RECIPES.md` | 练习配方说明 |
| `PROFICIENCY.md` | 熟练度系统，涉及 `proficiency` |
| `REGION_SETTINGS.md` | 区域设置，涉及 `region_settings` |
| `TER_FURN_TRANSFORM.md` | 地形/家具转换，涉及 `ter_furn_transform` |
| `VITAMIN.md` | 维生素系统，涉及 `vitamin` |
| `MARTIALART_JSON.md` | 武术系统，涉及 `martial_art` |
| `MIGRATION.md` | 数据迁移说明 |

---

## JSON_Mapping_Guides 子目录

| 文档 | 描述 |
|------|------|
| `Guide_for_beginning_mapgen.md` | 地图生成入门指南 |
| `Guide_for_intermediate_mapgen.md` | 地图生成进阶指南 |
| `JSON_ROOF_MAPGEN.md` | 屋顶地图生成 |

---

## 汇总：所有大类列表

以下是所有文档中定义的顶级JSON类型汇总：

### 物品类
`ITEM`, `ammunition_type`, `ammo_effect`

### 生物类
`MONSTER`, `species`, `monstergroup`, `monster_faction`

### 角色类
`mutation`/`trait`, `bionic`, `effect_type`, `limb_score`, `character_modifier`

### NPC类
`npc`, `npc_class`, `faction`, `talk_topic`

### 地图类
`terrain`, `furniture`, `mapgen`, `palette`, `overmap_terrain`, `overmap_special`, `overmap_connection`, `overmap_location`, `city_building`, `ter_furn_transform`, `trap`

### 物品相关类
`item_group`, `item_category`, `item_fault`, `item_fault_fix`, `material`, `harvest`, `harvest_drop_type`

### 制作类
`recipe`, `recipe_group`, `requirement`, `uncraft`, `construction`, `tool_quality`

### 载具类
`vehicle`, `vehicle_part`, `vehicle_group`

### 魔法/效果类
`SPELL`, `enchantment`, `magic_type`, `effect_on_condition`, `relic_procgen_data`

### 世界类
`weather_type`, `region_settings`, `emit`, `scent_type`, `vitamin`

### 职业类
`profession`, `profession_group`, `scenario`, `skill`, `proficiency`

### 其他类
`ascii_art`, `snippet`, `addiction_type`, `body_part`, `damage_type`, `dream`, `disease`, `mutation_category`, `names`, `score`, `achievement`, `conduct`, `weapon_category`, `martial_art`, `move_mode`, `climbing_aid`, `weakpoint_set`, `clothing_mod`, `json_flag`, `help`, `mission_definition`, `shopkeeper_consumption_rates`, `shopkeeper_blacklist`, `overmap_special_migration`

## EFFECTS_JSON.md

### 描述
效果(Effect)系统定义了可应用于角色的各种状态效果，如醉酒、中毒、疼痛等。

### 大类列表

| 类型 | 说明 |
|------|------|
| `effect_type` | 效果类型，定义效果的名称、描述、强度、持续时间、各种属性修正等 |

### 关键字段
- `max_intensity` - 最大强度等级
- `base_mods` - 基础修正值
- `scaling_mods` - 随强度缩放的修正值
- `removes_effects` - 移除的其他效果
- `blocks_effects` - 阻止的其他效果
- `enchantments` - 附魔效果

---

## EFFECT_ON_CONDITION.md

### 描述
条件效果(Effect On Condition, EOC)是一个强大的系统，允许在对话之外组合条件检查和效果触发。支持自动激活、事件触发等多种模式。

### 大类列表

| 类型 | 说明 |
|------|------|
| `effect_on_condition` | 条件效果，定义条件检查和效果触发的组合 |

### EOC类型
- `ACTIVATION` - 手动激活
- `RECURRING` - 定时自动激活
- `AVATAR_DEATH` - 玩家死亡时触发
- `NPC_DEATH` - NPC死亡时触发
- `PREVENT_DEATH` - 阻止死亡
- `EVENT` - 特定事件触发

### 关键概念
- `recurrence` - 重复间隔
- `condition` - 触发条件
- `effect` / `false_effect` - 效果
- `global` - 是否全局
- `required_event` - 所需事件

---

## EXAMINE.md

### 描述
地形/家具检查动作定义了玩家检查地形或家具时执行的动作。

### 大类列表

| 类型 | 说明 |
|------|------|
| `appliance_convert` | 家具转换动作 |
| `cardreader` | 读卡器动作 |
| `effect_on_condition` (examine) | 检查时触发的EOC |
| `mortar` | 迫击炮动作 |

### 硬编码检查动作
`aggie_plant`, `autodoc`, `bars`, `bulletin_board`, `chainfence`, `dirtmound`, `elevator`, `gaspump`, `locked_object`, `pit`, `rubble`, `safe`, `water_source` 等

---

## FACTIONS.md

### 描述
NPC派系定义了游戏中的各种势力组织及其关系。

### 大类列表

| 类型 | 说明 |
|------|------|
| `faction` | 派系，定义派系名称、对玩家态度、资源、货币、与其他派系关系等 |

### 关键字段
- `likes_u` / `respects_u` / `trusts_u` - 对玩家态度
- `wealth` - 财富
- `currency` - 货币
- `price_rules` - 价格规则
- `relations` - 派系关系
- `epilogues` - 结局

---

## GUIDE_COMESTIBLES.md

### 描述
消耗品指南，说明如何分类和组织消耗品JSON文件。**无新大类定义**，仅为文件组织指南。

### 文件分类
- 特殊消耗品：`med.json`, `mre.json`, `mutagen.json`, `carnivore.json`, `protein.json`, `spice.json`, `frozen.json`, `brewing.json`
- 液体消耗品：`alcohol.json`, `soup.json`, `drink.json`, `drink_other.json`
- 固体消耗品：`junkfood.json`, `sandwich.json`, `meat_dishes.json`, `raw_veggy.json`, `bread.json`, `dairy.json` 等

---

## ARTIFACTS.md

### 描述
神器(Artifact)是具有独特"魔法"效果的特殊游戏物品，使用基础物品ID并增强其能力。

### 大类列表

| 类型 | 说明 |
|------|------|
| `relic_procgen_data` | 神器程序化生成数据，定义神器的生成规则、充能类型、被动/主动效果等 |

### 关键字段
- `charge_types` - 充能类型配置
- `active_procgen_values` - 主动效果
- `passive_add_procgen_values` - 被动加成效果
- `passive_mult_procgen_values` - 被动乘法效果
- `type_weights` - 类型权重
- `items` - 可生成的物品列表

---

## BASECAMP.md

### 描述
基地(Basecamp)系统定义了玩家可建造和升级的据点，包含升级路径、配方组和地图生成。

### 大类列表

| 类型 | 说明 |
|------|------|
| `recipe` | 配方（扩展字段用于基地建设） |
| `mapgen` | 地图生成（包含 `update_mapgen_id`, `nested_mapgen_id`） |
| `recipe_group` | 配方组，定义基地可用配方和升级路径 |

### 关键概念
- `construction_blueprint` - 建设蓝图
- `blueprint_provides` - 蓝图提供的功能
- `blueprint_requires` - 蓝图需求
- `blueprint_excludes` - 蓝图排除项
- `blueprint_resources` - 蓝图资源

### 特殊配方组
- `all_faction_base_types` - 所有基地类型
- `all_faction_base_expansions` - 所有基地扩展

---

## CLIMBING.md

### 描述
攀爬辅助(Climbing Aid)定义了角色攀爬时的辅助机制。

### 大类列表

| 类型 | 说明 |
|------|------|
| `climbing_aid` | 攀爬辅助，定义攀爬下滑几率修正、下降规则、条件等 |

### 关键字段
- `slip_chance_mod` - 滑落几率修正
- `condition` - 触发条件（ter_furn/veh/character/trait/item/special）
- `down` - 下降规则配置
- `deploy_furn` - 部署的家具

---

