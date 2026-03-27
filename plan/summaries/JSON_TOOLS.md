# JSON_TOOLS.md 总结

## 文档概述

JSON工具说明文档。**无新大类定义**，为工具使用文档。

---

## 工具列表

| 工具 | 说明 |
|------|------|
| `keys.py` | 统计各字段出现次数 |
| `values.py` | 统计字段值分布 |
| `lister.py` | 列出唯一的键值 |

---

## 使用示例

```bash
# 统计TOOL类型的字段
./keys.py --human type=TOOL

# 统计TOOL类型的material值
./values.py --key material --human type=TOOL

# 列出所有type值
./values.py --key type | ./lister.py
```

---

## Schema 类型引用

无新类型定义。
