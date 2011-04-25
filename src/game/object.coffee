core = std 'import core'
game = std 'import game'

class object
	constructor: () ->

  
object:: = core.mixin object::, core.object::

exports.object = object