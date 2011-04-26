core = std('import core')
backbone = require('backbone')

class view
	constructor: () ->

view:: = core.object.create(
	core.object::,
	core.trait.compose(
		core.trait.override(
			core.trait(view::),
			core.trait(core.base::),   
			core.trait(backbone.view::)
		)
	)
)

core.utility.bind(backbone.view, view::)()
	
exports.view = view