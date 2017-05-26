import * as plugins from './smarthbs.plugins'

/**
 * get a template for a file on disk
 */
export let getTemplateForFile = async (filePathArg: string) => {
  let filePathAbsolute = plugins.path.resolve(filePathArg)
  return plugins.handlebars.compile(plugins.smartfile.fs.toStringSync(filePathAbsolute))
}

/**
 * get a template for string
 */
export let getTemplateForString = async (fileStringArg: string) => {
  return plugins.handlebars.compile(fileStringArg)
}
