(function() {
  var core, event_emitter;
  var __slice = Array.prototype.slice;
  core = std('import core');
  event_emitter = (function() {
    function event_emitter() {}
    event_emitter.prototype.on = function(name, callback) {
      return this.events[name].push(callback);
    };
    event_emitter.prototype.emit = function() {
      var c1, i, name, params, _ref, _results;
      name = arguments[0], params = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      _ref = this.events[name] != null;
      _results = [];
      for (i in _ref) {
        c1 = _ref[i];
        _results.push(c1.apply(null, params));
      }
      return _results;
    };
    event_emitter.prototype.events = {};
    return event_emitter;
  })();
  event_emitter.prototype = core.mixin(event_emitter.prototype, core.base.prototype);
  exports.event_emitter = event_emitter;
}).call(this);
