const nest = require('depnest')
const { Array: MutantArray } = require('mutant')

exports.gives = nest('router.history')

exports.create = (api) => {
  var _history = MutantArray([])

  return nest('router.history', () => _history)
}

