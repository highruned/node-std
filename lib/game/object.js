(function() {
  var core, game, object;
  core = std('import core');
  game = std('import game');
  object = (function() {
    function object() {}
    return object;
  })();
  object.prototype = core.mixin(object.prototype, core.object.prototype);
  exports.object = object;
}).call(this);
