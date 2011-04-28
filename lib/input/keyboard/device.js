(function() {
  var core, device, input;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  core = std('import core');
  input = std('import input');
  device = (function() {
    function device() {
      this.title[input.key.none] = "none";
      $(window).keydown(__bind(function(event) {
        this.set_key_down(event.keyCode);
        this.emit('key_down', event.keyCode);
        return false;
      }, this));
      $(window).keyup(__bind(function(event) {
        this.set_key_up(event.keyCode);
        this.emit('key_up', event.keyCode);
        return false;
      }, this));
    }
    device.prototype.is_key_down = function(key) {
      if (this.state[key]) {
        return true;
      } else {
        return false;
      }
    };
    device.prototype.set_key_down = function(key) {
      return this.state[key] = true;
    };
    device.prototype.set_key_up = function(key) {
      return this.state[key] = false;
    };
    device.prototype.clear_state = function() {
      return this.state = [];
    };
    device.prototype.key_to_string = function(key) {
      return this.title[key];
    };
    device.prototype.state = [];
    device.prototype.title = {};
    return device;
  })();
  device.prototype = core.mixin(device.prototype, input.device.prototype);
  exports.device = device;
}).call(this);
