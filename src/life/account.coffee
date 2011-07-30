core = std 'core' 

base = core.mixin core.base

class account extends base
	constructor: (options) ->
		$.extend(@, options)

	id: null
	type: null
	person: null
	
	
exports.account = account