core = std 'import core'
game = std 'import game'

base = core.mixin core.event_emitter

class object extends base
	constructor: () ->

	draw: (camera) ->
		left = (@position.x + @target.position.x) * @speed * -1
		top = (@position.y + @target.position.y) * @speed
		
		@model.css
			'left': left
			'top': top

	model: null

exports.object = object