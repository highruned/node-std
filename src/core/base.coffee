core = std('import core')
backbone = require('backbone')

class base
	constructor: () ->
		

base:: = core.mixin(core.object::, backbone.Model::)

core.utility.bind(backbone.Model, base::)()

exports.base = base