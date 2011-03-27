(function() {
  var container, core;
  core = include('core');
  container = (function() {
    function container() {}
    return container;
  })();
  container.prototype = core.object.create(core.object.prototype, core.trait.compose(core.trait.override(core.trait(core.container.prototype), core.trait(core.base.prototype), core.trait(core.backbone.container.prototype))));
  core.utility.bind(core.backbone.container, container.prototype)();
  exports.container = container;
}).call(this);
