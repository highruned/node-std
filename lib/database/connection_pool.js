(function() {
  var connection_pool, core;
  core = std('import core');
  connection_pool = (function() {
    function connection_pool() {}
    connection_pool.prototype.connections = core.collection;
    return connection_pool;
  })();
  connection_pool.prototype = core.mixin(connection_pool.prototype, core.base.prototype);
  exports.connection_pool = connection_pool;
}).call(this);
