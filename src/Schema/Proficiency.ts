import { CddaID } from "./GenericDefine";


/**专长ID */
export type ProficiencyID = CddaID<"PROF">;

type template = {
    "type": "proficiency",
    "id": "prof_bow_master",
    "category": "prof_archery",
    "name": { "str": "Master Archer's Form" },
    "description": "You are a master at the art of Archery.",
    "can_learn": true,
    "teachable": true,
    "time_to_learn": "20 h",
    "default_time_multiplier": 1.5,
    "default_skill_penalty": 0.2,
    "required_proficiencies": [ "prof_bow_expert" ],
    "bonuses": { "archery": [ { "type": "strength", "value": 1 } ] }
  };