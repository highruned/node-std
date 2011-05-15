core = std 'import core'
input = std 'import input'
math = std 'import math'

class device
	constructor: () ->
		$(document).bind 'mousewheel', (event, delta) =>
			console.log delta
			if delta > 0
	   		@emit 'wheel_up', math.abs(delta)
	   	else
	   		@emit 'wheel_down', math.abs(delta)
	    
	    return false
  
device:: = core.mixin device::, input.device::

exports.device = device


