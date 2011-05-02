(function() {
  var __slice = Array.prototype.slice;
  if (!global.console) {
    global.console = {
      log: function() {}
    };
  }
  if (!global.debug) {
    global.debug = {
      info: console.log,
      error: console.log,
      warn: console.log
    };
  }
  exports.config = {
    trace: {
      silent: false,
      level: 10,
      path: __dirname + '/log/trace.txt'
    }
  };
  exports.trace = std_import('debug.trace').trace;
  exports.info = exports.write = function() {
    var messages, options, _i;
    messages = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
    if (options == null) {
      options = {
        level: 10
      };
    }
    return debug.info.apply(debug, messages);
  };
  exports.error = function() {
    var messages, options, _i;
    messages = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
    if (options == null) {
      options = {
        level: 10
      };
    }
    return debug.error.apply(debug, messages);
  };
  exports.warn = function() {
    var messages, options, _i;
    messages = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
    if (options == null) {
      options = {
        level: 10
      };
    }
    return debug.warn.apply(debug, messages);
  };
}).call(this);
