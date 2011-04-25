core = std('import core')

class connection_pool
	constructor: () ->
	
	connections: core.collection
	
connection_pool:: = core.mixin(connection_pool::, core.base::)

exports.connection_pool = connection_pool