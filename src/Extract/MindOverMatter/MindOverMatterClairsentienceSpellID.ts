/**从文件提取的预定义的MindOverMatterClairsentienceSpellID 列表*/
export const ExtractDefineMindOverMatterClairsentienceSpellIDList = [
    "clair_better_senses"         , // [Ψ]感知强化(C) 你所有的感官都得到了强化，让你视距更远，听力更敏锐。等级提升后，你甚至能在浑水中视物，或通过微小的震动和声响来感知附近移动的生物。此异能需要<color_yellow>持续专注来维持</color>，若<color_yellow>专注中断</color>则可能<color_red>失效</color>。
    "clair_speed_reading"         , // [Ψ]高速阅读(C) 你的灵能让你能够高速阅读。书上的文字似乎在不停飞出，直接映入你的脑海，你得以读的更快并且记得更牢。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。<color_red>进入战斗失效</color>。
    "clair_danger_sense"          , // [Ψ]危险感知(C) 你可以感觉到危险敌人的存在。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "clair_night_vision"          , // [Ψ]夜视(C) 你能够在光线昏暗的区域感知周遭环境，甚至能在伸手不见五指的黑暗中“视物”。严格来说，这并非真正的视觉，因此你无法辨认精细的细节或进行阅读。此异能需要<color_yellow>持续专注来维持</color>，若<color_yellow>专注中断</color>则可能<color_red>失效</color>。
    "clair_spot_weakness"         , // [Ψ]弱点观察 你的灵能可以让你准确地定位你的敌人的弱点。
    "clair_see_auras"             , // [Ψ]气场感知(C) 你隐隐约约看到彩色漩涡环绕人们周围，暗示他们的情绪和精神状态。这使你在交流谈判中处于上风。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。<color_red>进入战斗失效</color>。
    "clair_sense_rads"            , // [Ψ]辐射感知 你可以打开你的神经来感受辐射的光芒。
    "clair_ranged_enhance"        , // [Ψ]射手之眼(C) 运用你被灵能增强了的感官，你可以增加远程攻击的射程与精度。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "clair_voyance"               , // [Ψ]透视 这是超感者的经典灵能，你可以透过墙壁看到周围的一切。
    "clair_dodge_power"           , // [Ψ]战斗直感(C) 你可以稍稍预感短暂的未来，从而更好地躲避敌人的攻击。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "clair_craft_bonus"           , // [Ψ]工匠直觉(C) 你彻底投入未来，你能察觉到到制造或工作时应该采取的最佳对策。然而，由于专注于对未来的观察，你在制作时会<color_red>忽视</color>周围的环境。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。<color_red>进入战斗失效</color>。
    "clair_perfect_shot"          , // [Ψ]完美射击 看向未来，将敌人的行动纳入考量，并于最佳时机开火，发射一颗前无古人的精准子弹吧！
    "clair_see_map"               , // [Ψ]卫星视野 你可以将你的感官延伸到风景中，意识到大范围内的每一座山、每一栋建筑和每一座山谷。
    "clair_clear_sight"           , // [Ψ]清明感官(C) 拜灵能所赐，再也没有什么能够阻挡你看清世界的本来面貌了。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "clair_astral_projection"     , // [Ψ]星界投射 在短暂的专注和冥想之后，将你的灵魂从你的身体中释放出来，以无实体的方式在世界上游荡。你将以思想的速度移动，但当你的灵魂游荡时，你无法使用其他灵能或与世界互动。跟随你的系魂银带回到你的身体。
    "clair_astral_projection_return", // [Ψ]跟随银带 跟随系魂银带返回你的身体。
    "clair_group_tactics"         , // [Ψ]先觉战术家(C) 你可以看到未来，从而在危险到来前指挥你的跟随者。极大的增强他们的防守灵能，但也因为分心让你自己的防御更困难。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。比其寻常灵能需要<color_yellow>更多专注</color>。
    "clair_omniscience"           , // [Ψ]全知 将你的感官延伸到一个超凡的程度，感知附近区域内的一切。每一个生物，每一个物体，每一片草叶，每一样东西。<color_red>一切</color>.
] as const;
/**从文件提取的预定义的MindOverMatterClairsentienceSpellID */
export type ExtractDefineMindOverMatterClairsentienceSpellID = typeof ExtractDefineMindOverMatterClairsentienceSpellIDList[number];