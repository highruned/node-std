core = std 'import core'
backbone = require 'backbone'

base = core.mixin core.base, backbone.Model

class model extends base
	constructor: () ->

core.utility.bind(backbone.Model, model::)()

exports.model = model