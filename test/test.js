"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-test");
const smarthbs = require("../dist/index");
const path = require("path");
let testHbsDir = path.join(__dirname, 'hbs_testfiles');
let testPartialDir = path.join(testHbsDir, 'partials');
let testResultDir = path.join(__dirname, 'testresult');
describe('smarthbs', function () {
    it('should create partials', function () {
        smarthbs.registerPartialDir(testPartialDir);
    });
    it('should compile a directory', function () {
        smarthbs.compileDirectory(testHbsDir, testResultDir, 'data.json');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3QkFBcUI7QUFDckIsMENBQXlDO0FBQ3pDLDZCQUE0QjtBQUU1QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQTtBQUN0RCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQTtBQUN0RCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQTtBQUN2RCxRQUFRLENBQUMsVUFBVSxFQUFFO0lBRWpCLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTtRQUN6QixRQUFRLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDL0MsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsNEJBQTRCLEVBQUU7UUFDN0IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFDckUsQ0FBQyxDQUFDLENBQUE7QUFFTixDQUFDLENBQUMsQ0FBQSJ9