backbone = require('backbone')

core = std 'import core'

class controller
	constructor: () ->

controller:: = core.mixin controller::, core.base::, backbone.Controller::

core.utility.bind(backbone.Controller, controller::)()
	
exports.controller = controller