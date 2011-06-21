core = std 'import core'

base = core.mixin core.event_emitter

class device extends base
	constructor: () ->

exports.device = device