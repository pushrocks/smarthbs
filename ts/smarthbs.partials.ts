import * as plugins from './smarthbs.plugins'

/**
 * registers a directory of partials to make them available within handlebars compilation
 */
export let registerPartialDir = (dirPathArg: string) => {
  let done = plugins.smartq.defer()
  plugins.smartfile.fs.listFileTree(dirPathArg, '**/*.hbs').then(hbsFileArrayArg => {
    for (let hbsFilePath of hbsFileArrayArg) {
      let parsedPath = plugins.path.parse(hbsFilePath)
      let hbsFileString = plugins.smartfile.fs.toStringSync(plugins.path.join(dirPathArg, hbsFilePath))
      if (parsedPath.dir === '') {
        parsedPath.name = '/' + parsedPath.name
      }
      let partialName = `partials${parsedPath.dir}${parsedPath.name}`
      plugins.handlebars.registerPartial(partialName, hbsFileString)
      done.resolve()
    }
  })
  return done.promise
}
