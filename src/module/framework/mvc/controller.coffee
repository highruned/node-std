core = std('import core')

class controller
	constructor: () ->

controller:: = core.object.create(
	core.object::,
	core.trait.compose(
		core.trait.override(
			core.trait(controller::),
			core.trait(core.base::),   
			core.trait(core.backbone.controller::)
		)
	)
)

core.utility.bind(core.backbone.controller, controller::)()
	
exports.controller = controller