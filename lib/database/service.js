(function() {
  var base, core, service;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  }, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  core = std('import core');
  base = core.mixin(core.base);
  service = (function() {
    function service() {}
    __extends(service, base);
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
  exports.service = service;
}).call(this);
