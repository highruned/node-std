core = std 'core' 

base = core.mixin core.base

class email extends base
	constructor: (@user, @host) ->
		

	user: null
	host: null
	
exports.email = email