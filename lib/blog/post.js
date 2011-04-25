(function() {
  var core, post, site;
  core = std('import core');
  site = std('import site');
  post = (function() {
    function post(name) {
      this.name = name;
    }
    post.prototype.move = function(millimeters) {
      return console.log(this.name + " moved " + millimeters + "mm.");
    };
    post.prototype.prompt_color = function() {
      return this.set({
        color: '#fff'
      });
    };
    return post;
  })();
  post.prototype = core.object.create(core.object.prototype, core.trait.compose(core.trait.override(core.trait(post.prototype), core.trait(site.post.prototype))));
  exports.post = post;
}).call(this);
