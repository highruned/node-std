(function() {
  var backbone, core, view;
  backbone = require('backbone');
  core = std('import core');
  view = (function() {
    function view() {}
    return view;
  })();
  model.prototype = core.mixin(view.prototype, core.base.prototype, backbone.View.prototype);
  core.utility.bind(backbone.view, view.prototype)();
  exports.view = view;
}).call(this);
