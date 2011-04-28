core = std 'import core'
debug = std 'import debug'
game = std 'import game'
math = std 'import math'

http = require 'http'
sys = require 'sys'
io = require 'socket.io'

class server
	constructor: (@port) ->
		debug.write "Starting game server..."
	
		@server = http.createServer (req, res) ->
		
		@server.listen @port
		
		socket = io.listen @server
		
		socket.on 'connection', (client) ->
			debug.write "Client connected."
			
			client.id = math.floor math.random() * 99999
			client.player = new game.player
			client.player.id = math.floor math.random() * 99999
			
			@clients[client.id] = client
			
			client.on 'message', (message) ->
				debug.write "Client message received."
				
				if message.command == 'update<player:position>'
					debug.write "Broadcasting player position.", message.position
				
					client.player.position = message.position
				
					socket.broadcast
						command: message.command
						position: message.position
						player: 
							id: client.player.id
			
			client.on 'disconnect', () ->
				debug.write "Client disconnected."
				
				for i, c1 of clients
					debug.write "Telling other player to remove player."
					
					@clients[i].send
						command: 'remove<player>'
						player: client.player
						control: false
				
				core.object::remove @clients, client.id
			
			client.send
				command: 'create<world>'
			
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
				
				debug.write "Telling new player to create old player."
				
				client.send
					command: 'create<player>'
					player: @clients[i].player
					control: false
				
				debug.write "Telling old player to create new player."
				
				@clients[i].send
					command: 'create<player>'
					player: client.player
					control: false

	server: null
	port: 0
	clients: {}

server:: = core.mixin server::, core.base::

exports.server = server
