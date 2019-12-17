This is an example of abusing the browserify `builtins` option to do a global module replace

### run the example:

this builds and runs the bundle, replacing all requires of module `bluebird` anywhere in the dep graph with `./bluebird.js`.

```bash
# npm start
node index.js | node
```

You can see the console output
```
using the shim for bluebird!
```
showing that the shimmed module was executed