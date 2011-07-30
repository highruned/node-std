(function() {
  var base, core, game, math, object;
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
  game = std('import game');
  base = core.mixin(core.event_emitter);
  object = (function() {
    function object(options) {
      $.extend(true, this, options);
    }
    __extends(object, base);
    object.prototype.draw = function(camera) {
      return this.model.css({
        width: this.width / this.height * camera.orientation.z + 'px',
        height: this.height / this.width * camera.orientation.z + 'px',
        top: this.position.y * camera.orientation.z + 'px',
        left: this.position.x * camera.orientation.z + 'px'
      });
    };
    object.prototype.model = null;
    object.prototype.position = new math.vector;
    object.prototype.target = null;
    object.prototype.width = 0;
    object.prototype.height = 0;
    object.prototype.depth = 0;
    return object;
  })();
  exports.object = object;
}).call(this);
