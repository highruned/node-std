(function() {
  var core, device;
  core = std('import core');
  device = (function() {
    function device() {}
    return device;
  })();
  device.prototype = core.mixin(device.prototype, core.event_emitter.prototype);
  exports.device = device;
}).call(this);
