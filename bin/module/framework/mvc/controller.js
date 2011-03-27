(function() {
  var Controller, core;
  core = include('core');
  Controller = (function() {
    function Controller() {}
    return Controller;
  })();
  Controller.prototype = Object.create(Object.prototype, core.Trait.compose(core.Trait.override(core.Trait(Controller.prototype), core.Trait(core.Base.prototype), core.Trait(core.Backbone.Controller.prototype))));
  core.Utility.bind(core.Backbone.Controller, Controller.prototype)();
  exports.Controller = Controller;
}).call(this);
