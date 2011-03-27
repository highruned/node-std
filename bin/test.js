(function() {
  var b1, blog, fs;
  fs = require('fs');
  global['include'] = function(path, use_modules) {
    var new_path;
    if (use_modules == null) {
      use_modules = true;
    }
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
  blog = include('blog');
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
