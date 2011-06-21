(function() {
  var backbone, base, controller, core;
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
  base = core.mixin(core.base, backbone.Controller);
  controller = (function() {
    function controller() {}
    __extends(controller, base);
    return controller;
  })();
  core.utility.bind(backbone.Controller, controller.prototype)();
  exports.controller = controller;
}).call(this);
