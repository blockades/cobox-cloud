const nest = require('depnest')
const { resolve } = require('mutant')
const { isEqual } = require('lodash')

exports.gives = nest('router.goTo')

exports.needs = nest({
  'router.history': 'first',
  'router.previous': 'first',
  'router.router': 'first'
})

exports.create = function (api) {
  return nest('router.goTo', goTo)

  function goTo (request, options = {}) {
    api.router.router(request, (err, view) => {
      if (err) throw err
      if (!view) return

      const previous = resolve(api.router.previous())

      if (isEqual(view, previous)) return false

      const history = api.router.history()
      history.push(view)
    })
  }
}
