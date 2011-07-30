(function() {
  var base, bounded_queue, core, data_structure;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('core');
  data_structure = std('data_structure');
  base = core.mixin(data_structure.queue);
  bounded_queue = (function() {
    function bounded_queue(key, size, adapter) {
            if (key != null) {
        key;
      } else {
        key = core.number.random();
      };
            if (size != null) {
        size;
      } else {
        size = 5;
      };
            if (adapter != null) {
        adapter;
      } else {
        adapter = new database.adapter.memory();
      };
    }
    __extends(bounded_queue, base);
    bounded_queue.prototype.push = function(item) {
      return this.push(item);
    };
    bounded_queue.prototype.pop = function() {
      return this.pop();
    };
    return bounded_queue;
  })();
  exports.bounded_queue = bounded_queue;
}).call(this);
