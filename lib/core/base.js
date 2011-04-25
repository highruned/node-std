(function() {
  var backbone, base, core;
  core = std('import core');
  backbone = require('backbone');
  base = (function() {
    function base() {}
    return base;
  })();
  base.prototype = core.mixin(core.object.prototype, backbone.Model.prototype);
  core.utility.bind(backbone.Model, base.prototype)();
  exports.base = base;
}).call(this);
