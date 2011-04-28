core = std 'import core'
input = std 'import input'

class device
	constructor: () ->
		$(document).bind 'mousewheel', (event, delta) =>
			
	   	@emit 'mouse_wheel', delta
	    
	    return false
  
device:: = core.mixin device::, input.device::

exports.device = device


