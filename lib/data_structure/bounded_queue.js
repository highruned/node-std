(function() {
  var bounded_queue, core, data_structure;
  core = std('core');
  data_structure = std('data_structure');
  bounded_queue = (function() {
    function bounded_queue(key, size, adapter) {
      key != null ? key : key = core.number.random();
      size != null ? size : size = 5;
      adapter != null ? adapter : adapter = new database.adapter.memory();
    }
    bounded_queue.prototype.push = function(item) {
      return this.push(item);
    };
    bounded_queue.prototype.pop = function() {
      return this.pop();
    };
    return bounded_queue;
  })();
  bounded_queue.prototype = core.mixin(bounded_queue.prototype, data_structure.queue.prototype);
  exports.bounded_queue = bounded_queue;
}).call(this);
