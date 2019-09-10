import * as plugins from './smarthbs.plugins';
export declare type TTemplateStringType = 'filePath' | 'code';
export declare let handlebars: typeof plugins.handlebars;
export * from './smarthbs.compile';
import './smarthbs.helpers';
export * from './smarthbs.partials';
export * from './smarthbs.template';
export * from './smarthbs.variables';
export * from './smarthbs.postprocess';
