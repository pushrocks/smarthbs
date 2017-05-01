// This file contains code that makes it easy to search handlebar templates for variables.
// Why? To get a clue if you are missing some.

import * as plugins from './smarthbs.plugins'

// the curly regex objects
let tripleCurlyRegex = /{{{\s*[\w\.]+\s*}}}/g
let doubleCurlyRegex = /{{\s*[\w\.]+\s*}}/g
let nameInCurlsRegex = /[\w\.]+/

/**
 * finds all variables in a handlebars template
 * @param hbsStringArg
 */
export let findVarsInHbsString = async (hbsStringArg: string) => {
  let hbsString = hbsStringArg // make sure we have a new string object that we may destroy
  let varNameArray: string[] = []
  let tripleCurlyMatches = hbsString.match(tripleCurlyRegex)
  hbsString = hbsString.replace(tripleCurlyRegex, '[[[replaced]]]')
  let doubleCurlyMatches = hbsString.match(doubleCurlyRegex)
  hbsString = hbsString.replace(doubleCurlyRegex, '[[[replaced]]]')
  varNameArray = plugins.lodash.concat(varNameArray, tripleCurlyMatches, doubleCurlyMatches)
    .map((x) => {
      return x.match(nameInCurlsRegex)[ 0 ]
    })
  varNameArray = plugins.lodash.uniq(varNameArray)
  return varNameArray
}

/**
 * checks if supplied variables satisfy an handlebars template
 * @param hbsStringArg
 * @param varObjectArg
 * @return string array with missing variable names
 */
export let checkVarsSatisfaction = async (hbsStringArg: string, varObjectArg: any) => {
  // required vars as combined deep string with . notation
  let requiredVarStrings = await findVarsInHbsString(hbsStringArg)

  // comparison objects
  let suppliedVarsObject = varObjectArg
  let missingVarsObject: string[] = []

  // building the 
  for (let stringVar of requiredVarStrings) {
    let splittedVars = stringVar.split('.')
    let requiredPointer = suppliedVarsObject
    for (let i = 0; i < splittedVars.length; i++) {
      let splitVar = splittedVars[i]
      let varAvailable = (requiredPointer[splitVar] !== undefined)
      if (varAvailable && splittedVars.length === (i + 1)) {
        // ok
      } else if (varAvailable) {
        requiredPointer = requiredPointer[splitVar]
      } else {
        missingVarsObject.push(stringVar)
        i = splittedVars.length
      }
    }
  }
  return missingVarsObject
}
