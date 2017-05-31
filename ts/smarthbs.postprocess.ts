import * as plugins from './smarthbs.plugins'


let safeSyntaxBeginRegex = /{-{/g
let safeSyntaxEndRegex = /}-}/g

/**
 * allows you to keep handlebars in place across multiple iterations
 * helpful when handlebars syntax is used by more than one tool in a build chain
 */
export let postprocess = async (stringArg: string): Promise<string> => {
  let processedString = stringArg
  processedString = processedString.replace(safeSyntaxBeginRegex, '{{')
  processedString = processedString.replace(safeSyntaxEndRegex, '}}')
  return processedString
}
