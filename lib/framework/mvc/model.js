(function() {
  var backbone, base, core, model;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('import core');
  backbone = require('backbone');
  base = core.mixin(core.base, backbone.Model);
  model = (function() {
    function model() {}
    __extends(model, base);
    return model;
  })();
  core.utility.bind(backbone.Model, model.prototype)();
  exports.model = model;
}).call(this);
