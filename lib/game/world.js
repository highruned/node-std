(function() {
  var base, core, debug, game, gfx, math, world;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('import core');
  game = std('import game');
  math = std('import math');
  gfx = std('import gfx');
  debug = std('import debug');
  base = core.mixin(core.event_emitter);
  world = (function() {
    function world() {
      var update_camera_position;
      $.extend(true, this, options);
      update_camera_position = __bind(function() {
        this.camera.viewport.width = $(window).width();
        return this.camera.viewport.height = $(window).height();
      }, this);
      update_camera_position();
      $(window).resize(update_camera_position);
    }
    __extends(world, base);
    world.prototype.init = function(model) {
      this.model = model;
      return this.emit('init');
    };
    world.prototype.move = function(direction) {
      this.position.x += direction.x;
      this.position.y += direction.y;
      return this.set_position(this.position);
    };
    world.prototype.add_object = function(object) {
      if (!object.id) {
        return debug.warn('[game.world] Object id is null.', object, {
          level: 9
        });
      }
      object.target = this;
      object.model.appendTo(this.model);
      return this.objects[object.id] = object;
    };
    world.prototype.target_player = function(player) {
      return this.target = player;
    };
    world.prototype.add_player = function(player) {
      debug.write('[game.world] Adding player.', player, {
        level: 9
      });
      if (!player.id) {
        return debug.warn('[game.world] Player id is null.', player, {
          level: 9
        });
      }
      return this.players[player.id] = player;
    };
    world.prototype.find_player_by = function(key, value) {
      var i, player, _len, _ref;
      if (key === 'id') {
        player = this.players[value];
      } else {
        _ref = this.players;
        for (player = 0, _len = _ref.length; player < _len; player++) {
          i = _ref[player];
          if (player[key] === value) {
            break;
          }
        }
      }
      if (!player) {
        debug.warn('[game.world] Cannot find player.', key, value, {
          level: 9
        });
      }
      return player;
    };
    world.prototype.remove_player = function(player) {
      if (!player) {
        return;
      }
      debug.write('[game.world] Removing player.', player.id, {
        level: 9
      });
      core.object.prototype.remove(this.players, player.id);
      return player.deconstructor();
    };
    world.prototype.set_position = function(position) {
      this.position = position;
      return debug.write('[game.world] Updated world position.', this.position, {
        level: 9
      });
    };
    world.prototype.update = function() {
      if (this.target) {
        this.camera.position.x = this.target.position.x;
        return this.camera.position.y = this.target.position.y;
      }
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
        _results.push(player.draw(this.camera));
      }
      return _results;
    };
    world.prototype.model = null;
    world.prototype.position = new math.vector;
    world.prototype.camera = new gfx.camera;
    world.prototype.speed = 50;
    world.prototype.players = {};
    world.prototype.objects = {};
    world.prototype.target = null;
    world.prototype.id = null;
    return world;
  })();
  exports.world = world;
}).call(this);
