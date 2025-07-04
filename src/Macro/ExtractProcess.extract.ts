import { awt, extractDefineIdList, SCHEMA_DIR, zh, zhl } from 'Macro';
import { UtilFT } from '@zwa73/utils';
import { Effect } from 'Schema/Effect';


const extractFn = (idfield:string,...fields:string[])=>async (fp:string)=>{
    const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
    return Promise.all(jsonlist.map(async (v) => {
        const translated = (await Promise.all(
            fields.map(async f => zhl(Array.isArray(v[f]) ? v[f]?.[0] : v[f]))
        ))
        .filter(fd=>typeof fd === 'string' && fd.length>0);
        const cmt = translated.length>0 ? ` // ${translated.join(' ')}` : '';
        return awt`${`"${v[idfield]}"`.padEnd(30)},${cmt}`;
    }));
}

//#region 预定义IDList生成
//ItemCategoryID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/item_category.json",
    typeName: "ItemCategoryID",
    func:extractFn('id','name_header'),
});
//SkillID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/skills.json",
    typeName: "SkillID",
    func:extractFn('id','name','description'),
});
//VitaminID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/vitamin.json",
    typeName: "VitaminID",
    func:extractFn('id','name'),
});
//FlagID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/flags.json",
    typeName: "FlagID",
    func:extractFn('id','info'),
});
//EffectID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/effects.json",
    typeName: "EffectID",
    func:extractFn('id','name','desc'),
});
//FaultGroupID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/faults/fault_groups_*.json",
    typeName: "FaultGroupID",
    func:extractFn('id','//'),
});
//FaultID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/faults/faults_*.json",
    typeName: "FaultID",
    func:extractFn('id','name','description'),
});
//FaultFixID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/faults/fault_fixes_*.json",
    typeName: "FaultFixeID",
    func:extractFn('id','name'),
});
//FieldTypeID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/field_type.json",
    typeName: "FieldTypeID",
    func:async fp=>{
        const jsonlist = await UtilFT.loadJSONFile(fp) as any[];
        return jsonlist.map(async v=>
            awt`${`"${v.id}"`.padEnd(30)}, // ${zhl(v.intensity_levels?.[0].name)}`);
    }
});
//EmitID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/emit.json",
    typeName: "EmitID",
    func:extractFn('id','//'),
});
//MartialID提取
void extractDefineIdList({
    sourceFileGlob: [
        "data/json/martialarts.json",
        "data/json/martialarts_fictional.json"
    ],
    typeName: "MartialID",
    func:extractFn('id','name','description'),
});
//TechniqueID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/techniques.json",
    typeName: "TechniqueID",
    func:extractFn('id','name','description'),
});
//ToolQualityID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/tool_qualities.json",
    typeName: "ToolQualityID",
    func:extractFn('id','name'),
});
//WeaponCategoryID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/weapon_categories.json",
    typeName: "WeaponCategoryID",
    func:extractFn('id','name','//'),
});
//AttackVectorID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/attack_vectors.json",
    typeName: "AttackVectorID",
    func:extractFn('id','//'),
});
//AmmoEffectID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/ammo_effects.json",
    typeName: "AmmoEffectID",
    func:extractFn('id','//'),
});
//ItemActionID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/item_actions.json",
    typeName: "ItemActionID",
    func:extractFn('id','name'),
});
//AmmiunitionTypeID提取
void extractDefineIdList({
    sourceFileGlob: "data/json/items/ammo_types.json",
    typeName: "AmmiunitionTypeID",
    func:extractFn('id','name'),
});
//#endregion