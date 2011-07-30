core = std 'import core'
math = std 'import math'
game = std 'import game'

base = core.mixin core.event_emitter

class object extends base
	constructor: (options) ->
		$.extend(true, @, options)

	draw: (camera) ->
		@model.css
			width: @width / @height * camera.orientation.z + 'px'
			height: @height / @width * camera.orientation.z + 'px'
			top: @position.y * camera.orientation.z + 'px'
			left: @position.x * camera.orientation.z + 'px'

	model: null
	position: new math.vector
	target: null
	width: 0
	height: 0
	depth: 0

exports.object = object