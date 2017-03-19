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
const plugins = require("./smarthbs.plugins");
/**
 * compiles a directory and outputs it
 */
exports.compileDirectory = (originDirPathArg, destinationDirPathArg, dataFileNameArg) => __awaiter(this, void 0, void 0, function* () {
    let hbsFilePathArray = plugins.smartfile.fs.listFilesSync(originDirPathArg, /.hbs/);
    let data = plugins.smartfile.fs.toObjectSync(plugins.path.join(originDirPathArg, dataFileNameArg));
    for (let hbsFilePath of hbsFilePathArray) {
        let parsedPath = plugins.path.parse(hbsFilePath);
        let hbsFileString = plugins.smartfile.fs.toStringSync(plugins.path.join(originDirPathArg, hbsFilePath));
        let template = plugins.handlebars.compile(hbsFileString);
        let output = template(data);
        console.log('hi ' + output + ' hi');
        plugins.smartfile.memory.toFsSync(output, plugins.path.join(destinationDirPathArg, parsedPath.name + '.html'));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRoYnMuY29tcGlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0aGJzLmNvbXBpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUU3Qzs7R0FFRztBQUNRLFFBQUEsZ0JBQWdCLEdBQUcsQ0FDNUIsZ0JBQXdCLEVBQ3hCLHFCQUE2QixFQUM3QixlQUF1QjtJQUV2QixJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNuRixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUNsRyxHQUFHLENBQUMsQ0FBQyxJQUFJLFdBQVcsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDaEQsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUE7UUFDdkcsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDeEQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQTtRQUNuQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLFVBQVUsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNoSCxDQUFDO0FBQ0gsQ0FBQyxDQUFBLENBQUEifQ==