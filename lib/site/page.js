(function() {
  var core, page;
  core = std('import core');
  page = (function() {
    function page() {}
    page.prototype.content = '';
    page.prototype.views = 0;
    page.prototype.title = '';
    page.prototype.blocks = core.collection;
    return page;
  })();
  page.prototype = core.mixin(page.prototype, core.object.prototype);
  exports.page = page;
}).call(this);
