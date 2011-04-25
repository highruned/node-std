(function() {
  var mysql;
  mysql = (function() {
    function mysql() {}
    mysql.prototype.disconnect = function() {};
    mysql.prototype.reconnect = function() {};
    mysql.prototype.reset = function() {};
    mysql.prototype.is_active = function() {};
    mysql.prototype.types = {
      varchar: core.string,
      int: core.integer,
      float: core.float,
      decimal: core.float,
      datetime: core.datetime,
      blob: core.string,
      tinyint: core.integer
    };
    return mysql;
  })();
  exports.mysql = mysql;
}).call(this);
