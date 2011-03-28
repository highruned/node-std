core = std('import core')
debug = std('import debug')
fs = require('fs')

class trace
	constructor: (message, options = {level: 10}) ->
		@resources = new os.file(debug.config.trace['path'])
	
	write: (message, options = {level: 10}) ->
		if(options['level'] < debug.config.trace['level'])
			return # don't trace something we're not interested in
	
		message = core.string.format("[%s] %s\n", core.datetime.create().format('%F %T'), message);

		if(!debug.config.trace['silent']) # do we want output?
			console.log message;
		
		os.file.write(message)
	
	resource: null
	
trace:: = core.mixin(trace::, core.base::)

exports.trace = trace