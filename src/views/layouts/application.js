const nest = require('depnest')
const { h } = require('mutant')

const NavBar = require('../../components/NavBar')

exports.gives = nest('views.layouts.application')

exports.create = (api) => {
  return nest('views.layouts.application', applicationLayout)

  function applicationLayout (request, children = []) {
    return h('main.app', [
      NavBar(),
      ...children
    ])
  }
}
