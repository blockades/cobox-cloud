const nest = require('depnest')

exports.gives = nest('router.routes')

exports.needs = nest({
  'views.root.home': 'first',
  'views.layouts.application': 'first'
})

const RootPath = (request) => request.path === `/`

exports.create = (api) => {
  return nest('router.routes', (acc = []) => {
    const { layouts, root } = api.views

    const routes = [
      [ RootPath, { view: root.home, layout: layouts.application } ]
    ]

    return [...acc, ...routes]
  })
}
