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
        ]);
        await createExtractIndex({dirName});
    }),

    ]);
    await createExtractIndex({});
})

//#endregion