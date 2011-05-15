backbone = require('backbone')

core = std 'import core'

class view
	constructor: () ->

model:: = core.mixin view::, core.base::, backbone.View::

core.utility.bind(backbone.view, view::)()
	
exports.view = view