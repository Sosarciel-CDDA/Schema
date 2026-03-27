# HELP_MENU.md 总结

## 文档概述

帮助菜单定义了游戏中可滚动的分类帮助页面。

---

## 大类列表

| 类型 | 说明 |
|------|------|
| `help` | 帮助分类，定义帮助页面的顺序、名称和内容 |

---

## 关键字段

| 字段 | 说明 |
|------|------|
| `type` | 必须为 `"help"` |
| `order` | 显示顺序(整数，0为第一个) |
| `name` | 分类名称(可使用颜色标签) |
| `messages` | 帮助内容数组(每个字符串为一行) |

---

## 特殊标签

| 标签 | 说明 |
|------|------|
| `<press_keybind>` | 按键绑定标签，自动着色为浅蓝色 |
| `<DRAW_NOTE_COLORS>` | 显示所有颜色缩写列表 |
| `<HELP_DRAW_DIRECTIONS>` | 显示移动方向键 |

---

## 颜色标签

可使用 `<color_red>文本</color>` 格式的颜色标签。

---

## 示例

```jsonc
{
  "type": "help",
  "order": 0,
  "name": "First Category Name",
  "messages": [
    "A useful tip.",
    "<color_red>Some scary warning.</color>",
    "A list of three keybinds.\n<press_pause> lets you pass one second."
  ]
}
```

---

## Schema 类型引用

无特殊类型引用。
