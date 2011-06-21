(function() {
  var base, core, router;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('import core');
  base = core.mixin(core.base);
  router = (function() {
    function router() {
      router.__super__.constructor.apply(this, arguments);
    }
    __extends(router, base);
    router.prototype.run = function() {
      return routes.foreach(function() {});
    };
    router.prototype.add_path = function(path) {
      return this.routes.add(path);
    };
    router.prototype.routes = new core.collection();
    return router;
  })();
  exports.router = router;
}).call(this);
