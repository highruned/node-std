core = std 'import core'
input = std 'import input'

base = core.mixin input.device

class device extends base
	constructor: () ->
		$(document).swipe
			swipeLeft: () =>
				@emit 'swipe_left'
			
			swipeRight: () =>
				@emit 'swipe_right'

exports.device = device

