(function() {
  var backbone, core, model;
  backbone = require('backbone');
  core = std('import core');
  model = (function() {
    function model() {}
    return model;
  })();
  model.prototype = core.mixin(model.prototype, core.base.prototype, backbone.Model.prototype);
  core.utility.bind(backbone.Model, model.prototype)();
  exports.model = model;
}).call(this);
