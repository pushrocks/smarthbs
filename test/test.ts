import 'typings-test'
import * as smarthbs from '../dist/index'
import * as path from 'path'

let testHbsDir = path.join(__dirname, 'hbs_testfiles')
let testPartialDir = path.join(testHbsDir, 'partials')
let testResultDir = path .join(__dirname, 'testresult')
describe('smarthbs', function() {
    
    it('should create partials', function(){
        smarthbs.registerPartialDir(testPartialDir)
    })

    it('should compile a directory', function() {
        smarthbs.compileDirectory(testHbsDir, testResultDir, 'data.json')
    })

})