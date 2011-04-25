(function() {
  var memory;
  memory = (function() {
    function memory() {}
    memory.prototype.rpush = function(item) {
      return this.items.push(item);
    };
    memory.prototype.lpop = function() {
      return this.items.shift();
    };
    memory.prototype.clear = function() {
      return this.items = new core.collection();
    };
    memory.prototype.items = new core.collection();
    return memory;
  })();
}).call(this);
