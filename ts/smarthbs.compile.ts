import * as plugins from './smarthbs.plugins'

/**
 * compiles a directory and outputs it
 */
export let compileDirectory = async (
  originDirPathArg: string,
  destinationDirPathArg: string,
  dataFileNameArg: string
) => {
  let hbsFilePathArray = plugins.smartfile.fs.listFilesSync(originDirPathArg, /.hbs/)
  let data = plugins.smartfile.fs.toObjectSync(plugins.path.join(originDirPathArg, dataFileNameArg))
  for (let hbsFilePath of hbsFilePathArray) {
    let parsedPath = plugins.path.parse(hbsFilePath)
    let hbsFileString = plugins.smartfile.fs.toStringSync(plugins.path.join(originDirPathArg, hbsFilePath))
    let template = plugins.handlebars.compile(hbsFileString)
    let output = template(data)
    console.log('hi ' + output + ' hi')
    plugins.smartfile.memory.toFsSync(output, plugins.path.join(destinationDirPathArg, parsedPath.name + '.html'))
  }
}
