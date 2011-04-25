core = std('import core')
backbone = require('backbone')

class model
	constructor: () ->

model:: = core.mixin(core.base::, backbone.Model::)

core.utility.bind(backbone.Model, model::)()

exports.model = model