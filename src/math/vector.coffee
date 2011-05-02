core = std 'import core'

class vector
	constructor: (@x = 0, @y = 0, @z = 0, @w = 0) ->

	to_object: () ->
		return {x: @x, y: @y, z: @z, w: @w}

	from_object: (v1) ->
		return new vector(v1.x, v1.y, v1.z, v1.y)

	x: 0
	y: 0
	z: 0
	w: 0
	
vector:: = core.mixin vector::, core.object::

exports.vector = vector