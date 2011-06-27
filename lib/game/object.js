(function() {
  var base, core, game, object;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('import core');
  game = std('import game');
  base = core.mixin(core.event_emitter);
  object = (function() {
    function object() {}
    __extends(object, base);
    object.prototype.draw = function(camera) {
      var left, top;
      left = (this.position.x + this.target.position.x) * this.speed * -1;
      top = (this.position.y + this.target.position.y) * this.speed;
      return this.model.css({
        'left': left,
        'top': top
      });
    };
    object.prototype.model = null;
    return object;
  })();
  exports.object = object;
}).call(this);
