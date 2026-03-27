# JSON_LOADING_ORDER.md 总结

## 文档概述

JSON加载顺序说明文档。**无新大类定义**，为机制说明文档。

---

## 加载顺序规则

Cataclysm 使用广度优先搜索(BFS)加载 `data/json/` 目录下的文件。

### 规则

1. **深度优先** - `data/json/whatever.json` 总是在 `data/json/subdir/whatever.json` 之前加载
2. **同层词法顺序** - 同一深度的文件按字母顺序加载

### 示例

```
data/json/
  skills.json
  professions/
    professions.json
    scenarios/
      scenarios.json
```

加载顺序：`skills.json` → `professions.json` → `scenarios.json`

---

## Schema 类型引用

无新类型定义。
