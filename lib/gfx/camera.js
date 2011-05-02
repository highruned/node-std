(function() {
  var camera, core, math;
  core = std('import core');
  math = std('import math');
  camera = (function() {
    function camera() {}
    camera.prototype.viewport = {
      width: 0,
      height: 0
    };
    camera.prototype.position = new math.vector;
    camera.prototype.target = null;
    return camera;
  })();
  camera.prototype = core.mixin(camera.prototype, core.object.prototype);
  exports.camera = camera;
}).call(this);
