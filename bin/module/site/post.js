(function() {
  var core, framework, post;
  core = include('core');
  framework = include('framework');
  post = (function() {
    function post(name) {
      this.name = name;
    }
    post.prototype.move = function(meters) {
      return console.log(this.name + " moved " + meters + "m.");
    };
    post.prototype.climb = function(meters) {
      return console.log(this.name + " climbed " + meters + "m.");
    };
    post.prototype.up_votes = 0;
    post.prototype.down_votes = 0;
    post.prototype.rating = 0;
    post.prototype.text = '';
    post.prototype.views = 0;
    return post;
  })();
  post.prototype = core.object.create(core.object.prototype, core.trait.compose(core.trait.override(core.trait(post.prototype), core.trait(framework.mvc.model.prototype))));
  exports.post = post;
}).call(this);
