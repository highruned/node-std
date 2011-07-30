(function() {
  var base, core, email;
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
  email = (function() {
    function email(user, host) {
      this.user = user;
      this.host = host;
    }
    __extends(email, base);
    email.prototype.user = null;
    email.prototype.host = null;
    return email;
  })();
  exports.email = email;
}).call(this);
