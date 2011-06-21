(function() {
  var base, core, vector;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('import core');
  base = core.mixin(core.object);
  vector = (function() {
    function vector(x, y, z, w) {
      this.x = x != null ? x : 0;
      this.y = y != null ? y : 0;
      this.z = z != null ? z : 0;
      this.w = w != null ? w : 0;
    }
    __extends(vector, base);
    vector.prototype.to_object = function() {
      return {
        x: this.x,
        y: this.y,
        z: this.z,
        w: this.w
      };
    };
    vector.prototype.from_object = function(v1) {
      return new vector(v1.x, v1.y, v1.z, v1.y);
    };
    vector.prototype.x = 0;
    vector.prototype.y = 0;
    vector.prototype.z = 0;
    vector.prototype.w = 0;
    return vector;
  })();
  exports.vector = vector;
}).call(this);
