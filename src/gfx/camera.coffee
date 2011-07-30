core = std 'import core'
math = std 'import math'

base = core.mixin core.object

class camera extends base
	constructor: () ->
	
	viewport: 
		width: 0
		height: 0
	position: new math.vector
		x: 0
		y: 0
		z: 0
	orientation: new math.vector
		x: 1
		y: 1
		z: 1
	target: null

exports.camera = camera