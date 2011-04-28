core = std('import core')

class event_emitter
	constructor: () ->
	
	on: (name, callback) ->
		@events[name].push callback
	
	emit: (name, params...) ->
		for i, c1 of @events[name]?
			c1 params...
	
	events: {}
	
event_emitter:: = core.mixin event_emitter::, core.base::

exports.event_emitter = event_emitter