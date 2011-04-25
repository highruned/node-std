(function() {
  var core, string;
  core = std('core');
  string = String;
  string.prototype.to_upper = function() {
    return this.toUpperCase();
  };
  string.prototype.to_lower = function() {
    return this.toLowerCase();
  };
  string.prototype.url_encode = function() {
    return this;
  };
  string.prototype.to_int = function() {
    return 0;
  };
  string.prototype.to_hex = function() {
    return 0;
  };
  string.prototype.format = core.third.sprintf;
  exports.string = string;
}).call(this);
