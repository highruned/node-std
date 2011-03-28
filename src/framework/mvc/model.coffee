core = std('import core')
backbone = require('backbone')

class model
	constructor: () ->

model:: = core.mixin(core.base::, backbone.model::)

core.utility.bind(backbone.model, model::)()
	
exports.model = model