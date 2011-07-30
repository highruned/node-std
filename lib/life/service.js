(function() {
  var base, core, service;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('core');
  base = core.mixin(core.base);
  service = (function() {
    function service(options) {
      $.extend(this, options);
    }
    __extends(service, base);
    service.prototype.add_person = function() {};
    service.prototype.get_random_person = function() {};
    return service;
  })();
  exports.service = service;
}).call(this);
