core = std 'import core'
input = std 'import input'

class device
	constructor: () ->
		@title[input.key.none] = "none"
		
	is_key_down: (key) ->
		return if @state[key] then true else false
	
	set_key_down: (key) ->
		@state[key] = true
		
	set_key_up: (key) ->
		@state[key] = false
	
	clear_state: () ->
		@state = []
	
	key_to_string: (key) ->
		return @title[key]
	
	state: []
	title: {}
  
device:: = core.mixin device::, core.object::

exports.device = device