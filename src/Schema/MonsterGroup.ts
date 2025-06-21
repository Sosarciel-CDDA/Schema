import { CddaID } from "./GenericDefine";
import { MonsterID } from "./Monster";




/**怪物组ID */
export type MonsterGroupID = CddaID<"MONG">;

export type MonsterGroup = {
    type: "monstergroup";
    /**怪物组唯一ID */
    id: (MonsterGroupID);
    is_animal: boolean;
    monsters: {
        monster: (MonsterID);
        weight: number;
        cost_multiplier: number;
    }[];
};
