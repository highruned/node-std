core = std('core')
backbone = require('backbone')

class collection
	constructor: () ->
	
	iterate: () ->
	
	#add: () ->
	
	#remove: () ->

collection:: = core.mixin(collection::, core.base::, backbone.collection::)

core.utility.bind(backbone.collection, collection::)()

exports.collection = collection