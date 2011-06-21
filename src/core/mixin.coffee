core = std 'import core'

mixin = () ->
	traits = arguments
	arguments = [].slice.call(traits)
	traits = [].slice.call(traits)
	
	
	for trait, i in arguments
		if(i > 0)
			trait::__super__ = traits[i-1]::
		
		traits[i] = core.trait(trait::)
	
	console.log('a', traits)
	result = Object.create(
		Object::,
		core.trait.compose(
			core.trait.override.apply(null, traits)
		)
	)
	
	#result.create = (arguments...) ->
	#	return new result(arguments...)
	
	fn = arguments[0]
			
	for key, value of result
		fn.prototype[key] = value
		
	return fn

exports.mixin = mixin