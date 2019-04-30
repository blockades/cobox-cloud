const nest = require('depnest')
const { computed } = require('mutant')
const { last } = require('lodash')

exports.gives = nest('router.previous')

exports.needs = nest({
  'router.history': 'first'
})

exports.create = (api) => {
  var _previous = null

  return nest('router.previous', () => {
    if (!_previous) {
      const history = api.router.history()

      _previous = computed(history, history => {
        return last(history)
      })
    }

    return _previous
  })
}
