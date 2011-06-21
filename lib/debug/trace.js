(function() {
  var base, core, debug, fs, trace;
  var __slice = Array.prototype.slice, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('import core');
  debug = std('import debug');
  fs = require('fs');
  base = core.mixin(core.base);
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
    __extends(trace, base);
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
      message = core.string.format("[%s] %s\n", core.datetime.create().format('%F %T'), messages);
      if (!debug.config.trace['silent']) {
        debug.info.apply(debug, messages);
      }
      return os.file.write(messages.join("\n"));
    };
    trace.prototype.resource = null;
    return trace;
  })();
  exports.trace = trace;
}).call(this);
