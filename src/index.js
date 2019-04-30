const combine = require('depject')
const entry = require('depject/entry')
const nest = require('depnest')
const bulk = require('bulk-require')

const Title = require('./components/Title')

const views = bulk(__dirname, ['views/**/*.js'])
const router = bulk(__dirname, ['router/**/*.js'])
const config = bulk(__dirname, ['config/**/*.js'])

const app = Object.assign(views, router, config)

const sockets = combine(app)
const api = entry(sockets, nest('config.application', 'first'))
const App = api.config.application

document.body.appendChild(App())
document.head.appendChild(Title({ name: 'CoBox' }))
