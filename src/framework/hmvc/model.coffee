backbone = require('backbone')

core = std 'import core'

class model
	constructor: () ->

model:: = core.mixin model::, core.base::, backbone.Model::

core.utility.bind(backbone.Model, model::)()

exports.model = model