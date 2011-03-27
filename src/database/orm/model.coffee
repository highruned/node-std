core = std('import core')

class model
	constructor: () ->

	refresh: () ->
		# reload from db
	
	delete: () ->
		# delete from db
	
	id: null
	
model:: = core.mixin(core.base::, core.backbone.model::, core.behavior.timestamp::)

core.utility.bind(core.backbone.model, model::)()
	
exports.model = model