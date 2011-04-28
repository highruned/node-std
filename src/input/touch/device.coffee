core = std 'import core'
input = std 'import input'

class device
	constructor: () ->
		$(document).swipe
			swipeLeft: () =>
				@emit 'swipe_left'
			
			swipeRight: () =>
				@emit 'swipe_right'
	
device:: = core.mixin device::, input.device::

exports.device = device

