import {
    RecipeCategoryID, RecipeSubCategoryID,
    AmmunitionTypeID, BoolExpr, Eoc, EocEffect, SpellID,
    EffectID, TalkTopicID, EocID, FlagID,
    ItemGroupID, MonsterID, MutationID, NpcClassID, NpcInstanceID, EnchantmentID,
    WeaponCategoryID,
    WeakpointSetID,
    VitaminID,
    VehiclePartID,
    VehicleID,
    TrapID,
    ToolQualityID,
    TerrainID,
    TechniqueID,
    SpeedDescriptionID,
    SpeciesID,
    SoundEffectID,
    SnippetCategoryID,
    SkillID,
    ScentTypeID,
    RequirementID,
    RecipeID,
    ProficiencyCategoryID,
    ProficiencyID,
    ProfessionID,
    PaletteID,
    OvermapTerrainID,
    OverMapSpecialID,
    OptionSliderID,
    NPCFactionID,
    MutationCategoryID,
    MoraleTypeID,
    MonsterGroupID,
    MonsterFactionID,
    MissionDefinitionID,
    MathFunctionID,
    MaterialID,
    MartialArtID,
    NestedMapgenID,
    LimbScoreID,
    ItemCategoryID,
    ItemActionID,
    HarvestDropTypeID,
    HarvestID,
    FurnitureID,
    CustomFlagID,
    FieldTypeID,
    FaultGroupID,
    FaultFixID,
    FaultID,
    EmitID,
    CharacterModID,
    BodyPartID,
    BionicID,
    AttackVectorID,
    AmmoEffectID,
    AddictionTypeID,
    ActivityTypeID,
    ToolID,
    MagazineID,
    ItemID,
    GunModID,
    GunID,
    ItemVariantID,
    ComestibleID,
    BionicItemID,
    BatteryID,
    ArtifactID,
    ArmorID,
    AmmoID,
    PortID,
    WeakpointID,
    TechniqueEffectID,
    SoundEffectVariantID,
    SnippetTextID,
    HobbyID,
    MartialArtBuffID,
    UpdateMapgenID,
    FaultTypeID,
    SubBodyPartID,
    ModId,
    ShopkeeperConsumptionRateID,
    ShopkeeperBlacklistID,
    MagicTypeID,
    MonsterAttackID,
} from "@/src/Schema";

/**ModID生成工具 */
export class ModDefine{
    /**mod物品前缀 */
    MOD_PREFIX:string;
    constructor(prefix:string){
        this.MOD_PREFIX = prefix;
    }
    //#region ModDefineID生成
    /**生成适用于此mod的 WeaponCategoryID */
    genWeaponCategoryID(id:string):WeaponCategoryID{
        return `${this.MOD_PREFIX}_WPCY_${id}`;
    }
    /**生成适用于此mod的 WeakpointSetID */
    genWeakpointSetID(id:string):WeakpointSetID{
        return `${this.MOD_PREFIX}_WPS_${id}`;
    }
    /**生成适用于此mod的 WeakpointID */
    genWeakpointID(id:string):WeakpointID{
        return `${this.MOD_PREFIX}_WP_${id}`;
    }
    /**生成适用于此mod的 VitaminID */
    genVitaminID(id:string):VitaminID{
        return `${this.MOD_PREFIX}_VIT_${id}`;
    }
    /**生成适用于此mod的 VehiclePartID */
    genVehiclePartID(id:string):VehiclePartID{
        return `${this.MOD_PREFIX}_VP_${id}`;
    }
    /**生成适用于此mod的 VehicleID */
    genVehicleID(id:string):VehicleID{
        return `${this.MOD_PREFIX}_VEH_${id}`;
    }
    /**生成适用于此mod的 TrapID */
    genTrapID(id:string):TrapID{
        return `${this.MOD_PREFIX}_TRAP_${id}`;
    }
    /**生成适用于此mod的 ToolQualityID */
    genToolQualityID(id:string):ToolQualityID{
        return `${this.MOD_PREFIX}_TQ_${id}`;
    }
    /**生成适用于此mod的 TerrainID */
    genTerrainID(id:string):TerrainID{
        return `${this.MOD_PREFIX}_TER_${id}`;
    }
    /**生成适用于此mod的 TechniqueID */
    genTechniqueID(id:string):TechniqueID{
        return `${this.MOD_PREFIX}_TECH_${id}`;
    }
    /**生成适用于此mod的 TechniqueEffectID */
    genTechniqueEffectID(id:string):TechniqueEffectID{
        return `${this.MOD_PREFIX}_TECHE_${id}`;
    }
    /**生成适用于此mod的 SpellID */
    genSpellID(id:string):SpellID{
        return `${this.MOD_PREFIX}_SPELL_${id}`;
    }
    /**生成适用于此mod的 SpeedDescriptionID */
    genSpeedDescriptionID(id:string):SpeedDescriptionID{
        return `${this.MOD_PREFIX}_SPDESC_${id}`;
    }
    /**生成适用于此mod的 SpeciesID */
    genSpeciesID(id:string):SpeciesID{
        return `${this.MOD_PREFIX}_SPEC_${id}`;
    }
    /**生成适用于此mod的 SoundEffectID */
    genSoundEffectID(id:string):SoundEffectID{
        return `${this.MOD_PREFIX}_SE_${id}`;
    }
    /**生成适用于此mod的 SoundEffectVariantID */
    genSoundEffectVariantID(id:string):SoundEffectVariantID{
        return `${this.MOD_PREFIX}_SEV_${id}`;
    }
    /**生成适用于此mod的 SnippetCategoryID */
    genSnippetCategoryID(id:string):SnippetCategoryID{
        return `${this.MOD_PREFIX}_SNIP_${id}`;
    }
    /**生成适用于此mod的 SnippetTextID */
    genSnippetTextID(id:string):SnippetTextID{
        return `${this.MOD_PREFIX}_SNIPT_${id}`;
    }
    /**生成适用于此mod的 SkillID */
    genSkillID(id:string):SkillID{
        return `${this.MOD_PREFIX}_SKILL_${id}`;
    }
    /**生成适用于此mod的 ScentTypeID */
    genScentTypeID(id:string):ScentTypeID{
        return `${this.MOD_PREFIX}_SCENT_${id}`;
    }
    /**生成适用于此mod的 RequirementID */
    genRequirementID(id:string):RequirementID{
        return `${this.MOD_PREFIX}_REQ_${id}`;
    }
    /**生成适用于此mod的 RecipeCategoryID */
    genRecipeCategoryID(id:string):RecipeCategoryID{
        return `${this.MOD_PREFIX}_RC_${id}`;
    }
    /**生成适用于此mod的 RecipeSubCategoryID */
    genRecipeSubCategoryID(id:string):RecipeSubCategoryID{
        return `${this.MOD_PREFIX}_RSC_${id}`;
    }
    /**生成适用于此mod的 RecipeID */
    genRecipeID(id:string):RecipeID{
        return `${this.MOD_PREFIX}_RECIPE_${id}`;
    }
    /**生成适用于此mod的 ProficiencyCategoryID */
    genProficiencyCategoryID(id:string):ProficiencyCategoryID{
        return `${this.MOD_PREFIX}_PROFC_${id}`;
    }
    /**生成适用于此mod的 ProficiencyID */
    genProficiencyID(id:string):ProficiencyID{
        return `${this.MOD_PREFIX}_PROF_${id}`;
    }
    /**生成适用于此mod的 ProfessionID */
    genProfessionID(id:string):ProfessionID{
        return `${this.MOD_PREFIX}_PROFESSION_${id}`;
    }
    /**生成适用于此mod的 HobbyID */
    genHobbyID(id:string):HobbyID{
        return `${this.MOD_PREFIX}_HOBBY_${id}`;
    }
    /**生成适用于此mod的 PaletteID */
    genPaletteID(id:string):PaletteID{
        return `${this.MOD_PREFIX}_PALETTE_${id}`;
    }
    /**生成适用于此mod的 OvermapTerrainID */
    genOvermapTerrainID(id:string):OvermapTerrainID{
        return `${this.MOD_PREFIX}_OMTERR_${id}`;
    }
    /**生成适用于此mod的 OverMapSpecialID */
    genOverMapSpecialID(id:string):OverMapSpecialID{
        return `${this.MOD_PREFIX}_OMSPEC_${id}`;
    }
    /**生成适用于此mod的 OptionSliderID */
    genOptionSliderID(id:string):OptionSliderID{
        return `${this.MOD_PREFIX}_OPTS_${id}`;
    }
    /**生成适用于此mod的 NpcInstanceID */
    genNpcInstanceID(id:string):NpcInstanceID{
        return `${this.MOD_PREFIX}_NPC_${id}`;
    }
    /**生成适用于此mod的 NPCFactionID */
    genNPCFactionID(id:string):NPCFactionID{
        return `${this.MOD_PREFIX}_NPCF_${id}`;
    }
    /**生成适用于此mod的 NpcClassID */
    genNpcClassID(id:string):NpcClassID{
        return `${this.MOD_PREFIX}_NPCCLS_${id}`;
    }
    /**生成适用于此mod的 ShopkeeperConsumptionRateID */
    genShopkeeperConsumptionRateID(id:string):ShopkeeperConsumptionRateID{
        return `${this.MOD_PREFIX}_SHOPKEEPER_CONSUMPTION_RATES_${id}`;
    }
    /**生成适用于此mod的 ShopkeeperBlacklistID */
    genShopkeeperBlacklistID(id:string):ShopkeeperBlacklistID{
        return `${this.MOD_PREFIX}_SHOPKEEPER_BLACKLIST_${id}`;
    }
    /**生成适用于此mod的 MutationCategoryID */
    genMutationCategoryID(id:string):MutationCategoryID{
        return `${this.MOD_PREFIX}_MUTC_${id}`;
    }
    /**生成适用于此mod的 MutationID */
    genMutationID(id:string):MutationID{
        return `${this.MOD_PREFIX}_MUT_${id}`;
    }
    /**生成适用于此mod的 MoraleTypeID */
    genMoraleTypeID(id:string):MoraleTypeID{
        return `${this.MOD_PREFIX}_MORT_${id}`;
    }
    /**生成适用于此mod的 MonsterGroupID */
    genMonsterGroupID(id:string):MonsterGroupID{
        return `${this.MOD_PREFIX}_MONG_${id}`;
    }
    /**生成适用于此mod的 MonsterFactionID */
    genMonsterFactionID(id:string):MonsterFactionID{
        return `${this.MOD_PREFIX}_MONF_${id}`;
    }
    /**生成适用于此mod的 MonsterAttackID */
    genMonsterAttackID(id:string):MonsterAttackID{
        return `${this.MOD_PREFIX}_MATK_${id}`;
    }
    /**生成适用于此mod的 MonsterID */
    genMonsterID(id:string):MonsterID{
        return `${this.MOD_PREFIX}_MON_${id}`;
    }
    /**生成适用于此mod的 ModId */
    genModId(id:string):ModId{
        return `${this.MOD_PREFIX}_MOD_${id}`;
    }
    /**生成适用于此mod的 MissionDefinitionID */
    genMissionDefinitionID(id:string):MissionDefinitionID{
        return `${this.MOD_PREFIX}_MISDEF_${id}`;
    }
    /**生成适用于此mod的 MathFunctionID */
    genMathFunctionID(id:string):MathFunctionID{
        return `${this.MOD_PREFIX}_FUNC_${id}`;
    }
    /**生成适用于此mod的 MaterialID */
    genMaterialID(id:string):MaterialID{
        return `${this.MOD_PREFIX}_MATE_${id}`;
    }
    /**生成适用于此mod的 MartialArtID */
    genMartialArtID(id:string):MartialArtID{
        return `${this.MOD_PREFIX}_MA_${id}`;
    }
    /**生成适用于此mod的 MartialArtBuffID */
    genMartialArtBuffID(id:string):MartialArtBuffID{
        return `${this.MOD_PREFIX}_MAB_${id}`;
    }
    /**生成适用于此mod的 NestedMapgenID */
    genNestedMapgenID(id:string):NestedMapgenID{
        return `${this.MOD_PREFIX}_NESTMPG_${id}`;
    }
    /**生成适用于此mod的 UpdateMapgenID */
    genUpdateMapgenID(id:string):UpdateMapgenID{
        return `${this.MOD_PREFIX}_UMPG_${id}`;
    }
    /**生成适用于此mod的 MagicTypeID */
    genMagicTypeID(id:string):MagicTypeID{
        return `${this.MOD_PREFIX}_MAGIC_TYPE_${id}`;
    }
    /**生成适用于此mod的 LimbScoreID */
    genLimbScoreID(id:string):LimbScoreID{
        return `${this.MOD_PREFIX}_LS_${id}`;
    }
    /**生成适用于此mod的 ItemGroupID */
    genItemGroupID(id:string):ItemGroupID{
        return `${this.MOD_PREFIX}_ITEMGP_${id}`;
    }
    /**生成适用于此mod的 ItemCategoryID */
    genItemCategoryID(id:string):ItemCategoryID{
        return `${this.MOD_PREFIX}_ITEMC_${id}`;
    }
    /**生成适用于此mod的 ItemActionID */
    genItemActionID(id:string):ItemActionID{
        return `${this.MOD_PREFIX}_IACT_${id}`;
    }
    /**生成适用于此mod的 HarvestDropTypeID */
    genHarvestDropTypeID(id:string):HarvestDropTypeID{
        return `${this.MOD_PREFIX}_HVDT_${id}`;
    }
    /**生成适用于此mod的 HarvestID */
    genHarvestID(id:string):HarvestID{
        return `${this.MOD_PREFIX}_HV_${id}`;
    }
    /**生成适用于此mod的 FurnitureID */
    genFurnitureID(id:string):FurnitureID{
        return `${this.MOD_PREFIX}_FURN_${id}`;
    }
    /**生成适用于此mod的 CustomFlagID */
    genCustomFlagID(id:string):CustomFlagID{
        return `${this.MOD_PREFIX}_FLAG_${id}`;
    }
    /**生成适用于此mod的 FieldTypeID */
    genFieldTypeID(id:string):FieldTypeID{
        return `${this.MOD_PREFIX}_FD_${id}`;
    }
    /**生成适用于此mod的 FaultGroupID */
    genFaultGroupID(id:string):FaultGroupID{
        return `${this.MOD_PREFIX}_FAULTG_${id}`;
    }
    /**生成适用于此mod的 FaultFixID */
    genFaultFixID(id:string):FaultFixID{
        return `${this.MOD_PREFIX}_FAULT_FIX_${id}`;
    }
    /**生成适用于此mod的 FaultID */
    genFaultID(id:string):FaultID{
        return `${this.MOD_PREFIX}_FAULT_${id}`;
    }
    /**生成适用于此mod的 FaultTypeID */
    genFaultTypeID(id:string):FaultTypeID{
        return `${this.MOD_PREFIX}_FAULTT_${id}`;
    }
    /**生成适用于此mod的 EnchantmentID */
    genEnchantmentID(id:string):EnchantmentID{
        return `${this.MOD_PREFIX}_ENCH_${id}`;
    }
    /**生成适用于此mod的 EmitID */
    genEmitID(id:string):EmitID{
        return `${this.MOD_PREFIX}_EMIT_${id}`;
    }
    /**生成适用于此mod的 EffectID */
    genEffectID(id:string):EffectID{
        return `${this.MOD_PREFIX}_EFF_${id}`;
    }
    /**生成适用于此mod的 CharacterModID */
    genCharacterModID(id:string):CharacterModID{
        return `${this.MOD_PREFIX}_CM_${id}`;
    }
    /**生成适用于此mod的 BodyPartID */
    genBodyPartID(id:string):BodyPartID{
        return `${this.MOD_PREFIX}_BP_${id}`;
    }
    /**生成适用于此mod的 SubBodyPartID */
    genSubBodyPartID(id:string):SubBodyPartID{
        return `${this.MOD_PREFIX}_SBP_${id}`;
    }
    /**生成适用于此mod的 BionicID */
    genBionicID(id:string):BionicID{
        return `${this.MOD_PREFIX}_BIO_${id}`;
    }
    /**生成适用于此mod的 AttackVectorID */
    genAttackVectorID(id:string):AttackVectorID{
        return `${this.MOD_PREFIX}_ATKV_${id}`;
    }
    /**生成适用于此mod的 AmmoEffectID */
    genAmmoEffectID(id:string):AmmoEffectID{
        return `${this.MOD_PREFIX}_AEFF_${id}`;
    }
    /**生成适用于此mod的 AmmunitionTypeID */
    genAmmunitionTypeID(id:string):AmmunitionTypeID{
        return `${this.MOD_PREFIX}_AMMUNIT_${id}`;
    }
    /**生成适用于此mod的 AddictionTypeID */
    genAddictionTypeID(id:string):AddictionTypeID{
        return `${this.MOD_PREFIX}_ADDICTION_TYPE_${id}`;
    }
    /**生成适用于此mod的 ActivityTypeID */
    genActivityTypeID(id:string):ActivityTypeID{
        return `${this.MOD_PREFIX}_ACT_${id}`;
    }
    /**生成适用于此mod的 EocID */
    genEocID(id:string):EocID{
        return `${this.MOD_PREFIX}_EOC_${id}`;
    }
    /**生成适用于此mod的 ToolID */
    genToolID(id:string):ToolID{
        return `${this.MOD_PREFIX}_TOOL_${id}`;
    }
    /**生成适用于此mod的 PortID */
    genPortID(id:string):PortID{
        return `${this.MOD_PREFIX}_PORT_${id}`;
    }
    /**生成适用于此mod的 MagazineID */
    genMagazineID(id:string):MagazineID{
        return `${this.MOD_PREFIX}_MAG_${id}`;
    }
    /**生成适用于此mod的 ItemID */
    genItemID(id:string):ItemID{
        return `${this.MOD_PREFIX}_ITEM_${id}`;
    }
    /**生成适用于此mod的 GunModID */
    genGunModID(id:string):GunModID{
        return `${this.MOD_PREFIX}_GMOD_${id}`;
    }
    /**生成适用于此mod的 GunID */
    genGunID(id:string):GunID{
        return `${this.MOD_PREFIX}_GUN_${id}`;
    }
    /**生成适用于此mod的 ItemVariantID */
    genItemVariantID(id:string):ItemVariantID{
        return `${this.MOD_PREFIX}_ITEMV_${id}`;
    }
    /**生成适用于此mod的 ComestibleID */
    genComestibleID(id:string):ComestibleID{
        return `${this.MOD_PREFIX}_COME_${id}`;
    }
    /**生成适用于此mod的 BionicItemID */
    genBionicItemID(id:string):BionicItemID{
        return `${this.MOD_PREFIX}_BIOITEM_${id}`;
    }
    /**生成适用于此mod的 BatteryID */
    genBatteryID(id:string):BatteryID{
        return `${this.MOD_PREFIX}_BATTERY_${id}`;
    }
    /**生成适用于此mod的 ArtifactID */
    genArtifactID(id:string):ArtifactID{
        return `${this.MOD_PREFIX}_ARTIFACT_${id}`;
    }
    /**生成适用于此mod的 ArmorID */
    genArmorID(id:string):ArmorID{
        return `${this.MOD_PREFIX}_ARMOR_${id}`;
    }
    /**生成适用于此mod的 AmmoID */
    genAmmoID(id:string):AmmoID{
        return `${this.MOD_PREFIX}_AMMO_${id}`;
    }
    //#endregion

    /**生成适用于此mod的 FLAG ID */
    genFlagID(id:string):FlagID{
        return this.genCustomFlagID(id);
    }
    /**生成适用于此mod的 TalkTopic ID */
    genTalkTopicID(id:string):TalkTopicID{
        return `${this.MOD_PREFIX}_TALKTC_${id}`;
    }
    /**生成适用此mod的触发eoc  
     * @param id        - eocid  
     * @param effect    - eoc效果数组  
     * @param condition - eoc条件  
     * @param forceId   - 强制使用原id  
     */
    genActEoc(id:string,effect:EocEffect[],condition?: (BoolExpr),forceId:boolean=false):Eoc{
        return {
            type:"effect_on_condition",
            id: forceId? id as any:this.genEocID(id),
            eoc_type:"ACTIVATION",
            effect,condition
        }
    }
    /**生成适用于此mod的变量ID */
    genVarID<T extends string>(id:T):`${string}_${T}`{
        return `${this.MOD_PREFIX}_${id}`;
    }
}
