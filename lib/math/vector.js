(function() {
  var core, vector;
  core = std('import core');
  vector = (function() {
    function vector(x, y, z, w) {
      this.x = x != null ? x : 0;
      this.y = y != null ? y : 0;
      this.z = z;
      this.w = w;
    }
    vector.prototype.x = 0;
    vector.prototype.y = 0;
    vector.prototype.z = null;
    vector.prototype.w = null;
    return vector;
  })();
  vector.prototype = core.mixin(vector.prototype, core.base.prototype);
  exports.vector = vector;
}).call(this);
