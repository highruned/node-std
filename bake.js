var spawn = require('child_process').spawn;
var sys = require('sys');

var exec = function(command, params) {
	var subprocess = spawn(command, params);
	
	subprocess.stdout.on('data', function(data) {
	  sys.print(data.asciiSlice(0, data.length));
	});
	
	subprocess.stderr.on('data', function(data) {
	  sys.print(data.asciiSlice(0, data.length));
	});
};

exec('coffee', ['-wco', __dirname + '/lib', __dirname + '/src']);