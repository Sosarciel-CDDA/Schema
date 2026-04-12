# 任务: CDDA Mod法术数据提取完善

## 状态概览
- **启动时间**: 2026-04-12
- **最后更新**: 2026-04-12
- **当前阶段**: 计划确认

## 重要注意事项 (每次必读)
- **目标文件**: `f:\Sosarciel\CDDA\Workspace\Schema\src\Macro\ExtractProcess.extract.ts`
- **数据源路径**: `H:\CDDA\newver11\cdda-windows-with-graphics-and-sounds-x64-2026-03-23-0402\data\mods\`
- **三个Mod**: Magiclysm(大魔法), Xedra_Evolved, MindOverMatter(MoM)
- **提取模式**: 使用 `extractDefineIdList` 宏，配合 `extractFn` 函数
- **法术过滤条件**: `v.spell_class != undefined && v.type == "SPELL"`
- **命名规范**: 
  - Magiclysm attunements: `MagiclysmAttunXxxxxSpellID`
  - Xedra_Evolved: `XedraEvolvedXxxxxSpellID`
- **排除**: `item_spells.json`（奇物法术）、`integrated_armor_spells.json`（被动效果）
- **代码风格**: 遵循项目TypeScript规范，无注释，使用type而非interface

---

## 待提取文件清单

### 一、Magiclysm attunements (31个文件) - 命名格式: `MagiclysmAttunXxxxxSpellID`

| 序号 | 文件名 | 类型名 | spell_class |
|------|--------|--------|-------------|
| 1 | Spells/attunements/Alchemist.json | MagiclysmAttunAlchemistSpellID | ALCHEMIST |
| 2 | Spells/attunements/Artificer.json | MagiclysmAttunArtificerSpellID | ARTIFICER |
| 3 | Spells/attunements/Biotek.json | MagiclysmAttunBiotekSpellID | BIOTEK |
| 4 | Spells/attunements/Blood_Mage.json | MagiclysmAttunBloodMageSpellID | BLOOD_MAGE |
| 5 | Spells/attunements/Boreal_Mage.json | MagiclysmAttunBorealMageSpellID | BOREAL_MAGE |
| 6 | Spells/attunements/Cleansing_Flame.json | MagiclysmAttunCleansingFlameSpellID | CLEANSING_FLAME |
| 7 | Spells/attunements/Crusader.json | MagiclysmAttunCrusaderSpellID | CRUSADER |
| 8 | Spells/attunements/Earth_Elemental.json | MagiclysmAttunEarthElementalSpellID | EARTH_ELEMENTAL |
| 9 | Spells/attunements/Fire_Elemental.json | MagiclysmAttunFireElementalSpellID | FIRE_ELEMENTAL |
| 10 | Spells/attunements/Force_Mage.json | MagiclysmAttunForceMageSpellID | FORCE_MAGE |
| 11 | Spells/attunements/Gaias_Chosen.json | MagiclysmAttunGaiasChosenSpellID | GAIAS_CHOSEN |
| 12 | Spells/attunements/Glacier_Mage.json | MagiclysmAttunGlacierMageSpellID | GLACIER_MAGE |
| 13 | Spells/attunements/Golemancer.json | MagiclysmAttunGolemancerSpellID | GOLEMANCER |
| 14 | Spells/attunements/Gravity_Mage.json | MagiclysmAttunGravityMageSpellID | GRAVITY_MAGE |
| 15 | Spells/attunements/Ice_Elemental.json | MagiclysmAttunIceElementalSpellID | ICE_ELEMENTAL |
| 16 | Spells/attunements/Illusionist.json | MagiclysmAttunIllusionistSpellID | ILLUSIONIST |
| 17 | Spells/attunements/Magnetism_Mage.json | MagiclysmAttunMagnetismMageSpellID | MAGNETISM_MAGE |
| 18 | Spells/attunements/Overclocker.json | MagiclysmAttunOverclockerSpellID | OVERCLOCKER |
| 19 | Spells/attunements/Permafrost_Mage.json | MagiclysmAttunPermafrostMageSpellID | PERMAFROST_MAGE |
| 20 | Spells/attunements/Radiation_Mage.json | MagiclysmAttunRadiationMageSpellID | RADIATION_MAGE |
| 21 | Spells/attunements/Shaman.json | MagiclysmAttunShamanSpellID | SHAMAN |
| 22 | Spells/attunements/Shapeshifter.json | MagiclysmAttunShapeshifterSpellID | SHAPESHIFTER |
| 23 | Spells/attunements/Soulfire.json | MagiclysmAttunSoulfireSpellID | SOULFIRE |
| 24 | Spells/attunements/Storm_Elemental.json | MagiclysmAttunStormElementalSpellID | STORM_ELEMENTAL |
| 25 | Spells/attunements/Stormcaller.json | MagiclysmAttunStormcallerSpellID | STORMCALLER |
| 26 | Spells/attunements/Sun_Mage.json | MagiclysmAttunSunMageSpellID | SUN_MAGE |
| 27 | Spells/attunements/Tundra_Mage.json | MagiclysmAttunTundraMageSpellID | TUNDRA_MAGE |
| 28 | Spells/attunements/Void_Mage.json | MagiclysmAttunVoidMageSpellID | VOID_MAGE |
| 29 | Spells/attunements/Vulcanist.json | MagiclysmAttunVulcanistSpellID | VULCANIST |
| 30 | Spells/attunements/Wither_Mage.json | MagiclysmAttunWitherMageSpellID | WITHER_MAGE |

### 二、Xedra_Evolved spells目录 (6个文件) - 命名格式: `XedraEvolvedXxxxxSpellID`

| 序号 | 文件名 | 类型名 | spell_class | 备注 |
|------|--------|--------|-------------|------|
| 1 | spells/changeling_spells.json | XedraEvolvedChangelingSpellID | CHANGELING_MAGIC | 变形者法术 |
| 2 | spells/classless_spells.json | XedraEvolvedClasslessSpellID | - | 无职业法术，需过滤type=="SPELL" |
| 3 | spells/hedge_magic_spells.json | XedraEvolvedHedgeMagicSpellID | HEDGE_MAGIC | 边缘魔法 |
| 4 | spells/inventor_spells.json | XedraEvolvedInventorSpellID | INVENTOR | 发明家法术 |
| 5 | spells/lilin_spells.json | XedraEvolvedLilinSpellID | LILIN_TRAITS | 莉莉姆法术 |
| 6 | spells/vampire_spells.json | XedraEvolvedVampireSpellID | VAMPIRE_BLOOD_ARTS | 吸血鬼法术 |

### 三、Xedra_Evolved mutations/paraclesians目录 (7个文件) - 命名格式: `XedraEvolvedXxxxxSpellID`

| 序号 | 文件名 | 类型名 | spell_class | 法术数量 |
|------|--------|--------|-------------|----------|
| 1 | mutations/paraclesians/arvore_mutation_spells.json | XedraEvolvedArvoreSpellID | ARVORE | ~40个 |
| 2 | mutations/paraclesians/homullus_mutation_spells.json | XedraEvolvedHomullusSpellID | HOMULLUS | ~13个 |
| 3 | mutations/paraclesians/ierde_mutation_spells.json | XedraEvolvedIerdeSpellID | IERDE | ~30个 |
| 4 | mutations/paraclesians/paraclesian_mutation_spells.json | XedraEvolvedParaclesianSpellID | SYLPH/UNDINE等 | ~12个 |
| 5 | mutations/paraclesians/salamander_mutation_spells.json | XedraEvolvedSalamanderSpellID | SALAMANDER | ~7个 |
| 6 | mutations/paraclesians/sylph_mutation_spells.json | XedraEvolvedSylphSpellID | SYLPH | 待确认 |
| 7 | mutations/paraclesians/undine_mutation_spells.json | XedraEvolvedUndineSpellID | UNDINE | 待确认 |

### 四、排除文件（不需要提取）

| 文件 | 原因 |
|------|------|
| spells/item_spells.json | 奇物法术，非玩家可施放 |
| spells/integrated_armor_spells.json | 集成装甲被动效果，无spell_class |
| spells/dreamer_spells.json | 已提取 |
| spells/eater_spells.json | 已提取 |

---

## 已提取内容（无需修改）

### Magiclysm (已有)
- Spells/classless.json → MagiclysmClasslessSpellID
- Spells/animist.json → MagiclysmAnimistSpellID
- Spells/biomancer.json → MagiclysmBiomancerSpellID
- Spells/druid.json → MagiclysmDruidSpellID
- Spells/earthshaper.json → MagiclysmEarthshaperSpellID
- Spells/kelvinist.json → MagiclysmKelvinistSpellID
- Spells/magus.json → MagiclysmMagusSpellID
- Spells/stormshaper.json → MagiclysmStormshaperSpellID
- Spells/technomancer.json → MagiclysmTechnomancerSpellID

### MindOverMatter (已有)
- powers/classless.json → MindOverMatterClasslessSpellID
- powers/biokinesis.json → MindOverMatterBiokinesisSpellID
- powers/clairsentience.json → MindOverMatterClairsentienceSpellID
- powers/electrokinesis.json → MindOverMatterElectrokinesisSpellID
- powers/photokinesis.json → MindOverMatterPhotokinesisSpellID
- powers/pyrokinesis.json → MindOverMatterPyrokinesisSpellID
- powers/telekinesis.json → MindOverMatterTelekinesisSpellID
- powers/telepathy.json → MindOverMatterTelepathySpellID
- powers/teleportation.json → MindOverMatterTeleportationSpellID
- powers/vitakinesis.json → MindOverMatterVitakinesisSpellID

### Xedra_Evolved (已有)
- spells/dreamer_spells.json → XedraEvolvedDreamerSpellID
- spells/eater_spells.json → XedraEvolvedEaterSpellID

---

## 任务列表

### 阶段 1: 信息收集与确认
| 编号 | 任务 | 状态 | 开始时间 | 完成时间 | 备注 |
|------|------|------|----------|----------|------|
| 1.1 | 检查Xedra_Evolved完整法术文件结构 | [x] | 2026-04-12 | 2026-04-12 | 已完成 |
| 1.2 | 确认attunements法术文件的数据结构 | [x] | 2026-04-12 | 2026-04-12 | 已确认使用spell_class过滤 |
| 1.3 | 与用户讨论确认提取范围 | [x] | 2026-04-12 | 2026-04-12 | 已确认 |

### 阶段 2: 代码实现
| 编号 | 任务 | 状态 | 开始时间 | 完成时间 | 备注 |
|------|------|------|----------|----------|------|
| 2.1 | 为Magiclysm attunements添加提取宏 (统一类型名) | [x] | 2026-04-12 | 2026-04-12 | MagiclysmAttunSpellID |
| 2.2 | 为Xedra_Evolved spells目录添加提取宏 (6个) | [x] | 2026-04-12 | 2026-04-12 | |
| 2.3 | 为Xedra_Evolved paraclesians添加提取宏 (7个) | [x] | 2026-04-12 | 2026-04-12 | RaceXxxx格式 |
| 2.4 | 更新createExtractIndex调用 | [x] | 2026-04-12 | 2026-04-12 | |
| 2.5 | 编译验证 | [x] | 2026-04-12 | 2026-04-12 | tsc --noEmit 通过 |

### 阶段 3: 测试与验证
| 编号 | 任务 | 状态 | 开始时间 | 完成时间 | 备注 |
|------|------|------|----------|----------|------|
| 3.1 | 运行提取脚本验证输出 | [x] | 2026-04-12 | 2026-04-12 | |
| 3.2 | 检查生成的类型定义文件 | [x] | 2026-04-12 | 2026-04-12 | 所有文件正确生成 |

---

## 会话日志
| 时间 | 操作 | 结果 |
|------|------|------|
| 2026-04-12 | 创建任务追踪文档 | 完成 |
| 2026-04-12 | 扫描三个Mod目录结构 | 发现Magiclysm attunements目录(30个文件) |
| 2026-04-12 | 分析现有提取代码 | 确认attunements完全缺失 |
| 2026-04-12 | 扫描Xedra_Evolved spells目录 | 发现6个新法术文件 |
| 2026-04-12 | 扫描Xedra_Evolved paraclesians目录 | 发现7个种族法术文件 |
| 2026-04-12 | 确认命名规范 | attunements使用MagiclysmAttunXxxxx格式 |

## 断点恢复
- **最后完成任务**: 文件清单整理
- **下一步操作**: 等待用户确认后开始代码实现
- **所需上下文**: 
  - 目标文件: `f:\Sosarciel\CDDA\Workspace\Schema\src\Macro\ExtractProcess.extract.ts`
  - attunements目录: `H:\CDDA\...\mods\Magiclysm\Spells\attunements\`
  - Xedra spells目录: `H:\CDDA\...\mods\Xedra_Evolved\spells\`
  - Xedra paraclesians目录: `H:\CDDA\...\mods\Xedra_Evolved\mutations\paraclesians\`

---

## 待确认问题
1. **paraclesians目录**: 7个种族法术文件是否全部需要提取？
2. **classless_spells.json**: 是否需要特殊过滤（部分是magic_type定义）？
3. **其他确认**: 以上清单是否完整？
