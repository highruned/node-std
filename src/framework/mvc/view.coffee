core = std('import core')

class view
	constructor: () ->

view:: = core.object.create(
	core.object::,
	core.trait.compose(
		core.trait.override(
			core.trait(view::),
			core.trait(core.base::),   
			core.trait(core.backbone.view::)
		)
	)
)

core.utility.bind(core.backbone.view, view::)()
	
exports.view = view