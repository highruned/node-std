(function() {
  var core, game, world;
  core = std('import core');
  game = std('import game');
  world = (function() {
    function world() {}
    return world;
  })();
  world.prototype = core.mixin(world.prototype, core.object.prototype);
  exports.world = world;
}).call(this);
