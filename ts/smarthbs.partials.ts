import * as plugins from './smarthbs.plugins';

/**
 * registers a directory of partials to make them available within handlebars compilation
 */
export let registerPartialDir = (dirPathArg: string): Promise<any> => {
  let done = plugins.smartpromise.defer();
  plugins.smartfile.fs.listFileTree(dirPathArg, '**/*.hbs').then(hbsFileArrayArg => {
    for (let hbsFilePath of hbsFileArrayArg) {
      let parsedPath = plugins.path.parse(hbsFilePath);
      let hbsFileString = plugins.smartfile.fs.toStringSync(
        plugins.path.join(dirPathArg, hbsFilePath)
      );
      if (parsedPath.dir === '/') {
        parsedPath.dir = '';
      }
      if (parsedPath.dir !== '') {
        parsedPath.dir = parsedPath.dir + '/';
      }
      let partialName = `partials/${parsedPath.dir}${parsedPath.name}`;
      plugins.handlebars.registerPartial(partialName, hbsFileString);
      done.resolve();
    }
  });
  return done.promise;
};
