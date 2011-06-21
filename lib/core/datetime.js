(function() {
  var core, datetime;
  core = std('import core');
  datetime = Date;
  datetime.prototype.now = function() {};
  datetime.prototype.format = function(format) {
    var timestamp;
    timestamp = this.to_timestamp;
    return core.vendor.strftime(format, timestamp);
  };
  datetime.prototype.to_timestamp = function() {
    return Math.floor(this.getTime() / 1000);
  };
  exports.datetime = datetime;
}).call(this);
