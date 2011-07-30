core = std 'import core'


base = core.mixin core.object

class vector extends base
	constructor: (options) ->
		$.extend(true, @, options)
	
	to_object: () ->
		return {x: @x, y: @y, z: @z, w: @w}

	from_object: (v1) ->
		return new vector
			x: v1.x
			y: v1.y
			z: v1.z
			y: v1.y

	x: 0
	y: 0
	z: 0
	w: 0
	

vector::one = new vector({x: 1, y: 1, z: 1, w: 1})

exports.vector = vector