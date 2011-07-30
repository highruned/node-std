(function() {
  var account, base, core, life;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('core');
  life = std('life');
  base = core.mixin(life.account);
  account = (function() {
    function account(options) {
      $.extend(this, options);
    }
    __extends(account, base);
    account.prototype.username = null;
    account.prototype.password = null;
    account.prototype.email = null;
    return account;
  })();
  exports.account = account;
}).call(this);
