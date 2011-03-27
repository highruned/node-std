core = include('core')

class container
	constructor: () ->

container:: = core.object.create(
	core.object::,
	core.trait.compose(
		core.trait.override(
			core.trait(core.container::),
			core.trait(core.base::),
			core.trait(core.backbone.container::)
		)
	)
)

core.utility.bind(core.backbone.container, container::)()
	
exports.container = container