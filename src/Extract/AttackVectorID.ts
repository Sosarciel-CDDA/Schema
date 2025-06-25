/**从文件提取的预定义的AttackVectorID 列表*/
export const ExtractDefineAttackVectorIDList = [
    "test_test"                   ,
    "vector_headbutt"             ,
    "vector_bite"                 ,
    "vector_punch"                ,
    "vector_wrist"                ,
    "vector_palm"                 ,
    "vector_grasp"                ,
    "vector_backhand"             ,
    "vector_shoulder"             ,
    "vector_arm"                  ,
    "vector_arm_grapple"          ,
    "vector_elbow"                ,
    "vector_foot_toes"            ,
    "vector_foot_sole"            ,
    "vector_foot_heel"            ,
    "vector_knee"                 ,
    "vector_shin"                 ,
] as const;
/**从文件提取的预定义的AttackVectorID */
export type ExtractDefineAttackVectorID = typeof ExtractDefineAttackVectorIDList[number];