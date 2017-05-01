import { expect, tap } from 'tapbundle'
import * as smarthbs from '../dist/index'
import * as path from 'path'

let testHbsDir = path.join(__dirname, 'hbs_testfiles')
let testPartialDir = path.join(testHbsDir, 'partials')
let testResultDir = path.join(__dirname, 'testresult')
tap.test('smarthbs -> should create partials', async () => {
  await smarthbs.registerPartialDir(testPartialDir)
})

tap.test('smarthbs -> should compile a directory', async () => {
  smarthbs.compileDirectory(testHbsDir, testResultDir, 'data.json')
})

tap.test('', async () => {
  let templateString = '{{{firstVar}}} {{secondVar}}'
  let templateVars = await smarthbs.findVarsInHbsString(templateString)
  expect(templateVars).to.include('firstVar')
  expect(templateVars).to.include('secondVar')
})

tap.test('', async () => {
  let templateString = '{{{firstVar}}} {{secondVar}} {{thirdVar}} {{fourthVar}} {{fourthVar.someKey}} {{fourthVar.otherKey.nextKey}}'
  let missingVars = await smarthbs.checkVarsSatisfaction(templateString, {
    firstVar: 'hi',
    secondVar: 'hello',
    fourthVar: {
      otherKey: {
        nextKey: 'wow'
      }
    }
  })
  expect(missingVars).to.contain('thirdVar', 'fourthVar.someKey')
  expect(missingVars).to.not.contain('secondVar', 'fourthVar.otherKey.nextKey')
})

tap.start()
