(function() {
  var base, core, page;
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
  page = (function() {
    function page() {}
    __extends(page, base);
    page.prototype.content = '';
    page.prototype.views = 0;
    page.prototype.title = '';
    page.prototype.blocks = core.collection;
    return page;
  })();
  exports.page = page;
}).call(this);
