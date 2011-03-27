(function() {
  /*
  Use to import packages or package contents from the STD.

  Usage:
  	core = std('import core')
  	string = std('import core.string')
  	object, string = std('from core import object, string')
  	string = std('from core import string')
  */  var b1, blog;
  global['std'] = function(path, use_modules) {
    var fs, new_path;
    if (use_modules == null) {
      use_modules = true;
    }
    fs = require('fs');
    if (use_modules) {
      try {
        if (path.substr(0, 7) === 'import ') {
          path = path.substr(7);
        }
        new_path = './module/' + path.replace(/\./g, '/') + '.js';
        if (fs.statSync(new_path).isFile()) {
          path = new_path;
        } else {
          path = './module/' + path.replace(/\./g, '/') + '/__init__.js';
        }
      } catch (e) {
        path = './module/' + path.replace(/\./g, '/') + '/__init__.js';
      }
    }
    console.log(path);
    return require(path);
  };
  /*
  Use internally because you can't std() within a package's __init__
  */
  global['std_require'] = function(path, use_modules) {
    var fs, new_path;
    if (use_modules == null) {
      use_modules = true;
    }
    fs = require('fs');
    if (use_modules) {
      try {
        new_path = './module/' + path.replace(/\./g, '/') + '.js';
        if (fs.statSync(new_path).isFile()) {
          path = new_path;
        } else {
          path = './module/' + path.replace(/\./g, '/') + '/__init__.js';
        }
      } catch (e) {
        path = './module/' + path.replace(/\./g, '/') + '/__init__.js';
      }
    }
    console.log(path);
    return require(path);
  };
  blog = std('import blog');
  console.log(blog);
  b1 = new blog.post('abc');
  b1.move(5);
  b1.climb(10);
  b1.bind('change:color', function(item, color) {
    return console.log(color);
  });
  console.log(b1.set);
  b1.set({
    color: 'white'
  });
  b1.prompt_color();
  b1.bind('change:abc', function(item, value) {
    return console.log(item, value);
  });
  b1.set({
    abc: 'zyc'
  });
  setTimeout(function() {
    console.log(5);
    return 5000000000;
  });
}).call(this);
