import { CddaID, DescText } from "./GenericDefine";




/**模组ID */
export type ModId = CddaID<"MOD">;




/**模组信息
 * 定义模组的元数据，每个模组必须包含一个 modinfo.json 文件
 */
export type ModInfo = {
    /**类型标识，必填 */
    type: "MOD_INFO";
    /**模组唯一ID，必填
     * 不能与其他模组使用相同的ID
     * 不能包含 '#' 字符
     * 模组ID必须是有效的文件夹路径以支持与其他模组的兼容性
     */
    id: (ModId);
    /**模组显示名称，必填 */
    name: (DescText);
    /**作者列表，可选
     * 可以添加多个条目
     */
    authors?: string[];
    /**维护者列表 */
    maintainers?: string[];
    /**模组描述，可选 */
    description?: (DescText);
    /**模组分类
     * 用于在模组选择菜单中显示
     * 可选值: content, total_conversion, items, creatures, misc_additions, buildings, vehicles, rebalance, magical, item_exclude, monster_exclude, graphical
     */
    category?: ModCategory;
    /**依赖模组列表，可选
     * 如果你的模组依赖其他模组才能正常工作，将那个模组的ID添加到此数组中
     * Cataclysm会强制在加载你的模组之前先加载依赖的模组
     */
    dependencies?: ModId[];
    /**冲突模组列表 */
    conflicts?: ModId[];
    /**加载屏幕图片文件名列表，可选
     * 仅支持 .png 文件
     * 仅在图形/瓷砖版本中有效
     * 实际加载屏幕图片将从所有已加载模组的加载屏幕中随机选择
     */
    loading_images?: string[];
    /**版本号，可选
     * 仅用于信息展示，不提供版本控制系统
     */
    version?: string;
    /**是否为核心模组，可选
     * @default false
     * 核心模组将在其他所有内容之前加载
     * 用于DDA，不支持第三方使用
     */
    core?: boolean;
    /**是否已过时，可选
     * @default false
     * 过时的模组会为旧存档加载，但不能用于创建新世界
     */
    obsolete?: boolean;
    /**模组文件目录路径，可选
     * 相对于 modinfo.json 位置的目录将被视为模组的实际目录
     * 例如: 如果 modinfo.json 位于 C:\CDDA\my_mod\modinfo.json，则模组文件将被视为位于 C:\CDDA\my_mod\my_mod_files\
     */
    path?: string;
};

/**模组分类 */
export type ModCategory = 
    | "content" 
    | "total_conversion" 
    | "items" 
    | "creatures" 
    | "misc_additions" 
    | "buildings" 
    | "vehicles" 
    | "rebalance" 
    | "magical" 
    | "item_exclude" 
    | "monster_exclude" 
    | "graphical"
    | "other";
