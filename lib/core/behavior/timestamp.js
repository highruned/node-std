(function() {
  var core, timestamp;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  core = std('import core');
  timestamp = (function() {
    function timestamp() {
      this.bind('before_persist', __bind(function() {
        return this.created_at.update();
      }, this));
      this.bind('before_update', __bind(function() {
        return this.updated_at.update();
      }, this));
    }
    timestamp.prototype.created_at = core.datetime;
    timestamp.prototype.updated_at = core.datetime;
    return timestamp;
  })();
  timestamp.prototype = core.object.create(core.object.prototype, core.trait(timestamp.prototype));
  exports.timestamp = timestamp;
}).call(this);
