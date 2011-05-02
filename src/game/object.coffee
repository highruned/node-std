core = std 'import core'
game = std 'import game'

class object
	constructor: () ->

	draw: (camera) ->
		left = (@position.x + @target.position.x) * @speed * -1
		top = (@position.y + @target.position.y) * @speed
		
		@model.css
			'left': left
			'top': top

	model: null
  
object:: = core.mixin object::, core.event_emitter::

exports.object = object