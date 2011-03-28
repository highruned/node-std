core = std('import core')
backbone = require('backbone')

class controller
	constructor: () ->

controller:: = core.object.create(
	core.object::,
	core.trait.compose(
		core.trait.override(
			core.trait(controller::),
			core.trait(core.base::),   
			core.trait(backbone.controller::)
		)
	)
)

core.utility.bind(backbone.controller, controller::)()
	
exports.controller = controller