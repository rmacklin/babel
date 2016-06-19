# babel-plugin-transform-es2015-modules-umd

## Installation

```sh
$ npm install babel-plugin-transform-es2015-modules-umd
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-es2015-modules-umd"]
}
```

You can also override the names of particular libraries when this module is
running in the browser.  For example the `es6-promise` library exposes itself
as `global.Promise` rather than `global.es6Promise`. This can be accommodated by:

```json
{
  "plugins": [
    ["transform-es2015-modules-umd", {
      "globals": {
        "es6-promise": "Promise"
      }
    }]
  ]
}
```

This transform is using the [basename](https://en.wikipedia.org/wiki/Basename)
of each import to generate the global names in the UMD output. This means that
if you're importing multiple modules with the same basename, like:
```js
import Thing1 from 'thing1/main';
import Thing2 from 'thing2/main';
```
by default it will transpile into two references to the same browser global:
```js
factory(global.main, global.main);
```
Since you cannot map `main` to both `Thing1` and `Thing2`, you must set the
`useFullImportStringForGlobalName` option to `true` so that you can use the
full import string in the `globals` map, like so:
```json
{
  "plugins": [
    ["transform-es2015-modules-umd", {
      "globals": {
        "thing1/main": "Thing1",
        "thing2/main": "Thing2"
      },
      "useFullImportStringAsGlobalName": true
    }]
  ]
}
```
Then the UMD output will correctly include:
```js
factory(global.Thing1, global.Thing2);
```
If you don't provide a global overrides map but still set
`useFullImportStringForGlobalName` to true, the default output would be:
```js
factory(global.thing1Main, global.thing2Main);
```
according to the `toIdentifier` function in
[babel-types/src/converters](../babel-types/src/converters.js).

### Via CLI

```sh
$ babel --plugins transform-es2015-modules-umd script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-es2015-modules-umd"]
});
```
