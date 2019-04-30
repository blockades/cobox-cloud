const { h } = require('mutant')

module.exports = function NavBar (props = {}, children = []) {
  const {
    goTo,
    goBack,
    request,
  } = props

  return h('nav.primary', [
    h('ul', [
      h('a', [
        h('li', 'About'),
      ])
    ])
  ])
}
