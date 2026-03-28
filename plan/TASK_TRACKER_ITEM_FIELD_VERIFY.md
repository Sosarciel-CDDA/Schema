# Item Schema 字段验证 - 追踪表格

> **上下文文档**: [CONTEXT_ITEM_FIELD_VERIFY.md](./CONTEXT_ITEM_FIELD_VERIFY.md)
> 
> **启动前必读**: 先阅读上下文文档了解验证规则和文档位置

---

## 当前进度
- **当前阶段**: 阶段1 - AMMO字段验证
- **最后更新**: 2026-03-28

---

## 阶段 1: AMMO 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 1.1 | ammo_type | [ ] | - | - | - | |
| 1.2 | damage | [ ] | - | - | - | |
| 1.3 | prop_damage | [ ] | - | - | - | |
| 1.4 | range | [ ] | - | - | - | |
| 1.5 | recovery_chance | [ ] | - | - | - | |
| 1.6 | range_multiplier | [ ] | - | - | - | |
| 1.7 | dispersion | [ ] | - | - | - | |
| 1.8 | projectile_count | [ ] | - | - | - | |
| 1.9 | shot_counter | [ ] | - | - | - | |
| 1.10 | shot_damage | [ ] | - | - | - | |
| 1.11 | shot_spread | [ ] | - | - | - | |
| 1.12 | critical_multiplier | [ ] | - | - | - | |
| 1.13 | recoil | [ ] | - | - | - | |
| 1.14 | count | [ ] | - | - | - | |
| 1.15 | stack_size | [ ] | - | - | - | |
| 1.16 | show_stats | [ ] | - | - | - | |
| 1.17 | loudness | [ ] | - | - | - | |
| 1.18 | effects | [ ] | - | - | - | |
| 1.19 | casing | [ ] | - | - | - | |
| 1.20 | drop | [ ] | - | - | - | |

---

## 阶段 2: ARMOR 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 2.1 | warmth | [ ] | - | - | - | |
| 2.2 | environmental_protection | [ ] | - | - | - | |
| 2.3 | sided | [ ] | - | - | - | |
| 2.4 | material_thickness | [ ] | - | - | - | |
| 2.5 | power_armor | [ ] | - | - | - | |
| 2.6 | max_worn | [ ] | - | - | - | |
| 2.7 | energy_shield_max_hp | [ ] | - | - | - | |
| 2.8 | non_functional | [ ] | - | - | - | |
| 2.9 | damage_verb | [ ] | - | - | - | |
| 2.10 | valid_mods | [ ] | - | - | - | |
| 2.11 | armor (ArmorPortion[]) | [ ] | - | - | - | |
| 2.12 | covers | [ ] | - | - | - | |
| 2.13 | coverage | [ ] | - | - | - | |
| 2.14 | cover_melee | [ ] | - | - | - | |
| 2.15 | cover_ranged | [ ] | - | - | - | |
| 2.16 | cover_vitals | [ ] | - | - | - | |
| 2.17 | encumbrance | [ ] | - | - | - | |
| 2.18 | max_encumbrance | [ ] | - | - | - | |
| 2.19 | encumbrance_modifiers | [ ] | - | - | - | |
| 2.20 | breathability | [ ] | - | - | - | |
| 2.21 | layers | [ ] | - | - | - | |
| 2.22 | rigid_layer_only | [ ] | - | - | - | |
| 2.23 | volume_encumber_modifier | [ ] | - | - | - | |
| 2.24 | activity_noise | [ ] | - | - | - | |
| 2.25 | specifically_covers | [ ] | - | - | - | |
| 2.26 | material (ArmorMaterial[]) | [ ] | - | - | - | |

---

## 阶段 3: ARTIFACT 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 3.1 | charge_info | [ ] | - | - | - | |
| 3.2 | passive_effects | [ ] | - | - | - | |

---

## 阶段 4: BATTERY 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 4.1 | max_energy | [ ] | - | - | - | |

---

## 阶段 5: BIONIC_ITEM 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 5.1 | bionic_id | [ ] | - | - | - | |
| 5.2 | difficulty | [ ] | - | - | - | |
| 5.3 | is_upgrade | [ ] | - | - | - | |
| 5.4 | installation_data | [ ] | - | - | - | |

---

## 阶段 6: BOOK 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 6.1 | max_level | [ ] | - | - | - | |
| 6.2 | intelligence | [ ] | - | - | - | |
| 6.3 | time | [ ] | - | - | - | |
| 6.4 | read_fun | [ ] | - | - | - | |
| 6.5 | skill | [ ] | - | - | - | |
| 6.6 | chapters | [ ] | - | - | - | |
| 6.7 | generic | [ ] | - | - | - | |
| 6.8 | required_level | [ ] | - | - | - | |
| 6.9 | martial_art | [ ] | - | - | - | |
| 6.10 | proficiencies | [ ] | - | - | - | |

---

## 阶段 7: COMESTIBLE 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 7.1 | spoils_in | [ ] | - | - | - | |
| 7.2 | stim | [ ] | - | - | - | |
| 7.3 | sleepiness_mod | [ ] | - | - | - | |
| 7.4 | comestible_type | [ ] | - | - | - | |
| 7.5 | consumption_effect_on_conditions | [ ] | - | - | - | |
| 7.6 | quench | [ ] | - | - | - | |
| 7.7 | healthy | [ ] | - | - | - | |
| 7.8 | addiction_potential | [ ] | - | - | - | |
| 7.9 | addiction_type | [ ] | - | - | - | |
| 7.10 | monotony_penalty | [ ] | - | - | - | |
| 7.11 | calories | [ ] | - | - | - | |
| 7.12 | nutrition | [ ] | - | - | - | |
| 7.13 | tool | [ ] | - | - | - | |
| 7.14 | charges | [ ] | - | - | - | |
| 7.15 | stack_size | [ ] | - | - | - | |
| 7.16 | fun | [ ] | - | - | - | |
| 7.17 | freezing_point | [ ] | - | - | - | |
| 7.18 | cooks_like | [ ] | - | - | - | |
| 7.19 | parasites | [ ] | - | - | - | |
| 7.20 | contamination | [ ] | - | - | - | |
| 7.21 | vitamins | [ ] | - | - | - | |
| 7.22 | primary_material | [ ] | - | - | - | |
| 7.23 | rot_spawn | [ ] | - | - | - | |
| 7.24 | rot_spawn_chance | [ ] | - | - | - | |
| 7.25 | smoking_result | [ ] | - | - | - | |
| 7.26 | petfood | [ ] | - | - | - | |

---

## 阶段 8: GUN 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 8.1 | skill | [ ] | - | - | - | |
| 8.2 | ammo | [ ] | - | - | - | |
| 8.3 | ranged_damage | [ ] | - | - | - | |
| 8.4 | range | [ ] | - | - | - | |
| 8.5 | dispersion | [ ] | - | - | - | |
| 8.6 | sight_dispersion | [ ] | - | - | - | |
| 8.7 | recoil | [ ] | - | - | - | |
| 8.8 | durability | [ ] | - | - | - | |
| 8.9 | gun_jam_mult | [ ] | - | - | - | |
| 8.10 | blackpowder_tolerance | [ ] | - | - | - | |
| 8.11 | min_cycle_recoil | [ ] | - | - | - | |
| 8.12 | clip_size | [ ] | - | - | - | |
| 8.13 | energy_drain | [ ] | - | - | - | |
| 8.14 | ammo_to_fire | [ ] | - | - | - | |
| 8.15 | modes | [ ] | - | - | - | |
| 8.16 | reload | [ ] | - | - | - | |
| 8.17 | built_in_mods | [ ] | - | - | - | |
| 8.18 | default_mods | [ ] | - | - | - | |
| 8.19 | barrel_volume | [ ] | - | - | - | |
| 8.20 | barrel_length | [ ] | - | - | - | |
| 8.21 | valid_mod_locations | [ ] | - | - | - | |
| 8.22 | loudness | [ ] | - | - | - | |
| 8.23 | ammo_effects | [ ] | - | - | - | |
| 8.24 | reload_noise | [ ] | - | - | - | |
| 8.25 | reload_noise_volume | [ ] | - | - | - | |
| 8.26 | faults | [ ] | - | - | - | |
| 8.27 | handling | [ ] | - | - | - | |
| 8.28 | heat_per_shot | [ ] | - | - | - | |
| 8.29 | cooling_value | [ ] | - | - | - | |
| 8.30 | overheat_threshold | [ ] | - | - | - | |
| 8.31 | hurt_part_when_fired | [ ] | - | - | - | |

---

## 阶段 9: GUNMOD 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 9.1 | location | [ ] | - | - | - | |
| 9.2 | mod_targets | [ ] | - | - | - | |
| 9.3 | install_time | [ ] | - | - | - | |
| 9.4 | acceptable_ammo | [ ] | - | - | - | |
| 9.5 | ammo_modifier | [ ] | - | - | - | |
| 9.6 | magazine_adaptor | [ ] | - | - | - | |
| 9.7 | damage_modifier | [ ] | - | - | - | |
| 9.8 | dispersion_modifier | [ ] | - | - | - | |
| 9.9 | loudness_modifier | [ ] | - | - | - | |
| 9.10 | range_modifier | [ ] | - | - | - | |
| 9.11 | range_multiplier | [ ] | - | - | - | |
| 9.12 | integral_longest_side | [ ] | - | - | - | |
| 9.13 | overwrite_min_cycle_recoil | [ ] | - | - | - | |
| 9.14 | reload_noise | [ ] | - | - | - | |
| 9.15 | reload_noise_volume | [ ] | - | - | - | |
| 9.16 | aim_speed_modifier | [ ] | - | - | - | |
| 9.17 | add_mod | [ ] | - | - | - | |
| 9.18 | energy_drain_multiplier | [ ] | - | - | - | |
| 9.19 | field_of_view | [ ] | - | - | - | |
| 9.20 | min_skills | [ ] | - | - | - | |
| 9.21 | shot_spread_multiplier_modifier | [ ] | - | - | - | |
| 9.22 | energy_drain_modifier | [ ] | - | - | - | |
| 9.23 | energy_drains_multiplier | [ ] | - | - | - | |
| 9.24 | reload_modifier | [ ] | - | - | - | |
| 9.25 | min_str_required_mod | [ ] | - | - | - | |
| 9.26 | aim_speed | [ ] | - | - | - | |
| 9.27 | ammo_effects | [ ] | - | - | - | |
| 9.28 | consume_chance | [ ] | - | - | - | |
| 9.29 | consume_divisor | [ ] | - | - | - | |
| 9.30 | handling_modifier | [ ] | - | - | - | |
| 9.31 | mode_modifier | [ ] | - | - | - | |
| 9.32 | barrel_length | [ ] | - | - | - | |
| 9.33 | overheat_threshold_modifier | [ ] | - | - | - | |
| 9.34 | overheat_threshold_multiplier | [ ] | - | - | - | |
| 9.35 | cooling_value_modifier | [ ] | - | - | - | |
| 9.36 | cooling_value_multiplier | [ ] | - | - | - | |
| 9.37 | heat_per_shot_modifier | [ ] | - | - | - | |
| 9.38 | heat_per_shot_multiplier | [ ] | - | - | - | |
| 9.39 | blacklist_slot | [ ] | - | - | - | |
| 9.40 | blacklist_mod | [ ] | - | - | - | |
| 9.41 | to_hit_mod | [ ] | - | - | - | |
| 9.42 | is_bayonet | [ ] | - | - | - | |
| 9.43 | loudness_multiplier | [ ] | - | - | - | |

---

## 阶段 10: MAGAZINE 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 10.1 | ammo_type | [ ] | - | - | - | |
| 10.2 | capacity | [ ] | - | - | - | |
| 10.3 | count | [ ] | - | - | - | |
| 10.4 | default_ammo | [ ] | - | - | - | |
| 10.5 | reload_time | [ ] | - | - | - | |
| 10.6 | mag_jam_mult | [ ] | - | - | - | |
| 10.7 | linkage | [ ] | - | - | - | |

---

## 阶段 11: TOOL 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 11.1 | turns_per_charge | [ ] | - | - | - | |
| 11.2 | fuel_efficiency | [ ] | - | - | - | |
| 11.3 | tool_ammo | [ ] | - | - | - | |
| 11.4 | charge_factor | [ ] | - | - | - | |
| 11.5 | charges_per_use | [ ] | - | - | - | |
| 11.6 | initial_charges | [ ] | - | - | - | |
| 11.7 | max_charges | [ ] | - | - | - | |
| 11.8 | power_draw | [ ] | - | - | - | |
| 11.9 | revert_to | [ ] | - | - | - | |
| 11.10 | revert_msg | [ ] | - | - | - | |
| 11.11 | sub | [ ] | - | - | - | |
| 11.12 | etransfer_rate | [ ] | - | - | - | |
| 11.13 | e_port | [ ] | - | - | - | |
| 11.14 | e_ports_banned | [ ] | - | - | - | |
| 11.15 | variables | [ ] | - | - | - | |

---

## 阶段 12: PET_ARMOR 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 12.1 | environmental_protection | [ ] | - | - | - | |
| 12.2 | material_thickness | [ ] | - | - | - | |
| 12.3 | pet_bodytype | [ ] | - | - | - | |
| 12.4 | max_pet_vol | [ ] | - | - | - | |
| 12.5 | min_pet_vol | [ ] | - | - | - | |
| 12.6 | power_armor | [ ] | - | - | - | |

---

## 阶段 13: TOOLMOD 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 13.1 | acceptable_ammo | [ ] | - | - | - | |
| 13.2 | pocket_mods | [ ] | - | - | - | |
| 13.3 | magazine_adaptor | [ ] | - | - | - | |

---

## 阶段 14: ENGINE 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 14.1 | power | [ ] | - | - | - | |
| 14.2 | energy_consumption | [ ] | - | - | - | |
| 14.3 | m2c | [ ] | - | - | - | |
| 14.4 | backfire_threshold | [ ] | - | - | - | |
| 14.5 | backfire_freq | [ ] | - | - | - | |
| 14.6 | noise_factor | [ ] | - | - | - | |
| 14.7 | damaged_power_factor | [ ] | - | - | - | |
| 14.8 | muscle_power_factor | [ ] | - | - | - | |
| 14.9 | exclusions | [ ] | - | - | - | |
| 14.10 | fuel_options | [ ] | - | - | - | |

---

## 阶段 15: WHEEL 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 15.1 | wheel_offroad_rating | [ ] | - | - | - | |
| 15.2 | wheel_terrain_modifiers | [ ] | - | - | - | |
| 15.3 | contact_area | [ ] | - | - | - | |
| 15.4 | rolling_resistance | [ ] | - | - | - | |
| 15.5 | diameter | [ ] | - | - | - | |
| 15.6 | width | [ ] | - | - | - | |

---

## 阶段 16: SEED 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 16.1 | plant_name | [ ] | - | - | - | |
| 16.2 | fruit | [ ] | - | - | - | |
| 16.3 | seeds | [ ] | - | - | - | |
| 16.4 | byproducts | [ ] | - | - | - | |
| 16.5 | grow | [ ] | - | - | - | |
| 16.6 | fruit_div | [ ] | - | - | - | |
| 16.7 | required_terrain_flag | [ ] | - | - | - | |

---

## 阶段 17: BREWABLE 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 17.1 | brew_time | [ ] | - | - | - | |
| 17.2 | brew_results | [ ] | - | - | - | |

---

## 阶段 18: COMPOSTABLE 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 18.1 | compost_time | [ ] | - | - | - | |
| 18.2 | compost_results | [ ] | - | - | - | |

---

## 阶段 19: MILLING 字段验证
| 编号 | 字段 | 状态 | 存在性 | 可选性 | 注释 | 备注 |
|------|------|--------|--------|--------|------|-------|
| 19.1 | into | [ ] | - | - | - | |
| 19.2 | recipe | [ ] | - | - | - | |
