(function() {
  var base, core, device;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('import core');
  base = core.mixin(core.event_emitter);
  device = (function() {
    function device() {}
    __extends(device, base);
    return device;
  })();
  exports.device = device;
}).call(this);
