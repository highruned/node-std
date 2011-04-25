core = std('import core')
fs = require('fs')

class service
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
	
service:: = core.mixin(service::, core.base::)

exports.service = service