(function() {
  var base, core, device, input, math;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('import core');
  input = std('import input');
  math = std('import math');
  base = core.mixin(input.device);
  device = (function() {
    function device() {
      $(document).bind('mousewheel', __bind(function(event, delta) {
        if (delta > 0) {
          this.emit('wheel_up', math.abs(delta));
        } else {
          this.emit('wheel_down', math.abs(delta));
        }
        return false;
      }, this));
    }
    __extends(device, base);
    return device;
  })();
  exports.device = device;
}).call(this);
