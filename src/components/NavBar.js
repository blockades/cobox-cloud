const { h } = require('mutant')

module.exports = function NavBar (props = {}, children = []) {
  const {
    goTo,
    goBack,
    request,
  } = props

  return h('nav.primary', [
    h('ul', [
      h('a', { 'ev-click': () => goTo('/') }, [
        h('li', 'Home'),
      ]),
      h('a', { href: "https://blockades.github.io/cobox-presentation/" }, [
        h('li', 'About'),
      ])
    ])
  ])
}
