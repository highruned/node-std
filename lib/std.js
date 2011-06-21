(function() {
  var fs, jsdom, master, std, std_import;
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
    var base_path, new_path, success, _i, _len, _ref;
    if (use_modules == null) {
      use_modules = true;
    }
    /*
    	for path in std::paths
    		do(path) ->
    			fs.readFile path, (err, contents) ->
    				#compile path, contents.toString()
    	*/
    success = false;
    console.log(path);
    if (use_modules) {
      _ref = std.prototype.paths;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        base_path = _ref[_i];
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
          try {
            if (path.substr(0, 7) === 'import ') {
              path = path.substr(7);
            }
            new_path = base_path + path.replace(/\./g, '/') + '.js';
            if (new_path.search('std') === 0) {
              new_path.replace('std', 'std/lib');
            }
            success = require(new_path);
          } catch (e) {
            if (e.message.replace('std/lib/', './') !== "Cannot find module '" + new_path + "'") {
              throw e;
            }
            new_path = base_path + path.replace(/\./g, '/') + '/__init__.js';
            console.log(new_path);
            try {
              success = require(new_path);
              break;
            } catch (e) {
              if (!e.message) {
                throw e;
              }
              if (e.message.replace('std/lib/', './') !== "Cannot find module '" + new_path + "'") {
                throw e;
              }
              continue;
            }
          }
        }
      }
    }
    if (success === false) {
      try {
        success = require(path);
      } catch (e) {
        throw "Cannot find module: " + path;
      }
    }
    debug.info(success);
    return success;
  };
  std.prototype.paths = ['./'];
  /*
  Usage:
  	std = require('std').std
  	std.add_path('./modules')
  	std('import my_module')
  */
  std.prototype.add_path = function(path) {
    console.log(path);
    return this.paths.push(path);
  };
  /*
  Use internally because you can't std() within a package's __init__
  */
  std_import = function(path, use_modules) {
    var base_path, new_path, success, _i, _len, _ref;
    if (use_modules == null) {
      use_modules = true;
    }
    success = false;
    console.log(path);
    if (use_modules) {
      _ref = std.prototype.paths;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        base_path = _ref[_i];
        try {
          new_path = base_path + path.replace(/\./g, '/') + '.js';
          if (new_path.search('std') === 0) {
            new_path.replace('std', 'std/lib');
          }
          console.log(new_path);
          success = require(new_path);
        } catch (e) {
          if (!e.message) {
            throw e;
          }
          if (e.message.replace('std/lib/', './') !== "Cannot find module '" + new_path + "'") {
            throw e;
          }
          new_path = base_path + path.replace(/\./g, '/') + '/__init__.js';
          console.log(new_path);
          try {
            success = require(new_path);
            break;
          } catch (e) {
            if (!e.message) {
              throw e;
            }
            if (e.message.replace('std/lib/', './') !== "Cannot find module '" + new_path + "'") {
              throw e;
            }
            continue;
          }
        }
      }
    }
    if (success === false) {
      try {
        success = require(path);
      } catch (e) {
        throw "Cannot find module: " + path;
      }
    }
    debug.info(success);
    return success;
  };
  if (typeof window !== "undefined" && window !== null) {
    master = window;
    master['global'] = window;
    master['env'] = 'browser';
  } else if (typeof global !== "undefined" && global !== null) {
    master = global;
    jsdom = require('jsdom');
    master['document'] = jsdom.jsdom('<html><head></head><body></body></html>');
    master['window'] = document.createWindow();
    master['jQuery'] = master['$'] = require('jquery').create(window);
    master['env'] = 'node';
    window.location.host = 'localhost';
    jQuery.ready();
    $.isReady = true;
  }
  if (!global.debug) {
    global.debug = {
      info: function() {}
    };
  }
  exports.std = master['std'] = std;
  exports.std_import = master['std_import'] = std_import;
}).call(this);
