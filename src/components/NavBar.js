const { h } = require('mutant')

module.exports = function NavBar (props = {}, children = []) {
  const {
    goTo,
    goBack,
    request,
  } = props

  return h('nav', [
    h('ul', [
      h('li', 'About'),
    ])
  ])
}
