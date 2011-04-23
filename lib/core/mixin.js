(function() {
  var core, mixin;
  var __slice = Array.prototype.slice;
  core = std('import core');
  mixin = function() {
    var result;
    result = core.object.create(core.object.prototype, core.trait.compose(core.trait.override.call(arguments)));
    result.prototype.create = function() {
      var _ref;
      _ref = arguments, arguments = 1 <= _ref.length ? __slice.call(_ref, 0) : [];
      return new result(arguments);
    };
    return result;
  };
  exports.mixin = mixin;
}).call(this);
