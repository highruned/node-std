core = std 'import core'

class scene
	constructor: () ->

	update: () ->
	
	camera: null
	world: null

scene:: = core.mixin scene::, core.object::

exports.scene = scene