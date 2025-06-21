import { CddaID } from "./GenericDefine"



/**故障ID */
export type FaultID = CddaID<"FAULT">;

type template = {
  "type": "fault",
  "id": "fault_gun_chamber_spent", // unique id for the fault
  "name": { "str": "Spent casing in chamber" }, // fault name for display
  "description": "This gun currently...", // fault description
  "item_prefix": "jammed", // optional string, items with this fault will be prefixed with this
  "item_suffix": "no handle", // optional string, items with this fault will be suffixed with this. The string would be encased in parentheses, like `sword (no handle)`
  "message": "%s has it's handle broken!", // Message, that would be shown when such fault is applied, unless supressed
  "fault_type": "gun_mechanical_simple", // type of a fault, code may call for a random fault in a group instead of specific fault
  "affected_by_degradation": false, // default false. If true, the item degradation value would be added to fault weight on roll
  "degradation_mod": 50,  // default 0. Having this fault would add this amount of temporary degradation on the item, resulting in higher chance to trigger faults with "affected_by_degradation": true. Such degradation will be removed when fault is fixed
  "price_modifier": 0.4, // (Optional, double) Defaults to 1 if not specified. A multiplier on the price of an item when this fault is present. Values above 1.0 will increase the item's value.
  "melee_damage_mod": [ { "damage_id": "cut", "add": -5, "multiply": 0.8 } ], // (Optional) alters the melee damage of this type for item, if fault of this type is presented. `damage_id` is mandatory, `add` is 0 by default, `multiply` is 1 by default
  "armor_mod": [ { "damage_id": "cut", "add": -5, "multiply": 0.8 } ], // (Optional) Same as armor_mod, changes the protection value of damage type of the faulted item if it's presented
  "block_faults": [ "fault_handle_chipping", "fault_handle_cracked" ], // Faults, that cannot be applied if this fault is already presented on item. If there is already such a fault, it will be removed. Can't have chipped blade if the blade is gone
  "flags": [ "JAMMED_GUN" ] // optional flags, see below
}