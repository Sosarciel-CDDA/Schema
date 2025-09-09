import { DefineBodyPartID } from "Schema/BodyPart";
import { DefineDamageTypeID } from "Schema/DamageType";
import { SchemaString } from "Schema/GenericDefine";

type UN  = 'u'|'n';
type UNG = 'u'|'n'|'global';
type G   = 'global';
type Talker = UN|UNG|G;
const pt = (talker:Talker)=>talker=='global' ? '' : `${talker}_`;
type FNP<T extends string> = `'${T}'`|SchemaString;


/**获取对应部位的护甲值  
 * 只读  
 * 返回角色特定身体部位的护甲值, 对应特定伤害类型  
 * @example
 * "condition": { "math": [ "u armour('bash', 'torso') >= 5"] }
 */
const fnArmor = (talker:UN,damageType:FNP<DefineDamageTypeID>,bodypart:FNP<DefineBodyPartID>)=>
    `${pt(talker)}armor(${damageType}, ${bodypart})`;

