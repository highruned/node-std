core = std 'import core'
math = std 'import math'

class camera
	constructor: () ->
	
	viewport: 
		width: 0
		height: 0
	position: new math.vector
	target: null
		
camera:: = core.mixin camera::, core.object::

exports.camera = camera