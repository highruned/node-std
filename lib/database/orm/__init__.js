(function() {
  var backbone;
  backbone = std_require('core.backbone').backbone;
  backbone.sync = function(method, model) {
    return console.log(method + ": " + JSON.stringify(model));
  };
  exports.orm = {
    model: std_require('database.orm.model').model
  };
}).call(this);
