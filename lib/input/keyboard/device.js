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
    __extends(device, base);
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
  exports.device = device;
}).call(this);
