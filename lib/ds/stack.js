(function() {
  var core, data_structure, stack;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('import core');
  data_structure = std('import data_structure');
  stack = (function() {
    function stack() {
      stack.__super__.constructor.apply(this, arguments);
    }
    __extends(stack, data_structure.queue);
    stack.prototype.push = function(item) {
      return this.adapter.lpush(this.key, item);
    };
    stack.prototype.pop = function() {
      return this.adapter.lpop(this.key);
    };
    return stack;
  })();
  exports.stack = stack;
}).call(this);
