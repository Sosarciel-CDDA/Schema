/**从文件提取的预定义的MindOverMatterPhotokinesisSpellID 列表*/
export const ExtractDefineMindOverMatterPhotokinesisSpellIDList = [
    "photokinetic_light_local"    , // [Ψ]长明烛光(C) 创造一小片光芒，它不是很明亮，但足够阅读或进行其他简单任务。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。<color_red>进入战斗失效</color>。
    "photokinetic_create_light"   , // [Ψ]驱暗灵光 创造光子，并操控其照亮整片区域。
    "photokinetic_light_up_enemy" , // [Ψ]光照术 创造光子，并操控其照亮整片区域。
    "photokinetic_snuff_light"    , // [Ψ]黑暗降临 截断光线的流动以创造一个黑暗区域。
    "photokinetic_light_dodge"    , // [Ψ]光线戏法(C) 操纵身体周围的光线，制造出不断变化的幻象，模糊你的轮廓与位置，从而让你更难被击中。一旦被敌人成功击中，你的位置就会暴露，此异能也会<color_red>随之中断</color>。此异能需要<color_yellow>持续专注来维持</color>，若<color_yellow>专注中断</color>则可能<color_red>失效</color>。
    "photokinetic_light_beam"     , // [Ψ]光子集束 汇集一道高能光子束。
    "photokinetic_camouflage"     , // [Ψ]拟态伪装(C) 通过将自身反射光与附近表面反射光混合，你可以使自己在远处更难被发现。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "photokinetic_rad_immunity"   , // [Ψ]灵光屏障(C) 在你周围创建一道光的屏障，以保护免受辐射和光能伤害。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "photokinetic_light_arms"     , // [Ψ]幻象武器 用光线创造出额外的手臂，握持物品与武器，以真真假假的攻击诱使敌人失去平衡，做出错误的防御。
    "photokinetic_hide_ugly"      , // [Ψ]易容幻象(C) 用不起眼的幻象隐藏你真实的形态，防止没见识的普通人类对你的变异肢体或改造部位大惊小怪此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。<color_red>进入战斗失效</color>。
    "photokinetic_light_image"    , // [Ψ]幻影替身 操控幻影汇集成你自己的形象，从而混淆和分散敌人的注意力。
    "photokinetic_radio"          , // [Ψ]电波交流(C) 调整你的感官以接收无线电波，使你能够侦听或发送信息。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。<color_red>进入战斗失效</color>。
    "photokinetic_sterilize_food" , // [Ψ]伽马灭菌 通过集中的高能辐射束消灭食物中的微生物，使其保质期大大延长。此异能的<color_red>消耗极大</color>。
    "photokinetic_stun_robots"    , // [Ψ]传感器干扰 释放一次局部的电磁辐射脉冲，使区域内所有的电子传感设备超载。
    "photokinetic_invisibility"   , // [Ψ]光之帷幕(C) 折射你周围的光线来使你隐身。如果能力不够熟练，移动时有概率使隐身失效；近战攻击也会导致隐身失效。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "photokinetic_light_flash"    , // [Ψ]恒星耀光 创造一道线性的毁灭闪光，对光束路径上的所有目标造成伤害。
    "photokinetic_blinding_glare" , // [Ψ]致盲光辉 (C) 你可以释放出耀眼的光芒，任何试图攻击你的人都有被致盲的风险。此异能需要<color_yellow>持续专注来维持</color>，若<color_yellow>专注中断</color>则可能<color_red>失效</color>。
    "photokinetic_light_disintegrate", // [Ψ]瓦解光束 将大量光线集中到一个单一目标上，将其瓦解。
    "photokinetic_light_army"     , // [Ψ]幻影军团 (C) 在周身创造出无数幻象，用以误导和迷惑敌人。这些幻象一旦受损便会爆炸，并发出致盲的闪光。此异能需要<color_yellow>持续专注来维持</color>，若<color_yellow>专注中断</color>则可能<color_red>失效</color>。维持此异能需要比平时更高的<color_yellow>专注度</color>。当所有幻象都被摧毁时，专注会<color_green>自动结束</color>。
    "photokinetic_light_army_remove", // [Ψ]Phantom Legion Destruction Removes all remaining illusions when the power ends.
] as const;
/**从文件提取的预定义的MindOverMatterPhotokinesisSpellID */
export type ExtractDefineMindOverMatterPhotokinesisSpellID = typeof ExtractDefineMindOverMatterPhotokinesisSpellIDList[number];