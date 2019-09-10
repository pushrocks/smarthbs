"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = __importStar(require("./smarthbs.plugins"));
/**
 * registers a directory of partials to make them available within handlebars compilation
 */
exports.registerPartialDir = (dirPathArg) => {
    let done = plugins.smartpromise.defer();
    plugins.smartfile.fs.listFileTree(dirPathArg, '**/*.hbs').then(hbsFileArrayArg => {
        for (let hbsFilePath of hbsFileArrayArg) {
            let parsedPath = plugins.path.parse(hbsFilePath);
            let hbsFileString = plugins.smartfile.fs.toStringSync(plugins.path.join(dirPathArg, hbsFilePath));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRoYnMucGFydGlhbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGhicy5wYXJ0aWFscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw0REFBOEM7QUFFOUM7O0dBRUc7QUFDUSxRQUFBLGtCQUFrQixHQUFHLENBQUMsVUFBa0IsRUFBZ0IsRUFBRTtJQUNuRSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1FBQy9FLEtBQUssSUFBSSxXQUFXLElBQUksZUFBZSxFQUFFO1lBQ3ZDLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2pELElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FDbkQsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUMzQyxDQUFDO1lBQ0YsSUFBSSxVQUFVLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtnQkFDMUIsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7YUFDckI7WUFDRCxJQUFJLFVBQVUsQ0FBQyxHQUFHLEtBQUssRUFBRSxFQUFFO2dCQUN6QixVQUFVLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2FBQ3ZDO1lBQ0QsSUFBSSxXQUFXLEdBQUcsWUFBWSxVQUFVLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqRSxPQUFPLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDdEIsQ0FBQyxDQUFDIn0=