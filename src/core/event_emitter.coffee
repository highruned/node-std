core = std 'import core'

base = core.mixin core.base

class event_emitter extends base
	constructor: () ->
	
	on: (name, callback) ->
		@events[name].push callback
	
	emit: (name, params...) ->
		for i, c1 of @events[name]?
			c1 params...
	
	events: {}

exports.event_emitter = event_emitter