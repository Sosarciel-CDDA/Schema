import { ExtractDefineNpcInstanceID } from "Extract";
import { EocID } from "./Eoc";
import { CddaID, DescText, Int } from "./GenericDefine";
import { NpcClassID } from "./NpcClass";
import { NPCFactionID } from "./NPCFaction";
import { TalkTopicID } from "./TalkTopic";



/**Npc实例ID */
export type NpcInstanceID = CddaID<"NPC">|DefineNpcInstanceID;
/**预定义的 Npc实例ID */
export type DefineNpcInstanceID = ExtractDefineNpcInstanceID;


/**Npc实例 */
export type NpcInstance = {
    type: "npc";
    /**Npc实例唯一ID */
    id: (NpcInstanceID);
    /**独特名称 */
    name_unique?: (DescText);
    /**名称后缀 */
    name_suffix?: (DescText);
    /**职业 */
    class: (NpcClassID);
    /**初始态度 */
    attitude: NpcAttitude;
    /**初始行为 */
    mission: NpcMission;
    /**初始的聊天 talktopic */
    chat: (TalkTopicID);
    /**阵营 */
    faction?: (NPCFactionID);
    /**死亡触发的eoc */
    death_eocs?: EocID[];
    /**性别 */
    gender?: NpcGender;
    /**年龄 */
    age?: Int;
    /**身高 */
    height?: Int;
    /**npc的力量 */
    str?: Int;
    /**npc的敏捷 */
    dex?: Int;
    /**npc的智力 */
    int?: Int;
    /**npc的感知 */
    per?: Int;
    /**npc的性格 */
    personality?: {
        /**攻击性 */
        aggression?  : Int;
        /**勇气 */
        bravery?     : Int;
        /**收集癖 */
        collector?   : Int;
        /**乐于助人 */
        altruism?    : Int;
    }
}

/**NPC态度 列表 */
export const NpcAttitudeList = [
    0   ,// null, NPC可以做自己的事情
    1   ,// 说话, NPC会尝试接近玩家并与他们交谈
    3   ,// 跟随, NPC是玩家的好友, 可以被指挥
    7   ,// 防御, NPC 留在原地防御自己
    10  ,// 杀死, NPC 试图杀死玩家
    11  ,// 逃离, NPC逃离玩家
] as const;
/**NPC态度 */
export type NpcAttitude = typeof NpcAttitudeList[number];

/**Npc行为 列表 */
export const NpcMissionList = [
    0 ,// null, NPC可以做自己的事情
    3 ,// 店主, NPC 停留在一处, 但会尝试与玩家进行交易
    7 ,// 守卫, NPC 留在原地
] as const;
/**Npc行为 */
export type NpcMission = typeof NpcMissionList[number];

/**性别 */
export type NpcGender = "male"|"female";