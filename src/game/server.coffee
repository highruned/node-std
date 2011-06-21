core = std 'import core'
debug = std 'import debug'
game = std 'import game'
math = std 'import math'

class server
	constructor: (@port) ->
		io = require 'socket.io'
		http = require 'http'
	
		debug.write "Starting game server...", {level: 9}
		
		@server = http.createServer (req, res) =>
		
		@server.listen @port
		
		socket = io.listen @server
		
		socket.on 'connection', (client) =>
			debug.write "Client connected.", {level: 9}
			
			client.id = math.floor math.random() * 99999
			client.player = new game.player
			client.player.id = math.floor math.random() * 99999
			
			@clients[client.id] = client
			
			client.on 'message', (message) =>
				debug.write "Client message received.", {level: 9}
				
				if message.command == 'update<player:position>'
					debug.write "Broadcasting player position.", message.position, {level: 9}
				
					client.player.position = math.vector::from_object(message.position)
				
					socket.broadcast
						command: message.command
						position: message.position
						player: 
							id: client.player.id
			
			client.on 'disconnect', () =>
				debug.write "Client disconnected."
				
				for i, c1 of @clients
					debug.write "Telling other player to remove player.", client.player, {level: 9}
					
					@clients[i].send
						command: 'remove<player>'
						player: 
							id: client.player.id
						control: false
				
				core.object::remove @clients, client.id
			
			debug.write "Telling new player to create world.", {level: 9}
			
			client.send
				command: 'create<world>'
			
			debug.write "Telling new player to create itself.", client.player, {level: 9}
			
			client.send
				command: 'create<player>'
				player: client.player
				control: true
				
			client.send
				command: 'target<player>'
				player: client.player
			
			for i, c1 of @clients
				if @clients[i].player.id == client.player.id
					continue #don't create ourself
				
				debug.write "Telling new player to create old player.", @clients[i].player, {level: 9}
				
				client.send
					command: 'create<player>'
					player: @clients[i].player
					control: false
				
				debug.write "Telling old player to create new player.", client.player, {level: 9}
				
				@clients[i].send
					command: 'create<player>'
					player: client.player
					control: false

	server: null
	port: 0
	clients: {}

server:: = core.mixin server::, core.base::

exports.server = server
