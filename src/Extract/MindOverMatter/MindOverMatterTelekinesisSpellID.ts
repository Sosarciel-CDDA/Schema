/**从文件提取的预定义的MindOverMatterTelekinesisSpellID 列表*/
export const ExtractDefineMindOverMatterTelekinesisSpellIDList = [
    "telekinetic_pull"            , // [Ψ]念动之手 将一组物品朝你移动或者移走。
    "telekinetic_push"            , // [Ψ]念动拉扯 用一股灵能将目标生物推开或拉向你。目标可以移动的距离取决于它的重量与你的灵能等级；更重的物品不会被移动得太远，如果你的目标太重，你可能根本无法移动它。
    "telekinetic_noise"           , // [Ψ]噪音发生器 使用集中的念动爆破力，将两个物体撞击在一起，或者将一个物体撞向地面，或者只是将自身的灵能撞击地面，引发巨大的噪音。
    "telekinetic_slam_down"       , // [Ψ]念力击倒 操控念动力使某物猛烈地摔到地上，造成少量伤害和击倒。
    "telekinetic_momentum"        , // [Ψ]动量修正(C) 操控自己和附近物体的动量，以获取战斗优势，减少受到的伤害并略微增加你的速度。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "telekinetic_slowfall"        , // [Ψ]羽落术 用心灵能力抵消重力的拉扯，极大地减少甚至消除坠落造成的损害，并变得更加轻快。
    "telekinetic_wave"            , // [Ψ]念动波 在你周围释放一股心灵震波，不分青红皂白地将一切击退。
    "telekinetic_water_walk"      , // [Ψ]水上行走(C) Lift yourself enough to counteract your mass, allowing the surface tension of liquids to support you, enabling you to walk on water.This power <color_yellow>is maintained by concentration</color> and <color_red>may fail</color> if <color_yellow>concentration is interrupted</color>.  It requires <color_yellow>even more concentration</color> than usual.
    "telekinetic_lifting_field"   , // [Ψ]悬浮场(C) 将一个物体悬停在你旁边，供你轻松取用或腾出双手执行其他任务。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "telekinetic_strength"        , // [Ψ]强化力量(C) 集中提高你的灵能，让你能够移动更重的物体或砸破墙壁。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。<color_red>进入战斗失效</color>。
    "telekinetic_hammer"          , // [Ψ]念力锤击 用灵能砸击单个目标或小片区域。
    "telekinetic_vehicle_lift"    , // [Ψ]念力起重(C) 集中你的灵能，将车辆抬起一些高度，足以更换轮胎或进行修理了。随着你的灵能增加，你将能够举起更重的车辆。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。<color_red>进入战斗失效</color>。
    "telekinetic_shield"          , // [Ψ]念力屏障(C) 创建一个念动屏障，保护自己免受伤害。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "telekinetic_explosion"       , // [Ψ]念力破拆 一股瞬动力量的爆发粉碎了目标位置的地形，以及任何目标位置的物品。
    "telekinetic_levitation"      , // [Ψ]念力浮空(C) Use your telekinesis and lift yourself up, defying gravity.  While not true flight, you can cross open air and descend safely.This power <color_yellow>is maintained by concentration</color> and <color_red>may fail</color> if <color_yellow>concentration is interrupted</color>.  It is <color_red>canceled by engaging in combat</color>.  It requires <color_yellow>even more concentration</color> than usual.
    "telekinetic_move_large_weight", // [Ψ]超念动 范围及强度更大的念动，这种灵能可以让你移动非常重的物品，并以足以致命的速度投掷出接近人类体型的目标，或者捡起并投掷巨大的物品。你可以移动的重量取决于灵能水平。
    "telekinetic_aegis"           , // [Ψ]灵能神盾 在周围生成一个物理伤害无法穿透的盾牌。只能维持<color_yellow>极短时间</color>并且你在持续期间<color_red>无法移动</color>。
    "telekinetic_earthshaker"     , // [Ψ]撼地灵能 用灵能操纵附近的大地，将其*扭曲*，推倒建筑物，击倒附近的所有人。
] as const;
/**从文件提取的预定义的MindOverMatterTelekinesisSpellID */
export type ExtractDefineMindOverMatterTelekinesisSpellID = typeof ExtractDefineMindOverMatterTelekinesisSpellIDList[number];