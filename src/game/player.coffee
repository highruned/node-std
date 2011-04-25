core = std 'import core'
game = std 'import game'

class player
	constructor: () ->

  
player:: = core.mixin player::, game.npc::

exports.player = player