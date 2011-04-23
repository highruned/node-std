(function() {
  var backbone, collection, core;
  core = std('core');
  backbone = require('backbone');
  collection = (function() {
    function collection() {}
    collection.prototype.iterate = function() {};
    return collection;
  })();
  collection.prototype = core.mixin(collection.prototype, core.base.prototype, backbone.collection.prototype);
  core.utility.bind(backbone.collection, collection.prototype)();
  exports.collection = collection;
}).call(this);
