/**从文件提取的预定义的XedraEvolvedRaceSylphSpellID 列表*/
export const ExtractDefineXedraEvolvedRaceSylphSpellIDList = [
    "zap_electrical_emission"     , // 电击 电流从你的四肢发出。
    "sylph_call_lightning"        , // 闪电束 这是许多风妖精的必杀技，它的作用正如你所期望的那样：从你的指尖射出闪电。不过，这种闪电比大多数闪电更有方向性，会以一条直线穿过大多数非固体目标。
    "sylph_crash_of_lightning"    , // 闪电轰击 闪电的轰击会产生强烈的电流和物理力量，将敌人击倒在地。
    "clap_of_thunder"             , // 雷鸣掌声 远处传来一声雷鸣。
    "electrical_field"            , // 电场 召唤电场。
    "lightning_field"             , // 雷电领域 召唤雷电领域。
    "sylph_reveal_overmap_spell"  , // 身轻如燕 凝神片刻，你便可将感官投向高空，俯瞰脚下延展的风景。此法术仅在室外生效。
    "sylph_charge_dash_spell"     , // 暴风步法 化作一阵疾风，向前突进。
    "sylph_increase_ally_speed_spell", // 西风聚 你使用妖精法术，将西风之速注入一名盟友体内，使其在短时间内身法迅捷无比。
    "sylph_bonus_melee_range_spell", // 斩风之击 风妖精的挥砍精准无比，甚至能斩裂空气，借其将力道遥遥传出。法术生效期间，风妖精的近身攻击亦可伤及远处的敌人。
    "sylph_cultivate_goblin_fruit", // 培育妖精果实 你可以在风中施展一点精灵魔法，结出妖精果实。 果实的效果多种多样，虽然无法预测，但至少总能带来一些益处。 此咒语只能在户外自然环境中施放。
    "summon_air_sprite"           , // 呼唤风之子 召唤一个低等空气元素来支援你。
    "ominous_wind"                , // 不祥之风 一阵呼啸的风从你的肩膀吹过，吹向你所指的方向。 这让你的敌人感到恐惧。
    "pushing_wind"                , // 排云之风 用一阵元素之气推开某样东西。
    "sylph_clear_the_air"         , // 涤净秽气 令周遭空气重归纯净，清除烟尘或花粉等污秽之物。
    "sylph_hindering_wind_spell"  , // 阻挡之风 用猛烈的旋风包围目标，使其减速，阻碍其行动自由。
    "sylph_massive_lightning_bolt_spell", // 天怒之拳 召唤雷霆霹雳从天而降，以无上天威轰击你的敌人。
    "sylph_wind_translocation_spell", // 随风所往 风会随意吹拂，穿过栅栏和敞开的窗，越过田野和奔流的河。风妖精也能随风飘荡，飞至高空，降落在他们曾经到过的地方。
    "sylph_wind_translocation_attune", // 随风所往 - 调谐 与一处地点建立调谐，以备日后传送。此过程必须在户外高空进行。
    "sylph_wind_translocation_attune_real", // Going Wither the Wind May Lead Attunement Real The actual Going Wither the Wind May Lead attunement spell.  It's a bug if you have it.
] as const;
/**从文件提取的预定义的XedraEvolvedRaceSylphSpellID */
export type ExtractDefineXedraEvolvedRaceSylphSpellID = typeof ExtractDefineXedraEvolvedRaceSylphSpellIDList[number];