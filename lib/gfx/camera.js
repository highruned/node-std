(function() {
  var base, camera, core, math;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('import core');
  math = std('import math');
  base = core.mixin(core.object);
  camera = (function() {
    function camera() {}
    __extends(camera, base);
    camera.prototype.viewport = {
      width: 0,
      height: 0
    };
    camera.prototype.position = new math.vector;
    camera.prototype.target = null;
    return camera;
  })();
  exports.camera = camera;
}).call(this);
