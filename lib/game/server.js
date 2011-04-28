(function() {
  var core, debug, game, http, io, math, server, sys;
  core = std('import core');
  debug = std('import debug');
  game = std('import game');
  math = std('import math');
  http = require('http');
  sys = require('sys');
  io = require('socket.io');
  server = (function() {
    function server(port) {
      var socket;
      this.port = port;
      debug.write("Starting game server...");
      this.server = http.createServer(function(req, res) {});
      this.server.listen(this.port);
      socket = io.listen(this.server);
      socket.on('connection', function(client) {
        var c1, i, _ref, _results;
        debug.write("Client connected.");
        client.id = math.floor(math.random() * 99999);
        client.player = new game.player;
        client.player.id = math.floor(math.random() * 99999);
        this.clients[client.id] = client;
        client.on('message', function(message) {
          debug.write("Client message received.");
          if (message.command === 'update<player:position>') {
            debug.write("Broadcasting player position.", message.position);
            client.player.position = message.position;
            return socket.broadcast({
              command: message.command,
              position: message.position,
              player: {
                id: client.player.id
              }
            });
          }
        });
        client.on('disconnect', function() {
          var c1, i;
          debug.write("Client disconnected.");
          for (i in clients) {
            c1 = clients[i];
            debug.write("Telling other player to remove player.");
            this.clients[i].send({
              command: 'remove<player>',
              player: client.player,
              control: false
            });
          }
          return core.object.prototype.remove(this.clients, client.id);
        });
        client.send({
          command: 'create<world>'
        });
        client.send({
          command: 'create<player>',
          player: client.player,
          control: true
        });
        client.send({
          command: 'target<player>',
          player: client.player
        });
        _ref = this.clients;
        _results = [];
        for (i in _ref) {
          c1 = _ref[i];
          if (this.clients[i].player.id === client.player.id) {
            continue;
          }
          debug.write("Telling new player to create old player.");
          client.send({
            command: 'create<player>',
            player: this.clients[i].player,
            control: false
          });
          debug.write("Telling old player to create new player.");
          _results.push(this.clients[i].send({
            command: 'create<player>',
            player: client.player,
            control: false
          }));
        }
        return _results;
      });
    }
    server.prototype.server = null;
    server.prototype.port = 0;
    server.prototype.clients = {};
    return server;
  })();
  server.prototype = core.mixin(server.prototype, core.base.prototype);
  exports.server = server;
}).call(this);
