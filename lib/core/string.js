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
  string.prototype.url_encode = function() {
    return '';
  };
  string.prototype.url_decode = function() {
    return '';
  };
  string.prototype.find_and_replace = function() {
    return '';
  };
  string.prototype.to_hex = function() {
    return '';
  };
  string.prototype.format = core.vendor.sprintf;
  exports.string = string;
}).call(this);
