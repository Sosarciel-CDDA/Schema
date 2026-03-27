# JSON_STYLE.md 总结

## 文档概述

JSON编码风格指南。**无新大类定义**，为编码规范文档。

---

## 格式规范

| 规则 | 说明 |
|------|------|
| 缩进 | 2空格 |
| 分隔符 | 除逗号和冒号外，周围加空格 |
| 逗号/冒号 | 后面加空格 |
| 对象条目 | 始终换行分隔 |
| 数组条目 | 超过120字符时换行分隔 |
| 换行位置 | 开括号、闭括号或条目后 |

---

## 格式化工具

- `json_formatter.exe` / `json_formatter.cgi`
- `make style-json` - 格式化所有JSON
- VS Code扩展：`cdda-toys.cdda-json-formatter`

---

## Schema 类型引用

无新类型定义。
