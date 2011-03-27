(function() {
  var base, core;
  core = std('import core');
  base = (function() {
    function base() {}
    return base;
  })();
  base.prototype = core.object.create(core.object.prototype, core.trait(base.prototype));
  exports.base = base;
}).call(this);
