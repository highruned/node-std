(function() {
  var core, device, input, math;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  core = std('import core');
  input = std('import input');
  math = std('import math');
  device = (function() {
    function device() {
      $(document).bind('mousewheel', __bind(function(event, delta) {
        console.log(delta);
        if (delta > 0) {
          this.emit('wheel_up', math.abs(delta));
        } else {
          this.emit('wheel_down', math.abs(delta));
        }
        return false;
      }, this));
    }
    return device;
  })();
  device.prototype = core.mixin(device.prototype, input.device.prototype);
  exports.device = device;
}).call(this);
