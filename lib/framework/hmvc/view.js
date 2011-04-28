(function() {
  var backbone, core, view;
  core = std('import core');
  backbone = require('backbone');
  view = (function() {
    function view() {}
    return view;
  })();
  view.prototype = core.object.create(core.object.prototype, core.trait.compose(core.trait.override(core.trait(view.prototype), core.trait(core.base.prototype), core.trait(backbone.view.prototype))));
  core.utility.bind(backbone.view, view.prototype)();
  exports.view = view;
}).call(this);
