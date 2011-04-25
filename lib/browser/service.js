(function() {
  var core, fs, service;
  core = std('import core');
  fs = require('fs');
  service = (function() {
    function service(message, options) {
      if (options == null) {
        options = {
          level: 10
        };
      }
      this.resources = new os.file(debug.config.trace['path']);
    }
    service.prototype.write = function(message, options) {
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
    service.prototype.resource = null;
    return service;
  })();
  service.prototype = core.mixin(service.prototype, core.base.prototype);
  exports.service = service;
}).call(this);
