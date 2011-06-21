(function() {
  var core, scene;
  core = std('import core');
  scene = (function() {
    function scene() {}
    scene.prototype.update = function() {};
    scene.prototype.camera = null;
    scene.prototype.world = null;
    return scene;
  })();
  scene.prototype = core.mixin(scene.prototype, core.object.prototype);
  exports.scene = scene;
}).call(this);
