core = std 'import core'
game = std 'import game'
math = std 'import math'
gfx = std 'import gfx'
debug = std 'import debug'

class world
	constructor: () ->
		update_camera_position = () =>
			@camera.viewport.width = $(window).width()
			@camera.viewport.height = $(window).height()
		
		update_camera_position()
		

		$(window).resize update_camera_position

	init: (@model) ->
		@emit 'init'
	
	move: (direction) ->
		@position.x += direction.x
		@position.y += direction.y
		
		@set_position @position
		
	add_object: (object) ->
		debug.write '[game.world] Adding object.', object, {level: 9}
		
		if !object.id
			return debug.warn '[game.world] Object id is null.', object, {level: 9}	
		
		@objects[object.id] = object
		
	target_player: (player) ->
		@target = player
	
	add_player: (player) ->
		debug.write '[game.world] Adding player.', player, {level: 9}
		
		if !player.id
			return debug.warn '[game.world] Player id is null.', player, {level: 9}	
		
		@players[player.id] = player
		
	find_player_by: (key, value) ->
		if key == 'id'
			player = @players[value]
		else
			# check all player attributes for the value, using the last found for next step
			for i, player in @players
				if player[key] == value
					break
		
		if !player
			debug.warn '[game.world] Cannot find player.', key, value, {level: 9}	
		
		return player
	
	remove_player: (player) ->
		if !player
			return
	
		debug.write '[game.world] Removing player.', player.id, {level: 9}
		
		core.object::remove @players, player.id
		
		player.deconstructor()
	
	set_position: (@position) ->
		debug.write '[game.world] Updated world position.', @position, {level: 9}
		
	update: () ->
		if @target
			@camera.position.x = @target.position.x
			@camera.position.y = @target.position.y
		
	draw: () ->
		left = (@position.x + @camera.position.x) * @speed * -1
		top = (@position.y + @camera.position.y) * @speed
		
		@model.css
			'left': left
			'top': top
		
		#for i, object of @objects
		#	object.draw @camera
		
		for i, player of @players
			player.draw @camera

	model: null
	position: new math.vector
	camera: new gfx.camera
	speed: 50
	players: {}
	objects: {}
	target: null
	id: null
	
world:: = core.mixin world::, core.event_emitter::

exports.world = world