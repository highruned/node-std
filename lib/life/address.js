(function() {
  var address, base, core;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('core');
  base = core.mixin(core.base);
  address = (function() {
    function address(options) {
      $.extend(this, options);
    }
    __extends(address, base);
    address.prototype.country = null;
    address.prototype.state = null;
    address.prototype.street = null;
    address.prototype.postal_code = null;
    return address;
  })();
  exports.address = address;
}).call(this);
