core = std 'import core'

base = core.mixin Object

class object extends base
	constructor: () ->
	
	to_array: () ->
		return []

	remove: (list, key) ->
		delete list[key]

exports.object = object