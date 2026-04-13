import { createExtractIndex, extractDefineIdList } from 'Macro';
import { ivk, MPromise, UtilFT } from '@zwa73/utils';
import { awt, zhl } from '@/src/Util';


const extractFn = (arg:{
    id:string;
    field?:string[];
    filter?:(v:any)=>MPromise<boolean>;
})=>async (fp:string)=>{
    const {
        id,
        field=[],
        filter=()=>true
    } = arg;
    const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
    return Promise.all(jsonlist.map(async v => {
        if(! await filter(v)) return undefined;
        const sid = v[id];
        if(sid==undefined) return undefined;

        //翻译描述
        const translated = (await Promise.all(
            field.map(async f => zhl(Array.isArray(v[f]) ? v[f]?.[0] : v[f]))
        )).filter(fd=>typeof fd === 'string' && fd.length>0);

        //构建描述注释
        const cmt = translated.length>0 ? ` // ${translated.join(' ')}` : '';
        return awt`${`"${sid}"`.padEnd(30)},${cmt}`;
    })).then(v=>v.filter(str=>str!=undefined));
}

const typeFilter = (t:string) => (v:any)=> v.type == t;

//#region 预定义IDList生成
ivk(async ()=>{
    await Promise.all([
    //ItemCategoryID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/item_category.json",
        typeName: "ItemCategoryID",
        func:extractFn({
            id: 'id',
            field: ['name_header'],
        }),
    }),
    //SkillID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/skills.json",
        typeName: "SkillID",
        func:extractFn({
            id: 'id',
            field: ['name','description'],
        }),
    }),
    //VitaminID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/vitamin.json",
        typeName: "VitaminID",
        func:extractFn({
            id: 'id',
            field: ['name'],
        }),
    }),
    //FlagID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/flags.json",
        typeName: "FlagID",
        func:extractFn({
            id: 'id',
            field: ['info'],
        }),
    }),
    //EffectID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/effects.json",
        typeName: "EffectID",
        func:extractFn({
            id: 'id',
            field: ['name','desc'],
        }),
    }),
    //FaultGroupID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/faults/fault_groups_*.json",
        typeName: "FaultGroupID",
        func:extractFn({
            id: 'id',
            field: ['//'],
        }),
    }),
    //FaultID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/faults/faults_*.json",
        typeName: "FaultID",
        func:extractFn({
            id: 'id',
            field: ['name','description'],
        }),
    }),
    //FaultFixID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/faults/fault_fixes_*.json",
        typeName: "FaultFixeID",
        func:extractFn({
            id: 'id',
            field: ['name'],
        }),
    }),
    //FieldTypeID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/field_type.json",
        typeName: "FieldTypeID",
        func:async fp=>{
            const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
            return jsonlist.map(async v=>
                awt`${`"${v.id}"`.padEnd(30)}, // ${zhl(v.intensity_levels?.[0].name)}`);
        }
    }),
    //EmitID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/emit.json",
        typeName: "EmitID",
        func:extractFn({
            id: 'id',
            field: ['//'],
        }),
    }),
    //MartialID提取
    extractDefineIdList({
        sourceFileGlob: [
            "data/json/martialarts.json",
            "data/json/martialarts_fictional.json"
        ],
        typeName: "MartialID",
        func:extractFn({
            id: 'id',
            field: ['name','description'],
        }),
    }),
    //TechniqueID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/techniques.json",
        typeName: "TechniqueID",
        func:extractFn({
            id: 'id',
            field: ['name','description'],
        }),
    }),
    //ToolQualityID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/tool_qualities.json",
        typeName: "ToolQualityID",
        func:extractFn({
            id: 'id',
            field: ['name'],
        }),
    }),
    //WeaponCategoryID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/weapon_categories.json",
        typeName: "WeaponCategoryID",
        func:extractFn({
            id: 'id',
            field: ['name','//'],
        }),
    }),
    //AttackVectorID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/attack_vectors.json",
        typeName: "AttackVectorID",
        func:extractFn({
            id: 'id',
            field: ['//'],
        }),
    }),
    //AmmoEffectID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/ammo_effects.json",
        typeName: "AmmoEffectID",
        func:extractFn({
            id: 'id',
            field: ['//'],
        }),
    }),
    //ItemActionID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/item_actions.json",
        typeName: "ItemActionID",
        func:extractFn({
            id: 'id',
            field: ['name'],
        }),
    }),
    //AmmiunitionTypeID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/items/ammo_types.json",
        typeName: "AmmiunitionTypeID",
        func:extractFn({
            id: 'id',
            field: ['name'],
        }),
    }),
    //BodyPartID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/body_parts.json",
        typeName: "BodyPartID",
        func:async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
        const bplist = jsonlist.filter(v=>v.type === 'body_part');
        return bplist.map(async v=>
            awt`${`"${v.id}"`.padEnd(30)}, // ${zhl(v.name)}`);
        }
    }),
    //SubBodyPartID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/body_parts.json",
        typeName: "SubBodyPartID",
        func:async fp=>{
            const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
            const bplist = jsonlist.filter(v=>v.type === 'sub_body_part');
            return bplist.map(async v=>
                awt`${`"${v.id}"`.padEnd(30)}, // ${zhl(v.name)}`);
        }
    }),
    //UseActionID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/item_action.json",
        typeName: "ItemActionID",
        func:extractFn({
            id: 'id',
            field: ['name'],
        }),
    }),
    //RecipeCategoryID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/recipes/recipes.json",
        typeName: "RecipeCategoryID",
        func:extractFn({id:'id'}),
    }),

    extractDefineIdList({
        sourceFileGlob: "data/json/recipes/recipes.json",
        typeName: "RecipeSubCategoryID",
        func:async fp=>{
            const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
            const list = jsonlist.filter(v=>v.recipe_subcategories !=null );
            return list.map(v=>v.recipe_subcategories).flat().map(async v=>
                awt`${`"${v}"`.padEnd(30)},`);
        }
    }),

    //NpcClassID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/npcs/classes.json",
        typeName: "NpcClassID",
        func:extractFn({
            id: 'id',
            field: ['name','job_description'],
        }),
    }),

    //NpcInstanceID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/npcs/npc.json",
        typeName: "NpcInstanceID",
        func:extractFn({
            id: 'id',
            field: ['//'],
        }),
    }),

    //MaterilID提取
    extractDefineIdList({
        sourceFileGlob: "data/json/materials.json",
        typeName: "MaterialID",
        func:extractFn({
            id: 'id',
            field: ['name'],
        }),
    }),

    //Xedra法术提取
    ivk(async ()=>{
        const dirName = "XedraEvolved";
        const filter = (v:any)=> v.spell_class !=undefined && v.type == "SPELL";
        const extractFunc = extractFn({
            filter, id: 'id',
            field: ['name','description'],
        });
        const extractFuncNoClass = extractFn({
            filter: (v:any)=> v.type == "SPELL",
            id: 'id',
            field: ['name','description'],
        });
        await Promise.all([
        //梦行者
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Xedra_Evolved/spells/dreamer_spells.json",
            typeName: `${dirName}DreamerSpellID`,
            func:extractFunc,
        }),
        //食梦者
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Xedra_Evolved/spells/eater_spells.json",
            typeName: `${dirName}EaterSpellID`,
            func:extractFunc,
        }),
        //变形者
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Xedra_Evolved/spells/changeling_spells.json",
            typeName: `${dirName}ChangelingSpellID`,
            func:extractFunc,
        }),
        //无职业法术
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Xedra_Evolved/spells/classless_spells.json",
            typeName: `${dirName}ClasslessSpellID`,
            func:extractFuncNoClass,
        }),
        //边缘魔法
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Xedra_Evolved/spells/hedge_magic_spells.json",
            typeName: `${dirName}HedgeMagicSpellID`,
            func:extractFunc,
        }),
        //发明家
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Xedra_Evolved/spells/inventor_spells.json",
            typeName: `${dirName}InventorSpellID`,
            func:extractFunc,
        }),
        //莉莉姆
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Xedra_Evolved/spells/lilin_spells.json",
            typeName: `${dirName}LilinSpellID`,
            func:extractFunc,
        }),
        //吸血鬼
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Xedra_Evolved/spells/vampire_spells.json",
            typeName: `${dirName}VampireSpellID`,
            func:extractFunc,
        }),
        //种族法术-Arvore(树精)
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Xedra_Evolved/mutations/paraclesians/arvore_mutation_spells.json",
            typeName: `${dirName}RaceArvoreSpellID`,
            func:extractFunc,
        }),
        //种族法术-Homullus
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Xedra_Evolved/mutations/paraclesians/homullus_mutation_spells.json",
            typeName: `${dirName}RaceHomullusSpellID`,
            func:extractFunc,
        }),
        //种族法术-Ierde
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Xedra_Evolved/mutations/paraclesians/ierde_mutation_spells.json",
            typeName: `${dirName}RaceIerdeSpellID`,
            func:extractFunc,
        }),
        //种族法术-Paraclesian通用
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Xedra_Evolved/mutations/paraclesians/paraclesian_mutation_spells.json",
            typeName: `${dirName}RaceParaclesianSpellID`,
            func:extractFunc,
        }),
        //种族法术-Salamander(火元素)
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Xedra_Evolved/mutations/paraclesians/salamander_mutation_spells.json",
            typeName: `${dirName}RaceSalamanderSpellID`,
            func:extractFunc,
        }),
        //种族法术-Sylph(风元素)
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Xedra_Evolved/mutations/paraclesians/sylph_mutation_spells.json",
            typeName: `${dirName}RaceSylphSpellID`,
            func:extractFunc,
        }),
        //种族法术-Undine(水元素)
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Xedra_Evolved/mutations/paraclesians/undine_mutation_spells.json",
            typeName: `${dirName}RaceUndineSpellID`,
            func:extractFunc,
        }),
        ]);
        await createExtractIndex({dirName});
    }),

    //MoM法术提取
    ivk(async ()=>{
        const dirName = "MindOverMatter";
        const filter = (v:any)=> v.spell_class !=undefined && v.type == "SPELL";
        const extractFunc = extractFn({
            filter, id: 'id',
            field: ['name','description'],
        });
        await Promise.all([
        //无职业的
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/MindOverMatter/powers/classless.json",
            typeName: `${dirName}ClasslessSpellID`,
            func:extractFn({
                filter: v => v.type == "SPELL",
                id: 'id',
                field: ['name','description'],
            }),
        }),
        //炼体者
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/MindOverMatter/powers/biokinesis.json",
            typeName: `${dirName}BiokinesisSpellID`,
            func:extractFunc,
        }),
        //灵视者
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/MindOverMatter/powers/clairsentience.json",
            typeName: `${dirName}ClairsentienceSpellID`,
            func:extractFunc,
        }),
        //驱电者
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/MindOverMatter/powers/electrokinesis.json",
            typeName: `${dirName}ElectrokinesisSpellID`,
            func:extractFunc,
        }),
        //控光者
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/MindOverMatter/powers/photokinesis.json",
            typeName: `${dirName}PhotokinesisSpellID`,
            func:extractFunc,
        }),
        //焰动者
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/MindOverMatter/powers/pyrokinesis.json",
            typeName: `${dirName}PyrokinesisSpellID`,
            func:extractFunc,
        }),
        //灵视者
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/MindOverMatter/powers/clairsentience.json",
            typeName: `${dirName}ClairsentienceSpellID`,
            func:extractFunc,
        }),
        //念动者
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/MindOverMatter/powers/telekinesis.json",
            typeName: `${dirName}TelekinesisSpellID`,
            func:extractFunc,
        }),
        //超感者
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/MindOverMatter/powers/telepathy.json",
            typeName: `${dirName}TelepathySpellID`,
            func:extractFunc,
        }),
        //传送者
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/MindOverMatter/powers/teleportation.json",
            typeName: `${dirName}TeleportationSpellID`,
            func:extractFunc,
        }),
        //疗愈者
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/MindOverMatter/powers/vitakinesis.json",
            typeName: `${dirName}VitakinesisSpellID`,
            func:extractFunc,
        }),
        ]);
        await createExtractIndex({dirName});
    }),

    //大魔法法术提取
    ivk(async ()=>{
        const dirName = "Magiclysm";
        const filter = (v:any)=> v.spell_class !=undefined && v.type == "SPELL";
        const extraFunc = extractFn({
            filter,
            id: 'id',
            field: ['name','description'],
        });
        await Promise.all([
        //无职业的
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Magiclysm/Spells/classless.json",
            typeName: `${dirName}ClasslessSpellID`,
            func:extractFn({
                filter: v => v.type == "SPELL",
                id: 'id',
                field: ['name','description'],
            }),
        }),
        //泛灵师
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Magiclysm/Spells/animist.json",
            typeName: `${dirName}AnimistSpellID`,
            func:extraFunc,
        }),
        //生化术士
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Magiclysm/Spells/biomancer.json",
            typeName: `${dirName}BiomancerSpellID`,
            func:extraFunc,
        }),
        //德鲁伊
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Magiclysm/Spells/druid.json",
            typeName: `${dirName}DruidSpellID`,
            func:extraFunc,
        }),
        //塑地者
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Magiclysm/Spells/earthshaper.json",
            typeName: `${dirName}EarthshaperSpellID`,
            func:extraFunc,
        }),
        //炽霜法师
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Magiclysm/Spells/kelvinist.json",
            typeName: `${dirName}KelvinistSpellID`,
            func:extraFunc,
        }),
        //魔术师
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Magiclysm/Spells/magus.json",
            typeName: `${dirName}MagusSpellID`,
            func:extraFunc,
        }),
        //风暴塑造者
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Magiclysm/Spells/stormshaper.json",
            typeName: `${dirName}StormshaperSpellID`,
            func:extraFunc,
        }),
        //科技法师
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Magiclysm/Spells/technomancer.json",
            typeName: `${dirName}TechnomancerSpellID`,
            func:extraFunc,
        }),
        //调谐职业法术(统一提取)
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Magiclysm/Spells/attunements/*.json",
            typeName: `${dirName}AttunSpellID`,
            func:extractFn({
                filter, id: 'id',
                field: ['name','spell_class','description'],
            }),
        }),
        ]);
        await createExtractIndex({dirName});
    }),

    //DamageType提取
    ivk(async ()=>{
        const dirName = "DamageType";
        const filter = typeFilter("damage_type");
        const extractFunc = extractFn({
            filter,
            id: 'id',
            field: ['name'],
        });
        await Promise.all([
        //原版核心
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/json/damage_types.json",
            typeName: "CoreDamageTypeID",
            func:extractFunc,
        }),
        //大魔法mod
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Magiclysm/damage_types.json",
            typeName: "MagiclysmDamageTypeID",
            func:extractFunc,
        }),
        //MoMmod
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/MindOverMatter/damage_types.json",
            typeName: "MindOverMatterDamageTypeID",
            func:extractFunc,
        }),
        //Xedramod
        extractDefineIdList({
            dirName,
            sourceFileGlob: "data/mods/Xedra_Evolved/damage_types.json",
            typeName: "XedraEvolvedDamageTypeID",
            func:extractFunc,
        }),
        ]);
        await createExtractIndex({dirName});
    }),

    ]);
    await createExtractIndex({});
})

//#endregion