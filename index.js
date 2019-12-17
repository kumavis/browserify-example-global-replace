const browserify = require('browserify')
const browserifyBuiltins = require('browserify/lib/builtins')

// console.log(browserifyBuiltins)

const builtins = Object.assign({}, browserifyBuiltins, {
  bluebird: require.resolve('./bluebird.js')
})

const b = browserify(['./entry.js'], {
  builtins,
})
b.bundle().pipe(process.stdout)