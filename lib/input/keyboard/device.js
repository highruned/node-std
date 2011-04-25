(function() {
  var core, device, input;
  core = std('import core');
  input = std('import input');
  device = (function() {
    function device() {
      this.title[input.key.none] = "none";
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
  device.prototype = core.mixin(device.prototype, core.object.prototype);
  exports.device = device;
}).call(this);
