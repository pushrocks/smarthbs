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
 * Helper:
 * Allows you to analyze a context
 */
plugins.handlebars.registerHelper('__analyze', analyzeContext => {
    if (typeof analyzeContext === 'string') {
        if (plugins.handlebars.partials[analyzeContext]) {
            console.log(`The analyzed partial ${analyzeContext} looks like this`);
            console.log(plugins.handlebars.partials[analyzeContext]);
        }
        else {
            console.error(`The Partial ${analyzeContext} cannot be found`);
        }
        return 'analyzed';
    }
});
/**
 * Helper:
 * logs all registered partials to console
 */
plugins.handlebars.registerHelper('__allPartialsLog', analyzeContext => {
    console.log(plugins.handlebars.partials);
    return 'analyzed';
});
plugins.handlebars.registerHelper('__compile', (evaluationString, evaluationContext) => {
    let template = plugins.handlebars.compile(evaluationString);
    return template(evaluationContext);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRoYnMuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0aGJzLmhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNERBQThDO0FBRTlDOzs7R0FHRztBQUNILE9BQU8sQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsRUFBRTtJQUM5RCxJQUFJLE9BQU8sY0FBYyxLQUFLLFFBQVEsRUFBRTtRQUN0QyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLGNBQWMsa0JBQWtCLENBQUMsQ0FBQztZQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7U0FDMUQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxjQUFjLGtCQUFrQixDQUFDLENBQUM7U0FDaEU7UUFDRCxPQUFPLFVBQVUsQ0FBQztLQUNuQjtBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUg7OztHQUdHO0FBQ0gsT0FBTyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxDQUFDLEVBQUU7SUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUMsQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsRUFBRTtJQUNyRixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVELE9BQU8sUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQUMifQ==