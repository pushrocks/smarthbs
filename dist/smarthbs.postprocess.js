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
let safeSyntaxBeginRegex = /{-{/g;
let safeSyntaxEndRegex = /}-}/g;
/**
 * allows you to keep handlebars in place across multiple iterations
 * helpful when handlebars syntax is used by more than one tool in a build chain
 */
exports.postprocess = (stringArg) => __awaiter(this, void 0, void 0, function* () {
    let processedString = stringArg;
    processedString = processedString.replace(safeSyntaxBeginRegex, '{{');
    processedString = processedString.replace(safeSyntaxEndRegex, '}}');
    return processedString;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRoYnMucG9zdHByb2Nlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGhicy5wb3N0cHJvY2Vzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EsSUFBSSxvQkFBb0IsR0FBRyxNQUFNLENBQUE7QUFDakMsSUFBSSxrQkFBa0IsR0FBRyxNQUFNLENBQUE7QUFFL0I7OztHQUdHO0FBQ1EsUUFBQSxXQUFXLEdBQUcsQ0FBTyxTQUFpQjtJQUMvQyxJQUFJLGVBQWUsR0FBRyxTQUFTLENBQUE7SUFDL0IsZUFBZSxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDckUsZUFBZSxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDbkUsTUFBTSxDQUFDLGVBQWUsQ0FBQTtBQUN4QixDQUFDLENBQUEsQ0FBQSJ9