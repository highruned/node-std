core = std 'import core'

class service
	constructor: () ->
		update = () =>
			@emit 'frame'
			
			setTimeout update, 1000 / (60 * 2) # update at 60 fps

service:: = core.mixin service::, core.event_emitter::

exports.service = service