(function() {
  var core, debug, game, math, server;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  core = std('import core');
  debug = std('import debug');
  game = std('import game');
  math = std('import math');
  server = (function() {
    function server(options) {
      var http, io, socket;
      $.extend(true, this, options);
      io = require('socket.io');
      http = require('http');
      debug.write("Starting game server...", {
        level: 9
      });
      this.server = http.createServer(__bind(function(req, res) {}, this));
      this.server.listen(this.port);
      socket = io.listen(this.server);
      socket.on('connection', __bind(function(client) {
        var c1, i, _ref, _results;
        debug.write("Client connected.", {
          level: 9
        });
        client.id = math.floor(math.random() * 99999);
        client.player = new game.player;
        client.player.id = math.floor(math.random() * 99999);
        this.clients[client.id] = client;
        client.on('message', __bind(function(message) {
          debug.write("Client message received.", {
            level: 9
          });
          if (message.command === 'update<player:position>') {
            debug.write("Broadcasting player position.", message.position, {
              level: 9
            });
            client.player.position = math.vector.prototype.from_object(message.position);
            return socket.broadcast({
              command: message.command,
              position: message.position,
              player: {
                id: client.player.id
              }
            });
          }
        }, this));
        client.on('disconnect', __bind(function() {
          var c1, i, _ref;
          debug.write("Client disconnected.");
          _ref = this.clients;
          for (i in _ref) {
            c1 = _ref[i];
            debug.write("Telling other player to remove player.", client.player, {
              level: 9
            });
            this.clients[i].send({
              command: 'remove<player>',
              player: {
                id: client.player.id
              },
              control: false
            });
          }
          return core.object.prototype.remove(this.clients, client.id);
        }, this));
        debug.write("Telling new player to create world.", {
          level: 9
        });
        client.send({
          command: 'create<world>'
        });
        debug.write("Telling new player to create itself.", client.player, {
          level: 9
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
          debug.write("Telling new player to create old player.", this.clients[i].player, {
            level: 9
          });
          client.send({
            command: 'create<player>',
            player: this.clients[i].player,
            control: false
          });
          debug.write("Telling old player to create new player.", client.player, {
            level: 9
          });
          _results.push(this.clients[i].send({
            command: 'create<player>',
            player: client.player,
            control: false
          }));
        }
        return _results;
      }, this));
    }
    server.prototype.server = null;
    server.prototype.port = null;
    server.prototype.clients = {};
    return server;
  })();
  exports.server = server;
}).call(this);
