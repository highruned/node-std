core = std 'import core'

base = core.mixin core.object

class user_group extends base
	constructor: () ->
	
	title: ''

exports.user_group = user_group