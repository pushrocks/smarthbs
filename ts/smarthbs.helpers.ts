import * as plugins from './smarthbs.plugins'

plugins.handlebars.registerHelper('__compile', (evaluationString, evaluationContext) => {
  let template = plugins.handlebars.compile(evaluationString)
  return template(evaluationContext)
})

