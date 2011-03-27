core = std('import core')

class model
	constructor: () ->

model:: = core.object.create(
	core.object::,
	core.trait.compose(
		core.trait.override(
			core.trait(core.base::),
			core.trait(core.backbone.model::) 
		)
	)
)

core.utility.bind(core.backbone.model, model::)()
	
exports.model = model