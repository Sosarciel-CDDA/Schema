# Item Schema 字段验证 - 追踪表格

> **上下文文档**: [CONTEXT_ITEM_FIELD_VERIFY.md](./CONTEXT_ITEM_FIELD_VERIFY.md)
> 
> **启动前必读**: 先阅读上下文文档了解验证规则和文档位置

---

## 当前进度
- **当前阶段**: 阶段2 - ARMOR字段验证
- **最后更新**: 2026-03-28

---

## 阶段 1: AMMO 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 1.1 | ammo_type | [x] | ✓ | ! | ✓ | 必要字段 |
| 1.2 | damage | [x] | ✓ | ? | ✓ | 可选 |
| 1.3 | prop_damage | [x] | ? | - | ? | @unknown JSON_INFO.md提及但无详细定义 |
| 1.4 | range | [x] | ✓ | ? | ✓ | 可选 |
| 1.5 | recovery_chance | [x] | ✓ | ? | ✓ | 可选 |
| 1.6 | range_multiplier | [x] | ? | - | ? | @unknown 仅GUNMOD章节提及 |
| 1.7 | dispersion | [x] | ✓ | ? | ✓ | 可选 |
| 1.8 | projectile_count | [x] | ✓ | ? | ✓ | 可选 |
| 1.9 | shot_counter | [x] | ✓ | ? | ✓ | 可选 |
| 1.10 | shot_damage | [x] | ✓ | ? | ✓ | 可选 |
| 1.11 | shot_spread | [x] | ✓ | ? | ✓ | 可选 |
| 1.12 | critical_multiplier | [x] | ✓ | ? | ✓ | 可选 |
| 1.13 | recoil | [x] | ✓ | ? | ✓ | 可选 |
| 1.14 | count | [x] | ✓ | ? | ✓ | 可选 |
| 1.15 | stack_size | [x] | ✓ | ? | ✓ | 可选，文档明确(Optional) |
| 1.16 | show_stats | [x] | ✓ | ? | ✓ | 可选，文档明确(Optional) |
| 1.17 | loudness | [x] | ✓ | ? | ✓ | 可选，文档明确(Optional) |
| 1.18 | effects | [x] | ✓ | ? | ✓ | 可选 |
| 1.19 | casing | [x] | ✓ | ? | ✓ | 可选 |
| 1.20 | drop | [x] | ? | - | ? | @unknown 非AMMO专用字段 |

---

## 阶段 2: ARMOR 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 2.1 | warmth | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 2.2 | environmental_protection | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 2.3 | sided | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 2.4 | material_thickness | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 2.5 | power_armor | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 2.6 | max_worn | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 2.7 | energy_shield_max_hp | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 2.8 | non_functional | [x] | ✓ | - | ~ | 已修正: ablative armor→烧蚀护甲 |
| 2.9 | damage_verb | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 2.10 | valid_mods | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 2.11 | armor (ArmorPortion[]) | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 2.12 | covers | [x] | ✓ | ! | ✓ | 必选字段(Pick) |
| 2.13 | coverage | [x] | ✓ | ! | ✓ | 必选字段 |
| 2.14 | cover_melee | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 2.15 | cover_ranged | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 2.16 | cover_vitals | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 2.17 | encumbrance | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 2.18 | max_encumbrance | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 2.19 | encumbrance_modifiers | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 2.20 | breathability | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 2.21 | layers | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 2.22 | rigid_layer_only | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 2.23 | volume_encumber_modifier | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 2.24 | activity_noise | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 2.25 | specifically_covers | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 2.26 | material (ArmorMaterial[]) | [x] | ✓ | - | ✓ | 无明确可选标记 |

---

## 阶段 3: ARTIFACT 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 3.1 | charge_info | [x] | ✓ | - | ✓ | 定义在MAGIC.md |
| 3.2 | passive_effects | [x] | ✓ | - | ✓ | 定义在MAGIC.md |

---

## 阶段 4: BATTERY 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 4.1 | max_energy | [x] | ✓ | ! | ✓ | 文档明确Mandatory |

---

## 阶段 5: BIONIC_ITEM 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 5.1 | bionic_id | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 5.2 | difficulty | [x] | ✓ | ! | ✓ | 必选字段 |
| 5.3 | is_upgrade | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 5.4 | installation_data | [x] | ✓ | - | ✓ | 无明确可选标记 |

---

## 阶段 6: BOOK 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 6.1 | max_level | [x] | ✓ | ? | ✓ | 文档说可省略 |
| 6.2 | intelligence | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 6.3 | time | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 6.4 | read_fun | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 6.5 | skill | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 6.6 | chapters | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 6.7 | generic | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 6.8 | required_level | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 6.9 | martial_art | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 6.10 | proficiencies | [x] | ✓ | - | ✓ | 无明确可选标记 |

---

## 阶段 7: COMESTIBLE 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 7.1 | spoils_in | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 7.2 | stim | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 7.3 | sleepiness_mod | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 7.4 | comestible_type | [x] | ✓ | ! | ✓ | 必选字段 |
| 7.5 | consumption_effect_on_conditions | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 7.6 | quench | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 7.7 | healthy | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 7.8 | addiction_potential | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 7.9 | addiction_type | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 7.10 | monotony_penalty | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 7.11 | calories | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 7.12 | nutrition | [x] | ✓ | - | ✓ | 已过时字段 |
| 7.13 | tool | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 7.14 | charges | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 7.15 | stack_size | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 7.16 | fun | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 7.17 | freezing_point | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 7.18 | cooks_like | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 7.19 | parasites | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 7.20 | contamination | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 7.21 | vitamins | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 7.22 | primary_material | [x] | ✓ | - | ~ | 已修正: 覆盖通用material字段 |
| 7.23 | rot_spawn | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 7.24 | rot_spawn_chance | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 7.25 | smoking_result | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 7.26 | petfood | [x] | ✓ | ? | ✓ | 文档明确Optional |

---

## 阶段 8: GUN 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 8.1 | skill | [x] | ✓ | ! | ✓ | 必选字段 |
| 8.2 | ammo | [x] | ✓ | ! | ✓ | 必选字段 |
| 8.3 | ranged_damage | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.4 | range | [x] | ✓ | ! | ✓ | 必选字段 |
| 8.5 | dispersion | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.6 | sight_dispersion | [x] | ✓ | - | ~ | 已修正: 角度分钟百分之一 |
| 8.7 | recoil | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.8 | durability | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.9 | gun_jam_mult | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.10 | blackpowder_tolerance | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 8.11 | min_cycle_recoil | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.12 | clip_size | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.13 | energy_drain | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.14 | ammo_to_fire | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.15 | modes | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.16 | reload | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.17 | built_in_mods | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.18 | default_mods | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.19 | barrel_volume | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.20 | barrel_length | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.21 | valid_mod_locations | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.22 | loudness | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.23 | ammo_effects | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.24 | reload_noise | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.25 | reload_noise_volume | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.26 | faults | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.27 | handling | [x] | ✓ | - | ~ | 已修正: 处理→操控性 |
| 8.28 | heat_per_shot | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.29 | cooling_value | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.30 | overheat_threshold | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 8.31 | hurt_part_when_fired | [x] | ✓ | - | ✓ | 无明确可选标记 |

---

## 阶段 9: GUNMOD 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 9.1 | location | [x] | ✓ | ! | ✓ | 文档明确Mandatory |
| 9.2 | mod_targets | [x] | ✓ | ! | ✓ | 文档明确Mandatory |
| 9.3 | install_time | [x] | ✓ | ! | ✓ | 文档明确Mandatory |
| 9.4 | acceptable_ammo | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 9.5 | ammo_modifier | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 9.6 | magazine_adaptor | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 9.7 | damage_modifier | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 9.8 | dispersion_modifier | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 9.9 | loudness_modifier | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 9.10 | range_modifier | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 9.11 | range_multiplier | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 9.12 | integral_longest_side | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.13 | overwrite_min_cycle_recoil | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.14 | reload_noise | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.15 | reload_noise_volume | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.16 | aim_speed_modifier | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.17 | add_mod | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.18 | energy_drain_multiplier | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.19 | field_of_view | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.20 | min_skills | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.21 | shot_spread_multiplier_modifier | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.22 | energy_drain_modifier | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 9.23 | energy_drains_multiplier | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 9.24 | reload_modifier | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 9.25 | min_str_required_mod | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 9.26 | aim_speed | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.27 | ammo_effects | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.28 | consume_chance | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.29 | consume_divisor | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.30 | handling_modifier | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.31 | mode_modifier | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.32 | barrel_length | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.33 | overheat_threshold_modifier | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.34 | overheat_threshold_multiplier | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.35 | cooling_value_modifier | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.36 | cooling_value_multiplier | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.37 | heat_per_shot_modifier | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.38 | heat_per_shot_multiplier | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.39 | blacklist_slot | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.40 | blacklist_mod | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.41 | to_hit_mod | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 9.42 | is_bayonet | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 9.43 | loudness_multiplier | [x] | ✓ | ? | ✓ | 文档明确Optional |

---

## 阶段 10: MAGAZINE 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 10.1 | ammo_type | [x] | ✓ | ! | ✓ | 必选字段 |
| 10.2 | capacity | [x] | ✓ | ! | ✓ | 必选字段 |
| 10.3 | count | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 10.4 | default_ammo | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 10.5 | reload_time | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 10.6 | mag_jam_mult | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 10.7 | linkage | [x] | ✓ | - | ✓ | 无明确可选标记 |

---

## 阶段 11: TOOL 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 11.1 | turns_per_charge | [x] | ✓ | - | ✓ | 已过时,推荐power_draw |
| 11.2 | fuel_efficiency | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 11.3 | tool_ammo | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 11.4 | charge_factor | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 11.5 | charges_per_use | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 11.6 | initial_charges | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 11.7 | max_charges | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 11.8 | power_draw | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 11.9 | revert_to | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 11.10 | revert_msg | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 11.11 | sub | [x] | ✓ | - | ✓ | 文档明确optional |
| 11.12 | etransfer_rate | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 11.13 | e_port | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 11.14 | e_ports_banned | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 11.15 | variables | [x] | ✓ | - | ✓ | 无明确可选标记 |

---

## 阶段 12: PET_ARMOR 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 12.1 | environmental_protection | [x] | ✓ | ? | ✓ | 文档明确Optional |
| 12.2 | material_thickness | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 12.3 | pet_bodytype | [x] | ✓ | ! | ✓ | 必选字段 |
| 12.4 | max_pet_vol | [x] | ✓ | ! | ✓ | 必选字段 |
| 12.5 | min_pet_vol | [x] | ✓ | ! | ✓ | 必选字段 |
| 12.6 | power_armor | [x] | ✓ | - | ✓ | 无明确可选标记 |

---

## 阶段 13: TOOLMOD 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 13.1 | acceptable_ammo | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 13.2 | pocket_mods | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 13.3 | magazine_adaptor | [x] | ✓ | - | ✓ | 无明确可选标记 |

---

## 阶段 14: ENGINE 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 14.1 | power | [x] | ✓ | ! | ✓ | 必选字段 |
| 14.2 | energy_consumption | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 14.3 | m2c | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 14.4 | backfire_threshold | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 14.5 | backfire_freq | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 14.6 | noise_factor | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 14.7 | damaged_power_factor | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 14.8 | muscle_power_factor | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 14.9 | exclusions | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 14.10 | fuel_options | [x] | ✓ | - | ✓ | 无明确可选标记 |

---

## 阶段 15: WHEEL 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 15.1 | wheel_offroad_rating | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 15.2 | wheel_terrain_modifiers | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 15.3 | contact_area | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 15.4 | rolling_resistance | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 15.5 | diameter | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 15.6 | width | [x] | ✓ | - | ✓ | 无明确可选标记 |

---

## 阶段 16: SEED 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 16.1 | plant_name | [x] | ✓ | ! | ✓ | 必选字段 |
| 16.2 | fruit | [x] | ✓ | ! | ✓ | 必选字段 |
| 16.3 | seeds | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 16.4 | byproducts | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 16.5 | grow | [x] | ✓ | ! | ✓ | 必选字段 |
| 16.6 | fruit_div | [x] | ✓ | - | ✓ | 无明确可选标记 |
| 16.7 | required_terrain_flag | [x] | ✓ | - | ✓ | 无明确可选标记 |

---

## 阶段 17: BREWABLE 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 17.1 | brew_time | [x] | ✓ | ! | ✓ | 必选字段 |
| 17.2 | brew_results | [x] | ✓ | ! | ✓ | 必选字段 |

---

## 阶段 18: COMPOSTABLE 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 18.1 | compost_time | [x] | ✓ | ! | ✓ | 必选字段 |
| 18.2 | compost_results | [x] | ✓ | ! | ✓ | 必选字段 |

---

## 阶段 19: MILLING 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 19.1 | into | [x] | ✓ | ! | ✓ | 必选字段 |
| 19.2 | recipe | [x] | ✓ | ! | ✓ | 必选字段 |
