(function() {
  var base, core, data_structure, deque;
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
  deque = (function() {
    function deque() {
      deque.__super__.constructor.apply(this, arguments);
    }
    __extends(deque, base);
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
  exports.deque = deque;
}).call(this);
