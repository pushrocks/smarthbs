"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
const handlebars = require("handlebars");
const smartfile = require("smartfile");
const smartq = require("smartq");
const path = require("path");
/**
 * registers a directory of partials to make them available within handlebars compilation
 */
exports.registerPartialDir = (dirPathArg) => {
    let done = smartq.defer();
    smartfile.fs.listFileTree(dirPathArg, '**/*.hbs').then(hbsFileArrayArg => {
        for (let hbsFilePath of hbsFileArrayArg) {
            let parsedPath = path.parse(hbsFilePath);
            let hbsFileString = smartfile.fs.toStringSync(path.join(dirPathArg, hbsFilePath));
            if (parsedPath.dir === '') {
                parsedPath.name = '/' + parsedPath.name;
            }
            let partialName = `partials${parsedPath.dir}${parsedPath.name}`;
            handlebars.registerPartial(partialName, hbsFileString);
            done.resolve();
        }
    });
    return done.promise;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMEJBQXVCO0FBQ3ZCLHlDQUF3QztBQUN4Qyx1Q0FBc0M7QUFDdEMsaUNBQWdDO0FBQ2hDLDZCQUE0QjtBQUc1Qjs7R0FFRztBQUNRLFFBQUEsa0JBQWtCLEdBQUcsQ0FBQyxVQUFrQjtJQUNqRCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDekIsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlO1FBQ3BFLEdBQUcsQ0FBQyxDQUFDLElBQUksV0FBVyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUN4QyxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFBO1lBQ2pGLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsVUFBVSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQTtZQUN6QyxDQUFDO1lBQ0QsSUFBSSxXQUFXLEdBQUcsV0FBVyxVQUFVLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUMvRCxVQUFVLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQTtZQUN0RCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDaEIsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDckIsQ0FBQyxDQUFBO0FBRUQ7O0dBRUc7QUFDUSxRQUFBLGdCQUFnQixHQUFHLENBQzVCLGdCQUF3QixFQUN4QixxQkFBNkIsRUFDN0IsZUFBdUI7SUFFdkIsSUFBSSxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUMzRSxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUE7SUFDbEYsR0FBRyxDQUFDLENBQUMsSUFBSSxXQUFXLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDeEMsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFBO1FBQ3ZGLElBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDaEQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQTtRQUNuQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxVQUFVLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDaEcsQ0FBQztBQUNILENBQUMsQ0FBQSxDQUFBO0FBRUQ7O0dBRUc7QUFDUSxRQUFBLGtCQUFrQixHQUFHLENBQU8sV0FBbUI7SUFDeEQsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ2hELE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQTtBQUN4RSxDQUFDLENBQUEsQ0FBQSJ9