core = std('import core')

mixin = () ->
	for argument, i in arguments
		arguments[i] = core.trait(argument)
	
	result = Object.create(
		Object::,
		core.trait.compose(
			core.trait.override.apply(null, arguments)
		)
	)

	result.create = (arguments...) ->
		return new result(arguments...)
	
	return result

exports.mixin = mixin