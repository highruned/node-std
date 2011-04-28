core = std 'import core'
game = std 'import game'
math = std 'import math'

class player
	constructor: () ->
		debug.write 'initializing player', this
		
		@update_position()
	
	move: (direction) ->
		if !@control
			return # we aint in control
		
		if direction.x == 0 && direction.y == 0
			return # we aint goin no wheres!
		
		@position.x += direction.x
		@position.y += direction.y
		
		@set_position @position
	set_position: (@position) ->
		if @control
			socket.send
				command: 'update<player:position>'
				position: @position
			
			world.camera.position = @position
			
			return
		
		debug.write 'updating player position', @position
	draw: () ->
		@model.css
			left: ((@position.x - world.camera.position.x) * @speed) + world.camera.viewport.width / 2,
			top: (((@position.y * -1) + world.camera.position.y) * @speed) + world.camera.viewport.height / 2

	model: null
	control: false
	position: new math.vector
	speed: 50

player:: = core.mixin player::, game.npc::

exports.player = player