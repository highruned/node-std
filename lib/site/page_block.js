(function() {
  var core, page_block;
  core = std('import core');
  page_block = (function() {
    function page_block() {}
    page_block.prototype.content = '';
    page_block.prototype.title = '';
    return page_block;
  })();
  page_block.prototype = core.mixin(page_block.prototype, core.object.prototype);
  exports.page_block = page_block;
}).call(this);
