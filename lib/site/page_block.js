(function() {
  var base, core, page_block;
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
  page_block = (function() {
    function page_block() {}
    __extends(page_block, base);
    page_block.prototype.content = '';
    page_block.prototype.title = '';
    return page_block;
  })();
  exports.page_block = page_block;
}).call(this);
