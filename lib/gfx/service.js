(function() {
  var base, core, service;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('import core');
  base = core.mixin(core.event_emitter);
  service = (function() {
    function service() {
      var update;
      update = __bind(function() {
        this.emit('frame');
        return setTimeout(update, 1000 / (60 * 2));
      }, this);
      update();
    }
    __extends(service, base);
    return service;
  })();
  exports.service = service;
}).call(this);
