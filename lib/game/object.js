(function() {
  var core, game, object;
  core = std('import core');
  game = std('import game');
  object = (function() {
    function object() {}
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
  object.prototype = core.mixin(object.prototype, core.event_emitter.prototype);
  exports.object = object;
}).call(this);
