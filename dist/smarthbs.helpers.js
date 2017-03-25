"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smarthbs.plugins");
plugins.handlebars.registerHelper('__compile', (evaluationString, evaluationContext) => {
    let template = plugins.handlebars.compile(evaluationString);
    return template(evaluationContext);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRoYnMuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0aGJzLmhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFFN0MsT0FBTyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCO0lBQ2pGLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDM0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3BDLENBQUMsQ0FBQyxDQUFBIn0=