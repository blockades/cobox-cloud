const nest = require('depnest')
const { h } = require('mutant')

const Container = require('../../components/Container')
const Graph = require('../../components/Graph')

exports.gives = nest('views.root.home')

exports.create = (api) => {
  return nest('views.root.home', rootHome)

  function rootHome (request, children = []) {
    return Container({ classList: ['root', 'home'] }, [
      h('div.banner', [
        h('div.left', [
          h('h1', 'CoBox'),
        ]),
        Graph(),
        h('div.right', [
          h('h2', 'Building blocks for the co-operative cloud')
        ])
      ])
    ])
  }
}
