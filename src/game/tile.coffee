core = std 'import core'
game = std 'import game'

base = core.mixin game.object

class tile extends base
	constructor: (options) ->
		super(options)


exports.tile = tile