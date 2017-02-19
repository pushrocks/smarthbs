"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQiwwQ0FBeUM7QUFDekMsNkJBQTRCO0FBRTVCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFBO0FBQ3RELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBQ3RELElBQUksYUFBYSxHQUFHLElBQUksQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFBO0FBQ3ZELFFBQVEsQ0FBQyxVQUFVLEVBQUU7SUFFakIsRUFBRSxDQUFDLHdCQUF3QixFQUFFO1FBQ3pCLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUMvQyxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRTtRQUM3QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUNyRSxDQUFDLENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQyxDQUFBIn0=