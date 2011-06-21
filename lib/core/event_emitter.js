(function() {
  var base, core, event_emitter;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  }, __slice = Array.prototype.slice;
  core = std('import core');
  base = core.mixin(core.base);
  event_emitter = (function() {
    function event_emitter() {}
    __extends(event_emitter, base);
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
  exports.event_emitter = event_emitter;
}).call(this);
