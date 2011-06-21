(function() {
  var core, data_structure, stack;
  core = std('core');
  data_structure = std('data_structure');
  stack = (function() {
    function stack() {}
    stack.prototype.push = function(item) {
      return this.adapter.lpush(this.key, item);
    };
    stack.prototype.pop = function() {
      return this.adapter.lpop(this.key);
    };
    return stack;
  })();
  stack.prototype = core.mixin(stack.prototype, data_structure.queue.prototype);
  exports.stack = stack;
}).call(this);
