# PRACTICE_RECIPES.md 总结

## 文档概述

练习配方是特殊类型的配方，用于让玩家练习技能而不消耗材料。**无新大类定义**，为配方使用指南。

---

## 练习配方特点

1. **材料不变** - 练习后物品不变
2. **消耗时间** - 练习需要时间
3. **技能提升** - 通过练习提升技能
4. **可选副产物** - 可能产生废料或副产品

---

## 创建练习配方

1. 复制原配方
2. 添加 `id_suffix: "practice"`
3. 添加 `delete_flags: [ "NO_REPAIR" ]`
4. 调整时间和难度

---

## 示例

```jsonc
{
  "type": "recipe",
  "result": "thread",
  "id_suffix": "practice",
  "category": "CC_OTHER",
  "subcategory": "CSC_OTHER_MATERIALS",
  "skill_used": "tailor",
  "difficulty": 1,
  "time": "10 m",
  "autolearn": [ [ "tailor", 1 ] ],
  "tools": [ [ "sewing_kit", 5 ] ],
  "components": [ [ "thread", 100 ] ],
  "delete_flags": [ "NO_REPAIR" ]
}
```

---

## Schema 类型引用

无新类型定义。
