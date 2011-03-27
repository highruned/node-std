(function() {
  var string;
  string = String;
  string.prototype.url_encode = function() {
    return this;
  };
  string.prototype.to_int = function() {
    return 0;
  };
  string.prototype.to_hex = function() {
    return 0;
  };
  exports.string = string;
}).call(this);
