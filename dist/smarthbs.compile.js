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
 * compiles a directory and outputs it
 */
exports.compileDirectory = async (originDirPathArg, destinationDirPathArg, dataFileNameArg) => {
    let hbsFilePathArray = plugins.smartfile.fs.listFilesSync(originDirPathArg, /.hbs/);
    let data = plugins.smartfile.fs.toObjectSync(plugins.path.join(originDirPathArg, dataFileNameArg));
    for (let hbsFilePath of hbsFilePathArray) {
        let parsedPath = plugins.path.parse(hbsFilePath);
        let hbsFileString = plugins.smartfile.fs.toStringSync(plugins.path.join(originDirPathArg, hbsFilePath));
        let template = plugins.handlebars.compile(hbsFileString);
        let output = template(data);
        console.log('hi ' + output + ' hi');
        await plugins.smartfile.fs.ensureDir(destinationDirPathArg);
        plugins.smartfile.memory.toFsSync(output, plugins.path.join(destinationDirPathArg, parsedPath.name + '.html'));
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRoYnMuY29tcGlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0aGJzLmNvbXBpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNERBQThDO0FBRTlDOztHQUVHO0FBQ1EsUUFBQSxnQkFBZ0IsR0FBRyxLQUFLLEVBQ2pDLGdCQUF3QixFQUN4QixxQkFBNkIsRUFDN0IsZUFBdUIsRUFDdkIsRUFBRTtJQUNGLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BGLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FDMUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLENBQ3JELENBQUM7SUFDRixLQUFLLElBQUksV0FBVyxJQUFJLGdCQUFnQixFQUFFO1FBQ3hDLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FDbkQsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLENBQ2pELENBQUM7UUFDRixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDNUQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUMvQixNQUFNLEVBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsVUFBVSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsQ0FDcEUsQ0FBQztLQUNIO0FBQ0gsQ0FBQyxDQUFDIn0=