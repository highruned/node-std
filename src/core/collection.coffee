core = std 'import core'

backbone = require 'backbone'

base = core.mixin core.base, backbone.Collection

class collection extends base
	constructor: () ->
	
	iterate: () ->
	
	add: (item) ->
		@items.push item
	
	items: []

core.utility.bind(backbone.Collection, collection::)()

exports.collection = collection