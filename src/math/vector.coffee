core = std 'import core'

class vector
	constructor: (@x = 0, @y = 0, @z, @w) ->

	x: 0
	y: 0
	z: null
	w: null
	
vector:: = core.mixin vector::, core.base::

exports.vector = vector