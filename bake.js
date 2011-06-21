var spawn = require('child_process').spawn;
var sys = require('sys');

var exec = function(command, params) {
	var coffee = spawn(command, params);
	
	coffee.stdout.on('data', function(data) {
	  sys.print(data.asciiSlice(0, data.length));
	});
	
	coffee.stderr.on('data', function(data) {
	  sys.print(data.asciiSlice(0, data.length));
	});
};

exec('coffee', ['-wco', 'lib', 'src']);