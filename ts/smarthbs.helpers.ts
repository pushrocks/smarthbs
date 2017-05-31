import * as plugins from './smarthbs.plugins'

/**
 * Helper:
 * Allows you to analyze a context
 */
plugins.handlebars.registerHelper('__analyze', (analyzeContext) => {
  if (typeof analyzeContext === 'string') {
    if (plugins.handlebars.partials[analyzeContext]) {
      plugins.beautylog.log(`The analyzed partial ${analyzeContext} looks like this`)
      console.log(plugins.handlebars.partials[analyzeContext])
    } else {
      plugins.beautylog.error(`The Partial ${analyzeContext} cannot be found`)
    }
    return 'analyzed'
  }
})

/**
 * Helper:
 * logs all registered partials to console
 */
plugins.handlebars.registerHelper('__allPartialsLog', (analyzeContext) => {
  console.log(plugins.handlebars.partials)
  return 'analyzed'
})

plugins.handlebars.registerHelper('__compile', (evaluationString, evaluationContext) => {
  let template = plugins.handlebars.compile(evaluationString)
  return template(evaluationContext)
})

