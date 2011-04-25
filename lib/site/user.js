(function() {
  var core, user, user_group;
  core = std('import core');
  user_group = std('import site.user_group');
  user = (function() {
    function user() {}
    user.prototype.permissions = core.collection;
    user.prototype.group = new user_group();
    return user;
  })();
  user.prototype = core.mixin(user.prototype, core.object.prototype);
  exports.user = user;
}).call(this);
