(function() {
  var core, device, input;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  core = std('import core');
  input = std('import input');
  device = (function() {
    function device() {
      $(document).bind('mousewheel', __bind(function(event, delta) {
        this.emit('mouse_wheel', delta);
        return false;
      }, this));
    }
    return device;
  })();
  device.prototype = core.mixin(device.prototype, input.device.prototype);
  exports.device = device;
}).call(this);
