(function() {
  var base, core, game, tile;
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
  base = core.mixin(game.object);
  tile = (function() {
    function tile(options) {
      tile.__super__.constructor.call(this, options);
    }
    __extends(tile, base);
    return tile;
  })();
  exports.tile = tile;
}).call(this);
