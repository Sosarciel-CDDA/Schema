import { VitaminID } from "./Vitamin";
import { CddaID, DescText } from "./GenericDefine";
import { MutationID } from "./Mutation";



/**变异类别ID */
export type MutationCategoryID = CddaID<"MUTC">|DefineMutationCategoryID;


/**变异类别 */
export type MutationCategory = {
    type: "mutation_category";
    /**变异类别唯一ID */
    id: (MutationCategoryID);
    /**突变种类的可读名称, 供玩家查看.  */
    name: (DescText);
    /**突变门槛. 当角色达到此突变后, 身份将发生本质改变.  */
    threshold_mut?: (MutationID);
    /**打破门槛所需的引物值 (primer)   
     * @default 2200  
     */
    threshold_min?: number;
    /**玩家在该种类突变时显示的提示信息.  */
    mutagen_message?: (DescText);
    /**玩家突破该突变门槛后, 记录在悼词中的信息 */
    memorial_message?: (DescText);
    /**该突变类别所对应引物的维生素 ID  
     * 角色体内该维生素的含量决定了向此类别突变的倾向权重, 每次突变成功后会根据突变消耗进行扣减  
     */
    vitamin?: (VitaminID);
    /**该类别突变移除冲突起始特性的百分比几率 (每次 Character::mutate_towards 尝试都会触发)   
     * 被移除的特性将不再视为基础特性, 即使之后重新获得.   
     * @default 100  
     */
    base_removal_chance?: number;
    /**用于计算移除基础特性的突变所需的引物成本倍率.   
     * 对于越接近非人类的类别应相应降低此值, 最低可为 0.0 表示免费突变  
     * @default 3.0  
     */
    base_removal_cost_mul?: number;
    /** 表示该突变种类尚未完成, 不应参与一致性测试.  */
    wip?: boolean;
    /**若为 true, 则跳过该类别在一致性测试中的检查; 请谨慎使用, 仅用于明确知道用途的情况 */
    skip_test?: boolean;
}



/**定义的变异类别ID 列表 */
export const DefineMutationCategoryIDList = [
    "ANY",
    "HUMAN",
    "PLANT",
    "INSECT",
    "SPIDER",
    "SLIME",
    "FISH",
    "GASTROPOD",
    "RAT",
    "BEAST",
    "URSINE",
    "FELINE",
    "LUPINE",
    "CATTLE",
    "CEPHALOPOD",
    "BIRD",
    "LIZARD",
    "BATRACHIAN",
    "TROGLOBITE",
    "ALPHA",
    "MEDICAL",
    "CHIMERA",
    "ELFA",
    "RAPTOR",
    "MOUSE",
    "RABBIT",
    "CRUSTACEAN",
    "CHIROPTERAN",
    "MYCUS",
] as const;

/**定义的变异类别ID */
export type DefineMutationCategoryID = typeof DefineMutationCategoryIDList[number];