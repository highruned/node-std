core = std 'import core'
math = std 'import math'

base = core.mixin core.object

class camera extends base
	constructor: () ->
	
	viewport: 
		width: 0
		height: 0
	position: new math.vector
	target: null

exports.camera = camera