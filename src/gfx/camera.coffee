core = std('import core')

class camera
	constructor: () ->
	
	viewport: 
		width: 0
		height: 0
	position: 
		x: 0
		y: 0
	target: null
		
camera:: = core.mixin(camera::, core.object::)

exports.camera = camera