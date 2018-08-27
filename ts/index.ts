import * as plugins from './smarthbs.plugins';
export type TTemplateStringType = 'filePath' | 'code';

export let handlebars = plugins.handlebars;
export * from './smarthbs.compile';
import './smarthbs.helpers';
export * from './smarthbs.partials';
export * from './smarthbs.template';
export * from './smarthbs.variables';
export * from './smarthbs.postprocess';
