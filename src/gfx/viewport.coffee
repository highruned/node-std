core = std 'import core'

class viewport
	constructor: () ->

	width: 0
	height: 0
	
viewport:: = core.mixin viewport::, core.base::

exports.viewport = viewport