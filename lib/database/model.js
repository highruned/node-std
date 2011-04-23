(function() {
  var core, model;
  core = std('import core');
  /*
  Events:
  	pre_persist
  	post_persist
  	pre_update
  	post_update
  	pre_remove
  	post_remove
  	pre_load
  	post_load
  	pre_refresh
  	post_refresh
  */
  model = (function() {
    function model() {}
    model.prototype.refresh = function() {};
    model.prototype.remove = function() {};
    model.prototype.save = function(callback) {
      var err, res;
      err = null;
      res = null;
      if (!this.service) {
        return callback(err, res);
      }
      return this.service.save_model(this, callback);
    };
    model.prototype.set_service = function(service) {
      return this.service = service;
    };
    model.prototype.id = null;
    model.prototype.service = null;
    return model;
  })();
  model.prototype = core.mixin(model.prototype, core.backbone.model.prototype, core.behavior.timestamp.prototype, core.base.prototype);
  core.utility.bind(core.backbone.model, model.prototype)();
  exports.model = model;
}).call(this);
