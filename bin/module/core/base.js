(function() {
  var base, core;
  core = include('core');
  base = (function() {
    function base() {}
    return base;
  })();
  base.prototype = core.object.create(core.object.prototype, core.trait(base.prototype));
  exports.base = base;
}).call(this);
