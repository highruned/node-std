(function() {
  var core, service;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  core = std('import core');
  service = (function() {
    function service() {
      var update;
      update = __bind(function() {
        this.emit('frame');
        return setTimeout(update, 1000 / (60 * 2));
      }, this);
    }
    return service;
  })();
  service.prototype = core.mixin(service.prototype, core.event_emitter.prototype);
  exports.service = service;
}).call(this);
