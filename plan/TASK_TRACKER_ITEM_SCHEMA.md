# 任务: Item Schema 结构验证与完善

## 状态概览
- **启动时间**: 2026-03-27
- **最后更新**: 2026-03-28
- **当前阶段**: 阶段2 - 现有文件字段验证

## 所需Skill (任务开始时调用)
1. **long-task-tracker** - 超长任务追踪器，用于管理复杂多步骤任务
2. **cdda-schema-writer** - CDDA Schema编写器，用于将JSON文档转换为TypeScript类型定义

## 重要注意事项 (每次必读)
1. **往返相等原则**: 如果原注释往返不相等但是极其详细的说明，不应忽略，新注释应在保持与原文往返相等的情况下参考或追加原注释
2. **原子任务**: 每次只处理一个文件或一个subtype
3. **不臆测**: 判断类型必须检查原始doc，不能臆测
4. **使用type而非interface**: 遵循项目代码规范
5. **JSDoc格式**: 第一行直接跟随`*`，不加额外空格

## 任务列表

### 阶段 1: 文件存在性检查
| 编号 | 任务 | 状态 | 开始时间 | 完成时间 | 备注 |
|---|------|--------|---------|-----------|-------|
| 1.1 | 检查ItemSubtype列表与现有文件对应关系 | [x] | 2026-03-27 | 2026-03-27 | 已完成初步分析 |
| 1.2 | 确认缺失的schema文件 | [x] | 2026-03-27 | 2026-03-27 | BOOK/PET_ARMOR/TOOLMOD/ENGINE/WHEEL/SEED/BREWABLE/COMPOSTABLE/MILLING |

### 阶段 2: 现有文件字段验证
| 编号 | 任务 | 状态 | 开始时间 | 完成时间 | 备注 |
|---|------|--------|---------|-----------|-------|
| 2.1 | Ammo.ts - 验证subtype字段与注释 | [x] | 2026-03-27 | 2026-03-27 | 已添加recovery_chance/casing字段 |
| 2.2 | Armor.ts - 验证subtype字段与注释 | [x] | 2026-03-27 | 2026-03-27 | 已添加encumbrance_modifiers字段 |
| 2.3 | Artifact.ts - 验证subtype字段与注释 | [x] | 2026-03-28 | 2026-03-28 | 现代系统使用passive_effects |
| 2.4 | Battery.ts - 验证subtype字段与注释 | [x] | 2026-03-28 | 2026-03-28 | 已验证，只有max_energy字段 |
| 2.5 | BionicItem.ts - 验证subtype字段与注释 | [x] | 2026-03-28 | 2026-03-28 | 已验证，字段完整 |
| 2.6 | Comestible.ts - 验证subtype字段与注释 | [x] | 2026-03-28 | 2026-03-28 | 已修正fatigue_mod→sleepiness_mod |
| 2.7 | Generic.ts - 验证subtype字段与注释 | [x] | 2026-03-28 | 2026-03-28 | 已验证，字段完整 |
| 2.8 | Gun.ts - 验证subtype字段与注释 | [x] | 2026-03-28 | 2026-03-28 | 已添加gun_jam_mult，修复heat相关字段 |
| 2.9 | GunMod.ts - 验证subtype字段与注释 | [x] | 2026-03-28 | 2026-03-28 | 已添加to_hit_mod/is_bayonet/loudness_multiplier |
| 2.10 | Magazine.ts - 验证subtype字段与注释 | [x] | 2026-03-28 | 2026-03-28 | 已添加mag_jam_mult字段 |
| 2.11 | Tool.ts - 验证subtype字段与注释 | [x] | 2026-03-28 | 2026-03-28 | 已验证，字段完整 |
| 2.12 | ItemIndex.ts - 验证ItemSubtype完整性 | [x] | 2026-03-28 | 2026-03-28 | ItemSubtypeList已包含所有subtype |

### 阶段 3: 缺失文件创建
| 编号 | 任务 | 状态 | 开始时间 | 完成时间 | 备注 |
|---|------|--------|---------|-----------|-------|
| 3.1 | 创建 Book.ts schema | [x] | 2026-03-28 | 2026-03-28 | 已创建 |
| 3.2 | 创建 PetArmor.ts schema | [x] | 2026-03-28 | 2026-03-28 | 已创建，包含environmental_protection/material_thickness/pet_bodytype等字段 |
| 3.3 | 创建 ToolMod.ts schema | [x] | 2026-03-28 | 2026-03-28 | 已创建，包含acceptable_ammo/pocket_mods/magazine_adaptor字段 |
| 3.4 | 创建 Engine.ts schema | [x] | 2026-03-28 | 2026-03-28 | 已创建，包含power/energy_consumption/m2c等字段 |
| 3.5 | 创建 Wheel.ts schema | [x] | 2026-03-28 | 2026-03-28 | 已创建，包含wheel_offroad_rating/contact_area/diameter/width等字段 |
| 3.6 | 创建 Seed.ts schema | [x] | 2026-03-28 | 2026-03-28 | 已创建，包含plant_name/fruit/seeds/grow等字段 |
| 3.7 | 创建 Brewable.ts schema | [x] | 2026-03-28 | 2026-03-28 | 已创建，包含brew_time/brew_results字段 |
| 3.8 | 创建 Compostable.ts schema | [x] | 2026-03-28 | 2026-03-28 | 已创建，包含compost_time/compost_results字段 |
| 3.9 | 创建 Milling.ts schema | [x] | 2026-03-28 | 2026-03-28 | 已创建，包含into/recipe字段 |

### 阶段 4: 最终验证
| 编号 | 任务 | 状态 | 开始时间 | 完成时间 | 备注 |
|---|------|--------|---------|-----------|-------|
| 4.1 | 编译验证 tsc --noEmit | [x] | 2026-03-28 | 2026-03-28 | 通过，修复了导入路径错误 |
| 4.2 | 更新index.ts导出 | [ ] | - | - | |
| 4.3 | 更新ItemIndex.ts引用 | [ ] | - | - | |

### 阶段 5: 注释内容往返相等性检查
| 编号 | 任务 | 状态 | 开始时间 | 完成时间 | 备注 |
|---|------|--------|---------|-----------|-------|
| 5.1 | Ammo.ts - 注释往返相等性检查 | [ ] | - | - | |
| 5.2 | Armor.ts - 注释往返相等性检查 | [ ] | - | - | |
| 5.3 | Artifact.ts - 注释往返相等性检查 | [ ] | - | - | |
| 5.4 | Battery.ts - 注释往返相等性检查 | [ ] | - | - | |
| 5.5 | BionicItem.ts - 注释往返相等性检查 | [ ] | - | - | |
| 5.6 | Comestible.ts - 注释往返相等性检查 | [ ] | - | - | |
| 5.7 | Generic.ts - 注释往返相等性检查 | [ ] | - | - | |
| 5.8 | Gun.ts - 注释往返相等性检查 | [ ] | - | - | |
| 5.9 | GunMod.ts - 注释往返相等性检查 | [ ] | - | - | |
| 5.10 | Magazine.ts - 注释往返相等性检查 | [ ] | - | - | |
| 5.11 | Tool.ts - 注释往返相等性检查 | [ ] | - | - | |
| 5.12 | Book.ts - 注释往返相等性检查 | [ ] | - | - | |
| 5.13 | PetArmor.ts - 注释往返相等性检查 | [ ] | - | - | |
| 5.14 | Seed.ts - 注释往返相等性检查 | [ ] | - | - | |
| 5.15 | Brewable.ts - 注释往返相等性检查 | [ ] | - | - | |
| 5.16 | Compostable.ts - 注释往返相等性检查 | [ ] | - | - | |
| 5.17 | Milling.ts - 注释往返相等性检查 | [ ] | - | - | |

**阶段5规则说明**:
1. 验证当前ts类型的注释是否和原始文档往返相等
2. 如果不相等以原始文档为准重写
3. 如果不相等但当前注释是明显的扩写/详情化，依然要补上原始文档的往返相等的翻译，同时保留当前注释的扩写/细化部分

## 文件对照表

### 已存在的Schema文件
| 文件名 | Subtype | Trait类型 | 状态 |
|--------|---------|-----------|------|
| Ammo.ts | AMMO | AmmoTrait | 需验证 |
| Armor.ts | ARMOR | ArmorTrait | 需验证 |
| Artifact.ts | ARTIFACT | ArtifactTrait | 需验证 |
| Battery.ts | BATTERY | BatteryTrait | 需验证 |
| BionicItem.ts | BIONIC_ITEM | BionicItemTrait | 需验证 |
| Comestible.ts | COMESTIBLE | ComestibleTrait | 需验证 |
| Generic.ts | GENERIC | GenericTrait | 需验证 |
| Gun.ts | GUN | GunTrait | 需验证 |
| GunMod.ts | GUNMOD | GunModTrait | 需验证 |
| Magazine.ts | MAGAZINE | MagazineTrait | 需验证 |
| Tool.ts | TOOL | ToolTrait | 需验证 |

### 缺失的Schema文件
| Subtype | 预期文件名 | 状态 |
|---------|------------|------|
| BOOK | Book.ts | 待创建 |
| PET_ARMOR | PetArmor.ts | 待创建 |
| TOOLMOD | ToolMod.ts | 待创建 |
| ENGINE | Engine.ts | 待创建 |
| WHEEL | Wheel.ts | 待创建 |
| SEED | Seed.ts | 待创建 |
| BREWABLE | Brewable.ts | 待创建 |
| COMPOSTABLE | Compostable.ts | 待创建 |
| MILLING | Milling.ts | 待创建 |

## 会话日志
| 时间 | 操作 | 结果 |
|------|--------|------|
| 2026-03-27 | 归档README.md到archive | 成功，重命名为README_schema_type_refinement.md |
| 2026-03-27 | 读取Item目录下所有文件 | 成功，共读取13个文件 |
| 2026-03-27 | 分析ItemSubtype列表 | 发现9个缺失的subtype schema |

## 断点恢复
- **最后完成任务**: 2.12
- **下一步操作**: 3.1 - 创建Book.ts schema
- **所需上下文**: 
  - 原始doc路径: `h:\CDDA\newver11\cdda-windows-with-graphics-and-sounds-x64-2025-12-01-0424\doc`
  - Schema路径: `f:\Sosarciel\CDDA\Workspace\Schema\src\Schema\Item`
  - Books文档位置: ITEM.md 行492-599

## 原始文档位置
- CDDA文档: `h:\CDDA\newver11\cdda-windows-with-graphics-and-sounds-x64-2025-12-01-0424\doc`
- **ITEM.md**: `h:\CDDA\newver11\cdda-windows-with-graphics-and-sounds-x64-2025-12-01-0424\doc\JSON\ITEM.md` (约1525行)
- JSON_INFO.md: 包含Item字段的详细说明

## 原始文档结构索引 (ITEM.md)

| Subtype | 行号范围 | 主要内容 |
|---------|----------|----------|
| Generic Items | 68-180 | 通用物品字段 |
| Ammo | 182-217 | 弹药定义 |
| Ammo Effects | 219-264 | 弹药效果 |
| Magazine | 266-278 | 弹匣定义 |
| Ammunition Type | 280-291 | 弹药类型 |
| Armor | 293-476 | 护甲定义 |
| Pet Armor | 478-490 | 宠物护甲 |
| Books | 492-599 | 书籍定义 |
| CBMs | 606-618 | 仿生组件 |
| Comestibles | 620-662 | 消耗品 |
| Containers | 665-711 | 容器定义 |
| Melee | 714-740 | 近战武器 |
| Memory Cards | 741-763 | 内存卡 |
| Gun | 765-810 | 枪械定义 |
| Gunmod | 812-863 | 枪械模组 |
| Batteries | 865-870 | 电池定义 |
| Tools | 872-920 | 工具定义 |
| Seed | 922-943 | 种子定义 |
| Brewables | 945-960 | 可酿造物品 |
| Compostables | 962-981 | 可堆肥物品 |
| Milling | 983-1004 | 可研磨物品 |
| Artifact Effects | 1006-1106 | 神器效果 |
| Use Actions | 1107-1423 | 使用动作 |
| Drop Actions | 1426-1436 | 投掷动作 |
| Tick Actions | 1438-1475 | 滴答动作 |

## 读取策略
- **分段读取**: 每次读取200-300行
- **关键字定位**: 使用Grep搜索特定subtype定义
- **避免全量读取**: 防止上下文溢出
