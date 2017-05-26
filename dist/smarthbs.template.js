"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smarthbs.plugins");
/**
 * get a template for a file on disk
 */
exports.getTemplateForFile = (filePathArg) => __awaiter(this, void 0, void 0, function* () {
    let filePathAbsolute = plugins.path.resolve(filePathArg);
    return plugins.handlebars.compile(plugins.smartfile.fs.toStringSync(filePathAbsolute));
});
/**
 * get a template for string
 */
exports.getTemplateForString = (fileStringArg) => __awaiter(this, void 0, void 0, function* () {
    return plugins.handlebars.compile(fileStringArg);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRoYnMudGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGhicy50ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsOENBQTZDO0FBRTdDOztHQUVHO0FBQ1EsUUFBQSxrQkFBa0IsR0FBRyxDQUFPLFdBQW1CO0lBQ3hELElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDeEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUE7QUFDeEYsQ0FBQyxDQUFBLENBQUE7QUFFRDs7R0FFRztBQUNRLFFBQUEsb0JBQW9CLEdBQUcsQ0FBTyxhQUFxQjtJQUM1RCxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDbEQsQ0FBQyxDQUFBLENBQUEifQ==