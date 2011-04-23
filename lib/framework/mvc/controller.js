(function() {
  var backbone, controller, core;
  core = std('import core');
  backbone = require('backbone');
  controller = (function() {
    function controller() {}
    return controller;
  })();
  controller.prototype = core.object.create(core.object.prototype, core.trait.compose(core.trait.override(core.trait(controller.prototype), core.trait(core.base.prototype), core.trait(backbone.controller.prototype))));
  core.utility.bind(backbone.controller, controller.prototype)();
  exports.controller = controller;
}).call(this);
