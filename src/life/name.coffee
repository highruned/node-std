core = std 'core' 

base = core.mixin core.base

class name extends base
	constructor: (@first, @middle, @last) ->
		

	first: null
	middle: null
	last: null
	
exports.name = name