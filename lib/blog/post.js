(function() {
  var core, post, site;
  core = std('import core');
  site = std('import site');
  post = (function() {
    function post(name) {
      this.name = name;
    }
    post.prototype.move = function(millimeters) {
      return debug.trace(this.name + " moved " + millimeters + "mm.");
    };
    post.prototype.prompt_color = function() {
      return this.set({
        color: '#fff'
      });
    };
    return post;
  })();
  post.prototype = core.mixin(post.prototype, site.post.prototype);
  exports.post = post;
}).call(this);
