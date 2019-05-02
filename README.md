# cobox.cloud / cobox.coop website

A simple browserify'ed depject application. 

```js
npm install

// THEN
npm run build // your code will now rebundle each time you save a JS file in src/ 

// OR

npm i -g gulp
gulp
```

```
src
├── assets
│   ├── fonts
│   │   └── MaisonNeueMono.woff
│   ├── images
│   │   ├── favicon.ico
│   │   └── icon_250x250.png
│   └── stylesheets
│       ├── application.css
│       ├── colours.css
│       ├── fonts.css
│       ├── graph.css
│       └── normalise.css
├── components
│   ├── Button.js
│   ├── Close.js
│   ├── Container.js
│   ├── Footer.js
│   ├── Graph.js
│   ├── NavBar.js
│   ├── Slider.js
│   ├── Tabs.js
│   ├── Timestamp.js
│   ├── Title.js
│   └── Tooltip.js
├── config
│   └── application.js
├── index.js
├── router
│   ├── goBack.js
│   ├── goTo.js
│   ├── history.js
│   ├── previous.js
│   ├── router.js
│   └── routes.js
└── views
    ├── layouts
    │   └── application.js
    └── root
        ├── about.js
        ├── home.js
        └── team.js
```

Views are designed in a Rails-like way to encourage RESTful code.

Views are rendered by the router. To navigate to a different path on an event, use:

```
// A path can be a string or object, so you can pass a specific record for a show page in the request.
var path = '/' || { path: '/', user: { id: 1, name: 'Alice' } } 

api.router.goTo(path)
```

Components are required manually, they are not depject modules. A component will tell you what props it requires to function correctly.

E.g.

```js
// src/components/NavBar.js

const { h  } = require('mutant')

module.exports = function NavBar (props = {}, children = []) {
  const {
    goTo, // api.router.goTo
    goBack, // api.router.goBack
    request, // a request object
  } = props

  return h('nav.primary', [
    h('ul', [
      h('a', { 'ev-click': () => goTo('/')  }, [
        h('li', 'Home'),
      ])
    ])
  ])
}
```

# TODO

* setup `browserify-css` so css files can be stored with their component / view. 
* setup `babelify` so we can use ES6 syntax 
