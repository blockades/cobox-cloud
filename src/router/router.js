const nest = require('depnest')

exports.gives = nest('router.router')

exports.needs = nest({
  'router.routes': 'reduce',
  'views.layouts.application': 'first'
})

exports.create = (api) => {
  var router = null

  return nest('router.router', (request, cb) => {
    if (!router) router = Router()

    if (typeof request === 'object') router(req, cb)
    else if (isPath(request)) router({ path: request }, cb)

    return true
  })

  function Router () {
    const routes = api.router.routes()

    return (request, cb) => {
      const route = routes.find(([validator]) => validator(request))
      if (route) {
        var { layout, view } = route[1]
        if (!layout) layout = api.views.layouts.application
        cb(null, layout(request, [view(request)]))
      }
    }
  }
}

function isPath (str) {
  return typeof str === 'string' && str[0] === '/'
}
