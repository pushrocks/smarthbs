"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smarthbs.plugins");
plugins.handlebars.registerHelper('__analyze', (analyzeContext) => {
    if (typeof analyzeContext === 'string') {
        if (plugins.handlebars.partials[analyzeContext]) {
            plugins.beautylog.log(`The analyzed partial ${analyzeContext} looks like this`);
            console.log(plugins.handlebars.partials);
        }
        else {
            plugins.beautylog.error(`The Partial ${analyzeContext} cannot be found`);
        }
        return 'analyzed';
    }
});
plugins.handlebars.registerHelper('__allPartialsLog', (analyzeContext) => {
    console.log(plugins.handlebars.partials);
    return 'analyzed';
});
plugins.handlebars.registerHelper('__compile', (evaluationString, evaluationContext) => {
    let template = plugins.handlebars.compile(evaluationString);
    return template(evaluationContext);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRoYnMuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0aGJzLmhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFFN0MsT0FBTyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYztJQUM1RCxFQUFFLENBQUMsQ0FBQyxPQUFPLGNBQWMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsY0FBYyxrQkFBa0IsQ0FBQyxDQUFBO1lBQy9FLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMxQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLGNBQWMsa0JBQWtCLENBQUMsQ0FBQTtRQUMxRSxDQUFDO1FBQ0QsTUFBTSxDQUFDLFVBQVUsQ0FBQTtJQUNuQixDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUE7QUFFRixPQUFPLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGNBQWM7SUFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3hDLE1BQU0sQ0FBQyxVQUFVLENBQUE7QUFDbkIsQ0FBQyxDQUFDLENBQUE7QUFFRixPQUFPLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUI7SUFDakYsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUMzRCxNQUFNLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUE7QUFDcEMsQ0FBQyxDQUFDLENBQUEifQ==