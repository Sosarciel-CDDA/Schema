# WEATHER_TYPE.md 总结

## 文档概述

天气类型系统定义了游戏中的各种天气状态，包括晴天、雨天、雷暴、雪天等。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `weather_type` | 天气类型，定义天气效果、视觉惩罚、降水等 |

---

## 关键字段

| 字段 | 说明 |
|------|------|
| `id` | 唯一ID |
| `type` | 必须为 `weather_type` |
| `name` | UI显示名称 |
| `color` | UI颜色 |
| `map_color` | 地图颜色 |
| `sym` | 地图符号 |
| `ranged_penalty` | 远程攻击惩罚 |
| `sight_penalty` | 视野惩罚 |
| `light_modifier` | 环境光照修正 |
| `light_multiplier` | 环境光照乘数 |
| `sound_attn` | 声音衰减 |
| `dangerous` | 是否危险(打断活动) |
| `precip` | 降水量(none/very_light/light/heavy) |
| `rains` | 是否下雨 |
| `sound_category` | 声音类型(silent/drizzle/rainy/thunder/flurries/snowstorm/snow) |
| `duration_min` / `duration_max` | 持续时间范围 |
| `sun_multiplier` | 太阳辐射乘数 |
| `priority` | 优先级(高优先级胜出) |
| `required_weathers` | 前置天气数组 |
| `condition` | 触发条件 |
| `tiles_animation` | 瓦片动画名称 |
| `weather_animation` | 天气动画对象(factor/color/glyph) |

---

## precip 枚举

| 值 | 说明 |
|------|------|
| `none` | 无降水 |
| `very_light` | 微量降水 |
| `light` | 轻度降水 |
| `heavy` | 重度降水 |

---

## sound_category 枚举

| 值 | 说明 |
|------|------|
| `silent` | 静音 |
| `drizzle` | 毛毛雨 |
| `rainy` | 下雨 |
| `thunder` | 雷声 |
| `flurries` | 阵雪 |
| `snowstorm` | 暴风雪 |
| `snow` | 下雪 |

---

## Schema 类型引用

- `(WeatherTypeID)` - 天气类型ID引用
- `(EOCID)` - EOC ID引用
