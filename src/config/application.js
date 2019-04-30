const path = require('path')
const nest = require('depnest')
const { h, Value, computed } = require('mutant')
const { last } = require('lodash')

exports.gives = nest('config.application')

exports.needs = nest({
  'router.goTo': 'first',
  'router.history': 'first',
})

exports.create = function (api) {
  return nest('config.application', application)

  function application () {
    const app = h('div#app', [
      computed(api.router.history(), (history) => (
        !history ? h('p', "...Loading...") : last(history)
      ))
    ])

    api.router.goTo('/')

    return app
  }
}
