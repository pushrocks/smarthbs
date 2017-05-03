"use strict";
// This file contains code that makes it easy to search handlebar templates for variables.
// Why? To get a clue if you are missing some.
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
// the curly regex objects
let tripleCurlyRegex = /{{{\s*[\w\.]+\s*}}}/g;
let doubleCurlyRegex = /{{\s*[\w\.]+\s*}}/g;
let nameInCurlsRegex = /[\w\.]+/;
/**
 * finds all variables in a handlebars template
 * @param hbsStringArg
 */
exports.findVarsInHbsString = (hbsStringArg) => __awaiter(this, void 0, void 0, function* () {
    let hbsString = hbsStringArg; // make sure we have a new string object that we may destroy
    let varNameArray = [];
    let tripleCurlyMatches = hbsString.match(tripleCurlyRegex);
    if (tripleCurlyMatches) {
        hbsString = hbsString.replace(tripleCurlyRegex, '[[[replaced]]]');
        varNameArray = plugins.lodash.concat(varNameArray, tripleCurlyMatches);
    }
    let doubleCurlyMatches = hbsString.match(doubleCurlyRegex);
    if (doubleCurlyMatches) {
        varNameArray = plugins.lodash.concat(varNameArray, doubleCurlyMatches);
    }
    // make sure we are clean from curly brackets
    varNameArray = varNameArray.map((x) => {
        return x.match(nameInCurlsRegex)[0];
    });
    // make sure are uniq
    varNameArray = plugins.lodash.uniq(varNameArray);
    return varNameArray;
});
/**
 * checks if supplied variables satisfy an handlebars template
 * @param hbsStringArg
 * @param varObjectArg
 * @return string array with missing variable names
 */
exports.checkVarsSatisfaction = (hbsStringArg, varObjectArg) => __awaiter(this, void 0, void 0, function* () {
    // required vars as combined deep string with . notation
    let requiredVarStrings = yield exports.findVarsInHbsString(hbsStringArg);
    // comparison objects
    let suppliedVarsObject = varObjectArg;
    let missingVarsObject = [];
    // building the 
    for (let stringVar of requiredVarStrings) {
        let splittedVars = stringVar.split('.');
        let requiredPointer = suppliedVarsObject;
        for (let i = 0; i < splittedVars.length; i++) {
            let splitVar = splittedVars[i];
            let varAvailable = (requiredPointer[splitVar] !== undefined);
            if (varAvailable && splittedVars.length === (i + 1)) {
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRoYnMudmFyaWFibGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRoYnMudmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwRkFBMEY7QUFDMUYsOENBQThDOzs7Ozs7Ozs7O0FBRTlDLDhDQUE2QztBQUU3QywwQkFBMEI7QUFDMUIsSUFBSSxnQkFBZ0IsR0FBRyxzQkFBc0IsQ0FBQTtBQUM3QyxJQUFJLGdCQUFnQixHQUFHLG9CQUFvQixDQUFBO0FBQzNDLElBQUksZ0JBQWdCLEdBQUcsU0FBUyxDQUFBO0FBRWhDOzs7R0FHRztBQUNRLFFBQUEsbUJBQW1CLEdBQUcsQ0FBTyxZQUFvQjtJQUMxRCxJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUEsQ0FBQyw0REFBNEQ7SUFDekYsSUFBSSxZQUFZLEdBQWEsRUFBRSxDQUFBO0lBQy9CLElBQUksa0JBQWtCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQzFELEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUN2QixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ2pFLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLENBQUMsQ0FBQTtJQUN4RSxDQUFDO0lBQ0QsSUFBSSxrQkFBa0IsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDMUQsRUFBRSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLENBQUMsQ0FBQTtJQUN4RSxDQUFDO0lBRUQsNkNBQTZDO0lBQzdDLFlBQVksR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFFLENBQUMsQ0FBRSxDQUFBO0lBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBRUYscUJBQXFCO0lBQ3JCLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNoRCxNQUFNLENBQUMsWUFBWSxDQUFBO0FBQ3JCLENBQUMsQ0FBQSxDQUFBO0FBRUQ7Ozs7O0dBS0c7QUFDUSxRQUFBLHFCQUFxQixHQUFHLENBQU8sWUFBb0IsRUFBRSxZQUFpQjtJQUMvRSx3REFBd0Q7SUFDeEQsSUFBSSxrQkFBa0IsR0FBRyxNQUFNLDJCQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFBO0lBRWhFLHFCQUFxQjtJQUNyQixJQUFJLGtCQUFrQixHQUFHLFlBQVksQ0FBQTtJQUNyQyxJQUFJLGlCQUFpQixHQUFhLEVBQUUsQ0FBQTtJQUVwQyxnQkFBZ0I7SUFDaEIsR0FBRyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDdkMsSUFBSSxlQUFlLEdBQUcsa0JBQWtCLENBQUE7UUFDeEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDN0MsSUFBSSxRQUFRLEdBQUcsWUFBWSxDQUFFLENBQUMsQ0FBRSxDQUFBO1lBQ2hDLElBQUksWUFBWSxHQUFHLENBQUMsZUFBZSxDQUFFLFFBQVEsQ0FBRSxLQUFLLFNBQVMsQ0FBQyxDQUFBO1lBQzlELEVBQUUsQ0FBQyxDQUFDLFlBQVksSUFBSSxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEQsS0FBSztZQUNQLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsZUFBZSxHQUFHLGVBQWUsQ0FBRSxRQUFRLENBQUUsQ0FBQTtZQUMvQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04saUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUNqQyxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQTtZQUN6QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLENBQUMsaUJBQWlCLENBQUE7QUFDMUIsQ0FBQyxDQUFBLENBQUEifQ==