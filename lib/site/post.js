(function() {
  var base, core, post;
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
  post = (function() {
    function post() {}
    __extends(post, base);
    post.prototype.up_votes = 0;
    post.prototype.down_votes = 0;
    post.prototype.rating = 0;
    post.prototype.content = '';
    post.prototype.views = 0;
    post.prototype.title = '';
    return post;
  })();
  exports.post = post;
}).call(this);
