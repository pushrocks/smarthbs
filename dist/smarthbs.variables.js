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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRoYnMudmFyaWFibGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRoYnMudmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwRkFBMEY7QUFDMUYsOENBQThDOzs7Ozs7Ozs7O0FBRTlDLDhDQUE2QztBQUU3QywwQkFBMEI7QUFDMUIsSUFBSSxnQkFBZ0IsR0FBRyxzQkFBc0IsQ0FBQTtBQUM3QyxJQUFJLGdCQUFnQixHQUFHLG9CQUFvQixDQUFBO0FBQzNDLElBQUksZ0JBQWdCLEdBQUcsU0FBUyxDQUFBO0FBRWhDOzs7R0FHRztBQUNRLFFBQUEsbUJBQW1CLEdBQUcsQ0FBTyxZQUFvQjtJQUMxRCxJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUEsQ0FBQyw0REFBNEQ7SUFDekYsSUFBSSxZQUFZLEdBQWEsRUFBRSxDQUFBO0lBQy9CLElBQUksa0JBQWtCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQzFELEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUN2QixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFDRCxJQUFJLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUMxRCxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDO1NBQ3ZGLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDTCxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFFLENBQUMsQ0FBRSxDQUFBO0lBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBQ0osWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ2hELE1BQU0sQ0FBQyxZQUFZLENBQUE7QUFDckIsQ0FBQyxDQUFBLENBQUE7QUFFRDs7Ozs7R0FLRztBQUNRLFFBQUEscUJBQXFCLEdBQUcsQ0FBTyxZQUFvQixFQUFFLFlBQWlCO0lBQy9FLHdEQUF3RDtJQUN4RCxJQUFJLGtCQUFrQixHQUFHLE1BQU0sMkJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUE7SUFFaEUscUJBQXFCO0lBQ3JCLElBQUksa0JBQWtCLEdBQUcsWUFBWSxDQUFBO0lBQ3JDLElBQUksaUJBQWlCLEdBQWEsRUFBRSxDQUFBO0lBRXBDLGdCQUFnQjtJQUNoQixHQUFHLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QyxJQUFJLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQTtRQUN4QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QyxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUUsQ0FBQyxDQUFFLENBQUE7WUFDaEMsSUFBSSxZQUFZLEdBQUcsQ0FBQyxlQUFlLENBQUUsUUFBUSxDQUFFLEtBQUssU0FBUyxDQUFDLENBQUE7WUFDOUQsRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxLQUFLO1lBQ1AsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixlQUFlLEdBQUcsZUFBZSxDQUFFLFFBQVEsQ0FBRSxDQUFBO1lBQy9DLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7Z0JBQ2pDLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFBO1lBQ3pCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQTtBQUMxQixDQUFDLENBQUEsQ0FBQSJ9