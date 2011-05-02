core = std 'import core'
game = std 'import game'
math = std 'import math'
debug = std 'import debug'
gfx = std 'import gfx'

class player
	constructor: () ->
		debug.write '[game.player] Initializing player.', this, {level: 9}
		
		@set_position @position
	
	deconstructor: () ->
		@model.remove()
	
	move: (direction) ->
		if !@control
			return # we aint in control
		
		if direction.x == 0 && direction.y == 0
			return # we aint goin no wheres!
		
		@position.x += direction.x
		@position.y += direction.y
		
		@set_position @position
		
	set_position: (@position) ->
		@emit 'set_position'
		
		if @control
			@stream.send
				command: 'update<player:position>'
				position: @position
			
			return
		
		debug.write '[game.player] Updating player position.', @position, {level: 9}
	
	draw: (camera) ->
		@model.css
			left: ((@position.x - camera.position.x) * @speed) + camera.viewport.width / 2,
			top: (((@position.y * -1) + camera.position.y) * @speed) + camera.viewport.height / 2

	model: null
	control: false
	position: new math.vector
	speed: 50
	stream: null
	camera: new gfx.camera
	id: null

player:: = core.mixin player::, game.npc::

exports.player = player