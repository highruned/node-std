(function() {
  var core, object;
  core = std('core');
  object = (function() {
    function object() {}
    object.prototype.to_array = function() {
      return [];
    };
    object.prototype.remove = function(list, key) {
      return delete list[key];
    };
    return object;
  })();
  object.prototype = core.mixin(object.prototype, Object.prototype);
  exports.object = object;
}).call(this);
