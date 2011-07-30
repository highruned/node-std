(function() {
  var base, core, name;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('core');
  base = core.mixin(core.base);
  name = (function() {
    function name(first, middle, last) {
      this.first = first;
      this.middle = middle;
      this.last = last;
    }
    __extends(name, base);
    name.prototype.first = null;
    name.prototype.middle = null;
    name.prototype.last = null;
    return name;
  })();
  exports.name = name;
}).call(this);
