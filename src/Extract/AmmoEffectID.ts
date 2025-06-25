/**从文件提取的预定义的AmmoEffectID 列表*/
export const ExtractDefineAmmoEffectIDList = [
    "AE_NULL"                     ,
    "NO_PENETRATE_OBSTACLES"      , // Prevents a projectile from going through a tile with obstacles, such as chainlink fences or dressers. Hardcoded
    "BEANBAG"                     , // Stuns the target. Hardcoded
    "LARGE_BEANBAG"               , // Heavily stuns the target. Hardcoded
    "DRAW_AS_LINE"                , // Doesn't go through regular bullet animation; instead draws a line and the bullet on its end for one frame. Hardcoded
    "APPLY_SAP"                   , // Applies sap-coated effect on hit, used with special hardcoded monster attack. Hardcoded
    "BLINDS_EYES"                 , // Blinds the target if it hits the head. Hardcoded
    "BOUNCE"                      , // Projectile with this effect will rebound to a nearby target after hitting the oringinal target. Will not choose targets already hit by this projectile. Hardcoded
    "BURST"                       , // Ammo effect, applied to thrown projectile, when it has 'burst_when_filled' defined, which makes it spills the contents on hit. Hardcoded, and probably can't be used as actual ammo effect
    "SPECIAL_COOKOFF"             , // Ammo item explodes when lit on fire with it's ammo_effect. Strength of the explosion do not scale to the amount of ammo. If both COOKOFF and SPECIAL_COOKOFF is used, only SPECIAL_ effect would be used. Hardcoded
    "COOKOFF"                     , // Ammo item create an explosion when lit on fire. Strength of the explosion scale to the amount of ammo. Hardcoded
    "BLACKPOWDER"                 , // This ammo may clog up the gun with blackpowder fouling, which will also cause rust. Hardcoded
    "HEAVY_HIT"                   , // Automatically applied to any projectile, heavier than 500g, to increase it's noise (currently used only when projectile fall into water). Hardcoded
    "INCENDIARY"                  , // Creature, that got hit with this projectile, would be ignited for a short duration, up to 4 seconds, (6 if creature is made out of flammable material or made out of veggy). Hardcoded in projectile::apply_effects_damage
    "IGNITE"                      , // Same as INCENDIARY, creature that got hit with this projectile, would be ignited for a short duration, up to 6 seconds, (10 if creature is made out of flammable material or made out of veggy). Hardcoded
    "JET"                         , // For curses build, draws a `*` symbol as a flying projectile (unlike usual `#` symbol). Hardcoded
    "MATCHHEAD"                   , // Bullet has a chance of damaging the gun from overpressure regardless of fouling level, used in rounds, reloaded with matches. Hardcoded
    "MAGIC"                       , // Always best possible hit, no damage multipliers. Hardcoded
    "MUZZLE_SMOKE"                , // Generate a small cloud of smoke at the source. Hardcoded
    "NEVER_MISFIRES"              , // Firing ammo without this flag may trigger a misfiring, this is independent of the weapon flags. Hardcoded
    "NO_DAMAGE_SCALING"           , // Always set 100% damage due to hit in the weakpoint. Hardcoded
    "NO_EMBED"                    , // When an item would be spawned from the projectile, it will always be spawned on the ground rather than in a monster's inventory. Implied for active thrown items. Doesn't do anything on projectiles that do not drop items. Hardcoded
    "NOGIB"                       , // Prevents overkill damage on the target (target won't explode into gibs, same as monster's flag `NOGIB`). Hardcoded
    "NO_ITEM_DAMAGE"              , // Will not damage items on the map even when it otherwise would try to. Hardcoded
    "NON_FOULING"                 , // This ammo does not cause dirtying or blackpowder fouling on the gun when fired. Hardcoded
    "NO_OVERSHOOT"                , // Projectiles with this effect won't fly farther than player's set target tile. Hardcoded
    "NPC_AVOID"                   , // NPCs won't use guns or gunmods loaded with ammo with this effect. Hardcoded
    "NULL_SOURCE"                 , // Projectiles with this effect doesn't have a creature who fired them; applied only to explosives' shrapnel. Hardcoded
    "PARALYZEPOISON"              , // Applies paralyzing poison effect on damaging hit. Hardcoded
    "ROBOT_DAZZLE"                , // Applies sensor-stunning effect to robots.  Only intended to affect ROBOTs not CYBORGs. Hardcoded
    "RECYCLED"                    , // Causes the gun to misfire sometimes, used in handloaded ammo; this is independent of the weapon flags. Hardcoded
    "SHATTER_SELF"                , // Destroys itself and creates shards on hit. Applied to any projectile (usually throwing one), if it has glass as material, and not active. Hardcoded
    "SHOT"                        , // Multiple smaller pellets; less effective against armor but increases chance to hit and no point-blank penalty. Hardcoded
    "WIDE"                        , // Prevent HARDTOSHOOT monster flag from having any effect; automatically applied to ammo with `SHOT` flag or which have liquid phase. Hardcoded
    "FLAME"                       , // Very small explosion that lights fires
    "NAPALM"                      , // Explosion that spreads fire
    "PYROPHORIC"                  , // Large explosion that spreads fire of high intensity
    "ACIDBOMB"                    , // Leaves a pool of acid on detonation
    "TOXICGAS"                    , // Creates a cloud of toxic gas on hit
    "GAS_FUNGICIDAL"              , // Creates a cloud of fungicidal gas on hit
    "GAS_INSECTICIDAL"            , // Creates a cloud of insecticidal gas on hit
    "SMOKE"                       , // Generates a cloud of smoke at the target
    "SMOKE_BIG"                   , // Generates a large cloud of smoke at the target
    "FLARE"                       , // Lights the target tile on fire
    "LIGHTNING"                   , // Creates a trail of lightning
    "PLASMA"                      , // Creates a trail of superheated plasma
    "PLASMA_BUBBLE"               , // Creates a cloud of superheated plasma
    "PLASMA_FAN"                  ,
    "EXPLOSIVE"                   ,
    "EXPLOSIVE_SMALL"             ,
    "EXPLOSIVE_RAUFOSS"           ,
    "FRAG_20x66"                  , // Small explosion that spreads shrapnel
    "EXPLOSIVE_GRENADE"           ,
    "EXPLOSIVE_SMALL_HOMEMADE_GRENADE_1",
    "EXPLOSIVE_HOMEMADE_GRENADE_1",
    "EXPLOSIVE_SMALL_HOMEMADE_GRENADE_2",
    "EXPLOSIVE_HOMEMADE_GRENADE_2",
    "EXPLOSIVE_20x66"             ,
    "EXPLOSIVE_EXODII_THERMOBARIC",
    "EXPLOSIVE_EXODII_FIREWORK"   , // a large, shockwave like explosion with no shrapnel.
    "CORROSIVE"                   ,
    "GLUE_FOAM"                   ,
    "EXPLOSIVE_HESHOT"            ,
    "EXPLOSIVE_m430a1"            ,
    "EXPLOSIVE_m433"              ,
    "EXPLOSIVE_66mmHEAT"          ,
    "EXPLOSIVE_84x246HE"          ,
    "EXPLOSIVE_84x246HEDP"        ,
    "EXPLOSIVE_ATGMHEAT"          ,
    "EXPLOSIVE_120mmHEAT"         ,
    "EXPLOSIVE_60mmHE"            ,
    "EXPLOSIVE_60mmHE2"           ,
    "FLASHBANG"                   , // Blinds and deafens nearby targets
    "EMP"                         , // Damages 'electronic' terrain types (such as consoles or card readers) In rare cases might make card readers open doors. Damages and destroys robotic enemies. Drains bionic power and power from any electronic equipment in player possession
    "TRAIL"                       , // Creates a trail of smoke
    "STREAM_TINY"                 , // Sometimes leaves a trail of small fire fields. All of these STREAM_XXXXXX effects have hardcoded interactions in projectile_attack (ballistics.cpp)
    "STREAM"                      , // Leaves a trail of fire fields
    "STREAM_BIG"                  , // Leaves a trail of intense fire fields
    "PYROTECHNIC_DISPLAY"         , // Looks like huge fires, but doesn't actually burn stuff.
    "STREAM_GAS_FUNGICIDAL"       , // Leaves a trail of fungicidal gas
    "LASER"                       , // Creates a trail of laser
    "GENE_STING_BARB"             , // runs EoC that cause you to mutate
] as const;
/**从文件提取的预定义的AmmoEffectID */
export type ExtractDefineAmmoEffectID = typeof ExtractDefineAmmoEffectIDList[number];