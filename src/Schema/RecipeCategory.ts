import { ExtractDefineRecipeCategoryID } from "@src/Extract/RecipeCategoryID";
import { CddaID } from "./GenericDefine";
import { ExtractDefineRecipeSubCategoryID } from "@src/Extract/RecipeSubCategoryID";




/**配方类别ID */
export type RecipeCategoryID = CddaID<"RC">|DefineRecipeCategoryID;
/**预定义的配方类别ID */
export type DefineRecipeCategoryID = ExtractDefineRecipeCategoryID;
/**配方子类别ID */
export type RecipeSubCategoryID = CddaID<"RSC">|DefineRecipeSubCategoryID;
/**预定义的配方子类别ID */
export type DefineRecipeSubCategoryID = ExtractDefineRecipeSubCategoryID;

/**配方类别 */
export type RecipeCategory = {
    type: "recipe_category";
    /**配方类别ID */
    id: (RecipeCategoryID);
    /**配方子类别 */
    recipe_subcategories: RecipeSubCategoryID[];
    /**是建造 */
    is_building?: boolean;
    /**是隐藏的 */
    is_hidden: true;
    /**是练习 */
    is_practice: true;
};