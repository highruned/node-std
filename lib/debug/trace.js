(function() {
  var core, debug, fs, trace;
  core = std('import core');
  debug = std('import debug');
  fs = require('fs');
  trace = (function() {
    function trace(message, options) {
      if (options == null) {
        options = {
          level: 10
        };
      }
      this.resources = new os.file(debug.config.trace['path']);
    }
    trace.prototype.write = function(message, options) {
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
        console.log(message);
      }
      return os.file.write(message);
    };
    trace.prototype.resource = null;
    return trace;
  })();
  trace.prototype = core.mixin(trace.prototype, core.base.prototype);
  exports.trace = trace;
}).call(this);
