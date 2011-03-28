core = std('import core')
database = std('database')

class model
	

	name: core.trait.required


model:: = core.mixin(model::, database.model::)

exports.model = model