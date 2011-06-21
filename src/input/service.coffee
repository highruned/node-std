core = std 'import core'

base = core.mixin core.object

class service extends base
	constructor: () ->

exports.service = service

