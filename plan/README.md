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
- [ ] `examine_action?: any` (L147) - 验证具体类型

---

## 2. number 类型修复

### MartialArt.ts
- [ ] `scale: number` (L173) - 加成值，应为 Float

### MonsterAttack.ts
- [ ] `accuracy?: number` (L58) - 验证
- [ ] `range?: number` (L78) - 验证
- [ ] `hitsize_min?: number` (L89) - 验证
- [ ] `hitsize_max?: number` (L91) - 验证

### TalkTopic.ts
- [ ] `difficulty?: number` (L116) - 验证
- [ ] `trust?: number` (L137) - 验证
- [ ] `fear?: number` (L139) - 验证
- [ ] `value?: number` (L141) - 验证
- [ ] `anger?: number` (L143) - 验证
- [ ] `owed?: number` (L145) - 验证
- [ ] `favors?: number` (L147) - 验证

### Mutation.ts (大量number字段)
- [ ] `dodge_modifier?: number` (L126) - 验证
- [ ] `vomit_multiplier?: number` (L128) - 验证
- [ ] `hearing_modifier?: number` (L130) - 验证
- [ ] `hp_adjustment?: number` (L132) - 验证
- [ ] `hp_modifier?: number` (L134) - 验证
- [ ] `hp_modifier_secondary?: number` (L136) - 验证
- [ ] `noise_modifier?: number` (L138) - 验证
- [ ] `obtain_cost_multiplier?: number` (L140) - 验证
- [ ] `overmap_sight?: number` (L142) - 验证
- [ ] `weakness_to_water?: number` (L192) - 验证
- [ ] `healing_multiplier?: number` (L240) - 验证
- [ ] `healing_awake?: number` (L242) - 验证
- [ ] `healing_resting?: number` (L244) - 验证
- [ ] `temperature_speed_modifier?: number` (L291) - 验证
- [ ] `pain_modifier?: number` (L293) - 验证
- [ ] `mana_modifier?: number` (L295) - 验证
- [ ] `mana_regen_multiplier?: number` (L297) - 验证
- [ ] `mana_multiplier?: number` (L299) - 验证
- [ ] `ignored: number` (L320) - 验证

### NpcInstance.ts
- [ ] `age?: number` (L40) - 验证
- [ ] `height?: number` (L42) - 验证
- [ ] `str?: number` (L44) - 验证
- [ ] `dex?: number` (L46) - 验证
- [ ] `int?: number` (L48) - 验证
- [ ] `per?: number` (L50) - 验证
- [ ] `aggression?: number` (L54) - 验证
- [ ] `bravery?: number` (L56) - 验证
- [ ] `collector?: number` (L58) - 验证
- [ ] `altruism?: number` (L60) - 验证

### Item/Ammo.ts
- [ ] `prop_damage?: number` (L22) - 验证
- [ ] `range_multiplier?: number` (L26) - 验证
- [ ] `dispersion?: number` (L28) - 验证
- [ ] `shot_spread?: number` (L46) - 验证
- [ ] `critical_multiplier?: number` (L48) - 验证
- [ ] `recoil?: number` (L50) - 验证
- [ ] `loudness?: number` (L62) - 验证

### Item/Comestible.ts
- [ ] `stim?: number` (L20) - 验证
- [ ] `fatigue_mod?: number` (L22) - 验证
- [ ] `quench?: number` (L28) - 验证
- [ ] `healthy?: number` (L30) - 验证
- [ ] `addiction_potential?: number` (L32) - 验证
- [ ] `monotony_penalty?: number` (L38) - 验证
- [ ] `calories?: number` (L40) - 验证
- [ ] `nutrition?: number` (L42) - 验证
- [ ] `stack_size?: number` (L48) - 验证
- [ ] `fun?: number` (L50) - 验证
- [ ] `freezing_point?: number` (L52) - 验证
- [ ] `parasites?: number` (L56) - 验证
- [ ] `rot_spawn_chance?: number` (L66) - 验证

### Item/Gun.ts
- [ ] `range: number` (L30) - 验证
- [ ] `dispersion?: number` (L35) - 验证
- [ ] `sight_dispersion?: number` (L37) - 验证
- [ ] `recoil?: number` (L39) - 验证
- [ ] `blackpowder_tolerance?: number` (L43) - 验证
- [ ] `min_cycle_recoil?: number` (L45) - 验证
- [ ] `clip_size?: number` (L47) - 验证
- [ ] `ammo_to_fire?: number` (L57) - 验证
- [ ] `reload?: number` (L64) - 验证
- [ ] `loudness?: number` (L80) - 验证
- [ ] `reload_noise_volume?: number` (L88) - 验证

### Item/GunMod.ts (大量number字段)
- [ ] `damage_modifier?: number` (L31) - 验证
- [ ] `dispersion_modifier?: number` (L33) - 验证
- [ ] `loudness_modifier?: number` (L35) - 验证
- [ ] `range_modifier?: number` (L37) - 验证
- [ ] `range_multiplier?: number` (L39) - 验证
- [ ] `overwrite_min_cycle_recoil?: number` (L43) - 验证
- [ ] `reload_noise_volume?: number` (L47) - 验证
- [ ] `aim_speed_modifier?: number` (L49) - 验证
- [ ] `energy_drain_multiplier?: number` (L53) - 验证
- [ ] `field_of_view?: number` (L60) - 验证
- [ ] `shot_spread_multiplier_modifier?: number` (L68) - 验证
- [ ] `energy_drains_multiplier?: number` (L72) - 验证
- [ ] `reload_modifier?: number` (L74) - 验证
- [ ] `min_str_required_mod?: number` (L76) - 验证
- [ ] `aim_speed?: number` (L78) - 验证
- [ ] `consume_chance?: number` (L84) - 验证
- [ ] `consume_divisor?: number` (L88) - 验证
- [ ] `handling_modifier?: number` (L90) - 验证
- [ ] `overheat_threshold_modifier?: number` (L98) - 验证
- [ ] `overheat_threshold_multiplier?: number` (L102) - 验证
- [ ] `cooling_value_modifier?: number` (L106) - 验证
- [ ] `cooling_value_multiplier?: number` (L110) - 验证
- [ ] `heat_per_shot_modifier?: number` (L114) - 验证
- [ ] `heat_per_shot_multiplier?: number` (L118) - 验证

### Item/Magazine.ts
- [ ] `capacity: number` (L19) - 验证
- [ ] `count?: number` (L21) - 验证
- [ ] `reload_time?: number` (L27) - 验证

### 其他文件中的number字段
- [ ] `DamageType.ts:126` - `order?: number`
- [ ] `Flag.ts:26` - `taste_mod?: number`
- [ ] `GenericDefine.ts:212-234` - 多个multiplier字段
- [ ] `GenericDefine.ts:336-387` - damage相关字段
- [ ] `ItemCategory.ts:21` - `sort_rank: number`
- [ ] `Mapgen.ts` - 多个坐标/数值字段
- [ ] `MathFuncion.ts:16` - `num_args: number`
- [ ] `MissionDefinition.ts:25,155-159` - value和offset字段
- [ ] `MutationCategory.ts:23,36,41` - threshold相关字段
- [ ] `OptionSlider.ts:18,48` - default和val字段
- [ ] `OvermapTerrain.ts:10` - `chance: number`
- [ ] `Palette.ts:46,54,56` - chance和repeat字段
- [ ] `SoundEffect.ts:18` - `volume: number`
- [ ] `Tileset.ts:7-15,39-40,76` - 尺寸相关字段
- [ ] `VehiclePart.ts:28,38,40,51,57` - 车辆部件数值字段
- [ ] `WeakpointSet.ts:117,119` - bonus和penalty字段

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
- [ ] `Item/Generic.ts:47,163,201,276` - 多个string字段
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

| 类型 | 待验证数量 |
|------|-----------|
| any | 1 |
| number | ~166 |
| string | ~108 |
| **总计** | **~275** |

---

## 执行原则

1. **每验证一个字段就更新计划**
2. **优先处理 any 类型**
3. **按文件分组处理，避免混乱**
4. **对于不确定的字段，查阅原始doc确认**
