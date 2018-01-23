import assemble from 'assemble'
import loaderUtils from 'loader-utils'

const app = assemble()

function assembleLoader(content) {
  this.cacheable && this.cacheable()
  const callback = this.async()

  const options = loaderUtils.getOptions(this) || {}

  if (!options.layouts) {
    throw new Error('need to config layouts')
  }
  if (!options.partials) {
    throw new Error('need to config partials')
  }

  app.layouts(options.layouts)
  app.partials(options.partials)
  app.page('page.hbs', { content })

  app.render('page.hbs', options.define || {}, (err, view) => {
    if (err) {
      throw new Error(err.message)
    }
    callback(null, `module.exports = ${JSON.stringify(view.content)}`)
  })
}

export default assembleLoader
