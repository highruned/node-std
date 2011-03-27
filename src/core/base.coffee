core = std('import core')

class base
	constructor: () ->

base:: = core.object.create(
	core.object::,
	core.trait(base::) 
)

exports.base = base