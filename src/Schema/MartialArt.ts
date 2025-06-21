import { CddaID } from "./GenericDefine"




/**武术 */
export type MartialArtID = CddaID<"MA">;

type template = {
  "type": "martial_art",
  "id": "style_debug",                   // Unique ID. Must be one continuous word, use underscores if necessary
  "name": "Debug Mastery",               // In-game name displayed
  "description": "A secret martial art used only by developers and cheaters.",    // In-game description
  "initiate": [ "You stand ready.", "%s stands ready." ],    // Message shown when player or NPC selects this MA
  "autolearn": [ [ "unarmed", "2" ] ],   // A list of skill requirements that if met, automatically teach the player the MA
  "teachable": true,                     // Whether it's possible to teach this style between characters
  "allow_all_weapons": true,             // This MA always works, no matter what weapon is equipped (including no weapon)
  "force_unarmed": true,                 // You never use the equipped item to make attacks with this MA, and will use only your fist, legs or another limbs you have
  "prevent_weapon_blocking": true,       // You never block using weapon with this MA
  "strictly_melee": true,                // This style can only be used with weapons, it can't be used with bare hands
  "arm_block_with_bio_armor_arms": true, // Enables blocking damage using the Arms Alloy Plating CBM
  "leg_block_with_bio_armor_legs": true, // Enables blocking damage using the Legs Alloy Plating CBM
  //"autolearn": [ [ "melee", 1 ] ],       // The style is autolearned once you reach this level in specific skill or skills
  "primary_skill": "bashing",            // The difficulty and effectiveness of this MA scales from this skill (Default is "unarmed")
  "learn_difficulty": 5,                 // Difficulty to learn the style from a book based on "primary_skill". Total chance to learn a style from a single read of the book is equal to one in (10 + learn_difficulty - primary_skill)
  "arm_block": 99,                       // Unarmed skill level at which arm blocking is unlocked
  "leg_block": 99,                       // Unarmed skill level at which arm blocking is unlocked
  "nonstandard_block": 99,               // Unarmed skill level at which blocking with "nonstandard" mutated limbs is unlocked
  "static_buffs": [ { "id": "debug_elem_resist" } ],    // List of buffs that are automatically applied every turn. Same syntax for the following fields with "_buffs" in their name. For further details, see Martial art buffs
  "onmove_buffs": [  ],                  // List of buffs that are automatically applied on movement
  "onpause_buffs": [  ],                 // List of buffs that are automatically applied when passing a turn
  "onattack_buffs": [  ],                // List of buffs that are automatically applied after any attack, hit or miss
  "onhit_buffs": [  ],                   // List of buffs that are automatically applied on successful hit
  "onmiss_buffs": [  ],                  // List of buffs that are automatically applied on a miss
  "oncrit_buffs": [  ],                  // List of buffs that are automatically applied on a crit
  "ongethit_buffs": [  ],                // List of buffs that are automatically applied on being hit
  "ondodge_buffs": [  ],                 // List of buffs that are automatically applied on successful dodge
  "onblock_buffs": [  ],                 // List of buffs that are automatically applied on successful block
  "onkill_buffs": [  ],                  // List of buffs that are automatically applied upon killing an enemy
  "static_eocs": [                       // List of eocs that are automatically triggered every turn
    "EOC_ID",                            // Syntax allows either eoc IDs or as inline blocks
    { "id": "INLINE_EOC_ID" }
  ],
  "onmove_eocs": [  ],                   // List of eocs that are automatically triggered on movement
  "onpause_eocs": [  ],                  // List of eocs that are automatically triggered when passing a turn
  "onattack_eocs": [  ],                 // List of eocs that are automatically triggered after any attack, hit or miss
  "onhit_eocs": [  ],                    // List of eocs that are automatically triggered on successful hit
  "onmiss_eocs": [  ],                   // List of eocs that are automatically triggered on a miss
  "oncrit_eocs": [  ],                   // List of eocs that are automatically triggered on a crit
  "ongethit_eocs": [  ],                 // List of eocs that are automatically triggered on being hit
  "ondodge_eocs": [  ],                  // List of eocs that are automatically triggered on successful dodge
  "onblock_eocs": [  ],                  // List of eocs that are automatically triggered on successful block
  "onkill_eocs": [  ],                   // List of eocs that are automatically triggered upon killing an enemy
  "techniques": [                        // List of techniques available when this MA is used
    "tec_debug_slow",
    "tec_debug_arpen"
  ],
  "weapons": [ "tonfa" ],                // List of weapons usable with this art
  "weapon_category": [ "MEDIUM_SWORDS" ] // List of weapons categories usable with this MA
}