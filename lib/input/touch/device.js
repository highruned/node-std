(function() {
  var base, core, device, input;
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
  base = core.mixin(input.device);
  device = (function() {
    function device() {
      $(document).swipe({
        swipeLeft: __bind(function() {
          return this.emit('swipe_left');
        }, this),
        swipeRight: __bind(function() {
          return this.emit('swipe_right');
        }, this)
      });
    }
    __extends(device, base);
    return device;
  })();
  exports.device = device;
}).call(this);
