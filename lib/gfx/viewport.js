(function() {
  var base, core, viewport;
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
  viewport = (function() {
    function viewport() {}
    __extends(viewport, base);
    viewport.prototype.width = 0;
    viewport.prototype.height = 0;
    return viewport;
  })();
  exports.viewport = viewport;
}).call(this);
