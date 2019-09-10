"use strict";
// This file contains code that makes it easy to search handlebar templates for variables.
// Why? To get a clue if you are missing some.
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = __importStar(require("./smarthbs.plugins"));
// the curly regex objects
let tripleCurlyRegex = /{{{\s*[\w\.]+\s*}}}/g;
let doubleCurlyRegex = /{{\s*[\w\.]+\s*}}/g;
let nameInCurlsRegex = /[\w\.]+/;
/**
 * finds all variables in a handlebars template
 * @param hbsStringArg
 */
exports.findVarsInHbsString = async (hbsStringArg) => {
    let hbsString = hbsStringArg; // make sure we have a new string object that we may destroy
    let varNameArray = [];
    let tripleCurlyMatches = hbsString.match(tripleCurlyRegex);
    if (tripleCurlyMatches) {
        hbsString = hbsString.replace(tripleCurlyRegex, '[[[replaced]]]');
        varNameArray = varNameArray.concat(tripleCurlyMatches);
    }
    let doubleCurlyMatches = hbsString.match(doubleCurlyRegex);
    if (doubleCurlyMatches) {
        varNameArray = varNameArray.concat(doubleCurlyMatches);
    }
    // make sure we are clean from curly brackets
    varNameArray = varNameArray.map(x => {
        return x.match(nameInCurlsRegex)[0];
    });
    // make sure are uniq
    varNameArray = plugins.lodashUniq(varNameArray);
    return varNameArray;
};
/**
 * checks if supplied variables satisfy an handlebars template
 * @param hbsStringArg
 * @param varObjectArg
 * @return string array with missing variable names
 */
exports.checkVarsSatisfaction = async (hbsStringArg, varObjectArg) => {
    // required vars as combined deep string with . notation
    let requiredVarStrings = await exports.findVarsInHbsString(hbsStringArg);
    // comparison objects
    let suppliedVarsObject = varObjectArg;
    let missingVarsObject = [];
    // building the
    for (let stringVar of requiredVarStrings) {
        let splittedVars = stringVar.split('.');
        let requiredPointer = suppliedVarsObject;
        for (let i = 0; i < splittedVars.length; i++) {
            let splitVar = splittedVars[i];
            let varAvailable = requiredPointer[splitVar] !== undefined;
            if (varAvailable && splittedVars.length === i + 1) {
                // ok
            }
            else if (varAvailable) {
                requiredPointer = requiredPointer[splitVar];
            }
            else {
                missingVarsObject.push(stringVar);
                i = splittedVars.length;
            }
        }
    }
    return missingVarsObject;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRoYnMudmFyaWFibGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRoYnMudmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwRkFBMEY7QUFDMUYsOENBQThDOzs7Ozs7Ozs7QUFFOUMsNERBQThDO0FBRTlDLDBCQUEwQjtBQUMxQixJQUFJLGdCQUFnQixHQUFHLHNCQUFzQixDQUFDO0FBQzlDLElBQUksZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUM7QUFDNUMsSUFBSSxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7QUFFakM7OztHQUdHO0FBQ1EsUUFBQSxtQkFBbUIsR0FBRyxLQUFLLEVBQUUsWUFBb0IsRUFBRSxFQUFFO0lBQzlELElBQUksU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLDREQUE0RDtJQUMxRixJQUFJLFlBQVksR0FBYSxFQUFFLENBQUM7SUFDaEMsSUFBSSxrQkFBa0IsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDM0QsSUFBSSxrQkFBa0IsRUFBRTtRQUN0QixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xFLFlBQVksR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDeEQ7SUFDRCxJQUFJLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzRCxJQUFJLGtCQUFrQixFQUFFO1FBQ3RCLFlBQVksR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDeEQ7SUFFRCw2Q0FBNkM7SUFDN0MsWUFBWSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDbEMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxxQkFBcUI7SUFDckIsWUFBWSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEQsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBRUY7Ozs7O0dBS0c7QUFDUSxRQUFBLHFCQUFxQixHQUFHLEtBQUssRUFBRSxZQUFvQixFQUFFLFlBQWlCLEVBQUUsRUFBRTtJQUNuRix3REFBd0Q7SUFDeEQsSUFBSSxrQkFBa0IsR0FBRyxNQUFNLDJCQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRWpFLHFCQUFxQjtJQUNyQixJQUFJLGtCQUFrQixHQUFHLFlBQVksQ0FBQztJQUN0QyxJQUFJLGlCQUFpQixHQUFhLEVBQUUsQ0FBQztJQUVyQyxlQUFlO0lBQ2YsS0FBSyxJQUFJLFNBQVMsSUFBSSxrQkFBa0IsRUFBRTtRQUN4QyxJQUFJLFlBQVksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksZUFBZSxHQUFHLGtCQUFrQixDQUFDO1FBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLFlBQVksR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssU0FBUyxDQUFDO1lBQzNELElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDakQsS0FBSzthQUNOO2lCQUFNLElBQUksWUFBWSxFQUFFO2dCQUN2QixlQUFlLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzdDO2lCQUFNO2dCQUNMLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7YUFDekI7U0FDRjtLQUNGO0lBQ0QsT0FBTyxpQkFBaUIsQ0FBQztBQUMzQixDQUFDLENBQUMifQ==