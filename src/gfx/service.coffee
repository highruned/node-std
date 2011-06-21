core = std 'import core'

base = core.mixin core.event_emitter

class service extends base
	constructor: () ->
		update = () =>
			@emit 'frame'
			
			setTimeout update, 1000 / (60 * 2) # update at 60 fps
		
		update()

exports.service = service