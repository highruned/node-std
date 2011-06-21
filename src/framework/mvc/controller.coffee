core = std 'import core'
backbone = require 'backbone'

base = core.mixin core.base, backbone.Controller

class controller extends base
	constructor: () ->

core.utility.bind(backbone.Controller, controller::)()
	
exports.controller = controller