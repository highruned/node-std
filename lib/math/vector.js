(function() {
  var core, vector;
  core = std('import core');
  vector = (function() {
    function vector(x, y, z, w) {
      this.x = x != null ? x : 0;
      this.y = y != null ? y : 0;
      this.z = z != null ? z : 0;
      this.w = w != null ? w : 0;
    }
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
  vector.prototype = core.mixin(vector.prototype, core.object.prototype);
  exports.vector = vector;
}).call(this);
