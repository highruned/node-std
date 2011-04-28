(function() {
  var core, math, quaternion;
  core = std('import core');
  math = std('import math');
  quaternion = (function() {
    function quaternion() {}
    return quaternion;
  })();
  quaternion.prototype = core.mixin(quaternion.prototype, math.vector.prototype);
  exports.quaternion = quaternion;
}).call(this);
