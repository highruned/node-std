(function() {
  var core, data_structure, deque;
  core = std('core');
  data_structure = std('data_structure');
  deque = (function() {
    function deque() {}
    deque.prototype.push_front = function(item) {
      return this.adapter.rpush(this.key, item);
    };
    deque.prototype.push_back = function(item) {
      return this.push(item);
    };
    deque.prototype.pop_front = function() {
      return this.pop();
    };
    deque.prototype.pop_back = function() {
      return this.adapter.lpop(this.key);
    };
    return deque;
  })();
  deque.prototype = core.mixin(deque.prototype, data_structure.queue.prototype);
  exports.deque = deque;
}).call(this);
