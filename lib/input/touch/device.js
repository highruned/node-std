(function() {
  var core, device, input;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  core = std('import core');
  input = std('import input');
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
    return device;
  })();
  device.prototype = core.mixin(device.prototype, input.device.prototype);
  exports.device = device;
}).call(this);
