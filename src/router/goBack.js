const nest = require('depnest')
const { resolve } = require('mutant')
const { last } = require('lodash')

exports.gives = nest('router.goBack')

exports.needs = nest({
  'router.history': 'first'
})

exports.create = (api) => {
  return nest('router.goBack', goBack)

  function goBack () {
    const store = api.router.history()
    if (resolve(store).length === 1) return false

    store.pop()
  }
}
