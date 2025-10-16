/**从文件提取的预定义的MindOverMatterElectrokinesisSpellID 列表*/
export const ExtractDefineMindOverMatterElectrokinesisSpellIDList = [
    "electrokinetic_see_electric" , // [Ψ]电气感知(C) 开始尝试感受电流的流动，定位附近的带电生物或机器人。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "electrokinetic_shock_touch"  , // [Ψ]静电接触 对接触到的目标释放一道电击，造成少量伤害并使其眩晕。
    "electrokinetic_zap_enemies"  , // [Ψ]电荷释放(C) 在你的体内积聚电荷，电击任何试图攻击你的人。这还能保护你免受电磁脉冲的攻击。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "electrokinetic_melee_attacks", // [Ψ]电流附加(C) 在使用武器攻击时附加电击伤害。同时还提供对电击伤害的防护。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "electrokinetic_hacking_interface", // [Ψ]黑客接口(C) 用灵能创建一个电子接口，让你可以像使用电脑一样破解附近的电子设备。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "electrokinetic_personal_battery", // [Ψ]电子溢流(C) 为随身携带的电池驱动设备供电。此异能需要<color_yellow>持续专注来维持</color>，若<color_yellow>专注中断</color>则可能<color_red>失效</color>。
    "electrokinetic_paralysis"    , // [Ψ]神经电击 在目标的神经系统（或其残骸）中引发一次电能爆发，使其短暂地陷入瘫痪。此能力只对拥有或曾经拥有神经系统的目标生效。
    "electrokinetic_reduce_pain"  , // [Ψ]疼痛抑制(C) 运用你掌控电流的灵能，减弱体内的疼痛信号。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "electrokinetic_lightning_bolt", // [Ψ]电击处刑 向附近的目标发射一道闪电。
    "electrokinetic_recharge_vehicle", // [Ψ]反向充电 将体内的灵能转化为车辆或设备的电力。触摸车辆或电网的任何部位即可进行充电。
    "electrokinetic_pain_immune"  , // [Ψ]疼痛阻断 通过压制疼痛信号，你可以短暂地消除疼痛感，但疼痛的源头依然存在。当压制结束，更多的疼痛会卷土重来。疼痛阻断与神经加速<color_red>不兼容</color_red>。
    "electrokinetic_speed_boost"  , // [Ψ]神经加速(C) 你可以提高自己或盟友的神经系统效率，从而大大加快反应。这也能增强记忆能力。此项灵能 <color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。疼痛阻断 与 神经加速<color_red>不兼容</color>。对<color_green>盟友</color>使用时，该能力的持续时间是<color_yellow>正常时间的一半</color>。
    "electrokinetic_kill_robot"   , // [Ψ]短路 对机器人或改造人释放强劲电流脉冲，使其瘫痪。
    "electrokinetic_robot_interface", // [Ψ]机器人接口 使用你的灵能远程连接机器人的内部电路，如果你有足够的计算机技能的话，就可以黑进它。
    "electrokinetic_lightning_aura", // [Ψ]电流光环(C) 用能力为你周遭充能，电击任何靠近的生物。这种能力不分敌我。能力激活时，还会保护你免受电击伤害。此项灵能 <color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "electrokinetic_lightning_blast", // [Ψ]离子轰击 在附近引发一道离子闪电，并造成小型的爆炸。
    "electrokinetic_revive"       , // [Ψ]复苏电击 操作尸体的神经系统，让它为你而战。仅能持续一小段时间。
] as const;
/**从文件提取的预定义的MindOverMatterElectrokinesisSpellID */
export type ExtractDefineMindOverMatterElectrokinesisSpellID = typeof ExtractDefineMindOverMatterElectrokinesisSpellIDList[number];