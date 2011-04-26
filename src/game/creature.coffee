core = std('import core')
game = std('import game')

class monster
	constructor: () ->

  
monster:: = core.mixin(monster::, game.npc::)

exports.monster = monster