(function() {
  var base, core, object;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('import core');
  base = core.mixin(Object);
  object = (function() {
    function object() {}
    __extends(object, base);
    object.prototype.to_array = function() {
      return [];
    };
    object.prototype.remove = function(list, key) {
      return delete list[key];
    };
    return object;
  })();
  exports.object = object;
}).call(this);
