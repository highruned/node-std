(function() {
  var core, user_group;
  core = std('import core');
  user_group = (function() {
    function user_group() {}
    user_group.prototype.title = '';
    return user_group;
  })();
  user_group.prototype = core.mixin(user_group.prototype, core.object.prototype);
  exports.user_group = user_group;
}).call(this);
