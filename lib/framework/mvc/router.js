(function() {
  var core, router;
  core = std('core');
  router = (function() {
    function router() {}
    router.prototype.run = function() {
      return routes.foreach(function() {});
    };
    router.prototype.add_path = function(path) {
      return this.routes.add(path);
    };
    router.prototype.routes = new core.collection();
    return router;
  })();
  router.prototype = core.mixin(router.prototype, core.base.prototype);
  exports.router = router;
}).call(this);
