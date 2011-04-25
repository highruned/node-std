(function() {
  var backbone, collection, core;
  core = std('core');
  backbone = require('backbone');
  collection = (function() {
    function collection() {}
    collection.prototype.iterate = function() {};
    collection.prototype.add = function(item) {
      return this.items.push(item);
    };
    collection.prototype.items = [];
    return collection;
  })();
  collection.prototype = core.mixin(collection.prototype, core.base.prototype, backbone.Collection.prototype);
  core.utility.bind(backbone.Collection, collection.prototype)();
  exports.collection = collection;
}).call(this);
