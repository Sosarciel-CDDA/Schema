# Item Schema 字段验证 - 上下文文档

## 当前状态
- **启动时间**: 2026-03-28
- **最后更新**: 2026-03-28
- **当前阶段**: 阶段1 - AMMO字段验证
- **追踪表格**: [TASK_TRACKER_ITEM_FIELD_VERIFY.md](./TASK_TRACKER_ITEM_FIELD_VERIFY.md)

---

## 所需Skill (任务开始时调用)
1. **long-task-tracker** - 超长任务追踪器，用于管理复杂多步骤任务
2. **cdda-schema-writer** - CDDA Schema编写器，用于将JSON文档转换为TypeScript类型定义

---

## 重要注意事项 (每次必读)

### 验证规则
1. **存在性**: 在文档搜索，明确"弃用"则删除代码，找不到匹配则标记"@unknown"
2. **可选性**: 检查doc是否明确"可选/必要",有则修改?，无则以代码为准
3. **注释往返相等**: 
   - **重要**: 先自己尝试往返相等的翻译出中文，再以自己的翻译与当前注释对比
   - 不相等以原文为准重写
   - 扩写保留但追加原文翻译

### 跳过规则
- **跳过flag枚举**: flag是动态的，无验证意义

### 原子任务
- 每次只验证一个字段
- 完成后立即更新追踪表格

---

## 文档位置

### 原始CDDA文档
- **ITEM.md**: `h:\CDDA\newver11\cdda-windows-with-graphics-and-sounds-x64-2025-12-01-0424\doc\JSON\ITEM.md`
- **JSON_INFO.md**: `h:\CDDA\newver11\cdda-windows-with-graphics-and-sounds-x64-2025-12-01-0424\doc\JSON\JSON_INFO.md`

### Schema代码位置
- **Schema路径**: `f:\Sosarciel\CDDA\Workspace\Schema\src\Schema\Item`

---

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

### 读取策略
- **分段读取**: 每次读取200-300行
- **关键字定位**: 使用Grep搜索特定subtype定义
- **避免全量读取**: 防止上下文溢出

---

## 状态指示器说明

| 标识 | 状态 | 说明 |
|------|------|------|
| `[ ]` | 待处理 | 等待开始 |
| `[>]` | 进行中 | 正在处理 |
| `[x]` | 已完成 | 成功完成 |
| `[!]` | 失败 | 需重试或换方案 |
| `[-]` | 跳过 | 不执行此任务 |

---

## 字段验证结果说明

| 列名 | 值 | 说明 |
|------|-----|------|
| 存在性 | `✓` | 文档中存在 |
| 存在性 | `✗` | 文档明确弃用，需删除代码 |
| 存在性 | `?` | 找不到匹配，标记@unknown |
| 可选性 | `?` | 文档明确可选 |
| 可选性 | `!` | 文档明确必要 |
| 可选性 | `-` | 无明确说明，以代码为准 |
| 注释 | `✓` | 往返相等 |
| 注释 | `~` | 已修正 |
| 注释 | `+` | 扩写保留，追加原文翻译 |

---

## Schema文件对照表

| 文件名 | Subtype | Trait类型 |
|--------|---------|-----------|
| Ammo.ts | AMMO | AmmoTrait |
| Armor.ts | ARMOR | ArmorTrait |
| Artifact.ts | ARTIFACT | ArtifactTrait |
| Battery.ts | BATTERY | BatteryTrait |
| BionicItem.ts | BIONIC_ITEM | BionicItemTrait |
| Book.ts | BOOK | BookTrait |
| Comestible.ts | COMESTIBLE | ComestibleTrait |
| Compostable.ts | COMPOSTABLE | CompostableTrait |
| Engine.ts | ENGINE | EngineTrait |
| Generic.ts | GENERIC | GenericTrait |
| Gun.ts | GUN | GunTrait |
| GunMod.ts | GUNMOD | GunModTrait |
| Magazine.ts | MAGAZINE | MagazineTrait |
| Milling.ts | MILLING | MillingTrait |
| PetArmor.ts | PET_ARMOR | PetArmorTrait |
| Seed.ts | SEED | SeedTrait |
| Tool.ts | TOOL | ToolTrait |
| ToolMod.ts | TOOLMOD | ToolModTrait |
| Wheel.ts | WHEEL | WheelTrait |
| Brewable.ts | BREWABLE | BrewableTrait |

---

## 会话日志

| 时间 | 操作 | 结果 |
|------|--------|------|
| 2026-03-28 | 归档TASK_TRACKER_ITEM_SCHEMA.md | 成功，重命名为TASK_TRACKER_ITEM_SCHEMA_Phase1.md |
| 2026-03-28 | 创建上下文文档 | 成功 |
| 2026-03-28 | 创建追踪表格文档 | 成功 |

---

## 断点恢复

- **最后完成任务**: 文档拆分
- **下一步操作**: 阶段1.1 - 验证AMMO.ammo_type字段
- **当前进度**: 查看 [TASK_TRACKER_ITEM_FIELD_VERIFY.md](./TASK_TRACKER_ITEM_FIELD_VERIFY.md)
