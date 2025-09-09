import { BodyPartID } from "Schema/BodyPart";
import { DamageTypeID } from "Schema/DamageType";

type UN  = 'u'|'n';
type UNG = 'u'|'n'|'global';
type G   = 'global';
type Talker = UN|UNG|G;
const pt = (talker:Talker)=>talker=='global' ? '' : `${talker}_`;

const armor = (talker:UN,damageType:DamageTypeID,bodypart:BodyPartID)=>`${pt(talker)}armor('${damageType}', '${bodypart}')`;
