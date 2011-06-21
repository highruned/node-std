core = std 'import core'

backbone = require('backbone')

mixin = core.mixin core.object, backbone.Model

class base extends mixin
	constructor: () ->
		

core.utility.bind(backbone.Model, base::)()

exports.base = base