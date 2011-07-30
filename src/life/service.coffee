core = std 'core' 

base = core.mixin core.base

class service extends base
	constructor: (options) ->
		$.extend(@, options)

	add_person: () ->
	
	get_random_person: () ->
	
	
exports.service = service