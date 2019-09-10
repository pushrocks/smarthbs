/**
 * finds all variables in a handlebars template
 * @param hbsStringArg
 */
export declare let findVarsInHbsString: (hbsStringArg: string) => Promise<string[]>;
/**
 * checks if supplied variables satisfy an handlebars template
 * @param hbsStringArg
 * @param varObjectArg
 * @return string array with missing variable names
 */
export declare let checkVarsSatisfaction: (hbsStringArg: string, varObjectArg: any) => Promise<string[]>;
