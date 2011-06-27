(function() {
  var base, core, scene;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('import core');
  base = core.mixin(core.object);
  scene = (function() {
    function scene() {}
    __extends(scene, base);
    scene.prototype.update = function() {};
    scene.prototype.camera = null;
    scene.prototype.world = null;
    return scene;
  })();
  exports.scene = scene;
}).call(this);
