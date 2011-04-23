(function() {
  var core;
  core = std('core');
  classs(router({
    run: function() {
      return routes.foreach(function() {});
    },
    routes: core.collection
  }));
  exports.router = router;
}).call(this);
