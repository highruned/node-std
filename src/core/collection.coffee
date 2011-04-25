core = std('core')
backbone = require('backbone')

class collection
	constructor: () ->
	
	iterate: () ->
	
	add: (item) ->
		@items.push item
	
	#remove: () ->
	
	items: []

collection:: = core.mixin(collection::, core.base::, backbone.Collection::)

core.utility.bind(backbone.Collection, collection::)()

exports.collection = collection