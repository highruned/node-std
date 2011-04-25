(function() {
  var backbone, core, model;
  core = std('import core');
  backbone = require('backbone');
  model = (function() {
    function model() {}
    return model;
  })();
  model.prototype = core.mixin(core.base.prototype, backbone.Model.prototype);
  core.utility.bind(backbone.Model, model.prototype)();
  exports.model = model;
}).call(this);
