(function() {
  var base, core, math, quaternion;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('import core');
  math = std('import math');
  base = core.mixin(math.vector);
  quaternion = (function() {
    function quaternion() {
      quaternion.__super__.constructor.apply(this, arguments);
    }
    __extends(quaternion, base);
    return quaternion;
  })();
  exports.quaternion = quaternion;
}).call(this);
