/**从文件提取的预定义的MindOverMatterTeleportationSpellID 列表*/
export const ExtractDefineMindOverMatterTeleportationSpellIDList = [
    "teleport_blink"              , // [Ψ]闪现 短暂步入维度夹缝中的虚空，并随机出现在附近某处。若携带装备的体积过大，此能力将会<color_red>失效</color>。
    "teleport_slow"               , // [Ψ]卡顿步伐 操纵空间来增加目标周围的相对距离，降低他们的速度。
    "teleport_phase"              , // [Ψ]相位 通过短暂穿行于维度之间的空隙，你可以穿透墙壁或从地面穿行至屋顶。
    "teleport_item_apport"        , // [Ψ]隔空投送 你可以将你持有的物品传送到附近的某个地方，而无需亲自搬运。<color_yellow>太大</color>的物品无法被传送
    "teleport_stride"             , // [Ψ]扩展步幅(C) 通过折叠空间来缩短距离，你的每一步都能你走得更远。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "teleport_transpose"          , // [Ψ]换位 把你自己和你目标的位置纠缠在一起，扭转一下，和他们交换位置。
    "teleport_displacement"       , // [Ψ]强制传送 只需轻轻一触，你便能将目标送入虚空，让他们重新出现在附近一个离你更远的位置。<color_yellow>体型过大</color>的目标无法被置换。
    "teleport_reactive_displacement", // [Ψ]反应式强制传送(C) 在你的周围维持一个不稳定的空间场，让你能毫不费力地将攻击你的敌人传送到远处。不幸的是，他们的攻击仍然会像往常一样伤害你。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "teleport_reactive_displacement_teleport", // [Ψ]应激位移(C) - 传送 应激位移的实际传送效果。拥有此法术属于游戏bug。
    "teleport_collapse"           , // [Ψ]空间漩涡 影响空间结构，改变范围内的所有东西相对某点的距离，无论怎么移动，最终都在向中心点靠近。
    "teleport_relocation"         , // [Ψ]迁物术 通过虚空将手中的物品传送至一个已同步的地点。
    "teleport_warped_strikes"     , // [Ψ]翘曲打击(C) 攻击时扭曲空间，可以让你的近战攻击范围远超寻常。此能力需要<color_yellow>专注来维持</color>，若专注<color_yellow>被打断</color>则可能会<color_red>失效</color>。
    "teleport_ephemeral_walk"     , // [Ψ]虚化穿行(C) 只要稍微涉足维度之间的空隙，你就能处于一种可以毫不费力地穿越障碍的状态。
    "teleport_farstep"            , // [Ψ]远端移动 滑行于维度夹缝中的虚空，移动到附近指定的地点。若携带装备的体积过大，此能力将会<color_red>失效</color>。
    "teleport_farstep_real"       , // [Ψ]远端移动 滑行于维度夹缝中的虚空，移动到附近指定的地点。若携带装备的体积过大，此能力将会<color_red>失效</color>。
    "teleport_banish"             , // [Ψ]异界监牢 通过异界将目标传送到其他维度。他们并不会直接因此死亡，但也不能再威胁到你了。传送非常强大敌人时，异界监牢可能会失效，就算成功也会对施法者造成伤害。
    "teleport_loci_establishment" , // [Ψ]锚点设立(C) 开始专注于记录能当前的位置，以便于通过施展“[Ψ]锚点回归”来回到锚点。此项灵能<color_yellow>需要专注维持</color>，可能<color_red>失效</color>于<color_yellow>打断专注</color>后。
    "teleport_loci_technique"     , // [Ψ]锚点回归 通过异界将自己传送到设立好的锚点。传送前必须先使用[Ψ]锚点设立 (C)与目的地同调。
    "teleport_gateway"            , // [Ψ]空间传送 通过虚空将自己传送至一个已同步的地点。你必须先与希望前往的地点进行同步。若携带装备的体积过大，此能力将会<color_red>失效</color>。
    "teleport_dilated_gateway"    , // [Ψ]扩域传送门 将自己和所有邻近的生物传送至指定地点。你必须已使用[Ψ]传送门同步过一个区域。
    "teleport_dilated_gateway_teleport_others", // [Ψ]扩域传送门 - 传送他人 实际传送邻近目标的法术。只应通过teleport_gateway_other的EOC来施放。
    "teleport_dilated_gateway_teleport_self", // [Ψ]扩域传送门 - 传送自身 实际传送玩家的法术。只应通过teleport_gateway_other的EOC来施放。
    "teleport_summon"             , // [Ψ]异界裂口 利用你自己或敌人作为相位锚，短暂开启一条通往异界的通道，并使一个（或多个）异界生物通过。你无法控制找到传送门的生物，也无法在它抵达主位面后指挥它。记住，有些异界生物在阳光下会立即死亡。
    "teleport_warper_combat"      , // [Ψ]幻闪架势 通过不断收缩和扩张附近的空间，并持续进行距离不足一分米的微型传送，你能够增加攻击的有效动能，让你的确切位置几乎无法被锁定，攻势也几乎无法被阻挡。此能力需要<color_yellow>专注来维持</color>，若专注<color_yellow>被打断</color>则可能会<color_red>失效</color>。它比平时需要更强的<color_yellow>专注力</color>。
    "teleport_warper_combat_warp_chance_attacker", // [Ψ]Flickerflash Stance Attacker Warp Chance Chance to teleport when attacking a target
    "teleport_warper_combat_warp_chance_attacked", // [Ψ]Flickerflash Stance Attacked Warp Chance Chance to teleport when being attacked by a target
    "teleport_reality_tear"       , // [Ψ]时空裂隙 为这场末日浩劫“添砖加瓦”吧——在现实中撕开一道裂隙，放任形形色色的虚质生物涌入地球。这道裂隙只是暂时的…但愿如此。
] as const;
/**从文件提取的预定义的MindOverMatterTeleportationSpellID */
export type ExtractDefineMindOverMatterTeleportationSpellID = typeof ExtractDefineMindOverMatterTeleportationSpellIDList[number];