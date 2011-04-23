(function() {
  var core, server;
  core = std('import core');
  server = (function() {
    function server() {}
    return server;
  })();
  server.prototype = std.core.mixin(server.prototype, core.base.prototype);
  exports.server = server;
}).call(this);
