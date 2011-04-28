(function() {
  var core, math, matrix;
  core = std('import core');
  math = std('import math');
  matrix = (function() {
    function matrix() {}
    return matrix;
  })();
  matrix.prototype = core.mixin(matrix.prototype, math.vector.prototype);
  exports.matrix = matrix;
}).call(this);
