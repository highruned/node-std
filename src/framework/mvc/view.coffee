core = std 'import core'
backbone = require 'backbone'

base = core.mixin backbone.view

class view extends base
	constructor: () ->

core.utility.bind(backbone.view, view::)()
	
exports.view = view