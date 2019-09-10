"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = __importStar(require("./smarthbs.plugins"));
/**
 * get a template for a file on disk
 */
exports.getTemplateForFile = async (filePathArg) => {
    let filePathAbsolute = plugins.path.resolve(filePathArg);
    return plugins.handlebars.compile(plugins.smartfile.fs.toStringSync(filePathAbsolute));
};
/**
 * get a template for string
 */
exports.getTemplateForString = async (fileStringArg) => {
    return plugins.handlebars.compile(fileStringArg);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRoYnMudGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGhicy50ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw0REFBOEM7QUFFOUM7O0dBRUc7QUFDUSxRQUFBLGtCQUFrQixHQUFHLEtBQUssRUFBRSxXQUFtQixFQUFFLEVBQUU7SUFDNUQsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6RCxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7QUFDekYsQ0FBQyxDQUFDO0FBRUY7O0dBRUc7QUFDUSxRQUFBLG9CQUFvQixHQUFHLEtBQUssRUFBRSxhQUFxQixFQUFFLEVBQUU7SUFDaEUsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUMifQ==