"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smarthbs.plugins");
/**
 * registers a directory of partials to make them available within handlebars compilation
 */
exports.registerPartialDir = (dirPathArg) => {
    let done = plugins.smartq.defer();
    plugins.smartfile.fs.listFileTree(dirPathArg, '**/*.hbs').then(hbsFileArrayArg => {
        for (let hbsFilePath of hbsFileArrayArg) {
            let parsedPath = plugins.path.parse(hbsFilePath);
            let hbsFileString = plugins.smartfile.fs.toStringSync(plugins.path.join(dirPathArg, hbsFilePath));
            if (parsedPath.dir === '') {
                parsedPath.name = '/' + parsedPath.name;
            }
            let partialName = `partials${parsedPath.dir}${parsedPath.name}`;
            plugins.handlebars.registerPartial(partialName, hbsFileString);
            done.resolve();
        }
    });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRoYnMucGFydGlhbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGhicy5wYXJ0aWFscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUU3Qzs7R0FFRztBQUNRLFFBQUEsa0JBQWtCLEdBQUcsQ0FBQyxVQUFrQjtJQUNqRCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2pDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWU7UUFDNUUsR0FBRyxDQUFDLENBQUMsSUFBSSxXQUFXLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUNoRCxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUE7WUFDakcsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixVQUFVLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFBO1lBQ3pDLENBQUM7WUFDRCxJQUFJLFdBQVcsR0FBRyxXQUFXLFVBQVUsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFBO1lBQy9ELE9BQU8sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQTtZQUM5RCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDaEIsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDckIsQ0FBQyxDQUFBIn0=