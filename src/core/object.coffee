core = std('core')

class object
	constructor: () ->
	
	to_array: () ->
		return []

	remove: (list, key) ->
		delete list[key]

object:: = core.mixin(object::, Object::)

exports.object = object