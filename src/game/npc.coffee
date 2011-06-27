core = std 'import core'
game = std 'import game'

base = core.mixin game.object

class npc extends base
	constructor: () ->


exports.npc = npc