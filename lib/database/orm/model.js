(function() {
  var core, database, model;
  core = std('import core');
  database = std('database');
  model = (function() {
    function model() {}
    return model;
  })();
  model.prototype = core.mixin(model.prototype, database.model.prototype);
  exports.model = model;
}).call(this);
