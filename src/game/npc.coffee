core = std('import core')
game = std('import game')

class npc
	constructor: () ->

  
npc:: = core.mixin(npc::, game.object::)

exports.npc = npc