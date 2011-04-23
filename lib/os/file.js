(function() {
  var core, file, fs;
  core = std('core');
  fs = require('fs');
  file = (function() {
    function file() {}
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
  file.prototype = core.mixin(file.prototype, core.base.prototype);
  exports.file = file;
}).call(this);
