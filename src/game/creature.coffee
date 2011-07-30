core = std('import core')
game = std('import game')

base = core.mixin game.npc

class monster extends base
	constructor: () ->

exports.monster = monster