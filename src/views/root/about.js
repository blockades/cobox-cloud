const nest = require('depnest')
const { h } = require('mutant')

const Container = require('../../components/Container')
const Graph = require('../../components/Graph')

exports.gives = nest('views.root.about')

exports.create = (api) => {
  return nest('views.root.about', rootHome)

  function rootHome (request, children = []) {
    return Container({ classList: ['root', 'about'] }, [
    ])
  }
}
