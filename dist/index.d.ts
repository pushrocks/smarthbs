/// <reference types="handlebars" />
import 'typings-global';
export declare type TTemplateStringType = 'filePath' | 'code';
/**
 * registers a directory of partials to make them available within handlebars compilation
 */
export declare let registerPartialDir: (dirPathArg: string) => Promise<{}>;
/**
 * compiles a directory and outputs it
 */
export declare let compileDirectory: (originDirPathArg: string, destinationDirPathArg: string, dataFileNameArg: string) => Promise<void>;
/**
 * get a template for a file on disk
 */
export declare let getTemplateForFile: (filePathArg: string) => Promise<HandlebarsTemplateDelegate>;
