/// <reference types="handlebars" />
/**
 * get a template for a file on disk
 */
export declare let getTemplateForFile: (filePathArg: string) => Promise<HandlebarsTemplateDelegate>;
/**
 * get a template for string
 */
export declare let getTemplateForString: (fileStringArg: string) => Promise<HandlebarsTemplateDelegate>;
