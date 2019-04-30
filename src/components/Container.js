const { h } = require('mutant')

module.exports = function Container (props = {}, children = []) {
  return h('article', {
    classList: props.classList
  }, children)
}
