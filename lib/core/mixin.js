(function() {
  var core, mixin;
  var __slice = Array.prototype.slice;
  core = std('import core');
  mixin = function() {
    var argument, i, result, _len;
    for (i = 0, _len = arguments.length; i < _len; i++) {
      argument = arguments[i];
      arguments[i] = core.trait(argument);
    }
    result = Object.create(Object.prototype, core.trait.compose(core.trait.override.apply(null, arguments)));
    result.create = function() {
      var _ref;
      _ref = arguments, arguments = 1 <= _ref.length ? __slice.call(_ref, 0) : [];
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return typeof result == "object" ? result : child;
      })(result, arguments, function() {});
    };
    return result;
  };
  exports.mixin = mixin;
}).call(this);
