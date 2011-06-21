(function() {
  var base, core, file, fs;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('core');
  fs = require('fs');
  base = core.mixin(core.base);
  file = (function() {
    function file() {
      file.__super__.constructor.apply(this, arguments);
    }
    __extends(file, base);
    file.prototype.construct = function(path) {
      this.path = path;
    };
    file.prototype.write = function(message) {
      return fs.open(this.path, 'a', 666, function(e, id) {
        return fs.write(id, message, null, 'utf8', function() {
          return fs.close(id, function() {
            return console.log('file closed');
          });
        });
      });
    };
    file.prototype.path = null;
    return file;
  })();
  exports.file = file;
}).call(this);
