core = std('import core')
backbone = require('backbone')

class controller
	constructor: () ->

controller:: = core.mixin(controller::, core.base::, backbone.Controller::)

core.utility.bind(backbone.Controller, controller::)()
	
exports.controller = controller