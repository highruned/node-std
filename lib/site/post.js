(function() {
  var core, post;
  core = std('import core');
  post = (function() {
    function post() {}
    post.prototype.move = function(meters) {
      return console.log(this.title + " moved " + meters + "m.");
    };
    post.prototype.climb = function(meters) {
      return console.log(this.title + " climbed " + meters + "m.");
    };
    post.prototype.up_votes = 0;
    post.prototype.down_votes = 0;
    post.prototype.rating = 0;
    post.prototype.content = '';
    post.prototype.views = 0;
    post.prototype.title = '';
    return post;
  })();
  post.prototype = core.mixin(post.prototype, core.object.prototype);
  exports.post = post;
}).call(this);
