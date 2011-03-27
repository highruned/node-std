(function() {
  var core, model;
  core = include('core');
  model = (function() {
    function model() {}
    return model;
  })();
  model.prototype = core.object.create(core.object.prototype, core.trait.compose(core.trait.override(core.trait(core.base.prototype), core.trait(core.backbone.model.prototype))));
  core.utility.bind(core.backbone.model, model.prototype)();
  exports.model = model;
}).call(this);
