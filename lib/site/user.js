(function() {
  var base, core, user, user_group;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('import core');
  user_group = std('import site.user_group');
  base = core.mixin(core.object);
  user = (function() {
    function user() {}
    __extends(user, base);
    user.prototype.permissions = core.collection;
    user.prototype.group = new user_group();
    return user;
  })();
  exports.user = user;
}).call(this);
