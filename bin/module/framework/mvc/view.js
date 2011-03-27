(function() {
  var View, core;
  core = include('core');
  View = (function() {
    function View() {}
    return View;
  })();
  View.prototype = Object.create(Object.prototype, core.Trait.compose(core.Trait.override(core.Trait(View.prototype), core.Trait(core.Base.prototype), core.Trait(core.Backbone.View.prototype))));
  core.Utility.bind(core.Backbone.View, View.prototype)();
  exports.View = View;
}).call(this);
