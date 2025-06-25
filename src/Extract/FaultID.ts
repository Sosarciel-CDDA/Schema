/**从文件提取的预定义的FaultID 列表*/
export const ExtractDefineFaultIDList = [
    "fault_wet"                   , // 淋湿 这件物品湿透了，需要烘干后使用。
    "mend_fault_wet"              , // 晾干
    "mend_fault_wet_oven"         , // 烤箱烘干（需温控）
    "mend_fault_wet_hot_air"      , // 吹干
    "fault_engine_belt_drive"     , // 磨损的传动皮带 一个交流发电机保障正常运转的必需配件。
    "fault_engine_glow_plug"      , // 故障的电热塞 帮助你在低温环境下启动引擎。
    "fault_engine_immobiliser"    , // 启动的防盗装置 一个防盗设备，防止有人不用钥匙就发动汽车。
    "fault_engine_pump_diesel"    , // 故障的柴油泵 将柴油从油箱中泵出并加压的必要器件。
    "fault_engine_filter_air"     , // 老旧的空气滤清器 老旧的过滤器会降低燃料的效率，并产生更多的烟雾。
    "fault_engine_filter_fuel"    , // 老旧的燃料滤清器 老旧的滤清器会降低性能并提高逆火的概率。
    "fault_engine_pump_fuel"      , // 故障的汽油泵 将汽油从油箱中泵出的必要器件。
    "fault_engine_starter"        , // 故障的启动电机 用于启动引擎的必需品。
    "fault_handle_chipping"       , // 握把崩边 握把有小碎片正在剥落。
    "fault_handle_cracked"        , // 手柄开裂 手柄上有一道难看的裂缝。最好在整根轴折断之前把它修好！
    "fault_handle_broken"         , // 手柄损坏 原先的手柄只留下一小块木头。
    "fault_handle_off"            , // 无手柄 原先在这儿的把手断裂脱落了。
    "fault_handle_long_chipping"  , // 握把崩边 握把有小碎片正在剥落。
    "fault_handle_long_cracked"   , // 手柄开裂 手柄上有一道难看的裂缝。最好在整根轴折断之前把它修好！
    "fault_handle_long_broken_half", // 手柄损坏 手柄折断成两半了。不过你还是可以用，只是效果会差一些。
    "fault_handle_long_broken"    , // 手柄损坏 手柄完全坏了。
    "fault_handle_long_off"       , // 无手柄 工具的头部完全从杆上脱落了。
    "fault_blade_rolled_edge"     , // 刀口卷刃 刀口卷曲变形，更难使用。
    "fault_blade_chipped"         , // 刀刃崩口 一小块刃口缺损，以致锋利度锐减。
    "fault_blade_cracked"         , // 裂纹 刀身上有一道深深的裂痕。这无疑表明整把武器迟早会断裂。
    "fault_blade_broken_half"     , // 刀身折断 刀身的一小部分断掉了。仍可使用，但效果大打折扣。
    "fault_blade_broken"          , // 刀身折断 刀身粉碎，仅剩残端。想修只能铸把新的了。
    "fault_blade_broken_tip"      , // 破损的尖锋 你可以用来戳刺的刀尖消失了。
    "fault_blade_bent_tip"        , // 弯曲的尖锋 你可以用来戳砍的刀尖蜷曲了。
    "fault_spearhead_fracture"    , // 尖锋断裂 %s的尖锋折断了，使其戳砍能力减弱。
    "fault_spearhead_warped"      , // 尖锋翘曲 %s的尖锋扭曲了，使其戳砍能力减弱。
    "fault_spearhead_chipping"    , // 尖锋豁刃 %s的尖锋崩落了小碎片，使其戳砍能力减弱。
    "fault_spearhead_bent_socket" , // 刃座弯曲 %s的刃座弯曲变形，导致尖锋与主体不对齐，使得武器难以合适地戳砍。
    "fault_spearhead_broken"      , // 头端破损 %s的头段彻底破损了，想修只能铸把新的了。
    "fault_staff_short_chipping"  , // 崩边 %s 的表面有小碎片正在崩落。
    "fault_staff_short_cracked"   , // 裂缝 这个 %s 上出现了严重的裂缝。最好在它彻底断成两半之前修理一下！
    "fault_staff_short_broken"    , // 损坏 整个 %s 已经断裂，只剩下长长的碎片。
    "fault_staff_long_chipping"   , // 崩边 %s 的表面有小碎片正在崩落。
    "fault_staff_long_cracked"    , // 裂缝 这个 %s 上有一道严重的裂缝。最好在整根断成两半之前修好！
    "fault_staff_long_broken_half", // 损坏 这个 %s 已经断成两半了，虽然还能用，但效果大打折扣。
    "fault_staff_long_broken"     , // 损坏 这个 %s 已经完全损坏。
    "fault_gun_blackpowder"       , // 黑火药残渣 枪械发射黑火药弹药会残留残渣，降低枪械可靠性并且若不及时清理会使得枪械生锈。黑火药会比现代无烟火药更快的污染枪膛。残渣只会在堆积过高时影响枪械可靠性，但使用黑火药会在枪管中迅速堆积残渣。
    "fault_gun_unlubricated"      , // 未润滑 这把枪要么是全新没有润滑，要么是最近用溶剂清洗过后没有润滑。无论怎样，它都没有润滑，也无法正常上膛循环，甚至可能被损坏。
    "fault_gun_dirt"              , // 枪膛残渣 反复发射弹药会留下残渣，降低枪械可靠性并且若不及时清理最终会损害枪械。由于现代大部分在售弹药都采用无烟火药因此残渣积累非常缓慢（除非使用黑火药），除非你发射数千发弹药还从不清理导致残渣过多，残渣堆积不是大问题。
    "fault_overheat_explosion"    , // 热防护致命故障 烫烫烫
    "fault_overheat_venting"      , // 紧急排气 这种武器在过热时可以不受控制地排出冷却剂。
    "fault_overheat_melting"      , // 内部构件熔融 这把武器因为过热而无法使用。
    "fault_overheat_safety"       , // 过热保护 这种武器在过热时会试图进入冷却循环。
    "fault_fail_to_feed"          , // 未进弹 这把枪未能正常上膛。
    "fault_gun_chamber_spent"     , // 弹壳卡膛 这把枪的枪膛里卡着一颗空弹壳。
    "fault_stovepipe"             , // 抛壳窗卡弹 弹壳未能正确抛出，卡在了抛壳窗，形成类似烟囱的形状。
    "fault_double_feed"           , // 双进弹 枪械弹匣试图将两发子弹一起装入枪膛。
    "fault_electronic_blown_fuse" , // 保险丝熔断 受保险丝保护的电子电路。
    "mend_fault_electronic_blown_fuse", // 更换保险丝
    "fault_electronic_blown_capacitor", // 电容烧毁 储存电荷的电子电路。
    "mend_fault_electronic_blown_capacitor", // 更换保险丝
    "fault_electronic_shorted_circuit", // 电器短路 电子电路被过量电流损坏了。
    "mend_fault_electronic_shorted_circuit", // 更换短路器件
    "fault_emp_reboot"            , // 重设 这个设备在经受EMP短路之后被重新设置
    "fault_bionic_salvaged"       , // 已安装过 这个生化插件需要被恢复到出厂设置。
] as const;
/**从文件提取的预定义的FaultID */
export type ExtractDefineFaultID = typeof ExtractDefineFaultIDList[number];