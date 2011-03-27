core = std('import core')

mixin = () ->
	return core.object.create(
		core.object::,
		core.trait.compose(
			core.trait.override.call(arguments)
		)
	)

exports.mixin = mixin