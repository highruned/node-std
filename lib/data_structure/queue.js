(function() {
  var core, database, queue;
  core = std('core');
  database = std('database');
  queue = (function() {
    function queue(key, adapter) {
      key != null ? key : key = core.number.random();
      adapter != null ? adapter : adapter = new database.adapter.memory();
    }
    queue.prototype.push = function(item) {
      return this.adapter.lpush(this.key, item);
    };
    queue.prototype.pop = function() {
      return this.adapter.rpop(this.key);
    };
    queue.prototype.peek = function() {
      return this.items[0];
    };
    queue.prototype.is_empty = function() {
      return !this.items.length;
    };
    get({
      items: function() {
        var items;
        items = this.adapter.lrange(this.key, 0, -1);
        return items;
      },
      to_string: function() {
        return JSON.stringify(this.items);
      }
    });
    return queue;
  })();
  queue.prototype = core.mixin(queue.prototype, core.base.prototype);
  exports.queue = queue;
}).call(this);
