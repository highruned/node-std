(function() {
  var base, core, user_group;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('import core');
  base = core.mixin(core.object);
  user_group = (function() {
    function user_group() {}
    __extends(user_group, base);
    user_group.prototype.title = '';
    return user_group;
  })();
  exports.user_group = user_group;
}).call(this);
