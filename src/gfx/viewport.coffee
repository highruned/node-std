core = std 'import core'

base = core.mixin core.base

class viewport extends base
	constructor: () ->

	width: 0
	height: 0

exports.viewport = viewport