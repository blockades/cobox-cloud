const nest = require('depnest')
const { h } = require('mutant')

const NavBar = require('../../components/NavBar')
const Footer = require('../../components/Footer')

exports.gives = nest('views.layouts.application')

exports.needs = nest({
  'router.goTo': 'first'
})

exports.create = (api) => {
  return nest('views.layouts.application', applicationLayout)

  function applicationLayout (request, children = []) {
    return h('main.app', [
      NavBar({ goTo: api.router.goTo }),
      ...children,
      Footer()
    ])
  }
}
