core = std 'import core'
input = std 'import input'
math = std 'import math'

base = core.mixin input.device

class device extends base
	constructor: () ->
		$(document).bind 'mousewheel', (event, delta) =>
			if delta > 0
	   		@emit 'wheel_up', math.abs(delta)
	   	else
	   		@emit 'wheel_down', math.abs(delta)
	    
	    return false

exports.device = device


