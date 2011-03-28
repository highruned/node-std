core = std('import core')

mixin = () ->
	result = core.object.create(
		core.object::,
		core.trait.compose(
			core.trait.override.call(arguments)
		)
	)
	
	result::create = (arguments...) ->
		return new result(arguments)
	
	return result

exports.mixin = mixin