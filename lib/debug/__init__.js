(function() {
  exports.config = {
    trace: {
      silent: false,
      level: 10,
      path: __dirname + '/log/trace.txt'
    }
  };
  exports.trace = std_require('debug.trace').trace;
  exports.write = function(message, level) {
    if (!(typeof console != "undefined" && console !== null)) {
      window.console = {
        log: function() {}
      };
      window.debug = {
        info: function() {}
      };
    }
    return console.log(message);
  };
}).call(this);
