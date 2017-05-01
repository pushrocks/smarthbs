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
    if (tripleCurlyMatches.length > 0) {
        hbsString = hbsString.replace(tripleCurlyRegex, '[[[replaced]]]');
    }
    let doubleCurlyMatches = hbsString.match(doubleCurlyRegex);
    varNameArray = plugins.lodash.concat(varNameArray, tripleCurlyMatches, doubleCurlyMatches)
        .map((x) => {
        return x.match(nameInCurlsRegex)[0];
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRoYnMudmFyaWFibGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRoYnMudmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwRkFBMEY7QUFDMUYsOENBQThDOzs7Ozs7Ozs7O0FBRTlDLDhDQUE2QztBQUU3QywwQkFBMEI7QUFDMUIsSUFBSSxnQkFBZ0IsR0FBRyxzQkFBc0IsQ0FBQTtBQUM3QyxJQUFJLGdCQUFnQixHQUFHLG9CQUFvQixDQUFBO0FBQzNDLElBQUksZ0JBQWdCLEdBQUcsU0FBUyxDQUFBO0FBRWhDOzs7R0FHRztBQUNRLFFBQUEsbUJBQW1CLEdBQUcsQ0FBTyxZQUFvQjtJQUMxRCxJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUEsQ0FBQyw0REFBNEQ7SUFDekYsSUFBSSxZQUFZLEdBQWEsRUFBRSxDQUFBO0lBQy9CLElBQUksa0JBQWtCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQzFELEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLENBQUE7SUFDbkUsQ0FBQztJQUNELElBQUksa0JBQWtCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQzFELFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUM7U0FDdkYsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNMLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUUsQ0FBQyxDQUFFLENBQUE7SUFDdkMsQ0FBQyxDQUFDLENBQUE7SUFDSixZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDaEQsTUFBTSxDQUFDLFlBQVksQ0FBQTtBQUNyQixDQUFDLENBQUEsQ0FBQTtBQUVEOzs7OztHQUtHO0FBQ1EsUUFBQSxxQkFBcUIsR0FBRyxDQUFPLFlBQW9CLEVBQUUsWUFBaUI7SUFDL0Usd0RBQXdEO0lBQ3hELElBQUksa0JBQWtCLEdBQUcsTUFBTSwyQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUVoRSxxQkFBcUI7SUFDckIsSUFBSSxrQkFBa0IsR0FBRyxZQUFZLENBQUE7SUFDckMsSUFBSSxpQkFBaUIsR0FBYSxFQUFFLENBQUE7SUFFcEMsZ0JBQWdCO0lBQ2hCLEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLFlBQVksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZDLElBQUksZUFBZSxHQUFHLGtCQUFrQixDQUFBO1FBQ3hDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzdDLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBRSxDQUFDLENBQUUsQ0FBQTtZQUNoQyxJQUFJLFlBQVksR0FBRyxDQUFDLGVBQWUsQ0FBRSxRQUFRLENBQUUsS0FBSyxTQUFTLENBQUMsQ0FBQTtZQUM5RCxFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELEtBQUs7WUFDUCxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLGVBQWUsR0FBRyxlQUFlLENBQUUsUUFBUSxDQUFFLENBQUE7WUFDL0MsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDakMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUE7WUFDekIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDLGlCQUFpQixDQUFBO0FBQzFCLENBQUMsQ0FBQSxDQUFBIn0=