(function() {
  var backbone, base, core, view;
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
  base = core.mixin(backbone.view);
  view = (function() {
    function view() {}
    __extends(view, base);
    return view;
  })();
  core.utility.bind(backbone.view, view.prototype)();
  exports.view = view;
}).call(this);
