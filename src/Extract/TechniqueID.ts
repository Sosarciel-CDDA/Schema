/**从文件提取的预定义的TechniqueID 列表*/
export const ExtractDefineTechniqueIDList = [
    "tec_none"                    , // 毫无章法
    "tech_base_headbutt"          , // 头槌 基础的头槌动作。
    "tech_base_punch"             , // 拳击 基础的拳击动作。
    "tech_base_kick"              , // 踢击 基础的踢击动作。
    "WBLOCK_1"                    , // 格挡 中级格挡能力
    "WBLOCK_2"                    , // 招架 高级格挡能力
    "WBLOCK_3"                    , // 防御 终极格挡能力
    "DEF_DISARM"                  , // 缴械 缴械敌方武器，至少4级近战
    "GRAB"                        ,
    "SPIN"                        , // 旋转攻击 攻击所有近身敌人，仅暴击，至少 4 级近战
    "WIDE"                        , // 大幅攻击 攻击大角度范围内敌人，仅暴击，至少 3 级近战
    "IMPALE"                      , // 穿刺攻击 攻击当前目标及其后敌人，仅暴击，至少 4 级近战
    "PENETRATE"                   , // 穿透打击 以2倍近战技能提高护甲穿透
    "BRUTAL"                      , // 残暴打击 击晕1回合，击退1格，仅暴击，至少2级近战
    "RAPID"                       , // 快速攻击 50%行动消耗，66%伤害，至少2级近战
    "VORPAL"                      , // 致命一击 斩击伤害 x99，仅暴击
    "WRAP"                        , // 缠绕攻击 击晕2回合，至少4级近战
    "SWEEP"                       , // 横扫攻击 击倒2回合，至少3级近战
    "SWEETSPOT"                   , // 弱点一击 击晕1回合，击退2格，仅暴击，需要弹药
    "PRECISE"                     , // 精确打击 击晕2回合，仅暴击，至少3级近战
    "WHIP_DISARM"                 , // 缴械 缴械敌方武器
    "tec_feint"                   , // 佯攻
    "tec_break"                   , // 反擒拿
    "tec_precise"                 , // 精确打击
    "tec_aikido_blockthrow"       , // 反制摔投（格挡）
    "tec_aikido_dodgethrow"       , // 反制摔投（闪避）
    "tec_aikido_blockdisarm"      , // 缴械摔投（格挡）
    "tec_aikido_dodgedisarm"      , // 缴械摔投（闪避）
    "tec_aikido_break"            , // 反擒拿
    "tec_bojutsu_thrust"          , // 向前直刺
    "tec_bojutsu_kneestrike"      , // 膝击
    "tec_bojutsu_frontstrike"     , // 过顶正击
    "tec_bojutsu_rollingstrike"   , // 旋棍打击
    "tec_bojutsu_feint"           , // 佯攻
    "tec_bojutsu_disarm"          , // 倒勾缴械
    "tec_barbaran_impale"         , // 弓步穿刺
    "tec_barbaran_disarm"         , // 迅速收力
    "tec_boxing_cross"            , // 十字梁
    "tec_boxing_counter"          , // 交叉反击
    "tec_boxing_rapid"            , // 刺戳
    "tec_boxing_upper"            , // 上勾拳
    "tec_brawl_break_melee"       , // 反擒拿
    "tec_brawl_break_unarmed"     , // 反擒拿
    "tec_brawl_feint_melee"       , // 佯攻
    "tec_brawl_feint_unarmed"     , // 佯攻
    "tec_brawl_disarm_melee"      , // 缴械
    "tec_brawl_disarm_unarmed"    , // 缴械
    "tec_brawl_power"             , // 全力一击
    "tec_brawl_trip"              , // 使绊子
    "tec_capoeira_feint"          , // 佯攻
    "tec_capoeira_pushkick"       , // 蹬地踢
    "tec_capoeira_circlekick"     , // 半月踢
    "tec_capoeira_sweepkick"      , // 扫堂腿
    "tec_capoeira_spinkick"       , // 回旋踢
    "tec_crane_feint"             , // 野鹤寻食
    "tec_crane_precise"           , // 鹤爪印沙
    "tec_crane_break"             , // 白鹤亮翅
    "tec_crane_strike"            , // 雄鹤刷翎
    "tec_dragon_claw"             , // 龙爪手
    "tec_dragon_tail"             , // 龙摆尾
    "tec_dragon_strike"           , // 盘龙手
    "tec_eskrima_round"           , // 回环连击
    "tec_eskrima_fan"             , // 横旋连击
    "tec_eskrima_snap"            , // 快速抽击
    "tec_eskrima_combination"     , // 组合连击
    "tec_eskrima_stun"            , // 眩晕打击
    "tec_eskrima_low"             , // 下盘扫击
    "tec_fencing_feint"           , // 佯攻
    "tec_fencing_lunge"           , // 击剑刺击
    "tec_fencing_compound1"       , // 复杂进攻（二次进攻）
    "tec_fencing_compound2"       , // 复杂进攻（反击时刻）
    "tec_fencing_riposte"         , // 击剑抢攻
    "tec_medievalpole_counter"    , // 移位勾
    "tec_medievalpole_highround"  , // 高旋斩
    "tec_medievalpole_feint"      , // 高旋虚招
    "tec_medievalpole_break"      , // 反擒拿
    "tec_medievalpole_hook"       , // 勾拽
    "tec_medievalpole_execute"    , // 处决
    "tec_judo_throw"              , // 摔投
    "tec_judo_disarm"             , // 缴械摔投
    "tec_judo_backthrow"          , // 后摔
    "tec_judo_break"              , // 反擒拿
    "tec_karate_precise"          , // 手刀
    "tec_karate_rapid"            , // 背拳
    "tec_karate_roundhouse"       , // 回旋踢
    "tec_karate_staff"            , // 杖击
    "tec_karate_staff_crit"       , // 杖重击
    "tec_kickboxing_rapid"        , // 刺戳
    "tec_kickboxing_cross"        , // 十字梁
    "tec_kickboxing_push"         , // 蹬地踢
    "tec_kickboxing_upper"        , // 上勾拳
    "tec_kickboxing_roundhouse"   , // 回旋踢
    "tec_krav_maga_rapid"         , // 刺戳
    "tec_krav_maga_disarm_simple" , // 缴械掌
    "tec_krav_maga_crit"          , // 暗算
    "tec_krav_maga_takedown"      , // 摔技
    "tec_krav_maga_disarm"        , // 碎骨猛击
    "tec_krav_maga_break"         , // 反擒拿
    "tec_leopard_feint"           , // 金豹手
    "tec_leopard_precise"         , // 冲天豹捶
    "tec_leopard_rapid"           , // 金豹三通炮
    "tec_leopard_claw"            , // 金豹手
    "tec_leopard_pounce"          , // 豹之袭
    "tec_swordsmanship_ringen"    , // 擒拿
    "tec_swordsmanship_lethal"    , // 致命一击
    "tec_swordsmanship_feint"     , // 套路热身
    "tec_muay_thai_rapid"         , // 刺戳
    "tec_muay_thai_cross"         , // 十字梁
    "tec_muay_thai_elbow"         , // 肘击
    "tec_muay_thai_roundhouse"    , // 回旋踢
    "tec_muay_thai_push"          , // 蹬地踢
    "tec_muay_thai_knee"          , // 膝击
    "tec_muay_thai_break"         , // 反擒拿
    "tec_ninjutsu_swift"          , // 迅捷一击（普通）
    "tec_ninjutsu_swift_crit"     , // 迅捷一击（暴击）
    "tec_ninjutsu_precise"        , // 刺杀
    "tec_ninjutsu_takedown"       , // 忍术绊摔（徒手）
    "tec_ninjutsu_takedown_melee" , // 忍术绊摔（近战）
    "tec_ninjutsu_staffdown"      , // 食尘拳
    "tec_ninjutsu_downkill"       , // 脏杀拳
    "niten_water_cut"             , // 流水斩
    "niten_red_leaf"              , // 红叶斩
    "niten_stone_cut"             , // 火石斩
    "niten_timing_attack"         , // 闪现突攻
    "niten_feint"                 , // 佯攻
    "tec_pankration_cross"        , // 十字梁
    "tec_pankration_kick"         , // 踢击
    "tec_pankration_break"        , // 反擒拿
    "tec_pankration_grabknee"     , // 抓取膝击
    "tec_pankration_grabdisarm"   , // 锁臂
    "tec_pankration_grabthrow"    , // 抓取投摔
    "tec_silat_hamstring"         , // 断筋
    "tec_silat_precise"           , // 苏拉暴击
    "tec_silat_dirty"             , // 苏拉阴招
    "tec_silat_brutal"            , // 苏拉蛮击
    "tec_snake_swift"             , // 快蛇猛袭
    "tec_snake_feint"             , // 双蛇出袖
    "tec_snake_break"             , // 腾蛇跃涧
    "tec_snake_precise"           , // 猛蛇出穴
    "tec_sojutsu_shove"           , // 猛推
    "tec_sojutsu_trip"            , // 使绊子
    "tec_sojutsu_jab"             , // 刺戳
    "tec_sojutsu_feint"           , // 佯攻
    "tec_taekwondo_disarm"        , // 缴械
    "tec_taekwondo_strong"        , // 回旋后踢
    "tec_taekwondo_push"          , // 侧踢
    "tec_taekwondo_sweep"         , // 扫堂腿
    "tec_taekwondo_roundhouse"    , // 回旋踢
    "tec_taekwondo_feint"         , // 佯攻
    "tec_taichi_disarm"           , // 缴械
    "tec_taichi_palm"             , // 拗步掌
    "tec_taichi_counter"          , // 揽雀尾
    "tec_taichi_precise"          , // 双按掌
    "tec_tiger_break"             , // 反擒拿
    "tec_tiger_takedown"          , // 猛虎扑食
    "tec_tiger_palm"              , // 黑虎掏心
    "tec_tiger_claw"              , // 虎爪
    "tec_tiger_wide"              , // 虎之暴
    "tec_wingchun_punch"          , // 子午捶
    "tec_wingchun_punch_knockback", // 追身子午捶
    "tec_wingchun_hook"           , // 冲天炮
    "tec_wingchun_hook_knockback" , // 追身冲天炮
    "tec_wingchun_feint"          , // 佯攻
    "tec_zuiquan_feint"           , // 醉拳佯攻
    "tec_zuiquan_fist"            , // 醉拳
    "tec_zuiquan_break"           , // 反擒拿
    "tec_zuiquan_spin"            , // 旋转打击
    "RAPID_TEST"                  , // 快速攻击测试 50% 耗时，66% 伤害
    "tec_debug_slow"              , // 慢击
    "tec_debug_arpen"             , // 相位攻击
    "tec_debug_eoc_demo"          , // 调试用进攻劈砍
] as const;
/**从文件提取的预定义的TechniqueID */
export type ExtractDefineTechniqueID = typeof ExtractDefineTechniqueIDList[number];