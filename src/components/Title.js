const { h } = require('mutant')

module.exports = function Title (props = {}, children = []) {
  return h('title', props.name)
}
