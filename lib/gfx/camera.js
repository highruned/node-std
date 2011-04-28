(function() {
  var camera, core;
  core = std('import core');
  camera = (function() {
    function camera() {}
    camera.prototype.viewport = {
      width: 0,
      height: 0
    };
    camera.prototype.position = {
      x: 0,
      y: 0
    };
    camera.prototype.target = null;
    return camera;
  })();
  camera.prototype = core.mixin(camera.prototype, core.object.prototype);
  exports.camera = camera;
}).call(this);
