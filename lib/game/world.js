(function() {
  var core, game, gfx, math, world;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  core = std('import core');
  game = std('import game');
  math = std('import math');
  gfx = std('import gfx');
  world = (function() {
    function world() {
      var update_camera_position;
      update_camera_position = __bind(function() {
        this.camera.viewport.width = $(window).width();
        return this.camera.viewport.height = $(window).height();
      }, this);
      update_camera_position();
      $(window).resize(update_camera_position);
    }
    world.prototype.move = function(direction) {
      this.position.x += direction.x;
      this.position.y += direction.y;
      return this.set_position(this.position);
    };
    world.prototype.set_position = function(position) {
      this.position = position;
      return debug.write('updated world position', this.position);
    };
    world.prototype.draw = function() {
      var i, left, player, top, _ref, _results;
      left = (this.position.x + this.camera.position.x) * this.speed * -1;
      top = (this.position.y + this.camera.position.y) * this.speed;
      this.model.css({
        'left': left,
        'top': top
      });
      _ref = this.players;
      _results = [];
      for (i in _ref) {
        player = _ref[i];
        _results.push(player.draw());
      }
      return _results;
    };
    world.prototype.model = null;
    world.prototype.position = new math.vector;
    world.prototype.camera = new gfx.camera;
    world.prototype.speed = 50;
    world.prototype.players = {};
    return world;
  })();
  world.prototype = core.mixin(world.prototype, core.base.prototype);
  exports.world = world;
}).call(this);
