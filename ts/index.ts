import 'typings-global'
import * as handlebars from 'handlebars'
import * as smartfile from 'smartfile'
import * as path from 'path'
export type TTemplateStringType = 'filePath' | 'code'

export let registerPartialDir = (dirPathArg: string) => {
    smartfile.fs.listFileTree(dirPathArg, '**/*.hbs').then(hbsFileArrayArg => {
        for (let hbsFilePath of hbsFileArrayArg) {
            let parsedPath = path.parse(hbsFilePath)
            let hbsFileString = smartfile.fs.toStringSync(path.join(dirPathArg, hbsFilePath))
            if (parsedPath.dir === '') {
                parsedPath.name = '/' + parsedPath.name
            }
            let partialName = `partials${parsedPath.dir}${parsedPath.name}`
            handlebars.registerPartial(partialName, hbsFileString)
        }
    })
}

export let compileDirectory = (
    originDirPathArg: string,
    destinationDirPathArg: string,
    dataFileNameArg: string
) => {
    let hbsFilePathArray = smartfile.fs.listFilesSync(originDirPathArg, /.hbs/)
    let data = smartfile.fs.toObjectSync(path.join(originDirPathArg, dataFileNameArg))
    for(let hbsFilePath of hbsFilePathArray) {
        let parsedPath = path.parse(hbsFilePath)
        let hbsFileString = smartfile.fs.toStringSync(path.join(originDirPathArg, hbsFilePath))
        let template = handlebars.compile(hbsFileString)
        let output = template(data)
        console.log('hi ' + output + ' hi')
        smartfile.memory.toFsSync(output, path.join(destinationDirPathArg, parsedPath.name + '.html'))
    }
}