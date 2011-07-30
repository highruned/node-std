core = std 'import core'

base = core.mixin core.base

class connection_pool extends base
	constructor: () ->
	
	connections: core.collection

exports.connection_pool = connection_pool