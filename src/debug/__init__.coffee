exports.config =
	trace:
		silent: false
		level: 10 # represents the level of warnings/info you want logged, from 0-10. 0 being none. 10 being all.
		path: __dirname + '/log/trace.txt'

exports.trace = std_import('debug.trace').trace

exports.write = (message, level) ->
	if(!console?)
		window.console =
			log: () ->
		
		window.debug = 
			info: () ->
	
	console.log message