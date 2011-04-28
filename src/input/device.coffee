core = std 'import core'

class device
	constructor: () ->

	
device:: = core.mixin device::, core.event_emitter::

exports.device = device