"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require("typings-global");
const handlebars = require("handlebars");
const smartfile = require("smartfile");
const path = require("path");
/**
 * registers a directory of partials to make them available within handlebars compilation
 */
exports.registerPartialDir = (dirPathArg) => {
    smartfile.fs.listFileTree(dirPathArg, '**/*.hbs').then(hbsFileArrayArg => {
        for (let hbsFilePath of hbsFileArrayArg) {
            let parsedPath = path.parse(hbsFilePath);
            let hbsFileString = smartfile.fs.toStringSync(path.join(dirPathArg, hbsFilePath));
            if (parsedPath.dir === '') {
                parsedPath.name = '/' + parsedPath.name;
            }
            let partialName = `partials${parsedPath.dir}${parsedPath.name}`;
            handlebars.registerPartial(partialName, hbsFileString);
        }
    });
};
/**
 * compiles a directory and outputs it
 */
exports.compileDirectory = (originDirPathArg, destinationDirPathArg, dataFileNameArg) => __awaiter(this, void 0, void 0, function* () {
    let hbsFilePathArray = smartfile.fs.listFilesSync(originDirPathArg, /.hbs/);
    let data = smartfile.fs.toObjectSync(path.join(originDirPathArg, dataFileNameArg));
    for (let hbsFilePath of hbsFilePathArray) {
        let parsedPath = path.parse(hbsFilePath);
        let hbsFileString = smartfile.fs.toStringSync(path.join(originDirPathArg, hbsFilePath));
        let template = handlebars.compile(hbsFileString);
        let output = template(data);
        console.log('hi ' + output + ' hi');
        smartfile.memory.toFsSync(output, path.join(destinationDirPathArg, parsedPath.name + '.html'));
    }
});
/**
 * get a template for a file on disk
 */
exports.getTemplateForFile = (filePathArg) => __awaiter(this, void 0, void 0, function* () {
    let filePathAbsolute = path.resolve(filePathArg);
    return handlebars.compile(smartfile.fs.toStringSync(filePathAbsolute));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwwQkFBdUI7QUFDdkIseUNBQXdDO0FBQ3hDLHVDQUFzQztBQUN0Qyw2QkFBNEI7QUFHNUI7O0dBRUc7QUFDUSxRQUFBLGtCQUFrQixHQUFHLENBQUMsVUFBa0I7SUFDL0MsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlO1FBQ2xFLEdBQUcsQ0FBQyxDQUFDLElBQUksV0FBVyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUN4QyxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFBO1lBQ2pGLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsVUFBVSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQTtZQUMzQyxDQUFDO1lBQ0QsSUFBSSxXQUFXLEdBQUcsV0FBVyxVQUFVLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUMvRCxVQUFVLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQTtRQUMxRCxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFFRDs7R0FFRztBQUNRLFFBQUEsZ0JBQWdCLEdBQUcsQ0FDMUIsZ0JBQXdCLEVBQ3hCLHFCQUE2QixFQUM3QixlQUF1QjtJQUV2QixJQUFJLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzNFLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUNsRixHQUFHLENBQUEsQ0FBQyxJQUFJLFdBQVcsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN4QyxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUE7UUFDdkYsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUNoRCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFBO1FBQ25DLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLFVBQVUsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNsRyxDQUFDO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFFRDs7R0FFRztBQUNRLFFBQUEsa0JBQWtCLEdBQUcsQ0FBTyxXQUFtQjtJQUN0RCxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDaEQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBO0FBQzFFLENBQUMsQ0FBQSxDQUFBIn0=