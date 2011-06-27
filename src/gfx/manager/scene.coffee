core = std 'import core'

base = core.mixin core.object

class scene extends base
	constructor: () ->

	update: () ->
	
	camera: null
	world: null

exports.scene = scene