# Schema 类型修复计划

本文档用于追踪现有 Schema 定义的修复进度，重点解决 `any` 类型、注释缺失和往返不等问题。

## 进度说明
- [ ] 未开始
- [x] 已完成
- [~] 进行中

---

## 修复任务列表

### 1. ModInfo.ts - 注释补全
- [x] `ModInfo` 类型 - 检索原始 doc 补全字段说明 (已完成：添加了完整注释和缺失字段)

### 2. MartialArt.ts - any 类型修复
- [x] `flat_bonuses?: any[]` - 已修复为 `MartialArtBonus[]`
- [x] `mult_bonuses?: any[]` - 已修复为 `MartialArtBonus[]`

### 3. Monster.ts - any 类型修复 (注意：原始 doc 极大，逐个处理)
- [x] `petfood?: any` - 已修复为 `MonPetfood`
- [x] `special_when_hit?: any[]` - 已修复为 `[string, Int]`
- [x] `biosignature?: any` - 已修复为 `MonBiosignature`

---

## 执行原则

1. **每看完一个 doc 就先修改文件，再更新计划**
2. **避免一次看多个文档**
3. **以英文注释为准重写中文注释**（除非有明显扩写）
4. **实现往返相等的翻译**

---

## 统计

- 总任务数：6
- 已完成：6
- 进行中：0
- 未开始：0
