"use strict";
require("typings-global");
const handlebars = require("handlebars");
const smartfile = require("smartfile");
const path = require("path");
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
exports.compileDirectory = (originDirPathArg, destinationDirPathArg, dataFileNameArg) => {
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQXVCO0FBQ3ZCLHlDQUF3QztBQUN4Qyx1Q0FBc0M7QUFDdEMsNkJBQTRCO0FBR2pCLFFBQUEsa0JBQWtCLEdBQUcsQ0FBQyxVQUFrQjtJQUMvQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWU7UUFDbEUsR0FBRyxDQUFDLENBQUMsSUFBSSxXQUFXLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ3hDLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUE7WUFDakYsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixVQUFVLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFBO1lBQzNDLENBQUM7WUFDRCxJQUFJLFdBQVcsR0FBRyxXQUFXLFVBQVUsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFBO1lBQy9ELFVBQVUsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFBO1FBQzFELENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQTtBQUVVLFFBQUEsZ0JBQWdCLEdBQUcsQ0FDMUIsZ0JBQXdCLEVBQ3hCLHFCQUE2QixFQUM3QixlQUF1QjtJQUV2QixJQUFJLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzNFLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUNsRixHQUFHLENBQUEsQ0FBQyxJQUFJLFdBQVcsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN4QyxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUE7UUFDdkYsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUNoRCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFBO1FBQ25DLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLFVBQVUsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNsRyxDQUFDO0FBQ0wsQ0FBQyxDQUFBIn0=