(function() {
  var core, viewport;
  core = std('import core');
  viewport = (function() {
    function viewport() {}
    viewport.prototype.width = 0;
    viewport.prototype.height = 0;
    return viewport;
  })();
  viewport.prototype = core.mixin(viewport.prototype, core.base.prototype);
  exports.viewport = viewport;
}).call(this);
