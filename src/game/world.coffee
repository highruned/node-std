core = std 'import core'
game = std 'import game'

class world
	constructor: () ->

  
world:: = core.mixin world::, core.object::

exports.world = world