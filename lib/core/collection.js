(function() {
  var backbone, base, collection, core;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('import core');
  backbone = require('backbone');
  base = core.mixin(core.base, backbone.Collection);
  collection = (function() {
    function collection() {}
    __extends(collection, base);
    collection.prototype.iterate = function() {};
    collection.prototype.add = function(item) {
      return this.items.push(item);
    };
    collection.prototype.items = [];
    return collection;
  })();
  core.utility.bind(backbone.Collection, collection.prototype)();
  exports.collection = collection;
}).call(this);
