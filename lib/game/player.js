(function() {
  var core, game, math, player;
  core = std('import core');
  game = std('import game');
  math = std('import math');
  player = (function() {
    function player() {
      debug.write('initializing player', this);
      this.update_position();
    }
    player.prototype.move = function(direction) {
      if (!this.control) {
        return;
      }
      if (direction.x === 0 && direction.y === 0) {
        return;
      }
      this.position.x += direction.x;
      this.position.y += direction.y;
      return this.set_position(this.position);
    };
    player.prototype.set_position = function(position) {
      this.position = position;
      if (this.control) {
        socket.send({
          command: 'update<player:position>',
          position: this.position
        });
        world.camera.position = this.position;
        return;
      }
      return debug.write('updating player position', this.position);
    };
    player.prototype.draw = function() {
      return this.model.css({
        left: ((this.position.x - world.camera.position.x) * this.speed) + world.camera.viewport.width / 2,
        top: (((this.position.y * -1) + world.camera.position.y) * this.speed) + world.camera.viewport.height / 2
      });
    };
    player.prototype.model = null;
    player.prototype.control = false;
    player.prototype.position = new math.vector;
    player.prototype.speed = 50;
    return player;
  })();
  player.prototype = core.mixin(player.prototype, game.npc.prototype);
  exports.player = player;
}).call(this);
