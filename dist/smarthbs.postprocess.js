"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let safeSyntaxBeginRegex = /{-{/g;
let safeSyntaxEndRegex = /}-}/g;
/**
 * allows you to keep handlebars in place across multiple iterations
 * helpful when handlebars syntax is used by more than one tool in a build chain
 */
exports.postprocess = async (stringArg) => {
    let processedString = stringArg;
    processedString = processedString.replace(safeSyntaxBeginRegex, '{{');
    processedString = processedString.replace(safeSyntaxEndRegex, '}}');
    return processedString;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRoYnMucG9zdHByb2Nlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGhicy5wb3N0cHJvY2Vzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQUksb0JBQW9CLEdBQUcsTUFBTSxDQUFDO0FBQ2xDLElBQUksa0JBQWtCLEdBQUcsTUFBTSxDQUFDO0FBRWhDOzs7R0FHRztBQUNRLFFBQUEsV0FBVyxHQUFHLEtBQUssRUFBRSxTQUFpQixFQUFtQixFQUFFO0lBQ3BFLElBQUksZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxlQUFlLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RSxlQUFlLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRSxPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDLENBQUMifQ==