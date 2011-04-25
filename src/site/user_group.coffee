core = std('import core')

class user_group
	constructor: () ->
	
	title: ''

user_group:: = core.mixin(user_group::, core.object::)

exports.user_group = user_group