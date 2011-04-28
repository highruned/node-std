core = std 'import core'
game = std 'import game'
math = std 'import math'
gfx = std 'import gfx'

class world
	constructor: () ->
		update_camera_position = () =>
			@camera.viewport.width = $(window).width()
			@camera.viewport.height = $(window).height()
		
		update_camera_position()
		
		$(window).resize update_camera_position
	
	move: (direction) ->
		@position.x += direction.x
		@position.y += direction.y
		
		@set_position @position
		
	set_position: (@position) ->
		debug.write 'updated world position', @position
		
	draw: () ->
		left = (@position.x + @camera.position.x) * @speed * -1
		top = (@position.y + @camera.position.y) * @speed
		
		@model.css
			'left': left
			'top': top
		
		for i, player of @players
			player.draw()

	model: null
	position: new math.vector
	camera: new gfx.camera
	speed: 50
	players: {}
	
world:: = core.mixin world::, core.base::

exports.world = world