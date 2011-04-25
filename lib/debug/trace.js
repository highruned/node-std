(function() {
  var core, debug, fs, trace;
  var __slice = Array.prototype.slice;
  core = std('import core');
  debug = std('import debug');
  fs = require('fs');
  trace = (function() {
    function trace() {
      var messages, options, _i;
      messages = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
      if (options == null) {
        options = {
          level: 10
        };
      }
      this.resources = new os.file(debug.config.trace['path']);
      this.write.apply(this, __slice.call(messages).concat([options]));
    }
    trace.prototype.write = function() {
      var message, messages, options, _i;
      messages = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
      if (options == null) {
        options = {
          level: 10
        };
      }
      if (options['level'] < debug.config.trace['level']) {
        return;
      }
      message = core.string.format("[%s] %s\n", core.datetime.create().format('%F %T'), message);
      if (!debug.config.trace['silent']) {
        console.log.apply(console, message);
      }
      return os.file.write(message.join("\n"));
    };
    trace.prototype.resource = null;
    return trace;
  })();
  trace.prototype = core.mixin(trace.prototype, core.base.prototype);
  exports.trace = trace;
}).call(this);
