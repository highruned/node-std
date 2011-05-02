var exec = require('child_process').exec;

exec('coffee -wc -o /repo/node-std/lib /repo/node-std/src', function(error, stdout, stderr) {});