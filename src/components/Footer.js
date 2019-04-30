const { h } = require('mutant')

module.exports = function Footer (props = {}, children = []) {
  return h('footer', [
    h('div', [
      h('h5', 'Contact us'),
      h('strong', 'Email: '),
      h('a', { href: 'mailto:frontdesk@cobox.cloud' }, 'frontdesk@cobox.cloud')
    ]),
    h('div', [
      h('p', 'All materials are free to share Creative Commons [BY-NC-SA 3.0].')
    ])
  ])
}
