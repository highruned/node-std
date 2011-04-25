(function() {
  var core, service;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  core = std('import core');
  service = (function() {
    function service() {}
    service.prototype.setup_model = function(model) {
      model.service = this;
      model.bind('change', __bind(function(property) {
        return this.adapter;
      }, this));
      return model.contractors.bind('add', __bind(function(item) {
        return this.adapter.lpush(item);
      }, this));
    };
    service.prototype.set_adapter = function(adapter) {
      this.adapter = adapter;
      return this.adapter.set_service(this);
    };
    service.prototype.save_model = function(model, callback) {
      this.trigger('before_save');
      this.adapter.save(model.id, model.serialize(), function(err, res) {
        if (res.ok) {
          model.id = res.id;
          model.revision = res.rev;
        }
        return callback(err, res);
      });
      return this.trigger('after_save');
    };
    service.prototype.id = null;
    service.prototype.models = core.collection;
    service.prototype.adapter = null;
    service.prototype.pool = database.connection_pool;
    return service;
  })();
  service.prototype = core.mixin(service.prototype, core.base.prototype);
  exports.service = service;
}).call(this);
