## Explorer
[![Build Status](https://travis-ci.org/kensho/explorer.svg)](https://travis-ci.org/luiscarli/explorer)

**Scripts**
```bash
$ npm start
# prune and install dependencies,
# start a hot reload development server on http://localhost:3000/
# run unit tests and lint on source change

$ node server.js
# start only the hot reload development server

$ npm run check
# run lint and executes unit tests

$ npm run test:cov
# generate coverage information from tests
$ open coverage/index.html
# open coverage report

$ npm run doc
# Auto-generate the docs for functions and components and save then on ./docs

$ npm run build
# build /lib and /dist files
# /lib contains the compiled ES5 js files
# /dist contains the bundle app and assets
```

**More Information**

- [Development Guide for new Components and Modules](/docs/development.md)
- [Docs for Components](/docs/components.md)
- [Docs Functions Modules](/docs/functions.md)
- [Structure of the Components on the library](/docs/componentsStructure.md)
