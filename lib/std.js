(function() {
  var fs, master, std, std_import;
  fs = require('fs');
  /*
  Use to import packages or package contents from the STD.

  Usage:
  	core = std('import core')
  	string = std('import core.string')
  	object, string = std('from core import object, string')
  	string = std('from core import string')
  */
  std = function(path, use_modules) {
    var new_path;
    if (use_modules == null) {
      use_modules = true;
    }
    /*
    	for path in std::paths
    		do(path) ->
    			fs.readFile path, (err, contents) ->
    				#compile path, contents.toString()
    	*/
    if (path.substr(0, 8) === 'import *') {
      return {
        core: require('./' + 'core' + '/__init__.js'),
        site: require('./' + 'site' + '/__init__.js'),
        blog: require('./' + 'blog' + '/__init__.js'),
        debug: require('./' + 'debug' + '/__init__.js'),
        framework: require('./' + 'framework' + '/__init__.js'),
        database: require('./' + 'database' + '/__init__.js')
      };
    } else {
      if (use_modules) {
        try {
          if (path.substr(0, 7) === 'import ') {
            path = path.substr(7);
          }
          new_path = './' + path.replace(/\./g, '/') + '.js';
          return require(new_path);
        } catch (e) {
          if (e.message !== "Cannot find module '" + new_path + "'") {
            throw e;
          }
          new_path = './' + path.replace(/\./g, '/') + '/__init__.js';
          return require(new_path);
        }
      }
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
  std_import = function(path, use_modules) {
    var new_path;
    if (use_modules == null) {
      use_modules = true;
    }
    if (use_modules) {
      try {
        new_path = './' + path.replace(/\./g, '/') + '.js';
        return require(new_path);
      } catch (e) {
        if (e.message !== "Cannot find module '" + new_path + "'") {
          throw e;
        }
        new_path = './' + path.replace(/\./g, '/') + '/__init__.js';
        return require(new_path);
      }
      return require(path);
    }
  };
  if (typeof global != "undefined" && global !== null) {
    master = global;
  } else if (typeof window != "undefined" && window !== null) {
    master = window;
  }
  master['window'] = master;
  exports.std = master['std'] = std;
  exports.std_import = master['std_import'] = std_import;
}).call(this);
