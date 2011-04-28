(function() {
  var core, game, monster;
  core = std('import core');
  game = std('import game');
  monster = (function() {
    function monster() {}
    return monster;
  })();
  monster.prototype = core.mixin(monster.prototype, game.npc.prototype);
  exports.monster = monster;
}).call(this);
