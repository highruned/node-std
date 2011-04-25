core = std('import core')

class service
	constructor: () ->
	
service:: = core.mixin service::, core.base::

exports.service = service