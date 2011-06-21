(function() {
  var core, game, npc;
  core = std('import core');
  game = std('import game');
  npc = (function() {
    function npc() {}
    return npc;
  })();
  npc.prototype = core.mixin(npc.prototype, game.object.prototype);
  exports.npc = npc;
}).call(this);
