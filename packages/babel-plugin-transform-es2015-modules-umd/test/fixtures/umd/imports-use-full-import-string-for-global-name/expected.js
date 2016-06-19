(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["foo-bar", "./directory/foo-bar"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("foo-bar"), require("./directory/foo-bar"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.fooBar, global.directoryFooBar);
    global.actual = mod.exports;
  }
})(this, function (_fooBar, _fooBar3) {
  "use strict";

  var _fooBar2 = babelHelpers.interopRequireDefault(_fooBar);

  var _fooBar4 = babelHelpers.interopRequireDefault(_fooBar3);
});
