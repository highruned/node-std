(function() {
  /*
  Use to import packages or package contents from the STD.

  Usage:
  	core = std('import core')
  	string = std('import core.string')
  	object, string = std('from core import object, string')
  	string = std('from core import string')
  */  var std, std_require;
  std = function(path, use_modules) {
    var fs, new_path;
    if (use_modules == null) {
      use_modules = true;
    }
    fs = require('fs');
    /*
    	for path in std::paths
    		do(path) ->
    			fs.readFile path, (err, contents) ->
    				#compile path, contents.toString()
    	*/
    if (path.substr(0, 8) === 'import *') {
      return {
        core: require(__dirname + '/' + 'core' + '/__init__.js'),
        site: require(__dirname + '/' + 'site' + '/__init__.js'),
        blog: require(__dirname + '/' + 'blog' + '/__init__.js'),
        framework: require(__dirname + '/' + 'framework' + '/__init__.js'),
        database: require(__dirname + '/' + 'database' + '/__init__.js')
      };
    } else {
      if (use_modules) {
        try {
          if (path.substr(0, 7) === 'import ') {
            path = path.substr(7);
          }
          new_path = __dirname + '/' + path.replace(/\./g, '/') + '.js';
          if (fs.statSync(new_path).isFile()) {
            path = new_path;
          } else {
            path = __dirname + '/' + path.replace(/\./g, '/') + '/__init__.js';
          }
        } catch (e) {
          path = __dirname + '/' + path.replace(/\./g, '/') + '/__init__.js';
        }
      }
      console.log('std', use_modules, path);
      return require(path);
    }
  };
  std.prototype.paths = [];
  /*
  Usage:
  	std = require('std').std
  	std.add_path('./modules')
  	std('import my_module')
  */
  std.prototype.add_path = function(path) {
    return this.paths = path;
  };
  /*
  Use internally because you can't std() within a package's __init__
  */
  std_require = function(path, use_modules) {
    var fs, new_path;
    if (use_modules == null) {
      use_modules = true;
    }
    fs = require('fs');
    if (use_modules) {
      try {
        new_path = __dirname + '/' + path.replace(/\./g, '/') + '.js';
        if (fs.statSync(new_path).isFile()) {
          path = new_path;
        } else {
          path = __dirname + '/' + path.replace(/\./g, '/') + '/__init__.js';
        }
      } catch (e) {
        path = __dirname + '/' + path.replace(/\./g, '/') + '/__init__.js';
      }
    }
    console.log('std_require', use_modules, path);
    return require(path);
  };
  exports.std = global['std'] = std;
  exports.std_require = global['std_require'] = std_require;
}).call(this);
