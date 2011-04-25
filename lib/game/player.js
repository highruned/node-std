(function() {
  var core, game, player;
  core = std('import core');
  game = std('import game');
  player = (function() {
    function player() {}
    return player;
  })();
  player.prototype = core.mixin(player.prototype, game.npc.prototype);
  exports.player = player;
}).call(this);
