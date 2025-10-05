/**从文件提取的预定义的MindOverMatterTeleportationSpellID 列表*/
export const ExtractDefineMindOverMatterTeleportationSpellIDList = [
    "teleport_blink"              , // [Ψ]闪现 Step briefly into the void between dimensions and emerge at a random nearby location.The power <color_red>will fail</color> if the volume of your carried gear is too great.
    "teleport_blink_real"         , // [Ψ]Blink Real The actual spell that blinks you.  You should not see this
    "teleport_slow"               , // [Ψ]卡顿步伐 操纵空间来增加目标周围的相对距离，降低他们的速度。
    "teleport_phase"              , // [Ψ]相位 通过短暂穿行于维度之间的空隙，你可以穿透墙壁或从地面穿行至屋顶。
    "teleport_phase_real"         ,
    "teleport_item_apport"        , // [Ψ]隔空投送 你可以将你持有的物品传送到附近的某个地方，而无需亲自搬运。<color_yellow>太大</color>的物品无法被传送
    "teleport_stride"             , // [Ψ]扩展步幅(C) 通过折叠空间来缩短距离，你的每一步都能你走得更远。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "teleport_transpose"          , // [Ψ]换位 把你自己和你目标的位置纠缠在一起，扭转一下，和他们交换位置。
    "teleport_displacement"       , // [Ψ]强制传送 With a touch, you can send your target through the void to re-emerge somewhere nearby, further away from you.  Targets that are <color_yellow>too large</color> cannot be displaced.
    "teleport_reactive_displacement", // [Ψ]反应式强制传送(C) 在你的周围维持一个不稳定的空间场，让你能毫不费力地将攻击你的敌人传送到远处。不幸的是，他们的攻击仍然会像往常一样伤害你。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "teleport_reactive_displacement_teleport", // [Ψ]Reactive Displacement (C) - Teleport The actual teleport effect of reactive displacement.  Having this spell is a bug.
    "teleport_collapse"           , // [Ψ]空间漩涡 影响空间结构，改变范围内的所有东西相对某点的距离，无论怎么移动，最终都在向中心点靠近。
    "teleport_collapse_01"        , // [Ψ]Spacial Vortex 01 Version 1 of the spacial vortex, with 2 pulls in.
    "teleport_collapse_02"        , // [Ψ]Spacial Vortex 02 Version 2 of the spacial vortex, with 3 pulls in.
    "teleport_collapse_03"        , // [Ψ]Spacial Vortex 03 Version 3 of the spacial vortex, with 4 pulls in.
    "teleport_collapse_04"        , // [Ψ]Spacial Vortex 04 Version 4 of the spacial vortex, with 5 pulls in.
    "teleport_collapse_05"        , // [Ψ]Spacial Vortex 05 Version 5 of the spacial vortex, with 6 pulls in.
    "teleport_collapse_06"        , // [Ψ]Spacial Vortex 06 Version 6 of the spacial vortex, with 7 pulls in.
    "teleport_collapse_07"        , // [Ψ]Spacial Vortex 07 Version 7 of the spacial vortex, with 8 pulls in.
    "teleport_collapse_pull"      , // [Ψ]Spacial Vortex Real The actual spacial vortex that pulls in monsters.  It's a bug if you have it.
    "teleport_relocation"         , // [Ψ]Relocation Transport items in your hands through the Nether to an attuned location.
    "teleport_warped_strikes"     , // [Ψ]Warped Strikes (C) By warping space as you attack, you can allow your melee attacks to reach much further than normal.This power <color_yellow>is maintained by concentration</color> and <color_red>may fail</color> if <color_yellow>concentration is interrupted</color>.
    "teleport_ephemeral_walk"     , // [Ψ]虚化穿行(C) 只要稍微涉足维度之间的空隙，你就能处于一种可以毫不费力地穿越障碍的状态。
    "teleport_farstep"            , // [Ψ]远端移动 Skating along the void between dimensions, move to a specific place nearby.The power <color_red>will fail</color> if the volume of your carried gear is too great.
    "teleport_farstep_real"       , // [Ψ]远端移动 Skating along the void between dimensions, move to a specific place nearby.The power <color_red>will fail</color> if the volume of your carried gear is too great.
    "teleport_banish"             , // [Ψ]异界监牢 通过异界将目标传送到其他维度。他们并不会直接因此死亡，但也不能再威胁到你了。传送非常强大敌人时，异界监牢可能会失效，就算成功也会对施法者造成伤害。
    "teleport_loci_establishment" , // [Ψ]锚点设立(C) 开始专注于记录能当前的位置，以便于通过施展“[Ψ]锚点回归”来回到锚点。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "teleport_loci_technique"     , // [Ψ]锚点回归 通过异界将自己传送到设立好的锚点。传送前必须先使用[Ψ]锚点设立 (C)与目的地同调。
    "teleport_gateway"            , // [Ψ]空间传送 Transport yourself through the Nether to an attuned location.  You must attune yourself to the place you wish to travel to.The power <color_red>will fail</color> if the volume of your carried gear is too great.
    "teleport_dilated_gateway"    , // [Ψ]Dilated Gateway Transport yourself and every adjacent creature to a chosen location.  You must have already attuned an area with [Ψ]Gateway.
    "teleport_dilated_gateway_teleport_others", // [Ψ]Dilated Gateway - Teleport Others The spell that actually teleports the adjacent targets.  Should only be casted via teleport_gateway_other's EOC.
    "teleport_dilated_gateway_teleport_self", // [Ψ]Dilated Gateway - Teleport Self The spell that actually teleports the player.  Should only be casted via teleport_gateway_other's EOC.
    "teleport_summon"             , // [Ψ]异界裂口 利用你自己或敌人作为相位锚，短暂开启一条通往异界的通道，并使一个（或多个）异界生物通过。你无法控制找到传送门的生物，也无法在它抵达主位面后指挥它。记住，有些异界生物在阳光下会立即死亡。
    "teleport_warper_combat"      , // [Ψ]Flickerflash Stance Through constant contraction and expansion of nearby space, as well as near-constant micro-teleports less than decimeter in distance, you can increase the effective momentum behind your strikes, make your exact position nearly impossible to determine, and your blows nearly impossible to stop.This power <color_yellow>is maintained by concentration</color> and <color_red>may fail</color> if <color_yellow>concentration is interrupted</color>.  It requires <color_yellow>even more concentration</color> than usual.
    "teleport_warper_combat_warp_chance_attacker", // [Ψ]Flickerflash Stance Attacker Warp Chance Chance to teleport when attacking a target
    "teleport_warper_combat_warp_chance_attacked", // [Ψ]Flickerflash Stance Attacked Warp Chance Chance to teleport when being attacked by a target
    "teleport_reality_tear"       , // [Ψ]时空裂隙 Make your own contribution to the Cataclysm by opening a rift in reality, allowing all manners of netherium creatures access to Earth.  The rift is temporary…hopefully.
    "teleport_reality_tear_temporary",
    "teleport_reality_tear_permanent",
] as const;
/**从文件提取的预定义的MindOverMatterTeleportationSpellID */
export type ExtractDefineMindOverMatterTeleportationSpellID = typeof ExtractDefineMindOverMatterTeleportationSpellIDList[number];