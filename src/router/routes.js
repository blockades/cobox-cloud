const nest = require('depnest')

exports.gives = nest('router.routes')

exports.needs = nest({
  'views.root.home': 'first',
  'views.root.team': 'first',
  'views.root.about': 'first',
  'views.layouts.application': 'first'
})

const RootPath = (request) => request.path === `/`
const AboutPath = (request) => request.path === `/about`
const TeamPath = (request) => request.path === `/team`

exports.create = (api) => {
  return nest('router.routes', (acc = []) => {
    const { layouts, root } = api.views

    const routes = [
      [ RootPath, { view: root.home, layout: layouts.application } ],
      [ AboutPath, { view: root.about, layout: layouts.application } ],
      [ TeamPath, { view: root.team, layout: layouts.application } ]
    ]

    return [...acc, ...routes]
  })
}
