import * as plugins from './smarthbs.plugins';
/**
 * get a template for a file on disk
 */
export declare let getTemplateForFile: (filePathArg: string) => Promise<plugins.handlebars.TemplateDelegate<any>>;
/**
 * get a template for string
 */
export declare let getTemplateForString: (fileStringArg: string) => Promise<plugins.handlebars.TemplateDelegate<any>>;
