# Schema 类型精确化计划

本文档用于追踪 Schema 中不明确类型（any/number/string）的精确化进度。

## 进度说明
- [ ] 未开始
- [x] 已完成
- [~] 进行中

---

## 分类规则

### string 类型判断
1. **DescText** - 需要i18n的显示文本（名称、描述、消息等）
2. **ID引用** - 引用其他对象的ID，使用 `(XXXID)` 格式
3. **字面量类型** - 有固定可选值的字符串
4. **保持string** - 不需要i18n的非引用字符串（如作者名、版本号、文件路径等）

### number 类型判断
1. **Int** - 整数值（计数、等级、百分比等）
2. **Float** - 浮点值（倍率、比例等）
3. **保持number** - 不明确或混合类型

---

## 1. any 类型修复

### CommonToFurnitureAndTerrain.ts
- [x] `examine_action?: any` (L147) - 已修复为 `ExamineAction` 联合类型

---

## 2. number 类型修复

### MartialArt.ts
- [x] `scale: number` (L173) - 已修复为 `Float`

### MonsterAttack.ts
- [x] `accuracy?: number` (L58) - 已修复为 `Int`
- [x] `range?: number` (L78) - 已修复为 `Int`
- [x] `hitsize_min?: number` (L89) - 已修复为 `Int`
- [x] `hitsize_max?: number` (L91) - 已修复为 `Int`

### TalkTopic.ts
- [x] `difficulty?: number` (L116) - 已修复为 `Int`
- [x] `trust?: number` (L137) - 已修复为 `Int`
- [x] `fear?: number` (L139) - 已修复为 `Int`
- [x] `value?: number` (L141) - 已修复为 `Int`
- [x] `anger?: number` (L143) - 已修复为 `Int`
- [x] `owed?: number` (L145) - 已修复为 `Int`
- [x] `favors?: number` (L147) - 已修复为 `Int`

### Mutation.ts (大量number字段)
- [x] `dodge_modifier?: number` (L126) - 已修复为 `Int`
- [x] `vomit_multiplier?: number` (L128) - 已修复为 `Float`
- [x] `hearing_modifier?: number` (L130) - 已修复为 `Int`
- [x] `hp_adjustment?: number` (L132) - 已修复为 `Int`
- [x] `hp_modifier?: number` (L134) - 已修复为 `Float`
- [x] `hp_modifier_secondary?: number` (L136) - 已修复为 `Float`
- [x] `noise_modifier?: number` (L138) - 已修复为 `Float`
- [x] `obtain_cost_multiplier?: number` (L140) - 已修复为 `Float`
- [x] `overmap_sight?: number` (L142) - 已修复为 `Int`
- [x] `weakness_to_water?: number` (L192) - 已修复为 `Int`
- [x] `healing_multiplier?: number` (L240) - 已修复为 `Float`
- [x] `healing_awake?: number` (L242) - 已修复为 `Float`
- [x] `healing_resting?: number` (L244) - 已修复为 `Float`
- [x] `temperature_speed_modifier?: number` (L291) - 已修复为 `Float`
- [x] `pain_modifier?: number` (L293) - 已修复为 `Int`
- [x] `mana_modifier?: number` (L295) - 已修复为 `Int`
- [x] `mana_regen_multiplier?: number` (L297) - 已修复为 `Float`
- [x] `mana_multiplier?: number` (L299) - 已修复为 `Float`
- [x] `ignored: number` (L320) - 已修复为 `Int`

### NpcInstance.ts
- [x] `age?: number` (L40) - 已修复为 `Int`
- [x] `height?: number` (L42) - 已修复为 `Int`
- [x] `str?: number` (L44) - 已修复为 `Int`
- [x] `dex?: number` (L46) - 已修复为 `Int`
- [x] `int?: number` (L48) - 已修复为 `Int`
- [x] `per?: number` (L50) - 已修复为 `Int`
- [x] `aggression?: number` (L54) - 已修复为 `Int`
- [x] `bravery?: number` (L56) - 已修复为 `Int`
- [x] `collector?: number` (L58) - 已修复为 `Int`
- [x] `altruism?: number` (L60) - 已修复为 `Int`

### Item/Ammo.ts
- [x] `prop_damage?: number` (L22) - 已修复为 `Float`
- [x] `range_multiplier?: number` (L26) - 已修复为 `Float`
- [x] `dispersion?: number` (L28) - 已修复为 `Int`
- [x] `shot_spread?: number` (L46) - 已修复为 `Int`
- [x] `critical_multiplier?: number` (L48) - 已修复为 `Float`
- [x] `recoil?: number` (L50) - 已修复为 `Int`
- [x] `loudness?: number` (L62) - 已修复为 `Int`

### Item/Comestible.ts
- [x] `stim?: number` (L20) - 已修复为 `Int`
- [x] `fatigue_mod?: number` (L22) - 已修复为 `Int`
- [x] `quench?: number` (L28) - 已修复为 `Int`
- [x] `healthy?: number` (L30) - 已修复为 `Int`
- [x] `addiction_potential?: number` (L32) - 已修复为 `Int`
- [x] `monotony_penalty?: number` (L38) - 已修复为 `Int`
- [x] `calories?: number` (L40) - 已修复为 `Int`
- [x] `nutrition?: number` (L42) - 已修复为 `Int`
- [x] `stack_size?: number` (L48) - 已修复为 `Int`
- [x] `fun?: number` (L50) - 已修复为 `Int`
- [x] `freezing_point?: number` (L52) - 已修复为 `Float`
- [x] `parasites?: number` (L56) - 已修复为 `Int`
- [x] `rot_spawn_chance?: number` (L66) - 已修复为 `Int`

### Item/Gun.ts
- [x] `range: number` (L30) - 已修复为 `Int`
- [x] `dispersion?: number` (L35) - 已修复为 `Int`
- [x] `sight_dispersion?: number` (L37) - 已修复为 `Int`
- [x] `recoil?: number` (L39) - 已修复为 `Int`
- [x] `blackpowder_tolerance?: number` (L43) - 已修复为 `Int`
- [x] `min_cycle_recoil?: number` (L45) - 已修复为 `Int`
- [x] `clip_size?: number` (L47) - 已修复为 `Int`
- [x] `ammo_to_fire?: number` (L57) - 已修复为 `Int`
- [x] `reload?: number` (L64) - 已修复为 `Int`
- [x] `loudness?: number` (L80) - 已修复为 `Int`
- [x] `reload_noise_volume?: number` (L88) - 已修复为 `Int`
- [x] `handling?: number` (L92) - 已修复为 `Int`
- [x] `FireMode[2]: number` (L108) - 已修复为 `Int`

### Item/GunMod.ts (大量number字段)
- [x] `damage_modifier?: number` (L31) - 已修复为 `Int`
- [x] `dispersion_modifier?: number` (L33) - 已修复为 `Int`
- [x] `loudness_modifier?: number` (L35) - 已修复为 `Int`
- [x] `range_modifier?: number` (L37) - 已修复为 `Int`
- [x] `range_multiplier?: number` (L39) - 已修复为 `Float`
- [x] `overwrite_min_cycle_recoil?: number` (L43) - 已修复为 `Int`
- [x] `reload_noise_volume?: number` (L47) - 已修复为 `Int`
- [x] `aim_speed_modifier?: number` (L49) - 已修复为 `Int`
- [x] `energy_drain_multiplier?: number` (L53) - 已修复为 `Float`
- [x] `field_of_view?: number` (L60) - 已修复为 `Int`
- [x] `shot_spread_multiplier_modifier?: number` (L68) - 已修复为 `Float`
- [x] `energy_drains_multiplier?: number` (L72) - 已修复为 `Float`
- [x] `reload_modifier?: number` (L74) - 已修复为 `Int`
- [x] `min_str_required_mod?: number` (L76) - 已修复为 `Int`
- [x] `aim_speed?: number` (L78) - 已修复为 `Int`
- [x] `consume_chance?: number` (L84) - 已修复为 `Int`
- [x] `consume_divisor?: number` (L88) - 已修复为 `Int`
- [x] `handling_modifier?: number` (L90) - 已修复为 `Int`
- [x] `overheat_threshold_modifier?: number` (L98) - 已修复为 `Int`
- [x] `overheat_threshold_multiplier?: number` (L102) - 已修复为 `Float`
- [x] `cooling_value_modifier?: number` (L106) - 已修复为 `Int`
- [x] `cooling_value_multiplier?: number` (L110) - 已修复为 `Float`
- [x] `heat_per_shot_modifier?: number` (L114) - 已修复为 `Int`
- [x] `heat_per_shot_multiplier?: number` (L118) - 已修复为 `Float`

### Item/Magazine.ts
- [x] `capacity: number` (L19) - 已修复为 `Int`
- [x] `count?: number` (L21) - 已修复为 `Int`
- [x] `reload_time?: number` (L27) - 已修复为 `Int`

### 其他文件中的number字段
- [x] `DamageType.ts:126` - `order?: number` → `Int`
- [x] `Flag.ts:26` - `taste_mod?: number` → `Int`
- [x] `GenericDefine.ts:212-234` - multiplier字段已修复为 `Float`/`Int`
- [x] `GenericDefine.ts:336-387` - damage/explosion字段已修复
- [x] `ItemCategory.ts:21` - `sort_rank: number` → `Int`
- [x] `Mapgen.ts` - 坐标/数值字段 → `Int`
- [x] `MathFuncion.ts:16` - `num_args: number` → `Int`
- [x] `MutationCategory.ts:23,36,41` - threshold_min/base_removal_chance → `Int`, base_removal_cost_mul → `Float`
- [~] `OptionSlider.ts:18` - `default?: number` - **保持number** (可能是int或float)
- [~] `OptionSlider.ts:48` - `val: number` - **保持number** (可能是int或float)
- [x] `OvermapTerrain.ts:10` - `chance/population` → `Int`
- [x] `Palette.ts:46,54,56` - chance/repeat → `Int`
- [x] `SoundEffect.ts:18` - `volume: number` → `Int`
- [x] `Tileset.ts:7-15,39-40,76` - 尺寸相关字段 → `Int`
- [x] `VehiclePart.ts:28,38,40,51,57` - bonus/damage_modifier/durability/epower/difficulty → `Int`
- [x] `WeakpointSet.ts:117,119` - bonus/penalty → `Int`
- [~] `MissionDefinition.ts:25` - `value: number` - **保持number** (描述为"未知")
- [x] `MissionDefinition.ts:155-159` - offset字段 → `Int`

---

## 3. string 类型修复

### ModInfo.ts (保持string - 不需要i18n)
- [x] `name: string` (L25) - 模组显示名，需要i18n → DescText
- [x] `authors?: string[]` (L29) - 作者名，保持string
- [x] `maintainers?: string[]` (L31) - 维护者名，保持string
- [ ] `category?: string` (L38) - 分类，可能是字面量
- [ ] `loading_images?: string[]` (L51) - 文件路径，保持string
- [ ] `version?: string` (L55) - 版本号，保持string
- [ ] `path?: string` (L71) - 路径，保持string

### Monster.ts
- [ ] `food: string[]` (L476) - 食物类别，可能是字面量

### MartialArt.ts
- [ ] `"scaling-stat"?: string` (L177) - 缩放属性，可能是字面量或ID引用

### TalkTopic.ts
- [ ] `sentinel?: string` (L255) - 验证

### Mutation.ts
- [ ] `types?: string[]` (L41) - 验证
- [ ] `ignored_by?: string[]` (L196) - 验证
- [ ] `id: string` (L310) - 可能是ID引用

### Bionic.ts
- [ ] `name: string | { str: string }` (L26) - 需要i18n → DescText
- [ ] `description: string` (L28) - 需要i18n → DescText
- [ ] `fuel_options?: string[]` (L87) - 验证

### BodyPart.ts
- [ ] `hp_bar_ui_text: string` (L63) - 验证
- [ ] `legacy_id?: string` (L233) - ID引用

### Item相关文件
- [ ] `Item/Armor.ts:59` - `valid_mods?: string[]`
- [ ] `Item/Comestible.ts:64,70` - `rot_spawn`, `petfood`
- [x] `Item/Generic.ts:109,219` - solar_efficiency → `Float`, environmental_protection_with_filter → `Int`
- [ ] `Item/Gun.ts:86` - `reload_noise?: string`

### 其他文件中的string字段
- [ ] `Fault.ts:36,41` - item_prefix, item_suffix
- [ ] `FaultFix.ts:40,45` - 索引签名和str字段
- [ ] `FieldType.ts:83,129,198,200` - effect_id, issue, sound字段
- [ ] `GenericDefine.ts:71-77` - str相关字段（已是DescText的一部分）
- [ ] `ItemCategory.ts:19,30` - zone和id字段
- [ ] `ItemGroup.ts:102-105` - ammo-item等字段
- [ ] `Mapgen.ts:72` - rows字段
- [ ] `MathFuncion.ts:20` - return字段
- [ ] `ModTileset.ts:9` - compatibility字段
- [ ] `MoraleType.ts:13` - text字段
- [ ] `NpcClass.ts:61,107` - shopkeeper_blacklist和traits
- [ ] `NPCFaction.ts:70` - id字段
- [ ] `OvermapSpecial.ts:14` - locations字段
- [ ] `Palette.ts:23,52` - liquid和索引签名
- [ ] `Profession.ts:41,98` - npc_background和requirement
- [ ] `Recipe.ts:86,165` - id_suffix和construction_blueprint
- [ ] `SoundEffect.ts:20` - files字段
- [ ] `Spell.ts:49` - effect_str字段
- [ ] `Terrain.ts:47` - allowed_template_ids字段
- [ ] `VehiclePart.ts:84,128,162` - hotkey, id, proficiencies字段
- [ ] `WeakpointSet.ts:113` - id字段

### Eoc相关文件 (大量string字段)
- [ ] `Eoc/EocEffect/GenericEffect.ts:647` - keys字段
- [ ] `Eoc/EocEffect/CharacterEffect.ts:378-425` - add_var, value等字段
- [ ] `Eoc/EocEffect/NpcEffect.ts:234-391` - 多个string字段
- [ ] `Eoc/Expression/BoolExpr.ts:58,84` - mod_is_loaded, has_move_mode
- [ ] `Eoc/Expression/DefineJMath.ts` - 多个函数参数
- [ ] `Eoc/Expression/ExpressionIndex.ts:7-11` - 变量类型字段

---

## 统计

| 类型 | 原始数量 | 已修复 | 剩余 |
|------|---------|--------|------|
| any | 1 | 1 | 0 |
| number | ~166 | ~153 | 13 |
| string | ~108 | 0 | 112 |
| **总计** | **~275** | **~154** | **~125** |

---

## 执行原则

1. **每验证一个字段就更新计划**
2. **优先处理 any 类型**
3. **按文件分组处理，避免混乱**
4. **对于不确定的字段，查阅原始doc确认**
