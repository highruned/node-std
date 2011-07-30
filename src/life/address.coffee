core = std 'core' 

base = core.mixin core.base

class address extends base
	constructor: (options) ->
		$.extend(@, options)

	country: null
	state: null
	street: null
	postal_code: null
	
exports.address = address