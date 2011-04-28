(function() {
  var backbone, controller, core;
  core = std('import core');
  backbone = require('backbone');
  controller = (function() {
    function controller() {}
    return controller;
  })();
  controller.prototype = core.mixin(controller.prototype, core.base.prototype, backbone.Controller.prototype);
  core.utility.bind(backbone.Controller, controller.prototype)();
  exports.controller = controller;
}).call(this);
