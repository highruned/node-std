(function() {
  var base, core, server;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('import core');
  base = core.mixin(core.base);
  server = (function() {
    function server() {
      server.__super__.constructor.apply(this, arguments);
    }
    __extends(server, base);
    return server;
  })();
  exports.server = server;
}).call(this);
