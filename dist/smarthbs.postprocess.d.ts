/**
 * allows you to keep handlebars in place across multiple iterations
 * helpful when handlebars syntax is used by more than one tool in a build chain
 */
export declare let postprocess: (stringArg: string) => Promise<string>;
