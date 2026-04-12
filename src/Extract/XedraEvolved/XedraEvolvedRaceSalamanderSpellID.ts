/**从文件提取的预定义的XedraEvolvedRaceSalamanderSpellID 列表*/
export const ExtractDefineXedraEvolvedRaceSalamanderSpellIDList = [
    "salamander_make_fire"        , // 点燃 生于火焰，火妖精能轻易操纵火焰点燃某物。
    "salamander_flame_punch_spell", // 烈焰打击 用火焰包裹你的拳头击打单个目标，造成火焰伤害并将其击退。
    "salamander_cure_conditions"  , // 烧尽杂秽 如火一样烧过枯木，你可以烧掉目标身上的毒药或疾病。然而，如接触火一样危险，它也会伤害目标。
    "salamander_fire_dot_spell"   , // 骨髓之火 点燃目标内部的火焰，从内部慢慢燃烧。这个法术只会缓慢造成伤害，但由内到外的烧伤几乎无法被防御。
    "salamander_increase_speed_spell", // 煽动火花 你可以为自己或一名同伴注入炽热火焰般的速度。
    "salamander_emit_heat"        , // 内炉添火 就像篝火一样，你可以散发出巨多热量。
    "salamander_summon_fire_spirit", // 召唤地狱之子 召唤一个小火灵来支持你。
    "salamander_summon_firebird_spell", // 火鸟之焰 召唤一只由纯净火焰构成精致魔法鸟。这只鸟只能持续几分钟，但只要它发现敌人，就会急切地扑过去，爆炸为一团火球。
    "salamander_ash_breath_spell" , // 灰烬吐息 你可以呼出滚滚浓烟，借以隐藏身形，或令常人窒息。
    "salamander_fire_breath"      , // 火龙吐息 就像传说中的龙一样，你可以往面前的锥形区域喷射火焰。
    "salamander_dash_boom_spell"  , // 炽热冲锋 把你自己以极快的速度向掷出，在目标点引发爆炸。
    "salamander_explosion_trap_spell", // 爆炸印记 在地上放置一个魔法符文，当被踩踏时会引发爆炸。
    "salamander_cultivate_goblin_fruit", // 培育妖精果实 你可以向火焰中注入一点精灵魔法，结出精怪果实。 果实的效果多种多样，虽然无法预测，但至少能带来一些益处。 此咒语只能在户外自然环境中施放。
    "salamander_fire_fly"         , // 燃烧升华 就像火焰升腾的热量一样，你可以升到空中，与烟雾同行一小会儿，然后安全地落回地面。
    "salamander_ally_flame_immune_spell", // 炽热创伤的敷愈 你利用自己炽热如火的天性，将其中的一部分注入盟友，使他们对高温和火焰免疫。
    "salamander_explosion_and_heal_spell", // 凤凰绝唱 你将如传说中的凤凰般浴火重生，身躯轰然爆裂为漫天烈焰，焚尽周遭一切。施放此术后六小时内，你的自愈速度将大幅提升。
    "salamander_explosion_and_heal_spell_self_heal", // The Phoenix's Last Cry Healing Effect The healing effect of The Phoenix's Last Cry.  It's a bug if you have it directly.
] as const;
/**从文件提取的预定义的XedraEvolvedRaceSalamanderSpellID */
export type ExtractDefineXedraEvolvedRaceSalamanderSpellID = typeof ExtractDefineXedraEvolvedRaceSalamanderSpellIDList[number];