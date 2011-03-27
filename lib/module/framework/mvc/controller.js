(function() {
  var controller, core;
  core = std('import core');
  controller = (function() {
    function controller() {}
    return controller;
  })();
  controller.prototype = core.object.create(core.object.prototype, core.trait.compose(core.trait.override(core.trait(controller.prototype), core.trait(core.base.prototype), core.trait(core.backbone.controller.prototype))));
  core.utility.bind(core.backbone.controller, controller.prototype)();
  exports.controller = controller;
}).call(this);
